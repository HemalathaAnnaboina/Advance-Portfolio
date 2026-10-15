import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  Building2,
  Terminal
} from 'lucide-react';
import { experienceList } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Practical Experience</span>
          </div>
          <h2 className="section-title">
            Internship <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on technical internship experience engineering Python backend APIs, database CRUD operations, and responsive web frontends.
          </p>
        </div>

        {/* Experience Cards */}
        <div
          style={{
            maxWidth: '880px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}
        >
          {experienceList.map((exp, idx) => (
            <div
              key={exp.title || exp.role || idx}
              className="glass-panel"
              style={{
                padding: '2.5rem',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                position: 'relative'
              }}
            >
              {/* Top Row: Role/Title, Company, Period */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}
              >
                <div>
                  <span
                    className="badge badge-purple"
                    style={{ fontSize: '0.75rem', marginBottom: '0.65rem' }}
                  >
                    {exp.type || 'Virtual Internship'}
                  </span>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem' }}>
                    {exp.title || exp.role}
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      color: 'var(--accent-cyan-light)',
                      fontWeight: 600,
                      fontSize: '1rem'
                    }}
                  >
                    <Building2 size={18} />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.45rem 0.95rem',
                    borderRadius: '999px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <Calendar size={14} color="var(--accent-purple-light)" />
                  <span style={{ fontWeight: 500 }}>{exp.period}</span>
                </div>
              </div>

              {/* Technologies Tag Bar */}
              {exp.technologies && exp.technologies.length > 0 && (
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        padding: '0.25rem 0.7rem',
                        borderRadius: '6px',
                        background: 'rgba(139, 92, 246, 0.08)',
                        border: '1px solid rgba(139, 92, 246, 0.2)',
                        color: '#c4b5fd'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Description */}
              {exp.description && (
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    margin: 0
                  }}
                >
                  {exp.description}
                </p>
              )}

              {/* Optional Responsibilities */}
              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: exp.description ? '1rem' : 0 }}>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        fontSize: '0.92rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6
                      }}
                    >
                      <CheckCircle2 size={16} color="var(--accent-cyan-light)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
