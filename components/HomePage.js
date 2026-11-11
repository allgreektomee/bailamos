"use client";

import Link from "next/link";
import { BrandIcon, ContactBoards } from "@/components/ContactLinks";
import { useI18n } from "@/components/Language";
import { classes, weekPlan, WEEK_ORDER } from "@/lib/curriculum";
import { dayLetter, dayName, localizeCourse, weekLabel } from "@/lib/i18n";
import { maps, studioAddress } from "@/lib/links";

function CourseList({ items, kicker, dateQuery, lang, columns }) {
  return (
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
                {String(index + 1).padStart(2, "0")} · {kicker}
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
  );
}

export default function HomePage({ dateQuery }) {
  const { lang, t } = useI18n();
  const regular = classes.filter((course) => course.track !== "special");
  const specials = classes.filter((course) => course.track === "special");

  return (
    <>
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
        <CourseList items={regular} kicker={t("regular")} dateQuery={dateQuery} lang={lang} columns={3} />
      </section>

      <section className="section" id="specials">
        <div className="section-head">
          <p>Workshop</p>
          <h2>{t("specials")}</h2>
          <i />
        </div>
        <CourseList items={specials} kicker={t("specials")} dateQuery={dateQuery} lang={lang} />
      </section>

      <section className="section" id="gather">
        <div className="section-head">
          <p>Social</p>
          <h2>{t("gather")}</h2>
          <i />
        </div>
        <ul className="gather-grid">
          <li className="gather-card" id="practica">
            <h3>{t("practicaName")}</h3>
            <p className="gather-hours">
              <span>{t("inmuHours")}</span>
              {t("practicaDay")} · 16:00–19:00 · {t("practicaPlace")}
            </p>
            <p className="gather-copy">{t("practicaLead")}</p>
            <p className="gather-pass">{t("practicaPass")}</p>
          </li>
          <li className="gather-card" id="inmudang">
            <div className="gather-title">
              <h3>{t("inmuName")}</h3>
              <a className="gather-fb" href="https://www.facebook.com/groups/418752420053042" target="_blank" rel="noreferrer">
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
        <ul className="week-schedule">
          {WEEK_ORDER.filter((day) => weekPlan.some((item) => item.day === day)).map((day) => (
            <li key={day} className="week-day">
              <b>{dayLetter(lang, day)}</b>
              <div className="week-slots">
                {weekPlan
                  .filter((item) => item.day === day)
                  .map((item) => {
                    const href = item.id ? `/classes/${item.id}${dateQuery}` : item.href;
                    const body = (
                      <>
                        <span>{item.time}</span>
                        <strong>{weekLabel(item, lang)}</strong>
                      </>
                    );
                    return href ? (
                      <Link key={item.name} href={href}>
                        {body}
                      </Link>
                    ) : (
                      <div key={item.name}>{body}</div>
                    );
                  })}
              </div>
            </li>
          ))}
        </ul>
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
          <p>{studioAddress}</p>
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
