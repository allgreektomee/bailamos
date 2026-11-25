"use client";

import Link from "next/link";
import { useI18n } from "@/components/Language";
import { aboutTango } from "@/lib/about";

export default function AboutTango() {
  const { lang, t } = useI18n();
  const copy = aboutTango[lang] || aboutTango.ko;

  return (
    <article className="detail about">
      <Link href="/" className="back">
        ← {t("backHome")}
      </Link>
      <p className="hero-kicker">{copy.kicker}</p>
      <h1>{copy.title}</h1>
      <p className="lead about-lead">{copy.lead}</p>
      {copy.sections.map((section) => (
        <section key={section.h} className="about-section">
          <h2>{section.h}</h2>
          {section.p.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}
      <section className="about-cta">
        <p className="about-cta-title">{copy.ctaTitle}</p>
        <div className="inquire">
          <Link className="inquire-btn inquire-line" href="/#courses">
            {copy.ctaCourses}
          </Link>
          <Link className="inquire-btn" href="/apply">
            {copy.ctaApply}
          </Link>
        </div>
      </section>
    </article>
  );
}
