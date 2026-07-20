"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Reveal } from "@/components/reveal";
import { RecordLabel, RecordField, LoggedTag } from "@/components/record";
import { CALENDLY_URL } from "@/lib/site";

function FrontOfficeRecord() {
  return (
    <Box
      sx={{
        borderRadius: "12px",
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        overflow: "hidden",
        boxShadow: (theme) =>
          theme.palette.mode === "dark"
            ? "0 12px 40px rgba(0,0,0,0.4)"
            : "0 12px 40px rgba(15,17,21,0.10)",
      }}
    >
      {/* Header strip */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          px: 2.5,
          py: 1.5,
          borderBottom: "1px solid",
          borderColor: "divider",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#12151A" : "#F5F6F8",
        }}
      >
        <RecordLabel>After-hours call · 9:47 PM</RecordLabel>
        <Stack direction="row" spacing={0.5} alignItems="center">
          <FiberManualRecordIcon sx={{ fontSize: 9, color: "primary.main" }} />
          <RecordLabel>Live</RecordLabel>
        </Stack>
      </Stack>

      {/* Body */}
      <Box sx={{ p: 2.5 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
          Missed call from a homeowner —
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, lineHeight: 1.35, mb: 2 }}
        >
          AI Receptionist answered, quoted the diagnostic, and booked a
          capacitor replacement for{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            Tue 8:00 AM
          </Box>
          .
        </Typography>

        <RecordLabel>Checked your Business Brain first</RecordLabel>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            mt: 1.25,
            mb: 2.5,
          }}
        >
          <RecordField checked>Service area · in zone</RecordField>
          <RecordField checked>Pricebook · $189 diagnostic</RecordField>
          <RecordField checked>On-call tech · Marcus</RecordField>
          <RecordField checked>Hours · after-hours rule</RecordField>
        </Box>

        <LoggedTag />
      </Box>
    </Box>
  );
}

export function Hero() {
  return (
    <Box
      component="section"
      id="top"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 10, sm: 14, lg: 18 },
        // Faint engineered "blueprint" grid — no color, just structure.
        backgroundImage: (theme) =>
          `linear-gradient(${theme.palette.divider} 1px, transparent 1px), linear-gradient(90deg, ${theme.palette.divider} 1px, transparent 1px)`,
        backgroundSize: "56px 56px",
        backgroundPosition: "center top",
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: (theme) =>
            `radial-gradient(120% 80% at 50% -10%, transparent 55%, ${theme.palette.background.default} 100%)`,
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, lg: 8 }} alignItems="center">
          {/* Left — copy */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Reveal onScroll={false} y={16}>
              <RecordLabel>Managed AI workforce · Home services</RecordLabel>
            </Reveal>

            <Reveal onScroll={false} y={20} delay={0.08}>
              <Typography
                variant="h1"
                sx={{
                  mt: 2.5,
                  fontSize: { xs: "2.5rem", sm: "3.25rem", lg: "3.75rem" },
                  color: "text.primary",
                  textWrap: "balance",
                }}
              >
                AI you can actually{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  trust
                </Box>{" "}
                to run your front office.
              </Typography>
            </Reveal>

            <Reveal onScroll={false} y={20} delay={0.16}>
              <Typography
                sx={{
                  mt: 3,
                  maxWidth: 520,
                  fontSize: { xs: "1.05rem", sm: "1.15rem" },
                  lineHeight: 1.7,
                  color: "text.secondary",
                }}
              >
                A team of AI employees that answers every call, follows up on
                every lead, and books the job — 24/7. Built on your business&apos;s
                real context, with every decision logged and reversible.
              </Typography>
            </Reveal>

            <Reveal onScroll={false} y={20} delay={0.24}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mt: 4.5 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<ArrowForwardIcon />}
                >
                  Book a 30-min demo
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="large"
                  href="#how-it-works"
                  sx={{
                    color: "text.primary",
                    borderColor: "divider",
                    "&:hover": { borderColor: "text.primary", bgcolor: "action.hover" },
                  }}
                >
                  See how it works
                </Button>
              </Stack>
            </Reveal>

            <Reveal onScroll={false} y={16} delay={0.32}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 3 }}
              >
                No dashboards to learn. We build it, run it, and you stay in
                control.
              </Typography>
            </Reveal>
          </Grid>

          {/* Right — the front-office record (trust, shown not claimed) */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Reveal onScroll={false} y={28} delay={0.35}>
              <FrontOfficeRecord />
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
