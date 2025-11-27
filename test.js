function writeToSheet() {
  // スプレッドシートのアクティブシートのA1セルに書き込み
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.getRange("A1").setValue("スプレッドシートに書き込みました！");
}
