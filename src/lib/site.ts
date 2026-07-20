// Central site configuration. Single source of truth for the booking link,
// contact email, and primary navigation so CTAs never drift out of sync.

export const CALENDLY_URL =
  "https://calendly.com/francisco-r-outboundos/30min";

export const CONTACT_EMAIL = "francisco.r@outboundos.net";

export const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "The Workforce", href: "#workforce" },
  { label: "Pricing", href: "#pricing" },
] as const;

// Section ids observed for active-link highlighting in the navbar.
export const SECTION_IDS = [
  "how-it-works",
  "workforce",
  "pricing",
  "about",
  "contact",
] as const;
