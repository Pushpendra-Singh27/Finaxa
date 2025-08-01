// ====== Celestia Capitals Form Handler with Full CORS Support ======
// Deploy as Web App: Execute as 'Me', Access: 'Anyone'

// ====== Handle POST request from form ======
function doPost(e) {
  try {
    // Parse JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Log the received data for debugging
    console.log('Received data:', JSON.stringify(data, null, 2));

    // Append data to Google Sheet
    const spreadsheet = SpreadsheetApp.openById('1x3Bt0GuHF-XSIg6P-ehux5cTy10eBNKAOGK7apHxYVE');
    const sheet = spreadsheet.getActiveSheet();
    
    // Create row with proper data structure
    const rowData = [
      new Date(),                 // Timestamp
      data.name || '',
      data.email || '',
      data.phone || '',
      data.hearAbout || '',
      data.investment || '',
      data.message || ''
    ];
    
    // Log the row data being inserted
    console.log('Inserting row:', rowData);
    
    sheet.appendRow(rowData);

    // Success response with CORS headers
    return createCORSResponse({ 
      success: true, 
      message: 'Data submitted successfully',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    // Log the error for debugging
    console.error('Error in doPost:', error.toString());
    
    // Error response with CORS headers
    return createCORSResponse({ 
      success: false, 
      message: 'Error: ' + error.toString()
    });
  }
}

// ====== Handle GET requests (optional for testing) ======
function doGet(e) {
  return createCORSResponse({
    success: true,
    message: 'Form handler is working!',
    timestamp: new Date().toISOString()
  });
}

// ====== Handle OPTIONS preflight requests for CORS ======
function doOptions(e) {
  // Google Apps Script automatically handles CORS for Web Apps
  // Just return an empty response with 204 status
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT);
}

// ====== Utility: Create a JSON response with CORS headers ======
function createCORSResponse(obj, statusCode) {
  statusCode = statusCode || 200;
  
  // Google Apps Script automatically adds CORS headers for Web Apps
  // when deployed with "Anyone" access
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// ====== Utility: Setup Sheet Headers (Run Once Manually) ======
function setupSheetHeaders() {
  const spreadsheet = SpreadsheetApp.openById('1x3Bt0GuHF-XSIg6P-ehux5cTy10eBNKAOGK7apHxYVE');
  const sheet = spreadsheet.getActiveSheet();
  
  const headers = [
    'Timestamp',
    'Name',
    'Email', 
    'Phone Number',
    'How did you hear about us',
    'Initial Investment',
    'Message'
  ];
  
  sheet.clear();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  sheet.getRange(1, 1, 1, headers.length).setBackground('#4285f4');
  sheet.getRange(1, 1, 1, headers.length).setFontColor('white');
}

// ====== Utility: Test function to verify sheet access ======
function testSheetAccess() {
  try {
    const spreadsheet = SpreadsheetApp.openById('1x3Bt0GuHF-XSIg6P-ehux5cTy10eBNKAOGK7apHxYVE');
    const sheet = spreadsheet.getActiveSheet();
    console.log('Sheet name:', sheet.getName());
    console.log('Sheet access successful');
    return true;
  } catch (error) {
    console.error('Sheet access error:', error.toString());
    return false;
  }
} 