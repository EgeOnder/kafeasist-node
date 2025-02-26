export { EmailVerification } from "./emails/EmailVerification";
export { ResetPassword } from "./emails/ResetPassword";
export { MagicLink } from "./emails/MagicLink";

export { sendEmail } from "./utils/send-email";
export type FromEmail = "team" | "destek" | "no-reply";
