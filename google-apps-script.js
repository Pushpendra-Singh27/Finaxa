// Google Apps Script for Celestia Capitals Form Handler
// Deploy this as a web app to handle form data

function doPost(e) {
  try {
    // Add CORS headers
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json'
    };
    
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Get the specific spreadsheet by ID
    const spreadsheet = SpreadsheetApp.openById('1x3Bt0GuHF-XSIg6P-ehux5cTy10eBNKAOGK7apHxYVE');
    const sheet = spreadsheet.getActiveSheet();
    
    // Prepare the row data with headers
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
    
    // Log for debugging
    console.log('Data submitted successfully:', rowData);
    
    // Return success response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Data submitted successfully',
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
      
  } catch (error) {
    // Log error for debugging
    console.error('Error in form submission:', error.toString());
    
    // Return error response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        message: 'Error submitting data: ' + error.toString(),
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
  }
}

function doGet(e) {
  // Handle GET requests (for testing)
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };
  
  return ContentService
    .createTextOutput(JSON.stringify({ 
      success: true, 
      message: 'Form handler is working!',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(headers);
}

function doOptions(e) {
  // Handle preflight OPTIONS requests for CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400'
  };
  
  return ContentService
    .createTextOutput('')
    .setHeaders(headers);
}

// Function to set up headers in the sheet (run this once manually)
function setupSheetHeaders() {
  const spreadsheet = SpreadsheetApp.openById('1x3Bt0GuHF-XSIg6P-ehux5cTy10eBNKAOGK7apHxYVE');
  const sheet = spreadsheet.getActiveSheet();
  
  // Set up headers
  const headers = [
    'Timestamp',
    'Name',
    'Email', 
    'Phone Number',
    'How did you hear about us',
    'Initial Investment',
    'Message'
  ];
  
  // Clear existing content and add headers
  sheet.clear();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  sheet.getRange(1, 1, 1, headers.length).setBackground('#4285f4');
  sheet.getRange(1, 1, 1, headers.length).setFontColor('white');
  
  console.log('Sheet headers set up successfully!');
} 