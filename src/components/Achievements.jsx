import React from 'react';
import { Trophy, Calendar, CheckCircle2, Award } from 'lucide-react';
import { achievements } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Trophy size={14} />
            <span>Honors & Recognitions</span>
          </div>
          <h2 className="section-title">
            Achievements & <span className="gradient-text">Activities</span>
          </h2>
          <p className="section-subtitle">
            Hackathon honors, technical innovation awards, and state-level program participation.
          </p>
        </div>

        {/* Awards Cards Grid */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem'
          }}
        >
          {achievements.map((item) => (
            <div
              key={item.id}
              className="glass-panel"
              style={{
                padding: '2.25rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                alignItems: 'center',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              {/* Visual Container */}
              {item.image ? (
                <div
                  style={{
                    width: '100%',
                    height: '260px',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    background: '#070a12',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  {item.badge && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                        boxShadow: '0 4px 14px rgba(245, 158, 11, 0.45)',
                        color: '#ffffff',
                        padding: '0.35rem 0.9rem',
                        borderRadius: '999px',
                        fontSize: '0.82rem',
                        fontWeight: 800,
                        letterSpacing: '0.03em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        backdropFilter: 'blur(8px)'
                      }}
                    >
                      <Trophy size={14} color="#ffffff" />
                      <span>{item.badge}</span>
                    </div>
                  )}
                </div>
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '260px',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    background: item.badge === '2nd Prize'
                      ? 'radial-gradient(circle at center, rgba(245, 158, 11, 0.16) 0%, rgba(15, 23, 42, 0.95) 100%)'
                      : 'radial-gradient(circle at center, rgba(14, 165, 233, 0.12) 0%, rgba(15, 23, 42, 0.8) 100%)',
                    border: item.badge === '2nd Prize'
                      ? '1px solid rgba(245, 158, 11, 0.35)'
                      : '1px solid rgba(14, 165, 233, 0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    padding: '1.5rem',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '16px',
                      background: item.badge === '2nd Prize'
                        ? 'rgba(245, 158, 11, 0.15)'
                        : 'rgba(14, 165, 233, 0.15)',
                      border: item.badge === '2nd Prize'
                        ? '1px solid rgba(245, 158, 11, 0.35)'
                        : '1px solid rgba(14, 165, 233, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: item.badge === '2nd Prize' ? '#f59e0b' : 'var(--accent-cyan-light)',
                      marginBottom: '1rem'
                    }}
                  >
                    {item.badge === '2nd Prize' ? <Trophy size={32} /> : <Award size={30} />}
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.35rem', lineHeight: 1.3 }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {item.category}
                  </div>
                  {item.badge && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: item.badge === '2nd Prize'
                          ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                          : 'rgba(14, 165, 233, 0.2)',
                        boxShadow: item.badge === '2nd Prize'
                          ? '0 4px 14px rgba(245, 158, 11, 0.45)'
                          : 'none',
                        border: item.badge === '2nd Prize'
                          ? 'none'
                          : '1px solid rgba(14, 165, 233, 0.4)',
                        color: item.badge === '2nd Prize' ? '#ffffff' : '#7dd3fc',
                        padding: '0.35rem 0.9rem',
                        borderRadius: '999px',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        letterSpacing: '0.02em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        backdropFilter: 'blur(8px)'
                      }}
                    >
                      {item.badge === '2nd Prize' && <Trophy size={13} color="#ffffff" />}
                      <span>{item.badge}</span>
                    </div>
                  )}
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
                      <span className="badge badge-amber">
                        {item.category}
                      </span>
                      {item.event && (
                        <span className="badge badge-purple" style={{ fontSize: '0.75rem' }}>
                          {item.event}
                        </span>
                      )}
                    </div>
                    {item.year && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        <Calendar size={13} />
                        <span>{item.year}</span>
                      </div>
                    )}
                  </div>

                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  {item.award && (
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem', color: '#f59e0b', fontWeight: 700, marginBottom: '0.85rem' }}>
                      <Trophy size={15} />
                      <span>Award: {item.award}</span>
                    </div>
                  )}
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                    {item.description}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.84rem',
                    color: '#6ee7b7',
                    fontWeight: 600
                  }}
                >
                  <CheckCircle2 size={16} />
                  <span>{item.statusText || 'Honors & Recognition'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
