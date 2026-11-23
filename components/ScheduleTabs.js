"use client";

import Link from "next/link";
import { useState } from "react";
import { useI18n } from "@/components/Language";
import { WEEK_ORDER, lastCalendarMonth, monthEvents, resolveToday, weekPlan } from "@/lib/curriculum";
import { dayLetter, weekLabel } from "@/lib/i18n";

const LOCALES = { ko: "ko-KR", zh: "zh-CN", ja: "ja-JP", es: "es-ES" };

/** 이번 달 기준으로 지난 달을 몇 달 앞까지 볼 수 있는지. 뒤쪽은 lib/curriculum.js 의 lastCalendarMonth 까지. */
const BACK = 1;

function Slot({ href, time, label }) {
  const body = (
    <>
      <span>{time}</span>
      <strong>{label}</strong>
    </>
  );
  return href ? <Link href={href}>{body}</Link> : <div>{body}</div>;
}

function WeekView({ lang, dateQuery }) {
  return (
    <ul className="week-schedule">
      {WEEK_ORDER.filter((day) => weekPlan.some((item) => item.day === day)).map((day) => (
        <li key={day} className={`week-day${day === "일" ? " sun" : day === "토" ? " sat" : ""}`}>
          <b>{dayLetter(lang, day)}</b>
          <div className="week-slots">
            {weekPlan
              .filter((item) => item.day === day)
              .map((item) => (
                <Slot
                  key={item.name}
                  href={item.id ? `/classes/${item.id}${dateQuery}` : item.href}
                  time={item.time}
                  label={weekLabel(item, lang)}
                />
              ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

function MonthView({ lang, t, today, dateQuery }) {
  const [thisYear, thisMonth] = today.split("-").map(Number);
  const [offset, setOffset] = useState(0);

  const index = thisYear * 12 + (thisMonth - 1) + offset;
  const year = Math.floor(index / 12);
  const month = (index % 12) + 1;

  const label = new Intl.DateTimeFormat(LOCALES[lang] || "ko-KR", { year: "numeric", month: "long" }).format(
    new Date(year, month - 1, 1),
  );

  // 같은 날 일정은 한 덩어리로 묶는다. 이번 달은 지난 날짜를 감춰 오늘부터 보여 준다.
  const days = [];
  monthEvents(year, month)
    .filter((event) => event.date >= today || offset !== 0)
    .forEach((event) => {
      const last = days[days.length - 1];
      if (last && last.date === event.date) last.items.push(event);
      else days.push({ date: event.date, dow: event.dow, items: [event] });
    });

  return (
    <div className="month-view">
      <div className="month-nav">
        <button type="button" aria-label={t("monthPrev")} disabled={offset <= -BACK} onClick={() => setOffset(offset - 1)}>
          ‹
        </button>
        <strong>{label}</strong>
        <button type="button" aria-label={t("monthNext")} disabled={index >= lastCalendarMonth} onClick={() => setOffset(offset + 1)}>
          ›
        </button>
      </div>
      {days.length === 0 ? (
        <p className="month-empty">{t("monthEmpty")}</p>
      ) : (
        <ul className="month-list">
          {days.map((day) => (
            <li
              key={day.date}
              className={`month-day${day.dow === "일" ? " sun" : day.dow === "토" ? " sat" : ""}${day.date < today ? " past" : ""}${day.date === today ? " today" : ""}`}
            >
              <div className="month-date">
                <b>{Number(day.date.slice(8))}</b>
                <span>{day.date === today ? t("todayMark") : dayLetter(lang, day.dow)}</span>
              </div>
              <div className="week-slots">
                {day.items.map((item) => (
                  <Slot
                    key={`${item.date}-${item.name}`}
                    href={item.id ? `/classes/${item.id}${dateQuery}` : item.href}
                    time={item.time}
                    label={`${weekLabel(item, lang)}${item.weekNo ? ` · ${t("weekUnit")(item.weekNo)}` : ""}${item.place ? ` @ ${item.place}` : ""}`}
                  />
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ScheduleTabs({ dateQuery }) {
  const { lang, t } = useI18n();
  const [tab, setTab] = useState("week");
  const today = resolveToday(dateQuery ? dateQuery.replace("?date=", "") : undefined);

  return (
    <>
      <div className="sched-tabs" role="tablist">
        {[
          ["week", t("tabWeek")],
          ["month", t("tabMonth")],
        ].map(([id, name]) => (
          <button key={id} type="button" role="tab" aria-selected={tab === id} onClick={() => setTab(id)}>
            {name}
          </button>
        ))}
      </div>
      {tab === "week" ? (
        <WeekView lang={lang} dateQuery={dateQuery} />
      ) : (
        <MonthView lang={lang} t={t} today={today} dateQuery={dateQuery} />
      )}
    </>
  );
}
