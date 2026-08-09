# 07 — System Architecture

## Overview

Three layers. No extra services until needed.

```
Browser
  → Next.js frontend
    → API layer (Next.js Route Handlers)
      → Zoho CRM
```

Purpose: render the site, capture leads, sync them to Zoho for sales.

## Layer 1 — Next.js Frontend

**Owns:** pages, UI sections, forms, client validation, conversion UX.

| Concern | Approach |
| --- | --- |
| Rendering | App Router pages and section components |
| Content modules | Hero, Capabilities, Approach, Industries, CTA, Insights |
| Lead forms | Collect fields, basic validation, submit to API |
| Auth / sessions | Not required for public marketing site |

Frontend does **not** call Zoho directly. It only talks to our API.

## Layer 2 — API Layer

**Owns:** request validation, lead scoring inputs, Zoho API calls, error handling.

Typical routes:

| Route | Job |
| --- | --- |
| `POST /api/leads` | Accept enquiry, validate, create/update Zoho lead |
| (optional later) health / retry helpers | Only if operational need appears |

Flow:

```
Form submit
  → validate payload
  → enrich (page, UTM, timestamp)
  → score class (optional; can also live in Zoho workflow)
  → call Zoho CRM API
  → return success / failure to UI
```

Rules:

- Keep Zoho credentials server-side only
- Return simple status to the browser
- Log failures for retry; do not silently drop leads

## Layer 3 — Zoho CRM

**Owns:** lead record, assignment, follow-up tasks, sales pipeline.

| Concern | Approach |
| --- | --- |
| Storage | Lead (or Contact) as system of record |
| Routing | Assignment rules by region / industry if configured |
| Process | Sales stages after sync (qualify → discovery → close) |
| Scoring | Store score/class fields used by sales priority |

Website ends at sync. Delivery consulting work stays outside this system.

## End-to-End Path

```
1. Visitor submits Talk to Expert / Contact form
2. Next.js UI posts to /api/leads
3. API validates and maps fields
4. API creates/updates Lead in Zoho CRM
5. Zoho assigns owner and triggers follow-up
6. UI shows confirmation
```

## What We Intentionally Skip

- Separate backend framework
- Message queues / event buses
- Intermediate database for leads (unless retry storage becomes necessary)
- Client-side Zoho SDK

Add complexity only when a real failure mode requires it.

## Responsibility Split

| Layer | Does | Does not |
| --- | --- | --- |
| Frontend | UX, capture, display result | Store secrets, talk to Zoho |
| API | Validate, integrate, protect credentials | Own long-term sales process |
| Zoho CRM | Persist leads, route, run sales workflow | Render the website |
