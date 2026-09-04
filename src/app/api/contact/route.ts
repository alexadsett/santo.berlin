import { Resend } from "resend";
import { autoReplyEmailHtml, notificationEmailHtml } from "@/lib/contact-email";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SOURCES = new Set(["home", "unifi", "shopware"]);

function badRequest(message: string) {
  return Response.json({ error: message }, { status: 400 });
}

export async function POST(request: Request) {
  let body: {
    name?: string;
    email?: string;
    message?: string;
    locale?: string;
    source?: string;
    company?: string; // honeypot
  };

  try {
    body = await request.json();
  } catch {
    return badRequest("invalid_json");
  }

  const { name, email, message, company } = body;
  const locale = body.locale === "en" ? "en" : "de";
  const source = SOURCES.has(body.source ?? "") ? (body.source as string) : "home";

  // honeypot: bots fill hidden fields — pretend success without sending
  if (company) {
    return Response.json({ ok: true });
  }

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return badRequest("invalid_name");
  }
  if (!email || typeof email !== "string" || !EMAIL_RE.test(email)) {
    return badRequest("invalid_email");
  }
  if (!message || typeof message !== "string" || message.trim().length < 5) {
    return badRequest("invalid_message");
  }
  if (message.length > 5000) {
    return badRequest("message_too_long");
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    console.error("Contact form is missing RESEND_API_KEY / CONTACT_FROM_EMAIL / CONTACT_TO_EMAIL");
    return Response.json({ error: "server_not_configured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const from = `santo.berlin <${fromEmail}>`;

  const notification = await resend.emails.send({
    from,
    to: toEmail,
    replyTo: email,
    subject: `Neue Anfrage von ${name} · ${source}`,
    html: notificationEmailHtml({ name, email, message, source }),
  });

  if (notification.error) {
    console.error("Failed to send contact notification email:", notification.error);
    return Response.json({ error: "send_failed" }, { status: 502 });
  }

  const autoReply = await resend.emails.send({
    from,
    to: email,
    subject: locale === "en" ? "We've received your message" : "Wir haben deine Nachricht erhalten",
    html: autoReplyEmailHtml({ name, locale }),
  });

  if (autoReply.error) {
    // the business already has the lead — don't fail the request over the auto-reply
    console.error("Failed to send contact auto-reply email:", autoReply.error);
  }

  return Response.json({ ok: true });
}
