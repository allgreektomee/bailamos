/**
 * 스프레드시트 → 확장 프로그램 → Apps Script 에 붙여 넣는다.
 * 배포 → 새 배포 → 웹 앱.
 *   실행: 나
 *   액세스: 모든 사용자
 * 나온 웹 앱 주소를 서버 환경변수 APPLY_WEBAPP_URL 에 넣는다.
 * 신청은 시트 하나에 쌓이고, 신청과정 열로 거른다.
 * 관리자 화면이 시트를 읽으려면
 *   프로젝트 설정 → 스크립트 속성 → READ_KEY
 * 값을 서버의 APPLY_READ_KEY 와 같게 넣고, 웹 앱을 새 버전으로 다시 배포한다.
 */

var COURSE_LABELS_ = {
  "1 beginner": "초급",
  "2 beginner-intermediate": "초중급",
  "3 intermediate": "중급",
  "4 upper-intermediate": "중상급",
  "5 advanced": "상급",
  "6 intensive": "인텐시브",
  "7 private": "개인레슨",
  "8 Axis · Pivot · Ocho": "Axis · Pivot · Ocho",
  "9 walk": "걷기",
  "10 milonga": "밀롱가",
  "11 vals": "발스",
  "12 giro": "히로 콤비네이션",
  "13 practica": "쁘락",
};

function doGet(e) {
  const key = e && e.parameter ? String(e.parameter.key || "") : "";
  const expected = PropertiesService.getScriptProperties().getProperty("READ_KEY");
  if (!expected || key !== expected) {
    return json_({ ok: false, error: "unauthorized" });
  }
  const values = sheet_().getDataRange().getValues();
  const matched = [];
  for (let index = values.length - 1; index >= 1; index -= 1) {
    const row = record_(values[index]);
    if (matches_(row, e)) matched.push(row);
  }
  const limit = clamp_(param_(e, "limit"), 50, 1, 50);
  const total = matched.length;
  const pages = Math.max(1, Math.ceil(total / limit) || 1);
  const page = Math.min(pages, clamp_(param_(e, "page"), 1, 1, pages));
  const start = (page - 1) * limit;
  return json_({
    ok: true,
    rows: matched.slice(start, start + limit),
    total: total,
    page: page,
    pages: pages,
    limit: limit,
    leader: countRole_(matched, "리더"),
    follower: countRole_(matched, "팔로워"),
  });
}

function param_(e, name) {
  if (!e || !e.parameter || e.parameter[name] == null) return "";
  return String(e.parameter[name]);
}

function clamp_(value, fallback, min, max) {
  const number = Number(value);
  if (!number) return fallback;
  return Math.min(max, Math.max(min, Math.floor(number)));
}

function record_(row) {
  return {
    at: cell_(row[0]),
    course: cell_(row[1]),
    role: cell_(row[2]),
    batch: cell_(row[3]),
    name: cell_(row[4]),
    depositor: cell_(row[5]),
    phone: cell_(row[6]),
    source: cell_(row[7]),
    note: cell_(row[8]),
  };
}

function matches_(row, e) {
  const day = String(row.at || "").slice(0, 10);
  const course = param_(e, "course");
  const from = param_(e, "from");
  const to = param_(e, "to");
  const role = param_(e, "role");
  const batch = param_(e, "batch");
  const query = param_(e, "query").trim().toLowerCase();
  const label = COURSE_LABELS_[row.course] || row.course || "";
  if (course && label !== course) return false;
  if (from && (!day || day < from)) return false;
  if (to && (!day || day > to)) return false;
  if (role && row.role !== role) return false;
  if (batch === "일반" && row.batch !== "일반 신청") return false;
  if (batch === "기수" && row.batch !== "B.T 기수 신청") return false;
  if (query) {
    const hay = (row.name + " " + row.phone + " " + row.depositor).toLowerCase();
    if (hay.indexOf(query) === -1) return false;
  }
  return true;
}

function countRole_(rows, role) {
  return rows.filter(function (row) { return row.role === role; }).length;
}

function cell_(value) {
  if (Object.prototype.toString.call(value) === "[object Date]") {
    return Utilities.formatDate(value, "Asia/Seoul", "yyyy-MM-dd HH:mm:ss");
  }
  return value == null ? "" : String(value);
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = sheet_();
    sheet.appendRow([
      Utilities.formatDate(new Date(), "Asia/Seoul", "yyyy-MM-dd HH:mm:ss"),
      data.course || "",
      data.role || "",
      data.batch || "",
      data.name || "",
      data.depositor || "",
      data.phone || "",
      data.source || "",
      data.note || "",
    ]);
    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, error: String(error) });
  } finally {
    lock.releaseLock();
  }
}

function sheet_() {
  const book = SpreadsheetApp.getActive();
  let sheet = book.getSheetByName("신청");
  if (!sheet) {
    sheet = book.insertSheet("신청");
    sheet.appendRow(["접수시각", "신청과정", "포지션", "신청구분", "이름", "입금자명", "휴대폰", "알게된곳", "하고싶은말"]);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json_(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}
