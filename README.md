# phidea.eu

Marketing site for [Phidea](https://phidea.eu) — AI governance and
observability for regulated insurance. Seven positioning variants under
test in parallel, shipped as one static [Astro](https://astro.build)
build, deployed to GitHub Pages at `phidea.eu`.

## The variants

| URL | Angle | Primary CTA | Best audience |
|---|---|---|---|
| `/` | Flagship — observability ("See every AI answer. Prove every regulation.") | Request a demo | Heads of AI, CTOs |
| `/distribution.html` | Distribution ("Be the insurance answer inside every AI agent") | Request a demo | Heads of Distribution, CMOs |
| `/evidence.html` | Compliance-first ("Audit-ready AI. By default.") | Sample bundle | Heads of Compliance, Legal |
| `/developers.html` | Technical ("The governed MCP for insurance") | Technical walkthrough | CTOs, platform leads |
| `/synthetic.html` | Synthetic buyers ("Let AI test your AI, 24/7") | See it probing | Heads of AI, AI-ops |
| `/presence-test.html` | Free diagnostic ("Test your AI presence") | Run the test | Cold traffic |
| `/newsletter.html` | Weekly newsletter | Subscribe | Everyone else |
| `/angles.html` | Internal index of all variants (noindex) | — | Internal / visitor navigation |

Each form submission carries a `variant` hidden field so CRM attribution
is clean. The same `variant` is registered as a PostHog super-property,
so product analytics and CRM agree on the angle that converted.

## Project shape

```
phidea-site/
├── astro.config.mjs          # Astro config — static output, format: file
├── package.json
├── tsconfig.json
├── .env.example              # copy to .env and paste your PostHog key
├── public/
│   ├── CNAME                 # phidea.eu — GitHub Pages custom domain
│   └── robots.txt
├── src/
│   ├── lib/
│   │   └── variants.ts       # single source of truth for every variant
│   ├── layouts/
│   │   └── Layout.astro      # <html>, <head>, fonts, PostHog
│   ├── components/
│   │   ├── Nav.astro         # shared navigation, per-page links via prop
│   │   ├── Footer.astro
│   │   └── PostHog.astro     # loader with variant super-property
│   ├── styles/
│   │   └── global.css        # design system — imported by Layout
│   └── pages/
│       ├── index.astro
│       ├── distribution.astro
│       ├── evidence.astro
│       ├── developers.astro
│       ├── synthetic.astro
│       ├── presence-test.astro
│       ├── newsletter.astro
│       └── angles.astro
└── .github/workflows/
    └── deploy.yml            # build + deploy to GH Pages on push to main
```

## Local development

```bash
npm install
cp .env.example .env
# edit .env with your real PUBLIC_POSTHOG_KEY
npm run dev        # → http://localhost:4321
```

To preview the production build:

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages with custom domain phidea.eu

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — phidea.eu"
gh repo create phidea-site --public --source=. --push
# or manually:
git remote add origin git@github.com:<you>/phidea-site.git
git push -u origin main
```

### 2. Turn on Pages

Repo → Settings → Pages:

- **Source**: GitHub Actions

The workflow in `.github/workflows/deploy.yml` runs on every push to
`main`. It installs dependencies, runs `astro build`, and uploads
`./dist` as the Pages artifact.

### 3. Add your PostHog key as a GitHub secret

Repo → Settings → Secrets and variables → Actions → New repository
secret:

- `PUBLIC_POSTHOG_KEY` — your `phc_...` project API key
- `PUBLIC_POSTHOG_HOST` — `https://eu.i.posthog.com` (optional, defaults
  to the EU host)

Until the secret is set, PostHog is disabled at build time — the site
still ships fine.

### 4. Point phidea.eu at GitHub Pages

At your DNS registrar for `phidea.eu`:

```
A      phidea.eu       185.199.108.153
A      phidea.eu       185.199.109.153
A      phidea.eu       185.199.110.153
A      phidea.eu       185.199.111.153
CNAME  www.phidea.eu   <you>.github.io
```

Repo → Settings → Pages → **Custom domain**: `phidea.eu` → Save.
The `public/CNAME` file is already set.

Once DNS propagates (minutes to an hour), tick **Enforce HTTPS**.

## Analytics — PostHog (EU)

Every page injects a PostHog snippet that:

- Hosts on `eu.i.posthog.com` (GDPR-friendly)
- Reads the project key from `import.meta.env.PUBLIC_POSTHOG_KEY` at
  build time — no key = no script, site still works
- Registers `variant` and `site: "phidea.eu"` as super-properties, so
  **every** event (pageview, autocaptured click, form submit) carries
  the angle id

In PostHog, build these insights first:

- Conversion funnel by variant (pageview → primary CTA click → form
  submit)
- Share of "All angles" clicks per variant — signals angle-hopping
- Heatmaps per variant (PostHog Toolbar)
- Session replay on the flagship

## Form submissions

Every lead form posts to a Formspree placeholder
(`https://formspree.io/f/REPLACE_ME`). To turn them on:

1. Create a Formspree account with `benoit@phidea.fr` as destination.
2. Create one form (reading the hidden `variant` field) or one per
   angle.
3. Replace `REPLACE_ME` across `src/pages/*.astro`.

The newsletter page (`newsletter.astro`) uses
`buttondown.email/api/emails/embed-subscribe/phidea` — swap for your
real Buttondown username.

## Known follow-ups

- Swap `REPLACE_ME` in every form `action` URL for a real Formspree ID.
- Swap `buttondown.email/.../phidea` for the real Buttondown username.
- Add `PUBLIC_POSTHOG_KEY` as a GitHub Actions secret.
- Wire a `/legal.html` page when the product is ready to represent
  contractually.
- Add per-angle Open Graph images once the brand has more visual
  assets.
