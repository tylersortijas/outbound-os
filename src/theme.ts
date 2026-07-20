"use client";

import { createTheme } from "@mui/material/styles";

// "The Service Manual" — graphite + steel with one high-visibility safety-amber
// accent. No blue (category reflex), no warm cream. Flat by default; depth from
// hairlines and tonal layers. Tokens are the source of truth in DESIGN.md.

const shared = {
  typography: {
    fontFamily: "var(--font-archivo), system-ui, sans-serif",
    h1: { fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.02 },
    h2: { fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 },
    h3: { fontWeight: 700, letterSpacing: "-0.01em" },
    h4: { fontWeight: 700, letterSpacing: "-0.01em" },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    button: { textTransform: "none" as const, fontWeight: 600 },
    overline: {
      fontFamily: "var(--font-mono), ui-monospace, monospace",
      fontWeight: 500,
      letterSpacing: "0.08em",
    },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 8, padding: "10px 22px" },
        sizeLarge: { padding: "14px 28px", fontSize: "1rem" },
      },
    },
    MuiTextField: {
      defaultProps: { variant: "outlined" as const },
    },
    MuiChip: {
      styleOverrides: { root: { borderRadius: 6, fontWeight: 600 } },
    },
  },
};

export const lightTheme = createTheme({
  ...shared,
  palette: {
    mode: "light",
    // Safety Amber — the single hi-vis accent. Dark ink text on amber fills.
    primary: {
      main: "#E8701E",
      light: "#F2A86A",
      dark: "#C85A12",
      contrastText: "#16181D",
    },
    // Graphite Ink — the workhorse; secondary (non-CTA) buttons and surfaces.
    secondary: {
      main: "#16181D",
      light: "#20242C",
      dark: "#000000",
      contrastText: "#FFFFFF",
    },
    background: { default: "#FFFFFF", paper: "#FFFFFF" },
    text: { primary: "#16181D", secondary: "#565D69" },
    divider: "#E4E7EA",
  },
  components: {
    ...shared.components,
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: "1px solid #E4E7EA",
          boxShadow: "none",
          transition:
            "box-shadow 0.16s cubic-bezier(0.22,1,0.36,1), transform 0.16s cubic-bezier(0.22,1,0.36,1)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: { root: { color: "#16181D" } },
    },
  },
});

export const darkTheme = createTheme({
  ...shared,
  palette: {
    mode: "dark",
    primary: {
      main: "#F0862F",
      light: "#F6A86A",
      dark: "#E8701E",
      contrastText: "#16181D",
    },
    secondary: {
      main: "#F2F4F7",
      light: "#FFFFFF",
      dark: "#C7CDD6",
      contrastText: "#16181D",
    },
    background: { default: "#0F1115", paper: "#181B21" },
    text: { primary: "#F2F4F7", secondary: "#A7AEBA" },
    divider: "#2A2F38",
  },
  components: {
    ...shared.components,
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: "1px solid #2A2F38",
          boxShadow: "none",
          backgroundColor: "#181B21",
          transition:
            "box-shadow 0.16s cubic-bezier(0.22,1,0.36,1), transform 0.16s cubic-bezier(0.22,1,0.36,1)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: { root: { color: "#F2F4F7" } },
    },
    MuiDrawer: {
      styleOverrides: { paper: { backgroundColor: "#181B21" } },
    },
  },
});
