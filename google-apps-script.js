// Google Apps Script for NCAA Block Form Submissions
// This script will:
// 1. Save form data to Google Sheets
// 2. Send email notifications to specified recipients

function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the form data
    var params = e.parameter;
    
    // Get current timestamp
    var timestamp = new Date();
    
    // Prepare row data in order of your form fields
    var name = (params.firstName || '') + ' ' + (params.lastName || '');
    var rowData = [
      timestamp,
      name.trim(),
      params.email || '',
      params.phone || '',
      params.claimId || '',
      params.claimSize || '',
      params.ncaaEligibilityId || '',
      params.sport || '',
      params.school || ''
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Send email notifications
    sendEmailNotifications(params, timestamp);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Form submitted successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotifications(params, timestamp) {
  // Email recipients
  var recipients = [
    'malfieri05@gmail.com',
    'isaachodgins@outlook.com'
  ];
  
  // Combine first and last name
  var fullName = (params.firstName || '') + ' ' + (params.lastName || '');
  
  // Email subject
  var subject = 'New Block Application Submission';
  
  // Email body (HTML format)
  var htmlBody = `
    <h2>New Block Application Received</h2>
    <p><strong>Submission Time:</strong> ${timestamp}</p>
    
    <h3>Personal Information</h3>
    <ul>
      <li><strong>Name:</strong> ${fullName.trim() || 'N/A'}</li>
      <li><strong>Email:</strong> ${params.email || 'N/A'}</li>
      <li><strong>Phone:</strong> ${params.phone || 'N/A'}</li>
    </ul>
    
    <h3>Claim Information</h3>
    <ul>
      <li><strong>Claim ID:</strong> ${params.claimId || 'N/A'}</li>
      <li><strong>Claim Size:</strong> ${params.claimSize || 'N/A'}</li>
      <li><strong>NCAA Eligibility Center ID:</strong> ${params.ncaaEligibilityId || 'N/A'}</li>
    </ul>
    
    <h3>Athletic Background</h3>
    <ul>
      <li><strong>Sport:</strong> ${params.sport || 'N/A'}</li>
      <li><strong>School/Institution:</strong> ${params.school || 'N/A'}</li>
    </ul>
    
    <hr>
    <p style="color: #666; font-size: 12px;">This email was automatically generated from The Block application form.</p>
  `;
  
  // Plain text version
  var plainBody = `
New Block Application Received

Submission Time: ${timestamp}

Personal Information:
- Name: ${fullName.trim() || 'N/A'}
- Email: ${params.email || 'N/A'}
- Phone: ${params.phone || 'N/A'}

Claim Information:
- Claim ID: ${params.claimId || 'N/A'}
- Claim Size: ${params.claimSize || 'N/A'}
- NCAA Eligibility Center ID: ${params.ncaaEligibilityId || 'N/A'}

Athletic Background:
- Sport: ${params.sport || 'N/A'}
- School/Institution: ${params.school || 'N/A'}

---
This email was automatically generated from The Block application form.
  `;
  
  // Send email to each recipient
  recipients.forEach(function(recipient) {
    MailApp.sendEmail({
      to: recipient,
      subject: subject,
      body: plainBody,
      htmlBody: htmlBody
    });
  });
}

// Test function (optional) - you can run this to test the script
function testScript() {
  var testData = {
    parameter: {
      firstName: 'Test',
      lastName: 'Player',
      email: 'test@example.com',
      phone: '(555) 123-4567',
      claimId: 'TEST123',
      claimSize: '$50,000',
      ncaaEligibilityId: 'NCAA456',
      sport: 'Basketball',
      school: 'Test University'
    }
  };
  
  var result = doPost(testData);
  Logger.log(result.getContent());
}

