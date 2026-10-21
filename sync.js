// Синхронизация слов и прогресса между устройствами через секретную заметку (gist) на GitHub.
// Ключ доступа хранится только в браузере этого устройства.
(function () {
  "use strict";
  const WKEY = "english_words_v1", RKEY = "english_reader_v1", CKEY = "english_sync_v1";
  const FILE = "english-sync.json", API = "https://api.github.com";
  const listeners = [], statusListeners = [];
  let busy = false, again = false, timer = null, dirty = false;

  const cfg = () => { try { return JSON.parse(localStorage.getItem(CKEY)) || {}; } catch (e) { return {}; } };
  const setCfg = c => { try { localStorage.setItem(CKEY, JSON.stringify(c)); } catch (e) {} };
  const readLocal = k => { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } };
  const writeLocal = (k, v) => { if (v) localStorage.setItem(k, JSON.stringify(v)); };
  const cmod = c => c.mod || c.added || 0;

  async function gh(path, opt = {}, token) {
    const r = await fetch(API + path, {
      method: opt.method || "GET", cache: "no-store",
      headers: { Authorization: "Bearer " + (token || cfg().token), Accept: "application/vnd.github+json", ...(opt.body ? { "Content-Type": "application/json" } : {}) },
      body: opt.body ? JSON.stringify(opt.body) : undefined
    });
    if (r.status === 401 || r.status === 403) throw new Error("auth");
    if (r.status === 404) throw new Error("notfound");
    if (!r.ok) throw new Error("http");
    return r.json();
  }
  async function findGist(token) {
    const c = cfg();
    if (c.gistId) {
      try { return await gh("/gists/" + c.gistId, {}, token); }
      catch (e) { if (e.message !== "notfound") throw e; }
    }
    for (let page = 1; page <= 5; page++) {
      const list = await gh(`/gists?per_page=100&page=${page}`, {}, token);
      const g = list.find(x => x.files && x.files[FILE]);
      if (g) return gh("/gists/" + g.id, {}, token);
      if (list.length < 100) break;
    }
    return null;
  }
  async function readGist(g) {
    const f = g && g.files && g.files[FILE];
    if (!f) return null;
    let text = f.content;
    if (f.truncated) text = await (await fetch(f.raw_url, { cache: "no-store" })).text();
    try { return JSON.parse(text); } catch (e) { return null; }
  }
  async function writeGist(id, payload) {
    const files = { [FILE]: { content: JSON.stringify(payload) } };
    if (id) return gh("/gists/" + id, { method: "PATCH", body: { files } });
    return gh("/gists", { method: "POST", body: { description: "English trainer sync (не удалять)", public: false, files } });
  }

  // ---------- merging ----------
  function mergeWords(a, b, dedupe) {
    if (!a || !a.cards) return b; if (!b || !b.cards) return a;
    const del = { ...(a.deleted || {}) };
    Object.entries(b.deleted || {}).forEach(([k, v]) => { del[k] = Math.max(del[k] || 0, v); });
    const map = new Map();
    [...a.cards, ...b.cards].forEach(c => { const o = map.get(c.id); if (!o || cmod(c) > cmod(o)) map.set(c.id, c); });
    let cards = [...map.values()].filter(c => !(del[c.id] && del[c.id] >= cmod(c)));
    if (dedupe) { // первое объединение: одно и то же слово, добавленное на двух устройствах
      const by = new Map(), now = Date.now();
      cards.forEach(c => {
        const k = c.en.toLowerCase().trim(), o = by.get(k);
        if (!o) { by.set(k, c); return; }
        const keep = (c.reps || 0) > (o.reps || 0) || ((c.reps || 0) === (o.reps || 0) && cmod(c) > cmod(o)) ? c : o;
        del[(keep === c ? o : c).id] = now; by.set(k, keep);
      });
      cards = [...by.values()];
    }
    const days = { ...(a.days || {}) };
    Object.entries(b.days || {}).forEach(([d, v]) => {
      const o = days[d] || { rev: 0, new: 0 };
      days[d] = { rev: Math.max(o.rev || 0, v.rev || 0), new: Math.max(o.new || 0, v.new || 0) };
    });
    const newerSet = (b.setMod || 0) > (a.setMod || 0) ? b : a;
    return {
      ...a, cards, deleted: del, days,
      settings: newerSet.settings || a.settings, setMod: Math.max(a.setMod || 0, b.setMod || 0),
      lastBackup: Math.max(a.lastBackup || 0, b.lastBackup || 0) || undefined
    };
  }
  const shareReader = r => r ? { done: r.done || {}, custom: r.custom || [], deleted: r.deleted || {} } : null;
  function mergeReader(local, remote) {
    if (!remote) return local; if (!local) return remote;
    const deleted = { ...(local.deleted || {}) };
    Object.entries(remote.deleted || {}).forEach(([k, v]) => { deleted[k] = Math.max(deleted[k] || 0, v); });
    const done = { ...(local.done || {}) };
    Object.entries(remote.done || {}).forEach(([k, v]) => { if (!done[k] || (v.at || 0) > (done[k].at || 0)) done[k] = v; });
    const cm = new Map();
    [...(local.custom || []), ...(remote.custom || [])].forEach(t => { if (!deleted[t.id]) cm.set(t.id, t); });
    return { ...local, done, custom: [...cm.values()], deleted };
  }

  // ---------- main ----------
  function notify() { const s = status(); statusListeners.forEach(f => { try { f(s); } catch (e) {} }); }
  function status() { const c = cfg(); return { on: !!c.token, busy, last: c.last || 0, err: c.err || "" }; }

  async function run(mode) {
    const c = cfg(); if (!c.token) return false;
    if (busy) { again = true; return false; }
    busy = true; dirty = false; notify();
    let ok = false;
    try {
      const g = await findGist();
      const remote = g ? await readGist(g) : null;
      const lw = readLocal(WKEY), lr = readLocal(RKEY);
      let w, r;
      if (mode === "pull" && remote) { w = remote.words || lw; r = { ...(lr || {}), ...(remote.reader || {}) }; }
      else if (mode === "push" || !remote) { w = lw; r = lr; }
      else { w = mergeWords(lw, remote.words, mode === "first"); r = mergeReader(lr, remote.reader); }
      writeLocal(WKEY, w); writeLocal(RKEY, r);
      const data = { words: w || null, reader: shareReader(r) };
      const changed = !remote || JSON.stringify(data) !== JSON.stringify({ words: remote.words || null, reader: remote.reader || null });
      let id = g && g.id;
      if (changed) { const res = await writeGist(id, { v: 1, ...data, updated: Date.now() }); id = res.id; }
      const c2 = cfg(); c2.gistId = id; c2.last = Date.now(); c2.err = ""; setCfg(c2);
      ok = true;
      listeners.forEach(f => { try { f(); } catch (e) {} });
    } catch (e) {
      const c2 = cfg(); c2.err = e.message === "auth" ? "Ключ не подходит или истёк" : "Нет связи с GitHub, попробую позже"; setCfg(c2);
    } finally {
      busy = false; notify();
      if (again) { again = false; setTimeout(() => run(), 300); }
    }
    return ok;
  }

  window.Sync = {
    status, onUpdate: f => listeners.push(f), onStatus: f => statusListeners.push(f),
    // проверить ключ и узнать, есть ли уже данные в облаке
    async probe(token) {
      token = token.trim();
      const g = await findGist(token);
      const remote = g ? await readGist(g) : null;
      return { gistId: g ? g.id : null, remoteCards: remote && remote.words && remote.words.cards ? remote.words.cards.length : 0 };
    },
    async connect(token, gistId, mode) {
      setCfg({ token: token.trim(), gistId: gistId || undefined });
      return run(mode || "first");
    },
    disconnect() { setCfg({}); notify(); },
    token: () => cfg().token || "",
    run: () => run(),
    touch() { // после любого изменения: синхронизировать через несколько секунд
      if (!cfg().token) return;
      dirty = true; clearTimeout(timer); timer = setTimeout(() => run(), 4000);
    }
  };
  document.addEventListener("visibilitychange", () => {
    if (!cfg().token) return;
    if (document.visibilityState === "hidden" && dirty) { clearTimeout(timer); run(); }
    if (document.visibilityState === "visible" && Date.now() - (cfg().last || 0) > 30000) run();
  });
  window.addEventListener("online", () => { if (cfg().token) run(); });
  if (cfg().token) setTimeout(() => run(), 500);
})();
