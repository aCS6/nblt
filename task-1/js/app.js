/* ============================================================
   IELTS Task 1 Study Hub — app logic
   Enhancements (2026-08):
     • CHAPTERS guard — graceful error page if data fails to load
     • try/catch in renderBlock — unknown/broken blocks never crash the app
     • renderBlock: new 'annotated' type for examiner-commentary samples
     • renderBlock: new 'bandtable' type for the 6/7/8 band descriptor table
     • Keyboard nav: ArrowUp/Down skip to prev/next chapter from anywhere
   ============================================================ */
(function () {
  "use strict";

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

  const content = $("#content");
  const nav = $("#nav");
  const progressFill = $("#progressFill");
  const progressCount = $("#progressCount");
  const progressHint = $("#progressHint");
  const topbarTitle = $("#topbarTitle");
  const footPrev = $("#footPrev");
  const footNext = $("#footNext");
  const footPager = $("#footPager");
  const toast = $("#toast");

  const STORE_KEY = "ielts-task1-progress-v1";
  let currentId = "intro";

  /* ---------------- progress ---------------- */
  function loadDone() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveDone(d) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(d)); } catch (e) {}
  }
  const doneMap = loadDone();

  function markDone(id) {
    if (!doneMap[id]) {
      doneMap[id] = true;
      saveDone(doneMap);
      updateProgress();
    }
  }

  function updateProgress() {
    const total = CHAPTERS.length;
    const done = CHAPTERS.filter((c) => doneMap[c.id]).length;
    const pct = Math.round((done / total) * 100);
    progressFill.style.width = pct + "%";
    progressCount.textContent = pct + "%";
    progressHint.textContent = pct === 100
      ? "Amazing! You covered everything. Rewrite a sample now! 🏆"
      : "Finish every chapter to be exam-ready ✨";
    $$(".nav-item").forEach((el) => {
      el.classList.toggle("done", !!doneMap[el.dataset.id]);
    });
  }

  function showToast(msg, tone) {
    toast.textContent = msg;
    toast.className = "toast show" + (tone ? " " + tone : "");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => { toast.className = "toast"; }, 2200);
  }

  /* ---------------- sidebar ---------------- */
  function buildNav() {
    let lastGroup = null;
    nav.innerHTML = "";
    CHAPTERS.forEach((c, i) => {
      if (c.group !== lastGroup) {
        const g = document.createElement("div");
        g.className = "nav-group-label";
        g.textContent = c.group;
        nav.appendChild(g);
        lastGroup = c.group;
      }
      const b = document.createElement("button");
      b.className = "nav-item";
      b.dataset.id = c.id;
      b.dataset.index = i;
      b.innerHTML =
        '<span class="nav-ico">' + c.icon + "</span>" +
        '<span class="nav-num">' + (i + 1) + "</span>" +
        "<span>" + c.title + "</span>" +
        '<span class="nav-check">✓</span>';
      b.addEventListener("click", () => go(c.id));
      nav.appendChild(b);
    });
  }

  /* ---------------- navigation ---------------- */
  function go(id) {
    const idx = CHAPTERS.findIndex((c) => c.id === id);
    if (idx < 0) return;
    currentId = id;
    markDone(id);
    renderChapter(CHAPTERS[idx]);
    renderFoot(idx);
    updateNavState();
    closeSidebar();
    content.scrollTop = 0;
    window.scrollTo(0, 0);
    try { history.replaceState(null, "", "#" + id); } catch (e) {}
    updateProgress();
  }

  function updateNavState() {
    $$(".nav-item").forEach((el) => el.classList.toggle("active", el.dataset.id === currentId));
  }

  function renderFoot(idx) {
    topbarTitle.textContent = CHAPTERS[idx].title;
    footPager.innerHTML = CHAPTERS.map((c, i) =>
      '<span class="dot' + (i === idx ? " on" : "") + '" data-i="' + i + '"></span>'
    ).join("");
    footPrev.style.visibility = idx === 0 ? "hidden" : "visible";
    footNext.style.visibility = idx === CHAPTERS.length - 1 ? "hidden" : "visible";
    footNext.innerHTML = idx === CHAPTERS.length - 1 ? "" : "Next chapter →";
    footNext.dataset.i = idx + 1;
    footPrev.dataset.i = idx - 1;
  }

  footPrev.addEventListener("click", () => {
    const i = parseInt(footPrev.dataset.i, 10);
    if (!isNaN(i) && CHAPTERS[i]) go(CHAPTERS[i].id);
  });
  footNext.addEventListener("click", () => {
    const i = parseInt(footNext.dataset.i, 10);
    if (!isNaN(i) && CHAPTERS[i]) go(CHAPTERS[i].id);
  });
  footPager.addEventListener("click", (e) => {
    const d = e.target.dataset.i;
    if (d != null && CHAPTERS[+d]) go(CHAPTERS[+d].id);
  });

  /* ---------------- sidebar open/close ---------------- */
  const sidebar = $("#sidebar");
  const overlay = $("#sidebarOverlay");
  function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
  }
  $("#menuBtn").addEventListener("click", () => {
    sidebar.classList.add("open");
    overlay.classList.add("show");
  });
  $("#sidebarClose").addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);

  $("#resetBtn").addEventListener("click", () => {
    if (confirm("Reset all progress?")) {
      Object.keys(doneMap).forEach((k) => delete doneMap[k]);
      saveDone(doneMap);
      updateProgress();
      showToast("Progress reset", "bad");
    }
  });

  /* ============================================================
     Rendering blocks
     ============================================================ */
  function el(tag, cls, html) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function renderChapter(ch) {
    content.innerHTML = "";

    // hero
    const hero = el("header", "ch-hero");
    hero.innerHTML =
      '<div class="ch-breadcrumb"><span>Chapter</span><span>·</span><span>' + ch.group + "</span></div>" +
      '<div class="ch-ico">' + ch.hero.icon + "</div>" +
      '<h1 class="ch-title">' + ch.hero.title + "</h1>" +
      (ch.hero.sub ? '<p class="ch-sub">' + ch.hero.sub + "</p>" : "");
    content.appendChild(hero);

    (ch.blocks || []).forEach((b) => content.appendChild(renderBlock(b)));

    // progress tip
    if (!doneMap[ch.id]) {
      const tip = el("div", "tip-banner");
      tip.innerHTML =
        '<span class="tb-ico">🎉</span><div><div class="tb-t">Chapter completed!</div>' +
        '<div class="tb-d">You just finished <b>' + ch.title + "</b>. Use the sidebar or the arrows below to keep going.</div></div>";
      content.appendChild(tip);
    }
  }

  function renderBlock(b) {
    const wrap = el("div", "block");
    try {
    switch (b.type) {
      case "para": {
        const p = el("p", "para", b.text);
        wrap.appendChild(p);
        break;
      }
      case "section": {
        wrap.className = "block";
        wrap.appendChild(el("div", "section-label", b.label));
        break;
      }
      case "stats": {
        const grid = el("div", "stat-grid");
        b.items.forEach((s) => {
          const card = el("div", "stat-card");
          card.innerHTML =
            '<div class="stat-num">' + s.num + "</div>" +
            '<div class="stat-label">' + s.label + "</div>" +
            '<span class="stat-tag" style="background:var(--' + (s.tone || "brand") + '-soft);color:var(--' + (s.tone || "brand") + ')">' + s.tag + "</span>";
          grid.appendChild(card);
        });
        wrap.appendChild(grid);
        break;
      }
      case "cards": {
        const grid = el("div", "card-grid");
        b.items.forEach((c) => {
          const card = el("div", "info-card");
          card.innerHTML =
            '<div class="ic-ico">' + c.icon + "</div>" +
            '<div class="ic-title">' + c.title + "</div>" +
            '<div class="ic-body">' + c.body + "</div>";
          grid.appendChild(card);
        });
        wrap.appendChild(grid);
        break;
      }
      case "chips": {
        if (b.label) wrap.appendChild(el("div", "section-label", b.label));
        const row = el("div", "chip-row");
        b.items.forEach((c) => {
          row.appendChild(el("span", "chip " + (c.tone || "blue"), c.t + (c.sub ? " <small>" + c.sub + "</small>" : "")));
        });
        wrap.appendChild(row);
        break;
      }
      case "vocab": {
        const grid = el("div", "vocab-grid");
        b.groups.forEach((g) => {
          const card = el("div", "vocab-card");
          card.innerHTML =
            '<div class="vocab-k">' + g.kind + "</div>" +
            '<div class="vocab-v">' + g.items.join(" · ") + "</div>";
          grid.appendChild(card);
        });
        wrap.appendChild(grid);
        break;
      }
      case "flash": {
        /* single:true → one card per row (wide horizontal layout) */
        const grid = el("div", b.single ? "flash-grid flash-grid-single" : "flash-grid");
        b.cards.forEach((f, i) => {
          const card = el("div", "flash");
          card.dataset.i = i;
          card.setAttribute("role", "button");
          card.setAttribute("tabindex", "0");
          card.setAttribute("aria-label", "flashcard: " + (f.k || "word"));
          card.innerHTML =
            '<div class="flash-inner">' +
            '<div class="flash-face flash-front"><div class="ff-k">' + (f.k || "word") + "</div>" +
            '<div class="ff-v">' + f.v + "</div><div class=\"flash-hint\">tap to flip</div></div>" +
            '<div class="flash-face flash-back"><div class="fb-t">' + (f.d || "see it!") + "</div>" +
            '<div class="fb-d">' + (f.x || "") + "</div></div>" +
            "</div>";
          card.addEventListener("click", () => card.classList.toggle("flipped"));
          card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); card.classList.toggle("flipped"); }
          });
          grid.appendChild(card);
        });
        wrap.appendChild(grid);
        break;
      }
      case "stepper": {
        const s = el("div", "stepper");
        b.steps.forEach((st, i) => {
          const step = el("div", "step");
          step.innerHTML =
            '<div class="step-dot">' + (i + 1) + "</div>" +
            '<div class="step-card"><div class="step-title">' + st.title + "</div>" +
            '<div class="step-body">' + st.body + "</div></div>";
          s.appendChild(step);
        });
        wrap.appendChild(s);
        break;
      }
      case "rules": {
        const list = el("div", "rule-list");
        b.items.forEach((r, i) => {
          const rule = el("div", "rule");
          rule.dataset.i = i;
          const tagTone = r.tone === "must" ? "tag-must" : r.tone === "no" ? "tag-no" : "tag-tip";
          rule.innerHTML =
            '<span class="rule-box">✓</span>' +
            '<div><div class="rule-title">' + r.title + "</div>" +
            '<div class="rule-desc">' + r.desc + "</div></div>" +
            '<span class="rule-tag ' + tagTone + '">' + r.tag + "</span>";
          rule.addEventListener("click", () => {
            rule.classList.toggle("checked");
            rule.setAttribute("aria-checked", rule.classList.contains("checked") ? "true" : "false");
            if (rule.classList.contains("checked")) showToast("Nice — keep them all ticked before the exam!", "good");
          });
          rule.setAttribute("role", "checkbox");
          rule.setAttribute("aria-checked", "false");
          rule.setAttribute("tabindex", "0");
          rule.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); rule.click(); }
          });
          list.appendChild(rule);
        });
        wrap.appendChild(list);
        break;
      }
      case "mistakes": {
        const list = el("div");
        b.items.forEach((m, i) => {
          const card = el("div", "mistake-card");
          card.innerHTML =
            '<div class="mistake-q"><span class="mq-ico">❌</span>' +
            '<div><div class="mq-t">' + m.q + "</div>" +
            '<div style="margin-top:4px;font-size:12.5px;color:var(--ink-soft)">Wrong: <span class="mq-x">' + m.wrong + "</span> · Right: <b style='color:var(--good)'>" + m.right + "</b></div>" +
            '<button class="mistake-reveal">Show the fix</button>' +
            '<div class="mistake-a"><div class="ma-t">💡 The fix</div>' + m.fix + "</div></div></div>";
          const btn = card.querySelector(".mistake-reveal");
          const ans = card.querySelector(".mistake-a");
          btn.addEventListener("click", () => {
            ans.classList.add("show");
            btn.style.display = "none";
          });
          list.appendChild(card);
        });
        wrap.appendChild(list);
        break;
      }
      case "compare": {
        const table = el("table", "cmp-table");
        table.innerHTML =
          "<thead><tr>" + b.head.map((h) => "<th>" + h + "</th>").join("") + "</tr></thead>" +
          "<tbody>" + b.rows.map((r) => "<tr>" + r.map((c) => "<td>" + c + "</td>").join("") + "</tr>").join("") + "</tbody>";
        wrap.appendChild(table);
        break;
      }
      case "remember": {
        const r = el("div", "remember");
        r.innerHTML = '<span class="rm-ico">🧠</span><div><div class="rm-t">' + b.title + "</div><div class='rm-d'>" + b.desc + "</div></div>";
        wrap.appendChild(r);
        break;
      }
      case "tip": {
        const t = el("div", "tip-banner");
        t.innerHTML = '<span class="tb-ico">💡</span><div><div class="tb-t">' + b.title + "</div><div class='tb-d'>" + b.desc + "</div></div>";
        wrap.appendChild(t);
        break;
      }
      case "diagrams": {
        const grid = el("div", "diagram-grid");
        b.items.forEach((d) => {
          const card = el("div", "diagram-card");
          card.innerHTML =
            '<img src="' + d.img + '" alt="' + d.title + '" loading="lazy">' +
            '<div class="dc-body"><div class="dc-t">' + ([d.icon, d.title].filter(Boolean).join(" ")) + "</div>" +
            '<div class="dc-d">' + d.desc + "</div></div>";
          grid.appendChild(card);
        });
        wrap.appendChild(grid);
        break;
      }
      case "samples": {
        const list = el("div");
        b.items.forEach((s, i) => {
          const card = el("div", "sample");
          card.innerHTML =
            '<div class="sample-head"><span class="sh-ico">' + s.icon + "</span>" +
            '<div class="sh-t">' + s.title + '</div><span class="sh-w">' + s.words + "</span></div>" +
            '<div class="sample-task">📌 ' + s.task + "</div>" +
            '<div class="sample-img"><img src="' + s.img + '" alt="' + s.title + '" loading="lazy"></div>' +
            '<div class="sample-answer"></div>';
          const ansBox = card.querySelector(".sample-answer");
          s.paras.forEach((p, pi) => {
            const pp = el("div", "sample-p");
            pp.style.display = "none";
            pp.innerHTML = '<span class="sp-tag tag-' + p.tone + '">' + p.tag + "</span>" + p.text;
            ansBox.appendChild(pp);
            if (pi === 0) pp.style.display = "block";
          });
          // reveal controls: progress counter + "reveal next" button + "reveal all"
          const paras = Array.from(ansBox.querySelectorAll(".sample-p"));
          const controls = el("div", "sample-controls");
          const left = el("div", "sample-controls-left");
          const progress = el("span", "sample-progress");
          const allBtn = el("button", "sample-reveal-all", "Reveal all");
          allBtn.type = "button";
          const nextBtn = el("button", "sample-reveal-btn");
          nextBtn.type = "button";
          left.appendChild(progress);
          left.appendChild(allBtn);
          controls.appendChild(left);
          controls.appendChild(nextBtn);
          ansBox.appendChild(controls);

          function visibleCount() { return paras.filter((p) => p.style.display !== "none").length; }
          function updateControls() {
            const v = visibleCount();
            progress.textContent = v + " of " + paras.length + " paragraphs";
            if (v >= paras.length) {
              nextBtn.disabled = true;
              nextBtn.textContent = "✓ Full answer revealed";
              allBtn.style.display = "none";
            } else {
              const next = paras[v].querySelector(".sp-tag");
              nextBtn.textContent = "Reveal " + (next ? next.textContent : "next paragraph") + " ↓";
            }
          }
          function revealNext() {
            const v = visibleCount();
            if (v < paras.length) {
              paras[v].style.display = "block";
              paras[v].scrollIntoView({ behavior: "smooth", block: "nearest" });
              updateControls();
              if (v + 1 === paras.length) showToast("Full answer revealed — now rewrite it yourself!", "good");
            }
          }
          nextBtn.addEventListener("click", (e) => { e.stopPropagation(); revealNext(); });
          allBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            paras.forEach((p) => (p.style.display = "block"));
            updateControls();
            showToast("Full answer revealed — now rewrite it yourself!", "good");
          });
          updateControls();
          list.appendChild(card);
        });
        wrap.appendChild(list);
        break;
      }
      case "tabs": {
        const tabs = el("div", "tabs");
        const bar = el("div", "tab-bar");
        const panels = el("div");
        b.tabs.forEach((t, i) => {
          const btn = el("button", "tab-btn" + (i === 0 ? " active" : ""), t.label);
          btn.dataset.i = i;
          bar.appendChild(btn);
          const panel = el("div", "tab-panel" + (i === 0 ? " active" : ""));
          (t.blocks || []).forEach((pb) => {
            const pbWrap = renderBlock(pb);
            pbWrap.classList.remove("block");
            panel.appendChild(pbWrap);
          });
          panels.appendChild(panel);
        });
        bar.addEventListener("click", (e) => {
          const btn = e.target.closest(".tab-btn");
          if (!btn) return;
          const i = +btn.dataset.i;
          $$(".tab-btn", tabs).forEach((x, xi) => x.classList.toggle("active", xi === i));
          $$(".tab-panel", tabs).forEach((x, xi) => x.classList.toggle("active", xi === i));
        });
        tabs.appendChild(bar);
        tabs.appendChild(panels);
        wrap.appendChild(tabs);
        break;
      }
      case "quiz": {
        const quiz = el("div", "quiz");
        let score = 0;
        quiz.innerHTML =
          '<div class="quiz-head"><span class="qz-ico">🧠</span><div class="qz-t">' + (b.title || "Quick check") +
          '</div><span class="qz-score">0 / ' + b.questions.length + "</span></div>" +
          '<div class="quiz-body"></div>';
        const body = quiz.querySelector(".quiz-body");
        const scoreEl = quiz.querySelector(".qz-score");

        function showQ(i) {
          body.innerHTML = "";
          const q = b.questions[i];
          const qb = el("div", "quiz-q show");
          qb.innerHTML = '<div class="qq-t">' + (i + 1) + ". " + q.q + "</div>" +
            '<div class="quiz-opts"></div>' +
            '<div class="quiz-fb"></div>' +
            '<button class="quiz-next">' + (i === b.questions.length - 1 ? "See my score" : "Next question") + "</button>";
          const opts = qb.querySelector(".quiz-opts");
          const fb = qb.querySelector(".quiz-fb");
          const nextBtn = qb.querySelector(".quiz-next");
          q.opts.forEach((o, oi) => {
            const ob = el("button", "quiz-opt", o);
            ob.addEventListener("click", () => {
              $$(".quiz-opt", opts).forEach((x) => (x.disabled = true));
              if (oi === q.correct) {
                ob.classList.add("correct");
                score++;
                fb.className = "quiz-fb good";
                fb.textContent = "✅ " + (q.right || q.fb);
              } else {
                ob.classList.add("wrong");
                opts.children[q.correct].classList.add("correct");
                fb.className = "quiz-fb bad";
                fb.textContent = "❌ " + (q.wrong || q.fb);
              }
              scoreEl.textContent = score + " / " + b.questions.length;
              nextBtn.classList.add("show");
            });
            opts.appendChild(ob);
          });
          nextBtn.addEventListener("click", () => {
            if (i + 1 < b.questions.length) showQ(i + 1);
            else showResult();
          });
          body.appendChild(qb);
        }

        function showResult() {
          body.innerHTML = "";
          const n = b.questions.length;
          const pct = Math.round((score / n) * 100);
          const emoji = pct === 100 ? "🏆" : pct >= 67 ? "🎉" : pct >= 34 ? "💪" : "📖";
          const msg = pct === 100 ? "Perfect! You really know this." :
            pct >= 67 ? "Great job! One more review and you'll nail it." :
            pct >= 34 ? "Good start — reread this chapter and try again." :
            "Don't worry — go back through the chapter and try again.";
          const res = el("div", "quiz-result show");
          res.innerHTML =
            '<div class="qr-emoji">' + emoji + "</div>" +
            '<div class="qr-t">' + score + " / " + n + "</div>" +
            '<div class="qr-s">' + msg + "</div>" +
            '<button class="quiz-restart">Try again</button>';
          res.querySelector(".quiz-restart").addEventListener("click", () => {
            score = 0;
            scoreEl.textContent = "0 / " + n;
            showQ(0);
          });
          body.appendChild(res);
        }

        showQ(0);
        wrap.appendChild(quiz);
        break;
      }
      case "trend": {
        wrap.appendChild(buildTrendPlayground());
        break;
      }
      /* ── NEW: framesteps — 4-panel Intro/Overview/Body1/Body2 frame ── */
      case "framesteps": {
        const toneConfig = {
          intro:    { label: "Introduction", bg: "#eff6ff", border: "#93c5fd", badge: "#2563eb", badgeTxt: "#fff" },
          overview: { label: "Overview",     bg: "#fffbeb", border: "#fcd34d", badge: "#d97706", badgeTxt: "#fff" },
          body1:    { label: "Body 1",        bg: "#f5f3ff", border: "#c4b5fd", badge: "#7c3aed", badgeTxt: "#fff" },
          body2:    { label: "Body 2",        bg: "#f0fdf4", border: "#86efac", badge: "#16a34a", badgeTxt: "#fff" }
        };
        const fsWrap = el("div", "framesteps");
        (b.items || []).forEach((item, idx) => {
          const cfg = toneConfig[item.tone] || toneConfig.intro;
          const panel = el("div", "fs-panel");
          panel.style.background = cfg.bg;
          panel.style.borderColor = cfg.border;

          // Header row: step number + paragraph label + icon
          const header = el("div", "fs-header");
          const badge = el("span", "fs-badge");
          badge.style.background = cfg.badge;
          badge.style.color = cfg.badgeTxt;
          badge.textContent = idx + 1;
          const labelEl = el("span", "fs-para-label");
          labelEl.textContent = cfg.label;
          const iconEl = el("span", "fs-icon");
          iconEl.textContent = item.icon || "";
          header.appendChild(badge);
          header.appendChild(labelEl);
          header.appendChild(iconEl);
          panel.appendChild(header);

          // Template sentence
          const tplRow = el("div", "fs-section-label", "Template");
          panel.appendChild(tplRow);
          const tpl = el("div", "fs-template");
          tpl.innerHTML = item.template;
          panel.appendChild(tpl);

          // Filled example — hidden behind a reveal button
          const exRow = el("div", "fs-section-label", "Filled example");
          panel.appendChild(exRow);
          const filled = el("div", "fs-filled");
          filled.textContent = item.filled;
          filled.style.display = "none";
          const revBtn = el("button", "fs-reveal-btn", "Show filled example ↓");
          revBtn.type = "button";
          revBtn.addEventListener("click", () => {
            filled.style.display = filled.style.display === "none" ? "block" : "none";
            revBtn.textContent = filled.style.display === "none" ? "Show filled example ↓" : "Hide ↑";
          });
          panel.appendChild(revBtn);
          panel.appendChild(filled);

          fsWrap.appendChild(panel);
        });
        wrap.appendChild(fsWrap);
        break;
      }
      /* ── NEW: annotated sample ── */
      case "annotated": {
        const outer = el("div", "annotated-sample");
        // Header bar
        const head = el("div", "ann-head");
        head.innerHTML =
          '<span class="ann-ico">' + (b.icon || "🔬") + "</span>" +
          '<div class="ann-meta">' +
          '<div class="ann-title">' + b.title + "</div>" +
          '<div class="ann-band">Target band: <strong>' + (b.band || "8.0+") + "</strong></div>" +
          "</div>" +
          '<span class="ann-badge">' + (b.words || "") + "</span>";
        outer.appendChild(head);
        // Task description
        if (b.task) {
          const taskEl = el("div", "ann-task");
          taskEl.innerHTML = "📌 " + b.task;
          outer.appendChild(taskEl);
        }
        // Legend
        const legend = el("div", "ann-legend");
        legend.innerHTML =
          '<span class="ann-leg-item"><span class="ann-marker ann-ta"></span> Task Achievement</span>' +
          '<span class="ann-leg-item"><span class="ann-marker ann-cc"></span> Coherence & Cohesion</span>' +
          '<span class="ann-leg-item"><span class="ann-marker ann-lr"></span> Lexical Resource</span>' +
          '<span class="ann-leg-item"><span class="ann-marker ann-gr"></span> Grammar Range</span>';
        outer.appendChild(legend);
        // Annotated paragraphs
        const body = el("div", "ann-body");
        (b.paragraphs || []).forEach((para) => {
          const pWrap = el("div", "ann-para-wrap");
          // Paragraph label
          const label = el("span", "ann-para-label ann-label-" + (para.tone || "intro"), para.label || "");
          pWrap.appendChild(label);
          // Paragraph text with inline highlights
          const textEl = el("div", "ann-para-text");
          textEl.innerHTML = para.text;
          pWrap.appendChild(textEl);
          // Examiner comments
          if (para.comments && para.comments.length) {
            const commentsWrap = el("div", "ann-comments");
            para.comments.forEach((c) => {
              const cEl = el("div", "ann-comment ann-c-" + (c.criterion || "ta"));
              cEl.innerHTML =
                '<span class="ann-c-criterion">' + (c.label || "") + "</span>" +
                '<span class="ann-c-text">' + c.text + "</span>";
              commentsWrap.appendChild(cEl);
            });
            pWrap.appendChild(commentsWrap);
          }
          body.appendChild(pWrap);
        });
        outer.appendChild(body);
        // Score breakdown
        if (b.scores) {
          const scoreWrap = el("div", "ann-scores");
          const scoreTitle = el("div", "ann-score-title", "Examiner score breakdown");
          scoreWrap.appendChild(scoreTitle);
          const scoreGrid = el("div", "ann-score-grid");
          const criteria = [
            { key: "ta", label: "Task Achievement", cls: "ann-ta" },
            { key: "cc", label: "Coherence & Cohesion", cls: "ann-cc" },
            { key: "lr", label: "Lexical Resource", cls: "ann-lr" },
            { key: "gr", label: "Grammar Range & Accuracy", cls: "ann-gr" }
          ];
          criteria.forEach((cr) => {
            const val = b.scores[cr.key];
            if (val == null) return;
            const item = el("div", "ann-score-item");
            item.innerHTML =
              '<div class="ann-score-label">' + cr.label + "</div>" +
              '<div class="ann-score-bar-wrap">' +
              '<div class="ann-score-bar ' + cr.cls + '" style="width:' + Math.round((val / 9) * 100) + '%"></div>' +
              "</div>" +
              '<div class="ann-score-val">' + val + ".0</div>";
            scoreGrid.appendChild(item);
          });
          scoreWrap.appendChild(scoreGrid);
          outer.appendChild(scoreWrap);
        }
        wrap.appendChild(outer);
        break;
      }
      /* ── NEW: bandtable — side-by-side Band 6/7/8 descriptor comparison ── */
      case "bandtable": {
        const bt = el("div", "band-table-wrap");
        // Heading
        if (b.title) bt.appendChild(el("div", "band-table-heading", b.title));
        const table = el("table", "band-table");
        table.setAttribute("role", "table");
        // Table head
        const thead = el("thead");
        const hrow = el("tr");
        hrow.appendChild(el("th", "bt-crit-col", "Criterion"));
        const bands = b.bands || ["Band 6", "Band 7", "Band 8"];
        const bandClasses = ["bt-6", "bt-7", "bt-8"];
        bands.forEach((bName, bi) => {
          const th = el("th", "bt-band-col " + bandClasses[bi], bName);
          hrow.appendChild(th);
        });
        thead.appendChild(hrow);
        table.appendChild(thead);
        // Table body
        const tbody = el("tbody");
        (b.rows || []).forEach((row) => {
          const tr = el("tr");
          const criterionTd = el("td", "bt-criterion");
          criterionTd.innerHTML =
            '<span class="bt-criterion-icon">' + (row.icon || "") + "</span>" +
            '<span class="bt-criterion-label">' + row.criterion + "</span>";
          tr.appendChild(criterionTd);
          row.cells.forEach((cell, ci) => {
            const td = el("td", "bt-cell " + bandClasses[ci]);
            td.innerHTML = cell;
            tr.appendChild(td);
          });
          tbody.appendChild(tr);
        });
        table.appendChild(tbody);
        bt.appendChild(table);
        // Optional gap-analysis tip
        if (b.tip) {
          const tipEl = el("div", "band-table-tip");
          tipEl.innerHTML = "<strong>💡 Your gap analysis:</strong> " + b.tip;
          bt.appendChild(tipEl);
        }
        wrap.appendChild(bt);
        break;
      }
      default:
        break;
    }
    } catch (err) {
      // If a single block fails to render, show a non-blocking warning
      // instead of breaking the entire chapter.
      console.warn("[IELTS Hub] renderBlock error for type '" + (b && b.type) + "':", err);
      wrap.innerHTML =
        '<div style="padding:16px 20px;background:var(--bad-soft);border:1px solid #fca5a5;' +
        'border-radius:12px;color:#7f1d1d;font-size:0.875rem;">' +
        "⚠️ This block (" + (b && b.type ? b.type : "unknown") + ") could not be rendered." +
        "</div>";
    }
    return wrap;
  }

  /* ============================================================
     Trend playground
     ============================================================ */
  function buildTrendPlayground() {
    const box = el("div", "playground");
    box.innerHTML =
      '<div class="pg-head"><span class="pg-ico">🎛️</span><div class="pg-t">Trend Sentence Builder</div>' +
      '<div class="pg-sub">choose a direction + a speed</div></div>' +
      '<div class="pg-body">' +
      '<div class="pg-chart"><svg viewBox="0 0 560 240" preserveAspectRatio="none" role="img" aria-label="interactive trend chart"></svg></div>' +
      '<div class="pg-controls">' +
      '<div class="pg-group"><span class="pg-label">Direction</span><div class="dir-btns"></div></div>' +
      '<div class="pg-group"><span class="pg-label">Speed</span><div class="spd-btns"></div></div>' +
      "</div>" +
      '<div class="pg-out"><div class="po-t">Your sentence</div><div class="po-sentence"></div>' +
      '<div class="po-variants"></div></div>' +
      "</div>";

    const svg = box.querySelector("svg");
    const dirBox = box.querySelector(".dir-btns");
    const spdBox = box.querySelector(".spd-btns");
    const sentenceEl = box.querySelector(".po-sentence");
    const variantsEl = box.querySelector(".po-variants");

    const W = 560, H = 240, P = 34;
    const DIRECTIONS = [
      { id: "up", label: "⬆️ Increase", sel: "", color: "#10b981" },
      { id: "down", label: "⬇️ Decrease", sel: "red", color: "#ef4444" },
      { id: "flat", label: "➡️ Level off", sel: "amber", color: "#f59e0b" },
      { id: "wave", label: "〰️ Fluctuate", sel: "", color: "#8b5cf6" }
    ];
    const SPEEDS = [
      { id: "slightly", label: "Slightly", sel: "" },
      { id: "steadily", label: "Steadily", sel: "green" },
      { id: "sharply", label: "Sharply", sel: "red" }
    ];

    const state = { dir: "up", speed: "slightly" };

    DIRECTIONS.forEach((d) => {
      const btn = el("button", "pg-btn" + (d.id === state.dir ? " sel " + d.sel : ""), d.label);
      btn.addEventListener("click", () => {
        state.dir = d.id;
        $$(".pg-btn", dirBox).forEach((x) => (x.className = "pg-btn"));
        btn.className = "pg-btn sel " + d.sel;
        draw();
      });
      dirBox.appendChild(btn);
    });
    SPEEDS.forEach((s) => {
      const btn = el("button", "pg-btn" + (s.id === state.speed ? " sel " + s.sel : ""), s.label);
      btn.addEventListener("click", () => {
        state.speed = s.id;
        $$(".pg-btn", spdBox).forEach((x) => (x.className = "pg-btn"));
        btn.className = "pg-btn sel " + s.sel;
        draw();
      });
      spdBox.appendChild(btn);
    });

    // path generator: returns array of points
    function pathFor(dir, speed) {
      const n = 12;
      const pts = [];
      const x0 = P, x1 = W - P;
      const yMid = H / 2;
      const amp = speed === "slightly" ? 22 : speed === "steadily" ? 55 : 82;
      const wav = (i, dir) => {
        if (dir === "wave") {
          const base = yMid + (i / (n - 1) - 0.5) * 60;
          return base + Math.sin(i * 1.9) * (12 + (speed === "sharply" ? 8 : 0));
        }
        const slope = (i / (n - 1) - 0.5);
        if (dir === "flat") return yMid + Math.sin(i * 0.8) * 2;
        const sign = dir === "up" ? -1 : 1;
        const ease = speed === "slightly" ? slope * 0.4 : slope;
        return yMid + sign * ease * amp * 2;
      };
      for (let i = 0; i < n; i++) {
        const x = x0 + (x1 - x0) * (i / (n - 1));
        pts.push([x, wav(i, dir)]);
      }
      return pts;
    }

    function draw() {
      const pts = pathFor(state.dir, state.speed);
      const dirColor = DIRECTIONS.find((d) => d.id === state.dir).color;
      const line = pts.map((p, i) => (i === 0 ? "M" : "L") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
      // grid + axes
      let g = '<line x1="' + P + '" y1="' + P + '" x2="' + P + '" y2="' + (H - P) + '" stroke="#d7dcea" stroke-width="1"/>';
      g += '<line x1="' + P + '" y1="' + (H - P) + '" x2="' + (W - P) + '" y2="' + (H - P) + '" stroke="#d7dcea" stroke-width="1"/>';
      for (let i = 1; i <= 4; i++) {
        const y = P + ((H - 2 * P) / 4) * i;
        g += '<line x1="' + P + '" y1="' + y + '" x2="' + (W - P) + '" y2="' + y + '" stroke="#eef1f7" stroke-width="1" stroke-dasharray="4 5"/>';
      }
      // area fill
      const area = pts.map((p, i) => (i === 0 ? "M" : "L") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ") +
        " L" + (W - P) + " " + (H - P) + " L" + P + " " + (H - P) + " Z";
      svg.innerHTML = g +
        '<path d="' + area + '" fill="' + dirColor + '" opacity="0.12"/>' +
        '<path d="' + line + '" fill="none" stroke="' + dirColor + '" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="filter:drop-shadow(0 3px 4px rgba(30,37,64,0.18))"/>' +
        '<circle cx="' + pts[0][0] + '" cy="' + pts[0][1] + '" r="4.5" fill="' + dirColor + '"/>' +
        '<circle cx="' + pts[pts.length - 1][0] + '" cy="' + pts[pts.length - 1][1] + '" r="4.5" fill="' + dirColor + '"/>' +
        '<text x="' + (P - 6) + '" y="' + (P - 4) + '" font-size="11" fill="#9aa3bd" text-anchor="end">high</text>' +
        '<text x="' + (P - 6) + '" y="' + (H - P + 14) + '" font-size="11" fill="#9aa3bd" text-anchor="end">low</text>' +
        '<text x="' + (P + 4) + '" y="' + (H - P + 18) + '" font-size="11" fill="#9aa3bd">2000</text>' +
        '<text x="' + (W - P - 60) + '" y="' + (H - P + 18) + '" font-size="11" fill="#9aa3bd">2010</text>';

      // sentence
      const S = sentenceData();
      sentenceEl.textContent = S.sentence;
      variantsEl.innerHTML = S.variants;
    }

    function sentenceData() {
      const verbMap = {
        up: { slightly: "increased slightly", steadily: "rose steadily", sharply: "rose sharply" },
        down: { slightly: "decreased slightly", steadily: "declined steadily", sharply: "plunged" },
        flat: { slightly: "remained stable", steadily: "levelled off", sharply: "stabilized" },
        wave: { slightly: "fluctuated slightly", steadily: "fluctuated", sharply: "fluctuated wildly" }
      };
      const nounMap = {
        up: { slightly: "a slight increase", steadily: "a steady rise", sharply: "a sharp rise" },
        down: { slightly: "a slight decrease", steadily: "a steady decline", sharply: "a dramatic fall" },
        flat: { slightly: "little change", steadily: "a levelling off", sharply: "stabilization" },
        wave: { slightly: "slight fluctuation", steadily: "fluctuation", sharply: "wild fluctuation" }
      };
      const v = verbMap[state.dir][state.speed];
      const n = nounMap[state.dir][state.speed];
      const data = { value: state.dir === "down" ? "from 60% to 25%" : "from 25% to 60%", years: "between 2000 and 2010" };
      return {
        sentence: "Sales of laptops " + v + " " + data.value + " " + data.years + ".",
        variants: "Swap the structure: <b>There was " + n + " in laptop sales</b> · " +
          "<b>" + data.years.split(" ")[1] + " saw " + n + "</b> · " +
          "laptop sales <b>experienced " + n + "</b>"
      };
    }

    draw();
    return box;
  }

  /* ---------------- keyboard nav ---------------- */
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (e.key === "ArrowRight" && footNext.style.visibility !== "hidden") footNext.click();
    if (e.key === "ArrowLeft" && footPrev.style.visibility !== "hidden") footPrev.click();
  });

  /* ---------------- boot ---------------- */
  function boot() {
    // Guard: if chapters JS failed to load, show a clear error instead of crashing
    if (typeof CHAPTERS === "undefined" || !Array.isArray(CHAPTERS) || CHAPTERS.length === 0) {
      content.innerHTML =
        '<div style="padding:60px 40px;text-align:center;max-width:540px;margin:0 auto;">' +
        '<div style="font-size:3rem;margin-bottom:18px;">⚠️</div>' +
        '<h2 style="font-family:var(--font-display);font-size:1.5rem;margin-bottom:12px;">Content failed to load</h2>' +
        '<p style="color:var(--ink-soft);line-height:1.7;">The chapter data could not be found. ' +
        'Make sure <code>chapters-part1.js</code> and <code>chapters-part2.js</code> are present ' +
        'in the <code>js/</code> folder and are free of syntax errors. ' +
        'Then reload the page.</p>' +
        '<button onclick="location.reload()" style="margin-top:28px;padding:14px 32px;' +
        'background:var(--brand);color:#fff;border:0;border-radius:99px;font-weight:700;' +
        'font-size:0.95rem;cursor:pointer;">↺ Reload page</button>' +
        '</div>';
      return;
    }
    buildNav();
    const hash = (location.hash || "").replace("#", "");
    const target = CHAPTERS.find((c) => c.id === hash) ? hash : "intro";
    go(target);
  }
  boot();
})();
