"use client";

import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CellTowerIcon from "@mui/icons-material/CellTower";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const stats = [
  { value: "< 60s", label: "Average lead response time", icon: <AccessTimeIcon /> },
  { value: "24/7", label: "Always-on lead capture", icon: <CellTowerIcon /> },
  { value: "2x–3x", label: "Typical booking rate increase", icon: <TrendingUpIcon /> },
];

export function About() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        py: { xs: 10, sm: 14 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, lg: 8 }} alignItems="center">
          {/* Left — copy */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <Typography
                variant="overline"
                color="text.secondary"
                letterSpacing={3}
              >
                About Us
              </Typography>
              <Typography
                variant="h2"
                sx={{ mt: 1, fontSize: { xs: "1.75rem", sm: "2.25rem" }, color: "text.primary" }}
              >
                Built by a Founder Who Gets It
              </Typography>
              <Stack spacing={2} sx={{ mt: 3 }}>
                <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
                  Most service businesses lose 40–60% of their inbound leads to
                  slow follow-up. Not because they don&apos;t care — because
                  they&apos;re busy doing the work.
                </Typography>
                <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
                  OutboundOS was built to fix that. We replace inconsistent
                  human follow-up with predictable, automated systems that
                  ensure every inquiry gets an immediate response and a clear
                  path to book.
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    borderLeft: "3px solid",
                    borderColor: "primary.main",
                    pl: 2.5,
                    py: 1,
                    color: "text.primary",
                    fontSize: { xs: "1.05rem", sm: "1.15rem" },
                    lineHeight: 1.6,
                  }}
                >
                  &ldquo;We build revenue infrastructure — not marketing
                  hype.&rdquo;
                </Typography>
                <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
                  We&apos;re not an agency. We build the systems that run in
                  the background so you can focus on what you do best.
                </Typography>
              </Stack>
            </motion.div>
          </Grid>

          {/* Right — stats */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
            >
              <Stack spacing={2.5}>
                {stats.map((stat) => (
                  <Card key={stat.label}>
                    <CardContent>
                      <Stack direction="row" spacing={2.5} alignItems="center">
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: 2,
                            bgcolor: (theme) =>
                              theme.palette.mode === "dark"
                                ? "rgba(59,130,246,0.15)"
                                : "rgba(37,99,235,0.08)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "primary.main",
                            flexShrink: 0,
                          }}
                        >
                          {stat.icon}
                        </Box>
                        <Box>
                          <Typography variant="h5" fontWeight={700}>
                            {stat.value}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {stat.label}
                          </Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
