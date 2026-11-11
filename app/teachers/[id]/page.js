import { notFound } from "next/navigation";
import TeacherArticle from "@/components/TeacherArticle";
import { getTeacher, performances, teachers } from "@/lib/teachers";

export function generateStaticParams() {
  return teachers.map((teacher) => ({ id: teacher.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const teacher = getTeacher(id);
  if (!teacher) return { title: "전문강사" };
  return { title: `${teacher.name} · BAILAMOS TANGO` };
}

export default async function Page({ params }) {
  const { id } = await params;
  const teacher = getTeacher(id);
  if (!teacher) notFound();
  return <TeacherArticle teacher={teacher} performances={performances} />;
}
