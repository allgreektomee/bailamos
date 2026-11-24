"use client";

import Link from "next/link";
import { BrandIcon, ContactBoards, openOnPhone } from "@/components/ContactLinks";
import EventPopup from "@/components/EventPopup";
import { useI18n } from "@/components/Language";
import ScheduleTabs from "@/components/ScheduleTabs";
import { classes } from "@/lib/curriculum";
import { dayName, localizeCourse } from "@/lib/i18n";
import { maps, applyHref, inmuFacebook, inmuFacebookPhone } from "@/lib/links";

/** 모바일 전용 계단 (테크트리): 초급 → 상급을 한 칸씩 오른쪽 아래로 올라가고, 인텐시브는 전 단계를 아우르는 긴 막대. */
/** 단계 표시: 탱고의 장미 🌹 5송이 중 몇 송이가 피었는지(색은 CSS 에서 보라색으로). 인텐시브는 전 단계라 5개 모두. */
const STEP_ICON = "🌹";
const STAIR_LEVEL = {
  beginner: 1,
  "beginner-intermediate": 2,
  intermediate: 3,
  "upper-intermediate": 4,
  advanced: 5,
  intensive: 5,
};

function StatusTag({ status }) {
  const { t } = useI18n();
  if (!status) return null;
  return <span className={`stair-status stair-status-${status}`}>{t("statusLabels")[status]}</span>;
}

function StepMark({ id }) {
  const level = STAIR_LEVEL[id] || 0;
  return (
    <span className="stair-lv" role="img" aria-label={`${level}/5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <i key={n} className={n <= level ? "on" : ""}>
          {STEP_ICON}
        </i>
      ))}
    </span>
  );
}
const STAIRS = ["beginner", "beginner-intermediate", "intermediate", "upper-intermediate", "advanced"];

function Stairs({ items, dateQuery, lang }) {
  const { t } = useI18n();
  const byId = (id) => {
    const found = items.find((item) => item.id === id);
    return found ? localizeCourse(found, lang) : null;
  };
  const when = (course) =>
    course.day
      ? `${dayName(lang, course.day)} ${course.time}`
      : course.id === "advanced"
        ? t("stairThemes")
        : "";
  const weeks = (course) =>
    course.weeks?.length === 8 ? t("weeksOf")(8) : "";
  const href = (course) => `/classes/${course.id}${dateQuery}`;
  const intensive = byId("intensive");
  const priv = byId("private");

  return (
    <div className="stairs">
      <p className="stairs-hint">{t("stairHint")}</p>
      <ol className="stairs-steps">
        {STAIRS.map((id, index) => {
          const course = byId(id);
          if (!course) return null;
          const sub = [when(course), weeks(course)].filter(Boolean).join(" · ");
          return (
            <li key={id} style={{ "--step": index }}>
              <Link href={href(course)} className={`stair stair-${index + 1}`}>
                <span className="stair-head">
                  <StepMark id={id} />
                  <StatusTag status={course.status} />
                </span>
                <span className="stair-name">{course.name}</span>
                {sub ? <span className="stair-sub">{sub}</span> : null}
                <span className="stair-lead">{t("stairLeads")[id]}</span>
              </Link>
            </li>
          );
        })}
        {intensive ? (
          <li>
            <Link href={href(intensive)} className="stair stair-wide">
              <span className="stair-head">
                <StatusTag status={intensive.status} />
              </span>
              <span className="stair-name">{intensive.name}</span>
              <span className="stair-sub">
                {when(intensive)} · {t("weeksOf")(24)}
              </span>
              <span className="stair-lead">{t("stairIntensiveNote")}</span>
            </Link>
          </li>
        ) : null}
      </ol>
      {priv ? (
        <Link href={href(priv)} className="stair stair-solo">
          <span className="stair-solo-text">
            <span className="stair-name">{priv.name}</span>
            <span className="stair-sub">{priv.lead}</span>
          </span>
          <span className="stair-ask">{t("stairAskName")} ›</span>
        </Link>
      ) : null}
    </div>
  );
}

/** 모바일에서는 cover 한 장을 깔고, 아래에 강좌를 한 줄씩 모아서 한눈에 보여 준다. (PC 는 기존 카드) */
function CourseList({ items, kicker, dateQuery, lang, columns, cover }) {
  return (
    <>
    {cover ? (
      <div className="course-cover">
        <img src={cover.src} alt="" style={{ objectPosition: cover.position || "center" }} />
      </div>
    ) : null}
    {columns === 3 ? <Stairs items={items} dateQuery={dateQuery} lang={lang} /> : null}
    <ul className={columns === 3 ? "course-grid course-grid-3" : "course-grid"}>
      {items.map((item, index) => {
        const course = localizeCourse(item, lang);
        return (
          <li key={course.id}>
            <Link href={`/classes/${course.id}${dateQuery}`} className="course-card">
              <div className="course-visual">
                {course.image ? (
                  <img src={course.image} alt="" style={{ objectPosition: course.imagePosition || "center" }} />
                ) : (
                  <span className="course-mark">{course.name}</span>
                )}
              </div>
              <p className="course-kicker">
                <span className="course-no">{String(index + 1).padStart(2, "0")}</span>
                <span className="course-kind"> · {kicker}</span>
              </p>
              <p className="course-name">{course.name}</p>
              {course.track === "special" || !course.day ? null : (
                <p className="course-when">
                  {dayName(lang, course.day)} {course.time}
                </p>
              )}
              <p className="course-lead">{course.lead}</p>
            </Link>
          </li>
        );
      })}
    </ul>
    </>
  );
}

export default function HomePage({ dateQuery }) {
  const { lang, t } = useI18n();
  const practicaApply = applyHref("practica");
  const regular = classes.filter((course) => course.track !== "special");
  const specials = classes.filter((course) => course.track === "special");

  return (
    <>
      <EventPopup />
      <section className="hero">
        <div className="hero-photo">
          <img src="/hero.jpg" alt={t("heroAlt")} />
        </div>
        <div className="hero-copy">
          <p className="hero-kicker">Bailamos Tango · Studio Elly</p>
          <h1>
            {t("hero1")}
            <br />
            {t("hero2")}
          </h1>
          <p className="hero-honor">{t("honor")}</p>
          <p className="sub">{t("sub")}</p>
        </div>
      </section>

      <section className="section" id="teachers">
        <div className="section-head">
          <p>Maestros</p>
          <h2>{t("teachers")}</h2>
          <i />
        </div>
        <ul className="teacher-grid">
          <li>
            <Link href="/teachers" className="teacher-card teacher-together">
              <div className="course-visual">
                <img src="/photos/back.jpg" alt={t("heroAlt")} style={{ objectPosition: "center 18%" }} />
              </div>
              <div className="teacher-body">
                <p className="course-kicker">Elly Chung · Ji Woon</p>
                <p className="course-name">{t("pairName")}</p>
                <p className="course-lead">{t("pairLead")}</p>
                <p className="teacher-more">{t("enter")}</p>
              </div>
            </Link>
          </li>
        </ul>
      </section>

      <section className="section" id="courses">
        <div className="section-head">
          <p>Curriculum</p>
          <h2>{t("courses")}</h2>
          <i />
        </div>
        <p className="section-lead">{t("coursesLead")}</p>
        <CourseList items={regular} kicker={t("regular")} dateQuery={dateQuery} lang={lang} columns={3} cover={{ src: "/teachers/couple.jpg?v=2", position: "center 28%" }} />
      </section>

      <section className="section" id="specials">
        <div className="section-head">
          <p>Workshop</p>
          <h2>{t("specials")}</h2>
          <i />
        </div>
        <p className="section-lead">{t("specialsLead")}</p>
        <CourseList items={specials} kicker={t("specials")} dateQuery={dateQuery} lang={lang} cover={{ src: "/photos/elly-floral.jpg", position: "center 30%" }} />
      </section>

      <section className="section" id="gather">
        <div className="section-head">
          <p>Social</p>
          <h2>{t("gather")}</h2>
          <i />
        </div>
        <p className="section-lead">{t("gatherLead")}</p>
        <ul className="gather-grid">
          <li className="gather-card" id="practica">
            <div className="gather-title">
              <h3>{t("practicaName")}</h3>
              <a className="gather-apply" href={practicaApply}>
                {t("apply")}
              </a>
            </div>
            <p className="gather-hours">
              <span>{t("inmuHours")}</span>
              {t("practicaDay")} · 16:00–19:00 · {t("practicaPlace")}
            </p>
            <p className="gather-copy">{t("practicaLead")}</p>
            <p className="gather-pass">{t("practicaPass")}</p>
            <video
              className="gather-video"
              controls
              playsInline
              preload="none"
              poster="/videos/practica-2026-10-25.jpg"
              aria-label={t("practicaVideo")}
            >
              <source src="/videos/practica-2026-10-25.mp4" type="video/mp4" />
            </video>
          </li>
          <li className="gather-card" id="inmudang">
            <div className="gather-title">
              <h3>{t("inmuName")}</h3>
              <a className="gather-fb" href={inmuFacebook} data-phone-href={inmuFacebookPhone} target="_blank" rel="noreferrer" onClick={openOnPhone}>
                <BrandIcon name="facebook" />
                <span>Facebook</span>
              </a>
            </div>
            <p className="gather-hours">
              <span>{t("inmuHours")}</span>
              {t("inmuDay")} · 20:00–00:00 · {t("inmuPlace")}
            </p>
            <p>{t("inmuWhen")}</p>
            <p className="gather-copy">{t("inmuNov")}</p>
            <p className="gather-copy">{t("inmuGuests")}</p>
            <ul className="gather-lineup">
              <li>
                <span>11/11</span>
                <strong>Stefan Pan · Napoli</strong>
              </li>
              <li>
                <span>11/18</span>
                <strong>Cecilia Acosta · Tbilisi</strong>
              </li>
              <li>
                <span>11/25</span>
                <strong>Mikael Kim Taewan</strong>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="section" id="week">
        <div className="section-head">
          <p>This week</p>
          <h2>{t("week")}</h2>
          <i />
        </div>
        <p className="section-lead">{t("weekLead")}</p>
        <ScheduleTabs dateQuery={dateQuery} />
      </section>

      <section className="section" id="contact">
        <div className="section-head">
          <p>Contact</p>
          <h2>{t("contact")}</h2>
          <i />
        </div>
        <p className="section-lead">{t("contactLead")}</p>
        <ContactBoards />
        <div className="visit" id="visit">
          <h3>{t("visit")}</h3>
          <p>{t("address")}</p>
          <div className="contact-row">
            {maps.map((item) => (
              <a key={item.name} href={item.href} target="_blank" rel="noreferrer">
                <BrandIcon name={item.icon} />
                {item.icon === "google" ? t("googleMap") : t("naverMap")}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">Bailamos Tango · Studio Elly</footer>
    </>
  );
}
