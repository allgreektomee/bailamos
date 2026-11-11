/** 링크트리(linkfly.to/71213aiVH8XDf)에 공개된 주소. 문의는 왓츠앱부터. */

export const contacts = [
  { name: "WhatsApp", icon: "whatsapp", href: "https://wa.me/qr/ZBOJE45SY377D1" },
  { name: "WeChat", icon: "wechat", href: "https://u.wechat.com/kJ5Bc9TgzjoDUTvfCJlVpao?s=2" },
  { name: "오픈채팅", icon: "chat", href: "https://open.kakao.com/o/gLyXC1Uc", note: "6589" },
];

export const channels = [
  { name: "Instagram", icon: "instagram", href: "https://www.instagram.com/bailamos_tango_seoul/" },
  { name: "YouTube", icon: "youtube", href: "https://www.youtube.com/@ellytango77" },
  { name: "Facebook", icon: "facebook", href: "https://www.facebook.com/p/Studio-Elly-100057254328366/" },
  { name: "네이버 카페", icon: "naver", href: "https://cafe.naver.com/bailamostango" },
];

export const studioAddress = "서울특별시 마포구 연남동 563-10";

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
