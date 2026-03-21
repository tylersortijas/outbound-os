import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

const menuItems = [
  {
    title: "Company",
    links: [
      { text: "Services", url: "#services" },
      { text: "About", url: "#about" },
      { text: "Pricing", url: "#pricing" },
      { text: "Contact", url: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "How It Works", url: "#services" },
      { text: "Book a Call", url: "#contact" },
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
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: 1.5,
                  background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight={700}
                  sx={{ color: "#ffffff" }}
                >
                  O
                </Typography>
              </Box>
              <Typography variant="h6" fontWeight={700}>
                Outbound
                <Box component="span" sx={{ color: "text.secondary" }}>
                  OS
                </Box>
              </Typography>
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 2, maxWidth: 280, lineHeight: 1.7 }}
            >
              Revenue systems for service businesses. We automate your lead
              capture and follow-up so every inquiry gets an instant response.
            </Typography>
          </Grid>

          {/* Link columns */}
          {menuItems.map((section) => (
            <Grid key={section.title} size={{ xs: 6, sm: 4, lg: "auto" }}>
              <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 2 }}>
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
