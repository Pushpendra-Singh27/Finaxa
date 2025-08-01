# Production Setup Guide for Celestia Capitals

## **Step 1: Update Google Apps Script**

1. **Go to your Google Apps Script project**
2. **Replace the code** with the updated version from `google-apps-script.js`
3. **Save the project**
4. **Redeploy as Web App**:
   - Click "Deploy" → "Manage deployments"
   - Click "Edit" on your existing deployment
   - Or create a new deployment
   - Ensure settings are:
     - **Execute as**: "Me"
     - **Who has access**: "Anyone"
5. **Copy the new deployment URL**

## **Step 2: Set Up Environment Variables**

1. **Create a `.env` file** in your project root (if it doesn't exist)
2. **Add your Google Apps Script URL**:

```env
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec
```

**Replace `YOUR_ACTUAL_SCRIPT_ID`** with the script ID from your deployment URL.

## **Step 3: Setup Google Sheet Headers**

1. **In your Google Apps Script editor**:
   - Select the `setupSheetHeaders` function from the dropdown
   - Click "Run"
   - Grant permissions when prompted
2. **Verify your Google Sheet** now has proper headers:
   - Timestamp
   - Name
   - Email
   - Phone Number
   - How did you hear about us
   - Initial Investment
   - Message

## **Step 4: Test the Production Setup**

1. **Restart your development server** after adding the `.env` file
2. **Open the website** and trigger the popup
3. **Click "Test Connection"** to verify the setup
4. **Submit a test form** with real data
5. **Check your Google Sheet** - you should see the actual form data instead of "Test Run"

## **Step 5: Verify Production is Working**

Your Google Sheet should now show:
- **Column A**: Actual names from the form
- **Column B**: Timestamps
- **Column C**: Email addresses
- **Column D**: Phone numbers
- **Column E**: How they heard about you
- **Column F**: Investment amounts
- **Column G**: Messages

## **Troubleshooting Production Issues**

### **Issue 1: Still getting "Test Run"**
**Solution**: 
- Check that your `.env` file has the correct URL
- Verify the Google Apps Script is properly deployed
- Check browser console for errors

### **Issue 2: "Failed to fetch" errors**
**Solution**:
- Ensure the script is deployed as "Web app"
- Check that "Who has access" is set to "Anyone"
- Verify the URL is correct

### **Issue 3: Data not appearing in sheet**
**Solution**:
- Run the `testSheetAccess()` function in Google Apps Script
- Check the Apps Script logs for errors
- Verify the spreadsheet ID is correct

## **Production Checklist**

- [ ] Google Apps Script updated with new code
- [ ] Script redeployed as Web App
- [ ] `.env` file created with correct URL
- [ ] Development server restarted
- [ ] Sheet headers set up
- [ ] Test connection successful
- [ ] Form submission working
- [ ] Real data appearing in Google Sheet

## **Security Notes**

- The script accepts requests from anyone (public access)
- Consider adding additional validation if needed
- Monitor your Google Sheet for spam submissions
- The spreadsheet ID is hardcoded - update if you change sheets

## **Monitoring**

- Check Google Apps Script logs for errors
- Monitor your Google Sheet for new submissions
- Test the form periodically to ensure it's working 