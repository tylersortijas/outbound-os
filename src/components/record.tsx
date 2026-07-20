import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";

const MONO = "var(--font-mono), ui-monospace, monospace";

/** Mono eyebrow/label — the deliberate "record system" kicker, not per-section decoration. */
export function RecordLabel({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      component="span"
      sx={{
        fontFamily: MONO,
        fontSize: "0.72rem",
        fontWeight: 500,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "text.secondary",
      }}
    >
      {children}
    </Typography>
  );
}

/** A single Business Brain field the workforce read to make a decision. */
export function RecordField({
  children,
  checked = false,
}: {
  children: React.ReactNode;
  checked?: boolean;
}) {
  return (
    <Stack
      direction="row"
      spacing={0.75}
      alignItems="center"
      sx={{
        px: 1,
        py: 0.5,
        borderRadius: "4px",
        border: "1px solid",
        borderColor: "divider",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#12151A" : "#F5F6F8",
      }}
    >
      {checked && (
        <CheckRoundedIcon
          sx={{ fontSize: 13, color: "primary.main" }}
          aria-hidden
        />
      )}
      <Typography
        component="span"
        sx={{
          fontFamily: MONO,
          fontSize: "0.72rem",
          letterSpacing: "0.03em",
          color: "text.secondary",
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </Typography>
    </Stack>
  );
}

/** The trust spine, made visible: every decision is logged and reversible. */
export function LoggedTag() {
  return (
    <Stack
      direction="row"
      spacing={0.75}
      alignItems="center"
      component="span"
      sx={{
        px: 1,
        py: 0.5,
        borderRadius: "4px",
        border: "1px solid",
        borderColor: "primary.main",
      }}
    >
      <HistoryRoundedIcon sx={{ fontSize: 13, color: "primary.main" }} aria-hidden />
      <Box
        component="span"
        sx={{
          fontFamily: MONO,
          fontSize: "0.68rem",
          fontWeight: 500,
          letterSpacing: "0.08em",
          color: (theme) =>
            theme.palette.mode === "dark" ? "#F0862F" : "#A8480C",
        }}
      >
        LOGGED · REVERSIBLE
      </Box>
    </Stack>
  );
}
