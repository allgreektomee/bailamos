import { cookies } from "next/headers";
import { adminCookie, adminCookieMatches } from "@/lib/adminAuth";
import { pageApplications, pageSize } from "@/lib/adminFilter";

const fields = ["course", "from", "to", "role", "batch", "query"];

export async function GET(request) {
  const jar = await cookies();
  if (!adminCookieMatches(jar.get(adminCookie)?.value)) {
    return Response.json({ ok: false, error: "denied" }, { status: 401 });
  }

  const url = process.env.APPLY_WEBAPP_URL;
  const key = process.env.APPLY_READ_KEY;
  if (!url || !key) {
    return Response.json({ ok: false, error: "unconfigured" }, { status: 503 });
  }

  const incoming = new URL(request.url).searchParams;
  const filters = Object.fromEntries(fields.map((name) => [name, incoming.get(name) || ""]));
  const page = Math.max(1, Number(incoming.get("page")) || 1);
  const limit = Math.min(50, Math.max(1, Number(incoming.get("limit")) || pageSize));

  try {
    const readUrl = new URL(url);
    readUrl.searchParams.set("key", key);
    readUrl.searchParams.set("page", String(page));
    readUrl.searchParams.set("limit", String(limit));
    for (const name of fields) {
      if (filters[name]) readUrl.searchParams.set(name, filters[name]);
    }
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
    if (typeof data.total === "number") {
      return Response.json({
        ok: true,
        rows: data.rows,
        total: data.total,
        page: data.page || page,
        pages: data.pages || 1,
        limit: data.limit || limit,
        leader: data.leader || 0,
        follower: data.follower || 0,
      });
    }
    return Response.json({ ok: true, ...pageApplications(data.rows, filters, page, limit) });
  } catch {
    return Response.json({ ok: false, error: "unread" }, { status: 502 });
  }
}
