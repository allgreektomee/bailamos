import { classes } from "@/lib/curriculum";
import { getPosts } from "@/lib/blog";
import { teachers } from "@/lib/teachers";

const site = "https://btstango.com";

/** 구글 서치콘솔에 올리는 사이트맵 (https://btstango.com/sitemap.xml).
 *  페이지가 늘어나면(수업·강사·블로그 글) 자동으로 따라온다. 관리자·API 주소는 넣지 않는다. */
export default function sitemap() {
  const pages = ["/", "/argentine-tango", "/apply", "/blog", "/teachers"].map((path) => ({
    url: `${site}${path}`,
  }));

  const courses = classes.map((course) => ({ url: `${site}/classes/${course.id}` }));
  const people = teachers.map((teacher) => ({ url: `${site}/teachers/${teacher.id}` }));
  const posts = getPosts().map((post) => ({
    url: `${site}/blog/${post.slug}`,
    ...(post.date ? { lastModified: post.date } : {}),
  }));

  return [...pages, ...courses, ...people, ...posts];
}
