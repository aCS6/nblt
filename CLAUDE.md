# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

NBLT is a static IELTS study site: a hub page (`index.html`) plus seven self-contained apps. No server, no framework, no bundler, and **no build step for the site** — Vercel serves the repo root as-is (`vercel.json` only sets headers). Anything that needs generating is generated locally and committed pre-built.

| App | Entry point |
|---|---|
| Band 7+ Tracker | `ielts-band7-tracker.html` (single 2.8k-line file) |
| Vocab Builder | `vocab-builder/index.html` |
| Task 1 Study Hub | `task-1/index.html` |
| Task 2 Lab | `essays/webapp/index.html` |
| Grammar Book | `grammar-book/grammar/index.html` |
| Speaking Studio | `speaking/index.html` |
| Daily Mock Tracker | `todo-tracker/index.html` |

## Commands

### Serve locally

```bash
python3 -m http.server 8080     # from the repo root, then http://localhost:8080
```

Serve from the **root**, not from an app folder — every app links up to `../assets/…`. Most apps also work opened directly over `file://` (data is loaded via `<script src>`, never `fetch`).

### Rebuild Tailwind

Required after adding any Tailwind utility class to an HTML file or to JS that emits markup:

```bash
npx tailwindcss -i assets/tailwind.src.css -o assets/tailwind.css --minify
```

This is Tailwind **v3** driven by `tailwind.config.js`; a new app directory must be added to its `content` globs or its classes get purged. (`@tailwindcss/cli` v4 is also in `devDependencies` but is not what produces this file.)

### Regenerate app data

Each command rewrites a committed file from source material. **Never hand-edit the outputs.**

| cwd | Command | Source → output |
|---|---|---|
| `vocab-builder/` | `node scripts/build-data.js` | `vocabulary.json` + `enrichment-*.jsonl` + `scripts/translations.bn.json` → `data.js` |
| `speaking/` | `node build.js` | the two `ielts-speaking-*.md` files → `js/data.js` |
| `essays/webapp/` | `python3 generate.py` | `../materials/*.md` → `scripts/topics-data.js` **and** `topics/*.html` |

`vocab-builder/scripts/README.md` documents the Bangla-translation pipeline (`prep-translations.js` → translate → `merge-translations.js` → `build-data.js`).

### Grammar Book checks

```bash
cd grammar-book/grammar
node scripts/check_explanations.js        # all 25 units; exits non-zero on any problem
node scripts/check_explanations.js 9 14   # specific units
node scripts/test_explanations.js 14      # jsdom smoke test, one unit (default 1)
```

`check_explanations.js` extracts each chapter's real answer key by running its own `window.__grammarInit` block in a `vm` sandbox with the `init*` helpers stubbed, then diffs it against `explanations/unitN.js`, flagging MISSING / EXTRA / MISMATCH / THIN / MARKUP / CONTRADICT. Run it after touching any answer key or explanation. As of the last commit it is clean: 1754/1754 items explained.

`test_explanations.js` needs jsdom, deliberately not in `package.json`: `npm install --no-save jsdom`.

`vocab-builder/scripts/test-migration.js` does **not** run today — it needs a pre-mix `data.old.bak.js` snapshot (or `OLD_DATA=<path>`) that no longer exists. It was a one-shot check for the 60→70-day re-layout.

## Architecture

### The hub is only a router

`assets/hub.js` holds `APPS` — the single registry of each app's name, `href`, hotkey (`1`–`7`), accent pair, content `scale` and deep links — plus `ROUTE` (the suggested daily loop). Adding, renaming or re-pointing an app means editing those two arrays and nothing else. The hub deliberately reads **no** app's progress; each app owns its storage entirely, and the only value the hub persists is `nblt.theme`.

### Shared assets, and no CDNs

Everything in `assets/` is vendored locally: `alpine.min.js`, `alpine-collapse.min.js`, the built `tailwind.css`, and 70 woff2 files behind `fonts.css` / `fonts-task1.css`. This is enforced by the CSP in `vercel.json` (`default-src 'self'`; `frame-src` allows SoundCloud only, for the Grammar Book audio embeds). **Any external stylesheet, script or font added to a page is blocked in production.** One known drift: `ielts-band7-tracker.html` still links `fonts.googleapis.com`, which the CSP blocks — it silently falls back to system fonts.

Two scripts get injected into the apps and must stay dependency-free and self-scoped:

- `assets/nblt-home.js` — the floating "back to NBLT" pill. Derives the hub URL from its own `<script src>`, so the identical line works at any nesting depth.
- `assets/nblt-unit-progress.js` — the Grammar Book "mark unit complete" card. Takes the unit number from the filename, so one line covers all 25 chapters; writes `{units:{"7":true}}` to `nblt.grammar.v1`.

Both are ES5 (`var`, no arrows), IIFE-wrapped, inject their own scoped CSS, and bail quietly instead of throwing — they run inside five differently-themed apps and must not perturb them. Preserve that property when editing them.

### Generated data is committed; its sources are not

Every content app ships one large committed data file loaded with a plain `<script src>` (so it works from `file://`), produced by a generator that `.gitignore` excludes along with its source material. `.gitignore` also excludes `package.json`, `package-lock.json`, `tailwind.config.js` and `assets/tailwind.src.css`. Consequence: **a fresh clone can serve the site but cannot rebuild any of it.** Treat the local working copy as the only place the build inputs exist.

`vocab-builder/data.js`: every word carries `from: [{day, idx}, …]` — the positions it occupied in the previous 79-day layout. `migrateLayout()` in `index.js` uses those pointers to rewrite saved progress and bookmarks across the re-shuffle (`SCHEMA = 3`). Removing that field silently destroys returning users' streaks. Words are identified by index within a day, so day ordering must stay stable.

### Grammar Book

The most structured app: 25 standalone `chapters/unitN.html` files, each 40–90 KB, plus a shared engine.

- **Answer keys** live in each chapter's own `window.__grammarInit` block, keyed by `data-id` attributes on the inputs.
- **`scripts/utils.js`** is the engine: `norm`/`accepts` answer normalisation, the generic graders (`initGapFill`, `initMCGroups`, `initTrueFalse`, `initEndings`, `initGFT`), the `AUDIO_TRACKS` SoundCloud registry + `loadAudio()`, the explanation modal, and the Alpine `grammar` component (registered on `alpine:init`) that drives the nav tabs and calls `window.__grammarInit()` on mount.
- **`explanations/unitN.js`** sets `window.__EXPL[data-id] = { q, a, why, wrong: [{opt, why}], rule? }`. `initExplanations()` injects a chip per explained item and a button per exercise. `q`, `a` and `wrong[].opt` are HTML-escaped at render (only a small inline whitelist survives in `q`); only `why` and `rule` may carry tags — `check_explanations.js` enforces this.
- Earlier units call the shared `init*` helpers; units 21–25 instead declare local answer objects with arbitrary names (`A3`, `C3`, `GFT`, `*_ANSWERS`) and wire their own handlers, which is why the checker brace-matches object literals whose keys are all real `data-id`s.
- **Chapter styling**: `styles/tailwind-components.css` is the source of truth, inlined verbatim as `<style id="grammar-components">` into all 25 chapters. Editing one chapter's block alone puts it out of sync with the other 24. `styles/main.css` is legacy and referenced by nothing.
- **`scripts/migrate_alpine.py` and `scripts/migrate_tailwind.py` are stale one-time migrations.** `migrate_tailwind.py` re-injects `cdn.tailwindcss.com` and jsDelivr `<script>` tags, which the CSP now blocks. Do not re-run them; port the change by hand or write a fresh script.
- `AUDIT.md`, `plan.md` and `explanation-task.md` are gitignored internal working docs — `AUDIT.md` records answer-key defects found against the scanned source PDFs and is the reference when an answer looks wrong.

### Task 1 Study Hub

Content is declarative: `CHAPTERS` is created in `js/chapters-part1.js` and extended via `addChapters()` in `js/chapters-part2.js`. Each chapter is `{ id, blocks: [...] }`, and `renderBlock()` in `js/app.js` switches over ~21 block types (`para`, `stats`, `cards`, `flash`, `stepper`, `quiz`, `samples`, `annotated`, `bandtable`, `trend`, `framesteps`, `tabs`, …). Adding content means adding block objects; adding a *kind* of content means a new `case` in `renderBlock`, which is wrapped in try/catch so an unknown block degrades instead of blanking the page.

### Task 2 Lab

Two Alpine stores: `app` (vault — topics, essays, vocabulary highlighting, the grammar side panel) and `guide` (the guideline course — flashcards with spaced repetition, quizzes, matching games, lesson mastery). `scripts/grammar.js` holds `GRAMMAR_PATTERNS`, regexes that detect essay sentence structures and explain them. `topics/*.html` are generated static fallbacks, not part of the app.

### Speaking Studio

Alpine store `app` in `js/app.js`: hash routing (`#/part1`, `#/part2/<n>`, `#/part2/rand`), a search index built over every question/answer/cue card, progress, and the 10-level roadmap. Views are rendered as HTML strings into `#view` and Alpine wires the directives inside them — so anything interpolated goes through the `esc` / `jsStr` helpers.

### Daily Mock Tracker

One self-contained file, no frameworks. The embedded `PLAN25` array holds the whole IELTS Worldly test library split across 25 days: 56 Cambridge Listening, 39 Academic Reading, 30 Writing tests. Each test is a checkbox row whose label links out to the test page; checkmarks persist under `nblt.todo25` keyed `L:day:idx` / `R:…` / `W:…`, and the same `nblt.theme` key drives its light/dark palette. Plan data was curated by hand from the source pages and is committed inline — there is no generator. Rebuilding the plan means editing `PLAN25`.

### Per-app state (localStorage)

| Key | Owner |
|---|---|
| `nblt.theme` | hub `assets/hub.js` — also read/written by Speaking Studio, the only app sharing it |
| `nblt.grammar.v1` | `assets/nblt-unit-progress.js`; the Grammar Book unit-completion count |
| `ielts_tracker_v2` | Band 7+ Tracker |
| `vocabBuilder30.v1` | Vocab Builder (with `SCHEMA` version inside) |
| `ielts-task1-progress-v1` | Task 1 Study Hub |
| `ielts-theme`, `ielts-font-scale`, `ielts-last-read`, `ielts-guide-done`, `ielts-guide-mastery`, `grammar-panel-width` | Task 2 Lab |
| `ss-*` (one key per concern) | Speaking Studio |
| `nblt.todo25` | Daily Mock Tracker — the set of completed test ids (`L:day:idx` / `R:…` / `W:…`) |

Theme is not global. The hub and Speaking Studio share `nblt.theme` and toggle a `.dark` class on `<html>`; Task 2 Lab uses its own `ielts-theme` and a `data-theme` attribute instead; the other apps are single-palette. The Daily Mock Tracker also reads `nblt.theme`. All three theme-aware pages apply the saved value from an inline `<head>` script *before* the stylesheets, to avoid a flash of the wrong palette — keep any new one in that position.

## Conventions

- Files open with a block comment stating the file's scope and, more usefully, its deliberate non-goals ("this page is a router… it does not read, write or aggregate any app's progress"). Match that when adding files, and keep the "regenerate with X" header on generated files.
- Shared/injected assets are ES5 and IIFE-wrapped; per-app code is modern JS. Keep each file in its existing dialect.
- `essays/webapp` and `speaking` cache-bust their own CSS/JS with `?v=<date>` query strings — bump them when editing those files.
- Commit messages follow Conventional Commits (`feat:`, `fix:`, `style:`, `refactor:`).
