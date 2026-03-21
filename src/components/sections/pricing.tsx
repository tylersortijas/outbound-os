"use client";

import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const plans = [
  {
    name: "System Build",
    price: "$2,000 – $3,500",
    period: "one-time",
    description:
      "We build and install your complete lead capture and booking automation system from scratch.",
    features: [
      "Full GoHighLevel setup",
      "Automated SMS follow-up workflows",
      "Missed call text-back system",
      "Booking calendar integration",
      "Conversion-focused website",
      "Lead pipeline configuration",
    ],
    featured: false,
  },
  {
    name: "Ongoing Management",
    price: "$500 – $1,000",
    period: "/mo",
    description:
      "We monitor, optimize, and manage your system so it keeps performing — you focus on running your business.",
    features: [
      "System monitoring & optimization",
      "SMS campaign management",
      "Booking flow improvements",
      "Performance reporting",
      "Priority support",
      "New workflow builds as needed",
    ],
    featured: true,
  },
];

export function Pricing() {
  return (
    <Box
      component="section"
      id="pricing"
      sx={{ borderTop: "1px solid", borderColor: "divider", py: { xs: 10, sm: 14 } }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography
            variant="overline"
            color="text.secondary"
            letterSpacing={3}
          >
            Pricing
          </Typography>
          <Typography
            variant="h2"
            sx={{ mt: 1, fontSize: { xs: "1.75rem", sm: "2.25rem" }, color: "text.primary" }}
          >
            Simple, Transparent Pricing
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 2, maxWidth: 520, mx: "auto", fontSize: "1.1rem" }}
          >
            No hidden fees. No long-term contracts. Just systems that pay for
            themselves.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1.5, fontStyle: "italic" }}
          >
            Most clients start with a System Build, then add Ongoing Management.
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: 900, mx: "auto" }}>
          {plans.map((plan, i) => (
            <Grid key={plan.name} size={{ xs: 12, sm: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                style={{ height: "100%" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "visible",
                    ...(plan.featured && {
                      border: "2px solid",
                      borderColor: "primary.main",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
                    }),
                  }}
                >
                  {plan.featured && (
                    <Chip
                      label="Most Popular"
                      color="primary"
                      size="small"
                      sx={{
                        position: "absolute",
                        top: -12,
                        right: 24,
                        fontWeight: 600,
                      }}
                    />
                  )}
                  <CardContent sx={{ p: { xs: 3, sm: 4 }, flex: 1, display: "flex", flexDirection: "column" }}>
                    <Typography variant="h6" fontWeight={600}>
                      {plan.name}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Typography
                        component="span"
                        variant="h4"
                        fontWeight={700}
                      >
                        {plan.price}
                      </Typography>
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.secondary"
                        sx={{ ml: 0.5 }}
                      >
                        {plan.period}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1.5 }}
                    >
                      {plan.description}
                    </Typography>

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
                          spacing={1.5}
                          alignItems="center"
                        >
                          <CheckCircleIcon
                            sx={{ fontSize: 18, color: "primary.main" }}
                          />
                          <Typography variant="body2">{feature}</Typography>
                        </Stack>
                      ))}
                    </Stack>

                    <Button
                      variant={plan.featured ? "contained" : "outlined"}
                      fullWidth
                      href="#contact"
                      sx={{ mt: 4 }}
                      size="large"
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
