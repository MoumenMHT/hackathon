# Google Sheets Integration Setup Guide

This guide will help you connect your hackathon registration form to Google Sheets.

## Step-by-Step Setup

### 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "EcoHack 2026 Registrations" (or any name you prefer)
4. Keep this tab open

### 2. Set Up Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code in the script editor
3. Copy the entire code from `google-apps-script.js` in your project folder
4. Paste it into the Apps Script editor
5. Click the **Save** icon (💾) or press `Ctrl+S`
6. Name your project (e.g., "EcoHack Registration Handler")

### 3. Deploy as Web App

1. In the Apps Script editor, click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "Registration Form Handler" (optional)
   - **Execute as**: Select **Me** (your Google account)
   - **Who has access**: Select **Anyone**
5. Click **Deploy**
6. You may need to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Project Name] (unsafe)**
   - Click **Allow**
7. **IMPORTANT**: Copy the **Web app URL** that appears
   - It looks like: `https://script.google.com/macros/s/AKfycby.../exec`
   - You'll need this in the next step

### 4. Update Your Vue Application

1. Open `src/config.js` in your project
2. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with the URL you copied
3. Example:
   ```javascript
   export const config = {
     googleSheetsUrl: 'https://script.google.com/macros/s/AKfycby123abc.../exec'
   }
   ```
4. Save the file

### 5. Test the Integration

1. Run your Vue application (`npm run dev`)
2. Click any "Register Now" button
3. Fill out the registration form
4. Submit the form
5. Check your Google Sheet - you should see the data appear!

## What Data is Sent?

The following information is captured:
- **Timestamp**: When the registration was submitted
- **Team Name**: Name of the team
- **Team Leader**: Name of the team leader
- **Email**: Contact email
- **Phone**: Contact phone number
- **Team Size**: Number of team members (1-5)
- **Challenge**: Preferred challenge (Education, Environment, Health, Innovation)
- **Experience Level**: Beginner, Intermediate, or Advanced
- **Notes**: Additional information provided by the team

## Troubleshooting

### Data not appearing in Google Sheet?

1. **Check the URL**: Make sure you copied the complete deployment URL including `/exec` at the end
2. **Re-deploy**: Try creating a new deployment in Apps Script
3. **Check permissions**: Ensure "Who has access" is set to "Anyone"
4. **Browser console**: Open browser DevTools (F12) and check the Console tab for errors

### Authorization issues?

1. In Apps Script, go to **Project Settings** (⚙️)
2. Check that you've authorized the script
3. Try re-deploying with a new version

### Still not working?

1. Test the Google Apps Script directly:
   - In Apps Script editor, select the `testDoPost` function
   - Click **Run**
   - Check your Google Sheet for test data
2. Check the browser console for CORS or network errors
3. Ensure your internet connection is stable

## Security Notes

- The script uses `mode: 'no-cors'` which is required for Google Apps Script
- This means the frontend won't receive response data (by design for security)
- All data is stored securely in your Google Sheet
- Only you (the sheet owner) can access the data

## Customization

### Adding More Fields

1. Update the form in `RegistrationModal.vue`
2. Add the field to `formData` in the component
3. Update `google-apps-script.js`:
   - Add the field to the `headers` array
   - Add it to the `rowData` array
4. Re-deploy the script with a new version

### Changing Sheet Destination

By default, data goes to the active sheet. To specify a sheet:

```javascript
// In google-apps-script.js, replace:
const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

// With:
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Registrations');
```

## Support

If you encounter issues:
1. Check the browser console for errors
2. Review the Apps Script execution logs: **Executions** in the left sidebar
3. Verify your URL in `src/config.js`

---

**Need help?** Make sure all steps are completed in order, and check that your Google Apps Script deployment is set to "Anyone" for access.
