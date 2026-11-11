"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useI18n } from "@/components/Language";
import { glossLine, localizeTeacher, teacherName } from "@/lib/i18n";

function Block({ title, items }) {
  if (!items?.length) return null;
  return (
    <section className="profile-block">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default function TeacherPair({ teachers, performances }) {
  const { lang, t } = useI18n();
  const [openId, setOpenId] = useState(null);
  const bodyRef = useRef(null);
  const ordered = ["elly", "jiwoon"].map((id) => teachers.find((teacher) => teacher.id === id)).filter(Boolean);

  useEffect(() => {
    if (!openId || !bodyRef.current) return;
    bodyRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [openId]);

  return (
    <article className="detail profile">
      <Link href="/#teachers" className="back">
        ← {t("backHome")}
      </Link>
      <div className="profile-photo">
        <img src="/photos/back.jpg" alt={t("heroAlt")} style={{ objectPosition: "center 18%" }} />
      </div>
      <p className="hero-kicker">Elly Chung · Ji Woon</p>
      <h1>{t("pairName")}</h1>
      <p className="lead">{t("profileLead")}</p>
      <ul className="pair-list">
        {ordered.map((teacher) => {
          const open = openId === teacher.id;
          const view = localizeTeacher(teacher, lang);
          return (
            <li key={teacher.id}>
              <div className={`lesson-card pair-card${open ? " open" : ""}`}>
                <div className="pair-head">
                  <h2>{teacherName(teacher.id, lang)}</h2>
                  <p className="course-kicker">
                    {teacher.nameEn}
                    {teacher.aka ? ` · ${teacher.aka}` : ""}
                  </p>
                </div>
                <div className="pair-actions">
                  <button
                    type="button"
                    className="pair-btn"
                    aria-expanded={open}
                    onClick={() => setOpenId(open ? null : teacher.id)}
                  >
                    {open ? t("fold") : t("profile")}
                  </button>
                  <a className="pair-btn" href={teacher.facebook} target="_blank" rel="noreferrer">
                    Facebook
                  </a>
                </div>
              </div>
              {open ? (
                <div className="pair-body" ref={bodyRef}>
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
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </article>
  );
}
