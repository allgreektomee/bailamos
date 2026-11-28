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
    apply: { href: "https://forms.gle/K23YZ5xkep5MPigXA", label: "수업 신청" },
    day: "토",
    time: "18:10–19:10",
    start: "2026-10-17",
    end: "2026-12-05",
    sessions: ["2026-10-17", "2026-10-24", "2026-10-31", "2026-11-07", "2026-11-14", "2026-11-21", "2026-11-28", "2026-12-05"],
    skips: [],
    timeNote: "수업 후 20:00까지 초급 쁘락",
    place: "스튜디오 엘리 (연남동)",
    duration: "8주 수업",
    lead: "탱고 첫걸음, 맛보기",
    // 상세 페이지 소개 박스. 빈 줄까지 그대로 살려 문단 하나로 찍는다(white-space: pre-line).
    story: [
      `💃🕺“탱고는 실수할 게 없어요. 인생과는 달리 단순하죠.\n그래서 탱고가 멋진 거에요. 만약 실수를 하면 스텝이 엉키고, 그게 바로 탱고죠."\n\n“No mistakes in the tango, not like life. It’s simple. That’s what makes the tango so great. If you make a mistake, get all tangled up, just tango on.”\n\n-영화 '여인의 향기'中`,
      `🇦🇷아르헨티나 땅고는 음악에 맞춰 함께 걷는 춤입니다.\n기본 스텝만으로 전세계 어느곳에서나 즉흥적으로 춤추며\n즐길수있는 소통의 춤입니다.`,
      `👉땅고가 처음인 분!\n춤을 한 번도 배워본 적 없어도 괜찮습니다.\n\n👉시작은 했지만 탱고가 어렵게만 느껴졌던 분!\n더욱 쉽게 배우고 즐기고 싶은 모든 분들을 위한 수업입니다.`,
      `🪄어렵지 않아요~😁  외우는 춤도 없습니다.\n\n음악을 듣고,  상대와 호흡을 맞추며\n\n자연스럽게 움직이는 것을 배웁니다.\n\n혼자 와도 괜찮고,\n\n친구나 파트너와 함께 와도 환영합니다.😘`,
      `📌아시아 챔피언이자 세계대회(문디알)결승진출자!!\n  20년 경력의 탱고 티쳐와함께 시작부터 쉽고!!재밌게!!\n\n🩰처음 한 걸음부터 차분하게 함께 시작해요.`,
      `💝💝💝기수자 특별혜택 💝💝💝\n-초급이후 모든 수업 10%할인!!\n- 재수강 20%할인!!(1년안에 재수강시)`,
    ],
    // 라벨 박스 안, 요일·시간 위에 오는 초급 안내 블록. 지운 님 문구 그대로.
    flash: {
      head: "⚡️초급 수업에서는",
      items: [
        "편하게 서는 방법",
        "음악을 들으며 걷는 방법",
        "파트너와 부드럽게 연결하는 방법",
        '"밀롱가"라고 부르는 춤 추는 공간에 대한 이해',
      ],
      tail: "를 천천히, 쉽게 배웁니다.",
    },
    target: "처음 시작하는 분",
    weeks: [
      { topic: "땅고 걷기, 살리다" },
      { topic: "걷기 연습, 오쵸 살리다" },
      { topic: "피봇의 기본 연습과 오초의 이해, 빠라다와 오쵸 아델란떼" },
      { topic: "레보떼와 오초 꼬르따도의 루틴을 걷기의 느낌으로" },
      { topic: "아브라소 아비에르또의 경험, 살리다와 오쵸 살리다로 론다의 방향성 이해하기" },
      { topic: "아브라소 아비에르또, 5주차의 루틴에 빠라다와 오초 아델란떼 연결" },
      { topic: "아브라소 아비에르또, 5주차의 루틴에 다른 옵션 오초 꼬르따도 연결" },
      { topic: "아브라소 세라도의 경험(선택), 초급에서 배운 루틴들을 활용해서 춤추기" },
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
    lead: "리듬과 함께 실전을 위한 준비",
    intro: [
      "초급에서 익힌 걷기와 기본 스텝을 실제 춤으로 자연스럽게 연결해 보는 과정입니다.",
      "리더와 팔로워가 서로의 축과 신호를 더 선명하게 느끼며, 밀롱가에서 즐겁게 춤출 수 있는 흐름과 안정감을 키우는 데 집중합니다.",
      "배운 움직임을 부담 없이 꺼내 쓸 수 있는 '내 춤의 기본 틀'을 완성하는 것이 목표입니다.",
    ],
    // 라벨 박스 안, 요일·시간 위에 오는 초중급 안내 블록. 초급과 같이 머리줄 + 점 불릿 목록.
    // 항목이 모두 "~분!"으로 끝나므로 맺음줄은 두지 않는다.
    flash: {
      head: "⚡️초중급 수업에서는",
      items: [
        "초급을 마쳤지만, 막상 음악이 나오면 발이 멈칫하시는 분!",
        "정박자 걷기를 넘어 땅고 특유의 쫀득한 리듬(더블 비트)을 즐기고 싶은 분!",
        "땅고의 필수 동작 오초를 실전 론다에서 활용하고 싶으신 분!",
        "플로어의 흐름(론다)을 좀 더 이해하고 실제 밀롱가에 가서 다른 커플들과 함께 춤을 출 준비를 하고 싶은 분!",
      ],
    },
    // 상세 페이지 소개 박스. 첫 토막은 인용처럼 크게, 빈 줄까지 그대로 살려 찍는다(white-space: pre-line).
    story: [
      `💃🕺 "걷기가 익숙해졌다면, 이제 땅고 음악과 친해질 첫 번째 단계 리듬을 익힐 시간!"`,
      `초급반에서 아브라소와 기본 걷기로 땅고와 첫인사를 나누셨나요?`,
      `이제 그 걸음에 기분 좋은 리듬감과 자연스러운 방향 전환을 더해, 밀롱가 플로어 위에서 훨씬 더 자유롭게 유영하는 법을 배울 차례입니다! 🎶`,
      `🪄 어려운 회전 동작은 아직 없어요~ 😊\n외우는 안무도 없습니다!`,
      `배운 기본기 안에서 리듬을 쪼개고, 방향을 바꾸고, 대각선으로 공간을 넓혀가며\n파트너와 더욱 깊이 호흡하는 법을 차근차근 익혀갑니다.`,
      `혼자 오셔도, 파트너와 함께 오셔도 좋습니다.\n기본 걸음이 음악이 되는 순간, 진짜 땅고의 매력을 함께 경험해요! 😘`,
    ],
    target: "초급을 마친 분 혹은 땅고를 시작한 지 2개월 이상 되신 분",
    weeks: [
      { topic: "초급에서 배운 아브라소와 살리다를 통해 기본 연결과 이동 흐름 기억하기" },
      { topic: "살리다 루틴에 리듬을 더하기(더블 비트)" },
      { topic: "레보떼와 오초 꼬르따도의 더블 비트 활용" },
      { topic: "빠라다와 오초 꼬르따도" },
      { topic: "피봇을 활용한 오초의 연습, 리딩과 팔로잉" },
      { topic: "실전 오초의 활용(오초 아뜨라스의 리딩과 팔로잉)" },
      { topic: "새로운 걷기 디아고날(대각선)의 활용" },
      { topic: "초중급에서 배운 동작, 루틴들을 활용해 론다의 방향성 익히기" },
    ],
  },
  {
    id: "intermediate",
    status: "ongoing", // 홈 박스 표시: ongoing 진행중 · open 모집중 · soon 준비중
    name: "중급",
    image: "/photos/jiwoon.jpg",
    imagePosition: "center 12%",
    apply: { href: "https://forms.gle/4ck4Mdj1apC2eW46A", label: "수업 신청" },
    day: "월",
    time: "20:00–21:10",
    start: "2026-11-02",
    end: "2026-12-28",
    // 8주 과정. 12/14 은 해외 워크숍으로 휴강이라 날짜가 한 주 건너뛴다.
    sessions: ["2026-11-02", "2026-11-09", "2026-11-16", "2026-11-23", "2026-11-30", "2026-12-07", "2026-12-21", "2026-12-28"],
    skips: ["2026-12-14"],
    timeNote: "Prac ~21:30까지",
    lead: "실전(밀롱가)에 도전",
    intro: [
      "기본 스텝을 넘어, 다양한 요소를 하나의 흐름으로 자연스럽게 연결하는 과정입니다.",
      "새 동작을 많이 외우기보다 방향 전환과 회전(히로), 오초 등 각 요소의 구조와 원리를 이해하고 상황에 맞게 변형해 쓰는 감각을 기릅니다.",
      "배운 움직임을 내 몸의 언어로 소화해, 더 입체적이고 매끄러운 춤을 추는 것이 목표입니다.",
    ],
    // 라벨 박스 안, 요일·시간 위에 오는 중급 안내 블록. 초급·초중급과 같이 머리줄 + 점 불릿 목록(맺음줄 없음).
    // 항목이 모두 "~분!"으로 끝나므로 맺음줄은 두지 않는다.
    flash: {
      head: "⚡️중급 수업에서는",
      items: [
        "초중급에서 익힌 더블 비트 리듬 위에 멜로디의 흐름까지 얹어 춤추고 싶은 분!",
        "히로·메디오 히로와 디아고날로 방향 전환과 회전을 더 부드럽게 풀어가고 싶은 분!",
        "깔레시따와 볼레오처럼 파트너와 호흡하며 여운을 남기는 동작을 익히고 싶은 분!",
        "동작을 끼워 맞추기보다 내가 표현하려는 의도대로 론다를 운영하고 싶은 분!",
        "본격적으로 밀롱가에 가서 자유롭게 춤추고 싶은 분!",
      ],
    },
    // 상세 페이지 소개 박스(초급·초중급과 같은 스타일). 첫 토막은 인용처럼 크게 찍힌다.
    story: [
      `💃🕺 "리듬을 탔다면, 이제는 음악의 멜로디를 따라 춤에 나만의 색을 입힐 시간!"`,
      `초중급에서 더블 비트와 기본 연결로 땅고의 즐거움을 맛보셨나요?`,
      `중급에서는 멜로디의 결에 귀를 기울여 보세요. 오초와 메디오 히로로 회전의 흐름을 만들고, 깔레시따와 볼레오로 춤에 쉼표와 여운을 더하는 법을 익힙니다. 🎶`,
      `🪄 외우는 긴 루틴을 따라가는 수업은 아닙니다.`,
      `레보떼와 디아고날, 오초 아뜨라스를 자연스럽게 이어가며 론다 안에서 내 의도대로 공간을 쓰고 표현하는 감각을 키워갑니다.`,
      `혼자 오셔도, 파트너와 함께 오셔도 좋습니다. 음악을 내 몸의 언어로 풀어내는 즐거움을 함께 느껴보세요! 😘`,
    ],
    target: "초중급을 마친 분 혹은 땅고를 시작한 지 4개월 이상 되신 분",
    weeks: [
      { topic: "레보떼와 오초 아뜨라스를 활용한 살리다의 왼쪽 방향전환" },
      { topic: "레보떼와 오초 꼬르따도의 전진형 반복 루틴" },
      { topic: "히로 스텝의 이해와 메디오 히로스텝의 활용" },
      { topic: "디아고날과 메디오 히로(께브라다)" },
      { topic: "디아고날(혹은 오초 아뜨라스)과 깔레시따의 맛보기" },
      { topic: "디아고날(혹은 오초 아뜨라스)과 볼레오" },
      { topic: "메디오 히로의 활용" },
      { topic: "초중급·중급 수업에서 배운 동작들로 음악의 리듬과 멜로디를 듣고 활용하며 론다의 운영 스킬 완성하기" },
    ],
  },
  {
    id: "upper-intermediate",
    status: "soon", // 9/13~11/15 종료 → 다음 기수 준비중. (ongoing 진행중 · open 모집중 · soon 준비중)
    name: "중상급",
    image: "/teachers/elly.jpg?v=2",
    imagePosition: "center 22%",
    apply: { href: "https://forms.gle/LEWKGM3HDYKbMP788", label: "수업 신청" },
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
    lead: "회전동작의 시작",
    intro: [
      "정교한 테크닉과 역동적인 움직임을 통해 춤의 완성도를 한 단계 끌어올리는 과정입니다.",
      "동작이 만들어지는 원리를 깊이 이해하고, 리더와 팔로워가 서로의 공간과 에너지에 민감하게 반응하며 호흡하는 방법을 다룹니다.",
      "기술적인 표현력과 음악적 해석이 자연스럽게 어우러지는 다이내믹한 탱고를 만드는 것이 목표입니다.",
    ],
    target: "중급을 마친 분 혹은 땅고를 시작한 지 6개월 이상 되신 분",
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
    lead: "탱고 음악과 친해지기",
    intro: [
      "오랜 경험과 기본기를 바탕으로, 자신만의 색깔과 깊이 있는 표현을 완성해 가는 과정입니다.",
      "고난도 테크닉의 정밀한 컨트롤은 물론, 음악의 미세한 결까지 파트너와 공유하며 즉흥성과 완성도를 함께 높입니다.",
      "단순한 동작의 나열을 넘어, 설득력 있고 밀도 높은 탱고로 무대와 밀롱가를 채우는 것이 목표입니다.",
    ],
    target: "중상급을 마친 분 혹은 땅고를 시작한 지 8개월 이상 되신 분",
    weeks: [],
  },
  {
    id: "intensive",
    status: "ongoing", // 홈 박스 표시: ongoing 진행중 · open 모집중 · soon 준비중
    name: "인텐시브",
    level: "all", // 단계 표시: 초급~상급 전 단계 (홈 모바일 계단에서 '올레벨')
    image: "/hero.jpg",
    imagePosition: "center 40%",
    apply: { href: "https://forms.gle/28eappeie6mG7c8A8", label: "수업 신청" },
    day: "화",
    time: "20:00–22:00",
    start: "2026-11-03",
    end: "2027-04-13",
    sessions: null,
    skips: [],
    startNote: "2026년 11월 3일 개강. 인원에 따라 한 주 늦어질 수 있습니다.",
    duration: "6개월 · 24주 (테마 6 × 4주)",
    lead: "초중급부터 중상급까지를 한번에",
    intro: [
      "6개월 동안 천천히, 그리고 깊게 탱고의 본질을 다루는 집중 과정입니다.",
      "단기적으로 동작을 익히는 대신, 자세·걷기·아브라소부터 회전과 응용 동작까지 탱고의 전 과정을 체계적으로 다듬습니다.",
      "서로의 시간을 이해하며, 흔들리지 않는 기본기와 함께 평생 즐길 수 있는 탄탄한 탱고를 세우는 것이 목표입니다.",
    ],
    target: "기초부터 중급 이상까지 한 번에 쌓고 싶은 분",
    // 상세 페이지 소개 박스. 첫 토막은 인용처럼 크게 찍힌다(white-space: pre-line). 수업료 안내는 상세에 두지 않고 신청 페이지에서만 보여 준다.
    story: [
      `🪄수업 목표와 내용\n\n춤을 배운다는 건, 발걸음을 외우는 일이 아니라 서로의 시간을 이해하는 일에 가깝습니다.\n이 6개월 인텐시브 과정은 그 ‘시간’을 천천히, 그러나 깊게 다루는 여정입니다.`,
      `📌 6개월 인텐시브 클래스 소개\n\n처음 서는 순간부터, 음악 속에서 함께 숨 쉬는 마지막 순간까지.`,
      `이 과정은 탱고의 가장 본질적인 요소인 서기, 걷기, 연결, 그리고 방향을 차근차근 쌓아 올립니다.`,
      `단순히 스텝을 배우는 수업이 아닙니다.\n\n몸의 구조를 이해하고, 상대와의 관계를 느끼며, 음악 안에서 스스로 선택할 수 있는 힘을 기르는 과정입니다.`,
      `💫6개월 뒤,\n당신의 춤은 더 많아지지 않습니다.\n대신 더 선명해집니다.\n불필요한 움직임은 사라지고,\n한 걸음 한 걸음에 의도가 생깁니다.\n그리고 어느 순간,\n음악이 흐르면\n생각이 아니라 몸이 먼저 대답하게 됩니다.`,
    ],
    // 라벨 박스 안, 요일·시간 위에 오는 추천 안내(점 불릿).
    flash: {
      head: "✨ 이 수업은 이런 분들에게 추천합니다",
      items: [
        "기본을 다시 정리하고 싶은 분",
        "스텝은 아는데 춤이 연결되지 않는 분",
        "음악과 더 자연스럽게 어울리고 싶은 분",
        "리딩과 팔로잉을 넘어서 ‘함께 춤추고 싶은’ 분",
      ],
    },
    // 추천 안내 아래에 이어 붙는 안내 블록. 머리줄은 두 줄로 나뉜다(white-space: pre-line).
    notice: {
      head: "초중급부터 중상급까지 연결되는,\n특강의 트레이닝까지 합쳐진 풀코스 과정",
      items: [
        "성비·인원 선별 후 개별 연락으로 최종 확정됩니다.",
        "공휴일·연휴·스튜디오 사정에 따라 휴강될 수 있습니다.",
      ],
    },
    // 테마(4주씩 6개). desc 는 테마 소개 글, weeks 는 주차별 제목(topic)과 세부 항목(detail, 줄바꿈으로 구분).
    groups: [
      {
        title: "테마 1 · 서기, 걷기, 안기의 트레이닝",
        desc: "땅고의 출발점.\n\n올바르게 서고, 편안하게 걷고, 자연스럽게 연결되는 법을 배웁니다.\n\n“잘 걷는 사람”이 아니라, “함께 걷는 사람”으로 변화하는 시간",
        weeks: [
          {
            topic: "땅고의 시작, 바르게 서기와 편안하게 걷기",
            detail: "• 바르게 서는 방법과 일상의 걷기를 땅고음악과 함께 걷기\n• 파트너와 함께 걸을 수 있는 라인 이해하기",
          },
          {
            topic: "아브라소의 이해와 연습",
            detail: "• 고정되지 않는 아브라소의 이해와 변화의 가능성\n• 아브라소와 살리다",
          },
          {
            topic: "땅고의 베이직 루틴",
            detail: "• 살리다와 살리다 끄루사다\n• 론다와 살리다",
          },
          {
            topic: "살리다의 활용",
            detail: "• 방향전환의 이해와 연습\n• 레보떼를 활용한 방향전환",
          },
        ],
      },
      {
        title: "테마 2 · 방향전환의 핵심 오초의 원리와 활용",
        desc: "몸의 분리(디소시아시온)와 회전의 이해를 통해\n\n오초를 단순한 동작이 아닌 ‘대화의 도구’로 만듭니다.",
        weeks: [
          {
            topic: "오초 아델란떼와 아뜨라스",
            detail: "• 오초 아델란떼의 이해와 연습 방법\n• 오초 아뜨라스의 이해와 연습 방법",
          },
          {
            topic: "오초의 리딩과 팔로잉",
            detail: "• 오초 아델란떼의 리딩과 팔로잉\n• 오초 아뜨라스의 리딩과 팔로잉",
          },
          {
            topic: "오초의 활용",
            detail: "• 살리다 끄루사다와 빠라다 그리고 오초 아델란떼\n• 레보떼와 오초 아뜨라스",
          },
          {
            topic: "디아고날의 활용",
            detail: "• 디아고날과 오초 아뜨라스\n• 레보떼와 오초 그리고 디아고날",
          },
        ],
      },
      {
        title: "테마 3 · 걷기와 오초를 활용한 루틴의 연습",
        desc: "실전에서 살아있는 걷기의 루틴 걷기와 피봇을 조합해\n\n밀롱가에서 자연스럽게 흐르는 움직임을 만들어냅니다.\n\n즉흥 속에서도 흔들리지 않는 기본을 완성합니다.",
        weeks: [
          {
            topic: "오초 꼬르따도",
            detail: "• 오초 꼬르따도의 리딩과 팔로잉\n• 오초 꼬르따도의 변형",
          },
          {
            topic: "레보떼와 오초",
            detail: "• 레보떼와 오초 아델란떼\n• 레보떼와 오초 아뜨라스",
          },
          {
            topic: "리더의 걷기와 팔로워의 오초 루틴",
            detail: "• 디아고날과 레보떼\n• 디아고날과 꼴가다",
          },
          {
            topic: "팔로워의 메디오 히로 스텝 활용",
            detail: "• 오초 아뜨라스와 메디오 히로 스텝의 활용\n• 메디오 히로 스텝과 오초 아뜨라스",
          },
        ],
      },
      {
        title: "테마 4 · 회전 동작의 기초",
        desc: "회전은 기술이 아니라 구조입니다.\n\n히로의 원리를 이해하고, 다양한 회전 동작으로 확장해 나갑니다.",
        weeks: [
          {
            topic: "히로 스텝의 트레이닝 방법과 팔로워의 길",
            detail: "• 히로 박스 스텝의 트레이닝 방법\n• 팔로워의 히로 스텝을 이해하기위한 회전동작",
          },
          {
            topic: "아구하 히로와 엔로스께 히로 기본",
            detail: "• 엔뜨라다와 아구하 히로\n• 프레임의 변형으로 만드는 엔로스께 히로",
          },
          {
            topic: "사까다를 활용한 회전동작 1",
            detail: "• 사까다의 이해와 활용\n• 사까다와 라피스 히로",
          },
          {
            topic: "사까다를 활용한 회전동작 2",
            detail: "• 반대발로 시작하는 사까다와 히로\n• 사까다 히로에서 엔로스께로 연결",
          },
        ],
      },
      {
        title: "테마 5 · 걷기의 루틴과 회전의 연결",
        desc: "실전용 걷기의 루틴에서 연결되는 회전 동작으로 운영과 기술을 정복하는 단계.\n\n주위를 보는 눈과 공간의 활용을 극대화 시키는 능력을 키우는 시간 입니다.",
        weeks: [
          {
            topic: "레보떼와 회전동작",
            detail: "• 레보떼에서 연결 할 수 있는 회전 동작(왼쪽)\n• 레보떼에서 연결 할 수 있는 회전 동작(오른쪽)",
          },
          {
            topic: "오초 걷기 루틴에서 연결되는 회전 동작",
            detail: "• 아메리까나와 회전 동작\n• 메디오 히로에서 연결하는 사까다와 히로",
          },
          {
            topic: "리더의 빽스텝에서 시작하는 회전동작",
            detail: "• 걷기의 마무리에서 연결 할 수 있는 회전동작\n• 걷기의 연결성을 이용한 회전동작",
          },
          {
            topic: "볼레오의 활용",
            detail: "• 자연스럽게 만들어내는 볼레오의 빌드업\n• 볼레오에서 연결하는 회전동작",
          },
        ],
      },
      {
        title: "테마 6 · 다양한 땅고의 응용동작",
        desc: "실습한 루틴들에서 공연에서 보던 동작들의 원리를 살펴보고 밀롱가에서 활용할 수 있는 방법들을 연습하는 단계.\n\n공간의 활용을 이해한다면 확장된 동작들을 어떻게 활용 할 수 있을지가 보입니다.",
        weeks: [
          {
            topic: "엔간체, 볼까다",
            detail: "• 오초의 연결에서 팔로워의 빠라다를 확장 해서 엔간체로 연결\n• 빠라다의 확장에서 리더의 움직임으로 만드는 볼까다",
          },
          {
            topic: "바리다와 보떼샤",
            detail: "• 오초를 활용한 직선의 바리다와 보떼샤\n• 회전 동작에서의 바리다",
          },
          {
            topic: "꼴가다",
            detail: "• 실전용 가벼운 꼴가다\n• 조금 더 확장된 꼴가다",
          },
          {
            topic: "간초",
            detail: "• 간초의 원리 이해, 걷기 루틴에서의 간초\n• 회전 동작에서 간초의 활용",
          },
        ],
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
    // 상세 페이지 소개 박스. 첫 토막은 인용처럼 크게 찍힌다. 맨 끝 두 토막은 맺음말.
    story: [
      `✨️파트너와 함께 추는 춤의 완성도를 높이기 위해서는 먼저 자신의 몸과 움직임을 정확하게 이해해야 합니다.`,
      `이번 5주 솔로 트레이닝에서는 땅고의 핵심 움직임인 축과 균형, 디소시에이션, 피벗, 앞 오초와 뒤 오초를 단계적으로 훈련합니다.`,
      `💫단순히 동작을 반복하는 것이 아니라, 체중 이동과 회전의 원리를 이해하고 불필요한 긴장을 줄이며, 안정적이고 정확한 움직임을 만들어가는 데 집중합니다.`,
      `5주간의 체계적인 훈련을 통해 오초의 정확성을 높이고, 연속적인 움직임 속에서도 자신의 축과 균형을 유지하는 능력을 길러봅니다.`,
      `⭐️나의 축이 안정되면 움직임이 정확해지고, 움직임이 정확해지면 춤은 더욱 자유로워집니다.`,
      `자신의 몸을 이해하고 땅고의 기본기를 탄탄하게 다지고 싶은 댄서라면, Bailamos Tango 솔로 트레이닝에서 함께 훈련해 보세요!`,
    ],
    target: "에헤 · 피봇 · 오초를 혼자 점검하고 싶은 분",
    // 주차별 커리큘럼. 소제목은 제목 줄에, 세부 항목은 줄바꿈으로 나눠 아래에 찍는다.
    weeks: [
      {
        topic: "Axis & Balance · 중심축과 균형 훈련",
        detail: "• 나의 중심축과 신체 정렬 이해하기\n• 한 발로 서기와 체중 지지 훈련\n• 체중 이동 전후의 균형 유지하기",
      },
      {
        topic: "Dissociation & Pivot · 디소시에이션과 피벗의 원리",
        detail: "• 상체와 하체의 분리 훈련\n• 피벗을 위한 몸의 회전과 발의 사용\n• 불필요한 힘과 긴장을 줄이는 회전 연습",
      },
      {
        topic: "Ocho Adelante · 앞 오초의 정확성",
        detail: "• 앞 오초의 방향과 체중 이동 이해하기\n• 피벗과 스텝을 자연스럽게 연결하기",
      },
      {
        topic: "Ocho Atrás · 뒤 오초의 안정성",
        detail: "• 뒤 오초에서의 균형과 축 이동 이해하기\n• 체중을 완전히 이동하는 연습",
      },
      {
        topic: "Integration & Control · 오초 연결과 움직임의 완성",
        detail: "• 앞 오초와 뒤 오초 연결하기\n• 연속적인 회전 속에서도 축 유지하기\n• 속도와 움직임의 크기 조절하기",
      },
    ],
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
    // 상세 페이지 소개 박스. 첫 토막은 인용처럼 크게(제목) 찍힌다.
    story: [
      `🪄 중상급 히로 콤비네이션 특강\nGiro & Sacada Combination`,
      `히로(Giro)의 다양한 구조와 사까다(Sacada)의 연결을 통해 더욱 다채롭고 역동적인 움직임을 만들어 봅니다.`,
      `각각의 동작을 익히는 것에서 한 걸음 더 나아가, 엔로스께(Enrosque), 깔레시따(Calesita), 메디오히로(Medio Giro), 볼레오(Boleo), 라피스(Lápiz) 등 다양한 테크닉을 유기적으로 연결하는 콤비네이션을 연습합니다.`,
      `동작과 동작 사이의 자연스러운 전환, 리더와 팔로워의 역할 변화, 정확한 타이밍과 공간 활용을 통해 히로의 완성도를 높이고 자신만의 움직임으로 발전시켜 봅니다.`,
    ],
    // 라벨 박스 안, 요일·시간 위에 오는 추천 안내. 항목이 모두 👉 로 시작하므로 점 불릿 대신 화살표를 쓴다.
    flash: {
      head: "이런 분들에게 추천합니다",
      items: [
        "👉기본적인 히로와 사까다를 익힌 중상급 댄서",
        "👉다양한 히로 콤비네이션을 배우고 싶은 분",
        "👉사까다와 회전 동작의 연결을 더 자연스럽게 만들고 싶은 분",
        "👉익숙한 동작을 새로운 방식으로 조합하고 싶은 분",
      ],
    },
    target: "중상급",
    weeks: [
      {
        topic: "엔로스께 콤비네이션",
        detail: "엔로스께의 연속적인 회전 구조를 이해하고, 깔레시따로 자연스럽게 전환한 뒤 팔로워의 엔로스께까지 연결하는 콤비네이션을 완성합니다.",
      },
      {
        topic: "사까다 콤비네이션",
        detail: "다양한 방향과 타이밍의 사까다를 중심으로 메디오히로, 볼레오, 라피스, 엔로스께를 연결합니다. 복합적인 동작의 흐름을 이해하고 하나의 완성도 높은 히로 콤비네이션으로 발전시킵니다.",
      },
    ],
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
    apply: { href: "https://forms.gle/sJRCWhfy3ECyzjY7A", label: "수업 신청" },
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
    level: "all", // 단계 표시: 전 단계 (홈 모바일에서 '올레벨', 장미 없음)
    image: "/photos/back.jpg",
    imagePosition: "82% 28%",
    apply: { href: "https://forms.gle/kxC5tACvJGpqFgAb6", label: "수업 신청" },
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
