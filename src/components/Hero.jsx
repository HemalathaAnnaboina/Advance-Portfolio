import React, { useState, useEffect } from 'react';
import { 
  Send, 
  FolderGit2, 
  Terminal, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { Github, Linkedin, LeetCode, Instagram } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for rotating role titles
  useEffect(() => {
    const currentRole = personalInfo.roleTitles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.roleTitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--nav-height) + 2rem)',
        paddingBottom: '4rem',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Headline, Typewriter, Intro, CTAs, Profiles */}
          <div>
            {/* Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1.1rem',
                borderRadius: '9999px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                marginBottom: '1.5rem',
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.15)'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--accent-emerald)',
                  boxShadow: '0 0 10px var(--accent-emerald)',
                  display: 'inline-block'
                }}
              />
              <span style={{ fontSize: '0.825rem', fontWeight: 600, color: '#6ee7b7', letterSpacing: '0.02em' }}>
                {personalInfo.status}
              </span>
            </div>

            {/* Name */}
            <h2
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-secondary)',
                fontWeight: 600,
                letterSpacing: '0.05em',
                marginBottom: '0.5rem',
                textTransform: 'uppercase'
              }}
            >
              Hello, I am
            </h2>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '1.25rem'
              }}
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Dynamic Rotating Role Headline */}
            <div
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.85rem)',
                fontWeight: 700,
                color: '#e2e8f0',
                minHeight: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.75rem'
              }}
            >
              <span className="gradient-text-purple">
                {displayedText}
              </span>
              <span
                style={{
                  display: 'inline-block',
                  width: '2px',
                  height: '1.3em',
                  background: 'var(--accent-cyan-light)',
                  animation: 'blink 1s step-end infinite',
                  marginLeft: '2px'
                }}
              />
            </div>

            {/* Supporting Headline */}
            <p
              style={{
                fontSize: '1.15rem',
                fontWeight: 600,
                color: 'var(--accent-cyan-light)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.01em',
                lineHeight: 1.5
              }}
            >
              {personalInfo.supportingHeadline}
            </p>

            {/* Professional Concise Intro */}
            <p
              style={{
                fontSize: '1.02rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                marginBottom: '2rem',
                maxWidth: '580px'
              }}
            >
              {personalInfo.bio}
            </p>

            {/* Action Buttons (Download Resume removed as requested) */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '2.5rem'
              }}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="btn btn-primary"
                id="hero-view-projects-btn"
              >
                <FolderGit2 size={18} />
                <span>View Projects</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-outline-cyan"
                id="hero-contact-me-btn"
              >
                <Send size={18} />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Profiles Section: GitHub, LinkedIn, LeetCode, Instagram (Telugu Java Coders) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Profiles:
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                {/* 1. GitHub */}
                <a
                  href="https://github.com/HemalathaAnnaboina"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                  id="hero-github-link"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#f8fafc',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(139, 92, 246, 0.25)';
                    e.currentTarget.style.borderColor = 'var(--accent-purple)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Github size={20} />
                </a>

                {/* 2. LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/hemalatha-annaboina-015947306/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                  id="hero-linkedin-link"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(6, 182, 212, 0.25)';
                    e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Linkedin size={20} />
                </a>

                {/* 3. LeetCode */}
                <a
                  href="https://leetcode.com/u/HemalathaAnnaboina/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  title="LeetCode Profile"
                  id="hero-leetcode-link"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffa116',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 161, 22, 0.2)';
                    e.currentTarget.style.borderColor = '#ffa116';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <LeetCode size={20} color="#FFA116" />
                </a>

                {/* 4. Instagram: Telugu Java Coders (Developer Community & Learning) */}
                <a
                  href="https://www.instagram.com/telugu_javacoders/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telugu Java Coders — Developer Community & Learning"
                  title="Telugu Java Coders (Developer Community)"
                  id="hero-instagram-community-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    height: '42px',
                    padding: '0 0.95rem 0 0.55rem',
                    borderRadius: '9999px',
                    background: 'rgba(225, 48, 108, 0.08)',
                    border: '1px solid rgba(225, 48, 108, 0.28)',
                    color: '#f43f5e',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(225, 48, 108, 0.18)';
                    e.currentTarget.style.borderColor = 'rgba(225, 48, 108, 0.55)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(225, 48, 108, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(225, 48, 108, 0.28)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      flexShrink: 0
                    }}
                  >
                    <Instagram size={16} color="#ffffff" />
                  </div>
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#fce7f3', whiteSpace: 'nowrap' }}>
                    Telugu Java Coders
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Developer Terminal Showcase */}
          <div style={{ position: 'relative' }}>
            {/* Ambient decorative glowing backdrops */}
            <div
              style={{
                position: 'absolute',
                top: '-15%',
                right: '-10%',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.28) 0%, transparent 70%)',
                filter: 'blur(45px)',
                zIndex: 0,
                pointerEvents: 'none'
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-15%',
                left: '-10%',
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
                filter: 'blur(45px)',
                zIndex: 0,
                pointerEvents: 'none'
              }}
            />

            {/* Terminal Glass Panel */}
            <div
              className="glass-panel"
              style={{
                position: 'relative',
                zIndex: 1,
                border: '1px solid rgba(139, 92, 246, 0.35)',
                background: 'linear-gradient(165deg, rgba(15, 23, 42, 0.92) 0%, rgba(9, 13, 24, 0.96) 100%)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(139, 92, 246, 0.2)'
              }}
            >
              {/* Terminal Window Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.85rem 1.25rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  background: 'rgba(255, 255, 255, 0.02)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  <Terminal size={14} color="var(--accent-cyan)" />
                  <span className="font-mono">hemalatha.profile.ts</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#6ee7b7' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
                  <span>online</span>
                </div>
              </div>

              {/* Terminal Code Body (Hackathon honors removed from Home page as requested) */}
              <div style={{ padding: '1.5rem', fontSize: '0.88rem', lineHeight: '1.75' }} className="font-mono">
                <div>
                  <span style={{ color: '#c084fc' }}>const</span>{' '}
                  <span style={{ color: '#38bdf8' }}>developer</span>: <span style={{ color: '#fbbf24' }}>AI_FullStack_Engineer</span> = &#123;
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#94a3b8' }}>name:</span>{' '}
                  <span style={{ color: '#a7f3d0' }}>"{personalInfo.name}"</span>,
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#94a3b8' }}>role:</span>{' '}
                  <span style={{ color: '#a7f3d0' }}>"AI Engineer & Full Stack Developer"</span>,
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#94a3b8' }}>academicCGPA:</span>{' '}
                  <span style={{ color: '#fcd34d' }}>8.9</span>{' '}
                  <span style={{ color: '#64748b' }}>// KKR & KSR IT&S (B.Tech CSE)</span>,
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#94a3b8' }}>fullStackStack:</span> [
                  <span style={{ color: '#fcd34d' }}>"Java"</span>,{' '}
                  <span style={{ color: '#fcd34d' }}>"JavaScript"</span>,{' '}
                  <span style={{ color: '#fcd34d' }}>"React.js"</span>,{' '}
                  <span style={{ color: '#fcd34d' }}>"SQL"</span>
                  ],
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#94a3b8' }}>aiCapabilities:</span> [
                  <span style={{ color: '#fcd34d' }}>"LLMs"</span>,{' '}
                  <span style={{ color: '#fcd34d' }}>"RAG"</span>,{' '}
                  <span style={{ color: '#fcd34d' }}>"AI Agents"</span>,{' '}
                  <span style={{ color: '#fcd34d' }}>"FastAPI"</span>
                  ],
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#94a3b8' }}>certifications:</span> [
                  <span style={{ color: '#38bdf8' }}>"AWS Certified Cloud Practitioner"</span>,{' '}
                  <span style={{ color: '#38bdf8' }}>"Certified LLM Security Professional"</span>
                  ],
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#94a3b8' }}>openForRoles:</span>{' '}
                  <span style={{ color: '#38bdf8' }}>true</span>
                </div>
                <div>&#125;;</div>

                {/* Execution Snippet */}
                <div
                  style={{
                    marginTop: '1.25rem',
                    padding: '0.85rem 1rem',
                    background: 'rgba(0, 0, 0, 0.45)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6ee7b7' }}>
                    <CheckCircle2 size={16} />
                    <span style={{ fontSize: '0.825rem' }}>Building Intelligent Applications</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>ready</span>
                </div>
              </div>
            </div>

            {/* Floating Highlight Chips */}
            <div
              style={{
                position: 'absolute',
                top: '-18px',
                left: '-18px',
                background: 'rgba(15, 23, 42, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(139, 92, 246, 0.4)',
                borderRadius: '12px',
                padding: '0.5rem 0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#f8fafc',
                boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
                zIndex: 2
              }}
            >
              <Sparkles size={14} color="#8b5cf6" />
              <span>AI & Full Stack</span>
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: '-15px',
                right: '20px',
                background: 'rgba(15, 23, 42, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(245, 158, 11, 0.4)',
                borderRadius: '12px',
                padding: '0.5rem 0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#fcd34d',
                boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
                zIndex: 2
              }}
            >
              <span>CGPA: 8.9 / 10</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '4.5rem',
            gap: '0.5rem',
            cursor: 'pointer'
          }}
          onClick={() => scrollToSection('about')}
        >
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.12em', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
            Scroll to explore
          </span>
          <div
            style={{
              width: '28px',
              height: '44px',
              borderRadius: '20px',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '6px'
            }}
          >
            <div
              style={{
                width: '4px',
                height: '8px',
                borderRadius: '999px',
                background: 'var(--accent-cyan-light)',
                animation: 'scrollBob 2s infinite ease-in-out'
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes scrollBob {
          0% { transform: translateY(0); opacity: 0.9; }
          50% { transform: translateY(12px); opacity: 0.3; }
          100% { transform: translateY(0); opacity: 0.9; }
        }
      `}</style>
    </section>
  );
}
