"use client";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import type { SvgIconComponent } from "@mui/icons-material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import HistoryIcon from "@mui/icons-material/History";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeader } from "@/components/primitives";

const pillars: { title: string; body: string; icon: SvgIconComponent }[] = [
  {
    title: "One job per employee",
    body: "Specialized AI employees that each own a single responsibility — not one bot pretending to do everything.",
    icon: WorkOutlineIcon,
  },
  {
    title: "Logged & reversible",
    body: "Every action is on the record and can be undone. You are never in the dark about what happened or why.",
    icon: HistoryIcon,
  },
  {
    title: "We run it, you don't",
    body: "Fully managed. No dashboards to learn, no automations to babysit — we build it and keep it running.",
    icon: HandymanOutlinedIcon,
  },
  {
    title: "Humans on the hard calls",
    body: "Your escalation rules hand the judgment calls straight to your team. The AI knows its limits.",
    icon: PersonOutlineIcon,
  },
  {
    title: "Works with your tools",
    body: "Connects to the phone line and field-service platform you already run — Jobber, Housecall Pro, or ServiceTitan.",
    icon: SyncAltIcon,
  },
  {
    title: "Never clocks out",
    body: "Nights, weekends, holidays, and the Monday-morning rush — every call and text gets an answer.",
    icon: ScheduleIcon,
  },
];

export function Trust() {
  const theme = useTheme();
  return (
    <Section id="why" sx={{ scrollMarginTop: 80 }}>
      <SectionHeader
        title="AI that works from your facts"
        subtitle="The objection we hear most isn't about AI — it's about AI making decisions without enough context. So context comes first."
        maxWidth={720}
      />
      <Grid container spacing={4}>
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <Grid key={p.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Reveal y={40} delay={i * 0.1} style={{ height: "100%" }}>
                <Box
                  component={Card}
                  padding={4}
                  width={1}
                  height={1}
                  sx={{ bgcolor: "background.paper", boxShadow: theme.customShadows.card, backgroundImage: "none" }}
                >
                  <Box display="flex" flexDirection="column">
                    <Avatar sx={{ width: 50, height: 50, marginBottom: 2, bgcolor: "primary.main", color: "common.white" }}>
                      <Icon />
                    </Avatar>
                    <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 500 }}>
                      {p.title}
                    </Typography>
                    <Typography color="text.secondary">{p.body}</Typography>
                  </Box>
                </Box>
              </Reveal>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}
