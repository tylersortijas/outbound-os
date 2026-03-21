# OutboundOS — Website

## Business Context

OutboundOS is a revenue systems company that helps service-based businesses (home services, med spas, dental, legal, etc.) capture, convert, and book more leads automatically. We solve the follow-up problem — when calls are missed or messages go unanswered, our system instantly responds via SMS, engages the lead, and guides them to book an appointment. Powered by GoHighLevel.

**Founder:** Francisco Roncalli
**Contact:** francisco.r@outboundos.net

## Website Goal

Professional single-page marketing site for lead generation. Communicate the value prop clearly, capture client inquiries via a contact form, and route them to francisco.r@outboundos.net via Resend.

## Target Market

Service-based businesses — home services, med spas, dental offices, legal firms, and similar industries where missed calls = missed revenue.

## Pricing

- **One-time setup/build:** $2,000–$3,500 (system setup, workflows, website build)
- **Monthly management:** $500–$1,000/mo (monitoring, optimization, SMS handling, booking flow improvements)

## Tech Stack

- **Framework:** Next.js 15 (App Router, TypeScript)
- **UI Library:** Material UI (MUI) v6 — components, theming, layout
- **Animations:** Framer Motion — scroll-triggered entrance animations
- **Icons:** @mui/icons-material + lucide-react
- **Styling:** MUI `sx` prop + Tailwind CSS for minimal utility overrides
- **Email:** Resend SDK — contact form submissions → email
- **Hosting:** Vercel
- **Package manager:** npm

## Tone & Voice

Direct, confident, results-oriented. No fluff. Speak like a founder who builds systems, not a marketer selling hype. Every line of copy should answer: "What does this do for the business owner?"

## Site Structure

Single-page with scroll sections: Navbar → Hero → Services → About → Pricing → Contact → Footer

## Development

```bash
npm run dev      # Local dev server (http://localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

## Environment Variables

```
RESEND_API_KEY=<from Resend dashboard>
CONTACT_EMAIL=francisco.r@outboundos.net
```
