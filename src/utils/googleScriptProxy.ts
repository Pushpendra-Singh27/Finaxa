// Google Apps Script Proxy Utility
// This helps handle CORS and network issues

export const googleScriptProxy = {
  // Test the connection
  async testConnection(url: string): Promise<{ success: boolean; message: string; data?: any }> {
    try {
      console.log('Testing connection to:', url);
      
      // Try direct request first
      let response;
      try {
        response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'cors',
        });
      } catch (corsError) {
        console.log('CORS error, trying with proxy...');
        // If CORS fails, try with a proxy
        const proxyUrl = `https://cors-anywhere.herokuapp.com/${url}`;
        response = await fetch(proxyUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const text = await response.text();
      console.log('Response text:', text);

      const data = JSON.parse(text);
      return { success: true, message: 'Connection successful', data };
    } catch (error) {
      console.error('Test connection error:', error);
      return { 
        success: false, 
        message: `Connection failed: ${error.message}` 
      };
    }
  },

  // Submit form data
  async submitForm(url: string, formData: any): Promise<{ success: boolean; message: string; data?: any }> {
    try {
      console.log('Submitting form to:', url);
      console.log('Form data:', formData);
      
      // Try direct request first
      let response;
      try {
        response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
          mode: 'cors',
        });
      } catch (corsError) {
        console.log('CORS error, trying with proxy...');
        // If CORS fails, try with a proxy
        const proxyUrl = `https://cors-anywhere.herokuapp.com/${url}`;
        response = await fetch(proxyUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      }

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const text = await response.text();
      console.log('Response text:', text);

      const data = JSON.parse(text);
      return { success: true, message: 'Form submitted successfully', data };
    } catch (error) {
      console.error('Form submission error:', error);
      return { 
        success: false, 
        message: `Submission failed: ${error.message}` 
      };
    }
  }
}; 