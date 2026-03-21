"use client";

import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import LayersIcon from "@mui/icons-material/Layers";
import ChatIcon from "@mui/icons-material/Chat";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";

const services = [
  {
    title: "Automated Lead Capture",
    description:
      "Every website form, missed call, and inbound message gets captured and routed into your system automatically. No lead falls through the cracks.",
    icon: <LayersIcon />,
  },
  {
    title: "Instant SMS Follow-Up",
    description:
      "Missed a call? Our system texts the lead back within seconds — engaging them before they move on to your competitor.",
    icon: <ChatIcon />,
  },
  {
    title: "Automated Booking",
    description:
      "Leads are guided directly to your calendar. No back-and-forth, no missed appointments — just booked slots on autopilot.",
    icon: <CalendarMonthIcon />,
  },
  {
    title: "Conversion Websites",
    description:
      "We build websites engineered to convert — integrated directly into your automation system so every visitor has a clear path to book.",
    icon: <DesktopMacIcon />,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Services() {
  return (
    <Box
      component="section"
      id="services"
      sx={{ borderTop: "1px solid", borderColor: "divider", py: { xs: 10, sm: 14 } }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography
            variant="overline"
            color="text.secondary"
            letterSpacing={3}
          >
            What We Do
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, fontSize: { xs: "1.75rem", sm: "2.25rem" }, color: "text.primary" }}>
            Systems That Run While You Work
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 2, maxWidth: 600, mx: "auto", fontSize: "1.1rem" }}
          >
            We install and manage the infrastructure that turns missed
            opportunities into booked appointments.
          </Typography>
        </Box>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Grid container spacing={3}>
            {services.map((service, index) => {
              const isPrimary = index === 0;
              return (
              <Grid key={service.title} size={{ xs: 12, sm: 6 }}>
                <motion.div variants={itemVariants} style={{ height: "100%" }}>
                  <Card sx={{
                    height: "100%",
                    p: 1,
                    ...(isPrimary && {
                      border: "2px solid",
                      borderColor: "primary.main",
                    }),
                  }}>
                    <CardContent>
                      <Box
                        sx={{
                          width: isPrimary ? 52 : 44,
                          height: isPrimary ? 52 : 44,
                          borderRadius: 2,
                          bgcolor: (theme) =>
                            theme.palette.mode === "dark"
                              ? "rgba(59,130,246,0.15)"
                              : "rgba(37,99,235,0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 2,
                          color: "primary.main",
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography variant="h6" fontWeight={600} gutterBottom>
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        lineHeight={1.7}
                      >
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
              );
            })}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
