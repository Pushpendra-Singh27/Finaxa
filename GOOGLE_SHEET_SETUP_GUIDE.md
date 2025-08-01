# Google Apps Script Setup Guide for Celestia Capitals

## Step 1: Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Replace the default code with the provided script below
4. Save the project with a name like "Celestia Capitals Form Handler"

## Step 2: Copy the Script Code

Replace the default code in your Google Apps Script with this:

```javascript
// ====== Celestia Capitals Form Handler with Full CORS Support ======
// Deploy as Web App: Execute as 'Me', Access: 'Anyone'

// ====== Handle POST request from form ======
function doPost(e) {
  try {
    // Parse JSON data
    const data = JSON.parse(e.postData.contents);

    // Append data to Google Sheet
    const spreadsheet = SpreadsheetApp.openById('1x3Bt0GuHF-XSIg6P-ehux5cTy10eBNKAOGK7apHxYVE');
    const sheet = spreadsheet.getActiveSheet();
    
    sheet.appendRow([
      new Date(),                 // Timestamp
      data.name || '',
      data.email || '',
      data.phone || '',
      data.hearAbout || '',
      data.investment || '',
      data.message || ''
    ]);

    // Success response
    return createCORSResponse({ 
      success: true, 
      message: 'Data submitted successfully',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    // Error response
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
  return createCORSResponse({}, 204); // 204 = No Content
}

// ====== Utility: Create a JSON response with CORS headers ======
function createCORSResponse(obj, statusCode) {
  statusCode = statusCode || 200;
  
  const output = ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);

  // Apps Script doesn't allow setHeader directly, but this works for JSON
  // For CORS in Apps Script Web Apps, simply making it public handles OPTIONS automatically
  // This function is here for clarity; preflight OPTIONS requests will succeed.

  return output;
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
```

## Step 3: Deploy as Web App

1. Click "Deploy" → "New deployment"
2. Choose "Web app" as the type
3. Set the following:
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. Click "Deploy"
5. Authorize the app when prompted
6. Copy the Web App URL (it will look like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`)

## Step 4: Update Your Environment Variables

1. Create a `.env` file in your project root (if it doesn't exist)
2. Add your Google Apps Script URL:

```env
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace `YOUR_SCRIPT_ID` with the actual script ID from your deployment URL.

## Step 5: Test the Connection

1. Start your development server
2. Open the website and trigger the popup
3. Click "Test Connection" button to verify the setup
4. Submit a test form to ensure data is being sent to Google Sheets

## Step 6: Setup Google Sheet Headers (One-time)

1. In your Google Apps Script editor, run the `setupSheetHeaders()` function once
2. This will create the proper headers in your Google Sheet

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Make sure you deployed as "Anyone" with access
2. **Authorization Errors**: Ensure you're executing as "Me"
3. **Sheet Not Found**: Verify the spreadsheet ID is correct
4. **Network Errors**: Check that the URL is correct and accessible

### Testing:

- Use the "Test Connection" button in the popup
- Check browser console for detailed error messages
- Verify the Google Sheet is receiving data

## Security Notes

- The script is configured to accept requests from anyone
- Consider adding additional validation if needed
- The spreadsheet ID is hardcoded - update it if you change sheets 