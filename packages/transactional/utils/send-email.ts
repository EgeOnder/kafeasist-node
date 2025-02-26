import type { JSX } from "react";

import { FromEmail } from "..";
import { resend } from "../lib/resend";

interface SendEmailOptions {
  from: FromEmail;
  to: string;
  subject: string;
  template: JSX.Element;
}

export async function sendEmail(options: SendEmailOptions) {
  const { from, to, subject, template } = options;

  await resend.emails.send({
    from: from + "@kafeasist.com",
    to,
    subject,
    react: template,
  });
}
