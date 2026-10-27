import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  ExternalLink,
  MessageSquare,
  Loader2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botcheck: false
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // { type: 'success' | 'error', text: string }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full Name is required.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(null);

    // If botcheck honeypot field is filled, silently stop
    if (formData.botcheck) {
      return;
    }

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const rawKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    let accessKey = typeof rawKey === 'string' ? rawKey.replace(/^['"]|['"]$/g, '').trim() : '';
    if (accessKey.includes('=')) {
      accessKey = accessKey.split('=').pop().replace(/^['"]|['"]$/g, '').trim();
    }

    if (!accessKey || accessKey === 'your_web3forms_access_key_here') {
      setStatusMessage({
        type: 'error',
        text: 'Web3Forms access key is missing. Check your .env file.'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formElement = e.currentTarget;
      const formPayload = new FormData(formElement);
      formPayload.set('access_key', accessKey);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload,
        headers: {
          Accept: 'application/json'
        }
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to send message. Please try again.');
      }

      setStatusMessage({
        type: 'success',
        text: 'Message sent successfully!'
      });

      // Clear the form only after the API confirms successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        botcheck: false
      });
    } catch (error) {
      setStatusMessage({
        type: 'error',
        text: error.message || 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 relative border-t border-white/[0.06] bg-[#07090e]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-sky-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something Great Together
          </h2>
          <p className="mt-2.5 sm:mt-3 text-sm sm:text-base lg:text-lg text-slate-400 max-w-2xl">
            Have a project idea, a web development opportunity, or a collaboration in mind? I'd love to hear from you.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Contact Details & Social Profiles */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            {/* Direct Cards */}
            <div className="space-y-3.5 sm:space-y-4">
              
              {/* Email Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#090d16] border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 shadow-lg shadow-black/20">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-sky-500/15 border border-sky-500/25 flex items-center justify-center text-sky-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] sm:text-xs text-slate-400 font-mono">Email Address</div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm lg:text-base font-semibold text-white hover:text-sky-300 transition-colors break-all"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-900 border border-white/[0.06] hover:bg-slate-800 text-slate-400 hover:text-white transition-colors text-xs shrink-0"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#090d16] border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 shadow-lg shadow-black/20">
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] sm:text-xs text-slate-400 font-mono">Phone / WhatsApp</div>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm lg:text-base font-semibold text-white hover:text-indigo-300 transition-colors truncate block"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#090d16] border border-white/[0.08] shadow-lg shadow-black/20">
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center text-purple-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] sm:text-xs text-slate-400 font-mono">Current Location</div>
                    <div className="text-xs sm:text-sm lg:text-base font-semibold text-white truncate">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Social Buttons */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#090d16] border border-white/[0.08]">
              <div className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 sm:mb-4">
                Verified Profiles:
              </div>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 rounded-xl bg-slate-900 border border-white/10 hover:border-sky-500/40 text-slate-200 hover:text-sky-300 font-medium text-xs sm:text-sm transition-all truncate"
                >
                  <LinkedinIcon className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="truncate">LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 shrink-0 hidden sm:inline" />
                </a>

                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 rounded-xl bg-slate-900 border border-white/10 hover:border-purple-500/40 text-slate-200 hover:text-purple-300 font-medium text-xs sm:text-sm transition-all truncate"
                >
                  <GithubIcon className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="truncate">GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 shrink-0 hidden sm:inline" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Web3Forms Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-[#090d16] border border-white/[0.08] shadow-2xl">
              
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-sky-400" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in your details below and I'll get back to you as soon as possible.
              </p>

              {/* Status Alerts */}
              {statusMessage?.type === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-2.5 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">{statusMessage.text}</div>
                    Thank you for reaching out. I will review your message and respond shortly.
                  </div>
                </div>
              )}

              {statusMessage?.type === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs sm:text-sm flex items-start gap-2.5 animate-fadeIn">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">{statusMessage.text}</div>
                    You can also reach out to me directly at{' '}
                    <a href={`mailto:${personalInfo.email}`} className="underline text-sky-300 hover:text-white">
                      {personalInfo.email}
                    </a>.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-3.5 sm:space-y-4">
                {/* Honeypot Botcheck Field (Hidden from real users) */}
                <input
                  type="checkbox"
                  name="botcheck"
                  checked={formData.botcheck}
                  onChange={handleChange}
                  className="hidden"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {/* Full Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-[11px] sm:text-xs font-mono text-slate-300 mb-1 sm:mb-1.5">
                      Full Name <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="e.g. Kalai vanan"
                      className={`w-full min-w-0 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-900 border text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all ${
                        errors.name ? 'border-red-500/60 bg-red-950/10' : 'border-white/10 hover:border-white/20'
                      } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" /> <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address Field */}
                  <div>
                    <label htmlFor="email" className="block text-[11px] sm:text-xs font-mono text-slate-300 mb-1 sm:mb-1.5">
                      Email Address <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="kalai@company.com"
                      className={`w-full min-w-0 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-900 border text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all ${
                        errors.email ? 'border-red-500/60 bg-red-950/10' : 'border-white/10 hover:border-white/20'
                      } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" /> <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-[11px] sm:text-xs font-mono text-slate-300 mb-1 sm:mb-1.5">
                    Subject <span className="text-sky-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Project Inquiry / Job Opportunity / Web Development"
                    className={`w-full min-w-0 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-900 border text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all ${
                      errors.subject ? 'border-red-500/60 bg-red-950/10' : 'border-white/10 hover:border-white/20'
                    } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-[11px] sm:text-xs font-mono text-slate-300 mb-1 sm:mb-1.5">
                    Message <span className="text-sky-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Tell me about your project, timeline, or open role..."
                    className={`w-full min-w-0 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-900 border text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all resize-y ${
                      errors.message ? 'border-red-500/60 bg-red-950/10' : 'border-white/10 hover:border-white/20'
                    } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:via-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all duration-200 ${
                    isSubmitting ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
