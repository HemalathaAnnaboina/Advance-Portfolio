import React, { useState, useEffect } from 'react';
import { 
  Award, 
  ExternalLink, 
  Eye, 
  Calendar, 
  ShieldCheck, 
  X, 
  FileText,
  Info,
  CheckCircle2
} from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [pdfMissingModal, setPdfMissingModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
        setPdfMissingModal(false);
      }
    };
    if (selectedCert || pdfMissingModal) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert, pdfMissingModal]);

  const handleViewCertificate = async (cert) => {
    if (cert.type === 'pdf') {
      try {
        const response = await fetch(cert.pdfPath, { method: 'HEAD' });
        if (response.ok) {
          window.open(cert.pdfPath, '_blank');
        } else {
          setPdfMissingModal(true);
        }
      } catch {
        // Fallback open attempt
        window.open(cert.pdfPath, '_blank');
      }
    } else {
      setSelectedCert(cert);
    }
  };

  return (
    <section id="certifications" className="section-wrapper bg-grid-pattern">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Accreditations & Credentials</span>
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Industry certifications verified on official issuer platforms, verifying AWS cloud infrastructure and LLM security expertise.
          </p>
        </div>

        {/* Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.25rem',
            marginBottom: '3rem'
          }}
        >
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.25rem',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 'var(--radius-xl)'
              }}
            >
              <div>
                {/* Certificate Preview Box */}
                {cert.image ? (
                  <div
                    style={{
                      width: '100%',
                      height: '220px',
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden',
                      marginBottom: '1.5rem',
                      background: 'radial-gradient(circle, rgba(15, 23, 42, 0.95) 0%, rgba(7, 10, 18, 0.98) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      cursor: 'pointer'
                    }}
                    onClick={() => setSelectedCert(cert)}
                    title="Click to view full badge"
                  >
                    {/* Display actual uploaded badge image without redesigning */}
                    <img
                      src={cert.image}
                      alt={cert.name}
                      style={{
                        maxHeight: '185px',
                        maxWidth: '90%',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.6))',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: 'rgba(16, 185, 129, 0.2)',
                        border: '1px solid rgba(16, 185, 129, 0.4)',
                        color: '#6ee7b7',
                        padding: '0.2rem 0.65rem',
                        borderRadius: '999px',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      <ShieldCheck size={12} />
                      <span>{cert.issuer.includes('AWS') ? 'Credly Verified' : 'Verified'}</span>
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '220px',
                      borderRadius: 'var(--radius-md)',
                      marginBottom: '1.5rem',
                      background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.08), rgba(139, 92, 246, 0.12))',
                      border: '1px dashed rgba(139, 92, 246, 0.35)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.75rem',
                      color: 'var(--text-main)',
                      padding: '1.5rem',
                      textAlign: 'center',
                      cursor: 'pointer',
                      position: 'relative'
                    }}
                    onClick={() => handleViewCertificate(cert)}
                    title="Click to view PDF certificate"
                  >
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '14px',
                        background: 'rgba(239, 68, 68, 0.15)',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#f87171'
                      }}
                    >
                      <FileText size={28} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#ffffff' }}>
                        PDF Certificate Preview
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--accent-purple-light)', marginTop: '0.2rem' }}>
                        {cert.credential || cert.name}
                      </div>
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: 'rgba(16, 185, 129, 0.2)',
                        border: '1px solid rgba(16, 185, 129, 0.4)',
                        color: '#6ee7b7',
                        padding: '0.2rem 0.65rem',
                        borderRadius: '999px',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      <ShieldCheck size={12} />
                      <span>Verified</span>
                    </div>
                  </div>
                )}

                {/* Status Badge & Issuer */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span className="badge badge-purple" style={{ fontSize: '0.75rem' }}>
                    {cert.issuer}
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#6ee7b7',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '6px'
                    }}
                  >
                    {cert.status}
                  </span>
                </div>

                {/* Certificate Name */}
                <h3
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    marginBottom: '0.65rem',
                    color: '#ffffff',
                    lineHeight: 1.35
                  }}
                >
                  {cert.name}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem'
                  }}
                >
                  {cert.description}
                </p>

                {/* Metadata Details */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.45rem',
                    padding: '0.85rem 1rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    marginBottom: '1.5rem',
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Calendar size={13} color="var(--accent-cyan-light)" />
                      <span>Issue Date</span>
                    </span>
                    <span style={{ color: '#ffffff', fontWeight: 600 }}>{cert.issueDate}</span>
                  </div>

                  {cert.expiryDate && (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <ShieldCheck size={13} color="#34d399" />
                        <span>Validity</span>
                      </span>
                      <span style={{ color: '#34d399', fontWeight: 600 }}>Until {cert.expiryDate}</span>
                    </div>
                  )}

                  {cert.credentialId && (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Credential Identifier</span>
                      <span style={{ color: '#c4b5fd', fontFamily: 'var(--font-mono)' }}>{cert.credentialId}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <button
                  type="button"
                  onClick={() => handleViewCertificate(cert)}
                  className="btn btn-secondary btn-sm"
                  style={{ flex: 1 }}
                  id={`view-cert-${cert.id}`}
                >
                  <Eye size={14} />
                  <span>View Certificate</span>
                </button>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-cyan btn-sm"
                  style={{ flex: 1 }}
                  id={`verify-cert-${cert.id}`}
                >
                  <span>Verify Certificate</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal View (For Badge or Images) */}
        {selectedCert && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '640px', padding: '2.25rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={20} color="var(--accent-cyan-light)" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-cyan-light)' }}>
                    Official Accreditation
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
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

              {selectedCert.image && (
                <div
                  style={{
                    width: '100%',
                    maxHeight: '320px',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    background: 'radial-gradient(circle, #0b1120 0%, #030712 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.5rem'
                  }}
                >
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.name}
                    style={{ maxHeight: '270px', width: 'auto', objectFit: 'contain' }}
                  />
                </div>
              )}

              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem' }}>
                {selectedCert.name}
              </h3>
              <div style={{ fontSize: '0.92rem', color: 'var(--accent-purple-light)', marginBottom: '1rem', fontWeight: 600 }}>
                Issued by {selectedCert.issuer}
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {selectedCert.description}
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '1rem',
                  padding: '1.25rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  marginBottom: '1.5rem',
                  fontSize: '0.85rem'
                }}
              >
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '0.2rem' }}>ISSUE DATE</div>
                  <div style={{ color: '#ffffff', fontWeight: 600 }}>{selectedCert.issueDate}</div>
                </div>
                {selectedCert.expiryDate && (
                  <div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '0.2rem' }}>VALIDITY</div>
                    <div style={{ color: '#34d399', fontWeight: 600 }}>Until {selectedCert.expiryDate}</div>
                  </div>
                )}
                {selectedCert.credentialId && (
                  <div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '0.2rem' }}>CREDENTIAL ID</div>
                    <div style={{ color: '#c4b5fd', fontFamily: 'var(--font-mono)' }}>{selectedCert.credentialId}</div>
                  </div>
                )}
              </div>

              <a
                href={selectedCert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <ExternalLink size={16} />
                <span>Verify on Official Accreditation Site</span>
              </a>
            </div>
          </div>
        )}

        {/* Missing PDF Informational Modal */}
        {pdfMissingModal && (
          <div
            className="modal-overlay"
            onClick={() => setPdfMissingModal(false)}
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '580px', padding: '2.25rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f59e0b' }}>
                  <Info size={20} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase' }}>
                    Certificate Document Upload Status
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setPdfMissingModal(false)}
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

              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.6rem' }}>
                Certified LLM Security Professional (CLLMSP)
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                The original certificate PDF has been linked to <code>public/certificates/certified-llm-security-professional.pdf</code>. Once uploaded to that folder, it will open directly in the browser here.
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                In the meantime, this credential is fully authentic and verifiable on the official Red Team Leaders examination portal:
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="https://courses.redteamleaders.com/exam-completion/50f0d7b549fb534e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  <ExternalLink size={16} />
                  <span>Verify on Red Team Leaders</span>
                </a>
                <button
                  type="button"
                  onClick={() => setPdfMissingModal(false)}
                  className="btn btn-secondary"
                  style={{ flex: 1 }}
                >
                  <span>Close</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
