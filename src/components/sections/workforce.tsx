"use client";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import type { SvgIconComponent } from "@mui/icons-material";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import { Section, SectionHeader } from "@/components/primitives";

interface Worker {
  name: string;
  blurb: string;
  icon: SvgIconComponent;
}

const frontOffice: Worker[] = [
  {
    name: "AI Receptionist",
    blurb: "Answers every call in your company's voice, quotes from your pricebook, and books the job — 24/7.",
    icon: SupportAgentOutlinedIcon,
  },
  {
    name: "AI Follow-up Specialist",
    blurb: "Texts back missed calls in seconds and chases every unbooked lead until they book or opt out.",
    icon: SmsOutlinedIcon,
  },
  {
    name: "AI Review Manager",
    blurb: "Requests a review after every completed job, and routes unhappy customers to you before they post.",
    icon: StarBorderRoundedIcon,
  },
];

const fullWorkforce: Worker[] = [
  {
    name: "AI Office Manager",
    blurb: "Keeps customer records, notes, and daily admin in order so nothing slips through.",
    icon: AssignmentOutlinedIcon,
  },
  {
    name: "AI Scheduling & Dispatch",
    blurb: "Books and routes jobs against your calendar and crew availability.",
    icon: EventAvailableOutlinedIcon,
  },
  {
    name: "AI Estimator",
    blurb: "Drafts estimates from your pricebook for your one-tap approval — never sends without you.",
    icon: RequestQuoteOutlinedIcon,
  },
  {
    name: "AI Collections",
    blurb: "Follows up on unpaid invoices — polite, persistent, and on schedule.",
    icon: PaymentsOutlinedIcon,
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      sx={{ textTransform: "uppercase", fontWeight: 500, textAlign: "center", mb: 3 }}
      color="text.secondary"
    >
      {children}
    </Typography>
  );
}

function WorkerItem({ worker }: { worker: Worker }) {
  const theme = useTheme();
  const Icon = worker.icon;
  return (
    <Box width={1} height={1}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar
          sx={{
            marginBottom: 2,
            bgcolor: alpha(theme.palette.primary.main, 0.1),
            color: theme.palette.primary.main,
            width: 60,
            height: 60,
          }}
        >
          <Icon />
        </Avatar>
        <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 500 }} align="center">
          {worker.name}
        </Typography>
        <Typography align="center" color="text.secondary">
          {worker.blurb}
        </Typography>
      </Box>
    </Box>
  );
}

export function Workforce() {
  return (
    <Section id="workforce" sx={{ scrollMarginTop: 80 }}>
      <SectionHeader
        title="Hire AI employees, not another app"
        subtitle="Each AI employee owns one job and reads your Business Brain before it acts. Start with the front office; add the back office as you grow."
      />

      <Eyebrow>Front Office · live from day one</Eyebrow>
      <Grid container spacing={4}>
        {frontOffice.map((w) => (
          <Grid key={w.name} size={{ xs: 12, md: 4 }}>
            <WorkerItem worker={w} />
          </Grid>
        ))}
      </Grid>

      <Box marginTop={8}>
        <Eyebrow>Full Workforce · add as you grow</Eyebrow>
        <Grid container spacing={4}>
          {fullWorkforce.map((w) => (
            <Grid key={w.name} size={{ xs: 12, sm: 6, md: 3 }}>
              <WorkerItem worker={w} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Section>
  );
}
