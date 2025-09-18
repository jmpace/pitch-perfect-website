# Google Sheets Integration Setup

## Steps to connect your form to Google Sheets:

### 1. Create a Google Apps Script

1. Go to [script.google.com](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the contents of `google-apps-script.js`
4. Save the project (Ctrl+S or Cmd+S)

### 2. Deploy as Web App

1. Click "Deploy" → "New deployment"
2. Choose "Web app" as the type
3. Set the following:
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click "Deploy"
5. Copy the web app URL (it will look like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`)

### 3. Update Environment Variables

1. Create a `.env.local` file in your project root
2. Add the following line:
   ```
   GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
   (Replace `YOUR_SCRIPT_ID` with the actual ID from your deployed script)

### 4. Test the Integration

1. Start your development server: `npm run dev`
2. Go to your landing page
3. Enter an email and click "Get notified"
4. Check your Google Sheet to see if the email was added

## Troubleshooting

- Make sure the Google Apps Script has permission to access your Google Sheet
- Verify the spreadsheet ID in the script matches your sheet
- Check that the sheet name is correct (default is "Sheet1")
- Ensure the web app is deployed with "Anyone" access

## Security Notes

- The current setup allows anyone to add emails to your sheet
- For production, consider adding authentication or rate limiting
- The Google Apps Script approach is simple but has limitations for high-volume usage
