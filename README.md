# NBLT — IELTS Study Apps

A collection of five self-contained study tools for IELTS preparation, built as a pure static site (HTML / CSS / JS — no back-end, no build step).

All progress is saved locally in the browser (`localStorage`); nothing is sent to any server.

## Apps

| App | What it does |
|-----|-------------|
| **Band 7+ Tracker** | 31-day, hour-by-hour study plan with streaks and essay links |
| **Vocab Builder** | IELTS word challenge — বাংলা meanings, phrasal verbs, idioms & linking words, search, and self-test quizzes |
| **Task 1 Study Hub** | Visual chapters on Academic Task 1 — charts, maps, processes |
| **Task 2 Lab** | Essay structures, model essays across 20 exam topics |
| **Grammar Book** | 25 interactive units covering Cambridge Grammar for IELTS |

## Deployment

The site is deployed on [Vercel](https://nblt.vercel.app/) as a static site. There is no build command — Vercel serves the files as-is.

| Setting | Value |
|---------|-------|
| Framework | Other (no framework) |
| Build Command | *(leave blank)* |
| Output Directory | `.` (root) |
| Install Command | *(leave blank)* |

## Tech stack

- Plain HTML5 / CSS3
- [Tailwind CSS](https://tailwindcss.com) (CDN)
- [Alpine.js](https://alpinejs.dev) (CDN)
- Google Fonts (Bricolage Grotesque, Manrope, Hind Siliguri)
- SoundCloud embeds for audio tracks (Grammar Book)

## Local development

No install required — open any HTML file directly in a browser, or serve the root folder:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## License

Content is for personal study use. Third-party audio and external links belong to their respective owners.
