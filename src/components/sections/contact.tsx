"use client";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";
import { ContactForm } from "@/components/contact-form";
import { Section } from "@/components/primitives";
import { CALENDLY_URL, CONTACT_EMAIL } from "@/lib/site";

const demoPoints = [
  "Watch the AI Receptionist handle a live call",
  "See how the Business Brain maps to your shop",
  "30 minutes, no commitment",
];

export function Contact() {
  const theme = useTheme();
  return (
    <Section id="contact" sx={{ scrollMarginTop: 80 }}>
      <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }} gutterBottom>
            See it run on your business
          </Typography>
          <Typography variant="h6" component="p" color="text.secondary" sx={{ fontWeight: 400 }}>
            The demo is the proof. We&apos;ll run the AI Receptionist on a business
            like yours, book a real slot, and text your phone — live.
          </Typography>
          <Box component="ul" sx={{ listStyle: "none", p: 0, my: 3, display: "grid", gap: 1.5 }}>
            {demoPoints.map((text) => (
              <Box component="li" key={text} display="flex" alignItems="center" gap={1.5}>
                <Avatar sx={{ width: 22, height: 22, bgcolor: alpha(theme.palette.primary.main, 0.1), color: "primary.main" }}>
                  <CheckIcon sx={{ fontSize: 14 }} />
                </Avatar>
                <Typography component="span">{text}</Typography>
              </Box>
            ))}
          </Box>
          <Button
            variant="contained"
            size="large"
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ boxShadow: theme.customShadows.button, width: { xs: 1, sm: "auto" } }}
          >
            Book a 30-min demo
          </Button>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box component={Card} padding={{ xs: 3, sm: 4 }} sx={{ boxShadow: theme.customShadows.card, backgroundImage: "none" }}>
            <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
              Prefer to write first?
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>
              Send a note and we&apos;ll get back to you, or email{" "}
              <Link href={`mailto:${CONTACT_EMAIL}`} underline="hover">
                {CONTACT_EMAIL}
              </Link>
              .
            </Typography>
            <ContactForm />
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}
