"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { alpha, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useColorMode } from "@/components/ThemeRegistry";
import { NAV_LINKS, CALENDLY_URL, CONTACT_EMAIL } from "@/lib/site";

export function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const box = size === "sm" ? 19 : 28;
  return (
    <Box
      component="a"
      href="#top"
      aria-label="OutboundOS home"
      sx={{ display: "flex", alignItems: "center", gap: 0.75, textDecoration: "none", color: "text.primary" }}
    >
      <Box
        aria-hidden
        sx={{
          width: box,
          height: box,
          borderRadius: "5px",
          bgcolor: "text.primary",
          color: "background.paper",
          display: "grid",
          placeItems: "center",
          fontWeight: 800,
          fontSize: size === "sm" ? 12 : 17,
          lineHeight: 1,
        }}
      >
        O
      </Box>
      <Typography
        component="span"
        sx={{ fontWeight: 700, letterSpacing: "-0.03em", fontSize: size === "sm" ? 15 : 21, lineHeight: 1 }}
      >
        outbound
        <Box component="span" sx={{ color: "primary.main" }}>
          OS
        </Box>
        <Box component="span" sx={{ color: "primary.main" }}>
          .
        </Box>
      </Typography>
    </Box>
  );
}

function ThemeToggle() {
  const { mode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  return (
    <Button
      variant="outlined"
      onClick={toggleColorMode}
      aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      color={mode === "light" ? "primary" : "secondary"}
      sx={{
        borderRadius: 2,
        minWidth: "auto",
        padding: 0.5,
        borderColor: alpha(theme.palette.divider, 0.2),
      }}
    >
      {mode === "light" ? (
        <DarkModeOutlinedIcon sx={{ width: 20, height: 20 }} />
      ) : (
        <LightModeOutlinedIcon sx={{ width: 20, height: 20 }} />
      )}
    </Button>
  );
}

function TopBar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: { xs: 1, sm: 2 },
        maxWidth: 1236,
        mx: "auto",
        px: 2,
        pt: 1,
      }}
    >
      <Link href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" underline="none" color="text.primary" sx={{ display: "flex", alignItems: "center" }}>
        Live demo
        <Box
          component="span"
          sx={{
            ml: 1,
            px: 0.5,
            borderRadius: 1,
            bgcolor: "primary.main",
            color: "common.white",
            fontSize: 10,
            lineHeight: "16px",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          new
        </Box>
      </Link>
      <Link href="#pricing" underline="none" color="text.primary">
        Pricing
      </Link>
      <Link href={`mailto:${CONTACT_EMAIL}`} underline="none" color="text.primary" sx={{ display: { xs: "none", sm: "inline" } }}>
        Email us
      </Link>
      <ThemeToggle />
    </Box>
  );
}

export function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 38 });

  return (
    <>
      <Box id="top" sx={{ bgcolor: "background.paper" }}>
        <TopBar />
      </Box>
      <AppBar
        position="sticky"
        elevation={trigger ? 1 : 0}
        sx={{ top: 0, bgcolor: "background.paper", color: "text.primary", backgroundImage: "none" }}
      >
        <Box
          sx={{
            maxWidth: 1236,
            width: 1,
            mx: "auto",
            px: 2,
            py: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Logo />

          <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center" }}>
            {NAV_LINKS.map((link) => (
              <Box key={link.href} marginLeft={4}>
                <Link href={link.href} underline="none" color="text.primary" sx={{ "&:hover": { color: "primary.main" } }}>
                  {link.label}
                </Link>
              </Box>
            ))}
            <Box marginLeft={4}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ boxShadow: theme.customShadows.button }}
              >
                Book a demo
              </Button>
            </Box>
          </Box>

          <Box sx={{ display: { xs: "flex", lg: "none" }, alignItems: "center" }}>
            <Button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              variant="outlined"
              sx={{ borderRadius: 2, minWidth: "auto", padding: 1, borderColor: alpha(theme.palette.divider, 0.2) }}
            >
              <MenuIcon />
            </Button>
          </Box>
        </Box>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{ paper: { sx: { width: 280 } } }}
      >
        <Box sx={{ p: 2, height: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ py: 1 }}>
            <Logo />
          </Box>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              underline="none"
              color="text.primary"
              onClick={() => setDrawerOpen(false)}
              sx={{ fontWeight: 400, py: 0.5 }}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setDrawerOpen(false)}
          >
            Book a demo
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
