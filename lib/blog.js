import fs from "node:fs";
import path from "node:path";

/** 블로그 글은 `content/blog/*.md` 에 둔다. 파일 이름이 주소(slug)가 된다.
 *  맨 위 `---` 사이에 title · date(YYYY-MM-DD) · summary · cover · source(원문 주소) · author 를 적는다.
 *  사진은 `public/blog/<글 이름>/` 에 넣고 본문에서 `![설명](/blog/<글 이름>/사진.jpg)` 로 쓴다. */
const dir = path.join(process.cwd(), "content", "blog");

function parse(raw) {
  const match = raw.replace(/\r\n/g, "\n").match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const meta = {};
  let body = raw;
  if (match) {
    body = match[2];
    match[1].split("\n").forEach((line) => {
      const i = line.indexOf(":");
      if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
    });
  }
  return { meta, body: body.trim() };
}

export function getPosts() {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const { meta } = parse(fs.readFileSync(path.join(dir, file), "utf8"));
      return { slug, title: meta.title || slug, date: meta.date || "", summary: meta.summary || "", cover: meta.cover || "", source: meta.source || "" };
    })
    .sort((a, b) => b.date.localeCompare(a.date) || b.slug.localeCompare(a.slug));
}

export function getPost(slug) {
  if (!/^[\w-]+$/.test(slug)) return null;
  const file = path.join(dir, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { meta, body } = parse(fs.readFileSync(file, "utf8"));
  return {
    slug,
    title: meta.title || slug,
    date: meta.date || "",
    summary: meta.summary || "",
    cover: meta.cover || "",
    source: meta.source || "",
    author: meta.author || "",
    body,
  };
}

/** 모든 블로그 글 맨 아래에 항상 붙는 태그. (# 없이 적는다) */
export const blogTags = [
  "아르헨티나탱고",
  "탱고",
  "땅고",
  "바일라모스땅고",
  "BailamosTango",
  "스튜디오엘리",
  "엘리스튜디오",
  "ElTorito",
  "Elly",
  "홍대탱고",
  "연남동탱고",
  "홍대땅고",
  "연남동땅고",
  "탱고레슨",
  "탱고수업",
  "탱고초급",
  "초급2기",
  "탱고2기",
  "탱고입문",
  "탱고배우기",
  "홍대탱고초급",
  "연남동탱고수업",
  "서울탱고",
  "아브라소",
  "소셜댄스",
  "커플댄스",
  "성인취미",
  "직장인취미",
  "홍대취미",
  "연남동취미",
];
