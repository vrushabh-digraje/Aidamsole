# 06 — Business Logic

## Purpose

Score inbound leads so sales prioritizes high-fit conversations first.

This is a qualification aid, not an auto-reject engine. Borderline leads can still be reviewed manually.

## Inputs

Collected from form, CRM fields, and first-call notes.

### A. Firmographic

| Input | Values |
| --- | --- |
| Company size | `<50` · `50–500` · `>500` |
| Region | `India` · `GCC` · `Other` |
| Industry | `Real Estate` · `Healthcare` · `Education` · `Service` · `Other` |
| Buyer role | `CEO/MD` · `Ops Head` · `Business Head` · `IT` · `Other` |

### B. Lead volume / commercial signal

| Input | Values | Meaning |
| --- | --- | --- |
| Monthly enquiry / lead volume | `Low (<50)` · `Medium (50–300)` · `High (>300)` | Process pain and CRM urgency scale with volume |
| Revenue complexity | `Single unit` · `Multi-team / multi-location` | More handoff risk = stronger consulting need |

### C. Tools

| Input | Values |
| --- | --- |
| Zoho status | `Not started` · `Licensed, not rolled out` · `Partially implemented` · `Implemented but broken` · `Other CRM` |
| Current stack around Zoho | `Zoho only` · `Zoho + Excel/WhatsApp` · `Zoho + other tools` · `No system` |

### D. Process maturity

| Input | Values | Meaning |
| --- | --- | --- |
| Process definition | `Ad hoc` · `Documented but unused` · `Partially followed` · `Disciplined` | Lower maturity + Zoho intent = higher need |
| Ownership | `No owner` · `IT-owned only` · `Ops-owned` · `Leadership-owned` | Ops/leadership ownership closes faster |
| Prior partner | `None` · `Failed / stalled` · `Active, unhappy` · `Active, fine` | Failed partner is a strong trigger |

## Simple Scoring Logic

Max score: **100**

### 1) ICP fit — 40 points

| Rule | Points |
| --- | --- |
| Company size 50–500 | +15 |
| Region India or GCC | +10 |
| Industry in ICP list | +10 |
| Buyer role CEO/MD or Ops Head | +5 |
| Company size `<50` or `>500` | 0 for size (do not add 15) |
| Region Other | 0 for region |
| Industry Other | 0 for industry |
| Buyer role IT / Other | 0 for role |

### 2) Urgency / commercial need — 35 points

| Rule | Points |
| --- | --- |
| Zoho status = Implemented but broken | +12 |
| Zoho status = Licensed, not rolled out OR Partially implemented | +10 |
| Zoho status = Not started (committed to Zoho) | +6 |
| Zoho status = Other CRM | +3 |
| Monthly lead volume Medium or High | +8 |
| Multi-team / multi-location | +5 |
| Prior partner Failed / stalled OR Active, unhappy | +10 |
| Stack = Zoho + Excel/WhatsApp | +5 |

Cap this block at 35.

### 3) Process readiness — 25 points

| Rule | Points |
| --- | --- |
| Process definition Ad hoc or Documented but unused | +8 |
| Ownership Ops-owned or Leadership-owned | +10 |
| Ownership No owner or IT-owned only | +2 |
| Need mentions CRM + operations / handoffs / reporting trust | +7 |
| Need is only logo, email template, or minor UI tweak | 0 (and flag `low_scope`) |

Cap this block at 25.

### Score formula

```
score =
  icp_fit (0–40)
+ urgency_need (0–35)
+ process_readiness (0–25)
```

## Output Classification

| Class | Score | Sales action |
| --- | --- | --- |
| **P0 — Hot** | 75–100 | Contact same day. Book discovery. Senior consultant. |
| **P1 — Qualified** | 55–74 | Contact within 1 business day. Standard discovery. |
| **P2 — Nurture** | 35–54 | Async follow-up + Insights nurture. Revisit in 30–60 days. |
| **P3 — Low fit** | 0–34 | Light reply or disqualify. Do not prioritize over P0/P1. |

### Hard flags (override score)

| Flag | Effect |
| --- | --- |
| `low_scope` | Cap class at P2 even if score is higher |
| `non_icp_region` + weak urgency | Suggest P3 |
| `student / vendor / job-seeker` signal | Force P3 |
| Explicit budget/timeline for diagnostic | Boost one class (max P0) |
| Abusive / spam | Reject, no sequence |

## Sales Priority View

When queue is full, work in this order:

1. P0 with CEO/Ops buyer
2. P0 other
3. P1 with broken / stalled Zoho
4. Remaining P1
5. P2 only if capacity remains

## Example

**Lead:** 180-person real estate firm, India, Ops Head, Zoho partially implemented, Excel/WhatsApp still used, medium lead volume, prior partner stalled.

| Block | Points |
| --- | --- |
| ICP fit | 15 + 10 + 10 + 5 = 40 |
| Urgency / need | 10 + 8 + 10 + 5 = 33 |
| Process readiness | 8 + 10 + 7 = 25 |
| **Total** | **98 → P0 Hot** |

## Rules of Use

1. Score in CRM on create/update (workflow or manual field).
2. Class is guidance for sequencing, not a substitute for judgment.
3. Recalculate after discovery if inputs were wrong.
4. Review P0/P1 conversion monthly; adjust weights if false positives rise.
