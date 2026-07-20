import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { CALENDLY_URL, CONTACT_EMAIL } from "@/lib/site";

const menuItems = [
  {
    title: "Company",
    links: [
      { text: "How it works", url: "#how-it-works" },
      { text: "The Workforce", url: "#workforce" },
      { text: "Pricing", url: "#pricing" },
      { text: "About", url: "#about" },
    ],
  },
  {
    title: "Get started",
    links: [
      { text: "Book a demo", url: CALENDLY_URL, external: true },
      { text: "Email us", url: `mailto:${CONTACT_EMAIL}` },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Privacy Policy", url: "#" },
      { text: "Terms of Service", url: "#" },
    ],
  },
];

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{ borderTop: "1px solid", borderColor: "divider", py: 8 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                aria-hidden
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: "8px",
                  bgcolor: "secondary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "primary.main",
                    lineHeight: 1,
                  }}
                >
                  O
                </Typography>
              </Box>
              <Typography variant="h6" fontWeight={700} letterSpacing="-0.02em">
                Outbound
                <Box component="span" sx={{ color: "primary.main" }}>
                  OS
                </Box>
              </Typography>
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 2, maxWidth: 300, lineHeight: 1.7 }}
            >
              The managed AI workforce for home-service businesses. Every call
              answered, every lead followed up, every job on the books — 24/7,
              on your business&apos;s real context.
            </Typography>
          </Grid>

          {/* Link columns */}
          {menuItems.map((section) => (
            <Grid key={section.title} size={{ xs: 6, sm: 4, lg: "auto" }}>
              <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 2 }}>
                {section.title}
              </Typography>
              <Stack spacing={1.5}>
                {section.links.map((link) => (
                  <Link
                    key={link.text}
                    href={link.url}
                    underline="none"
                    color="text.secondary"
                    variant="body2"
                    {...("external" in link && link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    sx={{ "&:hover": { color: "text.primary" } }}
                  >
                    {link.text}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        {/* Bottom bar */}
        <Box
          sx={{
            mt: 8,
            pt: 3,
            borderTop: "1px solid",
            borderColor: "divider",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { sm: "center" },
            gap: 2,
          }}
        >
          <Typography variant="caption" color="text.secondary">
            &copy; {new Date().getFullYear()} OutboundOS. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link
              href="#"
              underline="hover"
              color="text.secondary"
              variant="caption"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              underline="hover"
              color="text.secondary"
              variant="caption"
            >
              Terms of Service
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
