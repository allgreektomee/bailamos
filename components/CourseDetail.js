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

// 라벨 박스 안, 요일·시간 위에 놓는 안내 블록(머리줄 · 목록 · 맺음줄).
// 목록 항목이 모두 👉 로 시작하면 점 불릿 대신 그 화살표만 쓴다.
function ClassFlash({ flash }) {
  const arrows = flash.items.every((item) => item.trim().startsWith("👉"));
  return (
    <div className={arrows ? "class-flash flash-arrows" : "class-flash"}>
      {flash.head ? <p className="flash-head">{flash.head}</p> : null}
      <ul className="flash-list">
        {flash.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {flash.tail ? <p className="flash-tail">{flash.tail}</p> : null}
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
  // 요일·시간은 두 줄로: 첫 줄 "매주 토요일 18:10–19:10", 둘째 줄 "(수업 후 …)" 보충 설명.
  const when = course.day ? t("every")(dayName(lang, course.day), course.time, "") : "";
  const intro = course.intro?.length ? course.intro : [course.lead];
  const weekUnit = t("weekUnit");
  // 정규 수업 라벨: 초급·초중급은 어느 반인지까지 붙여 보여 준다.
  const regularLabel = { beginner: "regularBeginner", "beginner-intermediate": "regularBeginnerIntermediate" };
  const label = course.track === "special" ? t("specials") : t(regularLabel[course.id] || "regular");
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
          <dd>
            {when}
            {course.timeNote ? (
              <>
                <br />({course.timeNote})
              </>
            ) : null}
          </dd>
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
      {/* 모든 수업 공통: 라벨 박스(신청·문의 버튼 포함) → 소개 박스 → 커리큘럼 박스 */}
      <div className="card" style={{ marginTop: 18 }}>
        <div className="top">
          <h3>{label}</h3>
        </div>
        {course.flash ? <ClassFlash flash={course.flash} /> : null}
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
      ) : intro.some(Boolean) || course.points?.length ? (
        <section className="card detail-story">
          {intro.filter(Boolean).map((paragraph) => (
            <p key={paragraph} className="story-line">
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
        </section>
      ) : null}
      <section className="card detail-curriculum">
        {course.private ? null : <h3>{t("curriculum")}</h3>}
        {curriculum}
      </section>
    </article>
  );
}
