import { createHmac, timingSafeEqual } from "crypto";

export const adminCookie = "bailamos_admin";

export function adminToken() {
  const password = process.env.ADMIN_PASSWORD || "";
  if (!password) return "";
  return createHmac("sha256", password).update("bailamos-admin-v1").digest("base64url");
}

export function adminCookieMatches(value) {
  const expected = adminToken();
  if (!expected || !value) return false;
  const given = Buffer.from(String(value));
  const want = Buffer.from(expected);
  if (given.length !== want.length) return false;
  return timingSafeEqual(given, want);
}

export function adminCookieHeader(request, token) {
  const secure = request.headers.get("x-forwarded-proto") === "https";
  const parts = [
    `${adminCookie}=${token}`,
    "HttpOnly",
    "Path=/",
    "SameSite=Lax",
    "Max-Age=43200",
  ];
  if (secure) parts.push("Secure");
  return parts.join("; ");
}
