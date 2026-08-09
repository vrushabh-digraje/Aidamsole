# 09 — Wireframes

## Homepage

```
┌──────────────────────────────────────────────┐
│ NAV                                          │
│ AiDamsole          Capabilities Industries   │
│                    Insights Contact          │
│                         [ Talk to Expert ]   │
├──────────────────────────────────────────────┤
│ HERO                                         │
│                                              │
│ Headline                                     │
│ Short supporting line                        │
│                                              │
│ [ Talk to Expert ]                           │
│                                              │
├──────────────────────────────────────────────┤
│ CAPABILITIES                                 │
│                                              │
│ Section heading                              │
│ Short line on CRM + operations work          │
│                                              │
│ Capability 1                                 │
│ Capability 2                                 │
│ Capability 3                                 │
│                                              │
├──────────────────────────────────────────────┤
│ APPROACH                                     │
│                                              │
│ Section heading                              │
│ Short line on how engagement works           │
│                                              │
│ Step 1 → Step 2 → Step 3 → Step 4            │
│                                              │
├──────────────────────────────────────────────┤
│ INDUSTRIES                                   │
│                                              │
│ Section heading                              │
│ Short line on who we serve                   │
│                                              │
│ Real Estate | Healthcare                     │
│ Education   | Service                        │
│                                              │
├──────────────────────────────────────────────┤
│ CTA                                          │
│                                              │
│ Closing headline                             │
│ Short supporting line                        │
│                                              │
│ [ Talk to Expert ]                           │
│                                              │
└──────────────────────────────────────────────┘
```

### Homepage section jobs

| Block | Job |
| --- | --- |
| Hero | Position AiDamsole; invite Talk to Expert |
| Capabilities | Show system design work, not tool list |
| Approach | Reduce risk; show method |
| Industries | Confirm ICP fit |
| CTA | Convert remaining intent |

---

## Assessment Page Flow

Purpose: short guided form that captures fit inputs before Talk to Expert / lead sync.

```
[Entry]
  From Hero CTA / Talk to Expert / Contact
        │
        ▼
┌──────────────────────────────────────────────┐
│ ASSESSMENT — STEP 1                          │
│ About your company                           │
│                                              │
│ Company name                                 │
│ Industry                                     │
│ Company size                                 │
│ Region                                       │
│                                              │
│                        [ Continue ]          │
└──────────────────────────────────────────────┘
        │
        ▼
┌──────────────────────────────────────────────┐
│ ASSESSMENT — STEP 2                          │
│ Current systems                              │
│                                              │
│ Zoho status                                  │
│ Tools in use                                 │
│ Monthly lead / enquiry volume                │
│                                              │
│              [ Back ]  [ Continue ]          │
└──────────────────────────────────────────────┘
        │
        ▼
┌──────────────────────────────────────────────┐
│ ASSESSMENT — STEP 3                          │
│ Process & need                               │
│                                              │
│ Process maturity                             │
│ Main problem                                 │
│ What you want help with                      │
│                                              │
│              [ Back ]  [ Continue ]          │
└──────────────────────────────────────────────┘
        │
        ▼
┌──────────────────────────────────────────────┐
│ ASSESSMENT — STEP 4                          │
│ Contact                                      │
│                                              │
│ Name                                         │
│ Work email                                   │
│ Role                                         │
│                                              │
│              [ Back ]  [ Talk to Expert ]    │
└──────────────────────────────────────────────┘
        │
        ▼
┌──────────────────────────────────────────────┐
│ CONFIRMATION                                 │
│                                              │
│ Thank you                                    │
│ An expert will follow up                     │
│                                              │
│ [ Back to home ]                             │
└──────────────────────────────────────────────┘
        │
        ▼
API → Processing → Zoho CRM → Sales
```

### Assessment rules

1. Keep each step short (3–4 inputs max).
2. Contact details last — reduce drop-off on early steps.
3. Final submit = lead create in Zoho.
4. No results theater; confirmation only, then sales follow-up.
