"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Logo } from "@/components/navbar";
import { CALENDLY_URL, CONTACT_EMAIL } from "@/lib/site";

export function Footer() {
  return (
    <Box component="footer">
      <Divider />
      <Box maxWidth={1236} width={1} mx="auto" paddingX={2} paddingY={4}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          flexDirection={{ xs: "column", sm: "row" }}
          gap={2}
        >
          <Logo size="sm" />
          <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="center">
            <Box marginTop={1} marginRight={2}>
              <Link underline="none" component="a" href="#pricing" color="text.primary" variant="subtitle2">
                Pricing
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link underline="none" component="a" href={`mailto:${CONTACT_EMAIL}`} color="text.primary" variant="subtitle2">
                Email us
              </Link>
            </Box>
            <Box marginTop={1}>
              <Button variant="outlined" color="primary" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" size="small">
                Book a demo
              </Button>
            </Box>
          </Box>
        </Box>
        <Typography align="center" variant="subtitle2" color="text.secondary" gutterBottom sx={{ mt: 3 }}>
          &copy; OutboundOS. {new Date().getFullYear()}. All rights reserved
        </Typography>
        <Typography align="center" variant="caption" color="text.secondary" component="p">
          The managed AI workforce for home-service businesses — serving LA County
          and the San Gabriel Valley.
        </Typography>
      </Box>
    </Box>
  );
}
