"use client";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Curve, bandGradient } from "@/components/primitives";
import { Hero } from "@/components/sections/hero";
import { Workforce } from "@/components/sections/workforce";
import { BusinessBrain } from "@/components/sections/business-brain";
import { Results } from "@/components/sections/results";
import { Trust } from "@/components/sections/trust";
import { Pricing } from "@/components/sections/pricing";
import { Contact } from "@/components/sections/contact";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Hero />
      <Workforce />
      <Box sx={{ backgroundImage: bandGradient(theme.palette.alternate.main) }}>
        <BusinessBrain />
        <Results />
        <Trust />
        <Curve />
      </Box>
      <Pricing />
      <Box sx={{ backgroundImage: bandGradient(theme.palette.alternate.main) }}>
        <Contact />
        <Curve />
      </Box>
      <Cta />
    </>
  );
}
