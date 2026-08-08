/* ==========================================================================
   Vocab Builder · 60-Day Challenge
   Vanilla JS — data loading, lazy batch rendering, localStorage persistence,
   view routing and state restoration. No dependencies.

   Data loading is server-free — no http.server, no fetch:
   • data.js holds the full dataset as a plain JS object (window.VOCAB_DATA),
     included via <script> in index.html. The app reads it directly from the
     file system or any static host (GitHub Pages, Netlify, …).
   • Both the { course, days[] } shape and a flat vocabulary.json-style array
     are accepted and normalised automatically.
   Words are identified by their index within a day's array, so keep ordering stable.
   ========================================================================== */
(() => {
  "use strict";

  /* ---------- Config ---------- */
  const BATCH_SIZE  = 8;             // words rendered per lazy batch
  const STORAGE_KEY = "vocabBuilder30.v1";
  const SCHEMA      = 2;             // 2 = 60-day layout (was 30 days × 82 words)
  const BASE_TITLE  = "Vocab Builder · 60-Day IELTS Challenge";
  const RING_C      = 2 * Math.PI * 26; // progress-ring circumference

  /* ---------- DOM refs ---------- */
  const $ = (s, r = document) => r.querySelector(s);

  const gridView  = $("#gridView"),  dayView   = $("#dayView");
  const dayGrid   = $("#dayGrid"),   fatalEl   = $("#fatal");

  const tabCalendar  = $("#tabCalendar"),  tabBookmarks = $("#tabBookmarks");
  const tabBmCount   = $("#tabBmCount");
  const calendarPanel = $("#calendarPanel"), bookmarkPanel = $("#bookmarkPanel");
  const bmList     = $("#bmList"), bmEmpty = $("#bmEmpty"),
        bmCount    = $("#bmCount"), bmEmptyBtn = $("#bmEmptyBtn");
  const statDays  = $("#statDays"),  statWords = $("#statWords"), statToday = $("#statToday");
  const overallBar = $("#overallBar"), overallPct = $("#overallPct"),
        overallBarWrap = $("#overallBarWrap"), resumeBtn = $("#resumeBtn");

  const backBtn  = $("#backBtn"), dvEyebrow = $("#dvEyebrow"), dvTheme = $("#dvTheme");
  const dayTop   = $("#dayTop");
  const ringWrap = $("#ringWrap"), ringVal  = $("#ringVal"), ringNum = $("#ringNum");
  const dvBar    = $("#dvBar"),    dvBarWrap = $("#dvBarWrap"), dvCount = $("#dvCount");
  const chipAll  = $("#chipAll"),  chipTodo = $("#chipTodo"), chipDone = $("#chipDone");

  const doneBanner = $("#doneBanner"), doneTitle = $("#doneTitle"), doneNext = $("#doneNext");
  const wordList   = $("#wordList"),   loaderEl = $("#loader");
  const endNote    = $("#endNote"),    sentinel = $("#sentinel");
  const toastEl    = $("#toast");

  /* ---------- State ---------- */
  let DATA       = null;
  const dayMap   = new Map();       // day number → { day, theme, words[] }
  let TOTAL_DAYS = 60;
  let uid        = 0;               // unique ids for collapse panels

  let state       = loadState();    // persisted: words, bookmarks, days, last view, start date
  let ctx         = null;           // active day context
  let currentView = "grid";         // "grid" | "bookmarks" | "day"
  let homeTab     = "grid";         // tab to return to when leaving a day
  let batchBusy   = false;
  let io          = null;           // IntersectionObserver
  let toastTimer  = null;

  /* ---------- Helpers ---------- */
  const show = el => el && (el.hidden = false);
  const hide = el => el && (el.hidden = true);
  const esc  = s => String(s).replace(/[&<>"']/g,
    c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));

  function loadState(){
    const base = { words:{}, bookmarks:{}, days:[], last:{ view:"grid", day:null }, start: Date.now() };
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      if(!raw) return base;
      const s = JSON.parse(raw);
      return { ...base, ...s,
               bookmarks: { ...(s.bookmarks || {}) },     // absent in states saved before bookmarks shipped
               last: { ...base.last, ...(s.last || {}) } };
    }catch(e){ return base; }
  }
  function persist(){
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }catch(e){}
  }

  const learnedSet    = n => new Set(state.words[String(n)] || []);
  const bookmarkSet   = n => new Set(state.bookmarks[String(n)] || []);
  const isPlayable    = n => { const d = dayMap.get(n); return !!(d && d.words && d.words.length); };
  const isDayComplete = n => { const d = dayMap.get(n);
                               return !!(d && d.words.length && learnedSet(n).size === d.words.length); };

  // Every bookmark as { day, idx, word, theme }, ordered day → position in day
  function allBookmarks(){
    const out = [];
    Object.keys(state.bookmarks).map(Number).sort((a, b) => a - b).forEach(n => {
      const info = dayMap.get(n);
      if(!info || !info.words) return;
      [...(state.bookmarks[String(n)] || [])].sort((a, b) => a - b).forEach(i => {
        const w = info.words[i];
        if(w) out.push({ day: n, idx: i, word: w, theme: info.theme });
      });
    });
    return out;
  }

  function currentChallengeDay(){
    const elapsed = Math.floor((Date.now() - state.start) / 86400000);
    return Math.min(TOTAL_DAYS, Math.max(1, elapsed + 1));
  }
  function firstIncompleteDay(){
    for(let n = 1; n <= TOTAL_DAYS; n++){
      if(isPlayable(n) && !isDayComplete(n)) return n;
    }
    return null;
  }
  function matchesFilter(i){
    if(!ctx) return true;
    if(ctx.filter === "todo") return !learnedSet(ctx.day).has(i);
    if(ctx.filter === "done") return  learnedSet(ctx.day).has(i);
    return true;
  }
  function animateIn(el){
    el.classList.remove("view-in");
    void el.offsetWidth;               // restart animation
    el.classList.add("view-in");
  }

  /* ---------- Toast / confetti / speech ---------- */
  function toast(msg){
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2600);
  }
  function confetti(host){
    const colors = ["#FFC42E", "#3ED598", "#5EB7FF", "#FF6E5E", "#F5F7FA"];
    for(let k = 0; k < 30; k++){
      const p = document.createElement("i");
      p.className = "cf";
      p.style.background = colors[k % colors.length];
      p.style.setProperty("--dx", (Math.random() * 220 - 110) + "px");
      p.style.setProperty("--dy", (-Math.random() * 160 - 40) + "px");
      p.style.setProperty("--r",  (Math.random() * 560 - 280) + "deg");
      p.style.animationDelay = (Math.random() * 90) + "ms";
      host.appendChild(p);
      setTimeout(() => p.remove(), 1500);
    }
  }
  function speak(text){
    if(!("speechSynthesis" in window)) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US"; u.rate = .92;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  }

  /* ---------- Data loading ---------- */
  // Accepts the template shape { course:{ totalDays, wordsPerDay }, days[] }
  // OR a flat array of words (raw vocabulary.json) — normalised to days.
  function normalizeData(raw){
    if(raw && Array.isArray(raw.days)) return raw;
    if(Array.isArray(raw)){
      const perDay = 15;
      const days = [];
      for(let i = 0; i < raw.length; i += perDay){
        days.push({
          day:   days.length + 1,
          theme: `Day ${days.length + 1} — Vocabulary`,
          words: raw.slice(i, i + perDay),
        });
      }
      return { course: { title: BASE_TITLE, totalDays: days.length, wordsPerDay: perDay }, days };
    }
    throw new Error("Unrecognized data shape");
  }
  function loadData(){
    if(window.VOCAB_DATA) return normalizeData(window.VOCAB_DATA);
    throw new Error("vocabulary data not found — is data.js loaded before index.js?");
  }
  function renderGridSkeleton(){
    dayGrid.innerHTML = "";
    for(let i = 1; i <= TOTAL_DAYS; i++){
      const b = document.createElement("div");
      b.className = "day day--skel";
      b.style.setProperty("--i", i);
      dayGrid.appendChild(b);
    }
  }
  function showFatal(){
    fatalEl.innerHTML = `
      <h2>Couldn't load vocabulary data</h2>
      <p>Make sure <code>data.js</code> sits next to <code>index.html</code> — it holds the
      full word list as a plain JS object and needs no server at all.</p>`;
    show(fatalEl);
  }

  /* ---------- Migration: 30-day layout → 60-day layout ----------
     Each old themed day was split in two. Every generated day carries
     `from: { day, offset }` pointing back at its slice of the old day, so a
     saved (day, wordIndex) pair can be rewritten exactly — nobody loses
     progress or bookmarks because the challenge got longer. */
  function migrateLayout(){
    if(state.schema === SCHEMA) return;

    const parts = new Map();                    // old day → [{ day, offset, size }]
    (DATA.days || []).forEach(d => {
      if(!d.from) return;
      const list = parts.get(d.from.day) || [];
      list.push({ day: d.day, offset: d.from.offset, size: d.words.length });
      parts.set(d.from.day, list);
    });

    if(parts.size){
      const remap = src => {
        const out = {};
        Object.keys(src || {}).forEach(k => {
          const list = parts.get(+k);
          if(!list) return;
          (src[k] || []).forEach(i => {
            const p = list.find(p => i >= p.offset && i < p.offset + p.size);
            if(!p) return;
            (out[String(p.day)] = out[String(p.day)] || []).push(i - p.offset);
          });
        });
        Object.keys(out).forEach(k => out[k].sort((a, b) => a - b));
        return out;
      };

      state.words     = remap(state.words);
      state.bookmarks = remap(state.bookmarks);

      // completed-day list is derived, so just rebuild it
      state.days = [];
      dayMap.forEach(d => {
        if(d.words.length && learnedSet(d.day).size === d.words.length) state.days.push(d.day);
      });

      const last = parts.get(state.last.day);
      if(last) state.last.day = last[0].day;
    }

    state.schema = SCHEMA;
    persist();
  }

  /* ---------- Masthead (grid header) ---------- */
  function updateMasthead(){
    let learnedTotal = 0, available = 0, daysDone = 0;
    dayMap.forEach(d => {
      if(d.words && d.words.length){
        available   += d.words.length;
        learnedTotal += learnedSet(d.day).size;
        if(isDayComplete(d.day)) daysDone++;
      }
    });

    statDays.textContent  = `${daysDone}/${TOTAL_DAYS}`;
    statWords.textContent = `${learnedTotal}/${available}`;
    statToday.textContent = `Day ${currentChallengeDay()}`;

    const pct = Math.round(daysDone / TOTAL_DAYS * 100);
    overallBar.style.width = pct + "%";
    overallPct.textContent = pct + "%";
    overallBarWrap.setAttribute("aria-valuenow", pct);

    // Resume chip → last visited day, else first unfinished day
    const target = (state.last.day && isPlayable(state.last.day))
      ? state.last.day
      : firstIncompleteDay();
    if(target){
      resumeBtn.hidden = false;
      resumeBtn.innerHTML = `Continue Day ${target} <span aria-hidden="true">→</span>`;
      resumeBtn.onclick = () => openDay(target);
    }else{
      resumeBtn.hidden = true;
    }
  }

  /* ---------- Day grid ---------- */
  function renderGrid(){
    dayGrid.innerHTML = "";
    const today = currentChallengeDay();
    const frag  = document.createDocumentFragment();

    for(let n = 1; n <= TOTAL_DAYS; n++){
      const info     = dayMap.get(n);
      const playable = !!(info && info.words && info.words.length);
      const btn      = document.createElement("button");
      btn.type = "button";
      btn.style.setProperty("--i", n);

      if(!playable){
        btn.className = "day day--locked";
        btn.setAttribute("aria-disabled", "true");
        btn.setAttribute("aria-label",
          `Day ${n} — ${info && info.theme ? info.theme : "coming soon"} (content locked)`);
        btn.innerHTML =
          `<span class="day-num">${n}</span><span class="day-lock" aria-hidden="true">🔒</span>`;
        btn.addEventListener("click",
          () => toast(`Day ${n} · “${(info && info.theme) || "Content"}” is coming soon ✨`));
      } else {
        const total   = info.words.length;
        const learned = learnedSet(n).size;
        const pct     = Math.round(learned / total * 100);
        const done    = learned === total;

        btn.className = "day"
          + (done ? " day--done" : "")
          + (!done && learned > 0 ? " day--active" : "")
          + (n === today ? " day--today" : "");
        btn.setAttribute("aria-label",
          `Day ${n}: ${info.theme} — ${learned} of ${total} words learned${done ? ", completed" : ""}`);
        btn.innerHTML = `
          ${n === today ? '<span class="day-today-tag">Today</span>' : ""}
          ${done ? '<span class="day-check" aria-hidden="true">✓</span>' : ""}
          <span class="day-num">${n}</span>
          <span class="day-mini" aria-hidden="true"><i style="width:${pct}%"></i></span>
          <span class="day-theme" aria-hidden="true">${esc(info.theme)}</span>`;
        btn.addEventListener("click", () => openDay(n));
      }
      frag.appendChild(btn);
    }
    dayGrid.appendChild(frag);
  }

  /* ---------- Day view ---------- */
  function openDay(n, setHash = true){
    const info = dayMap.get(n);
    if(!info || !info.words.length){
      toast(`Day ${n} content is coming soon ✨`);
      return;
    }

    ctx = { day: n, info, rendered: 0, filter: "all", finished: false, wasComplete: false };

    // Header
    dvEyebrow.textContent = `DAY ${n} / ${TOTAL_DAYS}`;
    dvTheme.textContent   = info.theme;
    document.title        = `Day ${n} · ${info.theme} — Vocab Builder`;

    // Reset list + UI
    wordList.innerHTML = "";
    hide(endNote); hide(doneBanner); hide(loaderEl);
    updateFilterChips(0, info.words.length);
    chipAll.classList.add("on"); chipTodo.classList.remove("on"); chipDone.classList.remove("on");

    gridView.hidden = true;
    dayView.hidden  = false;
    backBtn.setAttribute("aria-label",
      homeTab === "bookmarks" ? "Back to bookmarks" : "Back to calendar");
    animateIn(dayView);
    currentView = "day";

    state.last = { view: "day", day: n };
    persist();
    if(setHash && location.hash !== "#day-" + n) location.hash = "day-" + n;

    updateDayHeader(false);
    loadBatch(false);                  // first batch synchronously, no skeleton

    // Resume: scroll to the first UNLEARNED word, lazy-loading up to it
    const learned = learnedSet(n);
    let first = -1;
    for(let i = 0; i < info.words.length; i++){
      if(!learned.has(i)){ first = i; break; }
    }
    if(first === -1){
      showDoneBanner(false);
      window.scrollTo({ top: 0, behavior: "auto" }); syncSticky();
    } else if(first > 0){
      ensureRenderedTo(first);
      requestAnimationFrame(() => {
        const el = wordList.querySelector(`[data-idx="${first}"]`);
        if(el){
          el.scrollIntoView({ block: "center", behavior: "smooth" });
          el.classList.add("flash");
          setTimeout(() => el.classList.remove("flash"), 1700);
        }
      });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" }); syncSticky();
    }

    observeSentinel();
  }

  function showGrid(updateHash = true){
    ctx = null;
    dayView.hidden  = true;
    gridView.hidden = false;
    setTab("calendar");
    animateIn(gridView);
    currentView = "grid";
    homeTab     = "grid";

    renderGrid();
    updateMasthead();
    updateBookmarkCount();

    state.last = { view: "grid", day: state.last.day };
    persist();
    document.title = BASE_TITLE;
    window.scrollTo({ top: 0, behavior: "auto" }); syncSticky();

    if(updateHash && location.hash){
      history.pushState(null, "", location.pathname + location.search);
    }
  }

  function showBookmarks(updateHash = true){
    ctx = null;
    dayView.hidden  = true;
    gridView.hidden = false;
    setTab("bookmarks");
    animateIn(gridView);
    currentView = "bookmarks";
    homeTab     = "bookmarks";

    renderBookmarks();
    updateMasthead();

    state.last = { view: "bookmarks", day: state.last.day };
    persist();
    document.title = `Bookmarks · ${BASE_TITLE}`;
    window.scrollTo({ top: 0, behavior: "auto" }); syncSticky();

    if(updateHash && location.hash !== "#bookmarks") location.hash = "bookmarks";
  }

  // Calendar / bookmarks live side by side inside the grid view
  function setTab(name){
    const bm = name === "bookmarks";
    tabCalendar .classList.toggle("on", !bm);
    tabBookmarks.classList.toggle("on",  bm);
    tabCalendar .setAttribute("aria-selected", String(!bm));
    tabBookmarks.setAttribute("aria-selected", String(bm));
    calendarPanel.hidden =  bm;
    bookmarkPanel.hidden = !bm;
  }

  /* ---------- Lazy batch rendering ---------- */
  function loadBatch(delayed = true){
    if(!ctx || batchBusy) return;
    if(ctx.rendered >= ctx.info.words.length){ finishList(); return; }

    if(!delayed){ renderNextBatch(); return; }

    batchBusy = true;
    show(loaderEl);
    setTimeout(() => {
      hide(loaderEl);
      batchBusy = false;
      renderNextBatch();
    }, 340);
  }

  function renderNextBatch(){
    if(!ctx) return;
    const frag  = document.createDocumentFragment();
    let   added = 0;
    while(ctx.rendered < ctx.info.words.length && added < BATCH_SIZE){
      const i = ctx.rendered++;
      if(!matchesFilter(i)) continue;
      frag.appendChild(makeCard(ctx.info.words[i], i, added, ctx.day));
      added++;
    }
    wordList.appendChild(frag);
    if(ctx.rendered >= ctx.info.words.length) finishList();
  }

  // Synchronously render up to (and including) a target index — used for resume-scroll
  function ensureRenderedTo(idx){
    while(ctx && ctx.rendered <= idx && ctx.rendered < ctx.info.words.length){
      const i = ctx.rendered++;
      if(matchesFilter(i)) wordList.appendChild(makeCard(ctx.info.words[i], i, i % BATCH_SIZE, ctx.day));
    }
  }

  function finishList(){
    if(!ctx || ctx.finished) return;
    ctx.finished = true;
    if(io) io.unobserve(sentinel);

    const total   = ctx.info.words.length;
    const learned = learnedSet(ctx.day).size;
    const left    = total - learned;
    let msg;

    if(ctx.filter === "todo"){
      msg = left === 0
        ? `🎯 Nothing left to learn — Day ${ctx.day} is 100% yours!`
        : `🎯 ${left} word${left > 1 ? "s" : ""} remaining — keep scrolling, they load as you go.`;
    } else if(ctx.filter === "done"){
      msg = learned === 0
        ? `No learned words yet — tap the ✓ circle on a card to start your streak!`
        : `📚 ${learned} word${learned > 1 ? "s" : ""} banked so far. Keep going!`;
    } else {
      msg = left === 0
        ? `🏁 Day ${ctx.day} fully learned — <span lang="bn">সব শেষ!</span> Pick your next day from the calendar.`
        : `🏁 End of Day ${ctx.day}. ${left} word${left > 1 ? "s" : ""} still waiting — you've got this!`;
    }
    endNote.innerHTML = msg;
    show(endNote);
  }

  /* ---------- Word card factory ---------- */
  // Used by both the day list and the bookmarks panel, so the day number is
  // passed in explicitly rather than read off ctx.
  // opts.showDay → prepend a "Day n · theme" chip that jumps to that day.
  function makeCard(w, i, batchPos, day, opts = {}){
    const learned    = learnedSet(day).has(i);
    const bookmarked = bookmarkSet(day).has(i);

    const li = document.createElement("li");
    li.className = "wcard" + (learned ? " learned" : "") + (bookmarked ? " marked" : "");
    li.dataset.idx = i;
    li.dataset.day = day;
    li.style.animationDelay = (batchPos * 45) + "ms";

    const syns = (Array.isArray(w.synonyms) ? w.synonyms : [])
      .map(s => `<span>${esc(s)}</span>`).join("");
    const exList = Array.isArray(w.exampleSentence)
      ? w.exampleSentence
      : (w.exampleSentence ? [w.exampleSentence] : []);
    const bnList = Array.isArray(w.exampleSentenceBn) ? w.exampleSentenceBn : [];

    // Each example carries an optional Bangla translation behind a collapse,
    // for students who can't decode the English sentence on their own.
    const examples = exList.map((s, k) => {
      const bn = bnList[k];
      const id = "tr" + (++uid);
      return `<div class="wcard-exwrap">
          <blockquote class="wcard-ex">${esc(s)}</blockquote>
          ${bn ? `<button class="tr-toggle" type="button" aria-expanded="false" aria-controls="${id}">
              <svg class="tr-caret" viewBox="0 0 24 24" width="13" height="13" fill="none"
                   stroke="currentColor" stroke-width="2.8" stroke-linecap="round"
                   stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
              <span lang="bn">বাংলা অনুবাদ</span>
            </button>
            <p class="wcard-tr" id="${id}" lang="bn" hidden>${esc(bn)}</p>` : ""}
        </div>`;
    }).join("");

    li.innerHTML = `
      ${opts.showDay ? `<button class="wcard-day" type="button"
          aria-label="Open Day ${day}">Day ${day}${opts.theme ? ` · ${esc(opts.theme)}` : ""}</button>` : ""}
      <div class="wcard-top">
        <span class="wcard-no">${String(i + 1).padStart(2, "0")}</span>
        <h3 class="wcard-word"><span>${esc(w.actualWord)}</span>
          <button class="say" type="button" aria-label="Listen to ${esc(w.actualWord)}">
            <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
              <path d="M3 9v6h4l5 4V5L7 9H3z" fill="currentColor"/>
              <path d="M16.5 8.5a5 5 0 010 7" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </h3>
        <button class="bm" type="button" aria-pressed="${bookmarked}"
                title="Bookmark for revision"
                aria-label="Bookmark ${esc(w.actualWord)}">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path d="M7 3h10a1 1 0 011 1v17l-6-3.6L6 21V4a1 1 0 011-1z"
                  stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
          </svg>
        </button>
        <button class="check" type="button" aria-pressed="${learned}"
                aria-label="Mark ${esc(w.actualWord)} as learned">
          <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="4 12.5 10 18.5 20 6.5"/></svg>
        </button>
      </div>
      <p class="wcard-bn" lang="bn">${esc(w.meaningInBangla)}</p>
      ${syns ? `<p class="wcard-syn"><span class="lbl">SYN</span>${syns}</p>` : ""}
      ${examples}`;

    li.querySelector(".check").addEventListener("click", () => toggleLearned(day, i, li));
    li.querySelector(".bm").addEventListener("click",
      () => toggleBookmark(day, i, w, li, !!opts.showDay));

    const sayBtn = li.querySelector(".say");
    if(sayBtn) sayBtn.addEventListener("click", () => speak(w.actualWord));

    const dayBtn = li.querySelector(".wcard-day");
    if(dayBtn) dayBtn.addEventListener("click", () => openDay(day));

    li.querySelectorAll(".tr-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const open  = btn.getAttribute("aria-expanded") === "true";
        const panel = btn.nextElementSibling;
        btn.setAttribute("aria-expanded", String(!open));
        if(panel) panel.hidden = open;
      });
    });

    return li;
  }

  /* ---------- Word / day completion ---------- */
  function toggleLearned(day, i, cardEl){
    const info = dayMap.get(day);
    if(!info) return;

    const key = String(day);
    const set = learnedSet(day);
    const nowLearned = !set.has(i);

    nowLearned ? set.add(i) : set.delete(i);
    state.words[key] = [...set];

    // Mirror day-level completion into state.days
    if(set.size === info.words.length){
      if(!state.days.includes(day)) state.days.push(day);
    } else {
      state.days = state.days.filter(d => d !== day);
    }
    persist();

    cardEl.classList.toggle("learned", nowLearned);
    cardEl.querySelector(".check").setAttribute("aria-pressed", String(nowLearned));

    if(ctx && ctx.day === day) updateDayHeader(true);
    else updateMasthead();          // toggled from the bookmarks panel
  }

  /* ---------- Bookmarks ---------- */
  function totalBookmarks(){
    return Object.keys(state.bookmarks)
      .reduce((n, k) => n + (state.bookmarks[k] || []).length, 0);
  }

  // removeOnUnset → card lives in the bookmarks panel, so un-saving takes it away
  function toggleBookmark(day, i, w, cardEl, removeOnUnset){
    const key = String(day);
    const set = bookmarkSet(day);
    const nowMarked = !set.has(i);

    nowMarked ? set.add(i) : set.delete(i);
    if(set.size) state.bookmarks[key] = [...set].sort((a, b) => a - b);
    else delete state.bookmarks[key];
    persist();

    if(!nowMarked && removeOnUnset){
      cardEl.classList.add("leaving");
      setTimeout(() => { cardEl.remove(); refreshBookmarkMeta(); }, 260);
    } else {
      cardEl.classList.toggle("marked", nowMarked);
      cardEl.querySelector(".bm").setAttribute("aria-pressed", String(nowMarked));
    }

    updateBookmarkCount();
    toast(nowMarked
      ? `🔖 “${w.actualWord}” saved to bookmarks`
      : `Removed “${w.actualWord}” from bookmarks`);
  }

  function updateBookmarkCount(){
    const n = totalBookmarks();
    tabBmCount.textContent = n;
    tabBookmarks.classList.toggle("has-items", n > 0);
  }

  function renderBookmarks(){
    const items = allBookmarks();
    bmList.innerHTML = "";
    updateBookmarkCount();

    if(!items.length){
      hide(bmList); hide(bmCount); show(bmEmpty);
      return;
    }
    hide(bmEmpty); show(bmList); show(bmCount);

    const days = new Set(items.map(it => it.day)).size;
    bmCount.innerHTML =
      `<b>${items.length}</b> word${items.length > 1 ? "s" : ""} saved from <b>${days}</b> day${days > 1 ? "s" : ""}`;

    const frag = document.createDocumentFragment();
    items.forEach((it, k) => frag.appendChild(
      makeCard(it.word, it.idx, Math.min(k, 7), it.day, { showDay: true, theme: it.theme })
    ));
    bmList.appendChild(frag);
  }

  // Called after a card is removed in place — avoids a full re-render
  function refreshBookmarkMeta(){
    const items = allBookmarks();
    if(!items.length){ hide(bmList); hide(bmCount); show(bmEmpty); return; }
    const days = new Set(items.map(it => it.day)).size;
    bmCount.innerHTML =
      `<b>${items.length}</b> word${items.length > 1 ? "s" : ""} saved from <b>${days}</b> day${days > 1 ? "s" : ""}`;
  }

  function updateDayHeader(animate = true){
    if(!ctx) return;
    const total   = ctx.info.words.length;
    const learned = learnedSet(ctx.day).size;
    const pct     = total ? Math.round(learned / total * 100) : 0;

    dvCount.innerHTML = `<b>${learned}</b> of <b>${total}</b> words learned`;
    dvBar.style.width = pct + "%";
    dvBarWrap.setAttribute("aria-valuenow", pct);

    ringNum.textContent = pct + "%";
    ringVal.style.strokeDashoffset = RING_C * (1 - pct / 100);
    ringWrap.classList.toggle("full", pct === 100);

    updateFilterChips(learned, total);
    updateMasthead();                  // keep grid stats fresh for return

    const complete = pct === 100;
    if(complete){
      showDoneBanner(animate && !ctx.wasComplete);
    } else {
      hide(doneBanner);
    }
    ctx.wasComplete = complete;
  }

  function updateFilterChips(learned, total){
    chipTodo.innerHTML = `To learn · <b>${total - learned}</b>`;
    chipDone.innerHTML = `Learned · <b>${learned}</b>`;
  }

  function showDoneBanner(celebrateIt){
    doneTitle.textContent = `Day ${ctx.day} complete!`;
    show(doneBanner);
    if(celebrateIt){
      confetti(doneBanner);
      toast(`Day ${ctx.day} complete — শুভকামনা! 🎉`);
      if(navigator.vibrate){ try{ navigator.vibrate(35); }catch(e){} }
    }
  }

  /* ---------- Filters ---------- */
  function setFilter(f, chip){
    if(!ctx || ctx.filter === f) return;
    ctx.filter   = f;
    ctx.rendered = 0;
    ctx.finished = false;
    wordList.innerHTML = "";
    hide(endNote);

    [chipAll, chipTodo, chipDone].forEach(c => c.classList.toggle("on", c === chip));
    loadBatch(false);
    observeSentinel();
  }

  /* ---------- Sentinel / IntersectionObserver ---------- */
  function setupObserver(){
    if("IntersectionObserver" in window){
      io = new IntersectionObserver(entries => {
        entries.forEach(en => {
          if(en.isIntersecting && !batchBusy && ctx && !ctx.finished) loadBatch(true);
        });
      }, { rootMargin: "420px 0px" });
    } else {
      window.addEventListener("scroll", () => {
        if(!ctx || batchBusy || ctx.finished) return;
        if(sentinel.getBoundingClientRect().top < innerHeight + 400) loadBatch(true);
      }, { passive: true });
    }
  }
  function observeSentinel(){ if(io) io.observe(sentinel); }

  // Compact the pinned day header once the page leaves the top
  let syncSticky = () => {};
  function setupStickyHeader(){
    if(!dayTop) return;
    // Cheap enough to run straight off the scroll event: one scroll read and a
    // classList.toggle, which no-ops when the value is unchanged.
    syncSticky = () => dayTop.classList
      .toggle("is-stuck", (window.scrollY || window.pageYOffset || 0) > 4);
    window.addEventListener("scroll", syncSticky, { passive: true });
    syncSticky();
  }

  /* ---------- Routing (hash + history) ---------- */
  function goHome(updateHash = true){
    homeTab === "bookmarks" ? showBookmarks(updateHash) : showGrid(updateHash);
  }

  function route(){
    const m = location.hash.match(/^#day-(\d+)$/);
    if(m){
      const n = +m[1];
      if(isPlayable(n) && !(currentView === "day" && ctx && ctx.day === n)) openDay(n, false);
    } else if(location.hash === "#bookmarks"){
      if(currentView !== "bookmarks") showBookmarks(false);
    } else if(currentView !== "grid"){
      showGrid(false);
    }
  }
  function routeInitial(){
    const m = location.hash.match(/^#day-(\d+)$/);
    if(m && isPlayable(+m[1])){ openDay(+m[1], false); return; }
    if(location.hash === "#bookmarks"){ showBookmarks(false); return; }
    if(state.last.view === "day" && isPlayable(state.last.day)){
      history.replaceState(null, "", "#day-" + state.last.day);
      openDay(state.last.day, false);
    } else if(state.last.view === "bookmarks"){
      history.replaceState(null, "", "#bookmarks");
      showBookmarks(false);
    } else {
      showGrid(false);
    }
  }

  /* ---------- Static events ---------- */
  function bindEvents(){
    backBtn.addEventListener("click", () => goHome(true));

    tabCalendar .addEventListener("click", () => { if(currentView !== "grid")      showGrid(true); });
    tabBookmarks.addEventListener("click", () => { if(currentView !== "bookmarks") showBookmarks(true); });
    bmEmptyBtn  .addEventListener("click", () => showGrid(true));

    chipAll .addEventListener("click", () => setFilter("all",  chipAll));
    chipTodo.addEventListener("click", () => setFilter("todo", chipTodo));
    chipDone.addEventListener("click", () => setFilter("done", chipDone));

    doneNext.addEventListener("click", () => {
      if(!ctx) return;
      let next = null;
      for(let n = ctx.day + 1; n <= TOTAL_DAYS; n++){
        if(isPlayable(n)){ next = n; break; }
      }
      if(next) openDay(next);
      else { toast("That was the final day — অসাধারণ! 🏆"); showGrid(true); }
    });

    document.addEventListener("keydown", e => {
      if(e.key === "Escape" && currentView === "day") goHome(true);
    });

    window.addEventListener("hashchange", route);
    window.addEventListener("popstate",  route);
  }

  /* ---------- Boot ---------- */
  function init(){
    bindEvents();
    setupObserver();
    setupStickyHeader();
    renderGridSkeleton();

    try{
      DATA       = loadData();
      TOTAL_DAYS = (DATA.course && DATA.course.totalDays) || 60;
      (DATA.days || []).forEach(d => dayMap.set(d.day, d));

      migrateLayout();
      renderMastheadSafe();
      updateBookmarkCount();
      renderGrid();
      routeInitial();
    }catch(err){
      console.error("[VocabBuilder] data load failed:", err);
      dayGrid.innerHTML = "";
      showFatal();
    }
  }
  function renderMastheadSafe(){
    try{ updateMasthead(); }catch(e){ /* stats are non-critical */ }
  }

  init();
})();