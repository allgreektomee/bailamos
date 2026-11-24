import { applyCourses } from "@/lib/apply";
import { classes } from "@/lib/curriculum";

const nameByOption = new Map(
  applyCourses.map((course) => {
    if (course.id === "practica") return [course.option, "쁘락"];
    const found = classes.find((item) => item.id === course.id);
    return [course.option, found?.name || course.option];
  }),
);

/** 예전 신청 행에 남아 있는 옛 표기 → 현재 과정 이름 */
const legacyOptions = {
  "8 Axis · Pivot · Ocho": "ocho",
  "9 walk": "walk",
  "10 milonga": "milonga",
  "11 vals": "vals",
  "12 giro": "giro",
};

export function courseLabel(option) {
  const legacy = legacyOptions[option];
  if (legacy) {
    const found = applyCourses.find((course) => course.id === legacy);
    if (found) return nameByOption.get(found.option) || option;
  }
  return nameByOption.get(option) || option || "";
}

export const pageSize = 50;

export function courseOptions() {
  return applyCourses.map((course) => courseLabel(course.option));
}

export function filterApplications(rows, filters) {
  const query = String(filters.query || "").trim().toLowerCase();
  return rows.filter((row) => {
    const day = String(row.at || "").slice(0, 10);
    if (filters.course && courseLabel(row.course) !== filters.course) return false;
    if (filters.from && (!day || day < filters.from)) return false;
    if (filters.to && (!day || day > filters.to)) return false;
    if (filters.role && row.role !== filters.role) return false;
    if (filters.batch === "일반" && row.batch !== "일반 신청") return false;
    if (filters.batch === "기수" && row.batch !== "B.T 기수 신청") return false;
    if (query) {
      const hay = `${row.name || ""} ${row.phone || ""} ${row.depositor || ""}`.toLowerCase();
      if (!hay.includes(query)) return false;
    }
    return true;
  });
}

export function countRoles(rows) {
  return {
    leader: rows.filter((row) => row.role === "리더").length,
    follower: rows.filter((row) => row.role === "팔로워").length,
  };
}

export function pageApplications(rows, filters, page, limit = pageSize) {
  const matched = filterApplications(rows.slice().reverse(), filters);
  const size = Math.min(50, Math.max(1, Number(limit) || pageSize));
  const total = matched.length;
  const pages = Math.max(1, Math.ceil(total / size) || 1);
  const current = Math.min(pages, Math.max(1, Number(page) || 1));
  const start = (current - 1) * size;
  const counts = countRoles(matched);
  return {
    rows: matched.slice(start, start + size),
    total,
    page: current,
    pages,
    limit: size,
    leader: counts.leader,
    follower: counts.follower,
  };
}
