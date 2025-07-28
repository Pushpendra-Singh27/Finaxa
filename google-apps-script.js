// Google Apps Script for handling form submissions
// Deploy this as a web app to handle form data

function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    const spreadsheet = SpreadsheetApp.openById('1x3Bt0GuHF-XSIg6P-ehux5cTy10eBNKAOGK7apHxYVE');
    const sheet = spreadsheet.getActiveSheet();
    
    // Prepare the row data
    const rowData = [
      new Date(), // Timestamp
      data.name || '',
      data.email || '',
      data.phone || '',
      data.hearAbout || '',
      data.investment || '',
      data.message || ''
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data submitted successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        message: 'Error submitting data: ' + error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService
    .createTextOutput('Form handler is working!')
    .setMimeType(ContentService.MimeType.TEXT);
} 