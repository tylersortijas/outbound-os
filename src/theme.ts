"use client";

import { createTheme } from "@mui/material/styles";

const shared = {
  typography: {
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
    h1: { fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, letterSpacing: "-0.01em" },
    h3: { fontWeight: 600 },
    button: { textTransform: "none" as const, fontWeight: 600 },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 10, padding: "8px 20px" },
        sizeLarge: { padding: "12px 28px", fontSize: "1rem" },
        containedPrimary: {
          background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: { variant: "outlined" as const, size: "small" as const },
    },
    MuiChip: {
      styleOverrides: { root: { borderRadius: 20 } },
    },
  },
};

export const lightTheme = createTheme({
  ...shared,
  palette: {
    mode: "light",
    primary: { main: "#2563eb", light: "#60a5fa", dark: "#1d4ed8", contrastText: "#ffffff" },
    secondary: { main: "#38bdf8", light: "#7dd3fc", dark: "#0284c7", contrastText: "#0f172a" },
    background: { default: "#ffffff", paper: "#f8fafc" },
    text: { primary: "#0f172a", secondary: "#64748b" },
    divider: "rgba(15,23,42,0.08)",
  },
  components: {
    ...shared.components,
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: "1px solid rgba(15,23,42,0.08)",
          boxShadow: "none",
          "&:hover": { boxShadow: "0 4px 20px rgba(37,99,235,0.08)" },
          transition: "box-shadow 0.2s ease",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: { root: { color: "#0f172a" } },
    },
  },
});

export const darkTheme = createTheme({
  ...shared,
  palette: {
    mode: "dark",
    primary: { main: "#3b82f6", light: "#60a5fa", dark: "#2563eb", contrastText: "#ffffff" },
    secondary: { main: "#38bdf8", light: "#7dd3fc", dark: "#0284c7", contrastText: "#0f172a" },
    background: { default: "#0b1120", paper: "#111827" },
    text: { primary: "#f1f5f9", secondary: "#94a3b8" },
    divider: "rgba(148,163,184,0.12)",
  },
  components: {
    ...shared.components,
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: "1px solid rgba(148,163,184,0.12)",
          boxShadow: "none",
          "&:hover": { boxShadow: "0 4px 20px rgba(59,130,246,0.15)" },
          transition: "box-shadow 0.2s ease",
          backgroundColor: "#111827",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: { root: { color: "#f1f5f9" } },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: { backgroundColor: "#111827" },
      },
    },
  },
});
