/* ==========================================================================
   NBLT — nblt-home.js
   A floating "back to NBLT" pill for the five sub-apps.

   Drop one line into a sub-app's <head> or end of <body>:
       <script defer src="../assets/nblt-home.js"></script>
   …adjusting the relative depth. The hub's location is derived from this
   script's own URL, so nothing needs configuring per app, and if the file
   is ever missing the app still runs exactly as before.

   Deliberately dependency-free and self-scoped: no Tailwind, no Alpine, no
   global CSS. It must not perturb the app it is injected into.
   ========================================================================== */
(function () {
  'use strict';

  var script = document.currentScript;
  if (!script || !script.src) return;

  // ".../assets/nblt-home.js" → ".../" — works at any nesting depth.
  var root = script.src.replace(/assets\/nblt-home\.js(?:\?.*)?$/, '');
  if (root === script.src) return;        // unexpected filename; bail quietly
  var hubUrl = root + 'index.html';

  // Don't render on the hub itself.
  if (window.location.href.indexOf(hubUrl) === 0) return;

  var STYLE_ID = 'nblt-home-style';
  var LINK_ID = 'nblt-home-link';

  function mount() {
    if (document.getElementById(LINK_ID)) return;

    if (!document.getElementById(STYLE_ID)) {
      var css = document.createElement('style');
      css.id = STYLE_ID;
      // Deliberately theme-independent: the five apps run light, dark and
      // fixed-dark themes, and a sub-app's sidebar may be dark while the OS
      // is light. A solid brand gradient reads correctly on all of them.
      css.textContent = [
        '#' + LINK_ID + '{',
        '  position:fixed;z-index:2147483000;',
        '  right:max(1rem, env(safe-area-inset-right));',
        '  bottom:max(1rem, env(safe-area-inset-bottom));',
        '  display:inline-flex;align-items:center;gap:.4375rem;',
        '  padding:.5rem .875rem;border-radius:999px;',
        '  font:800 .78125rem/1 ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;',
        '  letter-spacing:.02em;text-decoration:none;cursor:pointer;',
        '  color:#fff;background:linear-gradient(140deg,#6366f1,#a855f7);',
        '  border:1px solid rgba(255,255,255,.22);',
        '  box-shadow:0 4px 10px rgba(15,23,42,.18),0 16px 36px -14px rgba(79,70,229,.85);',
        '  opacity:.78;transform:translateY(0);',
        '  transition:opacity .22s ease,transform .22s ease,box-shadow .22s ease;',
        '}',
        '#' + LINK_ID + ':hover,#' + LINK_ID + ':focus-visible{',
        '  opacity:1;transform:translateY(-2px);',
        '  box-shadow:0 6px 14px rgba(15,23,42,.22),0 22px 46px -14px rgba(79,70,229,1);',
        '}',
        '#' + LINK_ID + ':focus-visible{outline:2px solid #fff;outline-offset:2px}',
        '#' + LINK_ID + ' svg{width:.875rem;height:.875rem;flex:none}',
        '@media print{#' + LINK_ID + '{display:none}}',
        '@media (prefers-reduced-motion: reduce){#' + LINK_ID + '{transition:none}}'
      ].join('\n');
      document.head.appendChild(css);
    }

    var a = document.createElement('a');
    a.id = LINK_ID;
    a.href = hubUrl;
    a.title = 'Back to NBLT home';
    a.setAttribute('aria-label', 'Back to NBLT home');
    a.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M19.5 12h-15"/><path d="m10.8 5.8-6.3 6.2 6.3 6.2"/></svg>' +
      '<span>NBLT</span>';
    document.body.appendChild(a);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
