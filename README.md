# HallowisAI — Agency Website

A high-end, single-page marketing site for **HallowisAI**, an AI agency.
Dark, animated gradient-mesh aesthetic with an electric blue → cyan accent.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and a shadcn-style `components/ui` structure.

## Sections

Hero · Scroll showcase · Services (Lead Generation, Software Development, Cloud & DevOps, Business Systems & Automation) · Process · Podcast (Tap Into Wisdom) · About / CEO · Final CTA · Footer.

All contact details, services, and process copy live in [`lib/site.ts`](lib/site.ts) — edit there to update the whole site.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

Requires Node.js 18.18+ (Node 20+ recommended).

## Project structure

```
app/
  layout.tsx          # fonts, metadata, global wrapper
  page.tsx            # assembles all sections
  globals.css         # theme tokens + utility classes
components/
  ui/                 # reusable + provided components
    container-scroll-animation.tsx   # provided scroll component
    gradient-menu.tsx                # provided menu, adapted as social dock
    gradient-mesh.tsx                # animated background
    reveal.tsx                       # scroll-reveal wrapper
  sections/           # page sections (navbar, hero, services, …)
lib/
  site.ts             # ← all content/config (contact links, services, process)
  utils.ts            # cn() helper
```

## Deploying to Vercel

### Option A — Git (recommended)

1. Create a GitHub repo and push:
   ```bash
   git add .
   git commit -m "HallowisAI website"
   git branch -M main
   git remote add origin https://github.com/<you>/hallowisai-web.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel          # preview deploy (follow prompts)
vercel --prod   # production deploy
```

### Custom domain

In the Vercel dashboard → **Project → Settings → Domains**, add `hallowisai.com`
and point your DNS as instructed. Update `metadataBase` and the OG URLs in
[`app/layout.tsx`](app/layout.tsx) if your final domain differs.

## Editing content

| Want to change… | Edit |
| --- | --- |
| Contact links, email, nav | `lib/site.ts` |
| Services & process copy | `lib/site.ts` |
| Colors / theme | `tailwind.config.ts` + `app/globals.css` |
| Section layout/copy | `components/sections/*` |
