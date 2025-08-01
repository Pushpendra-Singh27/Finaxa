// Form configuration
export const FORM_CONFIG = {
  // Google Apps Script web app URL for Celestia Capitals form handling
  GOOGLE_SCRIPT_URL: import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbz4KImozulHcvRTCYRrq2_IJXyBErfduB7-qFRkVq07-U5ggQ6-vNY5AxQnm9ISio-5xQ/exec',
  
  // Form field validation
  VALIDATION: {
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE_REGEX: /^[\+]?[1-9][\d]{0,15}$/,
  }
}; 