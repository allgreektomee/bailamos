import { adminCookie } from "@/lib/adminAuth";

export async function POST() {
  return new Response(JSON.stringify({ ok: true }), {
    headers: {
      "content-type": "application/json",
      "set-cookie": `${adminCookie}=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0`,
    },
  });
}
