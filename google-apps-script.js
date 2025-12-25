/**
 * Google Apps Script for receiving hackathon registration data
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Delete any code in the editor and paste this entire script
 * 4. Click "Deploy" > "New deployment"
 * 5. Select type: "Web app"
 * 6. Execute as: "Me"
 * 7. Who has access: "Anyone"
 * 8. Click "Deploy"
 * 9. Copy the web app URL and use it in your Vue component
 * 
 * The sheet will automatically create headers on first run
 */

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Check if headers exist, if not create them
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Timestamp',
        'Team Name',
        'Team Leader',
        'Member 2',
        'Member 3',
        'Member 4',
        'Member 5',
        'Email',
        'Phone',
        'Challenge',
        'Notes'
      ];
      sheet.appendRow(headers);
      
      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#39B54A');
      headerRange.setFontColor('#FFFFFF');
    }
    
    // Prepare the row data
    const timestamp = new Date();
    const rowData = [
      timestamp,
      data.teamName || '',
      data.leaderName || '',
      data.member2 || '',
      data.member3 || '',
      data.member4 || '',
      data.member5 || '',
      data.email || '',
      data.phone || '',
      data.challenge || '',
      data.notes || ''
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, rowData.length);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Registration submitted successfully',
        timestamp: timestamp.toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify the script works
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        teamName: 'Test Team',
        leaderName: 'John Doe',
        member2: 'Jane Smith',
        member3: 'Bob Johnson',
        member4: '',
        member5: '',
        email: 'john@example.com',
        phone: '+212 123 456 789',
        challenge: 'Smart Energy Management',
        notes: 'This is a test registration'
      })
    }
  };
  
  Logger.log('Starting test...');
  const result = doPost(testData);
  Logger.log('Result: ' + result.getContent());
  
  // Check the sheet
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  Logger.log('Sheet name: ' + sheet.getName());
  Logger.log('Last row: ' + sheet.getLastRow());
}
