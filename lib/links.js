/** 링크트리(linkfly.to/71213aiVH8XDf)에 공개된 주소. 문의는 카카오톡부터. */

export const contacts = [
  {
    name: "카카오톡",
    labelKey: "kakaoTalk",
    icon: "chat",
    href: "https://qr.kakao.com/talk/uLroCavPvprw_tMvOY_4z9XNErc-",
  },
  { name: "오픈채팅", icon: "chat", href: "https://open.kakao.com/o/gLyXC1Uc", note: "6589" },
  { name: "WeChat", icon: "wechat", href: "https://u.wechat.com/kC2y6kLstAvVQPrQ1bPtXFc?s=3" },
  { name: "WhatsApp", icon: "whatsapp", href: "https://wa.me/821044290315" },
];

export const blog = {
  href: "https://blog.naver.com/pjw810722",
  phoneHref: "https://m.blog.naver.com/pjw810722",
};

export const channels = [
  {
    name: "네이버 블로그",
    icon: "naver",
    labelKey: "naverBlog",
    href: blog.href,
    phoneHref: blog.phoneHref,
  },
  { name: "YouTube · Bailamos", icon: "youtube", href: "https://www.youtube.com/@bailamostangoseoul" },
  {
    name: "네이버 클립",
    icon: "naver",
    labelKey: "naverClip",
    href: "https://clip.naver.com/@bailamostango",
  },
  { name: "Instagram", icon: "instagram", href: "https://www.instagram.com/btstango_seoul/" },
  { name: "네이버 카페", icon: "naver", labelKey: "naverCafe", href: "https://cafe.naver.com/bailamostango" },
  {
    name: "Facebook",
    icon: "facebook",
    href: "https://www.facebook.com/bailamostangoseoul",
    phoneHref: "https://m.facebook.com/bailamostangoseoul",
  },
  { name: "YouTube · Elly", icon: "youtube", href: "https://www.youtube.com/@ellytango77" },
];

export const inmuFacebook = "https://www.facebook.com/groups/418752420053042";
export const inmuFacebookPhone = "https://m.facebook.com/groups/418752420053042";

export const studioAddress = "서울특별시 마포구 연남로3길 72";
// 스튜디오 좌표(카카오 지도 기준, 연남로3길 72). 상세 페이지 지도 임베드에 쓴다.
export const studioLat = 37.559724;
export const studioLng = 126.919058;

const mapQuery = encodeURIComponent(studioAddress);

export const maps = [
  {
    name: "구글맵",
    icon: "google",
    href: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
  },
  {
    name: "네이버맵",
    icon: "naver",
    href: `https://map.naver.com/p/search/${mapQuery}`,
  },
];

export const privateApply = {
  href: "https://cafe.naver.com/bailamostango/15",
  label: "개인레슨 신청",
};

export { applyHref } from "@/lib/apply";
