import { LanguageProvider } from "@/components/Language";
import { ContactProvider } from "@/components/ContactDialog";
import SiteNav from "@/components/SiteNav";
import "./globals.css";

export const metadata = {
  title: "BAILAMOS TANGO · 레벨별 커리큘럼",
  description: "지운엘리 초급부터 인텐시브, 순환 특강의 주차별 진행.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>
          <ContactProvider>
            <header className="topbar">
              <a className="logo" href="/">
                BAILAMOS
              </a>
              <SiteNav />
            </header>
            {children}
          </ContactProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
