"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";

const topRow = [
  {
    name: "Maria Gonzalez",
    role: "Owner, Bella Glow Med Spa",
    avatar: "/images/avatars/avatar-1.jpg",
    quote:
      "Before OutboundOS, we were losing leads every weekend. Now every missed call gets a text back in under a minute. We booked 34 new appointments in the first month alone.",
  },
  {
    name: "James Carter",
    role: "Founder, Carter & Sons Plumbing",
    avatar: "/images/avatars/avatar-2.jpg",
    quote:
      "I used to spend my evenings returning calls. Now the system handles it. My booking rate doubled and I actually get to have dinner with my family.",
  },
  {
    name: "Dr. Priya Patel",
    role: "Practice Manager, Patel Dental Group",
    avatar: "/images/avatars/avatar-3.jpg",
    quote:
      "We went from a 40% no-show rate to under 15%. The automated reminders and rebooking flows pay for themselves ten times over.",
  },
  {
    name: "David Nguyen",
    role: "Owner, Prestige Auto Detail",
    avatar: "/images/avatars/avatar-6.jpg",
    quote:
      "Our after-hours leads used to disappear. Now they get an instant reply and most of them book before we even open the next morning.",
  },
];

const bottomRow = [
  {
    name: "Marcus Thompson",
    role: "Owner, Elite Lawn & Landscape",
    avatar: "/images/avatars/avatar-8.jpg",
    quote:
      "I was skeptical about automation, but the results speak for themselves. We captured 60+ leads last quarter that would have gone to voicemail.",
  },
  {
    name: "Sarah Kim",
    role: "Director, Serenity Wellness Studio",
    avatar: "/images/avatars/avatar-5.jpg",
    quote:
      "OutboundOS didn't just give us a system — they gave us predictability. We know exactly how many leads come in and how many convert. No more guessing.",
  },
  {
    name: "Rachel Foster",
    role: "Owner, Foster Family Law",
    avatar: "/images/avatars/avatar-7.jpg",
    quote:
      "Every potential client that calls after hours now gets an immediate response. We signed 12 new cases in the first 6 weeks — cases we would have lost.",
  },
  {
    name: "Tony Ramirez",
    role: "GM, Ramirez HVAC Services",
    avatar: "/images/avatars/avatar-4.jpg",
    quote:
      "The ROI was obvious within the first two weeks. We stopped losing leads to competitors who simply picked up the phone faster.",
  },
];

interface TestimonialCardProps {
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

function TestimonialCard({ name, role, avatar, quote }: TestimonialCardProps) {
  return (
    <Card
      sx={{
        minWidth: { xs: 300, sm: 360 },
        maxWidth: { xs: 300, sm: 360 },
        flexShrink: 0,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.default",
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <FormatQuoteIcon
          sx={{ fontSize: 28, color: "primary.main", opacity: 0.3, mb: 1 }}
        />
        <Stack direction="row" spacing={0.5} sx={{ mb: 1.5 }}>
          {[1, 2, 3, 4, 5].map((s) => (
            <StarIcon key={s} sx={{ fontSize: 14, color: "#facc15" }} />
          ))}
        </Stack>
        <Typography
          variant="body2"
          sx={{
            lineHeight: 1.7,
            color: "text.primary",
            fontStyle: "italic",
            mb: 2.5,
          }}
        >
          &ldquo;{quote}&rdquo;
        </Typography>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Avatar src={avatar} alt={name} sx={{ width: 36, height: 36 }} />
          <Box>
            <Typography variant="caption" fontWeight={600} display="block">
              {name}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ fontSize: "0.7rem" }}
            >
              {role}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

function MarqueeRow({
  items,
  direction,
  duration,
}: {
  items: TestimonialCardProps[];
  direction: "left" | "right";
  duration: number;
}) {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items];

  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2.5,
          width: "fit-content",
          animation: `marquee-${direction} ${duration}s linear infinite`,
          "&:hover": {
            animationPlayState: "paused",
          },
          "@keyframes marquee-left": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" },
          },
          "@keyframes marquee-right": {
            "0%": { transform: "translateX(-50%)" },
            "100%": { transform: "translateX(0)" },
          },
        }}
      >
        {doubled.map((item, i) => (
          <TestimonialCard key={`${item.name}-${i}`} {...item} />
        ))}
      </Box>
    </Box>
  );
}

export function Testimonials() {
  return (
    <Box
      component="section"
      id="testimonials"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        py: { xs: 10, sm: 14 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="md" sx={{ mb: 8 }}>
        <Box textAlign="center">
          <Typography
            variant="overline"
            color="text.secondary"
            letterSpacing={3}
          >
            Testimonials
          </Typography>
          <Typography
            variant="h2"
            sx={{
              mt: 1,
              fontSize: { xs: "1.75rem", sm: "2.25rem" },
              color: "text.primary",
            }}
          >
            What Our Clients Say
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 2, maxWidth: 500, mx: "auto", fontSize: "1.1rem" }}
          >
            Service businesses trust OutboundOS to capture every lead and book
            every appointment.
          </Typography>
        </Box>
      </Container>

      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(59,130,246,0.05)"
              : "rgba(37,99,235,0.03)",
          py: 4,
        }}
      >
        <Stack spacing={2.5}>
          <MarqueeRow items={topRow} direction="left" duration={40} />
          <MarqueeRow items={bottomRow} direction="right" duration={45} />
        </Stack>
      </Box>
    </Box>
  );
}
