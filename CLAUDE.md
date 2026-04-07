# CLAUDE.md — Project Context for Claude Code

## Project Overview

**East Coast Anglers Club** — A static fishing club website built with Next.js, deployed on Cloudflare Pages.

- **Live URL**: https://fishing-club.pages.dev
- **Cloudflare Account**: chanmeng.dev@gmail.com (Account ID: `c87dca24333f7ed5d643f731f6308fec`)
- **Cloudflare Project**: `fishing-club`

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript, Turbopack)
- **UI**: Tailwind CSS 4 + shadcn/ui v4 (based on `@base-ui/react`, NOT Radix)
- **Icons**: Lucide React + custom inline SVGs
- **Fonts**: Geist Sans & Geist Mono via `next/font/google`
- **Output**: Static export (`output: 'export'` in `next.config.ts`)
- **Hosting**: Cloudflare Pages (static site, no backend)

## Important: shadcn/ui v4 API Differences

This project uses **shadcn/ui v4** which is built on `@base-ui/react` (NOT Radix UI). Key API differences:

- **No `asChild` prop** — use `render` prop instead for component composition
- **Accordion** — no `type` prop; uses `defaultValue` with number array (e.g., `defaultValue={[0]}`) and `value` accepts numbers
- **Sheet/Dialog** — based on `@base-ui/react/dialog`; `SheetContent` uses `SheetPrimitive.Popup`; `SheetTrigger` renders directly (no `asChild`)
- Always check `src/components/ui/*.tsx` source for the actual component API before using

## Project Structure

```
src/app/
  layout.tsx          — Root layout: Navbar + main + Footer
  page.tsx            — Landing page (imports 8 section components)
  globals.css         — Tailwind imports + shadcn/ui theme variables
  login/page.tsx      — Video background login page ("use client")
  register/page.tsx   — Registration page ("use client")

src/components/
  ui/                 — shadcn/ui components (DO NOT manually edit)
  layout/
    navbar.tsx        — Fixed dark navbar with fish SVG logo, mobile Sheet menu
    footer.tsx        — Simple copyright footer
  landing/
    hero-section.tsx        — Dark bg, amber title, pixabay image, "Join Us" CTA
    registration-cta.tsx    — Blue bg, email input bar
    features-cards.tsx      — 3 cards: Membership, Booking, Guide Sessions
    about-section.tsx       — Two-column: bing image + text
    events-section.tsx      — Reversed two-column on dark bg
    faq-accordion.tsx       — 3 Q&A items, shadcn Accordion
    guides-showcase.tsx     — 4 guide cards on blue bg
    contact-section.tsx     — Phone/email/address list

src/lib/
  utils.ts            — cn() helper (clsx + tailwind-merge)

public/
  fishing.mp4         — 2.1MB video for login background
  shipfishing.svg     — Club logo SVG
```

## Pages

| Route | Type | Description |
|-------|------|-------------|
| `/` | Static (SSG) | Landing page with 8 sections |
| `/login` | Static (client) | Video background login — display only, no auth |
| `/register` | Static (client) | Registration form — display only, no auth |

**No backend.** Login and register pages are display-only with no form submission handling.

## External Image Dependencies

The landing page uses external CDN images:
- `https://cdn.pixabay.com/photo/2020/06/21/13/58/fly-fishing-5324969_1280.jpg` — Hero
- `https://th.bing.com/th/id/R.046307a9a20535aa359e9aeb463888f6?...` — About section
- `https://cdn.pixabay.com/photo/2015/06/04/07/16/fishing-797187_1280.jpg` — Events
- `https://cdn.pixabay.com/photo/2019/03/13/00/09/carp-4052148_1280.jpg` — Guide: John Doe
- `https://cdn.pixabay.com/photo/2018/05/02/14/19/waters-3368678_1280.jpg` — Guide: Jane Smith
- `https://cdn.pixabay.com/photo/2016/06/20/20/22/fishing-1469726_1280.jpg` — Guide: Emily Davis
- `https://cdn.pixabay.com/photo/2017/10/01/17/40/fish-2806369_1280.jpg` — Guide: Mike Johnson

## Build & Deploy

```bash
# Development
npm run dev

# Build (static export to out/)
npm run build

# Deploy to Cloudflare Pages
CLOUDFLARE_ACCOUNT_ID=c87dca24333f7ed5d643f731f6308fec npx wrangler pages deploy out --project-name=fishing-club --commit-dirty=true
```

## Legacy Code

The `flask_app/` directory and `app.py` contain the original Flask application (Python + Bootstrap 5 + Jinja2). These are **archived and not in use**. The root `app/` directory was renamed to `flask_app/` because it conflicted with Next.js App Router's `app/` directory detection.

## Coding Conventions

- Use Tailwind CSS utility classes for all styling
- Create modular React components in `src/components/`
- shadcn/ui components live in `src/components/ui/` — add via `npx shadcn@latest add <component>`
- Use `cn()` from `@/lib/utils` for conditional class merging
- External images use raw `<img>` tags (with `eslint-disable` for `@next/next/no-img-element`) since `next/image` optimization is disabled for static export
- Login and register pages use `"use client"` directive
