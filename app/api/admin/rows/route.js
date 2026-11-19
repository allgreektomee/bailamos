import { cookies } from "next/headers";
import { adminCookie, adminCookieMatches } from "@/lib/adminAuth";

export async function GET() {
  const jar = await cookies();
  if (!adminCookieMatches(jar.get(adminCookie)?.value)) {
    return Response.json({ ok: false, error: "denied" }, { status: 401 });
  }

  const url = process.env.APPLY_WEBAPP_URL;
  const key = process.env.APPLY_READ_KEY;
  if (!url || !key) {
    return Response.json({ ok: false, error: "unconfigured" }, { status: 503 });
  }

  try {
    const readUrl = new URL(url);
    readUrl.searchParams.set("key", key);
    const opened = await fetch(readUrl, { redirect: "manual" });
    const location = opened.headers.get("location");
    if (opened.status !== 302 || !location) {
      return Response.json({ ok: false, error: "unread" }, { status: 502 });
    }
    const result = await fetch(location);
    const data = await result.json().catch(() => ({}));
    if (!result.ok || !data.ok || !Array.isArray(data.rows)) {
      return Response.json({ ok: false, error: "unread" }, { status: 502 });
    }
    return Response.json({ ok: true, rows: data.rows.slice().reverse() });
  } catch {
    return Response.json({ ok: false, error: "unread" }, { status: 502 });
  }
}
