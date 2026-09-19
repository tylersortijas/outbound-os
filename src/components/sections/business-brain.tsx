"use client";

import Box from "@mui/material/Box";
import { Section, SectionHeader } from "@/components/primitives";

// A single call, traced through the Business Brain. Mirrors theFront's
// "yarn install" terminal: commands in light grey, results as green comments.
const TRACE: Array<[kind: "cmd" | "note" | "gap", text?: string]> = [
  ["cmd", "> receptionist.answer(incoming_call)"],
  ["note", "// Reading the Business Brain before acting..."],
  ["gap"],
  ["cmd", "> brain.service_area(\"75034\")"],
  ["note", "// ✓ In zone · Zone A"],
  ["cmd", "> brain.pricebook(\"ac_diagnostic\")"],
  ["note", "// ✓ $189 · credited toward the repair"],
  ["cmd", "> brain.hours(now)"],
  ["note", "// ✓ After-hours rule · on-call tech: Marcus"],
  ["gap"],
  ["cmd", "> calendar.book(\"Tue 08:00\", truck=2)"],
  ["note", "// Booked. Confirmation texted. Logged · reversible."],
];

export function BusinessBrain() {
  return (
    <Section id="how-it-works" sx={{ scrollMarginTop: 80 }}>
      <Box maxWidth={600} mx="auto">
        <SectionHeader
          title="Every employee reads your Business Brain first"
          subtitle="We load your services, pricebook, service area, hours, crew, and escalation rules during onboarding. Every call, text, and booking is checked against it — your facts, not generic guesses."
        />
        <Box
          component="pre"
          aria-label="Example: how the AI Receptionist checks the Business Brain before booking a job"
          sx={{
            m: 0,
            p: 2,
            // A leading "\n" inside <pre> is dropped by the HTML parser and breaks
            // hydration, so the top breathing room comes from padding instead.
            pt: 5,
            borderRadius: 2,
            bgcolor: "#21325b",
            color: "#dcdcdc",
            fontFamily: "monospace",
            fontSize: { xs: 13, sm: 16 },
            lineHeight: 1.5,
            overflowX: "auto",
            whiteSpace: "pre",
          }}
        >
          {TRACE.map(([kind, text], i) =>
            kind === "gap" ? (
              "\n"
            ) : (
              <Box key={i} component="span" sx={{ color: kind === "note" ? "#57a64a" : "inherit", fontStyle: kind === "note" ? "italic" : "normal" }}>
                {text}
                {"\n"}
              </Box>
            ),
          )}
          {"\n"}
        </Box>
      </Box>
    </Section>
  );
}
