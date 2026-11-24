import HomePage from "@/components/HomePage";
import { getPosts } from "@/lib/blog";

export default async function Page({ searchParams }) {
  const { date } = await searchParams;
  const raw = Array.isArray(date) ? date[0] : date;
  const dateQuery = typeof raw === "string" && /^\d{4}-\d{2}-\d{2}$/.test(raw) ? `?date=${raw}` : "";

  // 가장 최근 블로그 글 하나 (주간일정과 문의 사이에 보여 준다)
  const latest = getPosts()[0] || null;

  return <HomePage dateQuery={dateQuery} latestPost={latest} />;
}
