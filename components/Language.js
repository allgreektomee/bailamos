"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { LANGS, text } from "@/lib/i18n";

const LanguageContext = createContext({
  lang: "ko",
  setLang: () => {},
  t: (key) => text("ko", key),
});

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("ko");

  useEffect(() => {
    const saved = window.localStorage.getItem("bailamos-lang");
    if (LANGS.some((item) => item.id === saved)) setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : lang;
    const title = text(lang, "docTitle");
    if (typeof title === "string") document.title = title;
  }, [lang]);

  function setLang(next) {
    setLangState(next);
    window.localStorage.setItem("bailamos-lang", next);
  }

  const t = (key) => text(lang, key);

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  return useContext(LanguageContext);
}

export function LangSwitch({ variant = "compact" }) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const current = LANGS.find((item) => item.id === lang) || LANGS[0];

  useEffect(() => {
    if (variant === "menu" || !open) return;
    function onPointer(event) {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open, variant]);

  if (variant === "menu") {
    return (
      <div className="nav-langs" role="group" aria-label="Language">
        {LANGS.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={lang === item.id}
            onClick={() => setLang(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className={`lang-switch${open ? " open" : ""}`} ref={rootRef}>
      {open
        ? LANGS.filter((item) => item.id !== lang).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setLang(item.id);
                setOpen(false);
              }}
            >
              {item.short}
            </button>
          ))
        : null}
      <button
        type="button"
        className="lang-current"
        aria-expanded={open}
        aria-label={current.label}
        onClick={() => setOpen((value) => !value)}
      >
        {current.short}
      </button>
    </div>
  );
}
