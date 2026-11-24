import { getPostsPage } from "@/lib/blog";

/** 블로그 목록을 최신순으로 `limit`(기본 10)개씩 돌려준다. `?offset=10` 처럼 이어서 불러온다. */
export async function GET(request) {
  const params = new URL(request.url).searchParams;
  const { posts, total } = getPostsPage(params.get("offset"), params.get("limit") || 10);
  return Response.json({ posts, total });
}
