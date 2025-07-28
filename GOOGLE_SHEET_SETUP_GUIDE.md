# Complete Google Sheet Integration Setup Guide

## Step 1: Set up Google Apps Script

1. **Go to [Google Apps Script](https://script.google.com/)**
2. **Click "New Project"**
3. **Replace the default code** with the content from `google-apps-script.js`
4. **Save the project** with name "Celestia Capitals Form Handler"

## Step 2: Deploy as Web App (CRITICAL)

1. **Click "Deploy"** → **"New deployment"**
2. **Choose type**: "Web app"
3. **Set up deployment**:
   - **Execute as**: "Me" (your Google account)
   - **Who has access**: "Anyone" (for testing)
4. **Click "Deploy"**
5. **Authorize the app** when prompted
6. **Copy the Web app URL** (it will look like: `https://script.google.com/macros/s/AKfycbzpegvzdi2RzDN3ohgJ1PNxbaosqHSJBBjktkQ3ahgy/dev`)

## Step 3: Set up Google Sheet Headers

1. **In the Google Apps Script editor**, go to the function dropdown (top right)
2. **Select `setupSheetHeaders`** and click the "Run" button
3. **Grant permissions** when prompted
4. **Check your Google Sheet** - it should now have formatted headers:
   - Timestamp
   - Name
   - Email
   - Phone Number
   - How did you hear about us
   - Initial Investment
   - Message

## Step 4: Update React Form Configuration

1. **Create a `.env` file** in your project root:
   ```
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
2. **Replace `YOUR_SCRIPT_ID`** with your actual script ID from the deployment URL

## Step 5: Test the Connection

1. **Restart your development server** after adding the `.env` file
2. **Open the popup form** and click "Test Connection"
3. **Check browser console** for detailed logs

## Troubleshooting Common Issues

### Issue 1: "Failed to fetch" Error
**Cause**: CORS issue or script not properly deployed
**Solution**:
1. Ensure script is deployed as "Web app" (not just saved)
2. Check that "Who has access" is set to "Anyone"
3. Verify the deployment URL is correct

### Issue 2: "404 Not Found" Error
**Cause**: Wrong deployment URL
**Solution**:
1. Go back to Google Apps Script
2. Click "Deploy" → "Manage deployments"
3. Copy the correct Web app URL
4. Update your `.env` file

### Issue 3: "Unauthorized" Error
**Cause**: Script permissions not set correctly
**Solution**:
1. In Google Apps Script, go to "Project Settings"
2. Under "Script Properties", ensure "Show appsscript.json manifest file in editor" is checked
3. Redeploy the web app

### Issue 4: Data not saving to sheet
**Cause**: Sheet ID mismatch or permissions
**Solution**:
1. Verify the sheet ID in the script matches your Google Sheet
2. Ensure your Google account has edit access to the sheet
3. Run `setupSheetHeaders()` function again

## Testing Steps

1. **Test GET request**: Visit your deployment URL directly in browser
   - Should show: `{"success":true,"message":"Form handler is working!"}`

2. **Test POST request**: Use the "Test Connection" button in the popup
   - Should show success message in console

3. **Test form submission**: Fill out and submit the actual form
   - Should save data to your Google Sheet

## Final Checklist

- [ ] Google Apps Script deployed as Web app
- [ ] Deployment URL copied correctly
- [ ] `.env` file created with correct URL
- [ ] Development server restarted
- [ ] Sheet headers set up
- [ ] GET request works (direct URL visit)
- [ ] POST request works (Test Connection button)
- [ ] Form submission works (actual form)

If you're still having issues, check the browser console for specific error messages and let me know what you see! 