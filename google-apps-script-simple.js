// Simple Google Apps Script to save emails to Google Sheets
// Deploy as web app with "Anyone" access

function doPost(e) {
  try {
    // Get email from form data
    const email = e.parameter.email;
    
    if (!email) {
      return ContentService.createTextOutput('Error: Email required');
    }
    
    // Your Google Sheet ID
    const SPREADSHEET_ID = '18R9U3D4RnKKgd77qoMoYEoUyusXGnLUx0u44ah6R9nA';
    
    // Open the sheet and add the email
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName('Sheet1');
    sheet.appendRow([email]);
    
    return ContentService.createTextOutput('Success: Email saved');
    
  } catch (error) {
    return ContentService.createTextOutput('Error: ' + error.toString());
  }
}

function doGet(e) {
  return ContentService.createTextOutput('This endpoint only accepts POST requests');
}
