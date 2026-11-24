import fs from "node:fs";
import path from "node:path";

/** 블로그 글은 `content/blog/*.md` 에 둔다. 파일 이름이 주소(slug)가 된다.
 *  맨 위 `---` 사이에 title · date(YYYY-MM-DD) · time(HH:MM, 같은 날 쓴 글의 순서) · summary · cover · source(원문 주소) · author 를 적는다.
 *  사진은 `public/blog/<글 이름>/` 에 넣고 본문에서 `![설명](/blog/<글 이름>/사진.jpg)` 로 쓴다. */
const dir = path.join(process.cwd(), "content", "blog");

/** 네이버 블로그 `Bailamos 이야기` 카테고리의 RSS. 홈 화면은 이 피드의 가장 최근 글까지 보고
 *  홈페이지에 아직 옮기지 않은 새 글이 있으면 그 글을 맨 앞에 보여 준다. */
const FEED_URL = "https://rss.blog.naver.com/pjw810722.xml";
const FEED_CATEGORY = "Bailamos 이야기";

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

/** 글의 순서를 정하는 값. 같은 날 쓴 글은 `time` 으로 가른다. */
const orderKey = (post) => `${post.date} ${post.time || "00:00"}`;

/** 최신 글이 늘 맨 앞에 오도록 날짜(와 시각) 내림차순으로 돌려준다. */
export function getPosts() {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const { meta } = parse(fs.readFileSync(path.join(dir, file), "utf8"));
      return {
        slug,
        title: meta.title || slug,
        date: meta.date || "",
        time: meta.time || "",
        summary: meta.summary || "",
        cover: meta.cover || "",
        source: meta.source || "",
      };
    })
    .sort((a, b) => orderKey(b).localeCompare(orderKey(a)) || b.slug.localeCompare(a.slug));
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
    time: meta.time || "",
    summary: meta.summary || "",
    cover: meta.cover || "",
    source: meta.source || "",
    author: meta.author || "",
    body,
  };
}

function feedText(item, tag) {
  const cdata = item.match(new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`));
  if (cdata) return cdata[1].trim();
  const plain = item.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return plain ? plain[1].trim() : "";
}

function feedDate(pubDate) {
  const t = new Date(pubDate);
  if (Number.isNaN(t.getTime())) return "";
  // 네이버 발행 시각은 한국 시간 기준이라 날짜도 한국 시간으로 읽는다.
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit" }).format(t);
}

function feedTime(pubDate) {
  const t = new Date(pubDate);
  if (Number.isNaN(t.getTime())) return "";
  return new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Seoul", hour: "2-digit", minute: "2-digit", hour12: false }).format(t);
}

/** 네이버 블로그 `Bailamos 이야기` 의 가장 최근 글. 아직 홈페이지 글로 옮기지 않은 새 글이 있으면
 *  홈 화면이 그 글을 네이버 원문으로 바로 보여 줄 수 있게 한다. 네이버가 응답하지 않으면 null. */
export async function getNaverLatest() {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 600 }, signal: AbortSignal.timeout(4000) });
    if (!res.ok) return null;
    const xml = await res.text();
    for (const item of xml.split("<item>").slice(1)) {
      if (feedText(item, "category") !== FEED_CATEGORY) continue;
      const title = feedText(item, "title");
      const link = feedText(item, "guid") || feedText(item, "link");
      const pubDate = feedText(item, "pubDate");
      const date = feedDate(pubDate);
      if (!title || !link || !date) return null;
      const body = feedText(item, "description");
      const image = body.match(/<img[^>]+src=["']([^"']+)["']/);
      const summary = body
        .replace(/<[^>]+>/g, " ")
        .replace(/&[a-z]+;/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 140);
      return {
        slug: "naver",
        href: link.split("?")[0],
        title,
        date,
        time: feedTime(pubDate),
        summary: summary ? `${summary}…` : "",
        cover: image ? image[1] : "",
        source: link.split("?")[0],
      };
    }
    return null;
  } catch {
    return null;
  }
}

/** 홈 화면에 보여 줄 글 하나. 홈페이지에 옮긴 글과 네이버의 가장 최근 글 중 더 새것을 쓴다. */
export async function getLatestPost() {
  const latest = getPosts()[0] || null;
  const naver = await getNaverLatest();
  if (naver && (!latest || orderKey(naver) > orderKey(latest))) return naver;
  return latest;
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
