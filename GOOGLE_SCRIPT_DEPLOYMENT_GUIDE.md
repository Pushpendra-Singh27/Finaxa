# Google Apps Script Deployment Guide - Fix 403 Forbidden Error

## **Step 1: Check Current Deployment**

1. **Go to [Google Apps Script](https://script.google.com/)**
2. **Open your project**
3. **Click "Deploy" → "Manage deployments"**
4. **Check the current deployment settings**

## **Step 2: Redeploy with Correct Settings**

### **Option A: Edit Existing Deployment**
1. **Click "Edit" on your current deployment**
2. **Set these exact settings:**
   - **Execute as**: "Me" (your Google account)
   - **Who has access**: "Anyone"
3. **Click "Deploy"**
4. **Authorize when prompted**

### **Option B: Create New Deployment**
1. **Click "New deployment"**
2. **Choose "Web app"**
3. **Set these exact settings:**
   - **Execute as**: "Me" (your Google account)
   - **Who has access**: "Anyone"
4. **Click "Deploy"**
5. **Authorize when prompted**
6. **Copy the new Web App URL**

## **Step 3: Test the Deployment**

### **Test 1: Direct URL Access**
1. **Copy your deployment URL**
2. **Paste it in a new browser tab**
3. **Should see**: `{"success":true,"message":"Form handler is working!","timestamp":"..."}`

### **Test 2: Check Authorization**
1. **Go to Google Apps Script**
2. **Click "View" → "Execution log"**
3. **Look for any authorization errors**

## **Step 4: Common 403 Error Causes**

### **Cause 1: Wrong Access Settings**
- **Fix**: Set "Who has access" to "Anyone"
- **Not**: "Only myself" or "Anyone with Google Account"

### **Cause 2: Not Authorized**
- **Fix**: Click "Deploy" and authorize when prompted
- **Check**: Go to Google Account → Security → Third-party apps

### **Cause 3: Wrong Execute As**
- **Fix**: Set "Execute as" to "Me" (your account)
- **Not**: "User accessing the web app"

### **Cause 4: Script Not Saved**
- **Fix**: Save the script before deploying
- **Check**: Look for unsaved changes indicator

## **Step 5: Advanced Troubleshooting**

### **Check Script Permissions**
1. **In Google Apps Script editor**
2. **Click "Project Settings"**
3. **Under "Script Properties"**
4. **Ensure "Show appsscript.json manifest file in editor" is checked**

### **Test with Simple Script**
Replace your script temporarily with this simple test:

```javascript
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    success: true,
    message: 'Test successful',
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  return ContentService.createTextOutput(JSON.stringify({
    success: true,
    message: 'POST test successful',
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}
```

### **Check Google Account Settings**
1. **Go to [Google Account](https://myaccount.google.com/)**
2. **Security → Third-party apps with account access**
3. **Look for Google Apps Script**
4. **Remove and re-authorize if needed**

## **Step 6: Verify Working Deployment**

### **Expected Behavior:**
- ✅ **Direct URL access**: Shows JSON response
- ✅ **No authorization prompts**: After initial setup
- ✅ **Execution logs**: Show successful requests
- ✅ **Form submission**: Works from your website

### **If Still Getting 403:**
1. **Try a different browser**
2. **Clear browser cache and cookies**
3. **Try incognito/private mode**
4. **Check if your network blocks Google services**

## **Step 7: Final Test**

1. **Update your `.env` file** with the new deployment URL
2. **Restart your development server**
3. **Test the form** - should work without 403 errors

## **Common Deployment URLs:**

- **Working**: `https://script.google.com/macros/s/YOUR_ID/exec`
- **Wrong**: `https://script.google.com/macros/s/YOUR_ID/dev`
- **Wrong**: `https://script.google.com/macros/d/YOUR_ID/edit`

Make sure you're using the `/exec` endpoint, not `/dev` or `/edit`. 