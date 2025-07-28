# Google Sheet Form Integration Setup Guide

## Step 1: Set up Google Apps Script

1. **Go to [Google Apps Script](https://script.google.com/)**
2. **Create a new project**
3. **Replace the default code** with the content from `google-apps-script.js`
4. **Save the project** with a name like "Celestia Capitals Form Handler"

## Step 2: Deploy as Web App

1. **Click "Deploy"** → **"New deployment"**
2. **Choose type:** "Web app"
3. **Set the following:**
   - **Execute as:** "Me" (your Google account)
   - **Who has access:** "Anyone" (for public access)
4. **Click "Deploy"**
5. **Copy the Web App URL** (you'll need this for the React form)

## Step 3: Update React Form

1. **Open `src/components/BookMeetingPopup.tsx`**
2. **Find this line:**
   ```javascript
   const scriptUrl = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';
   ```
3. **Replace with your deployed web app URL**

## Step 4: Test the Integration

1. **Fill out the form** on your website
2. **Submit the form**
3. **Check your Google Sheet** - new rows should appear with:
   - Timestamp
   - Name
   - Email
   - Phone
   - How did you hear about us
   - Initial Investment
   - Message

## Step 5: Set up Google Sheet Headers (Optional)

Add these headers to your Google Sheet for better organization:
- A1: Timestamp
- B1: Name
- C1: Email
- D1: Phone
- E1: How did you hear about us
- F1: Initial Investment
- G1: Message

## Troubleshooting

### CORS Issues
If you get CORS errors, you may need to:
1. **Add CORS headers** to your Google Apps Script
2. **Use a CORS proxy** for development

### Permission Issues
Make sure:
1. **Google Apps Script** has permission to access your Google Sheet
2. **Web app is deployed** with correct permissions
3. **Google Sheet ID** is correct in the script

### Form Not Submitting
Check:
1. **Web app URL** is correct in React form
2. **Network tab** in browser dev tools for errors
3. **Google Apps Script logs** for server-side errors

## Security Notes

- The web app URL will be public
- Consider adding rate limiting or CAPTCHA for production
- Monitor your Google Sheet for spam submissions
- Consider adding email notifications for new submissions

## Advanced Features

You can enhance the Google Apps Script to:
- Send email notifications
- Add data validation
- Create different sheets for different form types
- Add automatic responses
- Integrate with other Google services 