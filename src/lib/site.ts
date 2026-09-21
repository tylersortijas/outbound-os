// Central site configuration. Single source of truth for the booking link,
// contact email, and primary navigation so CTAs never drift out of sync.

export const CALENDLY_URL =
  "https://calendly.com/francisco-r-outboundos/30min";

export const CONTACT_EMAIL = "francisco.r@outboundos.net";

export const NAV_LINKS = [
  { label: "The Workforce", href: "#workforce" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Why OutboundOS", href: "#why" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
] as const;
