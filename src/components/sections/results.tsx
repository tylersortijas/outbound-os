"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Section } from "@/components/primitives";
import { BrainRecord, LiveCall } from "@/components/sections/hero-mocks";

const stats = [
  { value: "24/7", body: "Every call answered — nights, weekends, and holidays included." },
  { value: "7", body: "AI employees, each owning one job, from receptionist to collections." },
  { value: "100%", body: "of actions logged and reversible. Nothing happens off the record." },
];

function MockFrame({ children, sx }: { children: React.ReactNode; sx: object }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "absolute",
        width: 309,
        height: 324,
        p: 1,
        boxSizing: "content-box",
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: theme.customShadows.mock,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

export function Results() {
  const theme = useTheme();
  return (
    <Section id="results">
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <Box marginBottom={4}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }} gutterBottom>
                An entire front office for the cost of one hire
              </Typography>
              <Typography variant="h6" component="p" color="text.secondary" sx={{ fontWeight: 400 }}>
                A front-desk hire runs $3–4K a month and still misses calls after
                five. The Front Office workforce starts at $1,200 a month, fully
                managed — and it never clocks out.
              </Typography>
            </Box>
            <Grid container spacing={2}>
              {stats.map((s) => (
                <Grid key={s.value} size={{ xs: 12, md: 4 }}>
                  <Typography variant="h4" color="primary" gutterBottom>
                    {s.value}
                  </Typography>
                  <Typography color="text.secondary" component="p">
                    {s.body}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: "none", md: "block" } }}>
          <Box
            aria-hidden
            sx={{
              position: "relative",
              height: 1,
              minHeight: 460,
              borderRadius: 2,
              bgcolor: "alternate.dark",
              boxShadow: theme.customShadows.card,
              overflow: "hidden",
            }}
          >
            <MockFrame sx={{ top: 32, left: 32 }}>
              <LiveCall />
            </MockFrame>
            <MockFrame sx={{ bottom: 32, right: 32 }}>
              <BrainRecord />
            </MockFrame>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}
