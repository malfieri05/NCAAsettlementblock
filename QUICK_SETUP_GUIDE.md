# Quick Setup Guide - Google Sheets Integration

## What You Need to Do:

### 1. Set Up Google Sheet Headers (1 minute)
Open your sheet and add these headers in Row 1:
```
Timestamp | Name | Email | Phone | Claim ID | Claim Size | NCAA Eligibility Center ID | Sport | School/Institution
```

### 2. Add Apps Script (2 minutes)
1. In Google Sheets: **Extensions** → **Apps Script**
2. Copy ALL code from `google-apps-script.js` file
3. Paste into Apps Script editor
4. Click Save 💾

### 3. Deploy as Web App (2 minutes)
1. Click **Deploy** → **New deployment**
2. Click gear icon ⚙️ → Choose **Web app**
3. Set "Who has access" to **Anyone**
4. Click **Deploy**
5. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/XXXXX/exec`)

### 4. Update Your Website (30 seconds)
Replace the form action URL with your new Web App URL:

**SEND ME THE WEB APP URL** and I'll update the code for you!

## What This Does:

✅ Every form submission automatically adds a row to your Google Sheet  
✅ Emails are sent to both malfieri05@gmail.com and isaachodgins@outlook.com  
✅ All data is timestamped  
✅ Professional email format with all form details  

## Current Form Action URL:
```
https://formsubmit.co/ajax/malfieri05@gmail.com
```

## Will Be Changed To:
```
https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

---

**Once you complete steps 1-3, give me the Web App URL and I'll update the form!**

