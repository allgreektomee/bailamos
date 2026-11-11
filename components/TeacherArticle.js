"use client";

import Link from "next/link";
import { useI18n } from "@/components/Language";
import { glossLine, localizeTeacher, teacherName } from "@/lib/i18n";

function Block({ title, items }) {
  if (!items?.length) return null;
  return (
    <section className="profile-block">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default function TeacherArticle({ teacher, performances }) {
  const { lang, t } = useI18n();
  const view = localizeTeacher(teacher, lang);

  return (
    <article className="detail profile">
      <Link href="/teachers" className="back">
        ← {t("backTeachers")}
      </Link>
      <div className="profile-photo">
        <img src={teacher.image} alt="" style={{ objectPosition: teacher.imagePosition }} />
      </div>
      <p className="hero-kicker">
        {teacher.nameEn}
        {teacher.aka ? ` · ${teacher.aka}` : ""}
      </p>
      <h1>{teacherName(teacher.id, lang)}</h1>
      <p className="lead">{view.summary}</p>
      {view.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="profile-copy">
          {paragraph}
        </p>
      ))}
      <Block title={t("edu")} items={view.education} />
      <Block title={t("awards")} items={view.awards} />
      <Block title={t("judging")} items={view.judging} />
      <Block title={t("teaching")} items={view.teaching} />
      <Block title={t("shows")} items={performances.map((item) => glossLine(item, lang))} />
    </article>
  );
}
