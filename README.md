# Čevora.xyz static site

Local HTML and CSS copy of the public website. Nothing here is published. The live WordPress site is unchanged.

## Preview

From this folder:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://localhost:8000

Stop the preview with Ctrl+C in that terminal. Start the same command again later. After editing a file, reload the browser.

In Chrome or Safari, open the responsive design view (Chrome: View → Developer → Developer Tools, then the device toolbar; Safari: Develop → Enter Responsive Design Mode) to check phone layouts.

## Where things live

- `index.html` — Czech homepage
- `george/`, `kate-cevora-meng/`, `alzbeta-medlova/`, `peter-twiggs/`, `nikola-loncar/` — Czech profiles
- `en/` — the same pages in English
- `styles.css` — all layout and type
- `js/lang.js` — English is the default. EN / CS remembers the choice and opens the homepage in that language next time
- `images/` — team photographs
- `fonts/` — Source Serif Pro (Source Serif 4 variable files)

The EN / CS link in the top corner switches the current page. Czech addresses are the original ones. English addresses start with `/en/`.
