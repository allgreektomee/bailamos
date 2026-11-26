"use client";

import { BrandIcon } from "@/components/ContactLinks";
import { useI18n } from "@/components/Language";
import { maps, studioLat, studioLng } from "@/lib/links";

/** 지도 임베드는 언어권별 이름 표기를 따른다. */
const MAP_LANG = { ko: "ko", en: "en", zh: "zh-CN", ja: "ja", es: "es" };

/** 수업 신청 페이지(/apply) 맨 아래 오시는 길 박스. 블로그처럼 지도를 한눈에 보여 준다. */
export default function StudioLocation() {
  const { lang, t } = useI18n();
  const src = `https://maps.google.com/maps?q=${studioLat},${studioLng}&z=16&hl=${MAP_LANG[lang] || "ko"}&output=embed`;

  return (
    <section className="card detail-location">
      <h3>{t("directions")}</h3>
      <p className="loc-name">{t("studioName")}</p>
      <p className="loc-address">{t("studioAddress")}</p>
      <p className="loc-area">{t("studioArea")}</p>
      <div className="loc-map">
        <iframe
          src={src}
          title={t("directions")}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="loc-links">
        {maps.map((item) => (
          <a key={item.name} href={item.href} target="_blank" rel="noreferrer">
            <BrandIcon name={item.icon} />
            {item.icon === "google" ? t("googleMap") : t("naverMap")}
          </a>
        ))}
      </div>
    </section>
  );
}
