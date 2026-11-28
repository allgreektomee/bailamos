/** 공통 신청 폼. 시트에는 option 문자열이 신청과정 열로 들어간다. */

export const applyCourses = [
  { id: "beginner", option: "1 beginner" },
  { id: "beginner-intermediate", option: "2 beginner-intermediate" },
  { id: "intermediate", option: "3 intermediate" },
  { id: "upper-intermediate", option: "4 upper-intermediate" },
  { id: "advanced", option: "5 advanced" },
  { id: "intensive", option: "6 intensive" },
  { id: "walk", option: "9 초급 트레이닝 특강(Caminata, Abrazo)" },
  { id: "ocho", option: "8 초중급 트레이닝 특강(Eje, Pivot, Ocho)" },
  { id: "special-intermediate", option: "14 중급 특강" },
  { id: "giro", option: "12 중상급 특강(히로 콤비네이션)" },
  { id: "special-advanced", option: "15 상급 특강" },
  { id: "milonga", option: "10 밀롱가 특강" },
  { id: "vals", option: "11 발스 특강" },
  { id: "practica", option: "13 practica" },
];

export const applyRoles = ["리더", "팔로워"];
/** 신청구분(기수·재수강·일반)을 고르게 하지 않는 과정: 초급.
 *  쁘락띠까는 기수·재수강 대신 일일 참여 / 패키지 / 연속 패키지 세 가지를 고른다(applyBatchesPractica).
 *  인텐시브는 고른 신청구분에 맞는 수업료 안내만 보여 주려고 신청구분을 받는다. */
export function hasBatch(id) {
  return id !== "beginner";
}

export const applyBatches = ["B.T 기수 신청", "재수강", "일반 신청"];
/** 인텐시브반만 신청구분이 네 가지다("일반 재수강"은 인텐시브에서만 쓴다). */
export const applyBatchesIntensive = ["일반 신청", "일반 재수강", "B.T 기수 신청", "재수강"];
/** 쁘락띠까는 참여 방식이 세 가지다. 패키지는 시즌 2주차까지만 받는다. */
export const applyBatchesPractica = ["일일 참여", "쁘락띠까 패키지", "연속 패키지"];

/** 그 과정의 신청구분 목록. 다른 과정은 기존 세 가지 그대로다. */
export function applyBatchesFor(id) {
  if (id === "intensive") return applyBatchesIntensive;
  if (id === "practica") return applyBatchesPractica;
  return applyBatches;
}

/** 화면 표기용. 초급은 금액 하나, 나머지는 기수 / 일반.
 *  값은 한국어 금액("10만원", "14만4천원")으로 두고, 화면에서 won(lang, 값)으로 언어별 표기를 만든다.
 *  "00만원"은 아직 정해지지 않은 자리표시자다.
 *  retake 가 있는 과정은 일반 · B.T 기수자 · 재수강 세 금액을 따로 보여 준다.
 *  인텐시브는 openRetake(일반 재수강)까지 네 금액이다. */
export const applyPrices = {
  beginner: { once: "10만원" },
  "beginner-intermediate": { open: "16만원", cohort: "14만4천원", retake: "12만8천원" },
  intermediate: { open: "20만원", cohort: "18만원", retake: "16만원" },
  intensive: { open: "90만원", openRetake: "81만원", cohort: "81만원", retake: "72만원" },
  "upper-intermediate": { open: "24만원", cohort: "21만6천원", retake: "19만2천원" },
  advanced: { cohort: "00만원", open: "00만원" },
  walk: { cohort: "00만원", open: "00만원" },
  ocho: { cohort: "00만원", open: "00만원" },
  "special-intermediate": { cohort: "00만원", open: "00만원" },
  giro: { cohort: "00만원", open: "00만원" },
  "special-advanced": { cohort: "00만원", open: "00만원" },
  milonga: { cohort: "00만원", open: "00만원" },
  vals: { cohort: "00만원", open: "00만원" },
  practica: { day: "1만4천원", pack: "13만원", renew: "12만원" },
};
/** 인텐시브 수업료 안내(신청 페이지에서 인텐시브를 골랐을 때만 입금자명 자리에 보인다. 상세 페이지에는 두지 않는다).
 *  네 신청구분을 모두 보여 준다. total 은 24주 48시간 총액, split 은 분납 [1회차 수업료, 보증금, 2회차, 3회차].
 *  보증금은 마지막 4주 수업료로 대체된다. discount 는 화면에 붙는 할인 라벨의 i18n 키(없으면 빈 값).
 *  문구는 lib/i18n.js 의 feeGuideXxx 키. */
export const intensiveFees = [
  { batch: "일반 신청", total: "90만원", split: ["30만원", "15만원", "30만원", "15만원"], discount: "" },
  { batch: "일반 재수강", total: "81만원", split: ["27만원", "13.5만원", "27만원", "13.5만원"], discount: "applyPriceOff10" },
  { batch: "B.T 기수 신청", total: "81만원", split: ["27만원", "13.5만원", "27만원", "13.5만원"], discount: "applyPriceOff10" },
  { batch: "재수강", total: "72만원", split: ["24만원", "12만원", "24만원", "12만원"], discount: "applyPriceOff20" },
];
export const applySources = ["지인 추천", "네이버 블로그", "유튜브", "인스타그램", "페이스북", "네이버 카페", "네이버 클립", "기타"];

/** 화면에는 그리지 않는다. 계좌 복사 버튼만 이 문자열을 클립보드에 넣는다. */
export const depositAccount = "3333-35-9507665";

export function applyCourseById(id) {
  return applyCourses.find((course) => course.id === id) || null;
}

export function applyHref(id) {
  if (!applyCourseById(id)) return "";
  return `/apply?course=${encodeURIComponent(id)}`;
}
