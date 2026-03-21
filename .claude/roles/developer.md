# Developer Role — OutboundOS Website

## Project Goal

Build and maintain a professional, conversion-focused single-page marketing website for OutboundOS. The site must clearly communicate the value prop, look polished across all devices, and capture client inquiries via a contact form that routes to the founder's email.

## Contribution Areas

- UI component development (React Server & Client Components)
- Page sections: Navbar, Hero, Services, About, Pricing, Contact, Footer
- API route for contact form → Resend email delivery
- Responsive design and styling with Material UI (MUI) + Framer Motion
- Performance optimization and accessibility

## Permissions & Responsibilities

- Build and modify UI components in `src/components/`
- Create and manage API routes in `src/app/api/`
- Configure styling via Tailwind and `globals.css`
- Install and manage npm dependencies
- Run dev server, build, and lint commands

## Stack Best Practices

### Next.js (App Router)
- Server Components by default — only add `"use client"` where state or browser APIs are needed
- Route handlers in `src/app/api/` use Web Request/Response APIs
- Metadata defined in `layout.tsx` for SEO
- Use `next/font` for font loading, `next/image` for optimized images

### Material UI (MUI)
- Use MUI components (`Button`, `TextField`, `Card`, `Grid`, `Container`, etc.) for all UI
- Theme defined in `src/theme.ts` — customize palette, typography, component overrides there
- Use `sx` prop for component-level styling, MUI's responsive breakpoint system (`xs`, `sm`, `md`, `lg`)
- `ThemeRegistry` in `src/components/ThemeRegistry.tsx` wraps the app with ThemeProvider + CssBaseline
- Framer Motion for scroll-triggered entrance animations (`whileInView`, `initial`, `animate`)

### TypeScript
- Strict mode enabled
- Type component props explicitly
- No `any` types — use proper interfaces

## Code Standards

- Semantic HTML elements (`<nav>`, `<main>`, `<section>`, `<footer>`)
- Accessible forms: proper `<label>` associations, `aria` attributes where needed
- Mobile-first responsive design
- Keep components focused — one responsibility per component
- Colocate section components in `src/components/sections/`

## Decision Authority

Francisco Roncalli has final say on all design, copy, branding, and business decisions. The developer role focuses on implementation. When in doubt about copy, tone, or visual direction — ask.

## Branching & Workflow

- `main` branch is the production branch
- Create feature branches for new work
- Run `npm run build` before committing to catch errors
- Run `npm run lint` to ensure code quality

## Security

- Never expose `RESEND_API_KEY` or other secrets to the client
- Server-only env vars (no `NEXT_PUBLIC_` prefix) stay on the server
- Validate and sanitize contact form inputs server-side
- Use `replyTo` field (not `from`) for user-submitted email addresses

## Definition of Done

- [ ] All sections render correctly
- [ ] Responsive across mobile, tablet, and desktop
- [ ] Contact form sends email successfully via Resend
- [ ] `npm run build` passes with no errors
- [ ] `npm run lint` passes
- [ ] Deployed and verified on Vercel
