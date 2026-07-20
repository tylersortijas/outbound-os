"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Reveal } from "@/components/reveal";
import { RecordLabel } from "@/components/record";
import { ContactForm } from "@/components/contact-form";
import { CALENDLY_URL, CONTACT_EMAIL } from "@/lib/site";

const demoPoints = [
  "Watch the AI Receptionist handle a live call",
  "See how the Business Brain maps to your shop",
  "15–30 minutes, no commitment",
];

export function Contact() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#12151A" : "#F5F6F8",
        py: { xs: 10, sm: 14 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, lg: 8 }} alignItems="center">
          {/* Left — book the demo (primary path) */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Reveal x={-24} y={0}>
              <RecordLabel>Book a demo</RecordLabel>
              <Typography
                variant="h2"
                sx={{
                  mt: 1.5,
                  fontSize: { xs: "1.9rem", sm: "2.5rem" },
                  color: "text.primary",
                  textWrap: "balance",
                }}
              >
                See it run on your business
              </Typography>
              <Typography
                sx={{
                  mt: 2.5,
                  fontSize: "1.1rem",
                  lineHeight: 1.75,
                  color: "text.secondary",
                  maxWidth: 480,
                }}
              >
                The demo is the proof. In 30 minutes we&apos;ll show the AI
                workforce handling a real call, loaded with a business like
                yours — so you can judge the trust for yourself.
              </Typography>

              <Stack spacing={1.5} sx={{ mt: 3.5 }}>
                {demoPoints.map((text) => (
                  <Stack key={text} direction="row" spacing={1.25} alignItems="center">
                    <CheckRoundedIcon
                      sx={{ fontSize: 18, color: "primary.main", flexShrink: 0 }}
                      aria-hidden
                    />
                    <Typography variant="body2" color="text.secondary">
                      {text}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Button
                variant="contained"
                color="primary"
                size="large"
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<ArrowForwardIcon />}
                sx={{ mt: 4 }}
              >
                Book a 30-min demo
              </Button>
            </Reveal>
          </Grid>

          {/* Right — secondary: send a note */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Reveal y={24} delay={0.1}>
              <Card>
                <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Prefer to write first?
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 0.5, mb: 3 }}
                  >
                    Send a note and we&apos;ll get back to you — or email{" "}
                    <Link
                      href={`mailto:${CONTACT_EMAIL}`}
                      color="primary.main"
                      underline="hover"
                    >
                      {CONTACT_EMAIL}
                    </Link>
                    .
                  </Typography>
                  <ContactForm />
                </CardContent>
              </Card>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
