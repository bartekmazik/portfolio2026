"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function sendContactEmail(data: z.infer<typeof schema>) {
  const parsed = schema.safeParse(data);
  if (!parsed.success) return { error: "Invalid data" };

  const { name, email, message } = parsed.data;

  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: "bartlomiej.mazik1@gmail.com",
    subject: `New message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) return { error: "Failed to send email" };
  return { success: true };
}
