# 12 — Development Plan

## Goal

Ship the AiDamsole site as a working lead product: trust pages first, then capture into Zoho.

## Phase 1 — Structure

**Outcome:** Clean App Router foundation, no visual polish required.

- [x] App Router layout (`app/layout.tsx`, `app/page.tsx`)
- [x] Component folders: `components/layout`, `components/sections`
- [x] Section shells: Hero, Capabilities, Approach, Industries, CTA
- [x] Shared `Container`, `Navbar` shell
- [x] `lib/utils`, `styles/globals.css`
- [x] Docs index + product docs `01–12`
- [ ] Route stubs: `/industries/[slug]`, `/insights/[slug]`, `/assessment`, `/contact`
- [ ] Env template for later Zoho keys (no secrets in repo)

**Exit:** Project runs; homepage composes all sections; routes exist as placeholders.

## Phase 2 — UI System

**Outcome:** Deloitte / Accenture-like baseline applied consistently.

- [ ] Lock design tokens: type scale, spacing, borders, muted palette
- [ ] Finalize Navbar (70px, light border, Talk to Expert)
- [ ] Typography styles for H1/H2/body/CTA
- [ ] Button + link styles (primary subtle, secondary text)
- [ ] Form field baseline (assessment-ready)
- [ ] Enforce whitespace + section rhythm per design principles

**Exit:** One UI language across layout; still light on marketing copy polish if needed.

## Phase 3 — Pages

**Outcome:** Indexable trust surfaces with real structure and copy slots filled.

- [ ] Homepage sections fully composed (Hero → CTA)
- [ ] Industry pages: Real Estate, Healthcare, Education, Service
- [ ] Approach content on homepage or dedicated route
- [ ] Insights list + article template
- [ ] Assessment multi-step UI (steps 1–4 + confirmation)
- [ ] Contact page (if separate from assessment)
- [ ] SEO basics: titles, descriptions, heading hierarchy, internal links

**Exit:** Buyer can land, understand fit, and reach Talk to Expert without dead ends.

## Phase 4 — Lead System

**Outcome:** Form → API → Zoho CRM path works in production.

- [ ] `POST /api/leads` Route Handler
- [ ] Server validation + field normalization
- [ ] Zoho CRM auth + Lead create/update
- [ ] Attribution: page path, UTM, timestamp
- [ ] Optional score/class fields from business logic
- [ ] Success / error UI states
- [ ] Basic failure logging / retry path
- [ ] Sales assignment check in Zoho (manual verify)

**Exit:** Test submit appears as owned Lead in Zoho with required context.

## Phase 5 — Optimization

**Outcome:** Improve conversion and organic acquisition quality.

- [ ] Tighten CTA placement using real user-flow drop-offs
- [ ] Assessment field pruning (remove low-signal inputs)
- [ ] Industry page SEO content pass
- [ ] Insights publishing cadence (authority topics)
- [ ] Performance: LCP/CLS on homepage + industry templates
- [ ] Search Console query review → update target pages
- [ ] Lead class accuracy review with sales (P0–P3)

**Exit:** Organic → qualified discovery loop is measurable and improving.

## Sequence Rule

Do not start Phase 4 UI integrations before Phase 3 routes exist.  
Do not optimize (Phase 5) before a real Lead reaches Zoho (Phase 4).

## Near-Term Execution Order

1. Finish route stubs (Phase 1 remainder)
2. UI tokens + Navbar/section rhythm (Phase 2)
3. Homepage + industry + assessment pages (Phase 3)
4. `/api/leads` + Zoho sync (Phase 4)
5. SEO/content and conversion tuning (Phase 5)
