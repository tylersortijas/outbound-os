"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Section, SectionHeader } from "@/components/primitives";
import { CALENDLY_URL } from "@/lib/site";

export function Cta() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), { defaultMatches: true });
  return (
    <Section>
      <SectionHeader
        title="Get started with OutboundOS today"
        subtitle="Start with the Front Office. Add the full workforce as you grow."
      />
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "stretch", sm: "flex-start" }}
        justifyContent="center"
        marginTop={-1}
      >
        <Button
          variant="contained"
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
          <Button href="#pricing" variant="outlined" size="large" fullWidth={!isMd}>
            See pricing
          </Button>
        </Box>
      </Box>
    </Section>
  );
}
