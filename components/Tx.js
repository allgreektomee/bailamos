"use client";

import { useI18n } from "@/components/Language";

/** 서버 컴포넌트(블로그 페이지) 안에서 번역 문구를 그릴 때 쓴다. */
export default function Tx({ k }) {
  const { t } = useI18n();
  return t(k);
}
