import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

import { auth } from "./auth";
import { PORT } from "./config";

const app = new Hono();

app.use(
  "/api/**",
  cors({
    origin: ["*"], // TODO: Set the allowed origins
    allowHeaders: ["Authorization", "Content-Type"],
    allowMethods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  }),
);

app.on(["POST", "GET"], "/api/**", (c) => {
  return auth.handler(c.req.raw);
});

serve({
  fetch: app.fetch,
  port: PORT,
});
