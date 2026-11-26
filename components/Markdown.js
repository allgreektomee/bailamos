/** 블로그용 아주 작은 마크다운 변환기. 서버에서 그린다.
 *  지원: 문단(빈 줄 구분, 줄바꿈 유지) · ## / ### 제목 · - 목록 · > 인용 · --- 구분선
 *        ![설명](사진) · [글](주소) · [![설명](사진)](주소) · **굵게** */

const INLINE = /\[(!\[[^\]]*\]\([^)\s]+\)|[^\]]+)\]\(([^)\s]+)\)|!\[([^\]]*)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;

function isExternal(href) {
  return /^https?:\/\//.test(href);
}

function inline(text, keyPrefix = "i") {
  const out = [];
  let last = 0;
  let n = 0;
  for (const m of text.matchAll(INLINE)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const key = `${keyPrefix}${n++}`;
    if (m[2] !== undefined) {
      const external = isExternal(m[2]);
      out.push(
        <a key={key} href={m[2]} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
          {inline(m[1], `${key}-`)}
        </a>,
      );
    } else if (m[4] !== undefined) {
      // eslint-disable-next-line @next/next/no-img-element
      out.push(<img key={key} src={m[4]} alt={m[3]} loading="lazy" />);
    } else {
      out.push(<strong key={key}>{m[5]}</strong>);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function lines(text, key) {
  return text.split("\n").flatMap((line, i, all) => (i < all.length - 1 ? [...inline(line, `${key}-${i}-`), <br key={`${key}-br${i}`} />] : inline(line, `${key}-${i}-`)));
}

export default function Markdown({ source }) {
  const blocks = source.replace(/\r\n/g, "\n").split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);
  return (
    <div className="md">
      {blocks.map((block, index) => {
        const key = `b${index}`;
        if (/^---+$/.test(block)) return <hr key={key} />;
        const heading = block.match(/^(#{2,3})\s+(.+)$/);
        if (heading) {
          const Tag = heading[1].length === 2 ? "h2" : "h3";
          return <Tag key={key}>{inline(heading[2], key)}</Tag>;
        }
        if (block.split("\n").every((line) => /^[-*]\s+/.test(line))) {
          return (
            <ul key={key}>
              {block.split("\n").map((line, i) => (
                <li key={i}>{inline(line.replace(/^[-*]\s+/, ""), `${key}-${i}-`)}</li>
              ))}
            </ul>
          );
        }
        if (block.split("\n").every((line) => /^>\s?/.test(line))) {
          return <blockquote key={key}>{lines(block.replace(/^>\s?/gm, ""), key)}</blockquote>;
        }
        // "**네이버 클립 영상** · [주소](주소)" 한 줄은 링크 대신 클립 화면을 그 자리에서 보여 준다.
        const clip = block.match(/^\*\*네이버 클립 영상\*\*\s*·\s*\[[^\]]*\]\((https:\/\/(?:naver\.me\/[\w-]+|clip\.naver\.com\/[^)\s]+))\)$/);
        if (clip) {
          return (
            <figure key={key} className="md-clip">
              <div className="md-clip-frame">
                <iframe
                  src={clip[1]}
                  title="네이버 클립 영상"
                  loading="lazy"
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <figcaption>
                <a href={clip[1]} target="_blank" rel="noreferrer">
                  네이버 클립에서 보기 ›
                </a>
              </figcaption>
            </figure>
          );
        }
        // 사진 한 장만 있는 문단은 figure 로
        const image = block.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/);
        if (image) {
          return (
            <figure key={key}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image[2]} alt={image[1]} loading="lazy" />
            </figure>
          );
        }
        const linkedImage = block.match(/^\[!\[([^\]]*)\]\(([^)\s]+)\)\]\(([^)\s]+)\)$/);
        if (linkedImage) {
          return (
            <figure key={key}>
              <a href={linkedImage[3]} target="_blank" rel="noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={linkedImage[2]} alt={linkedImage[1]} loading="lazy" />
              </a>
            </figure>
          );
        }
        return <p key={key}>{lines(block, key)}</p>;
      })}
    </div>
  );
}
