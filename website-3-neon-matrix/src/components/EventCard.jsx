import React from 'react';
import { Users, Clock, ArrowRight, ExternalLink, HelpCircle, Cpu, Sparkles, Zap, Terminal, ShieldCheck, FileText, Lightbulb } from 'lucide-react';

const ICON_MAP = {
  HelpCircle,
  Cpu,
  Sparkles,
  Zap,
  Terminal,
  ShieldCheck,
  FileText,
  Users,
  Lightbulb,
};

export default function EventCard({ event, onExplore, onIdeavya }) {
  const IconComponent = ICON_MAP[event.icon] || Cpu;
  const isIdeavya = event.id === 'ideavya';

  return (
    <div className="cyber-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
      
      {/* Top Header: Icon left, Event Logo right */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
        <div style={{
          width: '52px',
          height: '52px',
          borderRadius: '12px',
          background: isIdeavya
            ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.18) 0%, rgba(245, 183, 0, 0.12) 100%)'
            : 'linear-gradient(135deg, rgba(0, 240, 255, 0.15) 0%, rgba(245, 183, 0, 0.1) 100%)',
          border: isIdeavya
            ? '1px solid rgba(255, 215, 0, 0.5)'
            : '1px solid rgba(0, 240, 255, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: isIdeavya ? '#ffd700' : '#00f0ff'
        }}>
          <IconComponent size={26} />
        </div>

        {/* Right: Event logo image */}
        {event.image && (
          <img
            src={event.image}
            alt={event.title}
            style={{
              width: '64px',
              height: '64px',
              objectFit: 'cover',
              borderRadius: '12px',
              border: isIdeavya
                ? '1px solid rgba(255,215,0,0.35)'
                : '1px solid rgba(0,240,255,0.25)',
              boxShadow: isIdeavya
                ? '0 0 14px rgba(255,215,0,0.18)'
                : '0 0 14px rgba(0,0,0,0.5)',
              flexShrink: 0,
            }}
          />
        )}
      </div>

      {/* Title & Subtitle */}
      <h3 className="font-heading" style={{ fontSize: '1.55rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.3rem' }}>
        {event.title}
      </h3>
      <div style={{ fontSize: '0.85rem', color: isIdeavya ? '#ffd700' : '#00f0ff', fontWeight: 600, marginBottom: '0.85rem' }}>
        {event.subtitle}
      </div>

      {/* Tagline */}
      <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.55, marginBottom: '1.5rem', flexGrow: 1 }}>
        {event.tagline}
      </p>

      {/* Meta Specs */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.75rem 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        marginBottom: '1.25rem',
        fontSize: '0.82rem',
        color: '#94a3b8'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Users size={15} color="#00f0ff" />
          <span>{event.teamSize}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Clock size={15} color="#f5b700" />
          <span>{event.roundsCount} {event.roundsCount === 1 ? 'Level' : isIdeavya ? 'Levels' : 'Rounds'}</span>
        </div>
      </div>

      {/* Action Buttons */}
      {isIdeavya ? (
        /* IDEAVYA: single "Know More" button → opens dedicated page */
        <button
          onClick={() => onIdeavya && onIdeavya()}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            background: 'linear-gradient(135deg, #ffd700, #f5b700)',
            color: '#050b18',
            border: 'none',
            borderRadius: '10px',
            padding: '0.75rem 1.25rem',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.95rem',
            fontWeight: 900,
            letterSpacing: '0.05em',
            cursor: 'pointer',
            width: '100%',
            boxShadow: '0 4px 18px rgba(245, 183, 0, 0.35)',
            transition: 'all 0.2s'
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(245,183,0,0.5)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 18px rgba(245, 183, 0, 0.35)'; }}
        >
          <Lightbulb size={17} /> Know More <ArrowRight size={16} />
        </button>
      ) : (
        /* Other events: Explore Rules popup + direct Google Form icon */
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.75rem' }}>
          <button
            onClick={() => onExplore(event)}
            className="btn-outline-cyan"
            style={{ width: '100%', justifyContent: 'center', padding: '0.65rem 1rem' }}
          >
            <span>Explore Rules</span>
            <ArrowRight size={16} />
          </button>

          <a
            href={event.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'linear-gradient(135deg, #ffd700, #f5b700)',
              color: '#050b18',
              borderRadius: '10px',
              width: '42px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              transition: 'transform 0.2s',
              boxShadow: '0 4px 12px rgba(245, 183, 0, 0.3)'
            }}
            title={`Register directly for ${event.title} (Dedicated Google Form)`}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <ExternalLink size={18} />
          </a>
        </div>
      )}

    </div>
  );
}
