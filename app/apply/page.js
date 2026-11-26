import ApplyForm from "@/components/ApplyForm";

export const metadata = {
  title: "수업 신청 · BAILAMOS TANGO",
};

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const raw = Array.isArray(params.course) ? params.course[0] : params.course;
  const course = typeof raw === "string" ? raw : "";
  return <ApplyForm initialCourse={course} />;
}
