"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Grid from "@mui/material/Grid";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  };

  if (status === "success") {
    return (
      <Box sx={{ textAlign: "center", py: 4 }}>
        <CheckCircleIcon sx={{ fontSize: 48, color: "success.main", mb: 2 }} />
        <Typography variant="h6" fontWeight={600}>
          Message sent.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          We&apos;ll get back to you within 24 hours.
        </Typography>
        <Button
          variant="outlined"
          sx={{ mt: 3 }}
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </Box>
    );
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={2.5}>
        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              fullWidth
              size="medium"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
              required
              fullWidth
              size="medium"
            />
          </Grid>
        </Grid>

        <TextField
          label="Company"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Your business name"
          fullWidth
          size="medium"
        />

        <TextField
          label="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your business and what you're looking to solve."
          required
          fullWidth
          size="medium"
          multiline
          rows={4}
        />

        {status === "error" && (
          <Alert severity="error">{errorMessage}</Alert>
        )}

        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </Button>
      </Stack>
    </Box>
  );
}
