# 08 — Data Flow

## Overview

```
User → Form → API → Processing → Zoho CRM → Sales
```

One path for enquiry data. No parallel inbox-only handling.

## Step-by-Step

### 1. User

Visitor decides to talk to an expert (nav, hero, or contact).

Provides:

- Identity: name, work email, company, role
- Fit: industry, company size, region
- Context: Zoho status, need summary
- Attribution: page URL, UTM (captured automatically when present)

### 2. Form

Frontend form:

1. Collects fields
2. Runs basic client checks (required fields, email format)
3. Submits JSON to `POST /api/leads`
4. Shows pending / success / error state

Form does not write to Zoho.

### 3. API

Route Handler receives the request.

Does:

- Accept payload
- Reject invalid or incomplete requests
- Keep Zoho credentials server-side
- Pass clean data into processing

### 4. Processing

Server-side steps before CRM write:

| Step | Action |
| --- | --- |
| Validate | Required fields, email, allowed enums |
| Enrich | Timestamp, source page, referrer, UTM |
| Normalize | Trim strings, map industry/region/role values |
| Score (optional) | Compute score + P0–P3 class from business logic |
| Map | Convert website fields → Zoho Lead fields |

On Zoho API failure: log payload, return safe error, allow retry path.

### 5. Zoho CRM

API creates or updates a Lead.

Zoho then:

- Stores the record as system of record
- Applies assignment rules
- Creates follow-up task / notification if configured
- Keeps score/class fields visible to sales

### 6. Sales

Owner works the lead in Zoho:

1. Review context and class (P0–P3)
2. First response per SLA
3. Qualify on discovery call
4. Move stage (qualified → diagnostic → close / disqualify)

Website is out of the loop after successful sync confirmation.

## Sequence

```
[User]
  fills Talk to Expert form
        │
        ▼
[Form]
  client validate → POST /api/leads
        │
        ▼
[API]
  auth/secrets stay server-side
        │
        ▼
[Processing]
  validate → enrich → normalize → score → map
        │
        ▼
[Zoho CRM]
  create/update Lead → assign owner
        │
        ▼
[Sales]
  prioritize → contact → qualify → advance
```

## Data at Each Boundary

| Boundary | Data moving |
| --- | --- |
| User → Form | Raw input |
| Form → API | Validated request payload + attribution |
| API → Processing | Trusted server payload |
| Processing → Zoho | Mapped Lead fields (+ score/class) |
| Zoho → Sales | Lead record, owner, tasks, pipeline stage |

## Failure Handling

| Failure | Result |
| --- | --- |
| Client validation fail | Stay on form; no API call |
| API validation fail | 400 + field errors |
| Zoho unavailable | 502/500; user sees retry message; log for recovery |
| Duplicate email/company | Update existing Lead where configured |

## Rule

If it is a real enquiry, it must end as a Zoho Lead owned by sales — not only an email or UI success message.
