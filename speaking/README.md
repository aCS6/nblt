# IELTS Speaking Studio

A free, offline-friendly static study website built from the two IELTS Speaking
markdown files in this folder. Organised for IELTS preparation students:

- **Part 1** — 102 practice topic groups (questions + band-7 model answers) plus 209 common questions.
- **Part 2 & 3** — 79 cue cards. Each card shows the prompt, "You should say" points, a model answer, **and its own Part 3 follow-up Q&A** (they are cumulative — the discussion builds on the cue card).
- **Part 1 workbook** — a bonus set of classic Part 1 questions & answers bundled inside the cue-card file.

## Features

- 🔍 Instant full-text search across every question, answer and cue card (`/` to open)
- ✅ Progress tracking (topics, common questions, cue cards) — saved in your browser
- 🎭 Practice mode — answers hidden until you reveal them; reading mode shows everything
- 🎲 Random cue card for spontaneous practice
- 🌙 Light / dark theme (follows your system by default)
- ⌨️ Keyboard navigation: `/` search, `Esc` close, `←` `→` move between cue cards
- 📱 Fully responsive, with a slide-in menu on small screens
- 🔒 100% static — works from `file://` or any static host, no build step to run the site

## Structure

```
build.js            Node script: markdown → js/data.js
index.html          App shell
css/styles.css      Design system (light + dark)
css/fonts.css       Vendored Google Fonts (Inter + Source Serif 4)
fonts/*.woff2       Font files
js/data.js          Generated structured content (do not edit by hand)
js/app.js           Views, routing, search, progress
favicon.svg         Site icon
```

## Regenerating the data

If the source markdown files change:

```bash
node build.js
```

This rewrites `js/data.js` and prints a summary of parsed content (topics,
questions, cue cards, Part 3 counts).

## Running locally

Just open `index.html`, or serve the folder:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Content sources

- `ielts-speaking-part1-topics-and-answers.md` — Part 1 topics & answers (target band 7.0)
- `ielts-speaking-part2-3-topics-and-answers.md` — Part 2 cue cards, Part 3 follow-ups, and a Part 1 workbook
