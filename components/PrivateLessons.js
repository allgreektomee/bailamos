"use client";

import { useState } from "react";
import { useI18n } from "@/components/Language";
import { won } from "@/lib/i18n";

const nameKey = { elly: "optElly", jiwoon: "optJiwoon", together: "optBoth" };

export default function PrivateLessons({ lessons, apply }) {
  const { lang, t } = useI18n();
  const [openId, setOpenId] = useState(null);

  return (
    <>
      <ul className="lesson-grid">
        {lessons.options.map((option) => {
          const open = openId === option.id;
          return (
            <li key={option.id}>
              <button
                type="button"
                className={`lesson-card${open ? " open" : ""}`}
                aria-expanded={open}
                onClick={() => setOpenId(open ? null : option.id)}
              >
                <h3>{t(nameKey[option.id])}</h3>
                <p className="lesson-count">{t("onceNote")}</p>
                <p className="lesson-count">{t("packNote")}</p>
                {open ? (
                  <>
                    <p className="lesson-price">
                      {won(lang, option.once)}
                      <span>{t("rentalOnce")}</span>
                    </p>
                    <p className="lesson-pack">
                      {t("packPrefix")} {won(lang, option.pack)}
                      <span>{t("rentalPack")}</span>
                    </p>
                    <p className="course-when">{t("off")}</p>
                  </>
                ) : (
                  <p className="teacher-more">{t("price")}</p>
                )}
              </button>
            </li>
          );
        })}
      </ul>
      {openId ? (
        <div className="lesson-notes">
          <p>{t("discount")}</p>
          <p>{t("rental")}</p>
        </div>
      ) : null}
      <div className="lesson-notes">
        <p>
          <a className="apply" href={apply.href} target="_blank" rel="noreferrer">
            {t("privateApply")}
          </a>
        </p>
      </div>
    </>
  );
}
