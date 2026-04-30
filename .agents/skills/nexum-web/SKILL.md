---
name: nexum-web
description: Use this skill whenever the user asks about the Nexum Digital agency website, landing page, portfolio, packs, pricing, or any work on this project. Also use when the user mentions "la web", "el landing", "Nexum", "agencia audiovisual", "Protagónico", "Clínica Dental", or asks to add/edit/improve any section of the site. This skill contains the full project context: design system, architecture, deployment, content, and decisions made.
metadata:
  version: 1.0.0
  project: nexum-digital
---

# Nexum Digital — Project Context

This is a single-page marketing landing for **Nexum Digital**, an audiovisual agency in Chile (Santiago + VI Región) selling monthly content production packs and complementary services to clinics, retail, gastronomy, and corporate clients.

## Critical Files

- `index.html` — main file (standalone HTML with inline CSS + JS, ~1100 lines)
- `landing_nexum_v2.html` — exact copy of index.html (legacy, kept in sync)
- `public/landing.html` — same file copied for Next.js compatibility
- `vercel.json` — static deploy config (bypasses Next.js build)
- `assets/portfolio/{client}/` — client photos (real JPGs in repo)
- `gemini-code-1777314921108.html` — original Gemini design reference

**Always edit `index.html` first, then sync to `landing_nexum_v2.html` via `cp`.**

## Deployment

- Hosted on **Vercel Hobby (free tier)** at `agencia-web-nexums.vercel.app`
- Auto-deploys from `main` branch on push
- `vercel.json` skips Next.js build: framework=null, copies `index.html` + `assets/` to `out/`
- Working branch: `claude/github-integration-setup-9uFyi` → merge to `main` triggers deploy
- Repo has legacy Next.js code (`app/`, `package.json`) that is unused but not removed

## Design System (Dark Glassmorphism)

Replaced the original Clean Bloom B1 (lavender) palette with a Gemini-generated dark glassmorphism design.

**Colors (CSS vars in `:root`):**
- `--bg-dark: #05020a` — base
- `--mesh-purple: #6D28D9`, `--mesh-pink: #DB2777`, `--mesh-cyan: #0891B2`, `--mesh-amber: #D97706` — animated mesh blobs
- `--gold: #8B5CF6`, `--pink: #EC4899`, `--cyan: #06B6D4`, `--amber: #F59E0B`, `--green: #10B981` — accents
- Glass cards: `rgba(15,10,25,0.45)` with `backdrop-filter: blur(24px)`

**Typography:**
- `Bebas Neue` — hero title, big numbers, footer logo
- `Syne` — section titles, pack names, buttons (weights 400/600/700/800)
- `DM Sans` — body text (weights 300/400/500)

**Effects:**
- Animated mesh blobs (`mesh-blob` class, 20s alternate animation)
- Cursor glow (`#cursor-glow`, follows mouse with mix-blend-mode: overlay)
- Tilt 3D cards (`.tilt-card`, perspective(1000px) on mousemove)
- Magnetic buttons (`[data-magnetic]`, translate toward cursor)
- Scroll reveal animations (`.reveal` → `.visible`)
- Hero text: word-by-word slide-in animation
- Vimeo background video in hero (id 1016174464, autoplay+loop+muted, mix-blend luminosity)

## Page Sections (in order)

1. **Hero** — Vimeo background video, animated word-by-word title, badge, CTA button
2. **Trust bar** — clientes/medios pills + ciudades ticker
3. **Valor** — 3 props (tilt cards): producción audiovisual, gestión de redes, estrategia
4. **Como funciona** — timeline 5 pasos: kick-off → producción → edición → publicación → reporte
5. **Packs** — tabs (Mensuales / Servicios Complementarios), 2 packs main + 3 servicios complementarios
6. **ROI calculator** — sliders + pack toggle, calcula retorno estimado
7. **Portafolio** — filter rows (Servicio + Rubro), grid de cards con carrusel + Vimeo
8. **FAQ** — preguntas frecuentes + garantía sin permanencia
9. **Agendar** — CTA grande (calendario pendiente)
10. **Footer** + **WhatsApp float** (número placeholder pendiente)

## Pricing & Packs

**Packs Mensuales:**
- **Pack Presencia** — $390.000/mes (sesión 2-3h, 8 piezas, gestión básica)
- **Pack Marketing** — $490.000/mes (featured, sesión 4h, 16 piezas, gestión completa, estrategia)

**Servicios Complementarios:**
- **Video Corporativo**: 1min $450k · 2-3min $950k · institucional desde $1.5M
- **Registro Audiovisual Eventos**: por hora desde $180k (consultar paquete completo)
- **Registro Fotográfico Eventos**: por hora desde $120k

## Portfolio Data

Real clients with photos in `assets/portfolio/`:
- **Protagónico** (retail, Santiago, Pack Marketing + Complementarios) — 2 fotos + 1 video Vimeo (1016174464)
  - `protagonico/09092024-DSC05813.jpg`
  - `protagonico/09092024-DSC05885.jpg`
- **Clínica Dental Anónima** (salud, Santiago, Pack Presencia + Complementarios) — 2 fotos
  - `clinica-dental/DSC01547.jpg`
  - `clinica-dental/DSC01550.jpg`
- **Caso 3** (turismo, VI Región, Video Corporativo) — placeholder
- **Caso 4** (corporativo, Santiago, Servicios Complementarios) — placeholder (currently removed from grid)

**Image hosting:** Photos use `https://raw.githubusercontent.com/dylangebhard-agencia/agencia-web-/main/...` URLs. This was needed because the user often previews by downloading the HTML file alone (without assets folder), so absolute GitHub URLs guarantee they always load.

## Portfolio Filter System

Two filter rows with AND logic:
- **Servicio**: Todos / Pack Presencia / Pack Marketing / Video Corporativo / Serv. Complementarios
- **Rubro**: Todos / Salud / Retail / Turismo / Corporativo

Each item has `data-servicio="marketing,complementarios"` (comma-separated, supports multiple categories) + `data-rubro` + `data-ciudad`. JS: `applyPortfolioFilters()` checks `.split(',').includes(val)`.

Empty state shows "Pronto agregaremos más casos en esta categoría."

## Carousel + Lightbox + Vimeo

**Thumbnail carousel (auto-rotating every 3.5s):**
- Slides: `<img class="carousel-slide">` for photos OR `<div class="carousel-slide carousel-vimeo-slide">` with iframe for video
- Vimeo iframe: `?autoplay=1&loop=1&muted=1&controls=0` (works with free-tier Vimeo) — `background=1` requires Vimeo Plus
- Iframe scaled `width: 225%` to fill 4:5 portrait frame (object-fit: cover effect)
- Click overlay (`.vimeo-click-overlay`) catches clicks for lightbox
- Live touch-drag swipe: `touchstart/touchmove/touchend` with translateX following finger (Instagram-style)

**Lightbox (click to enlarge):**
- Full-screen modal with prev/next arrows, dots counter, caption
- Supports image / video element / vimeo iframe
- Vimeo in lightbox: full controls + sound enabled (`?autoplay=1&title=0&byline=0&portrait=0`)
- Keyboard: Esc closes, ←/→ navigates
- Touch swipe in lightbox

## Tech Notes

- Standalone HTML, no build system, no JS framework — vanilla CSS + JS
- Skills stored in `.agents/skills/` with symlinks in `.claude/skills/`
- 32 marketing skills installed (page-cro, copywriting, etc.) + 15 alive context system skills
- ALIVE skill installation from `irinabuht12-oss/marketing-skills` failed (no valid SKILL.md) — only `alivecontext/alive` worked

## Pending / Open Items

- WhatsApp number is placeholder (`56XXXXXXXXX`) — user will provide
- Calendar embed for "Agendar" section pending — discussed Cal.com (free, open-source) and Calendly (free tier)
- Caso 3 and Caso 4 portfolio items lack real photos
- Mobile swipe was just added — test feedback pending

## Common Tasks Workflow

When the user asks for changes:

1. **Read** `index.html` (use `Read` with offset/limit, file is large)
2. **Edit** with `Edit` tool (preserve exact whitespace)
3. **Sync**: `cp index.html landing_nexum_v2.html` (and `cp` to `public/landing.html` if relevant)
4. **Commit** on `claude/github-integration-setup-9uFyi`
5. **Merge to main** to trigger Vercel deploy: `git checkout main && git merge claude/... && git push`
6. **Return to feature branch**: `git checkout claude/github-integration-setup-9uFyi`
7. Tell user to recargar Vercel URL (~15 seg deploy)

## Style Preferences

- User prefers Spanish (Chilean) replies
- Concise, action-first communication ("listo", "voy a...")
- Avoid over-explaining — implement first, explain results
- User has been frustrated by long delays, so push changes incrementally
- When stuck on debugging (e.g. images not loading), favor pragmatic fallbacks over perfect solutions
