import { applyCourses } from "@/lib/apply";
import { classes } from "@/lib/curriculum";

const nameByOption = new Map(
  applyCourses.map((course) => {
    if (course.id === "practica") return [course.option, "쁘락"];
    const found = classes.find((item) => item.id === course.id);
    return [course.option, found?.name || course.option];
  }),
);

export function courseLabel(option) {
  return nameByOption.get(option) || option || "";
}

export function courseOptions(rows) {
  const known = applyCourses.map((course) => courseLabel(course.option));
  const extra = rows.map((row) => courseLabel(row.course)).filter((name) => name && !known.includes(name));
  return [...known, ...new Set(extra)];
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
