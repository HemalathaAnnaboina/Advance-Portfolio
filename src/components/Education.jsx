import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle2
} from 'lucide-react';
import { educationList } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section-wrapper bg-grid-pattern">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Timeline</span>
          </h2>
          <p className="section-subtitle">
            Consistent high academic record across Computer Science Engineering, Intermediate MPC, and Secondary School education.
          </p>
        </div>

        {/* Education Timeline */}
        <div
          style={{
            maxWidth: '880px',
            margin: '0 auto',
            position: 'relative',
            paddingLeft: '2rem'
          }}
        >
          {/* Vertical Timeline Bar */}
          <div
            style={{
              position: 'absolute',
              top: '15px',
              bottom: '15px',
              left: '7px',
              width: '2px',
              background: 'linear-gradient(180deg, #8b5cf6 0%, #06b6d4 50%, rgba(139, 92, 246, 0.2) 100%)',
              boxShadow: '0 0 12px rgba(139, 92, 246, 0.4)'
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {educationList.map((item, idx) => (
              <div
                key={item.degree}
                style={{
                  position: 'relative'
                }}
              >
                {/* Node Dot */}
                <div
                  style={{
                    position: 'absolute',
                    top: '28px',
                    left: '-2rem',
                    transform: 'translateX(-50%)',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: idx === 0 ? 'var(--accent-purple)' : 'var(--accent-cyan)',
                    border: '3px solid #07090e',
                    boxShadow: idx === 0 ? '0 0 15px #8b5cf6' : '0 0 15px #06b6d4'
                  }}
                />

                {/* Timeline Card */}
                <div
                  className="glass-panel"
                  style={{
                    padding: '2rem',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  {/* Header: Degree & Score Badge */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                      marginBottom: '0.75rem'
                    }}
                  >
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.3 }}>
                      {item.degree}
                    </h3>
                    <span
                      className={`badge ${idx === 0 ? 'badge-purple' : 'badge-cyan'}`}
                      style={{ fontSize: '0.85rem', fontWeight: 700, padding: '0.35rem 0.85rem' }}
                    >
                      <Award size={14} />
                      {item.score}
                    </span>
                  </div>

                  {/* Institution & Metadata */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '1.25rem',
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '1.25rem',
                      alignItems: 'center'
                    }}
                  >
                    <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>
                      {item.institution}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--accent-cyan-light)' }}>
                      <Calendar size={14} />
                      {item.period}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)' }}>
                      <MapPin size={14} />
                      {item.location}
                    </span>
                  </div>

                  {/* Highlights list */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {item.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.6rem',
                          fontSize: '0.88rem',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        <CheckCircle2 size={15} color="var(--accent-cyan-light)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
