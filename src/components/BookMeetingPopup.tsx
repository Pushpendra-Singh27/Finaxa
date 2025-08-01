import React, { useState } from 'react';
import dubai2 from '@/assets/dubai2.jpg';
import { FORM_CONFIG } from '@/config/form';
import { googleScriptProxy } from '@/utils/googleScriptProxy';
import { testGoogleScript } from '@/utils/testGoogleScript';

interface BookMeetingPopupProps {
  open: boolean;
  onClose: () => void;
}

const howDidYouHearOptions = [
  'Google',
  'Friend',
  'Advertisement',
];

const investmentOptions = [
  '200,000 AED',
  '400,000 AED',
  '800,000 AED',
  '1,000,000 AED',
  '1,000,000 AED+',
];

export const BookMeetingPopup: React.FC<BookMeetingPopupProps> = ({ open, onClose }) => {
  console.log('BookMeetingPopup received props - open:', open);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    hearAbout: '',
    investment: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const scriptUrl = FORM_CONFIG.GOOGLE_SCRIPT_URL;
      console.log('Using script URL:', scriptUrl);
      console.log('Environment variable:', import.meta.env.VITE_GOOGLE_SCRIPT_URL);
      
      // Check if the URL is still the placeholder
      if (scriptUrl === 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec' || scriptUrl.includes('YOUR_SCRIPT_ID')) {
        setSubmitStatus('error');
        setStatusMessage('Error: Google Apps Script URL not configured. Please set up the environment variable VITE_GOOGLE_SCRIPT_URL.');
        return;
      }
      
      const result = await googleScriptProxy.submitForm(scriptUrl, form);
      
      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage('Thank you! Your meeting request has been submitted successfully.');
        // Reset form after successful submission
        setTimeout(() => {
          setForm({
            name: '',
            email: '',
            phone: '',
            hearAbout: '',
            investment: '',
            message: '',
          });
          setSubmitStatus('idle');
          setStatusMessage('');
          onClose();
        }, 3000);
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      // Provide more specific error messages
      if (error.message.includes('Failed to fetch')) {
        setStatusMessage('Network error. Please check your connection and try again. (Check console for details)');
        console.error('Network error details:', error);
        console.error('Error name:', error.name);
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
      } else if (error.message.includes('Invalid JSON')) {
        setStatusMessage('Server error. Please try again later or contact support.');
      } else if (error.message.includes('HTTP error')) {
        setStatusMessage('Server error. Please try again later.');
      } else {
        setStatusMessage('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!open) {
    console.log('Popup is not open, returning null');
    return null;
  }
  
  console.log('Rendering popup component...');

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center sm:items-end sm:justify-end p-4 sm:p-6 lg:p-8 bg-black/40 popup-overlay-animate">
      <div className="popup-content popup-animate relative w-full max-w-[95vw] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-4 sm:p-6 md:p-8 flex flex-col gap-2 rounded-2xl overflow-hidden border border-gray-200 shadow-2xl">
        {/* Background image with blur and overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src={dubai2}
            alt="Dubai Skyline"
            className="w-full h-full object-cover opacity-100"
            style={{ filter: 'blur(1px)' }}
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        {/* Popup content */}
        <div className="relative z-10">
          <button
            className="absolute top-3 right-3 text-white hover:text-blue-300 text-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-center text-white tracking-tight">Book a Meeting</h2>
          
          {/* Status Message */}
          {submitStatus !== 'idle' && (
            <div className={`mb-4 p-3 rounded-lg text-sm ${
              submitStatus === 'success' 
                ? 'bg-green-500/90 text-white' 
                : 'bg-red-500/90 text-white'
            }`}>
              {statusMessage}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-white mb-1">Name</label>
              <input
                type="text"
                className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/90 text-gray-900 transition-all"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
                autoComplete="name"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-white mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/90 text-gray-900 transition-all"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                required
                autoComplete="email"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-white mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/90 text-gray-900 transition-all"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                required
                autoComplete="tel"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-white mb-1">How did you hear about us?</label>
              <select
                className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/90 text-gray-900 transition-all"
                value={form.hearAbout}
                onChange={e => setForm({ ...form, hearAbout: e.target.value })}
                required
                disabled={isSubmitting}
              >
                <option value="" disabled>Select an option</option>
                {howDidYouHearOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-white mb-1">Initial Investment</label>
              <select
                className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/90 text-gray-900 transition-all"
                value={form.investment}
                onChange={e => setForm({ ...form, investment: e.target.value })}
                required
                disabled={isSubmitting}
              >
                <option value="" disabled>Select an amount</option>
                {investmentOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-white mb-1">Message</label>
              <textarea
                className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/90 text-gray-900 transition-all"
                rows={2}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                disabled={isSubmitting}
              />
            </div>
            

            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-sm sm:text-base md:text-lg mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Book Meeting'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}; 