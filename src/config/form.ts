// Form configuration
export const FORM_CONFIG = {
  // Replace this with your deployed Google Apps Script web app URL
  GOOGLE_SCRIPT_URL: import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbzpegvzdi2RzDN3ohgJ1PNxbaosqHSJBBjktkQ3ahgy/dev',
  
  // Form field validation
  VALIDATION: {
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE_REGEX: /^[\+]?[1-9][\d]{0,15}$/,
  }
}; 