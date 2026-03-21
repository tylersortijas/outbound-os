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

const sectionIds = ["services", "about", "testimonials", "pricing", "contact"];

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

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
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={scrolled ? 1 : 0}
      sx={{
        bgcolor: scrolled
          ? (theme) =>
              theme.palette.mode === "dark"
                ? "rgba(11,17,32,0.9)"
                : "rgba(255,255,255,0.9)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid" : "none",
        borderColor: "divider",
        transition: "all 0.3s ease",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 64 }}>
          {/* Logo */}
          <Box
            component="a"
            href="#"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              textDecoration: "none",
              color: "text.primary",
            }}
          >
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: 1.5,
                background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="body2"
                fontWeight={700}
                sx={{ color: "#ffffff" }}
              >
                O
              </Typography>
            </Box>
            <Typography variant="h6" fontWeight={700} letterSpacing="-0.01em">
              Outbound
              <Box component="span" sx={{ color: "text.secondary" }}>
                OS
              </Box>
            </Typography>
          </Box>

          <Box sx={{ flex: 1 }} />

          {/* Desktop nav */}
          <Stack
            direction="row"
            spacing={1}
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {navLinks.map((link) => {
              const isActive = `#${activeSection}` === link.href;
              return (
                <Button
                  key={link.href}
                  href={link.href}
                  sx={{
                    color: isActive ? "primary.main" : "text.secondary",
                    fontWeight: isActive ? 700 : 600,
                    "&:hover": { color: "text.primary", bgcolor: "action.hover" },
                    transition: "color 0.2s ease, font-weight 0.2s ease",
                  }}
                >
                  {link.label}
                </Button>
              );
            })}
            <Button variant="contained" href="#contact" sx={{ ml: 1 }}>
              Get Started
            </Button>
            <IconButton
              onClick={toggleColorMode}
              size="small"
              sx={{ color: "text.secondary" }}
              aria-label="Toggle dark mode"
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
              aria-label="Toggle dark mode"
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
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  mb: 1,
                }}
              >
                <IconButton onClick={() => setDrawerOpen(false)}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <List>
                {navLinks.map((link) => (
                  <ListItemButton
                    key={link.href}
                    component="a"
                    href={link.href}
                    onClick={() => setDrawerOpen(false)}
                  >
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{
                        fontWeight: 500,
                        fontSize: "1.1rem",
                      }}
                    />
                  </ListItemButton>
                ))}
              </List>
              <Stack spacing={1.5} sx={{ mt: 2, px: 2 }}>
                <Button
                  variant="contained"
                  fullWidth
                  href="#contact"
                  onClick={() => setDrawerOpen(false)}
                >
                  Get Started
                </Button>
              </Stack>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
