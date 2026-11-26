"use client";

import Link from "next/link";
import CourseName from "@/components/CourseName";
import { useContactDialog } from "@/components/ContactDialog";
import PrivateLessons from "@/components/PrivateLessons";
import { useI18n } from "@/components/Language";
import { getCourse } from "@/lib/curriculum";
import { dayName, localizeCourse } from "@/lib/i18n";
import { applyHref } from "@/lib/links";
import { privateLessons } from "@/lib/teachers";

function periodText(course, t) {
  if (course.duration) return course.duration;
  if (course.weeks?.length) return t("weeksOf")(course.weeks.length);
  if (course.groups) return t("weeksOf")(24);
  return t("openBatch");
}

function Inquire({ courseId, boxed }) {
  const { t } = useI18n();
  const { openContact } = useContactDialog();
  const href = applyHref(courseId);
  // 초급은 신청·문의 두 버튼을 정규수업 라벨 박스 안쪽 맨 아래에 넣는다(버튼 크기는 그대로).
  const wrapClass = boxed ? "inquire inquire-in-card" : "inquire";
  // 개인레슨은 신청 폼 없이 문의만 받는다.
  if (courseId === "private") {
    return (
      <div className={wrapClass}>
        <p className="inquire-note">{t("privateNote")}</p>
        <button type="button" className="inquire-btn" onClick={openContact}>
          {t("inquire")}
        </button>
      </div>
    );
  }
  const apply = href ? (
    <a className="inquire-btn inquire-line" href={href}>
      {t("apply")}
    </a>
  ) : (
    <button type="button" className="inquire-btn inquire-line" onClick={openContact}>
      {t("apply")}
    </button>
  );
  return (
    <div className={wrapClass}>
      {apply}
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
  // 초급은 사진 → 라벨 박스 → 신청·문의 → 소개 박스 → 커리큘럼 박스 순서로 보여 준다.
  const isBeginner = course.id === "beginner";
  const label = course.track === "special" ? t("specials") : isBeginner ? t("regularBeginner") : t("regular");
  const curriculum = course.private ? (
    <PrivateLessons lessons={privateLessons} />
  ) : course.groups || course.weeks.length ? (
    <WeekList course={course} weekUnit={weekUnit} />
  ) : (
    <p className="note">{t("weeksLater")}</p>
  );

  const meta = (
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
  );

  return (
    <article className="detail">
      <Link href={`/${dateQuery}`} className="back">
        ← {t("backClasses")}
      </Link>
      <h1>
        <CourseName name={course.name} />
      </h1>
      {course.image ? (
        <img
          className="detail-poster"
          src={course.image}
          alt=""
          style={{ objectPosition: course.imagePosition || "center" }}
        />
      ) : null}
      {isBeginner ? (
        <>
          <div className="card" style={{ marginTop: 18 }}>
            <div className="top">
              <h3>{label}</h3>
            </div>
            {meta}
            {course.warn ? <div className="warn">{course.warn}</div> : null}
            <Inquire courseId={course.id} boxed />
          </div>
          {course.story?.length ? (
            <section className="card detail-story">
              {course.story.map((paragraph, index) => (
                <p key={paragraph} className={index === 0 ? "story-quote" : "story-line"}>
                  {paragraph}
                </p>
              ))}
            </section>
          ) : null}
          <section className="card detail-curriculum">
            <h3>{t("curriculum")}</h3>
            {curriculum}
          </section>
        </>
      ) : (
        <>
          <div className="card" style={{ marginTop: 18 }}>
            <div className="top">
              <h3>{label}</h3>
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
            {meta}
            {course.warn ? <div className="warn">{course.warn}</div> : null}
          </div>
          {curriculum}
          <Inquire courseId={course.id} />
        </>
      )}
    </article>
  );
}
