import React, { useState, useEffect } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  X, 
  Maximize2, 
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { Github } from './SocialIcons';
import { projects } from '../data/portfolioData';

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI & Generative AI', 'Full Stack Development', 'Cloud & Automation'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="projects" className="section-wrapper bg-grid-pattern">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="section-title">
            Engineered <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world full-stack and Generative AI applications with public GitHub repositories, architecture designs, and live deployments.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            justifyContent: 'center',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
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

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.25rem'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                overflow: 'hidden'
              }}
            >
              {/* Project Image Header */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/9',
                  overflow: 'hidden',
                  background: '#040711',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedProject(project)}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} - Application Screenshot`}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, rgba(7, 10, 18, 0.95) 100%)',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                      gap: '0.65rem'
                    }}
                  >
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '14px',
                        background: 'rgba(139, 92, 246, 0.15)',
                        border: '1px solid rgba(139, 92, 246, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-purple-light)'
                      }}
                    >
                      <Layers size={24} />
                    </div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e2e8f0' }}>
                      {project.title}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      Architecture & Repository Details
                    </div>
                  </div>
                )}

                {/* Category Overlay Tag */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '999px',
                    background: 'rgba(7, 9, 14, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--accent-cyan-light)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <Sparkles size={12} color="var(--accent-cyan)" />
                  <span>{project.category}</span>
                </div>

                {/* Inspect button overlay */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(15, 23, 42, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff'
                  }}
                  aria-label="Inspect project details"
                  title="View Architecture Details"
                >
                  <Maximize2 size={16} />
                </button>
              </div>

              {/* Project Card Content */}
              <div
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flexGrow: 1
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '0.4rem',
                      lineHeight: 1.3
                    }}
                  >
                    {project.title}
                  </h3>
                  <div
                    style={{
                      fontSize: '0.84rem',
                      color: 'var(--accent-purple-light)',
                      fontWeight: 600,
                      marginBottom: '0.85rem'
                    }}
                  >
                    {project.subtitle}
                  </div>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem'
                    }}
                  >
                    {project.summary}
                  </p>

                  {/* Demo Metrics Card if available */}
                  {project.demoMetrics && (
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '0.5rem',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        background: 'rgba(14, 165, 233, 0.06)',
                        border: '1px solid rgba(14, 165, 233, 0.15)',
                        marginBottom: '1.15rem'
                      }}
                    >
                      {project.demoMetrics.map((metric, mIdx) => (
                        <div key={mIdx}>
                          <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                            {metric.label}
                          </div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-cyan-light)' }}>
                            {metric.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Highlights Bullet points */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.5rem' }}>
                    {project.highlights.slice(0, 2).map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.84rem', color: '#cbd5e1' }}>
                        <CheckCircle2 size={15} color="var(--accent-cyan-light)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.5rem' }}>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '0.74rem',
                          padding: '0.22rem 0.65rem',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.09)',
                          color: '#e2e8f0',
                          fontFamily: 'var(--font-mono)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    flexWrap: 'wrap',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      style={{ flex: '1 1 auto' }}
                    >
                      <Github size={15} />
                      <span>GitHub</span>
                    </a>
                  )}

                  {/* Live demo button ONLY when genuine demo is available */}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                      style={{ flex: '1 1 auto' }}
                    >
                      <ExternalLink size={15} />
                      <span>Live Demo</span>
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-outline-cyan btn-sm"
                    style={{ flex: project.demo ? '0 0 auto' : '1 1 auto' }}
                    title="View details & architecture"
                  >
                    <span>Details</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Architecture Deep-Dive Modal */}
        {selectedProject && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '780px', padding: '2.5rem' }}
            >
              {/* Modal Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="badge badge-purple">{selectedProject.category}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Project Deep-Dive</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff'
                  }}
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Project Image Banner */}
              {selectedProject.image ? (
                <div
                  style={{
                    width: '100%',
                    maxHeight: '340px',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    background: '#040711',
                    marginBottom: '1.5rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    src={selectedProject.image}
                    alt={`${selectedProject.title} - Application Screenshot Preview`}
                    style={{ width: '100%', height: 'auto', maxHeight: '340px', objectFit: 'contain' }}
                  />
                </div>
              ) : (
                <div
                  style={{
                    width: '100%',
                    padding: '2rem 1.5rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.12) 0%, rgba(7, 10, 18, 0.95) 100%)',
                    border: '1px solid rgba(139, 92, 246, 0.25)',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem'
                  }}
                >
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: 'rgba(139, 92, 246, 0.15)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-purple-light)'
                    }}
                  >
                    <Layers size={26} />
                  </div>
                  <div style={{ fontSize: '0.92rem', color: '#e2e8f0', fontWeight: 600 }}>
                    Architecture & Engineering Details
                  </div>
                </div>
              )}

              <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem' }}>
                {selectedProject.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--accent-cyan-light)', fontWeight: 600, marginBottom: '1.25rem' }}>
                {selectedProject.subtitle}
              </p>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                {selectedProject.summary}
              </p>

              {/* Demo Concept Figures Grid if available */}
              {selectedProject.demoMetrics && (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                    gap: '0.75rem',
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(14, 165, 233, 0.08)',
                    border: '1px solid rgba(14, 165, 233, 0.25)',
                    marginBottom: '1.75rem'
                  }}
                >
                  {selectedProject.demoMetrics.map((metric, mIdx) => (
                    <div key={mIdx}>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                        {metric.label}
                      </div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-cyan-light)' }}>
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Full Highlights list */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>
                  Key Engineering Highlights
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {selectedProject.highlights.map((highlight, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <CheckCircle2 size={16} color="var(--accent-cyan-light)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Pipeline Box */}
              {selectedProject.architecture && (
                <div
                  style={{
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    marginBottom: '2rem'
                  }}
                >
                  <div style={{ fontSize: '0.78rem', color: 'var(--accent-purple-light)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    System Architecture Pipeline
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#e2e8f0', lineHeight: 1.6 }}>
                    {selectedProject.architecture}
                  </div>
                </div>
              )}

              {/* Technology Stack Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                {selectedProject.technologies.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#ffffff'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Modal Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ flex: 1 }}
                  >
                    <Github size={16} />
                    <span>View Repository on GitHub</span>
                  </a>
                )}

                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ flex: 1 }}
                  >
                    <ExternalLink size={16} />
                    <span>Open Live Demo</span>
                  </a>
                )}

                {!selectedProject.github && !selectedProject.demo && (
                  <div
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      justifyContent: 'center'
                    }}
                  >
                    <span>Concept dashboard architecture and workflow designs.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
