"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha, useTheme } from "@mui/material/styles";
import { Curve, Section, bandGradient } from "@/components/primitives";
import { HERO_MOCKS } from "@/components/sections/hero-mocks";
import { CALENDLY_URL } from "@/lib/site";

export function Hero() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), { defaultMatches: true });

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundImage: bandGradient(theme.palette.alternate.main),
      }}
    >
      <Box paddingY={{ xs: 0, sm: "4rem", md: "8rem" }} sx={{ position: "relative" }}>
        <Section paddingY={{ xs: 4, sm: 6, md: 0 }} sx={{ position: "relative", zIndex: 2 }}>
          <Box maxWidth={{ xs: 1, sm: "50%" }}>
            <Typography variant="h2" component="h1" color="text.primary" sx={{ fontWeight: 700 }}>
              AI you can
              <br />
              actually{" "}
              <Typography
                color="primary"
                component="span"
                variant="inherit"
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(theme.palette.secondary.main, 0.3)} 0%)`,
                }}
              >
                trust.
              </Typography>
            </Typography>
            <Box marginY={3}>
              <Typography variant="h6" component="p" color="text.secondary" sx={{ fontWeight: 400 }}>
                A managed team of AI employees that answers every call, follows up
                on every lead, and books the job — 24/7. Built on your business&apos;s
                real context, with every decision logged and reversible.
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "stretch", sm: "flex-start" }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth={!isMd}
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ boxShadow: theme.customShadows.button }}
              >
                Book a demo
              </Button>
              <Box marginTop={{ xs: 2, sm: 0 }} marginLeft={{ sm: 2 }} width={{ xs: "100%", md: "auto" }}>
                <Button href="#workforce" variant="outlined" color="primary" size="large" fullWidth={!isMd}>
                  Meet the workforce
                </Button>
              </Box>
            </Box>
          </Box>
        </Section>

        {/* Tilted wall of product UI — same geometry as theFront's screenshot grid. */}
        <Box
          aria-hidden
          sx={{
            display: { xs: "none", sm: "block" },
            transform: "rotate(-20deg)",
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "50rem",
              position: "absolute",
              left: "50%",
              top: 0,
              transform: "translate3d(20%, -8%, 0)",
            }}
          >
            {HERO_MOCKS.map((column, i) => (
              <Box key={i} marginTop={{ sm: -(i * 16) }} marginX={1}>
                {column.map((Mock, j) => (
                  <Box
                    key={j}
                    padding={1}
                    bgcolor="background.paper"
                    borderRadius={2}
                    boxShadow={theme.customShadows.mock}
                    marginTop={2}
                    sx={{ width: 309, height: 324, boxSizing: "content-box" }}
                  >
                    <Mock />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Curve />
    </Box>
  );
}
