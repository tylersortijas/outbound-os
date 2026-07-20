---
name: OutboundOS
description: The managed AI Workforce for home-service businesses — trust you can see.
colors:
  safety-amber: "#E8701E"
  deep-amber: "#C85A12"
  amber-ink: "#A8480C"
  graphite-ink: "#16181D"
  graphite-elevated: "#20242C"
  steel: "#565D69"
  fog: "#9AA0AB"
  concrete: "#E4E7EA"
  site-grey: "#F5F6F8"
  paper: "#FFFFFF"
  night-graphite: "#0F1115"
  night-surface: "#181B21"
  night-elevated: "#22262F"
  night-ink: "#F2F4F7"
  night-steel: "#A7AEBA"
  night-border: "#2A2F38"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0"
  label:
    fontFamily: "Spline Sans Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "64px"
components:
  button-accent:
    backgroundColor: "{colors.safety-amber}"
    textColor: "{colors.graphite-ink}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  button-accent-hover:
    backgroundColor: "{colors.deep-amber}"
    textColor: "{colors.graphite-ink}"
  button-primary:
    backgroundColor: "{colors.graphite-ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  button-ghost:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.graphite-ink}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.graphite-ink}"
    rounded: "{rounded.lg}"
    padding: "24px"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.graphite-ink}"
    rounded: "{rounded.md}"
    padding: "12px 14px"
  log-label:
    backgroundColor: "{colors.site-grey}"
    textColor: "{colors.steel}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
---

# Design System: OutboundOS

## 1. Overview

**Creative North Star: "The Service Manual"**

OutboundOS looks like the documentation that ships bolted to a piece of professional
equipment — a service manual, a wiring diagram, an equipment nameplate. Precise, legible,
built to be trusted by someone with grease on their hands and no patience for decoration.
It is engineered software that speaks the trades' language: the sharpness of a modern dev
tool crossed with the grounded, high-visibility utility of the shop floor. Nothing here is
"cute." Everything is labeled, ordered, and accountable.

The system is built on a spine of **shown, not claimed, trust**. Where a generic SaaS site
would print a promise, OutboundOS prints the *record* — the Business Brain field it read,
the decision it made, the note that it's logged and reversible. The visual language of a
service manual (mono call-outs, part labels, ruled data, a single high-visibility accent)
is what carries that spine. The safety-amber accent is the hi-vis vest in a graphite shop:
used sparingly, it means "look here," never "we're excited."

This system explicitly rejects the generic blue-SaaS template it replaces, hype-y
marketing-agency gloss (gradient washes, "CRUSH your revenue"), cartoonish AI-chatbot
motifs (robot mascots, speech bubbles), the busy GoHighLevel-clone dashboard look, and the
saturated AI-editorial lane (display-serif italics over ruled broadsheet columns). Safe is
invisible; this brand commits.

**Key Characteristics:**
- Graphite-and-amber palette; no blue-SaaS default, no warm-cream default.
- One industrial grotesque (Archivo) in committed weight contrast, plus a mono (Spline
  Sans Mono) reserved strictly for machine-record labels.
- Flat by default; depth from tonal layering and hairline borders, not decorative shadow.
- Trust rendered as visible record: logged/reversible tags, Business Brain fields, status.
- High-visibility accent used as signal, never as excitement.

## 2. Colors

A graphite-and-steel shop palette with a single high-visibility amber signal — engineered,
grounded, and unmistakably not blue.

### Primary
- **Safety Amber** (#E8701E): the one committed accent. Primary CTA fills ("Book a demo"),
  the single emphasized word in a headline, active/selected states, icon accents, focus
  rings. It is the hi-vis vest — it appears rarely and always means "this matters."
- **Deep Amber** (#C85A12): the hover/pressed state for amber fills; also amber used on
  larger dark surfaces.
- **Amber Ink** (#A8480C): amber as *text* on light backgrounds, darkened to clear 4.5:1.
  Never set amber body or link text at the raw #E8701E value.

### Neutral
- **Graphite Ink** (#16181D): primary text on light; primary (non-CTA) button fills; the
  dark "shop floor" surface. The workhorse.
- **Graphite Elevated** (#20242C): raised panels on dark sections.
- **Steel** (#565D69): secondary text and captions on light (meets 4.5:1 on paper).
- **Fog** (#9AA0AB): decorative rules, disabled text, faint diagram lines. Never body copy.
- **Concrete** (#E4E7EA): borders, dividers, card hairlines on light.
- **Site Grey** (#F5F6F8): the cool off-white section background (paper's quieter sibling).
- **Paper** (#FFFFFF): default light surface and card face.

### Dark theme
- **Night Graphite** (#0F1115): dark-mode page background.
- **Night Surface** (#181B21) / **Night Elevated** (#22262F): dark cards and raised panels.
- **Night Ink** (#F2F4F7): primary text on dark.
- **Night Steel** (#A7AEBA): secondary text on dark.
- **Night Border** (#2A2F38): hairlines and dividers on dark.

### Named Rules
**The Hi-Vis Rule.** Safety Amber covers ≤10% of any screen. Its rarity is the signal; a
page that is 40% amber has thrown away the one tool that says "look here."

**The No-Blue Rule.** No blue anywhere in the palette. Blue is the category reflex we are
escaping; graphite carries the "engineered/software" weight instead.

## 3. Typography

**Display Font:** Archivo (with system-ui, sans-serif fallback)
**Body Font:** Archivo (weight contrast, not a second family)
**Label/Mono Font:** Spline Sans Mono (with ui-monospace fallback)

**Character:** Archivo is an industrial grotesque with the flat sides and squared terminals
of shop signage and equipment nameplates — sturdy, engineered, never delicate. One family
in committed weight contrast (800 display against 400 body) reads as more disciplined than a
two-family pairing, and keeps the "service manual" voice intact. Spline Sans Mono is the
part-number type: it appears only where the interface is showing a *record*.

### Hierarchy
- **Display** (800, clamp(2.5rem, 6vw, 4.5rem), 1.02, -0.03em): hero and section-opening
  statements. `text-wrap: balance`. Cap the clamp at 4.5rem — no shouting.
- **Headline** (700, clamp(1.75rem, 3.5vw, 2.75rem), 1.1, -0.02em): section titles.
- **Title** (700, 1.25rem, 1.3): card titles, worker names, pricing tier names.
- **Body** (400, 1.0625rem, 1.7): all prose. Max line length 68ch. `text-wrap: pretty`.
- **Label** (mono 500, 0.75rem, 0.08em, uppercase): status chips, Business Brain fields,
  "LOGGED · REVERSIBLE" tags, eyebrow kickers used as a *deliberate* system, not per-section.

### Named Rules
**The Log Label Rule.** Spline Sans Mono is used *only* for machine-record content —
status, timestamps, Business Brain field names, logged/reversible tags. It never sets
headings or prose. Mono outside the record is costume and is forbidden.

**The One-Emphasis Rule.** A headline gets at most one amber word. Emphasis by weight or the
single accent, never by underline, italic, or a second color.

## 4. Elevation

Flat by default. Depth comes from tonal layering (paper → site-grey → graphite → night
graphite) and 1px hairline borders (Concrete on light, Night Border on dark), not from
resting shadows. Shadows are a *response to state*, never ambient decoration: a card lifts
on hover, a menu casts a soft shadow because it floats above the page. If it looks like a
2014 app, the shadow is too heavy — pull it back to a low, diffuse amber-neutral glow.

### Shadow Vocabulary
- **Hover-lift** (`box-shadow: 0 6px 24px rgba(22,24,29,0.10)`): cards and interactive
  panels on hover only, paired with a ~2px translateY.
- **Float** (`box-shadow: 0 12px 40px rgba(15,17,21,0.18)`): elements that genuinely float
  above the page (dropdowns, the mobile menu, sticky nav once scrolled).

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. A shadow at rest is a bug; a shadow
on hover/focus/float is the system working.

## 5. Components

### Buttons
- **Shape:** lightly squared (8px radius / `rounded.md`) — engineered, not pillowy.
- **Accent (primary CTA — "Book a demo"):** Safety Amber (#E8701E) fill with Graphite Ink
  (#16181D) text (dark-on-amber, hi-vis-vest logic; never white-on-amber — it fails
  contrast). Padding 14px 28px, weight 600.
- **Primary (secondary actions):** Graphite Ink (#16181D) fill, Paper (#FFFFFF) text.
- **Ghost (tertiary):** Paper fill, Graphite Ink text, 1px Concrete border.
- **Hover / Focus:** amber → Deep Amber (#C85A12); ink → lighten to #20242C; all buttons
  get a 2px amber focus-visible ring. Ease-out, ~160ms. No gradient fills, ever.

### Cards / Containers
- **Corner Style:** 12px (`rounded.lg`).
- **Background:** Paper on light, Night Surface on dark.
- **Border:** 1px Concrete (light) / Night Border (dark) — the hairline does the work.
- **Shadow Strategy:** flat at rest; Hover-lift on interactive cards only (see Elevation).
- **Internal Padding:** 24px (`spacing.md`).
- **No nested cards.** A card inside a card is always wrong here.

### Inputs / Fields
- **Style:** Paper fill, 1px Concrete border, 8px radius, comfortable 12–14px padding.
- **Focus:** border shifts to Safety Amber + a 2px amber ring. Never a blurry glow.
- **Error:** Amber Ink (#A8480C) message text via helperText, amber border — plus an icon,
  never color alone.

### Navigation
- Sticky top bar, transparent over the hero, gaining a Paper (or Night Surface) background
  and a Float shadow once scrolled. Wordmark left; links (How it works · The Workforce ·
  Pricing) center/right in Body weight 500; the amber "Book a demo" accent button pinned
  right. Mobile: a full-height sheet, not a cramped dropdown; large tap targets.

### Signature — The Record Motif
The system's distinctive component. Wherever the product makes a claim, it shows the record
instead: a small block of Spline Sans Mono "fields" (e.g. `SERVICE AREA · 12 ZIPs`,
`AFTER-HOURS · ROUTE TO ON-CALL`) and a `LOGGED · REVERSIBLE` tag. Used in the hero visual,
the Business Brain section, and each Worker card. This is how "trust is shown, not claimed"
becomes pixels.

### Signature — The Worker Card
An AI-employee roster item: Title (worker name, e.g. "AI Receptionist"), a one-line job
description in Body, a mono status chip (`ON` / `STANDBY`), and 2–3 Record-motif fields
showing what business context it acts on. Flat, hairline border, Hover-lift.

## 6. Do's and Don'ts

### Do:
- **Do** carry the trust spine visually: pair every claim with a Record-motif field or a
  `LOGGED · REVERSIBLE` tag.
- **Do** keep Safety Amber under ~10% of any screen (The Hi-Vis Rule).
- **Do** use dark Graphite Ink text on amber fills; verify ≥4.5:1 on all body text and
  placeholders.
- **Do** convey depth with tonal layering and 1px hairlines; keep surfaces flat at rest.
- **Do** vary section entrance motion to fit what it reveals; ship a
  `prefers-reduced-motion` fallback for every animation.
- **Do** use real trades imagery (technicians, trucks, shop floors) shot like documentation,
  not stock-smiley marketing.

### Don't:
- **Don't** reintroduce blue as a brand or accent color — that is the generic-blue-SaaS
  template we are escaping (The No-Blue Rule).
- **Don't** use gradient text (`background-clip: text` over a gradient) or gradient button
  fills — hype-y-agency tells, and an Impeccable absolute ban.
- **Don't** ship the uniform fade-up-on-every-section reflex; that reads as AI scaffolding.
- **Don't** use a tiny uppercase tracked eyebrow above *every* section; the mono label is a
  deliberate record system, not per-section decoration.
- **Don't** use monospace for anything but machine-record content (The Log Label Rule).
- **Don't** add robot mascots, speech bubbles, or toy-like AI motifs (cartoonish-chatbot
  anti-reference), or the busy GoHighLevel-clone dashboard look.
- **Don't** nest cards, or let a resting shadow stand in for a hairline border.
