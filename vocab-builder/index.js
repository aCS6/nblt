/* ==========================================================================
   Vocab Builder · IELTS Vocabulary Challenge
   Vanilla JS — data loading, lazy batch rendering, localStorage persistence,
   view routing and state restoration. No dependencies.
   Includes a global word search, type filter chips (word / phrasal / idiom /
   linking) and a self-test quiz overlay (flip + multiple choice).

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
  const SCHEMA      = 3;             // 3 = mixed 70-day layout (was 2 = 60-day themed + appended enrichment)
  const BASE_TITLE  = "Vocab Builder · IELTS Vocabulary Challenge";
  const RING_C      = 2 * Math.PI * 26; // progress-ring circumference
  const TYPE_LABEL  = { phrasal: "Phrasal verb", idiom: "Idiom", linking: "Linking" };

  /* ---------- DOM refs ---------- */
  const $ = (s, r = document) => r.querySelector(s);

  const gridView  = $("#gridView"),  dayView   = $("#dayView");
  const dayGrid   = $("#dayGrid"),   fatalEl   = $("#fatal");

  const tabCalendar  = $("#tabCalendar"),  tabBookmarks = $("#tabBookmarks"),
        tabSearch     = $("#tabSearch");
  const tabBmCount   = $("#tabBmCount");
  const calendarPanel = $("#calendarPanel"), bookmarkPanel = $("#bookmarkPanel"),
        searchPanel  = $("#searchPanel");
  const bmList     = $("#bmList"), bmEmpty = $("#bmEmpty"),
        bmCount    = $("#bmCount"), bmEmptyBtn = $("#bmEmptyBtn");
  const searchBox  = $("#searchBox"), searchClear = $("#searchClear"),
        searchMeta = $("#searchMeta"), searchList = $("#searchList"),
        searchEmpty = $("#searchEmpty");
  const statDays  = $("#statDays"),  statWords = $("#statWords"), statToday = $("#statToday");
  const overallBar = $("#overallBar"), overallPct = $("#overallPct"),
        overallBarWrap = $("#overallBarWrap"), resumeBtn = $("#resumeBtn");

  const backBtn  = $("#backBtn"), dvEyebrow = $("#dvEyebrow"), dvTheme = $("#dvTheme");
  const dayTop   = $("#dayTop");
  const ringWrap = $("#ringWrap"), ringVal  = $("#ringVal"), ringNum = $("#ringNum");
  const dvBar    = $("#dvBar"),    dvBarWrap = $("#dvBarWrap"), dvCount = $("#dvCount");
  const chipAll  = $("#chipAll"),  chipTodo = $("#chipTodo"), chipDone = $("#chipDone");
  const typeAll  = $("#typeAll"),  typeWord = $("#typeWord"), typePhr = $("#typePhr"),
        typeIdiom = $("#typeIdiom"), typeLink = $("#typeLink");

  const doneBanner = $("#doneBanner"), doneTitle = $("#doneTitle"), doneNext = $("#doneNext");
  const wordList   = $("#wordList"),   loaderEl = $("#loader");
  const endNote    = $("#endNote"),    sentinel = $("#sentinel");
  const toastEl    = $("#toast");

  // Self-test / quiz overlay
  const quizBtn  = $("#quizBtn"),  quizOverlay = $("#quizOverlay");
  const quizSetup = $("#quizSetup"), quizRun = $("#quizRun"), quizDone = $("#quizDone");
  const quizClose = $("#quizClose"), quizDay = $("#quizDay");
  const quizMode = $("#quizMode"), quizLen = $("#quizLen"), quizStart = $("#quizStart");
  const quizProgLabel = $("#quizProgLabel"), quizProgBar = $("#quizProgBar");
  const quizQ = $("#quizQ"), quizReveal = $("#quizReveal"),
        quizActions = $("#quizActions"), quizGotIt = $("#quizGotIt"),
        quizMissed = $("#quizMissed");
  const quizScore = $("#quizScore"), quizScoreBar = $("#quizScoreBar"),
        quizMissList = $("#quizMissList");
  const quizRetry = $("#quizRetry"), quizAgain = $("#quizAgain"), quizExit = $("#quizExit");

  /* ---------- State ---------- */
  let DATA       = null;
  const dayMap   = new Map();       // day number → { day, theme, words[] }
  let TOTAL_DAYS = 70;
  let uid        = 0;               // unique ids for collapse panels

  let state       = loadState();    // persisted: words, bookmarks, days, last view, start date
  let ctx         = null;           // active day context
  let currentView = "grid";         // "grid" | "bookmarks" | "day"
  let homeTab     = "grid";         // tab to return to when leaving a day
  let batchBusy   = false;
  let io          = null;           // IntersectionObserver
  let toastTimer  = null;
  let quiz        = null;           // active self-test session { qs, pos, correct, wrong }

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
    if(ctx.type !== "all" && (ctx.info.words[i] || {}).type !== ctx.type) return false;
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

  /* ---------- Migration ----------
     Schema history:
       • 1 = 30 days × ~82 words (one themed day per theme)
       • 2 = 60 themed days + enrichment days appended after
       • 3 = fully MIXED ~70-day layout — every day blends words, phrasal
            verbs, idioms and linking words.

     To move 2 → 3 every word in the new layout carries
     `from: [{ day, idx }, …]` — the (day, index) positions the same word
     occupied in the old 2-layout. The app rebuilds an old-key → new-key map
     from those pointers, so saved progress and bookmarks remap exactly, even
     though the whole course was re-shuffled. (A word that lived in several
     old slots — e.g. a phrasal verb that also appeared in a themed day —
     maps every old slot onto its one new position.) */
  function migrateLayout(){
    if(state.schema === SCHEMA) return;

    // 2 → 3: word-level remap using each word's `from` pointers.
    if(state.schema < 3){
      const keyMap = new Map();               // "oldDay:oldIdx" → "newDay:newIdx"
      (DATA.days || []).forEach(d =>
        (d.words || []).forEach((w, i) =>
          (w.from || []).forEach(f => keyMap.set(f.day + ":" + f.idx, d.day + ":" + i))));

      if(keyMap.size){
        const remap = src => {
          const out = {};
          Object.keys(src || {}).forEach(k => {
            (src[k] || []).forEach(i => {
              const m = keyMap.get(k + ":" + i);
              if(!m) return;
              const [nd, ni] = m.split(":").map(Number);
              (out[String(nd)] = out[String(nd)] || []).push(ni);
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

        // last.day → a new day that contains any word previously in that day
        if(state.last && state.last.day){
          let found = null;
          DATA.days.forEach(d => {
            if(found) return;
            d.words.forEach(w => {
              if(found) return;
              if((w.from || []).some(f => f.day === state.last.day)) found = d.day;
            });
          });
          if(found) state.last.day = found;
        }
      }
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

    ctx = { day: n, info, rendered: 0, filter: "all", type: "all", finished: false, wasComplete: false };

    // Header
    dvEyebrow.textContent = `DAY ${n} / ${TOTAL_DAYS}`;
    dvTheme.textContent   = info.theme;
    document.title        = `Day ${n} · ${info.theme} — Vocab Builder`;

    // Reset list + UI
    wordList.innerHTML = "";
    hide(endNote); hide(doneBanner); hide(loaderEl);
    updateFilterChips(0, info.words.length);
    chipAll.classList.add("on"); chipTodo.classList.remove("on"); chipDone.classList.remove("on");
    [typeAll, typeWord, typePhr, typeIdiom, typeLink].forEach(c =>
      c.classList.toggle("on", c === typeAll));

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

  function showSearch(updateHash = true){
    ctx = null;
    dayView.hidden  = true;
    gridView.hidden = false;
    setTab("search");
    animateIn(gridView);
    currentView = "search";
    homeTab     = "search";

    renderSearch(searchBox.value);

    state.last = { view: "search", day: state.last.day };
    persist();
    document.title = `Search · ${BASE_TITLE}`;
    window.scrollTo({ top: 0, behavior: "auto" }); syncSticky();

    if(updateHash && location.hash !== "#search") location.hash = "search";
  }

  /* ---------- Global search ---------- */
  // Flatten every day into a searchable index: { day, idx, word, theme }
  let searchIndex = null;
  function buildSearchIndex(){
    if(searchIndex) return searchIndex;
    searchIndex = [];
    dayMap.forEach(info => {
      if(!info || !info.words) return;
      info.words.forEach((w, i) => searchIndex.push({ day: info.day, idx: i, word: w, theme: info.theme }));
    });
    return searchIndex;
  }
  function searchHits(q){
    const qq = q.trim().toLowerCase();
    if(qq.length < 2) return [];
    return buildSearchIndex().filter(it => {
      const w = it.word;
      const hay = [w.actualWord, w.meaningInBangla, w.englishMeaning,
                   Array.isArray(w.synonyms) ? w.synonyms.join(" ") : w.synonyms,
                   Array.isArray(w.exampleSentence) ? w.exampleSentence.join(" ") : w.exampleSentence]
        .filter(Boolean).join(" ").toLowerCase();
      return hay.includes(qq);
    });
  }
  function renderSearch(q){
    const qq = (q || "").trim();
    searchClear.hidden = qq.length === 0;

    searchList.innerHTML = "";
    if(qq.length < 2){
      hide(searchMeta);
      searchEmpty.querySelector("h3").textContent = "Type to search";
      searchEmpty.querySelector("p").textContent =
        "Search any word, Bangla meaning, synonym or example across every day. Try “education”, “তবে” or “bustling”.";
      show(searchEmpty);
      return;
    }

    const hits = searchHits(qq);
    if(!hits.length){
      searchEmpty.querySelector("h3").textContent = "No matches";
      searchEmpty.querySelector("p").textContent =
        "Try a different word, or a Bangla meaning. Type at least 2 letters to search.";
      hide(searchMeta); show(searchEmpty);
      return;
    }
    hide(searchEmpty); show(searchMeta);
    searchMeta.innerHTML = `<b>${hits.length}</b> match${hits.length > 1 ? "es" : ""} for “${esc(qq)}” across all days`;

    const frag = document.createDocumentFragment();
    hits.slice(0, 40).forEach((it, k) =>
      frag.appendChild(makeCard(it.word, it.idx, Math.min(k, 7), it.day,
        { showDay: true, theme: it.theme })));
    searchList.appendChild(frag);
  }

  // Calendar / bookmarks / search live side by side inside the grid view
  function setTab(name){
    const cal = name === "calendar", bm = name === "bookmarks", sr = name === "search";
    tabCalendar .classList.toggle("on", cal);
    tabBookmarks.classList.toggle("on", bm);
    tabSearch    .classList.toggle("on", sr);
    tabCalendar .setAttribute("aria-selected", String(cal));
    tabBookmarks.setAttribute("aria-selected", String(bm));
    tabSearch    .setAttribute("aria-selected", String(sr));
    calendarPanel.hidden = !cal;
    bookmarkPanel.hidden = !bm;
    searchPanel.hidden   = !sr;
    if(sr && searchBox) searchBox.focus();
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
    const type       = TYPE_LABEL[w.type] ? w.type : "";

    const li = document.createElement("li");
    li.className = "wcard" + (learned ? " learned" : "") + (bookmarked ? " marked" : "")
                + (type ? " wcard-" + type : "");
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
      ${type ? `<span class="wcard-type">${esc(TYPE_LABEL[type])}</span>` : ""}
      ${w.englishMeaning ? `<p class="wcard-en">${esc(w.englishMeaning)}</p>` : ""}
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

  function setTypeFilter(t, chip){
    if(!ctx || ctx.type === t) return;
    ctx.type     = t;
    ctx.rendered = 0;
    ctx.finished = false;
    wordList.innerHTML = "";
    hide(endNote);

    [typeAll, typeWord, typePhr, typeIdiom, typeLink].forEach(c =>
      c.classList.toggle("on", c === chip));
    loadBatch(false);
    observeSentinel();
  }

  /* ---------- Self-test (quiz) ---------- */
  function openQuiz(){
    if(!ctx || !ctx.info.words.length) return;
    quizDay.textContent = ctx.day;

    const pool = ctx.info.words.map((w, i) => ({ w, i }))
      .filter(x => ctx.type === "all" || (x.w.type || "") === ctx.type);
    if(!pool.length){ toast("Nothing to quiz here yet"); return; }

    quiz = { pool, pos: 0, mode: "mcq", limit: 10, correct: 0, wrong: [], results: [] };

    quizSetup.hidden = false;
    quizRun.hidden   = true;
    quizDone.hidden  = true;
    quizOverlay.hidden = false;
    document.body.classList.add("quiz-open");
  }
  function closeQuiz(){
    quizOverlay.hidden = true;
    document.body.classList.remove("quiz-open");
    quiz = null;
  }
  function shuffle(arr){
    const a = arr.slice();
    for(let i = a.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function startQuiz(){
    if(!quiz) return;
    quiz.mode  = quizMode.value;
    quiz.limit = quizLen.value === "all" ? quiz.pool.length : parseInt(quizLen.value, 10);
    quiz.limit = Math.max(1, Math.min(quiz.limit, quiz.pool.length));
    quiz.questions = shuffle(quiz.pool).slice(0, quiz.limit);
    if(!quiz.questions.length){ toast("No words to quiz yet"); closeQuiz(); return; }
    quiz.pos = 0; quiz.correct = 0; quiz.wrong = []; quiz.results = [];

    quizSetup.hidden = true;
    quizDone.hidden  = true;
    quizRun.hidden   = false;
    renderQuestion();
  }
  function renderQuestion(){
    if(!quiz || quiz.pos >= quiz.questions.length) return finishQuiz();
    const q = quiz.questions[quiz.pos];
    quizProgLabel.textContent = (quiz.pos + 1) + " / " + quiz.questions.length;
    quizProgBar.style.width = (quiz.pos / quiz.questions.length * 100) + "%";

    if(quiz.mode === "flip"){
      renderFlipQuestion(q);
    } else {
      renderMcqQuestion(q);
    }
  }
  function renderFlipQuestion(q){
    quizQ.innerHTML = `
        <p class="quiz-prompt">What does this word mean?</p>
        <h3 class="quiz-word">${esc(q.w.actualWord)}</h3>
        ${TYPE_LABEL[q.w.type] ? `<p class="quiz-type-lbl">${esc(TYPE_LABEL[q.w.type])}</p>` : ""}
        <div class="quiz-answer" hidden>
          <p class="quiz-bn" lang="bn">${esc(q.w.meaningInBangla)}</p>
          ${q.w.englishMeaning ? `<p class="quiz-en">${esc(q.w.englishMeaning)}</p>` : ""}
        </div>`;
    quizReveal.hidden = false;
    quizActions.hidden = true;
    quizReveal.onclick = () => {
      const a = quizQ.querySelector(".quiz-answer");
      if(a) a.hidden = false;
      quizReveal.hidden = true;
      quizActions.hidden = false;
    };
  }
  function renderMcqQuestion(q){
    const correct = q.w.meaningInBangla;
    const others = shuffle(quiz.pool.filter(x => x.w.meaningInBangla !== correct)
      .map(x => x.w.meaningInBangla)).slice(0, 3);
    const options = shuffle([correct, ...others]);

    quizQ.innerHTML = `
        <p class="quiz-prompt">Pick the correct meaning</p>
        <h3 class="quiz-word">${esc(q.w.actualWord)}</h3>
        ${TYPE_LABEL[q.w.type] ? `<p class="quiz-type-lbl">${esc(TYPE_LABEL[q.w.type])}</p>` : ""}`;

    const box = document.createElement("div");
    box.className = "quiz-choices";
    options.forEach(opt => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "quiz-choice";
      b.innerHTML = `<span lang="bn">${esc(opt)}</span>`;
      b.addEventListener("click", () => answerMCQ(q, opt === correct, b, box));
      box.appendChild(b);
    });
    quizQ.appendChild(box);
    quizReveal.hidden = true;
    quizActions.hidden = true;
  }
  function answerMCQ(q, ok, btn, box){
    box.querySelectorAll("button").forEach(b => b.disabled = true);
    quiz.results.push({ q, ok });
    if(ok){
      btn.classList.add("right");
      setTimeout(() => nextQuestion(), 450);
    } else {
      btn.classList.add("wrong");
      box.querySelectorAll("button").forEach(b => {
        if(b !== btn && b.textContent.indexOf(q.w.meaningInBangla) !== -1) b.classList.add("right");
      });
      setTimeout(() => nextQuestion(), 1200);
    }
  }
  function recordFlip(ok){
    if(!quiz) return;
    const q = quiz.questions[quiz.pos];
    quiz.results.push({ q, ok });
    nextQuestion();
  }
  function nextQuestion(){
    quiz.pos++;
    renderQuestion();
  }
  function finishQuiz(){
    if(!quiz) return;
    quiz.correct = quiz.results.filter(r => r.ok).length;
    quiz.wrong   = quiz.results.filter(r => !r.ok).map(r => r.q);

    quizRun.hidden  = true;
    quizDone.hidden = false;

    const total = quiz.results.length || 1;
    const pct = Math.round(quiz.correct / total * 100);
    quizScore.innerHTML = `<b>${quiz.correct}</b> / ${quiz.results.length} <span>· ${pct}%</span>`;
    quizScoreBar.style.width = pct + "%";

    quizMissList.innerHTML = "";
    if(quiz.wrong.length){
      quiz.wrong.slice(0, 12).forEach(q => {
        const li = document.createElement("li");
        li.innerHTML = `<b>${esc(q.w.actualWord)}</b> — <span lang="bn">${esc(q.w.meaningInBangla)}</span>`;
        quizMissList.appendChild(li);
      });
    } else {
      const li = document.createElement("li");
      li.className = "quiz-perfect";
      li.textContent = "Perfect score - nothing missed!";
      quizMissList.appendChild(li);
    }
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
    if(homeTab === "bookmarks") showBookmarks(updateHash);
    else if(homeTab === "search") showSearch(updateHash);
    else showGrid(updateHash);
  }

  function route(){
    const m = location.hash.match(/^#day-(\d+)$/);
    if(m){
      const n = +m[1];
      if(isPlayable(n) && !(currentView === "day" && ctx && ctx.day === n)) openDay(n, false);
    } else if(location.hash === "#bookmarks"){
      if(currentView !== "bookmarks") showBookmarks(false);
    } else if(location.hash === "#search"){
      if(currentView !== "search") showSearch(false);
    } else if(currentView !== "grid"){
      showGrid(false);
    }
  }
  function routeInitial(){
    const m = location.hash.match(/^#day-(\d+)$/);
    if(m && isPlayable(+m[1])){ openDay(+m[1], false); return; }
    if(location.hash === "#bookmarks"){ showBookmarks(false); return; }
    if(location.hash === "#search"){ showSearch(false); return; }
    if(state.last.view === "day" && isPlayable(state.last.day)){
      history.replaceState(null, "", "#day-" + state.last.day);
      openDay(state.last.day, false);
    } else if(state.last.view === "bookmarks"){
      history.replaceState(null, "", "#bookmarks");
      showBookmarks(false);
    } else if(state.last.view === "search"){
      history.replaceState(null, "", "#search");
      showSearch(false);
    } else {
      showGrid(false);
    }
  }

  /* ---------- Static events ---------- */
  function bindEvents(){
    backBtn.addEventListener("click", () => goHome(true));

    tabCalendar .addEventListener("click", () => { if(currentView !== "grid")      showGrid(true); });
    tabBookmarks.addEventListener("click", () => { if(currentView !== "bookmarks") showBookmarks(true); });
    tabSearch   .addEventListener("click", () => { if(currentView !== "search")     showSearch(true); });
    bmEmptyBtn  .addEventListener("click", () => showGrid(true));

    chipAll .addEventListener("click", () => setFilter("all",  chipAll));
    chipTodo.addEventListener("click", () => setFilter("todo", chipTodo));
    chipDone.addEventListener("click", () => setFilter("done", chipDone));

    typeAll  .addEventListener("click", () => setTypeFilter("all",     typeAll));
    typeWord .addEventListener("click", () => setTypeFilter("word",    typeWord));
    typePhr  .addEventListener("click", () => setTypeFilter("phrasal", typePhr));
    typeIdiom.addEventListener("click", () => setTypeFilter("idiom",   typeIdiom));
    typeLink .addEventListener("click", () => setTypeFilter("linking", typeLink));

    // Search
    searchBox.addEventListener("input", () => renderSearch(searchBox.value));
    searchClear.addEventListener("click", () => { searchBox.value = ""; renderSearch(""); searchBox.focus(); });

    // Self-test / quiz
    quizBtn.addEventListener("click", openQuiz);
    quizClose.addEventListener("click", closeQuiz);
    quizStart.addEventListener("click", startQuiz);
    quizGotIt.addEventListener("click", () => recordFlip(true));
    quizMissed.addEventListener("click", () => recordFlip(false));
    quizRetry.addEventListener("click", () => { if(quiz){ quiz.pos = 0; quiz.results = []; quizDone.hidden = true; quizRun.hidden = false; renderQuestion(); } });
    quizAgain.addEventListener("click", () => { if(quiz){ quiz.results = []; quizDone.hidden = true; quizSetup.hidden = false; } });
    quizExit.addEventListener("click", closeQuiz);

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
      if(e.key === "Escape"){
        if(!quizOverlay.hidden){ closeQuiz(); return; }
        if(currentView === "day") goHome(true);
      }
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
      TOTAL_DAYS = (DATA.course && DATA.course.totalDays) || 70;
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