import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  Printer 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, educationList, experienceList, projects, certifications } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#8b5cf6', '#06b6d4', '#10b981']
      });
    } catch {
      // ignore
    }

    const link = document.createElement('a');
    link.href = personalInfo.resumePath;
    link.download = `${personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '860px',
          padding: '2.5rem',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Top Control Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '1.25rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            marginBottom: '1.75rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="badge badge-purple">Professional Resume</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              {personalInfo.name}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <button
              type="button"
              onClick={handlePrint}
              className="btn btn-secondary btn-sm"
              title="Print Resume"
            >
              <Printer size={14} />
              <span>Print</span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="btn btn-primary btn-sm"
              id="modal-download-resume-btn"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </button>

            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              title="Open raw PDF file in new browser tab"
              id="modal-open-raw-pdf-btn"
            >
              <ExternalLink size={14} />
            </a>

            <button
              type="button"
              onClick={onClose}
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                marginLeft: '0.5rem',
                cursor: 'pointer'
              }}
              aria-label="Close resume modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div
          style={{
            overflowY: 'auto',
            padding: '1.75rem',
            background: 'rgba(7, 9, 14, 0.85)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(255, 255, 255, 0.06)'
          }}
        >
          {/* Resume Header */}
          <div style={{ textAlign: 'center', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <h1 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
              {personalInfo.name}
            </h1>
            <div style={{ fontSize: '0.95rem', color: 'var(--accent-cyan-light)', fontWeight: 600, marginBottom: '0.6rem' }}>
              {personalInfo.mainHeadline}
            </div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1.25rem',
                fontSize: '0.84rem',
                color: 'var(--text-secondary)'
              }}
            >
              <span>{personalInfo.location}</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} style={{ color: '#ffffff' }}>
                {personalInfo.email}
              </a>
              <span>•</span>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-purple-light)' }}>
                LinkedIn
              </a>
              <span>•</span>
              <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-purple-light)' }}>
                GitHub
              </a>
              <span>•</span>
              <a href={personalInfo.socials.leetcode} target="_blank" rel="noopener noreferrer" style={{ color: '#fbbf24' }}>
                LeetCode
              </a>
            </div>
          </div>

          {/* Section: Education */}
          <div style={{ marginTop: '1.5rem' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-cyan-light)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', borderBottom: '1px solid rgba(6, 182, 212, 0.2)', paddingBottom: '0.35rem' }}>
              Education
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {educationList.map((edu) => (
                <div key={edu.degree}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <strong style={{ color: '#ffffff', fontSize: '0.92rem' }}>{edu.degree}</strong>
                    <span style={{ color: 'var(--accent-purple-light)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>{edu.period}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                    <span>{edu.institution}, {edu.location}</span>
                    <span style={{ color: '#34d399', fontWeight: 600 }}>{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Certifications & Honors */}
          <div style={{ marginTop: '1.5rem' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-cyan-light)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', borderBottom: '1px solid rgba(6, 182, 212, 0.2)', paddingBottom: '0.35rem' }}>
              Certifications & Honors
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem' }}>
              {certifications.map((cert) => (
                <div key={cert.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                  <strong style={{ color: '#ffffff' }}>{cert.name}</strong>
                  <span style={{ color: 'var(--text-muted)' }}>{cert.issuer} ({cert.issueDate})</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                <strong style={{ color: '#ffffff' }}>Second Prize — SYNC AI CODESTORM 2025</strong>
                <span style={{ color: '#fbbf24' }}>Comrades (2025)</span>
              </div>
            </div>
          </div>

          {/* Section: Projects */}
          <div style={{ marginTop: '1.5rem' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-cyan-light)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', borderBottom: '1px solid rgba(6, 182, 212, 0.2)', paddingBottom: '0.35rem' }}>
              Featured Projects
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {projects.map((proj) => (
                <div key={proj.id} style={{ fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                    <strong style={{ color: '#ffffff' }}>{proj.title}</strong>
                    <span style={{ color: 'var(--accent-cyan-light)', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
                      {proj.technologies.slice(0, 4).join(', ')}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '0.2rem', lineHeight: 1.45 }}>
                    {proj.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Internships */}
          <div style={{ marginTop: '1.5rem' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-cyan-light)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', borderBottom: '1px solid rgba(6, 182, 212, 0.2)', paddingBottom: '0.35rem' }}>
              Internship Experience
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {experienceList.map((exp, idx) => (
                <div key={exp.title || exp.role || idx} style={{ fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                    <strong style={{ color: '#ffffff' }}>{exp.title || exp.role} — {exp.company}</strong>
                    <span style={{ color: 'var(--accent-purple-light)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>{exp.period}</span>
                  </div>
                  <div style={{ color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    {exp.description || (exp.responsibilities && exp.responsibilities[0])}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
