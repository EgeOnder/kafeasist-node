import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { magicLink } from "better-auth/plugins";

import { db } from "@kafeasist/db/client";
import {
  EmailVerification,
  MagicLink,
  ResetPassword,
  sendEmail,
} from "@kafeasist/transactional";

export { toNextJsHandler } from "better-auth/next-js";

export const auth = betterAuth({
  baseURL: process.env.NEXT_PUBLIC_AUTH_PROXY_URL,
  appName: process.env.NEXT_PUBLIC_SESSION_COOKIE_PREFIX,
  database: drizzleAdapter(db, {
    provider: "pg",
  }),

  advanced: {
    /*
     * Since we use a proxy that uses a subdomain to set the
     * session, we need to enable cross-subdomain cookies option.
     * @see https://www.better-auth.com/docs/concepts/cookies#cross-subdomain-cookies
     */
    crossSubDomainCookies: {
      enabled: true,
    },

    /*
     * Set the cookie prefix to avoid conflicts with other cookies.
     * @see https://www.better-auth.com/docs/concepts/cookies#cookie-prefix
     */
    cookiePrefix: "kafeasist",
  },

  emailAndPassword: {
    /*
     * Enable the emailAndPassword authentication provider.
     * @see https://www.better-auth.com/docs/authentication/email-password
     */
    enabled: true,

    /*
     * Automatically sign in the user after they sign up.
     */
    autoSignIn: true,

    /*
     * Don't require the user to verify their email address before signing in.
     * It will be handled client-side.
     * @see https://www.better-auth.com/docs/concepts/email#adding-email-verification-to-your-app
     */
    requireEmailVerification: false,
    sendOnSignUp: true,

    /*
     * Configure the minimum length of a password.
     * @see https://www.better-auth.com/docs/authentication/email-password#configuration
     */
    minPasswordLength: 8,

    /*
     * Send a password reset email to the user.
     * @see https://www.better-auth.com/docs/authentication/email-password#forget-password
     */
    sendResetPassword: async ({ user, url }) => {
      await sendEmail({
        from: "destek",
        to: user.email,
        subject: "kafeasist hesabınızın parolasını sıfırlayın",
        template: ResetPassword({ firstName: user.name, url }),
      });
    },
  },

  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      await sendEmail({
        from: "no-reply",
        to: user.email,
        subject: "kafeasist hesabınızı etkinleştirin",
        template: EmailVerification({ firstName: user.name, url }),
      });
    },
  },

  plugins: [
    magicLink({
      disableSignUp: true,
      sendMagicLink: async ({ email, url }) => {
        await sendEmail({
          from: "no-reply",
          to: email,
          subject: "kafeasist hesabınıza giriş yapın",
          template: MagicLink({ url }),
        });
      },
    }),
  ],
});
