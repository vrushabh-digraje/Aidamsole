# 04 — Product Structure

## System View

The AiDamsole website is a lead-generation and trust product, not a brochure.

It qualifies ICP buyers, captures intent, and routes every enquiry into Zoho CRM with enough context for consulting sales to act.

```
Visitor → Website modules → Lead capture → Zoho CRM → Consulting sales process
```

## Website Modules

| Module | Job | Primary CTA |
| --- | --- | --- |
| Navbar | Persistent navigation + access to expert conversation | Talk to Expert |
| Hero | State who we are and who we serve in one screen | Talk to Expert / Book consult |
| Capabilities | Explain system design work (CRM + ops) | Learn approach / Contact |
| Approach | Show how engagement works end to end | Start conversation |
| Industries | Prove fit for Real Estate, Healthcare, Education, Service | Industry-specific contact |
| Insights | Authority content for SEO and trust | Read → Contact |
| CTA / Contact | Convert intent into a structured enquiry | Submit / Talk to Expert |

Supporting routes (product expansion):

- `/` — homepage composition of core modules
- `/industries/[slug]` — industry proof and use cases
- `/insights/[slug]` — articles and guides
- `/contact` — full enquiry form

## Lead Capture System

### Capture surfaces

1. **Primary CTA** — Talk to Expert (nav, hero, sticky moments)
2. **Contact form** — structured enquiry (company, role, industry, Zoho status, need)
3. **Inline module CTAs** — Capabilities / Industries / Approach soft asks
4. **Insights content CTA** — end-of-article consult ask

### Required lead fields

| Field | Why |
| --- | --- |
| Name | Ownership |
| Work email | Routing and verification |
| Company | Firmographic fit |
| Role | Decision-maker mapping |
| Industry | ICP + assignment |
| Company size band | 50–500 filter |
| Region | India / GCC routing |
| Zoho status | None / Licensed / Implemented / Broken |
| Need summary | Discovery context |
| Source page / UTM | Attribution |

### Lead states (website → sales)

`captured` → `validated` → `synced_to_crm` → `owned` → `qualified` / `disqualified`

Validation rules:

- Block disposable emails where practical
- Flag non-ICP size/region for nurture, not discard without review
- Attach page path, referrer, and UTM to every record

## CRM Integration (Zoho)

### Integration contract

```
Website form / CTA event
  → API route (Next.js)
    → Zoho CRM Lead (or Contact + Deal, as configured)
      → Assignment rules + workflow
```

### Sync responsibilities

| Layer | Responsibility |
| --- | --- |
| Website | Collect fields, validate, fire conversion event |
| API | Authenticate to Zoho, map fields, handle retries/errors |
| Zoho CRM | Store lead, assign owner, trigger follow-up workflow |
| Sales | Qualify, book discovery, update stage |

### Field mapping (minimum)

| Website | Zoho CRM |
| --- | --- |
| Name | Last_Name / Full_Name mapping |
| Email | Email |
| Company | Company |
| Role | Title / custom Role |
| Industry | Industry / custom Industry |
| Company size | custom Company_Size |
| Region | custom Region |
| Zoho status | custom Zoho_Status |
| Need summary | Description |
| Source page / UTM | Lead_Source + custom UTM fields |

### Operational rules

- Every successful submit creates or updates one CRM lead (dedupe on email + company)
- Failures return user-safe error; payload logged for retry
- No lead stays only in email inbox — CRM is system of record
- Response SLA owned in Zoho (task / workflow), not in the website

## Conversion Flow

### Happy path

1. **Discover** — Organic, referral, or direct lands on homepage or industry/insight page
2. **Orient** — Hero + Capabilities establish system-design positioning
3. **Prove fit** — Industries / Approach reduce risk for CEO / Ops Head
4. **Commit** — Talk to Expert or Contact form submitted
5. **Capture** — Validation + attribution stored
6. **Sync** — Lead created in Zoho CRM within seconds
7. **Own** — Assignment rule routes to consulting sales
8. **Qualify** — Discovery call; ICP confirmed; next stage set in CRM
9. **Advance** — Proposal / diagnostic engagement

### Conversion architecture

```
Traffic
  → Trust modules (Hero, Capabilities, Approach, Industries, Insights)
    → Intent action (Talk to Expert / Form)
      → Lead capture service
        → Zoho CRM
          → Sales workflow (qualify → diagnostic → close)
```

### Conversion metrics (product KPIs)

| Metric | Meaning |
| --- | --- |
| Module → CTA click rate | Message → intent |
| Form start → submit rate | Friction |
| Submit → CRM sync success | System reliability |
| Sync → first response time | Sales operating discipline |
| Lead → qualified discovery | ICP and messaging quality |

## Product Boundaries

**In scope**

- Positioning, trust, capture, CRM sync, attribution
- Content modules that support qualification

**Out of scope**

- Client delivery work inside the marketing site
- Replacing Zoho as the sales system of record
- Unstructured “email us” as the only capture path
