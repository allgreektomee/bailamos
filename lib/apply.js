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
/** 신청구분(기수·재수강·일반)을 고르게 하지 않는 과정: 초급, 인텐시브, 쁘락 */
export function hasBatch(id) {
  return id !== "beginner" && id !== "intensive" && id !== "practica";
}

/** 구분을 고르지 않는 과정이 시트에 남기는 값. 인텐시브는 일반(할인 없음) 하나뿐이다. */
export function fixedBatch(id) {
  return id === "intensive" ? "일반 신청" : "";
}

export const applyBatches = ["B.T 기수 신청", "재수강", "일반 신청"];

/** 화면 표기용. 초급은 금액 하나, 나머지는 기수 / 일반. */
export const applyPrices = {
  beginner: { once: "00만원" },
  "beginner-intermediate": { cohort: "00만원", open: "00만원" },
  intermediate: { cohort: "00만원", open: "00만원" },
  "upper-intermediate": { cohort: "00만원", open: "00만원" },
  advanced: { cohort: "00만원", open: "00만원" },
  intensive: { open: "00만원" },
  walk: { cohort: "00만원", open: "00만원" },
  ocho: { cohort: "00만원", open: "00만원" },
  "special-intermediate": { cohort: "00만원", open: "00만원" },
  giro: { cohort: "00만원", open: "00만원" },
  "special-advanced": { cohort: "00만원", open: "00만원" },
  milonga: { cohort: "00만원", open: "00만원" },
  vals: { cohort: "00만원", open: "00만원" },
  practica: { term: "00만원" },
};
export const applySources = ["지인 추천", "페이스북", "네이버 카페", "인스타그램", "다음 카페", "기타"];

/** 화면에는 그리지 않는다. 계좌 복사 버튼만 이 문자열을 클립보드에 넣는다. */
export const depositAccount = "3333-35-9507665";

export function applyCourseById(id) {
  return applyCourses.find((course) => course.id === id) || null;
}

export function applyHref(id) {
  if (!applyCourseById(id)) return "";
  return `/apply?course=${encodeURIComponent(id)}`;
}
