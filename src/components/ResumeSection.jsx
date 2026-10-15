import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Eye, 
  GraduationCap, 
  Award, 
  Code2, 
  Info,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function ResumeSection({ onOpenResumeModal }) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.75 },
        colors: ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b']
      });
    } catch {
      // graceful fallback
    }

    // Create an anchor and trigger download
    const link = document.createElement('a');
    link.href = personalInfo.resumePath;
    link.download = `${personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  return (
    <section id="resume" className="section-wrapper bg-grid-pattern">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FileText size={14} />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Resume</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of academic credentials, enterprise software engineering skills, and production-grade AI projects.
          </p>
        </div>

        {/* Resume Preview & Actions Box */}
        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch'
          }}
        >
          {/* Interactive Resume Summary Preview */}
          <div
            className="glass-panel"
            style={{
              padding: '2.5rem',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid rgba(139, 92, 246, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span className="badge badge-purple">Standard 1-Page Format</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--accent-cyan-light)', fontFamily: 'var(--font-mono)' }}>
                  PDF Format (Recruiter Ready)
                </span>
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem' }}>
                {personalInfo.name}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent-cyan-light)', fontWeight: 600, marginBottom: '1.25rem' }}>
                {personalInfo.headline}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <GraduationCap size={18} color="var(--accent-purple-light)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#ffffff' }}>B.Tech CSE (2023–2027)</strong>: 8.99 CGPA @ KKR & KSR Institute of Technology and Sciences.
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <Award size={18} color="#f59e0b" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#ffffff' }}>AWS Certified Cloud Practitioner</strong>: Score 881, CLF-C02 credential.
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <Code2 size={18} color="var(--accent-cyan-light)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#ffffff' }}>Full Stack & AI Projects</strong>: AI Voice Admission Agent (RAG), Smart Hospital Management (Java & SQL), AWS Cost Optimizer.
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <button
                type="button"
                onClick={handleDownload}
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                <Download size={16} />
                <span>{downloadSuccess ? 'Downloaded!' : 'Download Resume'}</span>
              </button>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="btn btn-outline-cyan"
                style={{ flex: 1 }}
              >
                <Eye size={16} />
                <span>View Full Resume</span>
              </button>
            </div>
          </div>

          {/* Recruiter & Easy Update Guide Box */}
          <div
            className="glass-panel"
            style={{
              padding: '2.5rem',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(6, 182, 212, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan-light)'
                  }}
                >
                  <Info size={20} />
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                  Recruiter & Candidate Highlights
                </h4>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                <p>
                  My resume reflects rigorous computer science fundamentals, top-tier academic consistency, and practical software engineering competencies.
                </p>

                <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <div style={{ fontWeight: 600, color: '#ffffff', marginBottom: '0.35rem' }}>
                    📁 How to update this PDF:
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Drop your updated resume as <code style={{ color: 'var(--accent-purple-light)' }}>public/resume.pdf</code>. Both the Download and In-Browser Viewer automatically update without code edits.
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#34d399', fontSize: '0.85rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} />
                  <span>Immediate Availability for Internship & Full-Time Roles</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%' }}
              >
                <span>Open in New Browser Tab</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
