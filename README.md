# CodeWithSaviour Portfolio

Premium software engineering portfolio built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and a modular content architecture.

**Brand:** CodeWithSaviour  
**Tagline:** Building Digital Experiences That Matter.

---

## Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI | Custom shadcn-style primitives |
| Motion | Framer Motion + Lenis |
| Forms | React Hook Form + Zod |
| Email | Resend (optional) |
| Auth | Clerk-ready (optional) |
| Database | Supabase-ready (optional) |
| Analytics | Vercel Analytics, GA, Clarity |
| Deploy | Vercel |
| Package manager | pnpm |

---

## Quick start

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Scripts

```bash
pnpm dev          # Turbopack development server
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # ESLint
pnpm typecheck    # TypeScript
pnpm format       # Prettier
```

---

## Folder guide

```
app/                 # Routes, layout, API, SEO (sitemap/robots)
components/          # Shared UI + layout chrome
  ui/                # Primitives (button, accordion, inputs)
  layout/            # Navbar, footer, dock, progress, analytics
  shared/            # Reveal, magnetic button, section heading
features/            # Section-level feature modules
content/             # Editable content (projects, skills, etc.)
config/              # Site configuration
lib/                 # Utilities, GitHub, Supabase helpers
hooks/               # Shared hooks
providers/           # Client providers
types/               # Shared TypeScript types
public/assets/       # Static assets
emails/              # Email templates (future)
```

---

## Customization

### Brand & links
Edit `config/site.ts`.

### Projects / skills / experience / services / testimonials / FAQ / blog
Edit files in `content/`.

### Design tokens
Edit `app/globals.css` (`--background`, `--electric`, `--cyan`, `--violet`, typography utilities).

### Resume
Place your PDF at `public/assets/resume.pdf`.

---

## Environment variables

See `.env.example`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL |
| `GITHUB_USERNAME` / `GITHUB_TOKEN` | Live GitHub stats |
| `RESEND_API_KEY` | Contact form email delivery |
| `NEXT_PUBLIC_CLERK_*` | Auth (optional) |
| `NEXT_PUBLIC_SUPABASE_*` | Database (optional) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity |

Without Resend or GitHub credentials, the app still runs — contact payloads are logged, and GitHub shows curated fallback data.

---

## Deployment (Vercel)

1. Push to GitHub.
2. Import the repo in Vercel.
3. Set environment variables from `.env.example`.
4. Deploy. Framework preset: **Next.js**.

---

## SEO & accessibility

- Metadata, Open Graph, Twitter cards
- JSON-LD Person schema
- `sitemap.xml` + `robots.txt`
- Semantic landmarks, ARIA labels, focus states
- `prefers-reduced-motion` support

---

## Maintenance

1. Keep content in `content/` — avoid hardcoding copy in components.
2. Prefer Server Components; mark `"use client"` only for interaction.
3. After dependency upgrades: `pnpm typecheck && pnpm lint && pnpm build`.
4. Rotate API keys periodically; never commit `.env.local`.

---

## License

Private portfolio for CodeWithSaviour. All rights reserved.
