/* ==========================================================================
   NBLT — nblt-unit-progress.js
   Adds real completion tracking to the Grammar Book's 25 unit pages.

   Drop into each chapters/unitN.html:
       <script defer src="../../../assets/nblt-unit-progress.js"></script>

   The unit number comes from the filename, so the same line works on all 25.
   Completion is an explicit choice — a "mark complete" button at the end of
   the page — rather than something inferred from scrolling, because scrolling
   past the exercises is not the same as doing them.

   Writes { units: { "7": true } } to nblt.grammar.v1, which the NBLT home
   reads for the Grammar Book progress bar. Dependency-free by design: these
   pages already load Tailwind and Alpine and this must not interfere.
   ========================================================================== */
(function () {
  'use strict';

  var STORE = 'nblt.grammar.v1';
  var TOTAL = 25;

  var match = window.location.pathname.match(/unit(\d+)\.html?$/i);
  if (!match) return;
  var unit = parseInt(match[1], 10);
  if (!unit || unit < 1 || unit > TOTAL) return;

  function load() {
    try {
      var raw = localStorage.getItem(STORE);
      var s = raw ? JSON.parse(raw) : null;
      if (!s || typeof s !== 'object') s = {};
      if (!s.units || typeof s.units !== 'object') s.units = {};
      return s;
    } catch (e) { return { units: {} }; }
  }
  function save(s) {
    try { localStorage.setItem(STORE, JSON.stringify(s)); } catch (e) {}
  }
  function count(s) {
    var n = 0;
    for (var k in s.units) if (s.units[k]) n++;
    return Math.min(n, TOTAL);
  }

  var STYLE = [
    '#nblt-unit-progress{max-width:72rem;margin:0 auto;padding:2.5rem 1.5rem 3.5rem;',
    ' font-family:ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}',
    '#nblt-unit-progress .nup-card{border-radius:1.5rem;padding:1.75rem;',
    ' background:#fff;border:1px solid #e2e8f0;',
    ' box-shadow:0 1px 2px rgba(15,23,42,.04),0 18px 40px -20px rgba(15,23,42,.25)}',
    '#nblt-unit-progress.is-done .nup-card{border-color:#a7f3d0;background:linear-gradient(180deg,#f0fdf4,#fff)}',
    '#nblt-unit-progress .nup-head{display:flex;align-items:flex-start;gap:1rem;margin-bottom:1.25rem}',
    '#nblt-unit-progress .nup-mark{display:grid;place-items:center;width:3rem;height:3rem;flex:none;',
    ' border-radius:1rem;color:#fff;font-size:1.05rem;font-weight:800;',
    ' background:linear-gradient(140deg,#7c3aed,#c026d3);',
    ' box-shadow:0 10px 24px -10px rgba(124,58,237,.8)}',
    '#nblt-unit-progress.is-done .nup-mark{background:linear-gradient(140deg,#059669,#34d399);',
    ' box-shadow:0 10px 24px -10px rgba(5,150,105,.8)}',
    '#nblt-unit-progress h2{margin:0;font-size:1.25rem;font-weight:800;color:#0f172a;letter-spacing:-.01em}',
    '#nblt-unit-progress p{margin:.25rem 0 0;font-size:.875rem;color:#64748b;line-height:1.5}',
    '#nblt-unit-progress .nup-bar{height:.5rem;border-radius:999px;background:#e2e8f0;overflow:hidden}',
    '#nblt-unit-progress .nup-bar>i{display:block;height:100%;border-radius:999px;',
    ' background:linear-gradient(90deg,#7c3aed,#c026d3);transition:width .8s cubic-bezier(.2,.8,.2,1)}',
    '#nblt-unit-progress.is-done .nup-bar>i{background:linear-gradient(90deg,#059669,#34d399)}',
    '#nblt-unit-progress .nup-count{display:flex;justify-content:space-between;gap:1rem;',
    ' margin-top:.625rem;font-size:.78125rem;font-weight:700;color:#64748b}',
    '#nblt-unit-progress .nup-actions{display:flex;flex-wrap:wrap;gap:.625rem;margin-top:1.5rem}',
    '#nblt-unit-progress button,#nblt-unit-progress .nup-link{display:inline-flex;align-items:center;gap:.5rem;',
    ' border-radius:999px;padding:.6875rem 1.25rem;font-size:.875rem;font-weight:700;',
    ' cursor:pointer;text-decoration:none;border:1px solid transparent;transition:all .2s ease}',
    '#nblt-unit-progress button{color:#fff;background:linear-gradient(135deg,#7c3aed,#c026d3);',
    ' box-shadow:0 10px 26px -12px rgba(124,58,237,.9)}',
    '#nblt-unit-progress button:hover{filter:brightness(1.07);transform:translateY(-1px)}',
    '#nblt-unit-progress.is-done button{background:#fff;color:#047857;border-color:#a7f3d0;box-shadow:none}',
    '#nblt-unit-progress .nup-link{color:#7c3aed;background:#fff;border-color:#e2e8f0}',
    '#nblt-unit-progress .nup-link:hover{border-color:#c4b5fd;background:#faf5ff}',
    '@media print{#nblt-unit-progress{display:none}}',
    '@media (prefers-reduced-motion: reduce){#nblt-unit-progress *{transition:none!important}}'
  ].join('\n');

  function mount() {
    if (document.getElementById('nblt-unit-progress')) return;

    var style = document.createElement('style');
    style.textContent = STYLE;
    document.head.appendChild(style);

    var section = document.createElement('section');
    section.id = 'nblt-unit-progress';
    section.innerHTML =
      '<div class="nup-card">' +
        '<div class="nup-head">' +
          '<span class="nup-mark" data-nup="mark"></span>' +
          '<div><h2 data-nup="title"></h2><p data-nup="sub"></p></div>' +
        '</div>' +
        '<div class="nup-bar"><i data-nup="fill" style="width:0%"></i></div>' +
        '<div class="nup-count"><span data-nup="count"></span><span data-nup="pct"></span></div>' +
        '<div class="nup-actions">' +
          '<button type="button" data-nup="toggle"></button>' +
          (unit < TOTAL ? '<a class="nup-link" href="unit' + (unit + 1) + '.html">Next unit &rarr;</a>' : '') +
          '<a class="nup-link" href="../index.html">All units</a>' +
        '</div>' +
      '</div>';

    // Sit above the unit's own footer band when there is one, so the card
    // reads as the end of the lesson rather than an afterthought below it.
    var footer = document.querySelector('body > footer');
    if (footer) footer.parentNode.insertBefore(section, footer);
    else document.body.appendChild(section);

    var el = function (name) { return section.querySelector('[data-nup="' + name + '"]'); };
    var toggle = el('toggle');

    function render() {
      var state = load();
      var done = !!state.units[unit];
      var n = count(state);
      var pct = Math.round((n / TOTAL) * 100);

      section.classList.toggle('is-done', done);
      el('mark').textContent = done ? '✓' : String(unit);
      el('title').textContent = done ? 'Unit ' + unit + ' complete' : 'Finished Unit ' + unit + '?';
      el('sub').textContent = done
        ? 'This unit counts toward your grammar progress on the NBLT home.'
        : 'Work through the exercises first, then mark it done — it feeds the Grammar Book bar on the NBLT home.';
      el('fill').style.width = pct + '%';
      el('count').textContent = n + ' of ' + TOTAL + ' units complete';
      el('pct').textContent = pct + '%';
      toggle.textContent = done ? 'Undo — mark as not done' : 'Mark Unit ' + unit + ' complete';
    }

    toggle.addEventListener('click', function () {
      var state = load();
      if (state.units[unit]) delete state.units[unit];
      else state.units[unit] = true;
      save(state);
      render();
    });

    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
