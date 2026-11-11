"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ContactBoards } from "@/components/ContactLinks";
import { useI18n } from "@/components/Language";

const ContactDialogContext = createContext({ openContact: () => {} });

export function useContactDialog() {
  return useContext(ContactDialogContext);
}

export function ContactProvider({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <ContactDialogContext.Provider value={{ openContact: () => setOpen(true) }}>
      {children}
      <ContactDialog open={open} onClose={() => setOpen(false)} />
    </ContactDialogContext.Provider>
  );
}

function ContactDialog({ open, onClose }) {
  const { t } = useI18n();

  useEffect(() => {
    if (!open) return;
    function onKey(event) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="contact-pop" onClick={onClose}>
      <div
        className="contact-pop-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-pop-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="contact-pop-close" aria-label={t("close")} onClick={onClose}>
          ×
        </button>
        <div className="section-head">
          <p>Contact</p>
          <h2 id="contact-pop-title">{t("contact")}</h2>
          <i />
        </div>
        <p className="section-lead">{t("contactLead")}</p>
        <ContactBoards />
      </div>
    </div>
  );
}
