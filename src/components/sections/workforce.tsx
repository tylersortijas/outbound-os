"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { Reveal } from "@/components/reveal";
import { RecordLabel, RecordField } from "@/components/record";

interface Worker {
  name: string;
  blurb: string;
  reads: string[];
  live: boolean;
}

const frontOffice: Worker[] = [
  {
    name: "AI Receptionist",
    blurb:
      "Answers every call in your company's voice, quotes from your pricebook, and books the job — 24/7.",
    reads: ["Pricebook", "Calendar", "Service area"],
    live: true,
  },
  {
    name: "AI Follow-up Specialist",
    blurb:
      "Texts back missed calls in seconds and chases every unbooked lead until they book or opt out.",
    reads: ["Missed calls", "Lead list", "Cadence"],
    live: true,
  },
  {
    name: "AI Review Manager",
    blurb:
      "Requests a review after every completed job, and routes unhappy customers to you before they post.",
    reads: ["Job status", "Review links"],
    live: true,
  },
];

const fullWorkforce: Worker[] = [
  {
    name: "AI Office Manager",
    blurb:
      "Keeps customer records, notes, and daily admin in order so nothing slips through.",
    reads: ["CRM", "Notes"],
    live: false,
  },
  {
    name: "AI Scheduling & Dispatch",
    blurb:
      "Books and routes jobs against your calendar and crew availability.",
    reads: ["Calendars", "Crew", "Zones"],
    live: false,
  },
  {
    name: "AI Estimator",
    blurb:
      "Drafts estimates from your pricebook for your one-tap approval — never sends without you.",
    reads: ["Pricebook", "Templates"],
    live: false,
  },
  {
    name: "AI Collections",
    blurb:
      "Follows up on unpaid invoices — polite, persistent, and on schedule.",
    reads: ["Invoices", "Terms"],
    live: false,
  },
];

function StatusChip({ live }: { live: boolean }) {
  return (
    <Box
      component="span"
      sx={{
        fontFamily: "var(--font-mono), ui-monospace, monospace",
        fontSize: "0.65rem",
        fontWeight: 500,
        letterSpacing: "0.08em",
        px: 0.9,
        py: 0.35,
        borderRadius: "4px",
        border: "1px solid",
        whiteSpace: "nowrap",
        borderColor: live ? "primary.main" : "divider",
        color: live
          ? (theme) => (theme.palette.mode === "dark" ? "#F0862F" : "#A8480C")
          : "text.secondary",
      }}
    >
      {live ? "ON" : "ADD-ON"}
    </Box>
  );
}

function WorkerCard({ worker, delay }: { worker: Worker; delay: number }) {
  return (
    <Reveal y={24} delay={delay} style={{ height: "100%" }}>
      <Card
        sx={{
          height: "100%",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: (theme) =>
              theme.palette.mode === "dark"
                ? "0 6px 24px rgba(0,0,0,0.4)"
                : "0 6px 24px rgba(22,24,29,0.10)",
          },
        }}
      >
        <CardContent sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={1}
            sx={{ mb: 1.5 }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1.15rem" }}>
              {worker.name}
            </Typography>
            <StatusChip live={worker.live} />
          </Stack>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: 1.7, mb: 2.5, flex: 1 }}
          >
            {worker.blurb}
          </Typography>
          <Box>
            <RecordLabel>Reads</RecordLabel>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mt: 1 }}>
              {worker.reads.map((r) => (
                <RecordField key={r}>{r}</RecordField>
              ))}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Reveal>
  );
}

export function Workforce() {
  return (
    <Box
      component="section"
      id="workforce"
      sx={{ py: { xs: 10, sm: 14 } }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ maxWidth: 680, mb: 6 }}>
          <Reveal y={16}>
            <RecordLabel>The Workforce</RecordLabel>
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
              Hire your first AI employee, or the whole team
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
              Each AI employee owns one job and works from your Business Brain.
              Start with the front office; add the back office as you grow.
            </Typography>
          </Reveal>
        </Box>

        {/* Front Office */}
        <Reveal y={16}>
          <Stack direction="row" spacing={1.5} alignItems="baseline" sx={{ mb: 2.5 }}>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Front Office
            </Typography>
            <RecordLabel>Live from day one</RecordLabel>
          </Stack>
        </Reveal>
        <Grid container spacing={3}>
          {frontOffice.map((w, i) => (
            <Grid key={w.name} size={{ xs: 12, sm: 6, md: 4 }}>
              <WorkerCard worker={w} delay={i * 0.08} />
            </Grid>
          ))}
        </Grid>

        {/* Full Workforce */}
        <Reveal y={16}>
          <Stack
            direction="row"
            spacing={1.5}
            alignItems="baseline"
            sx={{ mb: 2.5, mt: { xs: 6, sm: 8 } }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Full Workforce
            </Typography>
            <RecordLabel>Add as you grow</RecordLabel>
          </Stack>
        </Reveal>
        <Grid container spacing={3}>
          {fullWorkforce.map((w, i) => (
            <Grid key={w.name} size={{ xs: 12, sm: 6, md: 3 }}>
              <WorkerCard worker={w} delay={i * 0.08} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
