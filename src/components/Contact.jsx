import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Copy, 
  Check, 
  AlertCircle, 
  MessageSquare,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Github, Linkedin } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const DISCUSSION_OPTIONS = [
  "Internship Opportunity",
  "Full-Time Opportunity",
  "Project Collaboration",
  "Technical Discussion",
  "Other"
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discussionType: 'Internship Opportunity',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    error: null
  });

  const [copiedEmail, setCopiedEmail] = useState(null);

  const handleCopyEmail = (emailStr, key) => {
    navigator.clipboard.writeText(emailStr);
    setCopiedEmail(key);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({
        submitted: true,
        success: false,
        error: 'Please fill in your name, email, and message.'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        success: false,
        error: 'Please provide a valid email address.'
      });
      return;
    }

    // Trigger celebration micro-confetti
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#8b5cf6', '#06b6d4', '#10b981', '#38bdf8']
      });
    } catch {
      // ignore
    }

    setFormStatus({
      submitted: true,
      success: true,
      error: null
    });

    // Generate mailto link with structured content
    const subject = encodeURIComponent(`[${formData.discussionType}] Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Hemalatha,\n\n${formData.message}\n\n—\nName: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.discussionType}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?cc=${personalInfo.altEmail}&subject=${subject}&body=${body}`;

    // Prompt mail client directly
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build <span className="gradient-text">Something Together</span>
          </h2>
          <p className="section-subtitle">
            Have an opportunity, a project idea, or a question? I'd love to hear from you. Send me a message and let's connect.
          </p>
        </div>

        {/* Contact Container */}
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          {/* Main Card: Contact Form */}
          <div
            className="glass-panel"
            style={{
              padding: '2.5rem',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              marginBottom: '3rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.75rem' }}>
              <MessageSquare size={22} color="var(--accent-cyan-light)" />
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff' }}>
                Send a Message
              </h3>
            </div>

            {formStatus.submitted && formStatus.error && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.85rem 1rem',
                  borderRadius: '8px',
                  background: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  color: '#fca5a5',
                  fontSize: '0.88rem',
                  marginBottom: '1.5rem'
                }}
              >
                <AlertCircle size={16} />
                <span>{formStatus.error}</span>
              </div>
            )}

            {formStatus.submitted && formStatus.success ? (
              <div
                style={{
                  padding: '2rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem',
                    color: '#34d399'
                  }}
                >
                  <CheckCircle2 size={30} />
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                  Thank you, {formData.name}!
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 1.5rem' }}>
                  Your email client has been opened with your pre-composed message to <strong>{personalInfo.email}</strong>. If your email application did not launch automatically, click the button below:
                </p>

                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a
                    href={`mailto:${personalInfo.email}?cc=${personalInfo.altEmail}&subject=${encodeURIComponent(`[${formData.discussionType}] Inquiry from ${formData.name}`)}&body=${encodeURIComponent(`Hello Hemalatha,\n\n${formData.message}\n\n—\nName: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.discussionType}`)}`}
                    className="btn btn-primary btn-sm"
                  >
                    <Send size={15} />
                    <span>Open in Email Application</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setFormStatus({ submitted: false, success: false, error: null });
                      setFormData({ name: '', email: '', discussionType: 'Internship Opportunity', message: '' });
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.25rem'
                  }}
                >
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="name"
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--text-main)',
                        marginBottom: '0.5rem'
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      required
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        fontSize: '0.92rem',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent-purple)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="email"
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--text-main)',
                        marginBottom: '0.5rem'
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      required
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        fontSize: '0.92rem',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent-purple)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                    />
                  </div>
                </div>

                {/* What would you like to discuss? (dropdown) */}
                <div>
                  <label
                    htmlFor="discussionType"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                      marginBottom: '0.5rem'
                    }}
                  >
                    What would you like to discuss? *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <select
                      id="discussionType"
                      name="discussionType"
                      value={formData.discussionType}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.85rem 2.5rem 0.85rem 1rem',
                        borderRadius: '10px',
                        background: 'rgba(15, 23, 42, 0.9)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        fontSize: '0.92rem',
                        outline: 'none',
                        cursor: 'pointer',
                        appearance: 'none',
                        WebkitAppearance: 'none'
                      }}
                    >
                      {DISCUSSION_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} style={{ background: '#0f172a', color: '#ffffff' }}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={18}
                      color="var(--text-secondary)"
                      style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                      marginBottom: '0.5rem'
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Hemalatha, I came across your portfolio and wanted to discuss..."
                    required
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      fontSize: '0.92rem',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-purple)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                  />
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                    Note: Submitting this form prepares and launches your default email client to send the note directly to Hemalatha.
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="submit-contact-form-btn"
                  style={{ alignSelf: 'flex-start', padding: '0.85rem 2rem' }}
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Direct Contact Options Below Form */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {/* Alternate Email */}
            <div
              className="glass-panel"
              style={{
                padding: '1.5rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(6, 182, 212, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan-light)',
                  flexShrink: 0
                }}
              >
                <Mail size={20} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                  ALTERNATE EMAIL
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.2rem' }}>
                  <a
                    href={`mailto:${personalInfo.altEmail}`}
                    style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.86rem', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
                  >
                    {personalInfo.altEmail}
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopyEmail(personalInfo.altEmail, 'alt')}
                    style={{
                      fontSize: '0.72rem',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '6px',
                      background: copiedEmail === 'alt' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                      color: copiedEmail === 'alt' ? '#6ee7b7' : 'var(--text-secondary)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      cursor: 'pointer'
                    }}
                    title="Copy alternate email address"
                  >
                    {copiedEmail === 'alt' ? <Check size={12} /> : <Copy size={12} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Location & Social Profiles */}
            <div
              className="glass-panel"
              style={{
                padding: '1.5rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(245, 158, 11, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fbbf24',
                    flexShrink: 0
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                    LOCATION
                  </div>
                  <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.88rem' }}>
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              {/* Direct links to LinkedIn & GitHub */}
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  title="Visit LinkedIn"
                  style={{ padding: '0.5rem 0.85rem' }}
                >
                  <Linkedin size={15} color="#38bdf8" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  title="Visit GitHub"
                  style={{ padding: '0.5rem 0.85rem' }}
                >
                  <Github size={15} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
