import CourseDetail from "@/components/CourseDetail";
import { practica, resolveToday } from "@/lib/curriculum";

export const metadata = {
  title: `${practica.name} · BAILAMOS TANGO`,
};

/** 쁘락띠까 상세 페이지. 정규 수업과 같은 CourseDetail 로 그리되, 목록에는 오르지 않는 과정이라
 *  app/classes/[id] 와 따로 둔다(classes 배열에 넣으면 홈 정규 수업 카드로 한 번 더 나온다). */
export default async function Page({ searchParams }) {
  const params = await searchParams;
  const { date } = params;
  const raw = Array.isArray(date) ? date[0] : date;
  const today = resolveToday(raw);
  const dateQuery = typeof raw === "string" && /^\d{4}-\d{2}-\d{2}$/.test(raw) ? `?date=${raw}` : "";

  return <CourseDetail courseId={practica.id} today={today} dateQuery={dateQuery} />;
}
