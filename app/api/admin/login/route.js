import { adminCookieHeader, adminToken } from "@/lib/adminAuth";
import { timingSafeEqual } from "crypto";

export async function POST(request) {
  const expected = process.env.ADMIN_PASSWORD || "";
  if (!expected) {
    return Response.json({ ok: false, error: "unconfigured" }, { status: 503 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const given = String(body.password || "");
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  const same = a.length === b.length && timingSafeEqual(a, b);
  if (!same) {
    return Response.json({ ok: false, error: "denied" }, { status: 401 });
  }

  return new Response(JSON.stringify({ ok: true }), {
    headers: {
      "content-type": "application/json",
      "set-cookie": adminCookieHeader(request, adminToken()),
    },
  });
}
