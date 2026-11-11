import TeacherPair from "@/components/TeacherPair";
import { performances, teachers } from "@/lib/teachers";

export const metadata = {
  title: "엘리 · 지운 · BAILAMOS TANGO",
};

export default function Page() {
  return <TeacherPair teachers={teachers} performances={performances} />;
}
