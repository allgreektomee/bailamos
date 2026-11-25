import { LanguageProvider } from "@/components/Language";
import { ContactProvider } from "@/components/ContactDialog";
import SiteNav from "@/components/SiteNav";
import "./globals.css";

const siteTitle = "BAILAMOS TANGO · 레벨별 커리큘럼";
const siteDescription = "아르헨티나 탱고(땅고) - 홍대 탱고, 소셜 댄스, 커플 댄스, 직장인 취미, 홍대 취미.";

/** 검색 결과 · 카카오톡 같은 링크 공유 미리보기에 나오는 제목, 설명, 사진 */
export const metadata = {
  metadataBase: new URL("https://btstango.com"),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "btstango.com",
    locale: "ko_KR",
    title: siteTitle,
    description: siteDescription,
    images: [{ url: "/logo.jpg", width: 480, height: 480, alt: "BAILAMOS TANGO" }],
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: ["/logo.jpg"],
  },
};

/** 어두운 화면 모드에서도 항상 밝은 화면으로 보이게 한다. */
export const viewport = {
  colorScheme: "only light",
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
              <a className="logo" href="/" aria-label="BAILAMOS TANGO">
                <img src="/wordmark-color.png" alt="" />
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
