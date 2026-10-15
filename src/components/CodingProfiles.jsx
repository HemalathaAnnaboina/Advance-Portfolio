import React from 'react';
import { 
  Code2, 
  ExternalLink, 
  CheckCircle2,
  FolderGit2,
  Cpu
} from 'lucide-react';
import { LeetCode, Github } from './SocialIcons';
import { codingProfiles } from '../data/portfolioData';

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Code2 size={14} />
            <span>Problem Solving & Repos</span>
          </div>
          <h2 className="section-title">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p className="section-subtitle">
            Authentic algorithmic problem-solving practice and open-source GitHub code repositories.
          </p>
        </div>

        {/* Profiles Grid - Exactly TWO Cards */}
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {codingProfiles.map((profile) => (
            <div
              key={profile.platform}
              className="glass-panel"
              style={{
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                position: 'relative'
              }}
            >
              <div>
                {/* Header: Platform Logo & Verified Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
                    }}
                  >
                    {profile.platform === 'LeetCode' ? (
                      <LeetCode size={30} color="#FFA116" />
                    ) : (
                      <Github size={30} color="#c084fc" />
                    )}
                  </div>

                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '0.25rem 0.75rem',
                      borderRadius: '999px',
                      background: 'rgba(16, 185, 129, 0.12)',
                      color: '#6ee7b7',
                      border: '1px solid rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    <CheckCircle2 size={12} />
                    <span>Verified Profile</span>
                  </span>
                </div>

                {/* Platform Name & Handle */}
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
                  {profile.platform}
                </h3>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
                    color: 'var(--accent-cyan-light)',
                    marginBottom: '1.25rem'
                  }}
                >
                  @{profile.username}
                </div>

                {/* Solved Count / Metric Card */}
                {profile.platform === 'LeetCode' && (
                  <div
                    style={{
                      padding: '1.1rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'linear-gradient(135deg, rgba(255, 161, 22, 0.1) 0%, rgba(255, 161, 22, 0.03) 100%)',
                      border: '1px solid rgba(255, 161, 22, 0.3)',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <div style={{ fontSize: '0.74rem', color: '#fcd34d', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                      PROBLEM SOLVING METRICS
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                      <span style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>
                        {profile.solvedCount}
                      </span>
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                        problems solved
                      </span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                      {profile.solvedLabel}
                    </div>
                  </div>
                )}

                {/* Featured Repositories Card for GitHub */}
                {profile.platform === 'GitHub' && (
                  <div
                    style={{
                      padding: '1.1rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.03) 100%)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <div style={{ fontSize: '0.74rem', color: 'var(--accent-purple-light)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.65rem' }}>
                      FEATURED REPOSITORIES
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {profile.featuredRepos && profile.featuredRepos.map((repo) => (
                        <a
                          key={repo.name}
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0.45rem 0.65rem',
                            borderRadius: '6px',
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                            fontSize: '0.82rem',
                            color: '#ffffff',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)';
                            e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                          }}
                        >
                          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{repo.name}</span>
                          <ExternalLink size={12} color="var(--accent-cyan-light)" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Core Focus Area */}
                <div
                  style={{
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    marginBottom: '1.25rem'
                  }}
                >
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                    PRIMARY FOCUS
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-main)', fontWeight: 500 }}>
                    {profile.focus}
                  </div>
                </div>

                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.75rem' }}>
                  {profile.description}
                </p>
              </div>

              {/* Action Button */}
              <div>
                {profile.platform === 'LeetCode' ? (
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    id="visit-leetcode-btn"
                    style={{ width: '100%', borderColor: 'rgba(255, 161, 22, 0.35)' }}
                  >
                    <LeetCode size={16} color="#FFA116" />
                    <span>Visit LeetCode</span>
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    id="visit-github-btn"
                    style={{ width: '100%', borderColor: 'rgba(139, 92, 246, 0.35)' }}
                  >
                    <Github size={16} />
                    <span>Visit GitHub</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
