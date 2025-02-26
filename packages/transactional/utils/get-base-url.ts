export function getBaseUrl() {
  return process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";
}
