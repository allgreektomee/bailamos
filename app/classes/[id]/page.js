import { notFound } from "next/navigation";
import CourseDetail from "@/components/CourseDetail";
import { classes, getCourse, resolveToday } from "@/lib/curriculum";

export function generateStaticParams() {
  return classes.map((course) => ({ id: course.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const course = getCourse(id);
  if (!course) return { title: "커리큘럼" };
  return { title: `${course.name} · BAILAMOS TANGO` };
}

export default async function Page({ params, searchParams }) {
  const { id } = await params;
  const course = getCourse(id);
  if (!course) notFound();

  const { date } = await searchParams;
  const raw = Array.isArray(date) ? date[0] : date;
  const today = resolveToday(raw);
  const dateQuery = typeof raw === "string" && /^\d{4}-\d{2}-\d{2}$/.test(raw) ? `?date=${raw}` : "";

  return <CourseDetail courseId={course.id} today={today} dateQuery={dateQuery} />;
}
