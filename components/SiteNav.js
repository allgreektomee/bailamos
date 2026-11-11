"use client";

import { useEffect, useState } from "react";
import { useContactDialog } from "@/components/ContactDialog";
import { LangSwitch, useI18n } from "@/components/Language";

export default function SiteNav() {
  const { t } = useI18n();
  const { openContact } = useContactDialog();
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/#teachers", label: t("navTeachers") },
    { href: "/#courses", label: t("navCourses") },
    { href: "/#specials", label: t("navSpecials") },
    { href: "/#week", label: t("navWeek") },
    { href: "/classes/private", label: t("navPrivate") },
    { href: "/#visit", label: t("navVisit") },
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
