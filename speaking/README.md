# IELTS Speaking Studio

A free static study website built from the two IELTS Speaking markdown files in
this folder, organised for IELTS preparation students. It is one of the apps in
the **NBLT** suite and shares the parent project's centralised assets
(`../assets/`): fonts, the Tailwind build, Alpine.js, and the floating
"back to NBLT" pill.

- **Part 1** — 102 practice topic groups (questions + band-7 model answers) grouped into 12 subject categories, plus 209 common questions.
- **Part 2 & 3** — 79 cue cards. Each card shows the prompt, "You should say" points, a model answer, **and its own Part 3 follow-up Q&A** (they are cumulative — the discussion builds on the cue card).
- **Part 1 workbook** — a bonus set of classic Part 1 questions & answers bundled inside the cue-card file.

## Features

- 🔍 Instant full-text search across every question, answer and cue card (`/` to open)
- ✅ Progress tracking (topics, common questions, cue cards) — saved in your browser
- 🎭 Practice mode — answers hidden until you reveal them; reading mode shows everything with tinted question rows
- 🗺️ Game-style 10-level study roadmap on the home page
- 💡 10 expert exam tips (IDP) with practice shortcuts
- 🎲 Random cue card for spontaneous practice
- 🌙 Light / dark theme — shared with the rest of NBLT via the `nblt.theme` key
- ⌨️ Keyboard navigation: `/` search, `Esc` close, `←` `→` move between cue cards
- 📱 Fully responsive, with a slide-in menu on small screens
- 🔒 100% static — works from `file://` or any static host, no build step to run the site

## Structure

```
build.js            Node script: markdown → js/data.js
index.html          App shell (Alpine x-data="speakingApp()")
css/styles.css      App design system (tokens, components, responsive)
css/fonts.css       App fonts — Inter + Source Serif 4 (answers read in serif)
fonts/              The woff2 font files
js/data.js          Generated structured content (do not edit by hand)
js/app.js           Alpine store: routing, views, search, progress, theme
favicon.svg         Site icon
```

Shared assets live in the parent `assets/` folder (the Tailwind build,
`alpine.min.js`, and the `nblt-home.js` back pill) — see `index.html` for the
links. Tailwind + Alpine drive behaviour and layout utilities; the app's own
design system lives in `css/styles.css` on top.

## Regenerating the data

If the source markdown files change:

```bash
node build.js
```

This rewrites `js/data.js` and prints a summary of parsed content (topics,
questions, cue cards, Part 3 counts).

## Running locally

Serve the NBLT parent folder so the shared `../assets/*` resolve (opening
`index.html` directly also works):

```bash
cd .. && python3 -m http.server 8000
# → http://localhost:8000/speaking/
```

## Content sources

- `ielts-speaking-part1-topics-and-answers.md` — Part 1 topics & answers (target band 7.0)
- `ielts-speaking-part2-3-topics-and-answers.md` — Part 2 cue cards, Part 3 follow-ups, and a Part 1 workbook
