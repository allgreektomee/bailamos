"use client";

import { useEffect, useState } from "react";
import { openOnPhone } from "@/components/ContactLinks";
import { useContactDialog } from "@/components/ContactDialog";
import { LangSwitch, useI18n } from "@/components/Language";

export default function SiteNav() {
  const { t } = useI18n();
  const { openContact } = useContactDialog();
  const [open, setOpen] = useState(false);
  // 데스크톱 상단 바와 모바일 3선 메뉴가 같은 배열을 쓴다. 앞 8개가 지운 님이 정한 순서이고,
  // 신청하기·문의는 그 뒤에 강조 버튼으로 이어진다.
  const links = [
    { href: "/argentine-tango", label: t("navAbout") },
    { href: "/blog", label: t("navBlog") },
    { href: "/#courses", label: t("navCourses") },
    { href: "/#specials", label: t("navSpecials") },
    { href: "/classes/private", label: t("navPrivate") },
    { href: "/#week", label: t("navWeek") },
    { href: "/#teachers", label: t("navTeachers") },
    { href: "/#visit", label: t("navVisit") },
    { href: "/apply", label: t("apply") },
    { href: "/#contact", label: t("navContact") },
  ];

  return (
    <div className="top-end">
      {open ? (
        <button type="button" className="nav-backdrop" aria-label={t("menuClose")} onClick={() => setOpen(false)} />
      ) : null}
      <nav id="site-nav" aria-label={t("navLabel")} className={open ? "open" : ""}>
        {links.map((link) =>
          link.href === "/#contact" ? (
            <button
              key={link.href}
              type="button"
              className="nav-contact"
              onClick={() => {
                setOpen(false);
                openContact();
              }}
            >
              {link.label}
            </button>
          ) : link.external ? (
            <a
              key={link.href}
              href={link.href}
              data-phone-href={link.phoneHref}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => {
                setOpen(false);
                openOnPhone(event);
              }}
            >
              {link.label}
            </a>
          ) : (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ),
        )}
        <LangSwitch variant="menu" />
        <TextSize />
      </nav>
      <LangSwitch />
      <button
        type="button"
        className={`nav-toggle${open ? " open" : ""}`}
        aria-expanded={open}
        aria-controls="site-nav"
        aria-label={open ? t("menuClose") : t("menu")}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="nav-bars" />
      </button>
    </div>
  );
}

function TextSize() {
  const { t } = useI18n();
  const [size, setSize] = useState("base");

  useEffect(() => {
    const saved = window.localStorage.getItem("bailamos-text");
    if (saved === "large" || saved === "mid") setSize("mid");
    if (saved === "big") setSize("big");
  }, []);

  useEffect(() => {
    document.documentElement.dataset.text = size === "base" ? "" : size;
  }, [size]);

  function choose(next) {
    setSize(next);
    window.localStorage.setItem("bailamos-text", next);
  }

  return (
    <div className="nav-langs" role="group" aria-label={t("textSize")}>
      <span>{t("textSize")}</span>
      <button type="button" aria-pressed={size === "base"} onClick={() => choose("base")}>
        {t("textBase")}
      </button>
      <button type="button" aria-pressed={size === "mid"} onClick={() => choose("mid")}>
        {t("textMid")}
      </button>
      <button type="button" aria-pressed={size === "big"} onClick={() => choose("big")}>
        {t("textLarge")}
      </button>
    </div>
  );
}
