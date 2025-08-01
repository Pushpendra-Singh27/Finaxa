# Troubleshooting Network Error in Google Apps Script Integration

## **Common Causes & Solutions:**

### **1. CORS (Cross-Origin Resource Sharing) Issues**

**Symptoms:**
- "Network error. Please check your connection and try again."
- Console shows CORS errors

**Solutions:**
1. **Ensure Google Apps Script is deployed as Web App**
   - Go to Google Apps Script
   - Click "Deploy" → "Manage deployments"
   - Verify "Who has access" is set to "Anyone"
   - Verify "Execute as" is set to "Me"

2. **Check the deployment URL**
   - Make sure you're using the `/exec` endpoint, not `/dev`
   - URL should be: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`

### **2. Google Apps Script Not Responding**

**Test Steps:**
1. **Direct URL Test**: Visit your Google Apps Script URL directly in browser
   - Should show: `{"success":true,"message":"Form handler is working!"}`
   - If not, the script needs to be redeployed

2. **Check Google Apps Script Logs**:
   - Go to Google Apps Script editor
   - Click "View" → "Execution log"
   - Look for any errors

### **3. Environment Variable Issues**

**Check your `.env` file:**
```env
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbwRkw4obM20qlLO5ZhQlQauf3S7h9gO3apMYODfZMq8GAvluIRhpKvXzseM6GOZ5pOuYw/exec
```

**Steps:**
1. Create `.env` file in project root
2. Add the above line
3. Restart development server
4. Clear browser cache

### **4. Browser Console Debugging**

**Open browser console (F12) and check:**
1. **Network tab**: Look for failed requests to Google Apps Script
2. **Console tab**: Look for CORS or network errors
3. **Test the connection**: Click "Test Connection" button

### **5. Google Apps Script Code Issues**

**Verify your script has:**
```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    // ... rest of your code
  } catch (error) {
    console.error('Error:', error);
    return createCORSResponse({ 
      success: false, 
      message: 'Error: ' + error.toString()
    });
  }
}
```

### **6. Quick Fixes to Try:**

1. **Redeploy Google Apps Script**:
   - Go to Google Apps Script
   - Click "Deploy" → "New deployment"
   - Choose "Web app"
   - Set "Who has access" to "Anyone"
   - Copy new URL and update `.env` file

2. **Clear browser cache and cookies**

3. **Try in incognito/private mode**

4. **Check if the script URL is accessible**:
   - Visit the URL directly in browser
   - Should show JSON response

### **7. Advanced Debugging:**

**Add this to your Google Apps Script for debugging:**
```javascript
function doPost(e) {
  try {
    console.log('Received request');
    console.log('Post data:', e.postData.contents);
    
    const data = JSON.parse(e.postData.contents);
    console.log('Parsed data:', data);
    
    // ... rest of your code
  } catch (error) {
    console.error('Error in doPost:', error);
    return createCORSResponse({ 
      success: false, 
      message: 'Error: ' + error.toString()
    });
  }
}
```

### **8. Test Steps:**

1. **Test GET request**: Visit script URL directly
2. **Test POST request**: Use "Test Connection" button
3. **Test form submission**: Submit actual form
4. **Check Google Sheet**: Verify data is being saved

### **9. If Still Not Working:**

1. **Check Google Apps Script logs** for errors
2. **Verify spreadsheet permissions** (script needs edit access)
3. **Try a different browser**
4. **Check if your network blocks Google services**

## **Expected Behavior:**

- ✅ **Test Connection**: Should show "Connection test successful!"
- ✅ **Form Submission**: Should show "Thank you! Your meeting request has been submitted successfully."
- ✅ **Google Sheet**: Should receive actual form data (not "Test Run") 