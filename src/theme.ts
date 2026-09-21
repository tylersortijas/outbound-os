"use client";

import {
  createTheme,
  responsiveFontSizes,
  type ThemeOptions,
} from "@mui/material/styles";

// Visual language cloned from the MUI "theFront" landing page: Inter, a single
// blue primary, a warm-yellow highlight, soft grey-blue shadows, and an
// "alternate" tint for banded sections. Values were measured from the live
// template, not estimated.

declare module "@mui/material/styles" {
  interface TypeBackground {
    level2: string;
    level1: string;
    alternate: string;
  }
  interface Palette {
    alternate: { main: string; dark: string };
  }
  interface PaletteOptions {
    alternate?: { main: string; dark: string };
  }
  interface Theme {
    customShadows: { card: string; cardHover: string; button: string; mock: string };
  }
  interface ThemeOptions {
    customShadows?: { card: string; cardHover: string; button: string; mock: string };
  }
}

const shared: ThemeOptions = {
  typography: {
    fontFamily: "var(--font-inter), sans-serif",
    button: { textTransform: "none", fontWeight: 400 },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 5, fontWeight: 400 },
        sizeLarge: { padding: "10px 22px", fontSize: "0.9375rem" },
        containedSecondary: { color: "white" },
      },
    },
    MuiInputBase: { styleOverrides: { root: { borderRadius: 5 } } },
    MuiOutlinedInput: { styleOverrides: { root: { borderRadius: 5 } } },
    MuiCard: { styleOverrides: { root: { borderRadius: 8 } } },
  },
};

export const lightTheme = responsiveFontSizes(
  createTheme({
    ...shared,
    palette: {
      mode: "light",
      primary: { main: "#377dff", light: "#467de3", dark: "#2f6ad9", contrastText: "#fff" },
      secondary: { main: "#f9b934", light: "#ffb74d", dark: "#FF9800", contrastText: "rgba(0, 0, 0, 0.87)" },
      text: { primary: "#1e2022", secondary: "#677788" },
      divider: "rgba(0, 0, 0, 0.12)",
      background: {
        default: "#ffffff",
        paper: "#ffffff",
        level2: "#f5f5f5",
        level1: "#ffffff",
        alternate: "#f7faff",
      },
      alternate: { main: "#f7faff", dark: "#edf1f7" },
    },
    customShadows: {
      card: "0 3px 6px 0 rgba(140, 152, 164, 0.25)",
      cardHover: "0 12px 15px 0 rgba(140, 152, 164, 0.25)",
      button: "0 12px 15px 0 rgba(140, 152, 164, 0.1)",
      mock: "0 6px 24px 0 rgba(140, 152, 164, 0.125)",
    },
  }),
);

export const darkTheme = responsiveFontSizes(
  createTheme({
    ...shared,
    palette: {
      mode: "dark",
      primary: { main: "#1976d2", light: "#2196f3", dark: "#0d47a1", contrastText: "#fff" },
      secondary: { main: "#f9b934", light: "#ffb74d", dark: "#FF9800", contrastText: "rgba(0, 0, 0, 0.87)" },
      text: { primary: "#eeeeef", secondary: "#aeb0b4" },
      divider: "rgba(255, 255, 255, 0.12)",
      background: {
        default: "#222B45",
        paper: "#222B45",
        level2: "#333",
        level1: "#2D3748",
        alternate: "#1a2138",
      },
      alternate: { main: "#1a2138", dark: "#151a30" },
    },
    customShadows: {
      card: "0 3px 6px 0 rgba(0, 0, 0, 0.25)",
      cardHover: "0 12px 15px 0 rgba(0, 0, 0, 0.35)",
      button: "0 12px 15px 0 rgba(0, 0, 0, 0.1)",
      mock: "0 6px 24px 0 rgba(0, 0, 0, 0.3)",
    },
  }),
);
