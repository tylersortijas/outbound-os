"use client";

// Decorative product UI for the hero's tilted wall. Each card is a miniature,
// coded screen of the OutboundOS board for the fictional demo business
// (Arctic Air Heating & Cooling), standing in for theFront's page screenshots.

import Box from "@mui/material/Box";
import { alpha, useTheme } from "@mui/material/styles";
import type { ComponentType, ReactNode } from "react";

function Shell({ title, tag, children }: { title: string; tag?: string; children: ReactNode }) {
  const theme = useTheme();
  return (
    <Box sx={{ height: 1, display: "flex", flexDirection: "column", fontSize: 11, color: "text.primary", overflow: "hidden" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, pb: 1, mb: 1.25, borderBottom: 1, borderColor: "divider" }}>
        <Box sx={{ width: 14, height: 14, borderRadius: "3px", bgcolor: "text.primary", color: "background.paper", fontSize: 9, fontWeight: 800, display: "grid", placeItems: "center" }}>
          O
        </Box>
        <Box sx={{ fontWeight: 700, fontSize: 11 }}>{title}</Box>
        {tag && (
          <Box sx={{ ml: "auto", px: 0.75, borderRadius: 1, fontSize: 9, lineHeight: "16px", bgcolor: alpha(theme.palette.primary.main, 0.1), color: "primary.main", fontWeight: 600 }}>
            {tag}
          </Box>
        )}
      </Box>
      {children}
    </Box>
  );
}

function Line({ w = "100%", strong = false }: { w?: string | number; strong?: boolean }) {
  const theme = useTheme();
  return <Box sx={{ height: 6, width: w, borderRadius: 3, mb: 0.75, bgcolor: alpha(theme.palette.text.primary, strong ? 0.18 : 0.08) }} />;
}

function Bubble({ from, children }: { from: "ai" | "caller"; children: ReactNode }) {
  const theme = useTheme();
  const ai = from === "ai";
  return (
    <Box
      sx={{
        alignSelf: ai ? "flex-start" : "flex-end",
        maxWidth: "82%",
        px: 1.25,
        py: 0.75,
        mb: 0.75,
        borderRadius: 2,
        lineHeight: 1.45,
        bgcolor: ai ? alpha(theme.palette.primary.main, 0.1) : alpha(theme.palette.text.primary, 0.06),
        color: ai ? "text.primary" : "text.secondary",
      }}
    >
      {children}
    </Box>
  );
}

function Row({ label, value, ok }: { label: string; value: string; ok?: boolean }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", py: 0.9, borderBottom: 1, borderColor: "divider" }}>
      <Box sx={{ color: "text.secondary" }}>{label}</Box>
      <Box sx={{ fontWeight: 600, display: "flex", alignItems: "center", gap: 0.5 }}>
        {value}
        {ok && <Box component="span" sx={{ color: "primary.main" }}>✓</Box>}
      </Box>
    </Box>
  );
}

function Btn({ children, outlined }: { children: ReactNode; outlined?: boolean }) {
  return (
    <Box
      sx={{
        display: "inline-block",
        px: 1.25,
        py: 0.5,
        borderRadius: "4px",
        fontSize: 10,
        border: 1,
        borderColor: "primary.main",
        bgcolor: outlined ? "transparent" : "primary.main",
        color: outlined ? "primary.main" : "common.white",
      }}
    >
      {children}
    </Box>
  );
}

export function LiveCall() {
  return (
    <Shell title="AI Receptionist" tag="LIVE CALL">
      <Box sx={{ color: "text.secondary", mb: 1 }}>Riley · after-hours · 9:47 PM</Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Bubble from="ai">Thanks for calling Arctic Air, this is Riley. How can I help?</Bubble>
        <Bubble from="caller">My AC stopped blowing cold air.</Bubble>
        <Bubble from="ai">I can get a tech out. You&apos;re in our service area — diagnostic is $189.</Bubble>
        <Bubble from="caller">Tomorrow morning works.</Bubble>
        <Bubble from="ai">Booked for Tue 8:00 AM. I&apos;ll text you a confirmation.</Bubble>
      </Box>
    </Shell>
  );
}

export function BrainRecord() {
  return (
    <Shell title="Business Brain" tag="READ FIRST">
      <Box sx={{ fontWeight: 700, fontSize: 13, mb: 0.5 }}>Checked before acting</Box>
      <Box sx={{ color: "text.secondary", mb: 1 }}>Every worker queries these records.</Box>
      <Row label="Service area" value="In zone" ok />
      <Row label="Pricebook" value="$189 diagnostic" ok />
      <Row label="Business hours" value="After-hours rule" ok />
      <Row label="On-call tech" value="Marcus" ok />
      <Row label="Escalation" value="Gas smell → owner" ok />
    </Shell>
  );
}

function Booking() {
  const theme = useTheme();
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  return (
    <Shell title="Scheduling" tag="BOOKED">
      <Box sx={{ fontWeight: 700, fontSize: 13, mb: 1 }}>This week</Box>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0.5 }}>
        {days.map((d) => (
          <Box key={d} sx={{ textAlign: "center", color: "text.secondary", fontSize: 10 }}>{d}</Box>
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <Box
            key={i}
            sx={{
              height: 26,
              borderRadius: 1,
              bgcolor: i === 6 ? "primary.main" : alpha(theme.palette.text.primary, i % 3 === 0 ? 0.1 : 0.04),
            }}
          />
        ))}
      </Box>
      <Box sx={{ mt: 1.5, p: 1, borderRadius: 1, border: 1, borderColor: "divider" }}>
        <Box sx={{ fontWeight: 600 }}>Capacitor replacement</Box>
        <Box sx={{ color: "text.secondary" }}>Tue 8:00 AM · Truck 2</Box>
      </Box>
    </Shell>
  );
}

function MissedCallText() {
  return (
    <Shell title="Follow-up Specialist" tag="SMS">
      <Box sx={{ color: "text.secondary", mb: 1 }}>Missed call · texted back in seconds</Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Bubble from="ai">Hi, it&apos;s Arctic Air — sorry we missed your call! Need a hand with your heating or cooling?</Bubble>
        <Bubble from="caller">Yes, furnace is making a noise</Bubble>
        <Bubble from="ai">Got it. I have Thursday 1–3 PM or Friday 9–11 AM open. Which works?</Bubble>
        <Bubble from="caller">Friday</Bubble>
      </Box>
    </Shell>
  );
}

function ReviewRequest() {
  return (
    <Shell title="Review Manager" tag="SENT">
      <Box sx={{ fontWeight: 700, fontSize: 13, mb: 0.5 }}>Job complete</Box>
      <Box sx={{ color: "text.secondary", mb: 1.5 }}>Review request sent 2h after close-out.</Box>
      <Box sx={{ fontSize: 22, letterSpacing: 2, color: "secondary.main", mb: 1 }}>★★★★★</Box>
      <Line w="90%" />
      <Line w="75%" />
      <Line w="82%" />
      <Box sx={{ mt: 1.5, p: 1, borderRadius: 1, border: 1, borderColor: "divider", color: "text.secondary" }}>
        Unhappy customers are routed to you first — before they post.
      </Box>
    </Shell>
  );
}

function Estimate() {
  return (
    <Shell title="AI Estimator" tag="NEEDS APPROVAL">
      <Box sx={{ fontWeight: 700, fontSize: 13, mb: 1 }}>Draft estimate #1042</Box>
      <Row label="Condenser fan motor" value="$420" />
      <Row label="Labor · 2 hrs" value="$240" />
      <Row label="Diagnostic credit" value="−$189" />
      <Row label="Total" value="$471" />
      <Box sx={{ mt: 1.5, display: "flex", gap: 1 }}>
        <Btn>Approve & send</Btn>
        <Btn outlined>Edit</Btn>
      </Box>
    </Shell>
  );
}

function ActivityLog() {
  const theme = useTheme();
  const rows = [
    ["9:47 PM", "Answered call · booked Tue 8 AM"],
    ["9:48 PM", "Sent booking confirmation SMS"],
    ["10:02 PM", "Texted back missed call"],
    ["7:15 AM", "Requested review · job #3381"],
    ["8:30 AM", "Escalated gas-smell call to owner"],
  ];
  return (
    <Shell title="Activity" tag="LOGGED · REVERSIBLE">
      {rows.map(([t, a]) => (
        <Box key={t} sx={{ display: "flex", gap: 1, alignItems: "center", py: 0.9, borderBottom: 1, borderColor: "divider" }}>
          <Box sx={{ color: "text.secondary", width: 48, flexShrink: 0 }}>{t}</Box>
          <Box sx={{ flex: 1 }}>{a}</Box>
          <Box sx={{ fontSize: 9, px: 0.5, borderRadius: 1, bgcolor: alpha(theme.palette.text.primary, 0.06), color: "text.secondary" }}>Undo</Box>
        </Box>
      ))}
    </Shell>
  );
}

function Dispatch() {
  const theme = useTheme();
  const techs = [
    ["Marcus", 0.8],
    ["Dana", 0.55],
    ["Luis", 0.35],
    ["Priya", 0.65],
  ] as const;
  return (
    <Shell title="Dispatch" tag="TODAY">
      <Box sx={{ fontWeight: 700, fontSize: 13, mb: 1 }}>Crew load</Box>
      {techs.map(([name, load]) => (
        <Box key={name} sx={{ mb: 1.25 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
            <Box>{name}</Box>
            <Box sx={{ color: "text.secondary" }}>Zone {name === "Luis" ? "B" : "A"}</Box>
          </Box>
          <Box sx={{ height: 6, borderRadius: 3, bgcolor: alpha(theme.palette.text.primary, 0.08) }}>
            <Box sx={{ height: 1, width: `${load * 100}%`, borderRadius: 3, bgcolor: "primary.main" }} />
          </Box>
        </Box>
      ))}
      <Line w="70%" />
      <Line w="50%" />
    </Shell>
  );
}

function Collections() {
  return (
    <Shell title="AI Collections" tag="ON SCHEDULE">
      <Box sx={{ fontWeight: 700, fontSize: 13, mb: 1 }}>Open invoices</Box>
      <Row label="INV-2217 · 14 days" value="Reminder 2 sent" />
      <Row label="INV-2203 · 21 days" value="Call scheduled" />
      <Row label="INV-2198 · 30 days" value="Flagged for you" />
      <Box sx={{ mt: 1.5, color: "text.secondary", lineHeight: 1.5 }}>
        Polite, persistent, and on your terms.
      </Box>
      <Box sx={{ mt: 1 }}>
        <Btn outlined>View history</Btn>
      </Box>
    </Shell>
  );
}

export const HERO_MOCKS: ComponentType[][] = [
  [BrainRecord, LiveCall, Estimate],
  [MissedCallText, ActivityLog, Booking],
  [ReviewRequest, Dispatch, Collections],
];
