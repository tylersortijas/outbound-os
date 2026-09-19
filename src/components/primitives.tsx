import Box, { type BoxProps } from "@mui/material/Box";

/** theFront's page container: 1236px max, 16px gutters, 64px vertical rhythm. */
export function Section({ children, sx, ...rest }: BoxProps) {
  return (
    <Box
      maxWidth={1236}
      width={1}
      margin="0 auto"
      paddingX={2}
      paddingY={{ xs: 4, sm: 6, md: 8 }}
      sx={sx}
      {...rest}
    >
      {children}
    </Box>
  );
}

/** Soft top-to-alternate gradient used behind banded sections. */
export const bandGradient = (alternate: string) =>
  `linear-gradient(180deg, rgba(255,255,255,0) 0%, ${alternate} 100%)`;

/** The shallow curve that closes a banded section into the page background. */
export function Curve() {
  return (
    <Box
      component="svg"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 1920 100.1"
      aria-hidden
      sx={{ width: "100%", marginBottom: (theme) => theme.spacing(-1), display: "block", position: "relative", zIndex: 1 }}
    >
      <Box component="path" sx={{ fill: (theme) => theme.palette.background.paper }} d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z" />
    </Box>
  );
}

/** Centered section header: bold h4 title + h6 subtitle, as in theFront. */
export function SectionHeader({
  title,
  subtitle,
  align = "center",
  maxWidth,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  maxWidth?: number;
}) {
  return (
    <Box marginBottom={4} sx={{ textAlign: align, maxWidth, mx: align === "center" ? "auto" : 0 }}>
      <Box component="h2" sx={(t) => ({ ...t.typography.h4, fontWeight: 700, m: 0, mb: 2, color: "text.primary" })}>
        {title}
      </Box>
      {subtitle && (
        <Box component="p" sx={(t) => ({ ...t.typography.h6, fontWeight: 400, m: 0, color: "text.secondary" })}>
          {subtitle}
        </Box>
      )}
    </Box>
  );
}
