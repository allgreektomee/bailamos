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

  // 닫혀 있을 땐 EN · 한 만 보이고, 어느 쪽을 눌러도 전체 언어가 펼쳐진다. 펼쳐진 뒤엔 누른 언어로 바뀐다.
  const shown = open ? LANGS : LANGS.filter((item) => item.id === "en" || item.id === "ko");

  return (
    <div className={`lang-switch${open ? " open" : ""}`} ref={rootRef}>
      {shown.map((item) => (
        <button
          key={item.id}
          type="button"
          className={lang === item.id ? "lang-current" : ""}
          aria-pressed={lang === item.id}
          aria-expanded={open}
          aria-label={item.label}
          onClick={() => {
            if (!open) {
              setOpen(true);
              return;
            }
            setLang(item.id);
            setOpen(false);
          }}
        >
          {item.short}
        </button>
      ))}
    </div>
  );
}
