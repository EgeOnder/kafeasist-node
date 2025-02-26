import { magicLinkClient } from "better-auth/client/plugins";
import { nextCookies } from "better-auth/next-js";
import { createAuthClient } from "better-auth/react";

import { env } from "~/env";

export const authClient = createAuthClient({
  baseURL: env.NEXT_PUBLIC_AUTH_PROXY_URL,
  plugins: [nextCookies(), magicLinkClient()],
});
