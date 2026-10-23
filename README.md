# Shirt Sponsor Explainer · 球衣广告解读

A bilingual (English / 中文) static web app: type a Premier League club and see its 2026-27 main shirt sponsor, what that company does, and how it makes money — in plain language. Example: Chelsea → USDC by Circle (a stablecoin issuer that earns interest on its dollar reserves).

## Run locally
No build step. Open `index.html` in a browser, or:
```
python3 -m http.server 8000
```
then visit http://localhost:8000

## Deploy
GitHub Pages: Settings → Pages → Deploy from branch `main` / root. Or import the repo on Vercel (framework: Other).

## Data
`data.js` — 11 clubs, sponsors cited (Score and Change, My Football Facts, BBC Sport, FootyLogos). Sponsors can change mid-season; corrections welcome.

## Built with
Plain HTML/CSS/JS, built with an AI coding assistant following the Devpost Learn `learn-ai-basics` skill pack (`npx skills add challengepost/learn-ai-basics --all -y`).

## License
MIT
