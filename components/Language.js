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

  const others = LANGS.filter((item) => item.id !== "en" && item.id !== "ko");
  const otherCurrent = others.find((item) => item.id === lang);

  return (
    <div className={`lang-switch${open ? " open" : ""}`} ref={rootRef}>
      <button
        type="button"
        className={lang === "en" ? "lang-current" : ""}
        aria-pressed={lang === "en"}
        aria-label="English"
        onClick={() => {
          setLang("en");
          setOpen(false);
        }}
      >
        EN
      </button>
      <button
        type="button"
        className={lang === "ko" ? "lang-current" : ""}
        aria-pressed={lang === "ko"}
        aria-label="한국어"
        onClick={() => {
          setLang("ko");
          setOpen(false);
        }}
      >
        한
      </button>
      {open
        ? others
            .filter((item) => item.id !== lang)
            .map((item) => (
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
        className={otherCurrent ? "lang-current" : ""}
        aria-expanded={open}
        aria-label={otherCurrent ? otherCurrent.label : "Language"}
        onClick={() => setOpen((value) => !value)}
      >
        {otherCurrent ? otherCurrent.short : "···"}
      </button>
    </div>
  );
}
