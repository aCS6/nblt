/* =============================================
   IELTS Grammar App – shared utilities
   scripts/utils.js
   ---------------------------------------------------------------
   Stack: Alpine.js + Tailwind CSS (CDN)
   - Alpine.js powers the navigation tabs, homepage search/filter,
     and any client-side interactivity that is declared with
     x-data / x-on in the HTML.
   - These plain-JS helpers drive the inline & Thunderproof
     self-grading exercises (buttons update .correct/.incorrect and
     score badges). They are loaded AFTER Alpine. The helpers stay
     framework-agnostic so the 20 chapter files keep their answers
     and exercise wiring without per-chapter rewrites.
   ============================================= */
'use strict';

/* ── Answer normalisation ── */
function norm(s) {
  return String(s).trim().toLowerCase()
    .replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/\s+/g, ' ');
}
function accepts(userVal, correctArr) {
  return correctArr.some(a => norm(a) === norm(userVal));
}

/* ── Input marking ── */
function mark(el, ok) {
  el.classList.remove('correct', 'incorrect');
  el.classList.add(ok ? 'correct' : 'incorrect');
}
function clearFeedback(container) {
  container.querySelectorAll(
    '.feedback-correct,.feedback-incorrect,.score-badge,.tf-feedback,.correction-text,.mc-feedback,.gf-feedback'
  ).forEach(el => el.remove());
}

/* ── Score badge element ── */
function scoreBadge(got, total) {
  const el = document.createElement('span');
  el.className = 'score-badge' + (got === total ? ' full' : '');
  el.textContent = `Score: ${got} / ${total}`;
  return el;
}

/* ── Generic gap-fill checker ── */
function initGapFill({ inputSelector, answers, checkId, showId, resetId }) {
  const checkBtn = document.getElementById(checkId);
  const showBtn  = document.getElementById(showId);
  const resetBtn = document.getElementById(resetId);
  if (!checkBtn) return;

  checkBtn.addEventListener('click', () => {
    let got = 0, total = 0;
    document.querySelectorAll(inputSelector).forEach(inp => {
      const id = inp.dataset.id;
      if (!answers[id]) return;
      total++;
      const ok = accepts(inp.value, answers[id]);
      if (ok) got++;
      mark(inp, ok);
    });
    clearFeedback(checkBtn.parentElement);
    checkBtn.parentElement.appendChild(scoreBadge(got, total));
  });

  showBtn && showBtn.addEventListener('click', () => {
    document.querySelectorAll(inputSelector).forEach(inp => {
      if (!answers[inp.dataset.id]) return;
      inp.value = answers[inp.dataset.id][0];
      mark(inp, true);
    });
    clearFeedback(checkBtn.parentElement);
  });

  resetBtn && resetBtn.addEventListener('click', () => {
    document.querySelectorAll(inputSelector).forEach(inp => {
      inp.value = '';
      inp.classList.remove('correct', 'incorrect');
    });
    clearFeedback(checkBtn.parentElement);
  });
}

/* ── Generic multiple-choice (click-to-answer) ── */
function initMCGroups({ groupSelector, answers, showId, resetId }) {
  document.querySelectorAll(groupSelector).forEach(group => {
    const id = group.dataset.id;
    if (!answers[id]) return;
    group.querySelectorAll('.mc-option').forEach(opt => {
      opt.addEventListener('click', () => {
        if (group.dataset.answered === '1') return;
        group.dataset.answered = '1';
        const ok = opt.dataset.letter === answers[id];
        group.querySelectorAll('.mc-option').forEach(o => {
          if (o.dataset.letter === answers[id]) o.classList.add('correct');
          else if (o === opt && !ok) o.classList.add('incorrect');
        });
        const fb = document.createElement('div');
        fb.className = 'mc-feedback';
        fb.innerHTML = ok
          ? '<span class="feedback-correct">✔ Correct!</span>'
          : `<span class="feedback-incorrect">✘ Incorrect. Answer: <strong>${answers[id]}</strong></span>`;
        group.appendChild(fb);
      });
    });
  });

  const showBtn  = document.getElementById(showId);
  const resetBtn = document.getElementById(resetId);

  showBtn && showBtn.addEventListener('click', () => {
    document.querySelectorAll(groupSelector).forEach(group => {
      const id = group.dataset.id;
      if (!answers[id]) return;
      group.dataset.answered = '1';
      group.querySelectorAll('.mc-option').forEach(o => {
        o.classList.remove('correct', 'incorrect');
        if (o.dataset.letter === answers[id]) o.classList.add('correct');
      });
      group.querySelectorAll('.mc-feedback').forEach(e => e.remove());
      const fb = document.createElement('div');
      fb.className = 'mc-feedback';
      fb.innerHTML = `<span class="feedback-correct">Answer: <strong>${answers[id]}</strong></span>`;
      group.appendChild(fb);
    });
  });

  resetBtn && resetBtn.addEventListener('click', () => {
    document.querySelectorAll(groupSelector).forEach(group => {
      group.dataset.answered = '0';
      group.querySelectorAll('.mc-option').forEach(o => o.classList.remove('correct', 'incorrect'));
      group.querySelectorAll('.mc-feedback').forEach(e => e.remove());
    });
  });
}

/* ── Generic True/False ── */
function initTrueFalse({ answers, showId }) {
  document.querySelectorAll('.tf-item').forEach(item => {
    const id = item.dataset.id;
    if (!answers[id]) return;
    item.querySelectorAll('.tf-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        item.querySelectorAll('.tf-btn').forEach(b => b.classList.remove('sel-true','sel-false'));
        item.querySelectorAll('.tf-feedback,.correction-text').forEach(e => e.remove());
        const ok = btn.dataset.value === answers[id].correct;
        btn.classList.add(btn.dataset.value === 'true' ? 'sel-true' : 'sel-false');
        const fb = document.createElement('div');
        fb.className = 'tf-feedback';
        fb.innerHTML = ok ? '<span class="feedback-correct">✔ Correct!</span>'
                          : '<span class="feedback-incorrect">✘ Incorrect.</span>';
        item.querySelector('.tf-buttons').after(fb);
        if (!ok && answers[id].correction) {
          const c = document.createElement('div');
          c.className = 'correction-text';
          c.textContent = 'Correction: ' + answers[id].correction;
          fb.after(c);
        }
      });
    });
  });

  const showBtn = document.getElementById(showId);
  showBtn && showBtn.addEventListener('click', () => {
    document.querySelectorAll('.tf-item').forEach(item => {
      const id = item.dataset.id;
      if (!answers[id]) return;
      item.querySelectorAll('.tf-feedback,.correction-text').forEach(e => e.remove());
      item.querySelectorAll('.tf-btn').forEach(b => {
        b.classList.remove('sel-true','sel-false');
        if (b.dataset.value === answers[id].correct)
          b.classList.add(answers[id].correct === 'true' ? 'sel-true' : 'sel-false');
      });
      const fb = document.createElement('div');
      fb.className = 'tf-feedback';
      fb.innerHTML = `<span class="feedback-correct">Answer: ${answers[id].correct.toUpperCase()}</span>`;
      item.querySelector('.tf-buttons').after(fb);
      if (answers[id].correction) {
        const c = document.createElement('div');
        c.className = 'correction-text';
        c.textContent = answers[id].correction;
        fb.after(c);
      }
    });
  });
}

/* ── Generic sentence endings (click to confirm) ── */
function initEndings({ answers, showId }) {
  document.querySelectorAll('.endings-item').forEach(item => {
    const id = item.dataset.id;
    if (!answers[id]) return;
    const btns = item.querySelectorAll('.ending-btn');
    const set = answer => {
      btns.forEach(b => b.classList.remove('correct','incorrect'));
      btns.forEach(b => { if (b.dataset.opt === answer) b.classList.add('correct'); });
    };
    btns.forEach(btn => btn.addEventListener('click', () => {
      set(answers[id]);
      if (btn.dataset.opt !== answers[id]) btn.classList.add('incorrect');
    }));
  });
  const showBtn = document.getElementById(showId);
  showBtn && showBtn.addEventListener('click', () => {
    document.querySelectorAll('.endings-item').forEach(item => {
      const id = item.dataset.id;
      if (!answers[id]) return;
      item.querySelectorAll('.ending-btn').forEach(b => {
        b.classList.remove('correct','incorrect');
        if (b.dataset.opt === answers[id]) b.classList.add('correct');
      });
    });
  });
}

/* ── Generic Grammar Focus Task (choose correct form) ── */
function initGFT({ answers, showId, resetId }) {
  document.querySelectorAll('.gft-item').forEach(item => {
    const id = item.dataset.id;
    if (!answers[id]) return;
    const btns = item.querySelectorAll('.gft-btn');
    const set = answer => {
      btns.forEach(b => {
        b.classList.remove('correct','incorrect');
        if (norm(b.dataset.value) === norm(answer)) b.classList.add('correct');
      });
    };
    btns.forEach(btn => btn.addEventListener('click', () => {
      set(answers[id]);
      if (norm(btn.dataset.value) !== norm(answers[id])) btn.classList.add('incorrect');
    }));
  });
  const showBtn  = document.getElementById(showId);
  const resetBtn = document.getElementById(resetId);
  showBtn && showBtn.addEventListener('click', () => {
    document.querySelectorAll('.gft-item').forEach(item => {
      const id = item.dataset.id;
      if (!answers[id]) return;
      item.querySelectorAll('.gft-btn').forEach(b => {
        b.classList.remove('correct','incorrect');
        if (norm(b.dataset.value) === norm(answers[id])) b.classList.add('correct');
      });
    });
  });
  resetBtn && resetBtn.addEventListener('click', () => {
    document.querySelectorAll('.gft-item').forEach(item => {
      item.querySelectorAll('.gft-btn').forEach(b => b.classList.remove('correct','incorrect'));
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   Audio track registry
   Edit this object to add/update SoundCloud share URLs.
   ═══════════════════════════════════════════════════════════════ */
const AUDIO_TRACKS = {
  "01": "https://soundcloud.com/tkt112/01-title-information?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=f267bd6ac43a4a249b1bf5f96f75cadd1",
  "02": "https://soundcloud.com/tkt112/02-1a?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=436c8ca4e5f14bae9ea1730dd9ee63f6",
  "03": "https://soundcloud.com/tkt112/03-1b?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=c43ea8c4255b459496d0cf5a237b6ec7",
  "04": "https://soundcloud.com/tkt112/04-2i?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=83a9240817c949d8ae6427f77461c52",
  "05": "https://soundcloud.com/tkt112/05-3i?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=a523f331bc98f47f6bc396e190f4c12a",
  "06": "https://soundcloud.com/tkt112/06-3i?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=d75d04fdc8294e64b890b78dc476b7ea",
  "07": "https://soundcloud.com/tkt112/07-4i?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=f81ff0ee5852487b9b1369f7d6a16ed2",
  "08": "https://soundcloud.com/tkt112/08-5i?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=dc85a89d3e324013b1c901dd9a7143df",
  "09": "https://soundcloud.com/tkt112/09-6i?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=34b2a1036d2e40e4e90464261d20e1e",
  "10": "https://soundcloud.com/tkt112/10-7i?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=259decf0aaa94d20b741a3fab425232",
  "11": "https://soundcloud.com/tkt112/11-8a?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=ad692ab91465b226b87d80fc76151d4c9",
  "12": "https://soundcloud.com/tkt112/12-8b?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=6f535f4dfb064ab5a773080806958dc6",
  "13": "https://soundcloud.com/tkt112/13-9i?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=3c28575a7a491aa7296f7527667f2866",
  "14": "https://soundcloud.com/tkt112/14-10i?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=fb065bb2b7a7322b465c60c76fbbfc17f",
  "15": "https://soundcloud.com/tkt112/15-11i?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=96ds3518bf172aiea9c5196ca19ed4d1",
  "16": "https://soundcloud.com/tkt112/16-12i?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=0271322f09cc46c2af00eab113e2404",
  "17": "https://soundcloud.com/tkt112/17-13a?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=30d13f856e654fe84f9eae454a317e90",
  "18": "https://soundcloud.com/tkt112/18-13b?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=e2e31a11d16806bd48923d9dcd7d3bec",
  "19": "https://soundcloud.com/tkt112/19-14i?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=b3ccf601a030e7b6a762b3f5c4db9a4f3",
  "20": "https://soundcloud.com/tkt112/20-15a?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=8bdcac8a5627d9c9c8b4488faaf59d91",
  "21": "https://soundcloud.com/tkt112/21-15b?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=f02dd5af0a7bd1d0a0e57b49cc1f3a5f",
  "22": "https://soundcloud.com/tkt112/22-15c?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=473b74dbc67943a0cd8e9777b47f91a1",
  "23": "https://soundcloud.com/tkt112/23-16i?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=478234c2baf010288e5d23a4a14cce61",
  "24": "https://soundcloud.com/tkt112/24-17i?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=5695fsca6407e8dc60e75691d4d4490c",
  "25": "https://soundcloud.com/tkt112/25-18i?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=0e5b0f8bcbd3ab2b0a6d3e6c0e617cfd",
  "26": "https://soundcloud.com/tkt112/26-19a?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=065e60e5a448b2d65c3e1c4c76069f9a",
  "27": "https://soundcloud.com/tkt112/27-19b?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=d2bd46d331c8f2d4708fc20ff4d1b03e",
  "28": "https://soundcloud.com/tkt112/28-20i?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=0d1a4d5b6c7d8f9aab03c1d24e4f5a66",
  "29": "https://soundcloud.com/tkt112/29-21i?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=fd30639fbdf028fcd6378f9912f2a6a0",
  "30": "https://soundcloud.com/tkt112/30-22i?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=5c10d1e53b524e41b8f77d95818ed4d",
  "31": "https://soundcloud.com/tkt112/31-23i?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=29cd15d1621c4930907de1301339bd1",
  "32": "https://soundcloud.com/tkt112/32-24i?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=4614b8f37a848e2a95e3c1e623cd156",
  "33": "https://soundcloud.com/tkt112/33-25i?in=tkt112/sets/cambridge-grammar-for-ielts-diane-hopkins&si=8a73b30c7bd2858ba5f3d9cdcfc0d4a4",
};

/* ── Audio: render player from inline registry (works on file://) ──
   Placeholder-free; shows a friendly notice when a URL is missing. */
function loadAudio(trackId, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const url = AUDIO_TRACKS[String(trackId)];
  if (url && url.trim()) {
    const path = url.split('soundcloud.com')[1].split('?')[0];
    const embed = `https://w.soundcloud.com/player/?url=https%3A//soundcloud.com${encodeURIComponent(path)}`
      + `&color=%237b1fa2&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`;
    container.innerHTML = `<iframe allow="autoplay" src="${embed}" style="border:0;border-radius:10px;width:100%;height:80px"></iframe>`;
  } else {
    container.innerHTML = `<div class="no-link">🔗 Audio Track ${trackId} — not yet linked. Add the SoundCloud URL to <code>AUDIO_TRACKS["${trackId}"]</code> in <code>scripts/utils.js</code>.</div>`;
  }
}

/* ── Optional: keep func shorthand for any page that calls the old names ── */
function initNav() {
  const tabs = document.querySelectorAll('nav a[data-section]');
  const panels = document.querySelectorAll('.section-panel');
  const header = document.querySelector('header');
  function offset() {
    if (header) document.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px');
  }
  function show(id) {
    panels.forEach(p => p.classList.toggle('active', p.id === id));
    tabs.forEach(t => t.classList.toggle('active', t.dataset.section === id));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  tabs.forEach(t => t.addEventListener('click', e => { e.preventDefault(); show(t.dataset.section); }));
  if (tabs.length) show(tabs[0].dataset.section);
  window.addEventListener('resize', offset);
  offset();
}

/* ═══════════════════════════════════════════════════════════════
   Alpine.js chapter component
   Every chapter lays itself out as <body x-data="grammar()">.
   - Alpine drives the section tabs reactively (:class bindings plus
     @click handlers injected by migrate_alpine.py).
   - Exercise wiring is chapter-specific; the page sets
     window.__grammarInit = function() { … init calls … } and Alpine
     runs it in init().
   Registered on "alpine:init" (utils.js runs before Alpine's deferred
   CDN, so the listener is always registered in time).
   ═══════════════════════════════════════════════════════════════ */
document.addEventListener('alpine:init', () => {
  Alpine.data("grammar", () => ({
    active: 'sec-a',
    panel(id) { this.active = id; },
    show(id) {
      this.active = id;
      this.$root.querySelectorAll('.section-panel').forEach(p =>
        p.classList.toggle('active', p.id === id));
      this.$root.querySelectorAll('nav a[data-section]').forEach(t =>
        t.classList.toggle('active', t.dataset.section === id));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    init() {
      this.$nextTick(() => {
        this.show(this.active);
        if (window.__grammarInit) window.__grammarInit();
      });
    }
  }));
});

/* If Alpine's auto-start didn't run (e.g. the CDN script loaded before
   this helper), start it manually. Idempotent. */
if (window.Alpine && !window.Alpine.__started) {
  Alpine.start();
}