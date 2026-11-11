import HomePage from "@/components/HomePage";

export default async function Page({ searchParams }) {
  const { date } = await searchParams;
  const raw = Array.isArray(date) ? date[0] : date;
  const dateQuery = typeof raw === "string" && /^\d{4}-\d{2}-\d{2}$/.test(raw) ? `?date=${raw}` : "";

  return <HomePage dateQuery={dateQuery} />;
}
