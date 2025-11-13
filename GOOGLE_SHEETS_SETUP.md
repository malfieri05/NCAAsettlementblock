# Google Sheets Integration Setup Instructions

Follow these steps to connect your form submissions to Google Sheets:

## Step 1: Prepare Your Google Sheet

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1_Zbzs0ZJsizAq1zKC2xVIDsp64SnEEm2PbTKgKviOyM/edit

2. Add column headers in Row 1 (if not already present):
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Phone`
   - E1: `Claim ID`
   - F1: `Claim Size`
   - G1: `NCAA Eligibility Center ID`
   - H1: `Sport`
   - I1: `School/Institution`

## Step 2: Add the Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**

2. Delete any existing code in the script editor

3. Copy the entire contents of `google-apps-script.js` file and paste it into the Apps Script editor

4. Click the **Save** icon (💾) and name your project (e.g., "Block Form Handler")

## Step 3: Deploy the Script as a Web App

1. In the Apps Script editor, click **Deploy** → **New deployment**

2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**

3. Configure the deployment:
   - **Description**: "Form submission handler"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone

4. Click **Deploy**

5. You may need to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Project Name] (unsafe)**
   - Click **Allow**

6. **IMPORTANT**: Copy the **Web app URL** that appears. It will look like:
   ```
   https://script.google.com/macros/s/XXXXXXXXXXXXXX/exec
   ```
   **Save this URL** - you'll need it for the next step!

## Step 4: Update Your Website Form

Once you have the Web app URL, send it to your developer to update the form action URL in `index.html`.

The form action should be changed from:
```html
<form id="joinForm" class="join-form" action="https://formsubmit.co/ajax/malfieri05@gmail.com" method="POST">
```

To:
```html
<form id="joinForm" class="join-form" action="YOUR_WEB_APP_URL_HERE" method="POST">
```

## Step 5: Test the Integration

1. Submit a test form on your website
2. Check your Google Sheet - a new row should appear with the data
3. Check both email inboxes - you should receive email notifications

## Troubleshooting

### Form submissions not appearing in the sheet?
- Make sure the script is deployed as "Anyone" can access
- Check the Apps Script execution logs: **Extensions** → **Apps Script** → **Executions**
- Verify the Web app URL is correct in your HTML form

### Not receiving emails?
- Check spam folders
- Verify email addresses are correct in the script (lines 56-59)
- Check Apps Script execution logs for errors

### Need to update the script?
1. Make changes in the Apps Script editor
2. Click **Deploy** → **Manage deployments**
3. Click the edit icon (pencil) next to your deployment
4. Change version to "New version"
5. Click **Deploy**
6. The URL stays the same - no need to update your website!

## Security Notes

- The Web app URL is public but only accepts POST requests
- Each submission is logged with a timestamp
- Email notifications are sent automatically
- All data is stored in your private Google Sheet

## Support

If you encounter issues:
1. Check the Apps Script execution logs
2. Verify all column headers match exactly
3. Ensure the form field names in HTML match the script's parameter names

