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
      <figure className="about-photo">
        <img src="/about-tango.jpg" alt={copy.photoAlt} width="1066" height="1600" />
      </figure>
      <p className="lead about-lead">{copy.lead}</p>
      <a
        className="about-readmore"
        href={copy.blogHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="about-readmore-text">
          <span className="about-readmore-label">{copy.readMore}</span>
          <span className="about-readmore-sub">{copy.readMoreSub}</span>
        </span>
        <span className="about-readmore-arrow" aria-hidden="true">
          &gt;&gt;&gt;
        </span>
      </a>
      <p className="about-blog">
        <Link href="/blog">
          {copy.blogLink} <span aria-hidden="true">›</span>
        </Link>
      </p>
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
