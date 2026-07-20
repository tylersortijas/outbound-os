"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { Reveal } from "@/components/reveal";
import { RecordLabel } from "@/components/record";
import { CALENDLY_URL } from "@/lib/site";

interface Plan {
  name: string;
  setup: string;
  monthly: string;
  monthlyNote: string;
  tagline: string;
  features: string[];
  cta: string;
  featured: boolean;
}

const plans: Plan[] = [
  {
    name: "Front Office",
    setup: "$3,000–4,000",
    monthly: "$1,200–1,800",
    monthlyNote: "/mo, managed",
    tagline: "Your front desk, staffed 24/7 — for less than half a CSR's salary.",
    features: [
      "AI Receptionist, Follow-up & Review Manager",
      "Business Brain build & onboarding",
      "Integration with your CRM & phone",
      "Human escalation rules",
      "Monthly performance report",
      "Fully managed & monitored",
    ],
    cta: "Book a demo",
    featured: false,
  },
  {
    name: "Full Workforce",
    setup: "$6,000–9,000",
    monthly: "$3,000–4,500",
    monthlyNote: "/mo, managed",
    tagline: "An entire office team for the cost of a single hire.",
    features: [
      "Everything in Front Office",
      "AI Office Manager & Scheduling / Dispatch",
      "AI Estimator (with your approval)",
      "AI Collections",
      "Priority support",
      "Quarterly optimization reviews",
    ],
    cta: "Book a demo",
    featured: true,
  },
  {
    name: "Custom",
    setup: "Let's talk",
    monthly: "Custom",
    monthlyNote: "quote",
    tagline: "For multi-location shops and 50+ employees.",
    features: [
      "Multiple locations & brands",
      "Custom AI employees",
      "Deeper systems integration",
      "Dedicated support",
    ],
    cta: "Talk to us",
    featured: false,
  },
];

export function Pricing() {
  return (
    <Box
      component="section"
      id="pricing"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#12151A" : "#F5F6F8",
        py: { xs: 10, sm: 14 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", maxWidth: 680, mx: "auto", mb: 7 }}>
          <Reveal y={16}>
            <RecordLabel>Pricing</RecordLabel>
          </Reveal>
          <Reveal y={20} delay={0.05}>
            <Typography
              variant="h2"
              sx={{
                mt: 1.5,
                fontSize: { xs: "1.9rem", sm: "2.5rem" },
                color: "text.primary",
              }}
            >
              Priced against the hire you&apos;d make anyway
            </Typography>
          </Reveal>
          <Reveal y={20} delay={0.1}>
            <Typography
              sx={{
                mt: 2.5,
                fontSize: "1.1rem",
                lineHeight: 1.75,
                color: "text.secondary",
              }}
            >
              A one-time build plus a flat monthly to run it. Compare it to a
              front-desk hire at $3,000–4,000/mo — the AI workforce never quits,
              never calls in sick, and works around the clock.
            </Typography>
          </Reveal>
        </Box>

        <Grid container spacing={3} alignItems="stretch">
          {plans.map((plan, i) => (
            <Grid key={plan.name} size={{ xs: 12, md: 4 }}>
              <Reveal y={24} delay={i * 0.1} style={{ height: "100%" }}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "visible",
                    ...(plan.featured && {
                      borderColor: "primary.main",
                      borderWidth: 2,
                    }),
                  }}
                >
                  {plan.featured && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: -12,
                        left: 24,
                        px: 1.25,
                        py: 0.4,
                        borderRadius: "4px",
                        bgcolor: "primary.main",
                        color: "primary.contrastText",
                        fontFamily: "var(--font-mono), ui-monospace, monospace",
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                      }}
                    >
                      MOST POPULAR
                    </Box>
                  )}
                  <CardContent
                    sx={{
                      p: { xs: 3, sm: 3.5 },
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      {plan.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1, minHeight: { sm: 44 }, lineHeight: 1.6 }}
                    >
                      {plan.tagline}
                    </Typography>

                    <Box sx={{ mt: 3 }}>
                      <RecordLabel>Setup</RecordLabel>
                      <Typography variant="h4" sx={{ fontWeight: 800, mt: 0.5 }}>
                        {plan.setup}
                      </Typography>
                      <Stack direction="row" alignItems="baseline" spacing={0.75} sx={{ mt: 1.5 }}>
                        <Typography variant="h5" sx={{ fontWeight: 800 }}>
                          {plan.monthly}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {plan.monthlyNote}
                        </Typography>
                      </Stack>
                    </Box>

                    <Box
                      sx={{
                        borderTop: "1px solid",
                        borderColor: "divider",
                        my: 3,
                      }}
                    />

                    <Stack spacing={1.5} sx={{ flex: 1 }}>
                      {plan.features.map((feature) => (
                        <Stack
                          key={feature}
                          direction="row"
                          spacing={1.25}
                          alignItems="flex-start"
                        >
                          <CheckRoundedIcon
                            sx={{ fontSize: 18, color: "primary.main", mt: "2px", flexShrink: 0 }}
                            aria-hidden
                          />
                          <Typography variant="body2">{feature}</Typography>
                        </Stack>
                      ))}
                    </Stack>

                    <Button
                      variant={plan.featured ? "contained" : "outlined"}
                      color={plan.featured ? "primary" : "secondary"}
                      fullWidth
                      size="large"
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        mt: 4,
                        ...(!plan.featured && {
                          color: "text.primary",
                          borderColor: "divider",
                          "&:hover": {
                            borderColor: "text.primary",
                            bgcolor: "action.hover",
                          },
                        }),
                      }}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
