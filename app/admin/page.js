import AdminGate from "@/components/AdminGate";

export const metadata = {
  title: "관리자 · BAILAMOS TANGO",
};

export default function Page() {
  return (
    <main className="admin">
      <AdminGate />
    </main>
  );
}
