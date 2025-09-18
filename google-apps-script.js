// Google Apps Script code to save emails to Google Sheets
// Deploy this as a web app with execute permissions for "Anyone"

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    const email = data.email;
    
    if (!email) {
      return ContentService
        .createTextOutput(JSON.stringify({error: 'Email is required'}))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get the spreadsheet by ID
    const SPREADSHEET_ID = '18R9U3D4RnKKgd77qoMoYEoUyusXGnLUx0u44ah6R9nA';
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName('Sheet1');
    
    // Add the email to the next available row in column A
    sheet.appendRow([email]);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true, message: 'Email saved successfully'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({error: 'Failed to save email: ' + error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('This endpoint only accepts POST requests')
    .setMimeType(ContentService.MimeType.TEXT);
}
