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

function doGet(e) {
  const key = e && e.parameter ? String(e.parameter.key || "") : "";
  const expected = PropertiesService.getScriptProperties().getProperty("READ_KEY");
  if (!expected || key !== expected) {
    return json_({ ok: false, error: "unauthorized" });
  }
  const values = sheet_().getDataRange().getValues();
  const rows = values.slice(1).map(function (row) {
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
  });
  return json_({ ok: true, rows: rows });
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
