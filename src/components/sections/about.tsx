"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import { Reveal } from "@/components/reveal";
import { RecordLabel } from "@/components/record";

const principles = [
  {
    title: "One job per employee",
    body: "Specialized AI employees that each own a single responsibility — not one bot pretending to do everything.",
    icon: <HubRoundedIcon />,
  },
  {
    title: "Logged & reversible",
    body: "Every action is on the record and can be undone. You are never in the dark about what happened or why.",
    icon: <HistoryRoundedIcon />,
  },
  {
    title: "We run it, you don't",
    body: "Fully managed. No dashboards to learn, no automations to babysit — we build it and keep it running.",
    icon: <EngineeringRoundedIcon />,
  },
  {
    title: "Humans on the hard calls",
    body: "Your escalation rules hand the judgment calls straight to your team. The AI knows its limits.",
    icon: <SupportAgentRoundedIcon />,
  },
];

export function About() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        py: { xs: 10, sm: 14 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, lg: 8 }} alignItems="center">
          {/* Left — origin story */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Reveal x={-24} y={0}>
              <RecordLabel>Why OutboundOS</RecordLabel>
              <Typography
                variant="h2"
                sx={{
                  mt: 1.5,
                  fontSize: { xs: "1.9rem", sm: "2.5rem" },
                  color: "text.primary",
                  textWrap: "balance",
                }}
              >
                Built after an electrician told me the truth
              </Typography>
              <Stack spacing={2.5} sx={{ mt: 3 }}>
                <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  OutboundOS started as an AI receptionist. Then a client — an
                  electrician — said the thing that changed the company: he
                  didn&apos;t distrust AI. He distrusted AI making decisions
                  without enough context about his business.
                </Typography>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: "12px",
                    border: "1px solid",
                    borderColor: "divider",
                    bgcolor: (theme) =>
                      theme.palette.mode === "dark" ? "#12151A" : "#F5F6F8",
                  }}
                >
                  <FormatQuoteRoundedIcon
                    sx={{ fontSize: 26, color: "primary.main", mb: 0.5 }}
                    aria-hidden
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "text.primary",
                      fontSize: { xs: "1.15rem", sm: "1.3rem" },
                      lineHeight: 1.5,
                    }}
                  >
                    He didn&apos;t distrust AI. He distrusted AI that didn&apos;t
                    know his business.
                  </Typography>
                </Box>
                <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  So we stopped selling one bot and built a workforce: specialized
                  AI employees that share one Business Brain and work under human
                  oversight. We&apos;re not an agency handing you software to run —
                  we build and operate the system, and you stay in control.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: "0.8rem",
                    letterSpacing: "0.06em",
                    color: "text.secondary",
                  }}
                >
                  — Francisco Roncalli, Founder
                </Typography>
              </Stack>
            </Reveal>
          </Grid>

          {/* Right — honest principles (no invented metrics) */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Grid container spacing={2.5}>
              {principles.map((p, i) => (
                <Grid key={p.title} size={{ xs: 12, sm: 6 }}>
                  <Reveal y={24} delay={i * 0.08} style={{ height: "100%" }}>
                    <Card sx={{ height: "100%" }}>
                      <CardContent sx={{ p: 3 }}>
                        <Box
                          sx={{
                            width: 44,
                            height: 44,
                            borderRadius: "8px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "primary.main",
                            bgcolor: (theme) =>
                              theme.palette.mode === "dark"
                                ? "rgba(240,134,47,0.12)"
                                : "rgba(232,112,30,0.10)",
                            mb: 2,
                          }}
                        >
                          {p.icon}
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                          {p.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ lineHeight: 1.7 }}
                        >
                          {p.body}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Reveal>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
