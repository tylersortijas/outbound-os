"use client";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";
import { Section, SectionHeader } from "@/components/primitives";
import { CALENDLY_URL } from "@/lib/site";

interface Plan {
  name: string;
  tagline: string;
  setup: string;
  monthly: string;
  monthlyNote: string;
  features: string[];
  cta: string;
  href: string;
  featured: boolean;
}

const plans: Plan[] = [
  {
    name: "Front Office",
    tagline: "Your front desk, staffed 24/7 — for less than half a CSR's salary.",
    setup: "$3,000–4,000 setup",
    monthly: "$1,200–1,800",
    monthlyNote: "/mo",
    features: [
      "AI Receptionist, Follow-up & Review Manager",
      "Business Brain build & onboarding",
      "Integration with your CRM & phone",
      "Human escalation rules",
      "Monthly performance report",
      "Fully managed & monitored",
    ],
    cta: "Book a demo",
    href: CALENDLY_URL,
    featured: false,
  },
  {
    name: "Full Workforce",
    tagline: "An entire office team for the cost of a single hire.",
    setup: "$6,000–9,000 setup",
    monthly: "$3,000–4,500",
    monthlyNote: "/mo",
    features: [
      "Everything in Front Office",
      "AI Office Manager & Scheduling / Dispatch",
      "AI Estimator (with your approval)",
      "AI Collections",
      "Priority support",
      "Quarterly optimization reviews",
    ],
    cta: "Book a demo",
    href: CALENDLY_URL,
    featured: true,
  },
  {
    name: "Custom",
    tagline: "For multi-location shops and 50+ employees.",
    setup: "Scoped to your operation",
    monthly: "Custom",
    monthlyNote: " quote",
    features: [
      "Multiple locations & brands",
      "Custom AI employees",
      "Deeper systems integration",
      "Dedicated support",
    ],
    cta: "Talk to us",
    href: "#contact",
    featured: false,
  },
];

export function Pricing() {
  const theme = useTheme();
  return (
    <Section id="pricing" sx={{ scrollMarginTop: 80 }}>
      <SectionHeader
        title="Priced against the hire you'd make anyway"
        subtitle="A one-time build plus a flat monthly to run it — managed end to end. A front-desk hire runs $3,000–4,000 a month."
        maxWidth={720}
      />
      <Grid container spacing={4}>
        {plans.map((plan) => (
          <Grid key={plan.name} size={{ xs: 12, md: 4 }}>
            <Box
              component={Card}
              height={1}
              display="flex"
              flexDirection="column"
              sx={{
                backgroundImage: "none",
                boxShadow: plan.featured ? theme.customShadows.cardHover : theme.customShadows.card,
                border: plan.featured ? `2px solid ${theme.palette.primary.main}` : "2px solid transparent",
              }}
            >
              <Box padding={4} flexGrow={1} display="flex" flexDirection="column">
                <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={1}>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
                    {plan.name}
                  </Typography>
                  {plan.featured && (
                    <Box
                      component="span"
                      sx={{
                        px: 1,
                        borderRadius: 1,
                        fontSize: 12,
                        lineHeight: "22px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        color: "primary.main",
                      }}
                    >
                      Most popular
                    </Box>
                  )}
                </Box>
                <Typography color="text.secondary" sx={{ minHeight: { md: 48 } }}>
                  {plan.tagline}
                </Typography>
                <Box display="flex" alignItems="baseline" marginTop={3}>
                  <Typography variant="h4" color="primary" sx={{ fontWeight: 700 }}>
                    {plan.monthly}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 700 }}>
                    {plan.monthlyNote}
                  </Typography>
                </Box>
                <Typography variant="subtitle2" color="text.secondary" marginBottom={3}>
                  {plan.setup}
                </Typography>
                <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, display: "grid", gap: 1.5 }}>
                  {plan.features.map((f) => (
                    <Box component="li" key={f} display="flex" alignItems="center" gap={1.5}>
                      <Avatar sx={{ width: 22, height: 22, bgcolor: alpha(theme.palette.primary.main, 0.1), color: "primary.main" }}>
                        <CheckIcon sx={{ fontSize: 14 }} />
                      </Avatar>
                      <Typography component="span">{f}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box paddingX={4} paddingBottom={4}>
                <Button
                  fullWidth
                  size="large"
                  variant={plan.featured ? "contained" : "outlined"}
                  href={plan.href}
                  {...(plan.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  sx={plan.featured ? { boxShadow: theme.customShadows.button } : undefined}
                >
                  {plan.cta}
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
