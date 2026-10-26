import React from 'react';
import { X, CheckCircle2, AlertCircle, Users, Clock, Award, ExternalLink, ShieldAlert, Cpu } from 'lucide-react';

export default function EventModal({ event, onClose, formUrl }) {
  if (!event) return null;

  const registrationUrl = event.formUrl || formUrl;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '0', display: 'flex', flexDirection: 'column' }}
      >
        {/* Modal Header */}
        <div style={{
          padding: '1.75rem 2rem 1.25rem 2rem',
          background: 'linear-gradient(180deg, rgba(0, 240, 255, 0.08) 0%, transparent 100%)',
          borderBottom: '1px solid rgba(0, 240, 255, 0.2)',
          position: 'relative'
        }}>
          <button 
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 50, 50, 0.3)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <span className="badge-gold">{event.badge}</span>
            <span className="badge-cyan">{event.category}</span>
          </div>

          <h2 className="font-heading" style={{ fontSize: '2rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.25rem' }}>
            {event.title}
          </h2>
          <p style={{ color: '#00f0ff', fontSize: '1rem', fontWeight: 600 }}>
            {event.subtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '1.75rem 2rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          
          {/* Quick Meta Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
            background: 'rgba(5, 11, 24, 0.8)',
            padding: '1rem',
            borderRadius: '12px',
            border: '1px solid rgba(245, 183, 0, 0.2)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Users size={18} color="#00f0ff" />
              <div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase' }}>Team Size</div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#f8fafc' }}>{event.teamSize}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Clock size={18} color="#f5b700" />
              <div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase' }}>Structure</div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#f8fafc' }}>{event.roundsCount} Stages / Rounds</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Award size={18} color="#00f0ff" />
              <div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase' }}>Recognition</div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#f8fafc' }}>Cash Prize & Certs</div>
              </div>
            </div>
          </div>

          {/* Event Overview */}
          <div>
            <h4 className="font-heading" style={{ fontSize: '1.25rem', color: '#f5b700', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Cpu size={18} /> Event Overview
            </h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.98rem', lineHeight: 1.65 }}>
              {event.overview}
            </p>
          </div>

          {/* Rounds Breakdown */}
          <div>
            <h4 className="font-heading" style={{ fontSize: '1.25rem', color: '#00f0ff', marginBottom: '0.85rem' }}>
              Round-by-Round Breakdown
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {event.rounds.map((round, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: 'rgba(10, 22, 44, 0.7)',
                    border: '1px solid rgba(0, 240, 255, 0.25)',
                    borderRadius: '12px',
                    padding: '1rem 1.25rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span style={{
                        background: '#00f0ff',
                        color: '#050b18',
                        fontWeight: 800,
                        fontSize: '0.78rem',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '6px'
                      }}>
                        {round.roundNumber}
                      </span>
                      <strong style={{ color: '#f8fafc', fontSize: '1.05rem' }}>{round.title}</strong>
                    </div>
                    {round.duration && (
                      <span style={{ fontSize: '0.8rem', color: '#ffd700', background: 'rgba(245, 183, 0, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '6px' }}>
                        ⏱ {round.duration}
                      </span>
                    )}
                  </div>
                  <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.55 }}>
                    {round.description}
                  </p>
                  {round.scoring && (
                    <div style={{ marginTop: '0.4rem', fontSize: '0.82rem', color: '#94a3b8' }}>
                      <span style={{ color: '#00f0ff', fontWeight: 600 }}>Scoring Criteria:</span> {round.scoring}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Rules & Regulations */}
          <div>
            <h4 className="font-heading" style={{ fontSize: '1.25rem', color: '#ffd700', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldAlert size={18} /> Rules & Guidelines
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {event.rules.map((rule, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={17} color="#00f0ff" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <span style={{ color: '#cbd5e1', fontSize: '0.93rem' }}>{rule}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Perks */}
          {event.perks && (
            <div style={{ background: 'rgba(245, 183, 0, 0.08)', border: '1px dashed rgba(245, 183, 0, 0.35)', borderRadius: '12px', padding: '1rem 1.25rem' }}>
              <strong style={{ color: '#fce18b', fontSize: '0.92rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Awards & Benefits:
              </strong>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '0.5rem' }}>
                {event.perks.map((perk, idx) => (
                  <span key={idx} style={{ background: '#050b18', color: '#ffd700', border: '1px solid rgba(245, 183, 0, 0.3)', padding: '0.25rem 0.75rem', borderRadius: '6px', fontSize: '0.85rem' }}>
                    🏆 {perk}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer with Direct Google Form Registration Button */}
        <div style={{
          padding: '1.25rem 2rem',
          background: '#060e1d',
          borderTop: '1px solid rgba(0, 240, 255, 0.2)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
            Clicking register opens the official Google Registration Form.
          </div>
          
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button 
              onClick={onClose}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#cbd5e1',
                padding: '0.7rem 1.4rem',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.92rem'
              }}
            >
              Close
            </button>
            <a 
              href={registrationUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ padding: '0.75rem 2rem', fontSize: '1.05rem' }}
            >
              <span>Register via Google Form</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
