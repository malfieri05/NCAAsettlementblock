# The Block - NCAA Settlement Aggregation Platform

## Form Submission Email Notifications

Form submissions are automatically sent via email to:
- **malfieri05@gmail.com**

### Important: First-Time Setup

**FormSubmit Activation Steps:**

1. **Submit a test form** on your live site (ncaaplayerblock.com)
2. **Check malfieri05@gmail.com** for an activation email from FormSubmit
3. **Click the activation link** in that email (link is valid for 30 days)
4. Once activated, all subsequent form submissions will be automatically emailed

**If activation link shows "Not a valid link" error:**
- The activation link has expired (links expire after 30 days or if already used)
- Simply submit another test form to receive a new activation email
- Each new email address requires its own activation

After activation, all form submissions will be automatically sent to malfieri05@gmail.com with no further action required.

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
2. Check malfieri05@gmail.com inbox for verification email (first time only)
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

