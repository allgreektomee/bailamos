import { applyBatchesFor, applyCourseById, hasBatch, applyRoles, applySources } from "@/lib/apply";

export async function POST(request) {
  const url = process.env.APPLY_WEBAPP_URL;
  if (!url) {
    return Response.json({ ok: false, error: "unconfigured" }, { status: 503 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const course = applyCourseById(body.course);
  const name = clip(body.name, 80);
  const depositor = clip(body.depositor, 80);
  const phone = clip(body.phone, 30);
  const note = clip(body.note, 2000);
  const sourceOther = clip(body.sourceOther, 80);
  const batch = course && hasBatch(course.id) ? body.batch : "";
  if (!course || !applyRoles.includes(body.role) || !applySources.includes(body.source)) {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }
  if (hasBatch(course.id) && !applyBatchesFor(course.id).includes(batch)) {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }
  // 인텐시브는 입금자명 칸 대신 수업료 안내가 있어 비워 두고 보낸다.
  if (!name || (!depositor && course.id !== "intensive") || !phone) {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }
  if (body.source === "기타" && !sourceOther) {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const payload = {
    course: course.option,
    role: body.role,
    batch,
    name,
    depositor,
    phone,
    source: body.source === "기타" ? `기타: ${sourceOther}` : body.source,
    note,
  };

  try {
    const posted = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      redirect: "manual",
    });
    const location = posted.headers.get("location");
    if (posted.status !== 302 || !location) {
      return Response.json({ ok: false, error: "upstream" }, { status: 502 });
    }
    const result = await fetch(location);
    const data = await result.json().catch(() => ({}));
    if (!result.ok || !data.ok) {
      return Response.json({ ok: false, error: "upstream" }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "upstream" }, { status: 502 });
  }
}

function clip(value, max) {
  return String(value || "").trim().slice(0, max);
}
