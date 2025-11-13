# The Block - NCAA Settlement Aggregation Platform

## Form Submission Email Notifications

Form submissions are automatically sent via email to:
- **Primary:** isaachodgins@outlook.com
- **CC:** malfieri05@gmail.com

### Important: First-Time Setup

**The first time someone submits the form**, FormSubmit will send a verification email to `isaachodgins@outlook.com`. 

**You MUST click the verification link in that email to activate the form.**

After verification, all subsequent form submissions will be automatically emailed to both addresses with no further action required.

### What Gets Emailed

Each submission includes:
- First Name & Last Name
- Email Address
- Phone Number
- Claim ID
- NCAA Eligibility Center ID#
- Claim Size
- School/University
- Sport
- Submission timestamp

### Email Format

Emails arrive with:
- **Subject:** "New Block Application Submission"
- **Format:** Clean table layout
- **From:** FormSubmit (noreply@formsubmit.co)

### Testing the Form

1. Submit a test application through the website
2. Check isaachodgins@outlook.com inbox for verification email (first time only)
3. Click verification link
4. Submit another test - both emails should receive it
5. Verify all form fields are captured correctly

### Technical Details

- Service: FormSubmit.co (free, no account needed)
- Method: AJAX submission
- Response: JSON
- Spam Protection: Built-in
- Rate Limiting: Reasonable limits for free tier

### Troubleshooting

**Not receiving emails?**
1. Check spam/junk folders
2. Verify the initial confirmation email was clicked
3. Wait a few minutes - there can be slight delays
4. Test with a different email if issues persist

**Need to change email addresses?**
Edit the form action in `index.html` line 241 and the `_cc` hidden field on line 248.

## Local Development

To run locally:
```bash
# Navigate to the directory
cd /Users/michaelalfieri/NCAA-BLOCK

# Start local server
python3 -m http.server 8000

# Open in browser
# http://localhost:8000
```

## Deployment

The site is deployed via GitHub Pages or can be deployed to:
- Vercel
- Netlify  
- GitHub Pages
- Any static hosting service

Form submissions will work on any domain once the initial email verification is complete.

