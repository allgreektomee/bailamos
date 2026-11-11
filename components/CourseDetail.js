"use client";

import Link from "next/link";
import { useContactDialog } from "@/components/ContactDialog";
import PrivateLessons from "@/components/PrivateLessons";
import { useI18n } from "@/components/Language";
import { getCourse } from "@/lib/curriculum";
import { dayName, localizeCourse } from "@/lib/i18n";
import { privateLessons } from "@/lib/teachers";

function periodText(course, t) {
  if (course.duration) return course.duration;
  if (course.weeks?.length) return t("weeksOf")(course.weeks.length);
  if (course.groups) return t("weeksOf")(24);
  return t("openBatch");
}

function Inquire() {
  const { t } = useI18n();
  const { openContact } = useContactDialog();
  return (
    <div className="inquire">
      <button type="button" className="inquire-btn inquire-line" onClick={openContact}>
        {t("apply")}
      </button>
      <button type="button" className="inquire-btn" onClick={openContact}>
        {t("inquire")}
      </button>
    </div>
  );
}

function WeekRows({ weeks, id, weekUnit }) {
  return (
    <ol className="weeks">
      {weeks.map((week, index) => {
        const topic = typeof week === "string" ? week : week.topic;
        const detail = typeof week === "string" ? "" : week.detail;
        return (
          <li key={`${id}-${index}`} className="week">
            <div className="week-row">
              <span className="wk">{weekUnit(index + 1)}</span>
              <span className="tp">{topic}</span>
            </div>
            {detail ? <div className="body">{detail}</div> : null}
          </li>
        );
      })}
    </ol>
  );
}

function WeekList({ course, weekUnit }) {
  if (course.groups) {
    let number = 0;
    return course.groups.map((group) => (
      <section key={group.title}>
        <h2 className="group-title">{group.title}</h2>
        <ol className="weeks">
          {group.weeks.map((topic) => {
            number += 1;
            return (
              <li key={`${course.id}-${number}`} className="week">
                <div className="week-row">
                  <span className="wk">{weekUnit(number)}</span>
                  <span className="tp">{topic}</span>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    ));
  }
  if (!course.weeks.length) return null;
  return <WeekRows weeks={course.weeks} id={course.id} weekUnit={weekUnit} />;
}

export default function CourseDetail({ courseId, dateQuery }) {
  const { lang, t } = useI18n();
  const course = localizeCourse(getCourse(courseId), lang);
  const when = course.day ? t("every")(dayName(lang, course.day), course.time, course.timeNote) : "";
  const intro = course.intro?.length ? course.intro : [course.lead];
  const weekUnit = t("weekUnit");

  return (
    <article className="detail">
      <Link href={`/${dateQuery}`} className="back">
        ← {t("backClasses")}
      </Link>
      <h1>{course.name}</h1>
      {course.image ? (
        <img
          className="detail-poster"
          src={course.image}
          alt=""
          style={{ objectPosition: course.imagePosition || "center" }}
        />
      ) : null}
      <div className="card" style={{ marginTop: 18 }}>
        <div className="top">
          <h3>{course.track === "special" ? t("specials") : t("regular")}</h3>
        </div>
        {intro.map((paragraph) => (
          <p key={paragraph} className="lead">
            {paragraph}
          </p>
        ))}
        {course.points?.length ? (
          <ul className="intro-points">
            {course.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        ) : null}
        <dl className="meta">
          {course.day && course.track !== "special" ? (
            <>
              <dt>{t("when")}</dt>
              <dd>{when}</dd>
            </>
          ) : null}
          <dt>{t("period")}</dt>
          <dd>{periodText(course, t)}</dd>
          {course.place ? (
            <>
              <dt>{t("place")}</dt>
              <dd>{course.place}</dd>
            </>
          ) : null}
          <dt>{t("who")}</dt>
          <dd>{course.target}</dd>
        </dl>
        {course.warn ? <div className="warn">{course.warn}</div> : null}
      </div>
      {course.private ? <PrivateLessons lessons={privateLessons} /> : course.groups || course.weeks.length ? (
        <WeekList course={course} weekUnit={weekUnit} />
      ) : (
        <p className="note">{t("weeksLater")}</p>
      )}
      <Inquire />
    </article>
  );
}
