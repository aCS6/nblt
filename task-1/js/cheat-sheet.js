/* ============================================================
   Template Vault — printable cheat sheet renderer
   Pulls the 24 skeletons straight from the "templates" chapter
   data (js/chapters-part2.js) so the sheet never drifts out of
   sync with the app. No app.js dependency.
   ============================================================ */
(function () {
  "use strict";

  var host = document.getElementById("cheat");
  if (!host) return;

  // CHAPTERS is a top-level const defined in chapters-part1.js and
  // extended by chapters-part2.js (not a window property).
  var all = (typeof CHAPTERS !== "undefined" ? CHAPTERS : window.CHAPTERS) || [];
  var ch = all.find(function (c) { return c.id === "templates"; });
  if (!ch) {
    host.innerHTML = '<p class="loading">Could not find the Template Vault chapter data.</p>';
    return;
  }

  function block(type) {
    return (ch.blocks || []).find(function (b) { return b.type === type; });
  }

  var out = [];

  /* ---- 1) universal skeleton strip (from the stepper) ---- */
  var stepper = block("stepper");
  if (stepper && stepper.steps) {
    out.push('<div class="skeleton-strip">');
    out.push('<div class="strip-title">The universal skeleton — say it cold, every time</div>');
    out.push('<div class="strip-steps">');
    stepper.steps.forEach(function (s) {
      var n = s.title.split(" ")[0];
      var label = s.title.replace(/^[0-9]+ · /, "");
      out.push('<div class="strip-step"><span class="strip-n">' + n + "</span>" + label + "</div>");
    });
    out.push("</div></div>");
  }

  /* ---- 2) the six diagram frames (24 skeletons + worked examples) ---- */
  var tabs = block("tabs");
  if (tabs && tabs.tabs) {
    tabs.tabs.forEach(function (t) {
      var cardsB = (t.blocks || []).find(function (b) { return b.type === "cards"; });
      var paraB = (t.blocks || []).find(function (b) { return b.type === "para"; });
      if (!cardsB) return;

      out.push('<section class="diagram">');
      out.push('<h2 class="diagram-title">' + t.label + "</h2>");
      out.push('<div class="skeletons">');

      // Tag is derived from the card's own title so it can never drift out
      // of sync with the chapter data (emoji follows the paragraph role).
      var emojis = ["✍️", "👁️", "📦", "🧩"];
      cardsB.items.forEach(function (c, i) {
        out.push('<div class="skel">');
        out.push('<span class="skel-tag">' + (emojis[i] || "•") + " " + c.title + "</span>");
        out.push('<div class="skel-body">' + c.body + "</div>");
        out.push("</div>");
      });

      out.push("</div>");
      if (paraB && paraB.text) {
        out.push('<div class="workex"><b>Worked example —</b> ' + paraB.text + "</div>");
      }
      out.push("</section>");
    });
  }

  host.innerHTML = out.join("");

  /* ---- print button ---- */
  var btn = document.getElementById("printBtn");
  if (btn) {
    btn.addEventListener("click", function () {
      window.print();
    });
  }
})();
