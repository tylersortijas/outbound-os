import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Read config per request: Resend's constructor throws on a missing key, and
    // at module scope that throw fails `next build` itself (page-data collection)
    // in any environment without the vars — e.g. Vercel preview deployments.
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL;

    if (!apiKey || !to) {
      console.error(
        `Contact form not configured: missing ${!apiKey ? "RESEND_API_KEY" : ""}${!apiKey && !to ? " and " : ""}${!to ? "CONTACT_EMAIL" : ""}.`
      );
      return Response.json(
        { error: "The contact form isn't available right now. Please email us directly." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "OutboundOS <onboarding@resend.dev>",
      to,
      subject: `New inquiry from ${name}${company ? ` (${company})` : ""}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "N/A")}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message)}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
