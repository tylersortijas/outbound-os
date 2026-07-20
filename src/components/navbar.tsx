"use client";

import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useColorMode } from "@/components/ThemeRegistry";
import { NAV_LINKS, SECTION_IDS, CALENDLY_URL } from "@/lib/site";

function Wordmark() {
  return (
    <Box
      component="a"
      href="#top"
      aria-label="OutboundOS home"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        textDecoration: "none",
        color: "text.primary",
      }}
    >
      <Box
        aria-hidden
        sx={{
          width: 30,
          height: 30,
          borderRadius: "8px",
          bgcolor: "secondary.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          component="span"
          sx={{
            fontFamily: "var(--font-mono), ui-monospace, monospace",
            fontWeight: 600,
            fontSize: "1rem",
            color: "primary.main",
            lineHeight: 1,
          }}
        >
          O
        </Typography>
      </Box>
      <Typography variant="h6" fontWeight={700} letterSpacing="-0.02em">
        Outbound
        <Box component="span" sx={{ color: "primary.main" }}>
          OS
        </Box>
      </Typography>
    </Box>
  );
}

export function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { mode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: scrolled
          ? (theme) =>
              theme.palette.mode === "dark"
                ? "rgba(15,17,21,0.9)"
                : "rgba(255,255,255,0.9)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid" : "1px solid transparent",
        borderColor: scrolled ? "divider" : "transparent",
        boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.02)" : "none",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 68 }}>
          <Wordmark />

          <Box sx={{ flex: 1 }} />

          {/* Desktop nav */}
          <Stack
            direction="row"
            spacing={1}
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = `#${activeSection}` === link.href;
              return (
                <Button
                  key={link.href}
                  href={link.href}
                  sx={{
                    color: isActive ? "text.primary" : "text.secondary",
                    fontWeight: 600,
                    "&:hover": { color: "text.primary", bgcolor: "action.hover" },
                    transition: "color 0.2s ease",
                  }}
                >
                  {link.label}
                </Button>
              );
            })}
            <Button
              variant="contained"
              color="primary"
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ ml: 1 }}
            >
              Book a demo
            </Button>
            <IconButton
              onClick={toggleColorMode}
              size="small"
              sx={{ color: "text.secondary" }}
              aria-label={
                mode === "dark" ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {mode === "dark" ? (
                <LightModeIcon fontSize="small" />
              ) : (
                <DarkModeIcon fontSize="small" />
              )}
            </IconButton>
          </Stack>

          {/* Mobile icons */}
          <Stack direction="row" spacing={0.5} sx={{ display: { md: "none" } }}>
            <IconButton
              onClick={toggleColorMode}
              size="small"
              sx={{ color: "text.secondary" }}
              aria-label={
                mode === "dark" ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {mode === "dark" ? (
                <LightModeIcon fontSize="small" />
              ) : (
                <DarkModeIcon fontSize="small" />
              )}
            </IconButton>
            <IconButton
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </IconButton>
          </Stack>

          {/* Mobile drawer */}
          <Drawer
            anchor="top"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <Box sx={{ p: 2 }}>
              <Box
                sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}
              >
                <IconButton
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close menu"
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <List>
                {NAV_LINKS.map((link) => (
                  <ListItemButton
                    key={link.href}
                    component="a"
                    href={link.href}
                    onClick={() => setDrawerOpen(false)}
                  >
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{
                        fontWeight: 600,
                        fontSize: "1.1rem",
                      }}
                    />
                  </ListItemButton>
                ))}
              </List>
              <Stack spacing={1.5} sx={{ mt: 2, px: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setDrawerOpen(false)}
                >
                  Book a demo
                </Button>
              </Stack>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
