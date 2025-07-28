import React, { useState } from 'react';
import dubai2 from '@/assets/dubai2.jpg';
import { FORM_CONFIG } from '@/config/form';

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
      
      // Check if the URL is still the placeholder
      if (scriptUrl === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL') {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock successful response
        setSubmitStatus('success');
        setStatusMessage('Thank you! Your meeting request has been submitted successfully. (Test Mode)');
        
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
        
        console.log('Form submitted (Test Mode):', form);
        return;
      }
      
      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

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
      setStatusMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 popup-overlay-animate">
      <div className="popup-content popup-animate relative w-full max-w-md p-8 sm:p-10 flex flex-col gap-2 rounded-2xl overflow-hidden border border-gray-200 shadow-2xl">
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
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-white tracking-tight">Book a Meeting</h2>
          
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
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/90 text-gray-900 transition-all"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
                autoComplete="name"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/90 text-gray-900 transition-all"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                required
                autoComplete="email"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/90 text-gray-900 transition-all"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                required
                autoComplete="tel"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">How did you hear about us?</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/90 text-gray-900 transition-all"
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
              <label className="block text-sm font-medium text-white mb-1">Initial Investment</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/90 text-gray-900 transition-all"
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
              <label className="block text-sm font-medium text-white mb-1">Message</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/90 text-gray-900 transition-all"
                rows={3}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                disabled={isSubmitting}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-lg mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Book Meeting'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}; 