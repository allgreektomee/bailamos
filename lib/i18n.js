/** 한·중·일·스페인어. 한국어 원문은 curriculum.js / teachers.js 에 있고, 여기서 덮어쓴다. */

export const LANGS = [
  { id: "ko", short: "한", label: "한국어" },
  { id: "zh", short: "中", label: "中文" },
  { id: "ja", short: "日", label: "日本語" },
  { id: "es", short: "ES", label: "Español" },
];

const ui = {
  ko: {
    navTeachers: "전문강사",
    navCourses: "정규수업",
    navSpecials: "특강",
    navWeek: "주간일정",
    navPrivate: "개인레슨",
    navVisit: "찾아오는 길",
    navContact: "문의",
    menu: "메뉴",
    menuClose: "메뉴 닫기",
    textBase: "기본",
    textLarge: "크게",
    navLabel: "주요",
    hero1: "소셜에서 시작해,",
    hero2: "공연과 대회까지",
    honor: "🏆 아시아 챔피언. 세계대회(문디알)결승진출자",
    sub: "지운과 엘리. 초급부터 인텐시브까지, 한 주씩 쌓아 갑니다.",
    notice: "안내",
    banner: "특강은 오초·걷기·밀롱가·발스를 돌아가며 엽니다.",
    teachers: "전문강사",
    pairName: "엘리 · 지운",
    pairLead: "두 분이 함께 가르칩니다. 프로필 보기를 누르면 마스터 이력이 열립니다.",
    enter: "들어가기",
    courses: "정규 수업",
    coursesLead: "초급에서 개인레슨까지. 카드를 열면 안내가 있습니다.",
    regular: "정규",
    specials: "특강",
    gather: "소셜",
    inmuName: "In the mood for tango",
    inmuHours: "운영시간",
    inmuDay: "수요일",
    inmuPlace: "오나다",
    inmuWhen: "매달 첫째 주는 쉽니다.",
    inmuNov: "이번 11월은 유럽 빅페스티발입니다.\n한 달 동안 해외 DJ가 수요일 밤을 엽니다.",
    inmuGuests:
      "둘째 주 Stefan Pan은 오랜만에 서울에 왔습니다.\n셋째 주 Cecilia Acosta는 첫 서울 방문입니다.\n마지막 주는 쎄울의 대천사, Mikael Kim Taewan입니다.",
    practicaName: "BAILAMOS 쁘락",
    practicaDay: "일요일",
    practicaPlace: "스튜디오 엘리",
    practicaLead:
      "중상급 수업이 끝나면 바로 이어집니다.\n수업과 함께 이어서 하면 더 좋습니다.\n마스터들의 시연 동작을 배우고, 그 자리에서 연습합니다.",
    practicaPass: "정기 등록 및 일일 참여 가능",
    week: "주간일정",
    weekLead: "지금 진행 중인 수업의 요일과 시간입니다.",
    contact: "문의",
    contactLead: "왓츠앱, 위챗. 편한 곳으로 와 주세요.",
    reach: "연락",
    channels: "채널",
    openChat: "오픈채팅",
    naverCafe: "네이버 카페",
    visit: "찾아오는 길",
    googleMap: "구글맵",
    naverMap: "네이버맵",
    heroAlt: "지운과 엘리",
    backClasses: "수업",
    backHome: "메인",
    backTeachers: "전문강사",
    when: "요일·시간",
    period: "기간",
    place: "장소",
    who: "수강 대상",
    weekUnit: (n) => `${n}주차`,
    weeksLater: "주차별 주제는 회차가 열릴 때마다 정해집니다.",
    weeksOf: (n) => `${n}주 수업`,
    openBatch: "회차가 열릴 때 안내합니다",
    every: (day, time, note) => `매주 ${day}요일 ${time}${note ? ` (${note})` : ""}`,
    apply: "신청하기",
    inquire: "문의하기",
    close: "닫기",
    seeIntro: "소개 보기",
    profile: "프로필 보기",
    fold: "접기",
    profileLead: "프로필 보기를 누르면 마스터 이력이 열립니다.",
    edu: "학력",
    awards: "수상",
    judging: "심사",
    teaching: "강의",
    shows: "공연",
    price: "금액 보기",
    off: "10% 할인",
    rentalOnce: " + 대관료 1만원",
    rentalPack: " + 대관료 10만원",
    packPrefix: "10회",
    privateApply: "개인레슨 신청",
    discount: "10회를 한 번에 신청하면 레슨비 10%를 빼 줍니다. 10회는 6개월 안에 씁니다.",
    rental:
      "대관료는 스튜디오 엘리를 쓸 때의 금액입니다. 다른 장소이거나 본인이 직접 대관하면 대관료는 없습니다.",
    optElly: "엘리 개인",
    optJiwoon: "지운 개인",
    optBoth: "엘리와 지운 함께",
    onceNote: "1회 · 1시간",
    packNote: "10회 · 10시간",
    docTitle: "BAILAMOS TANGO · 레벨별 커리큘럼",
  },
  zh: {
    navTeachers: "导师",
    navCourses: "常规课",
    navSpecials: "专题课",
    navWeek: "本周",
    navPrivate: "私教",
    navVisit: "怎么来",
    navContact: "联系",
    menu: "菜单",
    menuClose: "关闭菜单",
    textBase: "标准",
    textLarge: "大",
    navLabel: "主导航",
    hero1: "从社交开始，",
    hero2: "直到演出和比赛",
    honor: "🏆 亚洲冠军。世界锦标赛（Mundial）决赛选手",
    sub: "智云与艾莉。从初级到强化班，一周一周往上走。",
    notice: "通知",
    banner: "专题课在八字步、行走、米隆加、华尔兹之间轮换。",
    teachers: "导师",
    pairName: "艾莉 · 智云",
    pairLead: "两位一起授课。按查看简介，大师履历会打开。",
    enter: "进入",
    courses: "常规课",
    coursesLead: "从初级到私教。打开卡片就是说明。",
    regular: "常规",
    specials: "专题课",
    gather: "社交",
    inmuName: "In the mood for tango",
    inmuHours: "营业时间",
    inmuDay: "周三",
    inmuPlace: "오나다",
    inmuWhen: "每月第一周休息。",
    inmuNov: "今年 11 月是欧洲大节。\n整月由海外 DJ 打开周三的夜。",
    inmuGuests:
      "第二周 Stefan Pan 时隔很久再来首尔。\n第三周 Cecilia Acosta 第一次来首尔。\n最后一周是首尔的大天使 Mikael Kim Taewan。",
    practicaName: "BAILAMOS 练习",
    practicaDay: "周日",
    practicaPlace: "Studio Elly",
    practicaLead:
      "中高级课一结束就接着开始。\n连那节课一起上会更好。\n学习大师们的示范动作，并当场练习。",
    practicaPass: "可定期报名，也可以当日参加。",
    week: "本周课表",
    weekLead: "目前在上的课，只列星期和时间。",
    contact: "联系",
    contactLead: "WhatsApp、微信，用顺手的来。",
    reach: "联系",
    channels: "频道",
    openChat: "开放聊天",
    naverCafe: "Naver 咖啡馆",
    visit: "怎么来",
    googleMap: "谷歌地图",
    naverMap: "Naver 地图",
    heroAlt: "智云与艾莉",
    backClasses: "课程",
    backHome: "首页",
    backTeachers: "导师",
    when: "时间",
    period: "周期",
    place: "地点",
    who: "适合谁",
    weekUnit: (n) => `第${n}周`,
    weeksLater: "每周主题在开班时再定。",
    weeksOf: (n) => `${n}周课程`,
    openBatch: "开班时再通知",
    every: (day, time, note) => `每${day} ${time}${note ? `（${note}）` : ""}`,
    apply: "报名",
    inquire: "咨询",
    close: "关闭",
    seeIntro: "看介绍",
    profile: "查看简介",
    fold: "收起",
    profileLead: "按查看简介，大师履历会打开。",
    edu: "学历",
    awards: "获奖",
    judging: "评审",
    teaching: "授课",
    shows: "演出",
    price: "看价格",
    off: "九折",
    rentalOnce: " + 场地费 1万韩元",
    rentalPack: " + 场地费 10万韩元",
    packPrefix: "10次",
    privateApply: "申请私教",
    discount: "一次报 10 次，课时费减 10%。10 次请在 6 个月内用完。",
    rental: "场地费只在使用 Studio Elly 时收取。换地方，或自己订场地，则没有这笔费用。",
    optElly: "艾莉 一对一",
    optJiwoon: "智云 一对一",
    optBoth: "艾莉和智云一起",
    onceNote: "1次 · 1小时",
    packNote: "10次 · 10小时",
    docTitle: "BAILAMOS TANGO · 分级课程",
  },
  ja: {
    navTeachers: "講師",
    navCourses: "レギュラー",
    navSpecials: "特講",
    navWeek: "週間",
    navPrivate: "個人",
    navVisit: "アクセス",
    navContact: "問い合わせ",
    menu: "メニュー",
    menuClose: "メニューを閉じる",
    textBase: "標準",
    textLarge: "大きく",
    navLabel: "メイン",
    hero1: "ソーシャルから始まり、",
    hero2: "舞台と大会まで",
    honor: "🏆 アジアチャンピオン。世界大会（ムンディアル）決勝進出",
    sub: "ジウンとエリ。初級からインテンシブまで、一週ずつ積んでいきます。",
    notice: "案内",
    banner: "特講はオチョ・歩き・ミロンガ・バルスを回りながら開きます。",
    teachers: "講師",
    pairName: "エリ · ジウン",
    pairLead: "お二人が一緒に教えます。プロフィールを押すとマスター経歴が開きます。",
    enter: "入る",
    courses: "レギュラー授業",
    coursesLead: "初級から個人レッスンまで。カードを開くと案内があります。",
    regular: "レギュラー",
    specials: "特講",
    gather: "ソーシャル",
    inmuName: "In the mood for tango",
    inmuHours: "営業時間",
    inmuDay: "水曜",
    inmuPlace: "오나다",
    inmuWhen: "毎月第一週は休みです。",
    inmuNov: "今年 11 月はヨーロッパ・ビッグフェスティバルです。\n一か月、海外の DJ が水曜の夜を開きます。",
    inmuGuests:
      "第二週の Stefan Pan は久しぶりにソウルへ来ました。\n第三週の Cecilia Acosta は初めてのソウルです。\n最終週はソウルの大天使、Mikael Kim Taewan です。",
    practicaName: "BAILAMOS プラク",
    practicaDay: "日曜",
    practicaPlace: "Studio Elly",
    practicaLead:
      "中上級の授業が終わると、そのまま続きます。\nその授業と続けて出ると、よりよいです。\nマスターの示範を学び、その場で練習します。",
    practicaPass: "定期登録、当日参加もできます。",
    week: "週間スケジュール",
    weekLead: "いま開いているクラスの曜日と時間です。",
    contact: "問い合わせ",
    contactLead: "WhatsApp、WeChat。都合のよい方へ。",
    reach: "連絡",
    channels: "チャンネル",
    openChat: "オープンチャット",
    naverCafe: "Naver カフェ",
    visit: "アクセス",
    googleMap: "Google マップ",
    naverMap: "Naver マップ",
    heroAlt: "ジウンとエリ",
    backClasses: "クラス",
    backHome: "ホーム",
    backTeachers: "講師",
    when: "曜日・時間",
    period: "期間",
    place: "場所",
    who: "対象",
    weekUnit: (n) => `${n}週目`,
    weeksLater: "週ごとのテーマは回が開くときに決まります。",
    weeksOf: (n) => `${n}週のクラス`,
    openBatch: "開講時にご案内します",
    every: (day, time, note) => `毎週${day} ${time}${note ? `（${note}）` : ""}`,
    apply: "申し込む",
    inquire: "問い合わせ",
    close: "閉じる",
    seeIntro: "紹介を見る",
    profile: "プロフィール",
    fold: "閉じる",
    profileLead: "プロフィールを押すとマスター経歴が開きます。",
    edu: "学歴",
    awards: "受賞",
    judging: "審査",
    teaching: "講義",
    shows: "公演",
    price: "料金を見る",
    off: "10% オフ",
    rentalOnce: " + 会場費 1万ウォン",
    rentalPack: " + 会場費 10万ウォン",
    packPrefix: "10回",
    privateApply: "個人レッスンを申し込む",
    discount: "10回を一度に申し込むとレッスン料が 10% 引きです。10回は 6 か月以内に使います。",
    rental: "会場費は Studio Elly を使うときの金額です。別の場所、またはご自身で会場を借りる場合はかかりません。",
    optElly: "エリ 個人",
    optJiwoon: "ジウン 個人",
    optBoth: "エリとジウン 一緒",
    onceNote: "1回 · 1時間",
    packNote: "10回 · 10時間",
    docTitle: "BAILAMOS TANGO · レベル別カリキュラム",
  },
  es: {
    navTeachers: "Maestros",
    navCourses: "Cursos",
    navSpecials: "Talleres",
    navWeek: "Semana",
    navPrivate: "Particular",
    navVisit: "Cómo llegar",
    navContact: "Contacto",
    menu: "Menú",
    menuClose: "Cerrar menú",
    textBase: "Normal",
    textLarge: "Grande",
    navLabel: "Principal",
    hero1: "Del social,",
    hero2: "al escenario y al campeonato",
    honor: "🏆 Campeones de Asia. Finalistas del Mundial",
    sub: "Ji Woon y Elly. Del principiante al intensivo, semana a semana.",
    notice: "Aviso",
    banner: "Los talleres rotan: ocho, caminata, milonga y vals.",
    teachers: "Maestros",
    pairName: "Elly · Ji Woon",
    pairLead: "Dan clase juntos. Al ver el perfil se abre la trayectoria de los maestros.",
    enter: "Entrar",
    courses: "Cursos regulares",
    coursesLead: "Del principiante a la clase particular. La ficha abre la guía.",
    regular: "Regular",
    specials: "Talleres",
    gather: "Social",
    inmuName: "In the mood for tango",
    inmuHours: "Horario",
    inmuDay: "Miércoles",
    inmuPlace: "오나다",
    inmuWhen: "La primera semana de cada mes descansa.",
    inmuNov: "Este noviembre es el Europe Big Festival.\nDurante el mes, DJs de fuera abren la noche del miércoles.",
    inmuGuests:
      "La segunda semana, Stefan Pan vuelve a Seúl.\nLa tercera, Cecilia Acosta visita Seúl por primera vez.\nLa última es Mikael Kim Taewan, el arcángel de Seúl.",
    practicaName: "BAILAMOS Práctica",
    practicaDay: "Domingo",
    practicaPlace: "Studio Elly",
    practicaLead:
      "Sigue justo después de la clase de intermedio alto.\nEs mejor seguirla junto con esa clase.\nSe aprenden los movimientos de la demostración de los maestros y se practican allí.",
    practicaPass: "Inscripción regular, y también se puede ir un solo día.",
    week: "Esta semana",
    weekLead: "Día y hora de las clases que están en curso.",
    contact: "Contacto",
    contactLead: "WhatsApp o WeChat. El que te quede más cómodo.",
    reach: "Contacto",
    channels: "Canales",
    openChat: "Chat abierto",
    naverCafe: "Café de Naver",
    visit: "Cómo llegar",
    googleMap: "Google Maps",
    naverMap: "Naver Map",
    heroAlt: "Ji Woon y Elly",
    backClasses: "Clases",
    backHome: "Inicio",
    backTeachers: "Maestros",
    when: "Día y hora",
    period: "Duración",
    place: "Lugar",
    who: "Para quién",
    weekUnit: (n) => `Semana ${n}`,
    weeksLater: "El tema de cada semana se fija cuando abre la edición.",
    weeksOf: (n) => `${n} semanas`,
    openBatch: "Se anuncia al abrir la edición",
    every: (day, time, note) => `Cada ${day} ${time}${note ? ` (${note})` : ""}`,
    apply: "Inscribirse",
    inquire: "Consultar",
    close: "Cerrar",
    seeIntro: "Ver la presentación",
    profile: "Ver perfil",
    fold: "Cerrar",
    profileLead: "Al ver el perfil se abre la trayectoria de los maestros.",
    edu: "Estudios",
    awards: "Premios",
    judging: "Jurado",
    teaching: "Docencia",
    shows: "Escenarios",
    price: "Ver el precio",
    off: "10% de descuento",
    rentalOnce: " + alquiler 10.000 wones",
    rentalPack: " + alquiler 100.000 wones",
    packPrefix: "10 clases",
    privateApply: "Pedir clase particular",
    discount: "Si reservas las 10 de una vez, la clase baja un 10%. Las 10 se usan en 6 meses.",
    rental: "El alquiler es por usar Studio Elly. En otro lugar, o si reservas la sala tú, no se cobra.",
    optElly: "Particular con Elly",
    optJiwoon: "Particular con Ji Woon",
    optBoth: "Elly y Ji Woon juntos",
    onceNote: "1 clase · 1 hora",
    packNote: "10 clases · 10 horas",
    docTitle: "BAILAMOS TANGO · plan por niveles",
  },
};

const dayFull = {
  ko: { 월: "월", 화: "화", 수: "수", 목: "목", 금: "금", 토: "토", 일: "일" },
  zh: { 월: "周一", 화: "周二", 수: "周三", 목: "周四", 금: "周五", 토: "周六", 일: "周日" },
  ja: { 월: "月曜", 화: "火曜", 수: "水曜", 목: "木曜", 금: "金曜", 토: "土曜", 일: "日曜" },
  es: { 월: "lunes", 화: "martes", 수: "miércoles", 목: "jueves", 금: "viernes", 토: "sábado", 일: "domingo" },
};

const dayMark = {
  ko: { 월: "월", 화: "화", 수: "수", 목: "목", 금: "금", 토: "토", 일: "일" },
  zh: { 월: "一", 화: "二", 수: "三", 목: "四", 금: "五", 토: "六", 일: "日" },
  ja: { 월: "月", 화: "火", 수: "水", 목: "木", 금: "金", 토: "土", 일: "日" },
  es: { 월: "L", 화: "M", 수: "X", 목: "J", 금: "V", 토: "S", 일: "D" },
};

function line(ko, zh, ja, es) {
  return { ko, zh, ja, es };
}

const courses = {
  beginner: {
    name: line("초급", "初级", "初級", "Principiante"),
    lead: line(
      "처음 시작하는 8주 과정. 수업 뒤에 초급 쁘락이 이어집니다.",
      "8 周入门。课后接着初级练习。",
      "初めての 8 週間。授業のあと初級プラクが続きます。",
      "Ocho semanas para empezar. Después sigue la práctica de principiante.",
    ),
    target: line("처음 시작하는 분", "刚开始的人", "初めての方", "Quien empieza"),
    duration: line("8주 수업", "8 周课程", "8 週のクラス", "8 semanas"),
    place: line("스튜디오 엘리 (연남동)", "Studio Elly（延南洞）", "Studio Elly（延南洞）", "Studio Elly (Yeonnam-dong)"),
    timeNote: line(
      "수업 후 20:00까지 초급 쁘락",
      "课后到 20:00 初级练习",
      "授業後 20:00 まで初級プラク",
      "práctica de principiante hasta las 20:00",
    ),
    apply: line("신청하기", "报名", "申し込む", "Inscribirse"),
    intro: [
      line(
        "Bailamos Tango 초급 수업은 약 3개월마다 8주간의 과정으로 진행됩니다. 개강 여부는 홈페이지에서 확인할 수 있습니다.",
        "Bailamos Tango 初级课大约每 3 个月开一次，每次 8 周。是否开班可以在这个网站上看。",
        "Bailamos Tango の初級はおよそ 3 か月ごとに 8 週間で開きます。開講はサイトで確認できます。",
        "El principiante de Bailamos Tango se abre cada unos tres meses, en ocho semanas. Si hay grupo, se ve en esta página.",
      ),
      line(
        "“탱고는 실수할 게 없어요. 인생과는 달리 단순하죠. 그래서 탱고가 멋진 거예요. 만약 실수를 하면 스텝이 엉키고, 그게 바로 탱고죠.” — 영화 『여인의 향기』",
        "“探戈没有什么可错的。它不像人生那么复杂，所以才美。要是错了，步子缠在一起，那就是探戈。”——电影《闻香识女人》",
        "「タンゴに失敗はありません。人生と違って単純です。だからタンゴは素晴らしい。間違えてステップが絡まったら、それがタンゴです。」— 映画『セント・オブ・ウーマン』",
        "“En el tango no hay error. A diferencia de la vida, es simple. Por eso es hermoso. Si te equivocas y los pasos se enredan, eso es el tango.” — Perfume de mujer",
      ),
      line(
        "아르헨티나 땅고는 음악에 맞춰 함께 걷는 춤입니다. 기본 스텝만으로 전 세계 어디에서나 즉흥적으로 춤추며 즐길 수 있는 소통의 춤입니다.",
        "阿根廷探戈是跟着音乐一起走的舞。会了基本步，在世界任何地方都能即兴跳、能交流。",
        "アルゼンチンタンゴは、音楽に合わせて一緒に歩く踊りです。基本のステップだけで、世界のどこでも即興で楽しめます。",
        "El tango argentino es caminar juntos con la música. Con el paso de base se improvisa y se conversa en cualquier parte del mundo.",
      ),
      line(
        "땅고가 처음인 분, 춤을 한 번도 배워 본 적 없어도 괜찮습니다. 시작은 했지만 땅고가 어렵게만 느껴졌던 분, 더 쉽게 배우고 즐기고 싶은 모든 분을 위한 수업입니다.",
        "第一次跳探戈、从来没学过舞，都可以。已经开始但总觉得难的人，想学得更轻松的人，都适合。",
        "タンゴが初めての方、踊りの経験がなくても大丈夫です。始めたけれど難しく感じていた方、もっと楽に楽しみたい方のためのクラスです。",
        "Sirve si el tango es nuevo, aunque nunca hayas bailado. También si empezaste y se te hizo difícil, y quieres aprenderlo más fácil.",
      ),
      line(
        "어렵지 않아요. 외우는 춤도 없습니다. 음악을 듣고, 상대와 호흡을 맞추며 자연스럽게 움직이는 것을 배웁니다. 혼자 와도 괜찮고, 친구나 파트너와 함께 와도 환영합니다.",
        "不难，也没有要背的套路。听着音乐，和对方一起呼吸，自然地动。一个人来可以，和朋友或舞伴一起来也欢迎。",
        "難しくありません。暗記する踊りでもありません。音楽を聞き、相手と息を合わせて自然に動くことを学びます。一人でも、友人やパートナーとでも歓迎です。",
        "No es difícil, y no hay una coreografía para memorizar. Se escucha la música y se mueve con la otra persona. Puedes venir solo, con un amigo o con tu pareja.",
      ),
      line(
        "아시아 챔피언이자 세계대회(문디알) 결승 진출자, 20년 경력의 탱고 티처와 처음 한 걸음부터 차분하게 시작합니다.",
        "从第一步开始，跟着亚洲冠军、世界锦标赛决赛选手、有 20 年经验的老师，慢慢走。",
        "アジアチャンピオンで世界大会の決勝進出者、経験 20 年の先生と、最初の一歩から落ち着いて始めます。",
        "Se empieza por el primer paso, con maestros campeones de Asia, finalistas del Mundial y con 20 años de clase.",
      ),
    ],
    points: [
      line("편하게 서는 방법", "怎样站得舒服", "楽に立つこと", "Cómo pararse con calma"),
      line("음악에 맞춰 걷는 방법", "怎样跟着音乐走", "音楽に合わせて歩くこと", "Cómo caminar con la música"),
      line("파트너와 부드럽게 연결하는 방법", "怎样和舞伴轻轻连上", "パートナーとやわらかくつながること", "Cómo conectar con suavidad"),
      line(
        "밀롱가라고 부르는, 춤추는 공간에 대한 이해",
        "理解那个跳舞的地方，也就是米隆加",
        "ミロンガと呼ばれる、踊る場の理解",
        "Entender la milonga, el lugar donde se baila",
      ),
    ],
    weeks: [
      line("땅고 걷기, 살리다", "探戈行走，salida", "タンゴの歩き、サリダ", "Caminata de tango, salida"),
      line("걷기 연습, 오쵸 살리다", "行走练习，ocho salida", "歩きの練習、オチョ・サリダ", "Práctica de caminata, ocho salida"),
      line("오쵸 연습, 빠라다와 오쵸 아델란떼", "八字步练习，parada 与 ocho adelante", "オチョの練習、パラダとオチョ・アデランテ", "Práctica de ocho, parada y ocho adelante"),
      line("오쵸 연습, 빠라다와 오쵸 꼬르따도", "八字步练习，parada 与 ocho cortado", "オチョの練習、パラダとオチョ・コルタド", "Práctica de ocho, parada y ocho cortado"),
      line(
        "아브라소 아비에르또, 살리다와 오쵸 살리다의 방향전환",
        "开式拥抱，salida 与 ocho salida 的换向",
        "アブラソ・アビエルト、サリダとオチョ・サリダの方向転換",
        "Abrazo abierto, cambio de dirección en la salida y el ocho salida",
      ),
      line(
        "아브라소 아비에르또, 끄루사다와 빠라다, 오쵸 아델란떼와 오쵸 꼬르따도",
        "开式拥抱，cruzada 与 parada，ocho adelante 与 ocho cortado",
        "アブラソ・アビエルト、クルサダとパラダ、オチョ・アデランテとオチョ・コルタド",
        "Abrazo abierto, cruzada y parada, ocho adelante y ocho cortado",
      ),
      line(
        "아브라소 세라도(선택), 론다 운영의 기초",
        "闭式拥抱（可选），ronda 的基础",
        "アブラソ・セラード（任意）、ロンダの基礎",
        "Abrazo cerrado (opcional), base de la ronda",
      ),
      line(
        "아브라소 세라도(선택), 모두 함께 론다 운영하기",
        "闭式拥抱（可选），大家一起走 ronda",
        "アブラソ・セラード（任意）、みんなでロンダ",
        "Abrazo cerrado (opcional), la ronda entre todos",
      ),
    ],
  },
  "beginner-intermediate": {
    name: line("초중급", "初中级", "初中級", "Inicial"),
    lead: line(
      "기본 스텝은 아는데 실전에서 연결이 안 될 때. 왜 움직이는지, 어떻게 잇는지.",
      "基本步会了，一跳起来接不上的时候。为什么动，怎样接。",
      "基本はできるのに、実戦でつながらないとき。なぜ動くか、どうつなぐか。",
      "Cuando el paso de base ya está, pero en la pista no se engancha. Por qué se mueve, y cómo se une.",
    ),
    target: line("초급을 마친 분", "完成初级的人", "初級を終えた方", "Quien terminó el principiante"),
    apply: line("소개 보기", "看介绍", "紹介を見る", "Ver la presentación"),
    weeks: [
      line("아브라소와 살리다로 기본 연결·이동 흐름", "用拥抱和 salida 做基本连接与移动", "アブラソとサリダで基本のつながりと移動", "Conexión y traslado con abrazo y salida"),
      line("실전에 필요한 살리다의 방향전환", "实跳需要的 salida 换向", "実戦に必要なサリダの方向転換", "Cambio de dirección de la salida para la pista"),
      line("오초의 구조 + 리딩 & 팔로잉", "八字步的结构，领舞与跟随", "オチョの構造、リードとフォロー", "Estructura del ocho, marca y respuesta"),
      line("오초 아뜨라스 & 디아고날", "向后八字步与斜线", "オチョ・アトラスとディアゴナル", "Ocho atrás y diagonal"),
      line("빠라다와 상구치또로 빠우사", "用 parada 和 sanguchito 做停顿", "パラダとサングチートでパウサ", "Pausa con parada y sanguchito"),
      line("실전형 오초 꼬르따도 (전면, 회전)", "实跳的 ocho cortado（正面、旋转）", "実戦のオチョ・コルタド（正面、回転）", "Ocho cortado de pista (de frente, en giro)"),
      line("메디오 히로 맛보기", "medio giro 初尝", "メディオ・ヒロの入り口", "Un primer medio giro"),
      line("메디아 루나 (겉모습은 비슷, 원리가 다름)", "media luna（样子像，原理不同）", "メディア・ルナ（見た目は似て、原理は別）", "Media luna (se parece, el principio es otro)"),
    ],
  },
  intermediate: {
    name: line("중급", "中级", "中級", "Intermedio"),
    lead: line(
      "테크닉만이 아니라 언제 · 왜 · 어떻게 쓰는지.",
      "不只是技术，而是何时、为何、怎样用。",
      "テクニックだけでなく、いつ・なぜ・どう使うか。",
      "No solo la técnica: cuándo, por qué y cómo se usa.",
    ),
    target: line("초중급을 마친 분", "完成初中级的人", "初中級を終えた方", "Quien terminó el inicial"),
    timeNote: line("Prac ~21:30까지", "练习到约 21:30", "プラクは 21:30 ごろまで", "práctica hasta ~21:30"),
    apply: line("신청하기", "报名", "申し込む", "Inscribirse"),
    weeks: [
      { topic: line("살리다와 오초 아델란떼", "salida 与向前八字步", "サリダとオチョ・アデランテ", "Salida y ocho adelante"), detail: line("밀롱가의 시작", "米隆加的开始", "ミロンガの始まり", "El inicio de la milonga") },
      { topic: line("디아고날과 오초 아뜨라스", "斜线与向后八字步", "ディアゴナルとオチョ・アトラス", "Diagonal y ocho atrás"), detail: line("공간", "空间", "空間", "El espacio") },
      { topic: line("살리다 끄루사다와 빠라다 응용", "salida cruzada 与 parada 的用法", "サリダ・クルサダとパラダの応用", "Salida cruzada y parada"), detail: line("멈춤", "停", "停止", "La pausa") },
      { topic: line("오초 아뜨라스와 사까다", "向后八字步与 sacada", "オチョ・アトラスとサカーダ", "Ocho atrás y sacada") },
      { topic: line("오초 꼬르따도", "ocho cortado", "オチョ・コルタド", "Ocho cortado"), detail: line("춤의 맛", "舞的味道", "踊りの味", "El sabor del baile") },
      { topic: line("오초 아뜨라스와 볼레오", "向后八字步与 boleo", "オチョ・アトラスとボレオ", "Ocho atrás y boleo"), detail: line("타이밍", "时机", "タイミング", "El tiempo") },
      { topic: line("깔레시따", "calecita", "カレシータ", "Calecita") },
      { topic: line("메디오 히로 활용", "medio giro 的用法", "メディオ・ヒロの使い方", "Uso del medio giro") },
    ],
  },
  "upper-intermediate": {
    name: line("중상급", "中高级", "中上級", "Intermedio alto"),
    lead: line(
      "패턴 이름만 익히는 수업이 아닙니다. 리더는 방향·피봇, 팔로워는 축·반응·타이밍으로 한 흐름을 만듭니다.",
      "不是只记花样名字。领舞者用方向和轴转，跟随用轴、反应和时机，做成一条流。",
      "パターン名を覚えるクラスではありません。リーダーは方向とピボット、フォロワーは軸・反応・タイミングで一つの流れを作ります。",
      "No es una clase de nombres. Quien marca usa dirección y pivote; quien responde, eje, reacción y tiempo, y sale un solo flujo.",
    ),
    target: line(
      "중급 이상 (초보 수강 불가 권장)",
      "中级以上（不建议初学者）",
      "中級以上（初心者は非推奨）",
      "Intermedio o más (no recomendado para quien empieza)",
    ),
    warn: line(
      "중급에서 사까다·볼레오·히로·오초를 각각 써 본 분을 전제로, 두 가지 이상을 한 호흡에 묶습니다.",
      "前提是在中级分别用过 sacada、boleo、giro、ocho。这里把两种以上放进同一次呼吸。",
      "中級でサカーダ・ボレオ・ヒロ・オチョをそれぞれ使った方を前提に、二つ以上を一つの呼吸にまとめます。",
      "Parte de haber usado sacada, boleo, giro y ocho por separado. Aquí se atan dos o más en una misma respiración.",
    ),
    apply: line("신청하기", "报名", "申し込む", "Inscribirse"),
    weeks: [
      line("아구하 히로 + 사까다", "giro aguja + sacada", "アグハ・ヒロ + サカーダ", "Giro aguja + sacada"),
      line("아구하 히로 + 바리다", "giro aguja + barrida", "アグハ・ヒロ + バリーダ", "Giro aguja + barrida"),
      line("라피스 + 오초 아델란떼", "lápiz + ocho adelante", "ラピス + オチョ・アデランテ", "Lápiz + ocho adelante"),
      line("사까다 + 오초", "sacada + ocho", "サカーダ + オチョ", "Sacada + ocho"),
      line("사까다 + 히로", "sacada + giro", "サカーダ + ヒロ", "Sacada + giro"),
      line("사까다 + 볼레오 1", "sacada + boleo 1", "サカーダ + ボレオ 1", "Sacada + boleo 1"),
      line("사까다 + 볼레오 2", "sacada + boleo 2", "サカーダ + ボレオ 2", "Sacada + boleo 2"),
      line("사까다 + 간초", "sacada + gancho", "サカーダ + ガンチョ", "Sacada + gancho"),
    ],
  },
  intensive: {
    name: line("인텐시브", "强化课", "インテンシブ", "Intensivo"),
    lead: line(
      "8주 정규 반을 이어 붙인 풀코스. 패턴 이름만이 아니라 원리·메커니즘·음악까지.",
      "把 8 周常规班接成的全程。不只是花样名字，还有原理、机制和音乐。",
      "8 週のレギュラーをつないだフルコース。パターン名だけでなく、原理・メカニズム・音楽まで。",
      "El curso largo, uniendo los regulares de ocho semanas. No solo nombres: principio, mecanismo y música.",
    ),
    target: line(
      "기초부터 중급까지 한 번에 쌓고 싶은 분",
      "想一次从基础堆到中级的人",
      "基礎から中級まで一度に積みたい方",
      "Quien quiere armar de la base al intermedio de una vez",
    ),
    duration: line(
      "6개월 · 24주 (테마 6 × 4주)",
      "6 个月 · 24 周（6 个主题 × 4 周）",
      "6 か月 · 24 週（テーマ 6 × 4 週）",
      "6 meses · 24 semanas (6 temas × 4 semanas)",
    ),
    startNote: line(
      "2026년 11월 3일 개강. 인원에 따라 한 주 늦어질 수 있습니다.",
      "2026 年 11 月 3 日开课。人数不够可能推迟一周。",
      "2026 年 11 月 3 日開講。人数によって 1 週遅れることがあります。",
      "Empieza el 3 de noviembre de 2026. Según el grupo, puede correrse una semana.",
    ),
    apply: line("신청하기", "报名", "申し込む", "Inscribirse"),
    groups: [
      {
        title: line("테마 1 · 서기, 걷기, 안기의 트레이닝", "主题 1 · 站、走、抱", "テーマ 1 · 立つ、歩く、抱く", "Tema 1 · estar, caminar, abrazar"),
        weeks: [
          line("운동 원리 → 서는 자세 · 걷기 메커니즘", "运动原理 → 站姿 · 行走机制", "動きの原理 → 立つ姿勢 · 歩きのメカニズム", "Principio del movimiento → postura y mecanismo de la caminata"),
          line("상대 축 인지·존중 — 아브라소", "感到并尊重对方的轴 — 拥抱", "相手の軸を感じて尊重する — アブラソ", "Sentir y respetar el eje del otro — abrazo"),
          line("살리다 루틴으로 상대 영역 이해", "用 salida 例行理解对方的区域", "サリダのルーティンで相手の領域を理解", "Entender el espacio del otro con la rutina de salida"),
          line("디아고날", "斜线", "ディアゴナル", "Diagonal"),
        ],
      },
      {
        title: line("테마 2 · 방향성과 동작 루틴", "主题 2 · 方向与动作例行", "テーマ 2 · 方向と動きのルーティン", "Tema 2 · dirección y rutina"),
        weeks: [
          line("방향 전환 원리 · 오초 트레이닝", "换向原理 · 八字步训练", "方向転換の原理 · オチョのトレーニング", "Principio del cambio de dirección · entrenamiento de ocho"),
          line(
            "영역 인지 + 팔로워 피봇 — 오초 아델란떼·아뜨라스 리드·팔로",
            "区域感 + 跟随的轴转 — 向前、向后八字步的领与跟",
            "領域の認知 + フォロワーのピボット — オチョ・アデランテ／アトラスのリードとフォロー",
            "El espacio y el pivote de quien responde — ocho adelante y atrás, marca y respuesta",
          ),
          line("살리다 + 끄루사다 + 오초 연결", "salida + cruzada + 八字步", "サリダ + クルサダ + オチョ", "Salida + cruzada + ocho"),
          line("오초 꼬르따도", "ocho cortado", "オチョ・コルタド", "Ocho cortado"),
        ],
      },
      {
        title: line("테마 3 · 뮤지컬리티 기본", "主题 3 · 音乐性基础", "テーマ 3 · ミュージカリティの基本", "Tema 3 · base musical"),
        weeks: [
          line("탱고 프레이즈 · 음악 듣기", "探戈乐句 · 听音乐", "タンゴのフレーズ · 音楽を聴く", "La frase del tango · escuchar"),
          line("살리다·끄루사다·디아고날로 프레이즈 변화 1", "用 salida、cruzada、斜线改变乐句 1", "サリダ・クルサダ・ディアゴナルでフレーズ変化 1", "Cambiar la frase con salida, cruzada y diagonal 1"),
          line("오초·꼬르따도 추가 — 프레이즈 변화 2", "加上八字步和 cortado — 乐句变化 2", "オチョ・コルタドを足す — フレーズ変化 2", "Sumar ocho y cortado — cambio de frase 2"),
          line("여유·리듬 — 지금까지로 음악 표현", "从容与节奏 — 用到这里的东西表达音乐", "余裕とリズム — ここまでで音楽を表す", "Aire y ritmo — decir la música con lo que ya está"),
        ],
      },
      {
        title: line("테마 4 · 히로", "主题 4 · giro", "テーマ 4 · ヒロ", "Tema 4 · giro"),
        weeks: [
          line("히로 박스 실전 트레이닝", "giro 方框的实跳训练", "ヒロのボックス、実戦トレーニング", "El cajón del giro, en la pista"),
          line("방향 유도 → 히로 리드·팔로", "引导方向 → giro 的领与跟", "方向の誘導 → ヒロのリードとフォロー", "Dirigir → marca y respuesta del giro"),
          line("리더 방향전환 → 아구하 히로", "领舞者换向 → giro aguja", "リーダーの方向転換 → アグハ・ヒロ", "Cambio de quien marca → giro aguja"),
          line("리더 방향전환 → 엔로스께 히로", "领舞者换向 → giro enrosque", "リーダーの方向転換 → エンロスケ・ヒロ", "Cambio de quien marca → giro enrosque"),
        ],
      },
      {
        title: line("테마 5 · 메디오 히로 · 사까다", "主题 5 · medio giro · sacada", "テーマ 5 · メディオ・ヒロ · サカーダ", "Tema 5 · medio giro · sacada"),
        weeks: [
          line("메디오 히로 + 께브라다", "medio giro + quebrada", "メディオ・ヒロ + ケブラダ", "Medio giro + quebrada"),
          line("사까다 원리 + 메디오 히로 조합", "sacada 原理 + 和 medio giro 组合", "サカーダの原理 + メディオ・ヒロ", "Principio de la sacada + medio giro"),
          line("양발 사까다", "双脚 sacada", "両足のサカーダ", "Sacada de ambos pies"),
          line("사까다 + 아구하 히로 / 엔로스께 히로", "sacada + giro aguja / giro enrosque", "サカーダ + アグハ・ヒロ / エンロスケ・ヒロ", "Sacada + giro aguja / giro enrosque"),
        ],
      },
      {
        title: line("테마 6 · 팔로워 적극 표현", "主题 6 · 跟随的主动表达", "テーマ 6 · フォロワーの積極的な表現", "Tema 6 · expresión de quien responde"),
        weeks: [
          line("빠라다", "parada", "パラダ", "Parada"),
          line("볼레오 + 빠라다", "boleo + parada", "ボレオ + パラダ", "Boleo + parada"),
          line("깔레시따", "calecita", "カレシータ", "Calecita"),
          line("팔로워 박자 가지고 놀기", "跟随玩拍子", "フォロワーが拍で遊ぶ", "Jugar el compás desde la respuesta"),
        ],
      },
    ],
  },
  private: {
    name: line("개인레슨", "私教", "個人レッスン", "Clase particular"),
    lead: line(
      "엘리 혼자, 지운 혼자, 또는 두 분과 함께.",
      "只和艾莉，只和智云，或两位一起。",
      "エリだけ、ジウンだけ、またはお二人と。",
      "Solo con Elly, solo con Ji Woon, o con los dos.",
    ),
    target: line(
      "한 사람, 또는 두 분과 맞추고 싶은 분",
      "想和一位，或和两位一起对的人",
      "一人、またはお二人と合わせたい方",
      "Quien quiere ajustar con uno, o con los dos",
    ),
    duration: line("1회 또는 10회", "1 次或 10 次", "1 回または 10 回", "1 clase o 10"),
    intro: [
      line("개인레슨은 세 가지 중 고릅니다.", "私教在三种里选。", "個人レッスンは三つから選びます。", "La particular se elige entre tres."),
      line(
        "엘리 개인, 지운 개인은 각자 한 시간입니다. 엘리와 지운 함께는 두 분이 한 시간에 봅니다.",
        "艾莉一对一、智云一对一各一小时。两位一起，是两个人在同一小时里看。",
        "エリ個人、ジウン個人はそれぞれ 1 時間です。お二人一緒は、同じ 1 時間を二人で見ます。",
        "Con Elly o con Ji Woon es una hora cada uno. Juntos, los dos miran esa misma hora.",
      ),
    ],
  },
  ocho: {
    name: line("오초", "八字步", "オチョ", "Ocho"),
    lead: line(
      "오초를 중심으로 여는 특강입니다. 걷기·밀롱가·발스와 돌아가며 진행합니다.",
      "以八字步为中心的专题课。与行走、米隆加、华尔兹轮换。",
      "オチョを中心に開く特講です。歩き・ミロンガ・バルスと回りながら進みます。",
      "Taller centrado en el ocho. Rota con la caminata, la milonga y el vals.",
    ),
    target: line("오초를 짚고 싶은 분", "想把八字步摸清楚的人", "オチョを確かめたい方", "Quien quiere precisar el ocho"),
  },
  walk: {
    name: line("걷기", "行走", "歩き", "Caminata"),
    lead: line(
      "걷기를 중심으로 여는 특강입니다. 오초·밀롱가·발스와 돌아가며 진행합니다.",
      "以行走为中心的专题课。与八字步、米隆加、华尔兹轮换。",
      "歩きを中心に開く特講です。オチョ・ミロンガ・バルスと回りながら進みます。",
      "Taller centrado en la caminata. Rota con el ocho, la milonga y el vals.",
    ),
    target: line("걷기를 다듬고 싶은 분", "想把行走磨干净的人", "歩きを整えたい方", "Quien quiere afinar la caminata"),
  },
  milonga: {
    name: line("밀롱가", "米隆加", "ミロンガ", "Milonga"),
    lead: line(
      "밀롱가 리사 · 드라스삐에 · 전환. 큰 동작 대신 작은 스텝으로 박을 디디는 밀롱가.",
      "米隆加 lisa、traspié、转换。不用大动作，用小步踩拍。",
      "ミロンガ・リサ、トラスピエ、切り替え。大きな動きではなく小さなステップで拍を踏むミロンガ。",
      "Milonga lisa, traspié y el cambio. Pasos chicos que marcan el compás, no el gesto grande.",
    ),
    target: line(
      "밀롱가에서 걷기와 리듬을 다듬고 싶은 분",
      "想在米隆加里把行走和节奏磨干净的人",
      "ミロンガの歩きとリズムを整えたい方",
      "Quien quiere afinar la caminata y el ritmo de la milonga",
    ),
    place: line("연남 스튜디오 엘리", "延南 Studio Elly", "延南 Studio Elly", "Studio Elly, Yeonnam"),
    note: line(
      "아래는 2026년 10월에 진행한 회차입니다. 다음 밀롱가는 오초·걷기·발스와 돌아가며 열립니다.",
      "下面是 2026 年 10 月上过的内容。下一期米隆加会和八字步、行走、华尔兹轮换。",
      "下は 2026 年 10 月に行った回です。次のミロンガはオチョ・歩き・バルスと回りながら開きます。",
      "Esto es lo que se dio en octubre de 2026. La próxima milonga rota con el ocho, la caminata y el vals.",
    ),
    apply: line("신청하기", "报名", "申し込む", "Inscribirse"),
    weeks: [
      {
        topic: line("밀롱가 리듬의 이해와 밀롱가 리사", "理解米隆加节奏，以及 milonga lisa", "ミロンガのリズムとミロンガ・リサ", "El ritmo y la milonga lisa"),
        detail: line(
          "1교시 발도사 스텝을 활용한 밀롱가 걷기 · 2교시 밀롱가 걷기와 자연스러운 방향전환",
          "第 1 节 用 baldosa 走米隆加 · 第 2 节 米隆加行走与自然换向",
          "1 時限 バルドサを使ったミロンガの歩き · 2 時限 ミロンガの歩きと自然な方向転換",
          "1.ª hora: caminata con la baldosa · 2.ª hora: caminata y cambio de dirección",
        ),
      },
      {
        topic: line("밀롱가 드라스삐에를 위한 기본 스텝", "traspié 的基本步", "トラスピエのための基本ステップ", "El paso de base para el traspié"),
        detail: line(
          "1교시 더블비트를 활용한 간단한 루틴 하나 · 2교시 기본 루틴 무한 반복",
          "第 1 节 用双拍做一个简单例行 · 第 2 节 基本例行反复走",
          "1 時限 ダブルビートの簡単なルーティン · 2 時限 基本ルーティンを繰り返す",
          "1.ª hora: una rutina simple con doble tiempo · 2.ª hora: repetir la rutina de base",
        ),
      },
      {
        topic: line("밀롱가 리사와 드라스삐에의 전환", "lisa 与 traspié 的转换", "リサとトラスピエの切り替え", "El paso entre lisa y traspié"),
        detail: line(
          "1교시 기본 루틴에서 발도사로 전환 · 2교시 기본 루틴에서 방향전환 걷기로 전환",
          "第 1 节 从基本例行转到 baldosa · 第 2 节 从基本例行转到换向行走",
          "1 時限 基本ルーティンからバルドサへ · 2 時限 基本ルーティンから方向転換の歩きへ",
          "1.ª hora: de la rutina a la baldosa · 2.ª hora: de la rutina a la caminata que cambia de dirección",
        ),
      },
    ],
  },
  vals: {
    name: line("발스", "华尔兹", "バルス", "Vals"),
    lead: line(
      "발스를 중심으로 여는 특강입니다. 오초·걷기·밀롱가와 돌아가며 진행합니다.",
      "以华尔兹为中心的专题课。与八字步、行走、米隆加轮换。",
      "バルスを中心に開く特講です。オチョ・歩き・ミロンガと回りながら進みます。",
      "Taller centrado en el vals. Rota con el ocho, la caminata y la milonga.",
    ),
    target: line("발스를 짚고 싶은 분", "想把华尔兹摸清楚的人", "バルスを確かめたい方", "Quien quiere precisar el vals"),
    apply: line("신청하기", "报名", "申し込む", "Inscribirse"),
  },
};

const weekNames = {
  intermediate: line("중급", "中级", "中級", "Intermedio"),
  intensive: line("인텐시브", "强化课", "インテンシブ", "Intensivo"),
  special: line("특강", "专题课", "特講", "Taller"),
  beginner: line("초급 3기", "初级 3期", "初級 3期", "Principiante 3"),
  "upper-intermediate": line("중상급", "中高级", "中上級", "Intermedio alto"),
  practica: line("쁘락", "练习", "プラク", "Práctica"),
};

const teachers = {
  jiwoon: {
    summary: line(
      "2007년 입문, 부에노스아이레스에서 3년. 밀롱게로에게 배운 뒤 자신만의 탱고를 다시 쌓고 있습니다.",
      "2007 年入门，在布宜诺斯艾利斯三年。跟 milonguero 学过之后，正在重新堆自己的探戈。",
      "2007 年に始め、ブエノスアイレスで 3 年。ミロンゲーロに学んだあと、自分のタンゴを積み直しています。",
      "Empezó en 2007 y estuvo tres años en Buenos Aires. Después de los milongueros, vuelve a armar su propio tango.",
    ),
    paragraphs: [
      line(
        "2007년에 탱고를 시작해 2008년 부에노스아이레스로 건너가 약 3년 유학했습니다.",
        "2007 年开始跳探戈，2008 年去布宜诺斯艾利斯，留学大约三年。",
        "2007 年にタンゴを始め、2008 年にブエノスアイレスへ渡り、約 3 年学びました。",
        "Empezó el tango en 2007 y en 2008 se fue a Buenos Aires, donde estudió unos tres años.",
      ),
      line(
        "부에노스아이레스에서 Carlitos Perez에게 댄서로서의 탱고를, Ricardo Viqueira에게 밀롱게로의 정수를 사사했습니다. 많은 밀롱게로를 만나며 El Flaco Dani, Jorge García 형제에게 밀롱가를 배웠고, 그 뒤 자신만의 탱고를 만들기 시작했습니다.",
        "在布宜诺斯艾利斯，向 Carlitos Perez 学舞者的探戈，向 Ricardo Viqueira 学 milonguero 的精要。也跟许多 milonguero 相处，向 El Flaco Dani 和 Jorge García 兄弟学米隆加，然后开始做自己的探戈。",
        "ブエノスアイレスで Carlitos Perez にダンサーとしてのタンゴを、Ricardo Viqueira にミロンゲーロの核を学びました。多くのミロンゲーロに会い、El Flaco Dani と Jorge García 兄弟にミロンガを習い、その後自分のタンゴを作り始めました。",
        "En Buenos Aires estudió el tango de bailarín con Carlitos Perez y la esencia milonguera con Ricardo Viqueira. Conoció a muchos milongueros, aprendió milonga con El Flaco Dani y los hermanos Jorge García, y después empezó a hacer su propio tango.",
      ),
      line(
        "2012년 한국으로 돌아와 탱고스쿨 메인 강사로 활동을 시작했고, 아시아에서 공연과 워크숍을 이어 갔습니다.",
        "2012 年回韩国，开始做探戈学校的主课老师，并在亚洲继续演出和工作坊。",
        "2012 年に韓国へ戻り、タンゴスクールのメイン講師として活動を始め、アジアで公演とワークショップを続けました。",
        "Volvió a Corea en 2012, empezó como maestro principal de una escuela de tango y siguió con escenarios y talleres en Asia.",
      ),
      line(
        "2015년 Facundo Piñeiro & Vanessa Villalba, 2019년 Pancho Martínez Pey & Lorena Ermocida를 만난 뒤, 기존 스타일을 고집하지 않고 탱고를 처음부터 다시 만들어 가고 있습니다.",
        "2015 年遇到 Facundo Piñeiro & Vanessa Villalba，2019 年遇到 Pancho Martínez Pey & Lorena Ermocida 之后，不再守着原来的风格，从头重做探戈。",
        "2015 年に Facundo Piñeiro & Vanessa Villalba、2019 年に Pancho Martínez Pey & Lorena Ermocida と会ってから、これまでのスタイルにこだわらず、タンゴを最初から作り直しています。",
        "Después de Facundo Piñeiro y Vanessa Villalba en 2015, y de Pancho Martínez Pey y Lorena Ermocida en 2019, dejó de aferrarse al estilo anterior y vuelve a construir el tango desde el principio.",
      ),
    ],
  },
  elly: {
    summary: line(
      "발레와 안무를 전공한 뒤 탱고 강사, 심사위원, 공연자로 활동합니다.",
      "先学芭蕾和编舞，现在做探戈老师、评审和演出者。",
      "バレエと振付を専攻したあと、タンゴの講師、審査員、公演者として活動しています。",
      "Estudió ballet y coreografía, y trabaja como maestra, jurado y bailarina de tango.",
    ),
    education: [
      line(
        "한국예술종합학교 무용원 창작과 전문석사 (안무)",
        "韩国艺术综合大学 舞蹈院 创作系 专门硕士（编舞）",
        "韓国芸術総合学校 舞踊院 創作科 専門修士（振付）",
        "Máster, creación coreográfica, Korea National University of Arts",
      ),
      line(
        "이화여자대학교 무용과 졸업 (발레)",
        "梨花女子大学 舞蹈系毕业（芭蕾）",
        "梨花女子大学 舞踊科 卒業（バレエ）",
        "Licenciatura en danza, ballet, Universidad de Mujeres Ewha",
      ),
      line(
        "선화예술고등학교 무용과 졸업",
        "宣花艺术高中 舞蹈科毕业",
        "宣花芸術高校 舞踊科 卒業",
        "Bachillerato de danza, Sunhwa Arts High School",
      ),
    ],
  },
};

const gloss = {
  zh: [
    ["축하공연", "庆祝演出"],
    ["개막공연", "开幕演出"],
    ["특별 강좌 및 공연", "特别讲座与演出"],
    ["워크숍 및 공연", "工作坊与演出"],
    ["초청 워크숍", "受邀工作坊"],
    ["워크숍", "工作坊"],
    ["특강", "专题课"],
    ["심사위원", "评审"],
    ["강사", "讲师"],
    ["게스트", "嘉宾"],
    ["밀롱가", "米隆加"],
    ["발스", "华尔兹"],
    ["1등", "第1名"],
    ["2등", "第2名"],
    ["3등", "第3名"],
    ["공연", "演出"],
    ["출연", "出演"],
    ["파티", "派对"],
  ],
  ja: [
    ["축하공연", "祝演"],
    ["개막공연", "開幕公演"],
    ["특별 강좌 및 공연", "特別講座と公演"],
    ["워크숍 및 공연", "ワークショップと公演"],
    ["초청 워크숍", "招聘ワークショップ"],
    ["워크숍", "ワークショップ"],
    ["특강", "特講"],
    ["심사위원", "審査員"],
    ["강사", "講師"],
    ["게스트", "ゲスト"],
    ["밀롱가", "ミロンガ"],
    ["발스", "バルス"],
    ["1등", "1位"],
    ["2등", "2位"],
    ["3등", "3位"],
    ["공연", "公演"],
    ["출연", "出演"],
    ["파티", "パーティ"],
  ],
  es: [
    ["축하공연", "función de festejo"],
    ["개막공연", "función de apertura"],
    ["특별 강좌 및 공연", "clase especial y función"],
    ["워크숍 및 공연", "taller y función"],
    ["초청 워크숍", "taller invitado"],
    ["워크숍", "taller"],
    ["특강", "taller"],
    ["심사위원", "jurado"],
    ["강사", "maestro"],
    ["게스트", "invitado"],
    ["밀롱가", "milonga"],
    ["발스", "vals"],
    ["1등", "1.º"],
    ["2등", "2.º"],
    ["3등", "3.º"],
    ["공연", "función"],
    ["출연", "aparición"],
    ["파티", "fiesta"],
  ],
};

export function text(lang, key) {
  const bag = ui[lang] || ui.ko;
  const value = bag[key] ?? ui.ko[key];
  return value;
}

export function dayName(lang, day) {
  return dayFull[lang]?.[day] || dayFull.ko[day] || day;
}

export function dayLetter(lang, day) {
  return dayMark[lang]?.[day] || day;
}

export function weekLabel(item, lang) {
  const key = item.name === "특강" ? "special" : item.name === "쁘락" ? "practica" : item.id;
  return weekNames[key]?.[lang] || item.name;
}

export function won(lang, amount) {
  if (lang === "ko" || !amount) return amount;
  const n = Number(String(amount).replace("만원", ""));
  if (!Number.isFinite(n)) return amount;
  if (lang === "zh") return `${n}万韩元`;
  if (lang === "ja") return `${n}万ウォン`;
  return `${(n * 10000).toLocaleString("es-ES")} wones`;
}

function pick(entry, lang) {
  if (!entry) return undefined;
  if (typeof entry === "string") return entry;
  return entry[lang] || entry.ko;
}

export function localizeCourse(course, lang) {
  if (!course || lang === "ko") return course;
  const extra = courses[course.id];
  if (!extra) return course;
  const next = { ...course };
  for (const key of ["name", "lead", "target", "duration", "place", "timeNote", "warn", "startNote", "note"]) {
    if (extra[key]) next[key] = pick(extra[key], lang);
  }
  if (extra.intro) next.intro = extra.intro.map((item) => pick(item, lang));
  if (extra.points) next.points = extra.points.map((item) => pick(item, lang));
  if (extra.apply && course.apply) next.apply = { ...course.apply, label: pick(extra.apply, lang) };
  if (extra.weeks) {
    next.weeks = course.weeks.map((week, index) => {
      const translated = extra.weeks[index];
      if (!translated) return week;
      if (translated.ko) return pick(translated, lang);
      return {
        topic: pick(translated.topic, lang),
        detail: translated.detail ? pick(translated.detail, lang) : week.detail,
      };
    });
  }
  if (extra.groups) {
    next.groups = course.groups.map((group, index) => ({
      title: pick(extra.groups[index].title, lang),
      weeks: group.weeks.map((topic, weekIndex) => pick(extra.groups[index].weeks[weekIndex], lang) || topic),
    }));
  }
  return next;
}

export function localizeTeacher(teacher, lang) {
  if (!teacher || lang === "ko") return teacher;
  const extra = teachers[teacher.id];
  if (!extra) return teacher;
  return {
    ...teacher,
    summary: pick(extra.summary, lang) || teacher.summary,
    paragraphs: extra.paragraphs ? extra.paragraphs.map((item) => pick(item, lang)) : teacher.paragraphs,
    education: extra.education ? extra.education.map((item) => pick(item, lang)) : teacher.education,
    awards: teacher.awards?.map((item) => glossLine(item, lang)),
    judging: teacher.judging?.map((item) => glossLine(item, lang)),
    teaching: teacher.teaching?.map((item) => glossLine(item, lang)),
  };
}

const teacherNames = {
  ko: { elly: "엘리", jiwoon: "지운" },
  zh: { elly: "艾莉", jiwoon: "智云" },
  ja: { elly: "エリ", jiwoon: "ジウン" },
  es: { elly: "Elly", jiwoon: "Ji Woon" },
};

export function teacherName(id, lang) {
  return teacherNames[lang]?.[id] || teacherNames.ko[id] || id;
}

export function glossLine(value, lang) {
  if (!value || lang === "ko") return value;
  const pairs = gloss[lang];
  if (!pairs) return value;
  return pairs.reduce((text, [from, to]) => text.split(from).join(to), value);
}
