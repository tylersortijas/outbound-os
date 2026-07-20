"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { Reveal } from "@/components/reveal";
import { RecordLabel } from "@/components/record";

const brainFields = [
  "Services & pricebook",
  "Service area & zones",
  "Business hours & after-hours rules",
  "Team, trucks & calendars",
  "Policies & FAQs",
  "Escalation rules",
];

const steps = [
  {
    n: "01",
    title: "We build it",
    body: "In onboarding we load your services, pricing, calendars, and rules into the Business Brain. You don't touch a config screen — we do the work.",
  },
  {
    n: "02",
    title: "Your workforce acts on it",
    body: "Every AI employee reads the Business Brain before it answers, quotes, or books. It works from your facts, not generic guesses.",
  },
  {
    n: "03",
    title: "You stay in control",
    body: "Every action is logged and reversible, and your escalation rules hand the judgment calls straight to your team.",
  },
];

export function BusinessBrain() {
  return (
    <Box
      component="section"
      id="how-it-works"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#12151A" : "#F5F6F8",
        py: { xs: 10, sm: 14 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", maxWidth: 720, mx: "auto", mb: 7 }}>
          <Reveal y={16}>
            <RecordLabel>The Business Brain</RecordLabel>
          </Reveal>
          <Reveal y={20} delay={0.05}>
            <Typography
              variant="h2"
              sx={{
                mt: 1.5,
                fontSize: { xs: "1.9rem", sm: "2.5rem" },
                color: "text.primary",
                textWrap: "balance",
              }}
            >
              One source of truth every AI employee reads
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
              The electrician who inspired OutboundOS didn&apos;t distrust AI — he
              distrusted AI making calls without knowing his business. So the
              Business Brain came first: one shared record of how your business
              actually runs, that every AI employee reads before it acts.
            </Typography>
          </Reveal>
        </Box>

        {/* The Business Brain record card */}
        <Reveal y={28} delay={0.1}>
          <Box
            sx={{
              maxWidth: 860,
              mx: "auto",
              borderRadius: "12px",
              border: "1px solid",
              borderColor: "divider",
              bgcolor: "background.paper",
              p: { xs: 3, sm: 4 },
            }}
          >
            <RecordLabel>Your Business Brain</RecordLabel>
            <Grid container spacing={1.5} sx={{ mt: 1 }}>
              {brainFields.map((field) => (
                <Grid key={field} size={{ xs: 12, sm: 6 }}>
                  <Stack
                    direction="row"
                    spacing={1.25}
                    alignItems="center"
                    sx={{
                      px: 1.75,
                      py: 1.5,
                      borderRadius: "8px",
                      border: "1px solid",
                      borderColor: "divider",
                      height: "100%",
                    }}
                  >
                    <CheckRoundedIcon
                      sx={{ fontSize: 18, color: "primary.main", flexShrink: 0 }}
                      aria-hidden
                    />
                    <Typography sx={{ fontWeight: 600, fontSize: "0.95rem" }}>
                      {field}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Reveal>

        {/* Three-step process (a real ordered flow) */}
        <Grid container spacing={4} sx={{ mt: { xs: 4, sm: 6 } }}>
          {steps.map((step, i) => (
            <Grid key={step.n} size={{ xs: 12, md: 4 }}>
              <Reveal y={24} delay={0.1 + i * 0.1}>
                <Stack spacing={1.5}>
                  <Typography
                    sx={{
                      fontFamily: "var(--font-mono), ui-monospace, monospace",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      color: "primary.main",
                    }}
                  >
                    {step.n}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.7 }}
                  >
                    {step.body}
                  </Typography>
                </Stack>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
