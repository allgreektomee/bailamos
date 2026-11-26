/** 지운엘리(BAILAMOS TANGO · STUDIO ELLY) 커리큘럼.
 *  출처: 옵시디언 `art/탱고/일정 수업.md`, `지운엘리 — 9월 밀롱가 특강.md`.
 *  수강료·연락처는 넣지 않는다. */

export const brand = "BAILAMOS TANGO · STUDIO ELLY";

export const banner = "특강은 초급부터 상급까지 다섯 단계, 그리고 밀롱가·발스로 열립니다.";

export const classes = [
  {
    id: "beginner",
    status: "ongoing", // 홈 박스 표시: ongoing 진행중 · open 모집중 · soon 준비중
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
      "탱고를 처음 시작하는 분들을 위한 입문 과정입니다.",
      "어색함 없이 음악에 맞춰 자연스럽게 서고, 걷고, 파트너와 호흡을 맞추는 기본기를 탄탄히 다지는 데 집중합니다.",
      "복잡한 동작보다 '함께 걷는 즐거움'과 밀롱가에 첫발을 내딛을 수 있는 자신감을 만드는 것이 목표입니다.",
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
    status: "soon", // 8/22~10/31 종료 → 다음 기수 준비중. (ongoing 진행중 · open 모집중 · soon 준비중)
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
    intro: [
      "초급에서 익힌 걷기와 기본 스텝을 실제 춤으로 자연스럽게 연결해 보는 과정입니다.",
      "리더와 팔로워가 서로의 축과 신호를 더 선명하게 느끼며, 밀롱가에서 즐겁게 춤출 수 있는 흐름과 안정감을 키우는 데 집중합니다.",
      "배운 움직임을 부담 없이 꺼내 쓸 수 있는 '내 춤의 기본 틀'을 완성하는 것이 목표입니다.",
    ],
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
    status: "ongoing", // 홈 박스 표시: ongoing 진행중 · open 모집중 · soon 준비중
    name: "중급",
    image: "/photos/jiwoon.jpg",
    imagePosition: "center 12%",
    apply: { href: "https://forms.gle/4ck4Mdj1apC2eW46A", label: "신청하기" },
    day: "월",
    time: "20:00–21:10",
    start: "2026-11-02",
    end: "2026-12-28",
    // 8주 과정. 12/14 은 해외 워크숍으로 휴강이라 날짜가 한 주 건너뛴다.
    sessions: ["2026-11-02", "2026-11-09", "2026-11-16", "2026-11-23", "2026-11-30", "2026-12-07", "2026-12-21", "2026-12-28"],
    skips: ["2026-12-14"],
    timeNote: "Prac ~21:30까지",
    lead: "테크닉만이 아니라 언제 · 왜 · 어떻게 쓰는지.",
    intro: [
      "기본 스텝을 넘어, 다양한 요소를 하나의 흐름으로 자연스럽게 연결하는 과정입니다.",
      "새 동작을 많이 외우기보다 방향 전환과 회전(히로), 오초 등 각 요소의 구조와 원리를 이해하고 상황에 맞게 변형해 쓰는 감각을 기릅니다.",
      "배운 움직임을 내 몸의 언어로 소화해, 더 입체적이고 매끄러운 춤을 추는 것이 목표입니다.",
    ],
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
    status: "soon", // 9/13~11/15 종료 → 다음 기수 준비중. (ongoing 진행중 · open 모집중 · soon 준비중)
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
    intro: [
      "정교한 테크닉과 역동적인 움직임을 통해 춤의 완성도를 한 단계 끌어올리는 과정입니다.",
      "동작이 만들어지는 원리를 깊이 이해하고, 리더와 팔로워가 서로의 공간과 에너지에 민감하게 반응하며 호흡하는 방법을 다룹니다.",
      "기술적인 표현력과 음악적 해석이 자연스럽게 어우러지는 다이내믹한 탱고를 만드는 것이 목표입니다.",
    ],
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
    id: "advanced",
    status: "soon", // 홈 박스 표시: ongoing 진행중 · open 모집중 · soon 준비중
    name: "상급",
    image: "/teachers/couple.jpg?v=2",
    imagePosition: "center 35%",
    day: null,
    time: null,
    start: null,
    end: null,
    sessions: null,
    skips: [],
    lead: "오랜 경험과 기본기를 바탕으로, 자신만의 색깔과 깊이 있는 표현을 완성해 가는 과정입니다.",
    intro: [
      "오랜 경험과 기본기를 바탕으로, 자신만의 색깔과 깊이 있는 표현을 완성해 가는 과정입니다.",
      "고난도 테크닉의 정밀한 컨트롤은 물론, 음악의 미세한 결까지 파트너와 공유하며 즉흥성과 완성도를 함께 높입니다.",
      "단순한 동작의 나열을 넘어, 설득력 있고 밀도 높은 탱고로 무대와 밀롱가를 채우는 것이 목표입니다.",
    ],
    target: "오랜 경험과 기본기가 있는 분",
    weeks: [],
  },
  {
    id: "intensive",
    status: "ongoing", // 홈 박스 표시: ongoing 진행중 · open 모집중 · soon 준비중
    name: "인텐시브",
    level: "all", // 단계 표시: 초급~상급 전 단계 (홈 모바일 계단에서 '올레벨')
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
    intro: [
      "6개월 동안 천천히, 그리고 깊게 탱고의 본질을 다루는 집중 과정입니다.",
      "단기적으로 동작을 익히는 대신, 자세·걷기·아브라소부터 회전과 응용 동작까지 탱고의 전 과정을 체계적으로 다듬습니다.",
      "서로의 시간을 이해하며, 흔들리지 않는 기본기와 함께 평생 즐길 수 있는 탄탄한 탱고를 세우는 것이 목표입니다.",
    ],
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
    id: "walk",
    status: "soon", // 홈 박스 표시: ongoing 진행중 · open 모집중 · soon 준비중
    name: "초급 트레이닝 특강(Caminata, Abrazo)",
    level: 1, // 단계 표시: 장미 1송이
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
    lead: "까미나따와 아브라소. 탱고의 시작이자 끝을 초급에서 다시 잡는 특강입니다.",
    intro: [
      "탱고의 시작이자 끝인 까미나따(걷기)와 아브라소(포옹)에 온전히 집중하는 초급 트레이닝 특강입니다.",
      "땅을 딛는 감각, 에너지의 전달, 파트너와 함께 나아가는 호흡을 다듬어 가장 편안하고도 설득력 있는 걸음을 만드는 것이 목표입니다.",
      "아브라소는 팔로 조이는 자리가 아니라, 서로의 축을 존중하며 함께 걷는 공간을 만드는 일입니다. 걷기와 포옹을 따로 떼지 않고 한 몸처럼 익힙니다.",
    ],
    target: "처음 시작했거나, 걷기와 아브라소를 처음부터 다시 잡고 싶은 분",
    weeks: [],
  },
  {
    id: "ocho",
    status: "ongoing", // 홈 박스 표시: ongoing 진행중 · open 모집중 · soon 준비중
    name: "초중급 트레이닝 특강(Eje, Pivot, Ocho)",
    level: 2, // 단계 표시: 장미 2송이
    image: "/photos/elly-floral.jpg",
    imagePosition: "70% 20%",
    track: "special",
    rotating: true,
    day: "토 또는 월",
    time: "회차마다 안내",
    scheduleLabel: "이번 회차는 2026년 11월 7일–12월 5일, 토요일 17:10–18:10, 5회. 솔로 바디 트레이닝.",
    start: "2026-11-07",
    end: "2026-12-05",
    sessions: ["2026-11-07", "2026-11-14", "2026-11-21", "2026-11-28", "2026-12-05"],
    skips: [],
    lead: "에헤(축)와 피봇, 오초. 파트너와 추기 전에 내 몸부터 정밀하게 점검하는 초중급 트레이닝입니다.",
    intro: [
      "파트너와 추는 춤의 완성도를 높이기 위해, 솔로 트레이닝으로 내 몸의 에헤와 움직임을 정밀하게 점검하는 특강입니다.",
      "불필요한 힘을 빼고 체중 이동과 피봇, 오초의 원리를 몸으로 익혀, 어떤 상황에서도 흔들리지 않는 안정적인 밸런스를 만드는 것이 목표입니다.",
      "에헤가 잡히면 피봇이 가벼워지고, 피봇이 가벼워지면 오초가 커집니다. 세 가지를 한 흐름으로 봅니다.",
    ],
    target: "에헤 · 피봇 · 오초를 혼자 점검하고 싶은 분",
    weeks: [],
  },
  {
    id: "special-intermediate",
    status: "soon", // 홈 박스 표시: ongoing 진행중 · open 모집중 · soon 준비중
    name: "중급 특강",
    level: 3, // 단계 표시: 장미 3송이
    image: "/photos/jiwoon.jpg",
    imagePosition: "center 25%",
    track: "special",
    rotating: true,
    day: "토 또는 월",
    time: "회차마다 안내",
    scheduleLabel: "토요일 또는 월요일. 회차마다 시간이 정해집니다.",
    start: null,
    end: null,
    sessions: null,
    skips: [],
    lead: "초중급까지 익힌 것을 실제 춤의 흐름으로 묶는 중급 트레이닝 특강입니다.",
    intro: [
      "초중급에서 익힌 에헤·피봇·오초를 실제 춤의 흐름으로 묶는 중급 트레이닝 특강입니다.",
      "디아고날, 사까다, 오초 꼬르따도, 히로를 각각이 아니라 언제 · 왜 · 어떻게 쓰는지의 감각으로 다룹니다.",
      "회차마다 주제 하나를 골라 짧고 밀도 있게 갑니다. 정규 중급반과 함께 듣거나, 마친 뒤 한 번 더 짚을 때 좋습니다.",
    ],
    target: "초중급을 마쳤거나 중급반을 듣고 있는 분",
    weeks: [],
  },
  {
    id: "giro",
    status: "open", // 홈 박스 표시: ongoing 진행중 · open 모집중 · soon 준비중
    name: "중상급 특강(히로 콤비네이션)",
    level: 4, // 단계 표시: 장미 4송이
    image: "/teachers/elly.jpg?v=2",
    imagePosition: "center 35%",
    track: "special",
    rotating: true,
    day: "일",
    time: "14:30–15:50",
    scheduleLabel: "2026년 11월 29일 · 12월 6일, 일요일 14:30–15:50, 2회.",
    start: "2026-11-29",
    end: "2026-12-06",
    sessions: ["2026-11-29", "2026-12-06"],
    skips: [],
    lead: "히로의 다양한 구조와 사까다·테크닉을 유기적으로 연결해 더 풍성한 움직임을 만드는 특강입니다.",
    intro: [
      "히로의 다양한 구조와 사까다·테크닉을 유기적으로 연결해 더 풍성한 움직임을 만드는 특강입니다.",
      "단편적인 동작을 넘어 회전과 공간 활용이 매끄럽게 이어지는 다이내믹한 콤비네이션을 몸에 익히는 것이 목표입니다.",
    ],
    target: "중상급",
    weeks: [],
  },
  {
    id: "special-advanced",
    status: "soon", // 홈 박스 표시: ongoing 진행중 · open 모집중 · soon 준비중
    name: "상급 특강",
    level: 5, // 단계 표시: 장미 5송이
    image: "/hero-banner.jpg",
    imagePosition: "center 30%",
    track: "special",
    rotating: true,
    day: null,
    time: null,
    scheduleLabel: "회차가 정해지면 안내합니다.",
    start: null,
    end: null,
    sessions: null,
    skips: [],
    lead: "이미 가진 것을 흔들지 않고, 음악과 파트너에 맞춰 더 멀리 가는 상급 트레이닝입니다.",
    intro: [
      "새 동작을 더하는 자리가 아니라, 이미 가진 동작의 밀도와 정확도를 올리는 상급 트레이닝 특강입니다.",
      "사까다·볼레오·히로·엔로스께를 한 호흡에 묶고, 음악의 프레이즈에 맞춰 강약과 여백을 조절하는 감각을 다룹니다.",
      "리더와 팔로워가 서로의 즉흥을 읽고 받아 주는 데까지. 회차마다 주제 하나를 골라 깊게 갑니다.",
    ],
    target: "오랜 경험과 기본기가 있는 분",
    weeks: [],
  },
  {
    id: "milonga",
    status: "soon", // 홈 박스 표시: ongoing 진행중 · open 모집중 · soon 준비중
    name: "밀롱가 특강",
    level: "all", // 단계 표시: 전 단계 (홈 모바일에서 '올레벨')
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
    note: "아래는 2026년 10월에 진행한 회차입니다. 다음 밀롱가 특강은 일정이 정해지면 안내합니다.",
    lead: "밀롱가의 경쾌한 리듬과 꼼빠스를 몸으로 익히는 특강입니다.",
    intro: [
      "밀롱가의 경쾌한 리듬과 꼼빠스를 몸으로 익히는 특강입니다.",
      "빠른 음악 속에서도 급해지지 않도록, 작은 움직임으로 리듬을 타고 자연스럽게 방향을 바꾸며 회전하는 감각을 기릅니다.",
      "복잡한 스텝을 많이 외우기보다, 리듬을 듣고 몸으로 답하는 즐거움을 만드는 것이 목표입니다.",
    ],
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
    status: "soon", // 홈 박스 표시: ongoing 진행중 · open 모집중 · soon 준비중
    name: "발스 특강",
    level: 3, // 단계 표시: 장미 3송이
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
    lead: "3박자 왈츠 특유의 유려한 흐름과 회전의 연속성을 익히는 특강입니다.",
    intro: [
      "3박자 왈츠 특유의 유려한 흐름과 회전의 연속성을 익히는 특강입니다.",
      "빠르게 흐르는 음악 속에서도 스텝이 끊기지 않도록, 부드럽게 이어지며 돌고 돌아오는 감각을 다듬습니다.",
      "서정적인 음악을 자기만의 호흡으로 해석해, 물 흐르듯 자연스러운 발스로 표현하는 것이 목표입니다.",
    ],
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
  { id: "giro", name: "중상급 특강(히로 콤비네이션)", day: "일", time: "14:30–15:50" }, // 중상급(~11/15) 다음 일요일 14:30 특강
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

/** 월간일정. 수업 날짜는 위 classes 의 sessions 에서 가져오고,
 *  요일 반복(day)은 from~to 사이 매주 붙인다. to 가 없으면 계속 이어지는 수업이다.
 *  numbered: true 이면 "N주차" 를 붙인다 (dates 는 몇 번째 날짜인지, 요일 반복은 from 부터 몇 주째인지).
 *  달력이 보여 주는 마지막 달은 dates 가 있는 일정(정규 · 특강 · 행사)의 마지막 날이 속한 달이다.
 *  요일 반복(인텐시브 6개월 · 중급 · 쁘락)은 달력 끝을 정하지 않는다. */
const OTHER = (id) => classes.find((course) => course.id === id);

const monthRules = [
  { id: "beginner", name: "초급 3기", time: "18:10–19:10", dates: OTHER("beginner").sessions, numbered: true },
  { name: "특강", time: "17:10–18:10", dates: OTHER("ocho").sessions, href: "/#specials", numbered: true },
  {
    id: "upper-intermediate",
    name: "중상급",
    time: "14:30–15:50",
    dates: OTHER("upper-intermediate").sessions,
    numbered: true,
  },
  {
    id: "intensive",
    name: "인텐시브",
    time: "20:00–22:00",
    day: "화",
    from: OTHER("intensive").start,
    to: OTHER("intensive").end,
    numbered: true,
  },
  { id: "intermediate", name: "중급", time: "20:00–21:10", dates: OTHER("intermediate").sessions, numbered: true },
  { name: "쁘락", time: "16:00–19:00", day: "일", from: "2026-11-01", href: "/#practica" },
  // 하루짜리 행사. 날짜가 지나면 자동으로 지난 일정으로 흐려진다.
  {
    id: "giro",
    name: "중상급 특강(히로 콤비네이션)",
    key: "giro",
    time: "14:30–15:50",
    dates: OTHER("giro").sessions,
    numbered: true,
  },
  {
    name: "루미노소 빅 밀롱가",
    key: "luminoso",
    time: "20:00–01:00",
    place: "Andante",
    dates: ["2026-12-04"],
  },
];

function monthIndex(iso) {
  return Number(iso.slice(0, 4)) * 12 + Number(iso.slice(5, 7)) - 1;
}

/** 달력이 보여 줄 마지막 달 (monthIndex 값). */
export const lastCalendarMonth = monthIndex(
  monthRules
    .flatMap((rule) => rule.dates || [])
    .reduce((latest, date) => (date > latest ? date : latest), "0000-01-01"),
);

export function monthEvents(year, month) {
  if (year * 12 + (month - 1) > lastCalendarMonth) return [];
  const last = new Date(year, month, 0).getDate();
  const events = [];
  for (let day = 1; day <= last; day += 1) {
    const iso = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const dow = DOW[new Date(`${iso}T00:00:00`).getDay()];
    monthRules.forEach((rule) => {
      const hit = rule.dates
        ? rule.dates.includes(iso)
        : rule.day === dow && iso >= rule.from && (!rule.to || iso <= rule.to);
      if (!hit) return;
      let weekNo = null;
      if (rule.numbered) {
        weekNo = rule.dates ? rule.dates.indexOf(iso) + 1 : Math.floor(diffDays(iso, rule.from) / 7) + 1;
      }
      events.push({ ...rule, date: iso, dow, weekNo });
    });
  }
  return events.sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
}
