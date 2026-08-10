# Marketing Page System — locked section order

**Single structure** for industry, solution, platform, SEO, and landing pages (not homepage).

## Contract

```
MarketingPage
  → MarketingPageTemplate
  → generateMarketingMetadata(page)
```

Do **not** create new page templates.

## Locked render order

| # | Slot | Component(s) |
|---|------|----------------|
| 1 | Hero | `Hero` (+ optional SystemFlow aside) |
| 2 | Trust | `PartnerTrust` (optional via `showTrust`) |
| 3 | Problem | `ProblemGrid` |
| 4 | System | `SystemFlow` |
| 5 | Modules / Features | `FeatureGrid` then `ModuleGrid` |
| 6 | Proof | `UseCaseFlow` + `OutcomeGrid` + `CaseStudyTeaser` (industry) |
| 7 | FAQ | `Faq` + `FaqJsonLd` |
| 8 | CTA | `CTA` |

**Removed from detail pages:** `StepsFlow`, `IntegrationFlow` (method → `/approach`).

## Before → after (by page type)

### Industry `/industries/*`
**Was:** Hero → Problem → System → Modules → UseCases → CTA  
**Now:** Hero → Trust → Problem → System → Modules → Proof (UseCases + CaseStudyTeaser) → FAQ → CTA  

### Solution `/solutions/*`
**Was:** Hero → Problem → System → Modules → Steps → UseCases → Outcomes → CTA  
**Now:** Hero → Trust → Problem → System → Modules → Proof (UseCases + Outcomes) → FAQ → CTA  
**Dropped:** Steps  

### Platform `/platform/*`
**Was:** Hero → Features → System → Steps → UseCases → Integrations → Outcomes → CTA  
**Now:** Hero → Trust → System → Features → Proof (UseCases + Outcomes) → FAQ → CTA  
**Dropped:** Steps, Integrations  
**Note:** No Problem block in platform data (skipped).

## Files

| Path | Role |
|------|------|
| `lib/marketing/types.ts` | Schema |
| `lib/marketing/adapters.ts` | Data → MarketingPage + default FAQs |
| `lib/marketing/metadata.ts` | `generateMarketingMetadata` |
| `components/templates/MarketingPageTemplate.tsx` | One renderer |

## Publish gate

`published` / live routing still comes from `lib/published.ts`.
