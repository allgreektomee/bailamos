"use client";

import { useI18n } from "@/components/Language";
import { channels, contacts } from "@/lib/links";

function BrandIcon({ name }) {
  const common = { className: "brand-icon", viewBox: "0 0 24 24", "aria-hidden": "true" };
  if (name === "whatsapp") {
    return (
      <svg {...common}>
        <path
          fill="#25D366"
          d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 13.89c-.24.68-1.4 1.25-1.94 1.33-.5.07-1.13.1-1.82-.11-.42-.14-.95-.31-1.64-.6-2.88-1.24-4.76-4.13-4.9-4.32-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.27.64-.4 1.02-.4h.33c.3.01.44-.02.68.52.24.58.83 2 .9 2.15.07.14.12.31.02.5-.1.19-.14.31-.28.48-.14.17-.3.37-.42.5-.14.14-.28.29-.12.56.16.27.7 1.16 1.51 1.88 1.04.92 1.91 1.21 2.18 1.35.27.14.43.12.59-.07.16-.19.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.54.73 1.8.86.27.13.44.2.51.31.07.11.07.64-.17 1.32z"
        />
      </svg>
    );
  }
  if (name === "wechat") {
    return (
      <svg {...common}>
        <path
          fill="#07C160"
          d="M9.5 3.8C5.36 3.8 2 6.7 2 10.3c0 2.02 1.1 3.82 2.82 5.02L4.2 17.8l2.7-1.35c.8.22 1.66.35 2.6.35.34 0 .67-.02 1-.06a6.2 6.2 0 0 1-.5-2.49c0-3.2 2.91-5.8 6.5-5.8.23 0 .45.01.67.03C16.4 6.16 13.24 3.8 9.5 3.8zM7.5 8.9a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9zm4 0a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9z"
        />
        <path
          fill="#07C160"
          d="M16.5 9.6c-3.04 0-5.5 2.15-5.5 4.8s2.46 4.8 5.5 4.8c.55 0 1.08-.07 1.58-.2l2.32 1.2-.4-1.7c1.2-.86 2-2.15 2-3.6 0-2.65-2.46-4.5-5.5-4.5zm-1.7 3.2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm3.4 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"
        />
      </svg>
    );
  }
  if (name === "chat") {
    return (
      <svg {...common}>
        <path
          fill="#FEE500"
          d="M12 3C6.48 3 2 6.7 2 11.2c0 2.9 1.9 5.44 4.74 6.9L6 21l3.3-1.8c.86.2 1.76.3 2.7.3 5.52 0 10-3.7 10-8.2S17.52 3 12 3z"
        />
        <path fill="#3C1E1E" d="M8.2 10.2h.2v2.2H8.2zm3.7 0h.2v2.2h-.2zm3.7 0h.2v2.2h-.2z" />
      </svg>
    );
  }
  if (name === "instagram") {
    return (
      <svg {...common}>
        <path
          fill="#E1306C"
          d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2z"
        />
        <path
          fill="#E1306C"
          d="M17.4 2.8H6.6A3.8 3.8 0 0 0 2.8 6.6v10.8a3.8 3.8 0 0 0 3.8 3.8h10.8a3.8 3.8 0 0 0 3.8-3.8V6.6a3.8 3.8 0 0 0-3.8-3.8zm2.2 14.6a2.2 2.2 0 0 1-2.2 2.2H6.6a2.2 2.2 0 0 1-2.2-2.2V6.6a2.2 2.2 0 0 1 2.2-2.2h10.8a2.2 2.2 0 0 1 2.2 2.2v10.8z"
        />
        <circle cx="17.4" cy="6.5" r="1" fill="#E1306C" />
      </svg>
    );
  }
  if (name === "youtube") {
    return (
      <svg {...common}>
        <path
          fill="#FF0033"
          d="M22 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C18.2 5.4 12 5.4 12 5.4s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 9 2 12.2 2 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6z"
        />
        <path fill="#fff" d="M10 9.2v6l5.2-3z" />
      </svg>
    );
  }
  if (name === "facebook") {
    return (
      <svg {...common}>
        <path
          fill="#1877F2"
          d="M14.2 21v-7.2h2.4l.4-2.8h-2.8V9.3c0-.8.2-1.4 1.4-1.4H17V5.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2h-2.5v2.8H11V21h3.2z"
        />
      </svg>
    );
  }
  if (name === "google") {
    return (
      <svg {...common}>
        <path
          fill="#EA4335"
          d="M12 2.2A7.2 7.2 0 0 0 4.8 9.4c0 5.3 6.2 11.8 6.5 12.1.4.4 1 .4 1.4 0 .3-.3 6.5-6.8 6.5-12.1A7.2 7.2 0 0 0 12 2.2zm0 9.8a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2z"
        />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#03C75A" />
      <path fill="#fff" d="M8 16.2V7.8h2.1l2.9 5.2V7.8H16v8.4h-2.1l-2.9-5.2v5.2H8z" />
    </svg>
  );
}


export { BrandIcon };

export function ContactBoards() {
  const { t } = useI18n();
  return (
    <>
      <div className="contact-block">
        <p className="contact-label">{t("reach")}</p>
        <div className="contact-grid three">
          {contacts.map((item) => (
            <a key={item.name} href={item.href} target="_blank" rel="noreferrer">
              <BrandIcon name={item.icon} />
              {item.icon === "chat" ? t("openChat") : item.name}
              {item.note ? <span>{item.note}</span> : null}
            </a>
          ))}
        </div>
      </div>
      <div className="contact-block">
        <p className="contact-label">{t("channels")}</p>
        <div className="contact-grid two">
          {channels.map((item) => (
            <a key={item.name} href={item.href} target="_blank" rel="noreferrer">
              <BrandIcon name={item.icon} />
              {item.icon === "naver" ? t("naverCafe") : item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
