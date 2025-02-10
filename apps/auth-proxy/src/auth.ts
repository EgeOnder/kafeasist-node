import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "@kafeasist/db/client";

export const auth = betterAuth({
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
     * Require the user to verify their email address before signing in.
     * @see https://www.better-auth.com/docs/concepts/email#adding-email-verification-to-your-app
     */
    requireEmailVerification: true,
    sendOnSignUp: true,

    /*
     * Configure the minimum length of a password.
     * @see https://www.better-auth.com/docs/authentication/email-password#configuration
     */
    minPasswordLength: 8,

    /*
     * Send a password reset email to the user.
     * @todo Implement this function.
     */
    sendResetPassword: async ({ user, url, token }, request) => {
      // TODO: Send the reset password email
    },
  },
});
