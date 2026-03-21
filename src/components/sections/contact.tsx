"use client";

import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ContactForm } from "@/components/contact-form";

export function Contact() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        py: { xs: 10, sm: 14 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, lg: 8 }}>
          {/* Left — CTA copy */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: 2,
                  bgcolor: (theme) =>
                    theme.palette.mode === "dark"
                      ? "rgba(59,130,246,0.15)"
                      : "rgba(37,99,235,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "primary.main",
                }}
              >
                <EmailIcon />
              </Box>
              <Typography
                variant="h2"
                sx={{
                  mt: 2,
                  fontSize: { xs: "1.75rem", sm: "2.25rem" },
                  color: "text.primary",
                }}
              >
                Let&apos;s Talk
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mt: 2, fontSize: "1.1rem", lineHeight: 1.8 }}
              >
                Tell us about your business. We&apos;ll show you exactly how we
                can help you capture and convert more leads.
              </Typography>

              <Stack spacing={2} sx={{ mt: 4 }}>
                {[
                  "Free consultation — no commitment",
                  "Custom system plan for your business",
                  "Response within 24 hours",
                ].map((text) => (
                  <Stack
                    key={text}
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                  >
                    <ArrowForwardIcon
                      sx={{ fontSize: 16, color: "primary.main" }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {text}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Right — form */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
            >
              <Card>
                <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
