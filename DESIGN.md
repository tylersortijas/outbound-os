---
name: OutboundOS
description: The managed AI Workforce for home-service businesses — trust you can see.
colors:
  primary: "#377DFF"
  primary-dark: "#2F6AD9"
  highlight: "#F9B934"
  ink: "#1E2022"
  slate: "#677788"
  paper: "#FFFFFF"
  alternate: "#F7FAFF"
  alternate-dark: "#EDF1F7"
  terminal: "#21325B"
  terminal-text: "#DCDCDC"
  terminal-comment: "#57A64A"
  night-paper: "#222B45"
  night-alternate: "#1A2138"
  night-primary: "#1976D2"
  night-ink: "#EEEEEF"
  night-slate: "#AEB0B4"
typography:
  display:
    fontFamily: "Inter, sans-serif"
    fontSize: "3.75rem (responsive)"
    fontWeight: 700
    lineHeight: 1.2
  headline:
    fontFamily: "Inter, sans-serif"
    fontSize: "2.125rem (responsive, ~32px at desktop)"
    fontWeight: 700
    lineHeight: 1.235
  title:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.6
  lead:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  button: "5px"
  card: "8px"
spacing:
  container: "1236px max, 16px gutters"
  section: "32px / 48px / 64px vertical (xs / sm / md)"
  hero: "128px vertical at md+"
shadows:
  card: "0 3px 6px 0 rgba(140,152,164,0.25)"
  card-featured: "0 12px 15px 0 rgba(140,152,164,0.25)"
  button: "0 12px 15px 0 rgba(140,152,164,0.1)"
  mock: "0 6px 24px 0 rgba(140,152,164,0.125)"
components:
  button-contained:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.paper}"
    rounded: "{rounded.button}"
    padding: "10px 22px"
    shadow: "{shadows.button}"
  button-outlined:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    border: "1px solid rgba(55,125,255,0.5)"
    rounded: "{rounded.button}"
    padding: "10px 22px"
  card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "32px"
    shadow: "{shadows.card}"
  icon-avatar-soft:
    size: "60px"
    backgroundColor: "rgba(55,125,255,0.1)"
    textColor: "{colors.primary}"
  icon-avatar-solid:
    size: "50px"
    backgroundColor: "{colors.primary}"
    textColor: "{colors.paper}"
---

# Design System: OutboundOS

## 1. Overview

The site's UI/UX is a deliberate clone of the MUI Store template **theFront** (landing
page), with OutboundOS content. Values in the frontmatter were measured from the live
template (computed styles at 1440px), not estimated. This replaces the earlier "Service
Manual" graphite/amber system.

Trust is still *shown, not claimed*, but it now lives in the content rather than the
chrome: coded product mockups (Business Brain records, call transcripts, an activity log
with Undo) and a terminal trace of a call being checked against the Business Brain.

**Key characteristics**
- Inter throughout; one blue primary; a warm-yellow marker highlight on one hero word.
- White page with "alternate" bands that fade from transparent to `#F7FAFF`, each closed by
  a shallow SVG curve into the next white section.
- Soft grey-blue shadows on cards; 8px card radius, 5px button radius.
- Centered section headers (bold headline + slate lead), 1236px container.

## 2. Colors

- **Primary** `#377DFF` — contained buttons, outlined button text/border, stat numbers,
  icon avatars, the highlighted hero word. Dark mode uses `#1976D2`.
- **Highlight** `#F9B934` at 30% — only as the underline marker behind the hero's
  emphasized word (`linear-gradient(180deg, transparent 82%, …30% 0%)`) and review stars.
- **Ink / Slate** `#1E2022` / `#677788` — headings / body and leads.
- **Alternate** `#F7FAFF` — bottom stop of banded-section gradients.
- **Terminal** `#21325B` with `#DCDCDC` text and `#57A64A` italic comments.
- **Dark theme** — paper `#222B45`, alternate `#1A2138`, ink `#EEEEEF`, slate `#AEB0B4`.

## 3. Typography

MUI `responsiveFontSizes` over Inter. Hero is `h2` rendered as `<h1>` at 700. Section
titles are `h4` at 700; their subtitles are `h6` at 400 in slate. Item titles are `h6` at
500. Body is 16/24. Buttons are 15px, weight 400, no uppercase.

## 4. Layout & page structure

1. Utility top bar (Live demo + NEW badge, Pricing, Email us, outlined theme toggle), then
   a sticky white header: logo left, text links + contained "Book a demo" right. Links
   collapse to an outlined menu button and a left drawer below `lg`.
2. **Hero** (band + curve): copy in the left half; a wall of nine coded product cards in
   three staggered columns, rotated −20°, anchored at 50% width. Hidden on `xs`.
3. **Workforce**: centered icon-feature items (60px soft avatars) — Front Office row of
   three, Full Workforce row of four.
4. Band: **How it works** (Business Brain terminal) → **Results** (headline, three stats,
   two overlapping product cards in place of a photo) → **Why** (six cards with 50px solid
   avatars, staggered entrance) → curve.
5. **Pricing**: three cards; the featured plan gets a 2px primary border, stronger shadow,
   "Most popular" chip and contained CTA.
6. Band: **Contact** (demo pitch + form card) → curve.
7. **CTA**: centered headline, subtitle, contained + outlined buttons.
8. Footer: divider, small logo left, links + small outlined button right, centered legal.

## 5. Motion

Only the six "Why" cards animate (staggered 100ms rise on scroll, mirroring theFront's
`fade-up`). Motion is transform-only via `Reveal`, so content is never hidden when scripts
or motion are unavailable.

## 6. Do's and Don'ts

**Do**
- Reuse `Section`, `SectionHeader`, `Curve` and `bandGradient` from
  `src/components/primitives.tsx` and `theme.customShadows` for any new section.
- Keep mockups coded and about the real product; use the Arctic Air demo business.

**Don't**
- Copy theFront's licensed assets (page screenshots, stock photography, logo).
- Invent performance statistics; stats must be product facts.
- Introduce new accent colors, gradients beyond the alternate band, or extra shadows.
