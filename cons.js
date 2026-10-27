// Закрепление слов: три ступени — чтение, письмо, речь.
// Работает внутри index.html и пользуется его данными (S, save, speak и т. д.).
// Ступень слова (card.cons.st): 0 узнаю → 1 понимаю → 2 пишу → 3 говорю.
(function () {
  "use strict";

  const LV = ["узнаю", "понимаю", "пишу", "говорю"];
  const LV_ICON = ["🙂", "📖", "✍️", "🗣️"];
  const TASK = [
    { name: "Чтение", icon: "📖" },
    { name: "Письмо", icon: "✍️" },
    { name: "Речь", icon: "🗣️" }
  ];
  const LOG_MAX = 300, PACK_MAX = 800;
  const RKEY = "english_reader_v1";

  // ---------- стили ----------
  const css = `
  .cons-ladder{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;text-align:center}
  .cons-ladder div{background:var(--bg);border-radius:12px;padding:10px 2px}
  .cons-ladder b{display:block;font-size:22px}
  .cons-ladder span{font-size:12px;color:var(--muted)}
  .cons-ladder i{font-style:normal;font-size:18px;display:block}
  .cons-arrow{text-align:center;color:var(--muted);font-size:12px;margin-top:8px}
  .cons-top{display:flex;justify-content:space-between;font-size:12px;color:var(--muted);text-transform:uppercase;letter-spacing:.04em;margin-bottom:12px}
  .cons-bar{height:4px;background:var(--line);border-radius:4px;margin:-4px 0 14px;overflow:hidden}
  .cons-bar div{height:100%;background:var(--accent);border-radius:4px;transition:width .3s}
  .cons-q{font-size:15px;color:var(--muted);margin-bottom:8px}
  .cons-s{font-size:21px;line-height:1.5;margin-bottom:6px;word-break:break-word}
  .cons-s b{color:var(--accent)}
  .cons-w{font-size:32px;font-weight:700;text-align:center;margin:10px 0 0}
  .cons-hint{font-size:15px;color:var(--muted);margin-top:4px}
  .gap{display:inline-block;min-width:70px;border-bottom:2px solid var(--accent);color:var(--accent);text-align:center}
  .opts{display:grid;gap:8px;margin-top:16px}
  .opt{background:var(--bg);color:var(--text);border:1px solid var(--line);text-align:left;font-weight:500;padding:13px 14px}
  .opt.right{background:var(--good);border-color:var(--good);color:#fff}
  .opt.wrong{background:var(--again);border-color:var(--again);color:#fff}
  .fb{border-radius:12px;padding:12px 14px;margin-top:14px;font-size:15px}
  .fb.ok{background:rgba(47,158,91,.13)}
  .fb.bad{background:rgba(229,72,77,.12)}
  .fb.mid{background:rgba(232,137,12,.13)}
  .fb .r{font-size:17px;margin-top:6px}
  .fb s{color:var(--again);text-decoration:line-through}
  .fb u{color:var(--good);text-decoration:none;font-weight:600}
  .mic{width:86px;height:86px;border-radius:50%;font-size:36px;padding:0;display:block;margin:18px auto 6px}
  .mic.rec{background:var(--again);animation:pulse 1.2s infinite}
  @keyframes pulse{0%{box-shadow:0 0 0 0 rgba(229,72,77,.45)}100%{box-shadow:0 0 0 18px rgba(229,72,77,0)}}
  .live{min-height:26px;text-align:center;font-size:17px;color:var(--muted);font-style:italic;margin-top:6px}
  .btns{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
  .btns>*{flex:1 1 140px}
  .logi{padding:10px 0;border-bottom:1px solid var(--line);font-size:14px}
  .logi:last-child{border-bottom:none}
  .logi .a{font-size:15px;margin:2px 0}
  .badge{display:inline-block;font-size:12px;padding:1px 8px;border-radius:999px;background:var(--bg);border:1px solid var(--line);color:var(--muted)}
  .up{padding:6px 0;border-bottom:1px solid var(--line)}
  .up:last-child{border-bottom:none}`;
  const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  // ---------- данные ----------
  const cons = c => Object.assign({ st: 0, next: 0, ok: 0, bad: 0 }, c.cons || {});
  function setCons(c, patch) { c.cons = Object.assign(cons(c), patch); c.mod = Date.now(); }
  const lastRev = c => (c.due || 0) - (c.ivl || 0) * DAY;
  const reviewCards = () => S.cards.filter(c => c.state === "review");
  const eligible = () => { const now = Date.now(); return reviewCards().filter(c => cons(c).st < 3 && (cons(c).next || 0) <= now); };
  const sessionSize = () => S.settings.consN || 10;
  const useMic = () => S.settings.consMic !== false;
  const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pickOne = a => a[Math.floor(Math.random() * a.length)];
  const fmtDate = t => new Date(t).toLocaleDateString("ru-RU", { day: "numeric", month: "short" });

  // ---------- сравнение текста ----------
  const CONTR = [[/\bcan't\b/g, "cannot"], [/\bwon't\b/g, "will not"], [/\bshan't\b/g, "shall not"], [/n't\b/g, " not"],
    [/'re\b/g, " are"], [/'m\b/g, " am"], [/'ll\b/g, " will"], [/'ve\b/g, " have"], [/'d\b/g, " would"],
    [/\b(it|that|what|there|he|she|who|here|where)'s\b/g, "$1 is"], [/\blet's\b/g, "let us"], [/\bcan not\b/g, "cannot"]];
  function norm(s) {
    s = String(s || "").toLowerCase().replace(/[’‘`]/g, "'");
    CONTR.forEach(([r, v]) => { s = s.replace(r, v); });
    return s.replace(/[^a-z0-9' ]+/g, " ").replace(/(^|[^a-z])'+/g, "$1 ").replace(/'+(?![a-z])/g, " ").replace(/\s+/g, " ").trim();
  }
  function lev(a, b) {
    const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, j) => j);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[n];
  }
  const words = s => norm(s).split(" ").filter(Boolean);
  function sim(a, b) { const A = words(a), B = words(b); if (!A.length && !B.length) return 1; return 1 - lev(A, B) / Math.max(A.length, B.length); }
  function charSim(a, b) { a = norm(a); b = norm(b); if (!a && !b) return 1; return 1 - lev(a, b) / Math.max(a.length, b.length); }

  // ---------- поиск слова в предложении (с учётом форм) ----------
  const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  function core(en) {
    let s = String(en || "").toLowerCase().replace(/[’]/g, "'").replace(/\([^)]*\)|\[[^\]]*\]/g, " ").split(/[\/;,]/)[0];
    s = s.replace(/\b(sth|smth|smb|sb|something|someone|somebody|one's|oneself)\b/g, " ")
      .replace(/^\s*to\s+(?=[a-z])/, "").replace(/[^a-z' -]+/g, " ").replace(/\s+/g, " ").trim();
    return s;
  }
  function tokRe(t) {
    let s;
    if (/[^aeiou]y$/.test(t) && t.length > 2) s = reEsc(t.slice(0, -1)) + "(?:y|i)";
    else if (/e$/.test(t) && t.length > 3) s = reEsc(t.slice(0, -1)) + "e?";
    else if (t.length > 2) s = reEsc(t) + reEsc(t.slice(-1)) + "?";
    else s = reEsc(t);
    return s + "(?:s|es|ed|d|ing|'s)?";
  }
  function wordRe(en) {
    const toks = core(en).split(/[\s-]+/).filter(Boolean);
    if (!toks.length) return null;
    const body = toks.map(tokRe).join("(?:[\\s-]+[a-z']+){0,2}?[\\s-]+");
    try { return new RegExp("(^|[^a-z'])(" + body + ")(?![a-z'])", "i"); } catch (e) { return null; }
  }
  function findWord(sent, en) {
    const r = wordRe(en); if (!r || !sent) return null;
    const m = r.exec(String(sent).replace(/’/g, "'"));
    if (!m) return null;
    const start = m.index + m[1].length;
    return { start, end: start + m[2].length, text: String(sent).slice(start, start + m[2].length) };
  }

  // ---------- задания ----------
  function packItems(c) {
    const p = S.pack; if (!p || !Array.isArray(p.items)) return [];
    const k = c.en.toLowerCase().trim();
    return p.items.filter(it => String(it.w || "").toLowerCase().trim() === k && it.ru && Array.isArray(it.en) && it.en.length);
  }
  function clozeSents(c) {
    const out = [], seen = new Set();
    const add = (en, ru) => { const m = findWord(en, c.en); if (m && !seen.has(en)) { seen.add(en); out.push({ en, ru: ru || "", m }); } };
    if (c.ex) add(c.ex, "");
    packItems(c).forEach(it => add(it.en[0], it.ru));
    return out;
  }
  const FILL_EN = ["window", "decide", "quiet", "borrow", "travel", "careful", "answer", "neighbour", "weather", "promise"];
  const FILL_RU = ["окно", "решать", "тихий", "одалживать", "путешествовать", "осторожный", "ответ", "сосед", "погода", "обещать"];
  function distract(c, field, n) {
    const mine = String(c[field]).toLowerCase().trim(), seen = new Set([mine]), out = [];
    shuffle(S.cards.filter(x => x.id !== c.id && x[field])).forEach(x => {
      const k = String(x[field]).toLowerCase().trim();
      if (out.length < n && !seen.has(k)) { seen.add(k); out.push(x[field]); }
    });
    shuffle((field === "en" ? FILL_EN : FILL_RU).slice()).forEach(w => { if (out.length < n && !seen.has(w)) { seen.add(w); out.push(w); } });
    return out;
  }
  function makeTask(c) {
    const s = cons(c).st, cl = clozeSents(c), pk = packItems(c);
    if (s === 0) {
      if (cl.length) {
        const x = pickOne(cl);
        if (Math.random() < 0.5) return { k: "r-gap", s: x, opts: shuffle([c.en, ...distract(c, "en", 3)]), right: c.en };
        return { k: "r-mean", s: x, opts: shuffle([c.ru, ...distract(c, "ru", 3)]), right: c.ru };
      }
      if (Math.random() < 0.5) return { k: "r-word", opts: shuffle([c.ru, ...distract(c, "ru", 3)]), right: c.ru };
      return { k: "r-back", opts: shuffle([c.en, ...distract(c, "en", 3)]), right: c.en };
    }
    if (s === 1) {
      if (pk.length) return { k: "w-tr", it: pickOne(pk) };
      if (cl.length && Math.random() < 0.6) return { k: "w-gap", s: pickOne(cl) };
      return { k: "w-free" };
    }
    if (pk.length) return { k: "s-tr", it: pickOne(pk) };
    if (cl.length && Math.random() < 0.5) return { k: "s-gap", s: pickOne(cl) };
    return { k: "s-free" };
  }

  // ---------- сессия ----------
  let run = null;      // { tasks, i, res: [] }
  let ui = {};         // состояние текущего задания
  let rec = null;      // распознавание речи

  function start() {
    const list = eligible().sort((a, b) => lastRev(b) - lastRev(a)).slice(0, sessionSize());
    if (!list.length) { render(); return; }
    const tasks = shuffle(list.map(c => Object.assign({ cid: c.id, st: cons(c).st }, makeTask(c)))).sort((a, b) => a.st - b.st);
    run = { tasks, i: 0, res: [] };
    ui = {}; render();
  }
  function stop() { stopRec(); run = null; ui = {}; render(); }
  const curTask = () => run && run.tasks[run.i];
  const curCard = () => { const t = curTask(); return t && getCard(t.cid); };

  // итог задания: pass — ступень вверх; fail — ошибка, слово раньше вернётся в тренажёр; hold — без изменений
  function finish(mode) {
    const c = curCard(), t = curTask(); if (!c || !t || ui.done) return;
    ui.done = true;
    const cs = cons(c), tomorrow = dayStart() + DAY, now = Date.now();
    if (mode === "pass") setCons(c, { st: Math.min(3, cs.st + 1), next: tomorrow, ok: cs.ok + 1, at: now });
    else if (mode === "fail") {
      setCons(c, { next: tomorrow, bad: cs.bad + 1, at: now });
      if (c.state === "review") { c.ivl = Math.max(1, Math.round(c.ivl * 0.6)); c.due = Math.min(c.due, tomorrow); }
    } else setCons(c, { next: tomorrow, at: now });
    const d = day(); d.cons = (d.cons || 0) + 1;
    run.res.push({ cid: c.id, w: c.en, from: cs.st, mode });
    save();
  }
  function logAns(ans, res, extra) {
    const c = curCard(), t = curTask(); if (!c || !t) return;
    S.consLog = Array.isArray(S.consLog) ? S.consLog : [];
    S.consLog.push(Object.assign({ id: uid(), at: Date.now(), w: c.en, ru: c.ru, kind: t.k[0] === "w" ? "write" : "speak", type: t.k.slice(2), a: ans, res }, promptOf(t, c), extra || {}));
    if (S.consLog.length > LOG_MAX) S.consLog = S.consLog.slice(-LOG_MAX);
  }
  function promptOf(t, c) {
    if (t.k.endsWith("-tr")) return { q: t.it.ru, ref: t.it.en[0] };
    if (t.k.endsWith("-gap")) return { q: gapText(t.s), ref: t.s.en };
    return { q: "Своё предложение со словом «" + c.en + "»", ref: c.ex || "" };
  }
  function next() {
    stopRec();
    if (!run) return;
    run.i++; ui = {};
    render();
  }

  // ---------- проверка ответов ----------
  function judge(answers, refs, c, need) {
    let bestV = null;
    answers.forEach(ans => {
      const has = !!findWord(ans, c.en);
      let best = -1, ref = refs[0], ch = 0;
      refs.forEach(r => { const s = sim(ans, r); if (s > best) { best = s; ref = r; } ch = Math.max(ch, charSim(ans, r)); });
      let v = "bad";
      if (refs.some(r => norm(r) === norm(ans))) v = "ok";
      else if (has && (best >= need || ch >= 0.94)) v = "close";
      const score = { ok: 3, close: 2, bad: 1 }[v] + best / 10;
      if (!bestV || score > bestV.score) bestV = { v, ref, has, ans, score };
    });
    return bestV;
  }
  function judgeGap(ans, t, c) {
    const a = norm(ans), want = norm(t.s.m.text);
    if (!a) return { v: "bad" };
    if (a === want) return { v: "ok" };
    if (findWord(ans, c.en) && words(ans).length === words(t.s.m.text).length) return { v: "form" };
    const d = lev(a, want);
    if (want.length >= 4 && d <= 1) return { v: "typo" };
    return { v: "bad" };
  }
  // подсветка различий: лишние/неверные слова ответа и недостающие слова эталона
  function diff(ans, ref) {
    const A = String(ans).split(/\s+/).filter(Boolean), refSet = new Set(words(ref));
    const ansSet = new Set(words(ans));
    const a = A.map(w => { const n = norm(w); return n && !n.split(" ").every(x => refSet.has(x)) ? `<s>${esc(w)}</s>` : esc(w); }).join(" ");
    const r = String(ref).split(/\s+/).filter(Boolean).map(w => { const n = norm(w); return n && !n.split(" ").every(x => ansSet.has(x)) ? `<u>${esc(w)}</u>` : esc(w); }).join(" ");
    return { a, r };
  }

  // ---------- речь ----------
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const MIC_ERR = {
    "not-allowed": "Нет доступа к микрофону. Разреши его для сайта в настройках браузера.",
    "service-not-allowed": "Браузер не разрешает распознавание речи. Попробуй Chrome.",
    "network": "Сервис распознавания речи недоступен. Попробуй включить VPN или ответь без микрофона.",
    "no-speech": "Ничего не услышал. Нажми на микрофон и говори громче.",
    "audio-capture": "Микрофон не найден.",
    "unsupported": "Этот браузер не умеет распознавать речь. Открой сайт в Chrome или отвечай без микрофона.",
    "language-not-supported": "Браузер не распознаёт английский. Попробуй Chrome."
  };
  function listen(onLive, onDone, onErr) {
    if (!SR) { onErr("unsupported"); return; }
    stopRec();
    let r;
    try { r = new SR(); } catch (e) { onErr("unsupported"); return; }
    r.lang = S.settings.accent || "en-US"; r.interimResults = true; r.maxAlternatives = 3; r.continuous = false;
    let finals = null, err = null;
    r.onresult = e => {
      let txt = ""; for (let i = 0; i < e.results.length; i++) txt += e.results[i][0].transcript;
      onLive(txt);
      if (Array.from(e.results).every(x => x.isFinal)) {
        finals = e.results.length === 1 ? Array.from(e.results[0]).map(a => a.transcript) : [txt];
      }
    };
    r.onerror = e => { err = e.error; };
    r.onend = () => { if (rec !== r) return; rec = null; if (finals && finals.some(x => x.trim())) onDone(finals.filter(x => x.trim())); else onErr(err || "no-speech"); };
    rec = r;
    try { r.start(); } catch (e) { rec = null; onErr("unsupported"); }
  }
  function stopRec() { if (rec) { const r = rec; try { r.stop(); } catch (e) {} } }
  function abortRec() { if (rec) { const r = rec; rec = null; try { r.abort(); } catch (e) {} } }

  // ---------- отрисовка ----------
  const V = () => document.querySelector("#v-cons");
  function gapText(s) { return s.en.slice(0, s.m.start) + "_____" + s.en.slice(s.m.end); }
  function gapHtml(s) { return esc(s.en.slice(0, s.m.start)) + `<span class="gap">?</span>` + esc(s.en.slice(s.m.end)); }
  function markHtml(s) { return esc(s.en.slice(0, s.m.start)) + `<b>${esc(s.m.text)}</b>` + esc(s.en.slice(s.m.end)); }
  const sayBtn = (text, label) => `<button class="plain" data-say-text="${esc(text)}" aria-label="Озвучить">🔊${label ? " " + label : ""}</button>`;

  function render() {
    const v = V(); if (!v) return;
    if (run && run.i >= run.tasks.length) { renderDone(); return; }
    if (run) { renderTask(); return; }
    renderHome();
  }

  function ladder() {
    const n = [0, 0, 0, 0];
    reviewCards().forEach(c => n[cons(c).st]++);
    return n;
  }
  function renderHome() {
    const v = V();
    const n = ladder(), el = eligible(), total = reviewCards().length, size = sessionSize();
    let html = `<div class="box"><h2>💪 Закрепление</h2>
      <div class="cons-ladder">${LV.map((t, i) => `<div><i>${LV_ICON[i]}</i><b>${n[i]}</b><span>${t}</span></div>`).join("")}</div>
      <div class="cons-arrow">чтение → письмо → речь: каждое слово поднимается на ступень не чаще раза в день</div>
      <div style="height:14px"></div>`;
    if (!S.cards.length || !total) {
      html += `<p class="muted center" style="margin:0">Сюда попадают слова, которые в тренажёре перешли на повторение (после первых дней изучения). Поучи слова, и они появятся здесь.</p>`;
    } else if (el.length) {
      const k = Math.min(el.length, size);
      html += `<button class="wide" id="c-start">Начать (${k} ${plural(k, "задание", "задания", "заданий")})</button>`;
      if (el.length > size) html += `<p class="muted center" style="margin:8px 0 0">Ещё ${el.length - size} ${plural(el.length - size, "слово ждёт", "слова ждут", "слов ждут")}: после этого круга можно пройти ещё один.</p>`;
    } else {
      const done = n[3] === total;
      html += `<p class="center" style="margin:0">✅ На сегодня всё!</p><p class="muted center" style="margin-bottom:0">${done ? "Все слова на повторении уже на ступени «говорю»." : "Слова, которые сегодня поднялись на ступень, ждут следующую до завтра."}</p>`;
    }
    html += `</div>`;

    // неделя с Claude
    const p = S.pack, unsent = (S.consLog || []).filter(e => e.at > (S.consSent || 0)).length;
    const stale = !p || Date.now() - (p.at || 0) > 7 * DAY;
    const pw = p ? new Set((p.items || []).map(i => String(i.w).toLowerCase())).size : 0;
    html += `<div class="box"><h2>📦 Неделя с Claude</h2>
      <p class="muted" style="margin-top:0">${p
        ? `Задания от Claude загружены ${fmtDate(p.at)}: предложения для ${pw} ${plural(pw, "слова", "слов", "слов")}.`
        : "Пока задания строятся из примеров к словам. Раз в неделю Claude проверит твои ответы и пришлёт новые предложения для перевода и текст недели."}
      <br>Ответов ждут проверки: <b>${unsent}</b></p>
      ${stale && (unsent || total) ? `<div class="hint">🗓️ Пора отправить неделю Claude: скопируй, вставь в чат с Claude, потом загрузи его ответ сюда.</div>` : ""}
      <button class="ghost wide" id="c-exp">📋 Скопировать для Claude</button><div style="height:8px"></div><button class="ghost wide" id="c-imp">📥 Вставить ответ Claude</button>
      <div class="center" style="margin-top:6px"><button class="plain" id="c-log">🗂️ Мои ответы</button></div>
    </div>`;

    html += `<div class="box"><h2>⚙️ Настройки закрепления</h2>
      <label for="c-n">Заданий за раз</label>
      <select id="c-n">${[6, 10, 15, 20].map(x => `<option value="${x}" ${x === size ? "selected" : ""}>${x}</option>`).join("")}</select>
      <label class="row" style="gap:8px;color:var(--text);margin-top:12px"><input type="checkbox" id="c-mic" ${useMic() ? "checked" : ""} style="width:auto;flex:none"> Отвечать голосом через микрофон</label>
      <div style="height:10px"></div><button class="ghost wide" id="c-test">🎤 Проверить микрофон</button>
    </div>`;
    v.innerHTML = html;
  }

  function header(t, c) {
    const T = TASK[t.st];
    const pct = Math.round(run.i / run.tasks.length * 100);
    return `<div class="cons-top"><span>${T.icon} ${T.name} · ${LV[t.st]} → ${LV[t.st + 1]}</span><span>${run.i + 1} / ${run.tasks.length}</span></div>
      <div class="cons-bar"><div style="width:${pct}%"></div></div>`;
  }

  function renderTask() {
    const v = V(), t = curTask(), c = curCard();
    if (!c) { next(); return; }
    let body = "";
    const kind = t.k;
    if (kind[0] === "r") body = readTask(t, c);
    else if (kind[0] === "w") body = writeTask(t, c);
    else body = speakTask(t, c);
    v.innerHTML = `<div class="box">${header(t, c)}${body}</div>
      <div class="center" style="margin-top:4px"><button class="plain" id="c-stop">Закончить сейчас</button></div>`;
    const inp = v.querySelector("#c-in");
    if (inp && !ui.res) setTimeout(() => inp.focus(), 30);
    const nx = v.querySelector("#c-next");
    if (nx && !inp) setTimeout(() => nx.focus(), 30);
  }

  // ----- чтение -----
  function readTask(t, c) {
    let q = "";
    if (t.k === "r-gap") q = `<div class="cons-q">Какое слово пропущено?</div><div class="cons-s">${gapHtml(t.s)}</div>`;
    else if (t.k === "r-mean") q = `<div class="cons-q">Что значит выделенное слово?</div><div class="cons-s">${markHtml(t.s)} ${sayBtn(t.s.en)}</div>`;
    else if (t.k === "r-word") q = `<div class="cons-q">Выбери перевод</div><div class="cons-w">${esc(c.en)}</div><div class="center">${sayBtn(c.en)}</div>`;
    else q = `<div class="cons-q">Как это по-английски?</div><div class="cons-w">${esc(c.ru)}</div>`;
    const opts = `<div class="opts">${t.opts.map((o, i) => {
      let cls = "opt";
      if (ui.res) { if (o === t.right) cls += " right"; else if (i === ui.pick) cls += " wrong"; }
      return `<button class="${cls}" data-opt="${i}" ${ui.res ? "disabled" : ""}>${i + 1}. ${esc(o)}</button>`;
    }).join("")}</div>`;
    let fb = "";
    if (ui.res) {
      const ok = ui.res === "ok";
      const sent = t.s ? `<div class="r">${markHtml(t.s)} ${sayBtn(t.s.en)}</div>${t.s.ru ? `<div class="muted">${esc(t.s.ru)}</div>` : ""}` : "";
      fb = `<div class="fb ${ok ? "ok" : "bad"}">${ok ? "✅ Верно!" : "❌ Не то."} <b>${esc(c.en)}</b> — ${esc(c.ru)}${sent}
        ${ok ? `<div class="muted" style="margin-top:6px">Ступень «${LV[1]}» пройдена. Следующая — письмо, завтра или позже.</div>` : `<div class="muted" style="margin-top:6px">Слово вернётся в тренажёр завтра.</div>`}</div>
        <div style="height:12px"></div><button class="wide" id="c-next">Дальше</button>`;
    }
    return q + opts + fb;
  }
  function chooseOpt(i) {
    const t = curTask(); if (!t || ui.res || t.k[0] !== "r") return;
    ui.pick = i; ui.res = t.opts[i] === t.right ? "ok" : "bad";
    finish(ui.res === "ok" ? "pass" : "fail");
    render();
  }

  // ----- письмо -----
  function writeTask(t, c) {
    let q = "";
    if (t.k === "w-tr") q = `<div class="cons-q">Переведи на английский</div><div class="cons-s">${esc(t.it.ru)}</div>
        <div class="cons-hint">${ui.hint || ui.res ? `💡 Используй: <b>${esc(c.en)}</b> — ${esc(c.ru)}` : `<button class="plain" id="c-hint" style="padding:4px 0">💡 Подсказка</button>`}</div>`;
    else if (t.k === "w-gap") q = `<div class="cons-q">Впиши пропущенное слово</div><div class="cons-s">${gapHtml(t.s)}</div><div class="cons-hint">💡 ${esc(c.ru)}</div>`;
    else q = `<div class="cons-q">Напиши своё предложение со словом</div><div class="cons-w" style="font-size:26px">${esc(c.en)}</div><div class="center cons-hint">${esc(c.ru)}</div>
        <div class="cons-hint" style="margin-top:10px">Лучше про себя или свою жизнь: так слово запомнится крепче.</div>`;
    if (!ui.res) {
      const ph = t.k === "w-gap" ? "слово" : "Type in English...";
      return q + `<div style="height:14px"></div>
        <input id="c-in" autocomplete="off" autocapitalize="${t.k === "w-gap" ? "off" : "sentences"}" autocorrect="off" spellcheck="false" placeholder="${ph}" value="${esc(ui.draft || "")}">
        ${ui.warn ? `<div class="fb mid">${ui.warn}</div>` : ""}
        <div style="height:12px"></div>
        ${ui.warn ? `<div class="btns"><button class="ghost" id="c-fix">Исправлю</button><button id="c-send">Отправить как есть</button></div>` : `<button class="wide" id="c-check">Проверить</button>`}`;
    }
    return q + `<div style="height:6px"></div>` + resultBlock(t, c);
  }
  function submitWrite(force) {
    const t = curTask(), c = curCard(); if (!t || !c || ui.res) return;
    const inp = document.querySelector("#c-in"); const ans = (inp ? inp.value : ui.draft || "").trim();
    ui.draft = ans;
    if (!ans) { toast("Сначала напиши ответ"); return; }
    if (t.k === "w-gap") {
      const r = judgeGap(ans, t, c); ui.ans = ans; ui.res = r.v;
      if (r.v === "bad") { finish("fail"); logAns(ans, "bad"); }
      else finish("pass");
      render(); return;
    }
    if (!force) {
      if (words(ans).length < 3) { ui.warn = "Получилось совсем коротко. Попробуй целое предложение: хотя бы 3–4 слова."; render(); return; }
      if (!findWord(ans, c.en)) { ui.warn = `Не вижу в ответе слова «${esc(c.en)}». Если ты использовал другую форму (например, went вместо go), отправляй как есть.`; render(); return; }
    }
    ui.warn = ""; ui.ans = ans;
    if (t.k === "w-tr") {
      const j = judge([ans], t.it.en, c, 0.85);
      ui.j = j; ui.res = j.v === "bad" ? "ask" : j.v;
      if (j.v !== "bad") finish("pass");
    } else ui.res = "free";
    render();
  }

  // ----- речь -----
  function speakTask(t, c) {
    let q = "";
    if (t.k === "s-tr") q = `<div class="cons-q">Скажи по-английски вслух</div><div class="cons-s">${esc(t.it.ru)}</div>
        <div class="cons-hint">${ui.hint || ui.res ? `💡 Используй: <b>${esc(c.en)}</b> — ${esc(c.ru)}` : `<button class="plain" id="c-hint" style="padding:4px 0">💡 Подсказка</button>`}</div>`;
    else if (t.k === "s-gap") q = `<div class="cons-q">Прочитай вслух всё предложение, вставив слово</div><div class="cons-s">${gapHtml(t.s)}</div><div class="cons-hint">💡 ${esc(c.ru)}</div>`;
    else q = `<div class="cons-q">Скажи вслух своё предложение со словом</div><div class="cons-w" style="font-size:26px">${esc(c.en)}</div><div class="center cons-hint">${esc(c.ru)}</div>`;
    if (ui.res) return q + `<div style="height:6px"></div>` + resultBlock(t, c);
    const mic = useMic() && !ui.nomic;
    if (mic) {
      return q + `<button class="mic ${ui.rec ? "rec" : ""}" id="c-mic-go" aria-label="Говорить">${ui.rec ? "⏹" : "🎤"}</button>
        <div class="live" id="c-live">${ui.rec ? esc(ui.live || "Слушаю…") : ui.err ? "" : "Нажми и говори"}</div>
        ${ui.err ? `<div class="fb mid">${esc(ui.err)}</div>` : ""}
        <div class="center" style="margin-top:8px"><button class="plain" id="c-nomic">🙊 Ответить без микрофона</button></div>`;
    }
    return q + `<div class="fb mid">Скажи ответ вслух, а потом сравни с образцом.</div>
      <div style="height:12px"></div><button class="wide" id="c-reveal">${t.k.endsWith("free") ? "Я сказал" : "Показать ответ"}</button>`;
  }
  function toggleMic() {
    const t = curTask(), c = curCard(); if (!t || !c || ui.res) return;
    if (ui.rec) { stopRec(); return; }
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    ui.rec = true; ui.err = ""; ui.live = ""; render();
    listen(txt => {
      ui.live = txt; const el = document.querySelector("#c-live"); if (el) el.textContent = txt;
    }, alts => {
      ui.rec = false; gradeSpeech(alts);
    }, err => {
      ui.rec = false;
      if (err === "aborted") { render(); return; }
      ui.err = MIC_ERR[err] || "Не получилось распознать речь (" + err + "). Попробуй ещё раз или ответь без микрофона.";
      if (err === "unsupported") ui.nomic = true;
      render();
    });
  }
  function gradeSpeech(alts) {
    const t = curTask(), c = curCard(); if (!t || !c) return;
    ui.ans = alts[0]; ui.alts = alts;
    if (t.k === "s-free") {
      const good = alts.find(a => findWord(a, c.en) && words(a).length >= 3);
      ui.ans = good || alts[0];
      ui.res = good ? "free" : "ask-free";
      render(); return;
    }
    const refs = t.k === "s-tr" ? t.it.en : [t.s.en];
    const j = judge(alts, refs, c, t.k === "s-tr" ? 0.75 : 0.8);
    ui.j = j; ui.ans = j.ans;
    ui.res = j.v === "bad" ? "ask" : j.v;
    if (j.v !== "bad") finish("pass");
    render();
  }

  // ----- общий блок результата для письма и речи -----
  function resultBlock(t, c) {
    const speakK = t.k[0] === "s";
    const nextBtn = `<div style="height:12px"></div><button class="wide" id="c-next">Дальше</button>`;
    const ref = t.k.endsWith("-tr") ? (ui.j ? ui.j.ref : t.it.en[0]) : t.s ? t.s.en : "";
    const refHtml = ref ? `<div class="r">${t.s ? markHtml(t.s) : esc(ref)} ${sayBtn(ref)}</div>` : "";
    const others = t.k.endsWith("-tr") && t.it.en.length > 1 ? `<div class="muted" style="margin-top:6px">Тоже верно: ${t.it.en.filter(x => x !== ref).map(esc).join(" · ")}</div>` : "";
    const youSaid = ui.ans ? `<div class="muted" style="margin-top:4px">${speakK ? "Распознано" : "Твой ответ"}: «${esc(ui.ans)}»</div>` : "";
    const up = `<div class="muted" style="margin-top:6px">Ступень «${LV[t.st + 1]}» пройдена.</div>`;

    if (ui.res === "ok") return `<div class="fb ok">✅ Отлично, точно как в образце!${refHtml}${others}${youSaid}${up}</div>` + nextBtn;
    if (ui.res === "close") return `<div class="fb ok">✅ Засчитано! Сравни с образцом, разница небольшая:${refHtml}${others}${youSaid}${up}</div>` + nextBtn;
    if (ui.res === "form") return `<div class="fb ok">✅ Слово верное. В этом предложении форма: <b>${esc(t.s.m.text)}</b>${refHtml}${up}</div>` + nextBtn;
    if (ui.res === "typo") return `<div class="fb ok">✅ Засчитано, но есть опечатка: правильно <b>${esc(t.s.m.text)}</b>${refHtml}${up}</div>` + nextBtn;
    if (ui.res === "bad") return `<div class="fb bad">❌ Правильно: <b>${esc(t.s.m.text)}</b>${refHtml}${youSaid}<div class="muted" style="margin-top:6px">Слово вернётся в тренажёр завтра.</div></div>` + nextBtn;

    if (ui.res === "ask") { // не совпало с образцом: решает сам
      const d = ui.ans ? diff(ui.ans, ref) : null;
      const miss = ui.j && !ui.j.has ? `<div class="muted" style="margin-top:6px">⚠️ Не нашёл слово «${esc(c.en)}» в ответе.</div>` : "";
      return `<div class="fb mid">🤔 Не совпало с образцом. Сравни:
          ${d ? `<div class="r">${speakK ? "🗣️" : "✍️"} ${d.a}</div>` : ""}
          <div class="r">✅ ${d ? d.r : esc(ref)} ${sayBtn(ref)}</div>${others}${miss}
          <div class="muted" style="margin-top:6px">Если твой вариант тоже верный, Claude перепроверит его в конце недели.</div></div>
        <div class="btns">
          ${speakK && useMic() && !ui.nomic ? `<button class="ghost" id="c-retry">🔁 Ещё раз</button>` : ""}
          <button class="ghost" id="c-self">${speakK ? "Распозналось криво, я сказал верно" : "Мой вариант тоже верный"}</button>
          <button id="c-fail">Понял, ошибся</button>
        </div>`;
    }
    if (ui.res === "self-done") return `<div class="fb ok">👍 Засчитано. Claude проверит этот ответ в конце недели.${refHtml}${up}</div>` + nextBtn;
    if (ui.res === "fail-done") return `<div class="fb bad">Запомни образец:${refHtml}<div class="muted" style="margin-top:6px">Слово вернётся в тренажёр завтра, а эту ступень попробуешь снова.</div></div>` + nextBtn;

    if (ui.res === "reveal") { // без микрофона
      if (t.k === "s-free") return `<div class="fb mid">Сказал предложение со словом «${esc(c.en)}»? Тогда засчитываем.${c.ex ? `<div class="r">Пример: ${esc(c.ex)} ${sayBtn(c.ex)}</div>` : ""}</div>
        <div class="btns"><button class="ghost" id="c-hold">🤔 Не получилось</button><button id="c-sok">✅ Сказал</button></div>`;
      return `<div class="fb mid">Сравни со своим ответом:${refHtml}${others}</div>
        <div class="btns"><button class="ghost" id="c-nfail">❌ Сказал не так</button><button id="c-nok">✅ Сказал так же</button></div>`;
    }
    if (ui.res === "free" || ui.res === "ask-free") {
      const warn = ui.res === "ask-free" ? `<div class="muted" style="margin-top:6px">⚠️ Не расслышал в ответе слово «${esc(c.en)}».</div>` : "";
      const ex = c.ex ? `<div class="r" style="font-size:15px">Пример из словаря: ${esc(c.ex)} ${sayBtn(c.ex)}</div>` : "";
      return `<div class="fb mid">${speakK ? "🗣️ Распознано" : "✍️ Твоё предложение"}: <div class="r">«${esc(ui.ans)}»</div>${warn}${ex}
          <div class="muted" style="margin-top:6px">Свободные ответы проверяет Claude в конце недели. Как тебе кажется, всё верно?</div></div>
        <div class="btns">${speakK && useMic() && !ui.nomic ? `<button class="ghost" id="c-retry">🔁 Ещё раз</button>` : ""}
          <button class="ghost" id="c-hold">🤔 Не уверен</button><button id="c-sure">✅ Думаю, верно</button></div>`;
    }
    if (ui.res === "free-done") return `<div class="fb ok">👍 Отправлено на недельную проверку.${ui.held ? " Ступень попробуем ещё раз в другой день." : up}</div>` + nextBtn;
    return nextBtn;
  }

  function onResultAction(id) {
    const t = curTask(); if (!t) return;
    if (id === "c-self") { logAns(ui.ans || "", "self"); finish("pass"); ui.res = "self-done"; }
    else if (id === "c-fail") { logAns(ui.ans || "", "bad"); finish("fail"); ui.res = "fail-done"; }
    else if (id === "c-sure") { logAns(ui.ans || "", "free"); finish("pass"); ui.res = "free-done"; }
    else if (id === "c-hold") { if (ui.ans) logAns(ui.ans, "unsure"); finish("hold"); ui.held = true; ui.res = "free-done"; }
    else if (id === "c-sok" || id === "c-nok") { finish("pass"); ui.res = "self-done"; ui.nolog = true; }
    else if (id === "c-nfail") { finish("fail"); ui.res = "fail-done"; }
    else if (id === "c-retry") { ui.res = null; ui.ans = ""; ui.j = null; ui.live = ""; }
    render();
  }

  // ----- итог сессии -----
  function renderDone() {
    const r = run.res;
    const ok = r.filter(x => x.mode === "pass").length, bad = r.filter(x => x.mode === "fail").length, hold = r.filter(x => x.mode === "hold").length;
    const ups = r.filter(x => x.mode === "pass");
    const more = eligible().length;
    V().innerHTML = `<div class="box center"><div class="big">🎉</div><h2>Закрепление пройдено!</h2>
        <div class="stats" style="margin-top:12px"><div class="stat"><b>${ok}</b><span>верно</span></div><div class="stat"><b>${bad}</b><span>${plural(bad, "ошибка", "ошибки", "ошибок")}</span></div><div class="stat"><b>${hold}</b><span>не уверен</span></div></div>
        ${bad ? `<p class="muted" style="margin-bottom:0">Слова с ошибками вернутся в тренажёр завтра.</p>` : ""}</div>
      ${ups.length ? `<div class="box"><h2>Поднялись на ступень</h2>${ups.map(x => `<div class="up">${LV_ICON[x.from + 1]} <b>${esc(x.w)}</b> <span class="muted">→ ${LV[x.from + 1]}</span></div>`).join("")}</div>` : ""}
      ${more ? `<button class="wide" id="c-again">Ещё круг (${Math.min(more, sessionSize())})</button><div style="height:8px"></div>` : ""}
      <button class="wide ghost" id="c-home">Готово</button>`;
  }

  // ---------- неделя с Claude: экспорт ----------
  function exportText() {
    const sent = S.consSent || 0;
    const log = (S.consLog || []).filter(e => e.at > sent);
    const list = reviewCards().filter(c => cons(c).st < 3)
      .sort((a, b) => (packItems(a).length - packItems(b).length) || (lastRev(b) - lastRev(a))).slice(0, 60);
    const kindName = e => (e.kind === "write" ? "письмо" : "речь") + ", " + ({ tr: "перевод", gap: "пропуск", free: "своё предложение" }[e.type] || e.type);
    const resName = { self: "я счёл верным", bad: "я ошибся", free: "я думаю, верно", unsure: "не уверен" };
    let txt = `Привет, Claude! Это еженедельный пакет «Закрепление» из моего тренажёра английского (сайт voodyavg.github.io/english, мой уровень A2, иду к B1).

Сделай, пожалуйста, две вещи.

1) Проверь мои ответы из раздела «МОИ ОТВЕТЫ». По каждому ошибочному: моя фраза → исправленный вариант и коротко по-русски, в чём ошибка. Верные отметь ✅ одной строкой. В конце 2–3 главных совета, над чем мне поработать.

2) Составь новый пакет заданий: один блок кода JSON строго в таком формате (без комментариев внутри):
{"v":1,"made":"ГГГГ-ММ-ДД",
 "items":[{"w":"слово точно как в моём списке","ru":"предложение на русском","en":["основной перевод","другой верный вариант"]}],
 "again":["слова из моего списка, в которых я ошибался в ответах"],
 "text":{"title":"Заголовок","level":"A2-B1","topic":"тема","text":"Текст...","glossary":[["слово","перевод","форма, как в тексте"]],"questions":[["Вопрос?",["вариант 1","вариант 2","вариант 3","вариант 4"],0,"e"]]}}

Правила для items: по 2 предложения на каждое слово из списка «СЛОВА»; простые жизненные фразы на 6–14 слов, уровень A2–B1; поле "w" пиши точно как в списке; английское предложение должно содержать это слово (можно в другой форме); в "en" 2–4 верных варианта перевода, первый самый естественный.
Правила для text: связный интересный текст недели (350–500 слов), где встречается как можно больше слов из списка; темы мне интересны футбол, шахматы, страны мира, жизненные ситуации; устойчивые выражения можно взять в {фигурные скобки}; 10 вопросов с 4 вариантами, номер правильного с нуля, уровни "e" (лёгкий), "m" (средний), "h" (сложный).

СЛОВА (слово | перевод | пример | ступень):
`;
    txt += list.length ? list.map(c => [c.en, c.ru, c.ex || "—", LV[cons(c).st]].join(" | ")).join("\n") : "(новых слов для заданий пока нет — сделай items пустым и просто текст недели)";
    txt += `\n\nМОИ ОТВЕТЫ (с прошлой отправки):\n`;
    txt += log.length ? log.map((e, i) => `${i + 1}. [${kindName(e)}] слово: ${e.w} (${e.ru || ""})\n   задание: ${e.q}\n   мой ответ: «${e.a || "—"}»${e.ref ? `\n   образец: ${e.ref}` : ""}\n   моя оценка: ${resName[e.res] || e.res}`).join("\n") : "(ответов на проверку нет)";
    return { txt, words: list.length, answers: log.length };
  }
  function openExport() {
    const { txt, words: nw, answers } = exportText();
    S.consPending = Date.now(); save();
    $("#sheet").innerHTML = `<h2>Отправь это Claude</h2>
      <p class="muted" style="margin-top:0">Внутри: ${nw} ${plural(nw, "слово", "слова", "слов")} для новых заданий и ${answers} ${plural(answers, "ответ", "ответа", "ответов")} на проверку. Скопируй, вставь в чат с Claude, а его ответ целиком загрузи кнопкой «📥 Вставить ответ».</p>
      <textarea id="x-t" style="min-height:220px">${esc(txt)}</textarea>
      <div class="row" style="margin-top:12px"><button class="ghost" id="x-c">Закрыть</button><button id="x-copy">📋 Копировать</button></div>`;
    $("#ov").classList.add("on");
    $("#x-c").onclick = closeSheet;
    $("#x-copy").onclick = async () => {
      try { await navigator.clipboard.writeText(txt); toast("Скопировано. Вставь в чат с Claude"); }
      catch (_) { const t = $("#x-t"); t.select(); document.execCommand("copy"); toast("Скопировано"); }
    };
  }

  // ---------- неделя с Claude: импорт ----------
  function parsePack(text) {
    const cands = [];
    const re = /```[a-zA-Z]*\s*([\s\S]*?)```/g; let m;
    while ((m = re.exec(text))) cands.push(m[1]);
    cands.push(text);
    for (const s of cands) {
      const a = s.indexOf("{"), b = s.lastIndexOf("}");
      if (a < 0 || b <= a) continue;
      try { const p = JSON.parse(s.slice(a, b + 1)); if (p && (Array.isArray(p.items) || p.text)) return p; } catch (e) {}
    }
    throw new Error("Не нашёл в тексте пакет заданий. Скопируй ответ Claude целиком, вместе с блоком кода.");
  }
  function importPack(text) {
    const p = parsePack(text);
    const byWord = new Map(S.cards.map(c => [c.en.toLowerCase().trim(), c]));
    const items = [], unknown = new Set();
    (Array.isArray(p.items) ? p.items : []).forEach(it => {
      if (!it || !it.w || !it.ru) return;
      const en = (Array.isArray(it.en) ? it.en : [it.en]).map(x => String(x || "").trim()).filter(Boolean);
      if (!en.length) return;
      const w = String(it.w).trim();
      if (!byWord.has(w.toLowerCase())) { unknown.add(w); return; }
      items.push({ w, ru: String(it.ru).trim(), en });
    });
    const now = Date.now();
    const newWords = new Set(items.map(i => i.w.toLowerCase()));
    const old = (S.pack && Array.isArray(S.pack.items) ? S.pack.items : []).filter(i => !newWords.has(String(i.w).toLowerCase()));
    if (items.length || !S.pack) S.pack = { at: now, made: p.made || today(), items: old.concat(items).slice(-PACK_MAX) };
    else S.pack.at = now;
    // слова с ошибками: на ступень ниже
    let again = 0;
    (Array.isArray(p.again) ? p.again : []).forEach(w => {
      const c = byWord.get(String(w).toLowerCase().trim()); if (!c) return;
      const cs = cons(c); setCons(c, { st: Math.max(0, cs.st - 1), next: 0 }); again++;
    });
    // текст недели → в читалку
    let textTitle = "";
    const tx = p.text;
    if (tx && tx.title && tx.text && String(tx.text).length > 200) {
      let r = {}; try { r = JSON.parse(localStorage.getItem(RKEY)) || {}; } catch (e) {}
      r.custom = Array.isArray(r.custom) ? r.custom : []; r.done = r.done || {};
      const qs = (Array.isArray(tx.questions) ? tx.questions : []).filter(q => Array.isArray(q) && q[0] && Array.isArray(q[1]) && q[1].length >= 2 && Number.isInteger(q[2]) && q[2] >= 0 && q[2] < q[1].length)
        .map(q => [String(q[0]), q[1].map(String), q[2], ["e", "m", "h"].includes(q[3]) ? q[3] : "m"]);
      const gl = (Array.isArray(tx.glossary) ? tx.glossary : []).filter(g => Array.isArray(g) && g[0] && g[1]).map(g => g.map(String));
      textTitle = String(tx.title);
      r.custom.push({ id: "week-" + now.toString(36), title: "📦 " + textTitle, level: String(tx.level || "A2-B1"), topic: String(tx.topic || "Текст недели"), text: String(tx.text), glossary: gl, questions: qs });
      try { localStorage.setItem(RKEY, JSON.stringify(r)); } catch (e) { textTitle = ""; }
    }
    S.consSent = Math.max(S.consSent || 0, S.consPending || now);
    save();
    return { items: items.length, words: newWords.size, unknown: [...unknown], again, textTitle };
  }
  function openImport() {
    $("#sheet").innerHTML = `<h2>Ответ от Claude</h2>
      <p class="muted" style="margin-top:0">Вставь сюда ответ Claude целиком: я сам найду в нём пакет заданий.</p>
      <textarea id="i-t" style="min-height:200px" placeholder="Вставь сюда..."></textarea>
      <div id="i-msg"></div>
      <div class="row" style="margin-top:12px"><button class="ghost" id="i-c">Закрыть</button><button id="i-go">📥 Загрузить</button></div>`;
    $("#ov").classList.add("on");
    $("#i-c").onclick = closeSheet;
    $("#i-go").onclick = () => {
      const msg = $("#i-msg");
      try {
        const r = importPack($("#i-t").value);
        let h = `<div class="fb ok">✅ Загружено: ${r.items} ${plural(r.items, "предложение", "предложения", "предложений")} для ${r.words} ${plural(r.words, "слова", "слов", "слов")}.`;
        if (r.textTitle) h += `<br>📖 Текст недели «${esc(r.textTitle)}» добавлен в читалку.`;
        if (r.again) h += `<br>🔁 ${r.again} ${plural(r.again, "слово с ошибками опустилось", "слова с ошибками опустились", "слов с ошибками опустились")} на ступень ниже, чтобы повторить.`;
        if (r.unknown.length) h += `<br><span class="muted">Нет в твоём списке, пропущено: ${r.unknown.map(esc).join(", ")}</span>`;
        h += `</div>`;
        msg.innerHTML = h;
        $("#i-go").style.display = "none"; $("#i-c").textContent = "Готово";
        $("#i-t").style.display = "none";
        render();
      } catch (e) { msg.innerHTML = `<div class="fb bad">${esc(e.message || "Ошибка в тексте пакета")}</div>`; }
    };
  }

  // ---------- журнал ответов ----------
  function openLog() {
    const log = (S.consLog || []).slice().reverse().slice(0, 60), sent = S.consSent || 0;
    const badge = { self: "👍 засчитал сам", bad: "❌ ошибка", free: "✍️ своё", unsure: "🤔 не уверен" };
    $("#sheet").innerHTML = `<h2>Мои ответы</h2>
      ${log.length ? log.map(e => `<div class="logi"><div class="muted">${fmtDate(e.at)} · ${e.kind === "write" ? "✍️" : "🗣️"} <b style="color:var(--text)">${esc(e.w)}</b> · <span class="badge">${badge[e.res] || e.res}</span> ${e.at <= sent ? '<span class="badge">проверено Claude</span>' : ""}</div>
        <div class="muted">${esc(e.q)}</div><div class="a">«${esc(e.a || "—")}»</div>${e.ref && e.type !== "free" ? `<div class="muted">образец: ${esc(e.ref)}</div>` : ""}</div>`).join("")
        : `<p class="muted">Пока пусто. Здесь будут ответы, которые стоит показать Claude: свои предложения и всё, что не совпало с образцом.</p>`}
      <div style="height:12px"></div><button class="wide ghost" id="lg-c">Закрыть</button>`;
    $("#ov").classList.add("on");
    $("#lg-c").onclick = closeSheet;
  }

  // ---------- проверка микрофона ----------
  function openMicTest() {
    $("#sheet").innerHTML = `<h2>🎤 Проверка микрофона</h2>
      <p class="muted" style="margin-top:0">Нажми на микрофон и скажи: <b>Hello, how are you today?</b></p>
      <button class="mic" id="m-go">🎤</button><div class="live" id="m-live"></div><div id="m-res"></div>
      <div style="height:12px"></div><button class="wide ghost" id="m-c">Закрыть</button>`;
    $("#ov").classList.add("on");
    $("#m-c").onclick = () => { abortRec(); closeSheet(); };
    $("#m-go").onclick = () => {
      const b = $("#m-go"), live = $("#m-live"), res = $("#m-res");
      if (rec) { stopRec(); return; }
      b.classList.add("rec"); b.textContent = "⏹"; live.textContent = "Слушаю…"; res.innerHTML = "";
      listen(t => { live.textContent = t; }, alts => {
        b.classList.remove("rec"); b.textContent = "🎤";
        const s = sim(alts[0], "Hello, how are you today?");
        res.innerHTML = `<div class="fb ok">✅ Микрофон работает! Распознано: «${esc(alts[0])}»${s < 0.8 ? "<br>Распознало неточно: попробуй говорить чуть медленнее и ближе к микрофону." : ""}</div>`;
      }, err => {
        b.classList.remove("rec"); b.textContent = "🎤"; live.textContent = "";
        res.innerHTML = `<div class="fb bad">${esc(MIC_ERR[err] || "Ошибка: " + err)}</div>`;
      });
    };
  }

  // ---------- события ----------
  document.querySelector("#v-cons").addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    if (b.dataset.sayText) { speak(b.dataset.sayText); return; }
    if (b.dataset.opt !== undefined) { chooseOpt(+b.dataset.opt); return; }
    const id = b.id;
    if (id === "c-start" || id === "c-again") start();
    else if (id === "c-home") { run = null; render(); }
    else if (id === "c-stop") stop();
    else if (id === "c-next") next();
    else if (id === "c-exp") openExport();
    else if (id === "c-imp") openImport();
    else if (id === "c-log") openLog();
    else if (id === "c-test") openMicTest();
    else if (id === "c-hint") { ui.hint = true; const inp = document.querySelector("#c-in"); if (inp) ui.draft = inp.value; render(); }
    else if (id === "c-check") submitWrite(false);
    else if (id === "c-send") submitWrite(true);
    else if (id === "c-fix") { ui.warn = ""; render(); }
    else if (id === "c-mic-go") toggleMic();
    else if (id === "c-nomic") { abortRec(); ui.rec = false; ui.nomic = true; ui.err = ""; render(); }
    else if (id === "c-reveal") { ui.res = "reveal"; render(); }
    else if (["c-self", "c-fail", "c-sure", "c-hold", "c-sok", "c-nok", "c-nfail", "c-retry"].includes(id)) onResultAction(id);
  });
  document.querySelector("#v-cons").addEventListener("change", e => {
    if (e.target.id === "c-n") { S.settings.consN = +e.target.value; saveSet(); render(); }
    if (e.target.id === "c-mic") { S.settings.consMic = e.target.checked; saveSet(); }
  });
  document.querySelector("#v-cons").addEventListener("input", e => {
    if (e.target.id === "c-in") ui.draft = e.target.value;
  });
  document.addEventListener("keydown", e => {
    const v = V(); if (!v || !v.classList.contains("on") || !run || $("#ov").classList.contains("on")) return;
    const inInput = e.target && e.target.id === "c-in";
    if (e.key === "Enter") {
      if (inInput) { e.preventDefault(); if (ui.warn) submitWrite(true); else submitWrite(false); return; }
      const nx = v.querySelector("#c-next"); if (nx) { e.preventDefault(); next(); }
      return;
    }
    if (!inInput && "1234".includes(e.key) && curTask() && curTask().k[0] === "r" && !ui.res) {
      const i = +e.key - 1; if (i < curTask().opts.length) chooseOpt(i);
    }
  });

  window.Cons = {
    render,
    busy: () => !!run,
    available: () => eligible().length,
    stage: c => cons(c).st,
    LV, LV_ICON,
    // для автотестов
    _t: { norm, sim, findWord, core, judge, judgeGap, parsePack, importPack, exportText, makeTask }
  };
})();
