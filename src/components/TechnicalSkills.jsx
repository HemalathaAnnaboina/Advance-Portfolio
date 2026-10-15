import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  BrainCircuit, 
  Wrench, 
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIconMap = {
  "Programming Languages": <Code2 size={22} color="#38bdf8" />,
  "Frontend Development": <Layout size={22} color="#a78bfa" />,
  "Backend Development": <Server size={22} color="#34d399" />,
  "Database": <Database size={22} color="#fbbf24" />,
  "AI & Generative AI": <BrainCircuit size={22} color="#f43f5e" />,
  "Cloud and Tools": <Wrench size={22} color="#c084fc" />
};

export default function TechnicalSkills() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterOptions = ['All', ...skillCategories.map(c => c.category)];

  const filteredCategories = selectedFilter === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.category === selectedFilter);

  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Proficiencies</span>
          </h2>
          <p className="section-subtitle">
            Categorized technical competencies across programming, enterprise full-stack development, cloud infrastructure, and modern AI engineering.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            justifyContent: 'center',
            marginBottom: '3rem'
          }}
        >
          {filterOptions.map((cat) => {
            const isSelected = selectedFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                style={{
                  padding: '0.5rem 1.15rem',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: isSelected
                    ? 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)'
                    : 'rgba(15, 23, 42, 0.7)',
                  color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                  border: isSelected
                    ? '1px solid rgba(255, 255, 255, 0.2)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isSelected
                    ? '0 0 20px rgba(139, 92, 246, 0.4)'
                    : 'none'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Categories & Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="glass-panel"
              style={{
                padding: '1.85rem',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 'var(--radius-xl)'
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  marginBottom: '1.5rem',
                  paddingBottom: '0.9rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {categoryIconMap[group.category] || <Layers size={20} />}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc' }}>
                    {group.category}
                  </h3>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {group.skills.length} core technologies
                  </span>
                </div>
              </div>

              {/* Skills List inside this category (NO fake percentages) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', flexGrow: 1 }}>
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-card"
                    style={{
                      padding: '0.95rem 1.1rem',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.025)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(139, 92, 246, 0.09)';
                      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.35)';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.025)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div style={{ marginBottom: '0.35rem' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#ffffff' }}>
                        {skill.name}
                      </span>
                    </div>

                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
