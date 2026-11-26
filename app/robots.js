/** 검색 로봇 안내(https://btstango.com/robots.txt). 관리자 화면과 API 는 검색에 노출하지 않고, 사이트맵 위치를 알려 준다. */
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/admin", "/api/"] }],
    sitemap: "https://btstango.com/sitemap.xml",
  };
}
