# Purdue ChE GSO Website

Website for the Chemical Engineering Graduate Student Organization at Purdue University.

Built with **Next.js 16** (static export) + plain CSS Modules. No Tailwind, no heavy dependencies.

---

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint        # ESLint (eslint-config-next)
npm run build       # production build, outputs static export to out/
```

---

## Annual Update Checklist

This is the list a new board should work through at the start of each academic year. Everything here is a content edit — no component code needs to change. After editing, run `npm run dev` to preview, then commit and push to `main` to deploy (see [Deployment](#deployment)).

1. **Officers** — edit the `officers` array in `data/site.js` (names, roles, emails, advisors, bios, photos). Add new officer photos to `public/images/board/` first, then point each officer's `photo` field at the new file. See [Updating Officers](#updating-officers-data-sitejs).
2. **About page title** — `pages/about.jsx` line 27 has a hardcoded board year, e.g. `<h1 className={styles.pageTitle}>2026-2027 GSO Board</h1>`. Update the year range.
3. **Symposium page** — `pages/symposium.jsx` has several hardcoded values that change every year: the ordinal/year in the hero (`35th Annual`, `August 20th, 2026`), the sign-up deadline, the `schedule` object, the `$550*` registration cost, the registration link, the symposium contact's name/phone/email, and the `galleryPhotos` array (point it at a new folder under `public/images/symposium/` with that year's photos). See [Symposium Page](#symposium-page-pages-symposiumjsx).
4. **Activity photos** — drop new event photos into the matching `public/images/<activity>/` folder and add their paths to the `photos` array at the top of that `pages/activities/*.jsx` file. See [Activity galleries](#activity-galleries).
5. **Prospective page** — `pages/prospective.jsx` event descriptions (Block Party, Ice Cream Social, Exam Treats) are evergreen and rarely need edits; only touch them if the events themselves change. Its gallery photos live in `public/images/firstyear/`.
6. **Nav/footer links and socials** — only if the org's activities, Qualtrics form, calendar, or Instagram/LinkedIn URLs change — edit `navLinks`, `footerLinks`, and `social` in `data/site.js`.

The footer copyright year (`© {currentYear} ...` in `components/Footer.jsx`) updates itself automatically — nothing to do there.

---

## Pages

| Route                       | File                                  | Purpose                              |
|------------------------------|----------------------------------------|---------------------------------------|
| `/`                          | `pages/index.jsx`                     | Home — hero, ticker, activities grid, symposium banner, calendar, prospective section |
| `/about`                     | `pages/about.jsx`                     | Officer bios |
| `/symposium`                 | `pages/symposium.jsx`                 | Symposium info page |
| `/prospective`               | `pages/prospective.jsx`               | Info for prospective students |
| `/activities/safety`         | `pages/activities/safety.jsx`         | Activity sub-page (uses `ActivityLayout` + `Gallery`) |
| `/activities/social`         | `pages/activities/social.jsx`         | Activity sub-page |
| `/activities/co-curricular`  | `pages/activities/co-curricular.jsx`  | Activity sub-page |
| `/activities/sustainability` | `pages/activities/sustainability.jsx` | Activity sub-page |
| `/activities/sports`         | `pages/activities/sports.jsx`         | Activity sub-page |
| `/activities/outreach`       | `pages/activities/outreach.jsx`       | Activity sub-page |

Each activity page follows the same pattern: wrap content in `<ActivityLayout title icon intro>` and pass a photo array to `<Gallery>`.

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

Same pattern — pass `bgImage` to `<SymposiumBanner>`, prefixed via the `prefix` helper so it resolves correctly under the GitHub Pages base path:

```jsx
<SymposiumBanner bgImage={`${prefix}/images/forney-atrium.jpg`} />
```

### Activity galleries

Each `pages/activities/*.jsx` file defines a `photos` array of paths (prefixed with `prefix` from `utils/prefix.js`) pointing into `public/images/<activity>/`. Add photos to the matching folder (`public/images/safety/`, `public/images/social/`, etc.) and add the path to that page's `photos` array.

### Recommended photo specs
| Use           | Suggested size       | Tips                                    |
|---------------|----------------------|-----------------------------------------|
| Hero          | 1920×800px or wider  | Landscape, avoid busy center/left area  |
| Symposium     | 1600×600px or wider  | Landscape, darker tones work better     |

---

## Updating Officers (`data/site.js`)

Officer roster, activity descriptions, nav links, footer links, and social links all live in one file:

```
data/site.js
```

- `officers` — array of officer objects (`initials`, `name`, `role`, `email`, `advisor`, `photo`, `bio`). Each officer is its own `const` (e.g. `president`, `vicePresident`) collected into the `officers` array at the bottom of the file — add a new `const` block and add it to that array for a new role, or remove one to drop a role. The About page renders them in the order they appear in this array.
  - `photo` should point at a file in `public/images/board/` via the `prefix` helper, e.g. `` `${prefix}/images/board/dany5.jpeg` ``.
  - `bio` and `advisor` are optional — the About page only renders them if present.
- `activities` — cards shown in the homepage activities grid. `icon` is an icon name from [`@tabler/icons-react`](https://tabler.io/icons); `href` should match one of the `pages/activities/*.jsx` routes.
- `navLinks` / `footerLinks` — top nav and footer link structure, including the Activities dropdown. Keep these in sync with `activities` and the `pages/activities/*.jsx` files.
- `social` — contact email (mailto link), Instagram, LinkedIn.

Just update the `officers` array (and add new photos to `public/images/board/`) at the start of each academic year. No need to touch any component files.

---

## Symposium Page (`pages/symposium.jsx`)

Unlike most content, the symposium page's yearly details are hardcoded directly in JSX rather than pulled from `data/site.js`, since the layout (schedule table, three-column registration info) is bespoke to this page. Each year, edit:

- **Hero block** (`heroMeta`, `heroTitle`, `heroDate`, `heroDeadline`) — ordinal/year (`35th Annual`), event date, and sign-up deadline.
- **`schedule` object** — Thursday/Friday agenda items (`time`, `event`, optional `bold`).
- **Registration cost** (`costAmount`, `costNote`) and the **registration link** (`href` on "Register here via Purdue Conferences").
- **Contact box** — current Industry Liaison's name, phone, and email.
- **`topics` array** — research topic tags shown in the third column.
- **`galleryPhotos` array** — points at `public/images/symposium/photo-N.jpg`. Add that year's photos to `public/images/symposium/` (a new subfolder per year is fine as long as you update the paths) and update this array.

The venue address rarely changes and can be left as-is unless the symposium location moves.

---

## Deployment

The site is hosted on **GitHub Pages** and auto-deploys on every push to `main`.

### Auto-deploy workflow

Every push to `main` triggers `.github/workflows/deploy.yml`, which:
1. Checks out the repo and installs dependencies (`npm ci`)
2. Runs `npm run lint`
3. Runs `npm run build` → static export to `out/` (via `output: 'export'` in `next.config.js`)
4. Uploads `out/` as a Pages artifact and deploys it via `actions/deploy-pages`

No manual steps needed after the initial GitHub Pages setup (Settings → Pages → Source: **GitHub Actions**).

### Manual build (local preview only)

```bash
npm run build
```

This generates the `out/` folder locally. Useful for checking the production build before pushing.

### Base path

`next.config.js` sets `basePath`/`assetPrefix` to `/purdue-che-gso` in production, and `utils/prefix.js` exposes the same value (via `NEXT_PUBLIC_BASE_PATH` in `.env.production`) for use in plain `<img>` paths and data files. If the GitHub Pages repo name ever changes, update both `next.config.js` and `.env.production` to match.

### Environment variables

| File                | Variable                  | Value                  |
|---------------------|----------------------------|-------------------------|
| `.env.development`  | `NEXT_PUBLIC_BASE_PATH`    | *(empty)*               |
| `.env.production`   | `NEXT_PUBLIC_BASE_PATH`    | `/purdue-che-gso`       |

No secrets are required. GitHub Pages deployment uses the built-in `GITHUB_TOKEN` via the Actions permissions block in the workflow file.

---

## Project Structure

```
purduechegsoweb/
├── components/
│   ├── Navbar.jsx / .module.css
│   ├── Hero.jsx / .module.css            ← homepage background photo
│   ├── Ticker.jsx / .module.css
│   ├── ActivitiesGrid.jsx / .module.css  ← homepage activity cards
│   ├── ActivityLayout.jsx / .module.css  ← shared layout for /activities/* pages
│   ├── Gallery.jsx / .module.css         ← photo gallery used on activity pages
│   ├── CalendarEmbed.jsx / .module.css   ← Google Calendar embed
│   ├── SymposiumBanner.jsx / .module.css
│   ├── ProspectiveSection.jsx / .module.css
│   └── Footer.jsx / .module.css
├── data/
│   └── site.js                           ← officers, activities, nav/footer links, socials
├── pages/
│   ├── _app.jsx
│   ├── _document.jsx                     ← font preconnect/stylesheet links
│   ├── index.jsx                         ← home, set Hero bgImage here
│   ├── about.jsx                         ← officer bios
│   ├── symposium.jsx
│   ├── prospective.jsx
│   └── activities/
│       ├── safety.jsx
│       ├── social.jsx
│       ├── co-curricular.jsx
│       ├── sustainability.jsx
│       ├── sports.jsx
│       └── outreach.jsx
├── public/
│   └── images/                           ← board/, safety/, social/, sports/, etc.
├── styles/
│   ├── globals.css                       ← design tokens (colors, fonts)
│   ├── About.module.css
│   ├── Prospective.module.css
│   └── Symposium.module.css
├── utils/
│   └── prefix.js                         ← exposes NEXT_PUBLIC_BASE_PATH for asset paths
└── next.config.js
```