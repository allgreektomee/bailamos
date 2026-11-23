"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { useI18n } from "@/components/Language";

/** 홈에 처음 들어오면 뜨는 행사 팝업. 행사가 바뀌면 이 객체만 고친다. */
const event = {
  id: "luminoso-2026-12-04",
  poster: "/posters/luminoso-2026-12-04.jpg",
  title: "LUMINOSO BIG MILONGA · YEAR-END SPECIAL NIGHT",
  // 이 시각(서울)이 지나면 팝업을 더 이상 띄우지 않는다.
  until: "2026-12-04T20:30:00+09:00",
  rows: [
    // 날짜·장소·스페셜 공연은 포스터에 이미 있어서 표에서는 뺐다.
    ["DJ", "Carlos (Churri Lee)"],
    ["Dress code", "RED & GREEN"],
    ["Fee", "13,000won"],
    ["Organizer", "Trees (Hyun Jung Kim)"],
  ],
};

const storageKey = `popup-hide-${event.id}`;

function seoulToday() {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Seoul" });
}

function shouldShow() {
  if (Date.now() >= Date.parse(event.until)) return false;
  try {
    return window.localStorage.getItem(storageKey) !== seoulToday();
  } catch {
    return true;
  }
}

const subscribe = () => () => {};

export default function EventPopup() {
  const { t } = useI18n();
  // 서버에서는 항상 false, 브라우저에서만 조건을 계산한다(하이드레이션 불일치 방지).
  const eligible = useSyncExternalStore(subscribe, shouldShow, () => false);
  const [closed, setClosed] = useState(false);
  const open = eligible && !closed;

  useEffect(() => {
    if (!open) return;
    function onKey(keyEvent) {
      if (keyEvent.key === "Escape") setClosed(true);
    }
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  if (!open) return null;

  function hideToday() {
    try {
      window.localStorage.setItem(storageKey, seoulToday());
    } catch {}
    setClosed(true);
  }

  return (
    <div className="contact-pop" onClick={() => setClosed(true)}>
      <div
        className="contact-pop-card event-pop-card"
        role="dialog"
        aria-modal="true"
        aria-label={event.title}
        onClick={(clickEvent) => clickEvent.stopPropagation()}
      >
        <button type="button" className="event-pop-x" aria-label={t("close")} onClick={() => setClosed(true)}>
          ×
        </button>
        <img className="event-pop-poster" src={event.poster} alt={event.title} />
        <dl className="event-pop-info">
          {event.rows.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <div className="event-pop-actions">
          <button type="button" onClick={hideToday}>
            {t("popupHideToday")}
          </button>
          <button type="button" onClick={() => setClosed(true)}>
            {t("close")}
          </button>
        </div>
      </div>
    </div>
  );
}
