import "server-only";
import nodemailer, { type Transporter } from "nodemailer";

export const mailConfig = {
  host: process.env.SMTP_HOST ?? "",
  port: Number(process.env.SMTP_PORT ?? "465"),
  user: process.env.SMTP_USER ?? "",
  password: process.env.SMTP_PASSWORD ?? "",
  from: process.env.SMTP_FROM ?? "",
  to: process.env.CONTACT_TO ?? "",
};

let transporter: Transporter | null = null;

export function getTransport(): Transporter {
  if (!mailConfig.host || !mailConfig.user || !mailConfig.password) {
    throw new Error("SMTP is not configured");
  }
  if (!mailConfig.from || !mailConfig.to) {
    throw new Error("SMTP_FROM and CONTACT_TO are required");
  }
  transporter ??= nodemailer.createTransport({
    host: mailConfig.host,
    port: mailConfig.port,
    secure: mailConfig.port === 465,
    auth: { user: mailConfig.user, pass: mailConfig.password },
  });
  return transporter;
}
