# Purdue ChE GSO Website

Redesigned website for the Chemical Engineering Graduate Student Organization at Purdue University.

Built with **Next.js 14** (static export) + plain CSS Modules. No Tailwind, no heavy dependencies.

---

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

---

## Adding Your Background Photos

The hero and symposium banner are designed to accept real Purdue photos.

### Hero (homepage header)

1. Drop your photo into `public/images/` — e.g. `public/images/hero-bg.jpg`
2. Open `pages/index.jsx` and update the `bgImage` prop:

```jsx
<Hero bgImage="/images/hero-bg.jpg" overlayOpacity={0.55} />
```

- `overlayOpacity` controls how dark the dark overlay is (0 = fully transparent, 1 = fully black).  
  A value of `0.5–0.6` works well for most outdoor campus photos.
- The overlay uses a gradient that is darkest at the bottom (where the text sits) and fades out toward the top, so even bright photos stay legible.

### Symposium banner

Same pattern — pass `bgImage` to `<SymposiumBanner>`:

```jsx
<SymposiumBanner bgImage="/images/forney-atrium.jpg" />
```

### Recommended photo specs
| Use           | Suggested size       | Tips                                    |
|---------------|----------------------|-----------------------------------------|
| Hero          | 1920×800px or wider  | Landscape, avoid busy center/left area  |
| Symposium     | 1600×600px or wider  | Landscape, darker tones work better     |

---

## Updating Content Each Year

All officer names, activity descriptions, nav links, and footer links live in one file:

```
data/site.js
```

Just update the `officers` array at the start of each academic year. No need to touch any component files.

---

## Deployment

The site is hosted on **GitHub Pages** and auto-deploys on every push to `main`.
Purdue IT handles a 301 redirect from `engineering.purdue.edu/~gso/` to the GitHub Pages URL.

### Setup (one-time)

1. Push the repo to GitHub
2. Go to your repo → **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. That's it — the workflow handles everything from there

### Auto-deploy workflow

Every push to `main` triggers `.github/workflows/deploy.yml` which:
1. Installs dependencies
2. Runs `npm run build` → outputs static files to `out/`
3. Deploys `out/` to GitHub Pages

No manual steps needed after initial setup.

### Manual build (local preview only)

```bash
npm run build
```

This generates the `out/` folder locally. Useful for checking the production
build before pushing, but you don't need to deploy it manually.

### Environment variables / secrets

No secrets are required. GitHub Pages deployment uses the built-in
`GITHUB_TOKEN` via the Actions permissions block in the workflow file.

### Updating the site

1. Make changes locally
2. Test with `npm run dev`
3. Push to `main` — GitHub Actions deploys automatically within ~2 minutes

### Domain

The live site is accessible at:
- GitHub Pages URL: `https://<your-org>.github.io/<repo-name>/`
- Purdue URL (301 redirect): `https://engineering.purdue.edu/~gso/`

---

## Project Structure

```
purdue-che-gso/
├── components/
│   ├── Navbar.jsx / .module.css
│   ├── Hero.jsx / .module.css          ← background photo goes here
│   ├── Ticker.jsx / .module.css
│   ├── ActivitiesGrid.jsx / .module.css
│   ├── SymposiumBanner.jsx / .module.css
│   ├── ProspectiveSection.jsx / .module.css
│   ├── OfficersGrid.jsx / .module.css
│   └── Footer.jsx / .module.css
├── data/
│   └── site.js                         ← update officers & links here
├── pages/
│   ├── _app.jsx
│   └── index.jsx                       ← set bgImage paths here
├── public/
│   └── images/                         ← drop photos here
├── styles/
│   └── globals.css                     ← design tokens (colors, fonts)
└── next.config.js
```