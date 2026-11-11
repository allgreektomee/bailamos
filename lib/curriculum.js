/** 지운엘리(BAILAMOS TANGO · STUDIO ELLY) 커리큘럼.
 *  출처: 옵시디언 `art/탱고/일정 수업.md`, `지운엘리 — 9월 밀롱가 특강.md`.
 *  수강료·연락처는 넣지 않는다. */

export const brand = "BAILAMOS TANGO · STUDIO ELLY";

export const banner = "특강은 오초·걷기·밀롱가·발스를 돌아가며 엽니다.";

export const classes = [
  {
    id: "beginner",
    name: "초급",
    image: "/photos/back.jpg",
    imagePosition: "center 18%",
    apply: { href: "https://forms.gle/K23YZ5xkep5MPigXA", label: "신청하기" },
    day: "토",
    time: "18:10–19:10",
    start: "2026-10-17",
    end: "2026-12-05",
    sessions: ["2026-10-17", "2026-10-24", "2026-10-31", "2026-11-07", "2026-11-14", "2026-11-21", "2026-11-28", "2026-12-05"],
    skips: [],
    timeNote: "수업 후 20:00까지 초급 쁘락",
    place: "스튜디오 엘리 (연남동)",
    duration: "8주 수업",
    lead: "처음 시작하는 8주 과정. 수업 뒤에 초급 쁘락이 이어집니다.",
    intro: [
      "Bailamos Tango 초급 수업은 약 3개월마다 8주간의 과정으로 진행됩니다. 개강 여부는 홈페이지에서 확인할 수 있습니다.",
      "“탱고는 실수할 게 없어요. 인생과는 달리 단순하죠. 그래서 탱고가 멋진 거예요. 만약 실수를 하면 스텝이 엉키고, 그게 바로 탱고죠.” — 영화 『여인의 향기』",
      "아르헨티나 땅고는 음악에 맞춰 함께 걷는 춤입니다. 기본 스텝만으로 전 세계 어디에서나 즉흥적으로 춤추며 즐길 수 있는 소통의 춤입니다.",
      "땅고가 처음인 분, 춤을 한 번도 배워 본 적 없어도 괜찮습니다. 시작은 했지만 땅고가 어렵게만 느껴졌던 분, 더 쉽게 배우고 즐기고 싶은 모든 분을 위한 수업입니다.",
      "어렵지 않아요. 외우는 춤도 없습니다. 음악을 듣고, 상대와 호흡을 맞추며 자연스럽게 움직이는 것을 배웁니다. 혼자 와도 괜찮고, 친구나 파트너와 함께 와도 환영합니다.",
      "아시아 챔피언이자 세계대회(문디알) 결승 진출자, 20년 경력의 탱고 티처와 처음 한 걸음부터 차분하게 시작합니다.",
    ],
    points: [
      "편하게 서는 방법",
      "음악에 맞춰 걷는 방법",
      "파트너와 부드럽게 연결하는 방법",
      "밀롱가라고 부르는, 춤추는 공간에 대한 이해",
    ],
    target: "처음 시작하는 분",
    weeks: [
      { topic: "땅고 걷기, 살리다" },
      { topic: "걷기 연습, 오쵸 살리다" },
      { topic: "오쵸 연습, 빠라다와 오쵸 아델란떼" },
      { topic: "오쵸 연습, 빠라다와 오쵸 꼬르따도" },
      { topic: "아브라소 아비에르또, 살리다와 오쵸 살리다의 방향전환" },
      { topic: "아브라소 아비에르또, 끄루사다와 빠라다, 오쵸 아델란떼와 오쵸 꼬르따도" },
      { topic: "아브라소 세라도(선택), 론다 운영의 기초" },
      { topic: "아브라소 세라도(선택), 모두 함께 론다 운영하기" },
    ],
  },
  {
    id: "beginner-intermediate",
    name: "초중급",
    image: "/photos/elly-floral.jpg",
    imagePosition: "center 15%",
    apply: { href: "https://cafe.naver.com/bailamostango/16", label: "소개 보기" },
    day: "토",
    time: "16:00–17:00",
    start: "2026-08-22",
    end: "2026-10-31",
    sessions: [
      "2026-08-22",
      "2026-08-29",
      "2026-09-12",
      "2026-09-19",
      "2026-10-10",
      "2026-10-17",
      "2026-10-24",
      "2026-10-31",
    ],
    skips: ["2026-09-05", "2026-09-26", "2026-10-03"],
    lead: "기본 스텝은 아는데 실전에서 연결이 안 될 때. 왜 움직이는지, 어떻게 잇는지.",
    target: "초급을 마친 분",
    weeks: [
      { topic: "아브라소와 살리다로 기본 연결·이동 흐름" },
      { topic: "실전에 필요한 살리다의 방향전환" },
      { topic: "오초의 구조 + 리딩 & 팔로잉" },
      { topic: "오초 아뜨라스 & 디아고날" },
      { topic: "빠라다와 상구치또로 빠우사" },
      { topic: "실전형 오초 꼬르따도 (전면, 회전)" },
      { topic: "메디오 히로 맛보기" },
      { topic: "메디아 루나 (겉모습은 비슷, 원리가 다름)" },
    ],
  },
  {
    id: "intermediate",
    name: "중급",
    image: "/photos/jiwoon.jpg",
    imagePosition: "center 12%",
    apply: { href: "https://forms.gle/4ck4Mdj1apC2eW46A", label: "신청하기" },
    day: "월",
    time: "20:00–21:10",
    start: "2026-07-13",
    end: "2026-09-07",
    sessions: null,
    skips: [],
    timeNote: "Prac ~21:30까지",
    lead: "테크닉만이 아니라 언제 · 왜 · 어떻게 쓰는지.",
    target: "초중급을 마친 분",
    weeks: [
      { topic: "살리다와 오초 아델란떼", detail: "밀롱가의 시작" },
      { topic: "디아고날과 오초 아뜨라스", detail: "공간" },
      { topic: "살리다 끄루사다와 빠라다 응용", detail: "멈춤" },
      { topic: "오초 아뜨라스와 사까다" },
      { topic: "오초 꼬르따도", detail: "춤의 맛" },
      { topic: "오초 아뜨라스와 볼레오", detail: "타이밍" },
      { topic: "깔레시따" },
      { topic: "메디오 히로 활용" },
    ],
  },
  {
    id: "upper-intermediate",
    name: "중상급",
    image: "/teachers/elly.jpg?v=2",
    imagePosition: "center 22%",
    apply: { href: "https://forms.gle/LEWKGM3HDYKbMP788", label: "신청하기" },
    day: "일",
    time: "14:30–15:50",
    start: "2026-09-13",
    end: "2026-11-15",
    sessions: [
      "2026-09-13",
      "2026-09-20",
      "2026-10-11",
      "2026-10-18",
      "2026-10-25",
      "2026-11-01",
      "2026-11-08",
      "2026-11-15",
    ],
    skips: ["2026-09-27", "2026-10-04"],
    lead: "패턴 이름만 익히는 수업이 아닙니다. 리더는 방향·피봇, 팔로워는 축·반응·타이밍으로 한 흐름을 만듭니다.",
    target: "중급 이상 (초보 수강 불가 권장)",
    warn: "중급에서 사까다·볼레오·히로·오초를 각각 써 본 분을 전제로, 두 가지 이상을 한 호흡에 묶습니다.",
    weeks: [
      { topic: "아구하 히로 + 사까다" },
      { topic: "아구하 히로 + 바리다" },
      { topic: "라피스 + 오초 아델란떼" },
      { topic: "사까다 + 오초" },
      { topic: "사까다 + 히로" },
      { topic: "사까다 + 볼레오 1" },
      { topic: "사까다 + 볼레오 2" },
      { topic: "사까다 + 간초" },
    ],
  },
  {
    id: "intensive",
    name: "인텐시브",
    image: "/hero.jpg",
    imagePosition: "center 40%",
    apply: { href: "https://forms.gle/28eappeie6mG7c8A8", label: "신청하기" },
    day: "화",
    time: "20:00–22:00",
    start: "2026-11-03",
    end: "2027-04-13",
    sessions: null,
    skips: [],
    startNote: "2026년 11월 3일 개강. 인원에 따라 한 주 늦어질 수 있습니다.",
    duration: "6개월 · 24주 (테마 6 × 4주)",
    lead: "8주 정규 반을 이어 붙인 풀코스. 패턴 이름만이 아니라 원리·메커니즘·음악까지.",
    target: "기초부터 중급까지 한 번에 쌓고 싶은 분",
    groups: [
      {
        title: "테마 1 · 서기, 걷기, 안기의 트레이닝",
        weeks: [
          "운동 원리 → 서는 자세 · 걷기 메커니즘",
          "상대 축 인지·존중 — 아브라소",
          "살리다 루틴으로 상대 영역 이해",
          "디아고날",
        ],
      },
      {
        title: "테마 2 · 방향성과 동작 루틴",
        weeks: [
          "방향 전환 원리 · 오초 트레이닝",
          "영역 인지 + 팔로워 피봇 — 오초 아델란떼·아뜨라스 리드·팔로",
          "살리다 + 끄루사다 + 오초 연결",
          "오초 꼬르따도",
        ],
      },
      {
        title: "테마 3 · 뮤지컬리티 기본",
        weeks: [
          "탱고 프레이즈 · 음악 듣기",
          "살리다·끄루사다·디아고날로 프레이즈 변화 1",
          "오초·꼬르따도 추가 — 프레이즈 변화 2",
          "여유·리듬 — 지금까지로 음악 표현",
        ],
      },
      {
        title: "테마 4 · 히로",
        weeks: [
          "히로 박스 실전 트레이닝",
          "방향 유도 → 히로 리드·팔로",
          "리더 방향전환 → 아구하 히로",
          "리더 방향전환 → 엔로스께 히로",
        ],
      },
      {
        title: "테마 5 · 메디오 히로 · 사까다",
        weeks: [
          "메디오 히로 + 께브라다",
          "사까다 원리 + 메디오 히로 조합",
          "양발 사까다",
          "사까다 + 아구하 히로 / 엔로스께 히로",
        ],
      },
      {
        title: "테마 6 · 팔로워 적극 표현",
        weeks: ["빠라다", "볼레오 + 빠라다", "깔레시따", "팔로워 박자 가지고 놀기"],
      },
    ],
  },
  {
    id: "private",
    name: "개인레슨",
    image: "/photos/back.jpg",
    imagePosition: "center 20%",
    private: true,
    duration: "1회 또는 10회",
    day: null,
    time: null,
    start: null,
    end: null,
    sessions: null,
    skips: [],
    lead: "엘리 혼자, 지운 혼자, 또는 두 분과 함께.",
    intro: [
      "개인레슨은 세 가지 중 고릅니다.",
      "엘리 개인, 지운 개인은 각자 한 시간입니다. 엘리와 지운 함께는 두 분이 한 시간에 봅니다.",
    ],
    target: "한 사람, 또는 두 분과 맞추고 싶은 분",
    weeks: [],
  },
  {
    id: "ocho",
    name: "오초",
    image: "/photos/elly-floral.jpg",
    imagePosition: "70% 20%",
    track: "special",
    rotating: true,
    day: "토 또는 월",
    time: "회차마다 안내",
    scheduleLabel: "이번 회차는 2026년 11월 7일–12월 5일, 토요일 17:00–18:00, 5회. 솔로 바디 트레이닝.",
    start: "2026-11-07",
    end: "2026-12-05",
    sessions: ["2026-11-07", "2026-11-14", "2026-11-21", "2026-11-28", "2026-12-05"],
    skips: [],
    lead: "오초를 중심으로 여는 특강입니다. 걷기·밀롱가·발스와 돌아가며 진행합니다.",
    target: "오초를 짚고 싶은 분",
    weeks: [],
  },
  {
    id: "walk",
    name: "걷기",
    image: "/hero.jpg",
    imagePosition: "30% 62%",
    track: "special",
    rotating: true,
    day: "토 또는 월",
    time: "회차마다 안내",
    scheduleLabel: "토요일 또는 월요일. 회차마다 시간이 정해집니다.",
    start: null,
    end: null,
    sessions: null,
    skips: [],
    lead: "걷기를 중심으로 여는 특강입니다. 오초·밀롱가·발스와 돌아가며 진행합니다.",
    target: "걷기를 다듬고 싶은 분",
    weeks: [],
  },
  {
    id: "milonga",
    name: "밀롱가",
    image: "/teachers/couple.jpg?v=2",
    imagePosition: "46% 24%",
    apply: { href: "https://forms.gle/sJRCWhfy3ECyzjY7A", label: "신청하기" },
    track: "special",
    rotating: true,
    day: "토 또는 월",
    time: "회차마다 안내",
    scheduleLabel: "2026년 10월은 월요일 20:00–22:00, 3회.",
    start: "2026-10-12",
    end: "2026-10-26",
    sessions: ["2026-10-12", "2026-10-19", "2026-10-26"],
    skips: [],
    place: "연남 스튜디오 엘리",
    note: "아래는 2026년 10월에 진행한 회차입니다. 다음 밀롱가는 오초·걷기·발스와 돌아가며 열립니다.",
    lead: "밀롱가 리사 · 드라스삐에 · 전환. 큰 동작 대신 작은 스텝으로 박을 디디는 밀롱가.",
    target: "밀롱가에서 걷기와 리듬을 다듬고 싶은 분",
    weeks: [
      {
        topic: "밀롱가 리듬의 이해와 밀롱가 리사",
        detail: "1교시 발도사 스텝을 활용한 밀롱가 걷기 · 2교시 밀롱가 걷기와 자연스러운 방향전환",
      },
      {
        topic: "밀롱가 드라스삐에를 위한 기본 스텝",
        detail: "1교시 더블비트를 활용한 간단한 루틴 하나 · 2교시 기본 루틴 무한 반복",
      },
      {
        topic: "밀롱가 리사와 드라스삐에의 전환",
        detail: "1교시 기본 루틴에서 발도사로 전환 · 2교시 기본 루틴에서 방향전환 걷기로 전환",
      },
    ],
  },
  {
    id: "vals",
    name: "발스",
    image: "/photos/back.jpg",
    imagePosition: "82% 28%",
    apply: { href: "https://forms.gle/kxC5tACvJGpqFgAb6", label: "신청하기" },
    track: "special",
    rotating: true,
    day: "토 또는 월",
    time: "회차마다 안내",
    scheduleLabel: "토요일 또는 월요일. 회차마다 시간이 정해집니다.",
    start: null,
    end: null,
    sessions: null,
    skips: [],
    lead: "발스를 중심으로 여는 특강입니다. 오초·걷기·밀롱가와 돌아가며 진행합니다.",
    target: "발스를 짚고 싶은 분",
    weeks: [],
  },
];

const DOW = ["일", "월", "화", "수", "목", "금", "토"];
export const SCHEDULE_DAYS = ["월", "화", "수", "목", "금", "토", "일"];

export function seoulToday(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function resolveToday(raw) {
  if (typeof raw === "string" && /^\d{4}-\d{2}-\d{2}$/.test(raw)) {
    const d = new Date(`${raw}T00:00:00`);
    if (!Number.isNaN(d.getTime())) return raw;
  }
  return seoulToday();
}

export function formatDate(iso) {
  const d = new Date(`${iso}T00:00:00`);
  return `${d.getMonth() + 1}/${d.getDate()}(${DOW[d.getDay()]})`;
}

export function diffDays(a, b) {
  const ms = new Date(`${a}T00:00:00`) - new Date(`${b}T00:00:00`);
  return Math.round(ms / 86400000);
}

export function classState(course, today) {
  if (course.rotating || !course.start) return course.startNote ? "upcoming" : null;
  if (today < course.start) return "upcoming";
  if (today > course.end) return "ended";
  return "ongoing";
}

export const WEEK_ORDER = ["월", "화", "수", "목", "금", "토", "일"];

/** 주간일정. 같은 요일은 한 번만 보여 주고, 몇 주차는 나중에 붙인다. */
export const weekPlan = [
  { id: "intermediate", name: "중급", day: "월", time: "20:00–21:10" },
  { id: "intensive", name: "인텐시브", day: "화", time: "20:00–22:00" },
  { name: "특강", day: "토", time: "17:10–18:10", href: "/#specials" },
  { id: "beginner", name: "초급 3기", day: "토", time: "18:10–19:10" },
  { id: "upper-intermediate", name: "중상급", day: "일", time: "14:30–15:50" },
  { name: "쁘락", day: "일", time: "16:00–19:00", href: "/#practica" },
].sort(
  (a, b) =>
    WEEK_ORDER.indexOf(a.day) - WEEK_ORDER.indexOf(b.day) || a.time.localeCompare(b.time),
);

export function hasSessionDates(course) {
  return !!(course.weeks && course.sessions && course.sessions.length === course.weeks.length);
}

/** past / now(7일 이내) / next / future */
export function weekStatuses(course, today) {
  const n = course.weeks ? course.weeks.length : 0;
  const out = Array(n).fill("future");
  if (!hasSessionDates(course)) return out;
  let nextFound = false;
  course.sessions.forEach((session, i) => {
    const delta = diffDays(session, today);
    if (delta < 0) out[i] = "past";
    else if (!nextFound) {
      out[i] = delta <= 7 ? "now" : "next";
      nextFound = true;
    }
  });
  return out;
}

export function getCourse(id) {
  return classes.find((course) => course.id === id) || null;
}

export function initialClassId(today) {
  return (classes.find((course) => classState(course, today) === "ongoing") || classes[0]).id;
}

export function scheduleSlots(day) {
  const fromClasses = classes
    .filter((course) => course.day === day && course.track !== "special")
    .map((course) => ({
      id: course.id,
      time: course.time,
      label: course.name,
      start: course.start,
      end: course.end,
    }));
  return fromClasses.sort((a, b) => a.time.localeCompare(b.time));
}

/** 휴강일을 수업 사이에 시간순으로 끼운 행. */
export function weekRows(course) {
  const dated = hasSessionDates(course);
  const rows = course.weeks.map((week, i) => ({
    type: "week",
    index: i,
    date: dated ? course.sessions[i] : null,
    week,
  }));
  if (course.sessions) {
    (course.skips || []).forEach((date) => rows.push({ type: "skip", date }));
  }
  rows.sort((a, b) => {
    if (a.date && b.date) return a.date.localeCompare(b.date);
    return (a.index ?? 0) - (b.index ?? 0);
  });
  return rows;
}
