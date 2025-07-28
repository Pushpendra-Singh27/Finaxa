// Utility function to test Google Apps Script connection
export const testGoogleScript = async (scriptUrl: string) => {
  try {
    console.log('🔍 Testing Google Apps Script URL:', scriptUrl);
    console.log('📝 URL type check:', typeof scriptUrl);
    console.log('🔗 URL starts with https:', scriptUrl.startsWith('https'));

    // Test GET request first
    console.log('📡 Testing GET request...');
    const getResponse = await fetch(scriptUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('✅ GET Response status:', getResponse.status);
    console.log('📋 GET Response headers:', Object.fromEntries(getResponse.headers.entries()));
    
    const getText = await getResponse.text();
    console.log('📄 GET Response text:', getText);

    // Test POST request with sample data
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '1234567890',
      hearAbout: 'Google',
      investment: '200,000 AED',
      message: 'This is a test submission'
    };

    console.log('📤 Testing POST with data:', testData);

    const postResponse = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    console.log('✅ POST Response status:', postResponse.status);
    console.log('📋 POST Response headers:', Object.fromEntries(postResponse.headers.entries()));
    
    const postText = await postResponse.text();
    console.log('📄 POST Response text:', postText);

    try {
      const result = JSON.parse(postText);
      console.log('✅ Parsed JSON result:', result);
      return { success: true, result };
    } catch (parseError) {
      console.error('❌ Failed to parse JSON:', parseError);
      return { success: false, error: 'Invalid JSON response', text: postText };
    }

  } catch (error) {
    console.error('❌ Test failed:', error);
    console.error('🔍 Error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    });
    
    // Provide more specific error information
    if (error.message.includes('Failed to fetch')) {
      return { 
        success: false, 
        error: 'Network error - Check if the Google Apps Script is properly deployed as a web app',
        details: error.message 
      };
    } else if (error.message.includes('CORS')) {
      return { 
        success: false, 
        error: 'CORS error - The script needs to be deployed with proper CORS headers',
        details: error.message 
      };
    } else {
      return { 
        success: false, 
        error: error.message,
        details: 'Unknown error occurred during testing'
      };
    }
  }
}; 