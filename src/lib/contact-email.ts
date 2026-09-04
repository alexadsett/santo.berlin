const ACCENT = "#3654f4";
const INK = "#13151a";
const MUTED = "#6b6f76";
const BORDER = "#e6e2d9";
const BACKGROUND = "#fbfaf7";

function shell(bodyHtml: string) {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:32px 16px;background:${BACKGROUND};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${INK};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border:1px solid ${BORDER};border-radius:16px;overflow:hidden;">
            <tr>
              <td style="padding:24px 32px;background:${ACCENT};">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="width:32px;height:32px;border-radius:9999px;background:rgba(255,255,255,0.16);text-align:center;vertical-align:middle;font-weight:700;color:#ffffff;font-size:14px;">S</td>
                    <td style="padding-left:10px;color:#ffffff;font-weight:600;font-size:16px;">santo.berlin</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;border-top:1px solid ${BORDER};color:${MUTED};font-size:12px;">
                Adsett &amp; Heilmann GbR · Koppenstraße 79, 10243 Berlin
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function notificationEmailHtml({
  name,
  email,
  message,
  source,
}: {
  name: string;
  email: string;
  message: string;
  source: string;
}) {
  const safeMessage = message.replace(/\n/g, "<br/>");
  return shell(`
    <p style="margin:0 0 8px;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:${ACCENT};">Neue Anfrage · ${source}</p>
    <h1 style="margin:0 0 20px;font-size:22px;line-height:1.3;">${name} möchte von euch hören</h1>
    <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;margin-bottom:20px;">
      <tr>
        <td style="padding:4px 0;color:${MUTED};font-size:13px;width:90px;">Name</td>
        <td style="padding:4px 0;font-size:14px;">${name}</td>
      </tr>
      <tr>
        <td style="padding:4px 0;color:${MUTED};font-size:13px;">E-Mail</td>
        <td style="padding:4px 0;font-size:14px;"><a href="mailto:${email}" style="color:${ACCENT};">${email}</a></td>
      </tr>
    </table>
    <div style="padding:16px;background:${BACKGROUND};border:1px solid ${BORDER};border-radius:12px;font-size:14px;line-height:1.6;">
      ${safeMessage}
    </div>
  `);
}

export function autoReplyEmailHtml({
  name,
  locale,
}: {
  name: string;
  locale: string;
}) {
  const isDe = locale !== "en";
  const heading = isDe
    ? "Danke für deine Nachricht!"
    : "Thanks for reaching out!";
  const body = isDe
    ? `Hallo ${name},<br/><br/>wir haben deine Anfrage erhalten und melden uns innerhalb eines Werktags bei dir. Falls es eilt, erreichst du uns auch direkt unter <a href="mailto:hallo@santo.berlin" style="color:${ACCENT};">hallo@santo.berlin</a> oder telefonisch unter <a href="tel:+493023324319" style="color:${ACCENT};">+49 30 23324319</a>.<br/><br/>Bis gleich,<br/>Euer santo.berlin-Team`
    : `Hi ${name},<br/><br/>we've received your message and will get back to you within one business day. If it's urgent, feel free to reach us directly at <a href="mailto:hallo@santo.berlin" style="color:${ACCENT};">hallo@santo.berlin</a> or by phone at <a href="tel:+493023324319" style="color:${ACCENT};">+49 30 23324319</a>.<br/><br/>Talk soon,<br/>The santo.berlin team`;

  return shell(`
    <h1 style="margin:0 0 16px;font-size:22px;line-height:1.3;">${heading}</h1>
    <p style="margin:0;font-size:14px;line-height:1.7;color:${INK};">${body}</p>
  `);
}
