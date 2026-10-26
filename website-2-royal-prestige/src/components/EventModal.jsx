import React from 'react';
import { X, CheckCircle2, Users, Clock, Award, ExternalLink, ShieldCheck, BookOpen } from 'lucide-react';

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
          background: 'linear-gradient(180deg, #fffbeb 0%, #ffffff 100%)',
          borderBottom: '2px solid rgba(197, 155, 39, 0.3)',
          position: 'relative'
        }}>
          <button 
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              background: '#f1f5f9',
              border: '1px solid #cbd5e1',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0f172a',
              cursor: 'pointer'
            }}
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <span className="badge-royal-gold">{event.badge}</span>
            <span className="badge-royal-navy">{event.category}</span>
          </div>

          <h2 className="font-serif" style={{ fontSize: '2rem', fontWeight: 900, color: '#0b2545', marginBottom: '0.25rem' }}>
            {event.title}
          </h2>
          <p style={{ color: '#b8860b', fontSize: '1rem', fontWeight: 700 }}>
            {event.subtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '1.75rem 2rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          
          {/* Quick Specifications */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
            background: '#f8fafc',
            padding: '1rem',
            borderRadius: '12px',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Users size={18} color="#0b2545" />
              <div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Delegation Size</div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0b2545' }}>{event.teamSize}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Clock size={18} color="#b8860b" />
              <div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Stages</div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0b2545' }}>{event.roundsCount} {event.roundsCount === 1 ? 'Stage' : 'Rounds'}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Award size={18} color="#b8860b" />
              <div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Honors</div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0b2545' }}>Cash & Merit Shield</div>
              </div>
            </div>
          </div>

          {/* Event Synopsis */}
          <div>
            <h4 className="font-serif" style={{ fontSize: '1.25rem', color: '#0b2545', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={18} color="#b8860b" /> Academic Synopsis
            </h4>
            <p style={{ color: '#334155', fontSize: '0.98rem', lineHeight: 1.65 }}>
              {event.overview}
            </p>
          </div>

          {/* Rounds Breakdown */}
          <div>
            <h4 className="font-serif" style={{ fontSize: '1.25rem', color: '#0b2545', marginBottom: '0.85rem' }}>
              Sequential Rounds & Regulations
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {event.rounds.map((round, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: '#ffffff',
                    border: '1.5px solid #e2e8f0',
                    borderLeft: '4px solid #b8860b',
                    borderRadius: '8px',
                    padding: '1.1rem 1.25rem',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span style={{
                        background: '#0b2545',
                        color: '#fce18b',
                        fontWeight: 800,
                        fontSize: '0.78rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '4px',
                        fontFamily: 'var(--font-serif)'
                      }}>
                        {round.roundNumber}
                      </span>
                      <strong style={{ color: '#0b2545', fontSize: '1.05rem' }}>{round.title}</strong>
                    </div>
                    {round.duration && (
                      <span style={{ fontSize: '0.82rem', color: '#92400e', background: '#fffbeb', padding: '0.2rem 0.6rem', borderRadius: '4px', border: '1px solid rgba(197, 155, 39, 0.3)', fontWeight: 600 }}>
                        Duration: {round.duration}
                      </span>
                    )}
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: 1.55 }}>
                    {round.description}
                  </p>
                  {round.scoring && (
                    <div style={{ marginTop: '0.4rem', fontSize: '0.84rem', color: '#64748b' }}>
                      <strong style={{ color: '#0b2545' }}>Evaluation:</strong> {round.scoring}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Rules List */}
          <div>
            <h4 className="font-serif" style={{ fontSize: '1.25rem', color: '#0b2545', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={18} color="#b8860b" /> Official Contest Rules
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {event.rules.map((rule, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={17} color="#b8860b" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <span style={{ color: '#334155', fontSize: '0.93rem' }}>{rule}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Perks */}
          {event.perks && (
            <div style={{ background: '#fffbeb', border: '1px solid rgba(197, 155, 39, 0.35)', borderRadius: '12px', padding: '1rem 1.25rem' }}>
              <strong style={{ color: '#92400e', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Awards & Entitlements:
              </strong>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '0.5rem' }}>
                {event.perks.map((perk, idx) => (
                  <span key={idx} style={{ background: '#ffffff', color: '#0b2545', border: '1px solid #cbd5e1', padding: '0.3rem 0.8rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600 }}>
                    🎖 {perk}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer with Register via Google Form */}
        <div style={{
          padding: '1.25rem 2rem',
          background: '#f8fafc',
          borderTop: '1px solid #e2e8f0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
            Online registration is authenticated via Google Form.
          </div>
          
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button 
              onClick={onClose}
              style={{
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                color: '#334155',
                padding: '0.7rem 1.4rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.92rem'
              }}
            >
              Dismiss
            </button>
            <a 
              href={registrationUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-royal-gold"
              style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}
            >
              <span>Submit Registration on Google Form</span>
              <ExternalLink size={17} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
