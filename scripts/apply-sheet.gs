/**
 * 스프레드시트 → 확장 프로그램 → Apps Script 에 붙여 넣는다.
 * 배포 → 새 배포 → 웹 앱.
 *   실행: 나
 *   액세스: 모든 사용자
 * 나온 웹 앱 주소를 서버 환경변수 APPLY_WEBAPP_URL 에 넣는다.
 * 신청은 시트 하나에 쌓이고, 신청과정 열로 거른다.
 */

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
