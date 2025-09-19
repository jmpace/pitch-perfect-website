// Google Apps Script code to save emails to Google Sheets
// Deploy this as a web app with execute permissions for "Anyone"

function doPost(e) {
  try {
    // Log the incoming request for debugging
    console.log('Received POST request:', e.postData);
    
    // Parse the incoming data (handle both JSON and form data)
    let email;
    if (e.postData.type === 'application/json') {
      const data = JSON.parse(e.postData.contents);
      email = data.email;
    } else {
      // Handle form data
      email = e.parameter.email;
    }
    
    console.log('Parsed email:', email);
    
    if (!email) {
      return ContentService
        .createTextOutput(JSON.stringify({error: 'Email is required'}))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get the spreadsheet by ID - UPDATE THIS WITH YOUR ACTUAL SPREADSHEET ID
    const SPREADSHEET_ID = '18R9U3D4RnKKgd77qoMoYEoUyusXGnLUx0u44ah6R9nA';
    
    try {
      const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
      const sheet = spreadsheet.getSheetByName('Sheet1');
      
      console.log('Found sheet:', sheet.getName());
      
      // Add the email to the next available row in column A
      sheet.appendRow([email]);
      
      console.log('Successfully added email:', email);
      
      return ContentService
        .createTextOutput(JSON.stringify({success: true, message: 'Email saved successfully'}))
        .setMimeType(ContentService.MimeType.JSON);
        
    } catch (sheetError) {
      console.error('Sheet error:', sheetError);
      return ContentService
        .createTextOutput(JSON.stringify({error: 'Sheet error: ' + sheetError.toString()}))
        .setMimeType(ContentService.MimeType.JSON);
    }
      
  } catch (error) {
    console.error('General error:', error);
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

function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT);
}
