"use client";

import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import BoltIcon from "@mui/icons-material/Bolt";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 12, sm: 16, lg: 20 },
      }}
    >
      {/* Background image */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: "url(/images/dashboard-hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark overlay */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(11,17,32,0.88)"
              : "rgba(0,0,0,0.75)",
        }}
      />

      {/* Top/bottom edge fade */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "linear-gradient(to bottom, rgba(11,17,32,0.6) 0%, transparent 20%, transparent 80%, rgba(11,17,32,1) 100%)"
              : "linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, transparent 20%, transparent 80%, rgba(255,255,255,0.6) 100%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="md" sx={{ textAlign: "center", position: "relative", zIndex: 3 }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <Chip
            icon={<BoltIcon sx={{ fontSize: 16, color: "#60a5fa" }} />}
            label="Automated Revenue Systems"
            variant="outlined"
            sx={{
              mb: 4,
              px: 1,
              fontSize: "0.85rem",
              fontWeight: 500,
              color: "rgba(255,255,255,0.85)",
              borderColor: "rgba(255,255,255,0.2)",
              bgcolor: "rgba(255,255,255,0.06)",
            }}
          />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.25rem", sm: "3rem", lg: "3.75rem" },
              lineHeight: 1.1,
              color: "#ffffff",
            }}
          >
            Every missed call is a{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              missed customer.
            </Box>
          </Typography>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease }}
        >
          <Typography
            variant="h6"
            fontWeight={400}
            sx={{
              mt: 3,
              mx: "auto",
              maxWidth: 600,
              fontSize: { xs: "1.05rem", sm: "1.2rem" },
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            We install automated lead capture and follow-up systems that respond
            to every inquiry instantly — so you never lose another lead to a
            missed call, unanswered message, or after-hours inquiry.
          </Typography>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            sx={{ mt: 5 }}
          >
            <Button
              variant="contained"
              size="large"
              href="#contact"
              endIcon={<ArrowForwardIcon />}
            >
              Book a Call
            </Button>
            <Button
              variant="contained"
              size="large"
              href="#services"
              sx={{
                color: "#ffffff",
                bgcolor: "rgba(255,255,255,0.12)",
                boxShadow: "none",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.2)",
                  boxShadow: "none",
                },
              }}
            >
              See How It Works
            </Button>
          </Stack>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease }}
        >
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{ mt: 8 }}
          >
            <AvatarGroup max={5}>
              {[
                { src: "/images/avatars/avatar-1.jpg", alt: "Client" },
                { src: "/images/avatars/avatar-2.jpg", alt: "Client" },
                { src: "/images/avatars/avatar-3.jpg", alt: "Client" },
                { src: "/images/avatars/avatar-4.jpg", alt: "Client" },
                { src: "/images/avatars/avatar-5.jpg", alt: "Client" },
              ].map((avatar, i) => (
                <Avatar
                  key={i}
                  src={avatar.src}
                  alt={avatar.alt}
                  sx={{ width: 36, height: 36, border: "2px solid rgba(255,255,255,0.3)" }}
                />
              ))}
            </AvatarGroup>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)" }}>
              Trusted by{" "}
              <Box component="span" fontWeight={600} sx={{ color: "#ffffff" }}>
                50+
              </Box>{" "}
              service businesses
            </Typography>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}
