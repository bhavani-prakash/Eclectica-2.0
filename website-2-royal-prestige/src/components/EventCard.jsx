import React from 'react';
import { Users, Clock, ChevronRight, ExternalLink, HelpCircle, Cpu, Sparkles, Zap, Terminal, ShieldCheck, FileText } from 'lucide-react';

const ICON_MAP = {
  HelpCircle,
  Cpu,
  Sparkles,
  Zap,
  Terminal,
  ShieldCheck,
  FileText,
  Users
};

export default function EventCard({ event, onExplore }) {
  const IconComponent = ICON_MAP[event.icon] || Cpu;

  return (
    <div className="royal-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
      
      {/* Top Tag & Icon */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '12px',
          background: '#fffbeb',
          border: '1.5px solid rgba(197, 155, 39, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#b8860b'
        }}>
          <IconComponent size={25} />
        </div>
        <span className="badge-royal-gold">
          {event.badge}
        </span>
      </div>

      {/* Title & Subtitle */}
      <h3 className="font-serif" style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0b2545', marginBottom: '0.35rem' }}>
        {event.title}
      </h3>
      <div style={{ fontSize: '0.85rem', color: '#b8860b', fontWeight: 700, marginBottom: '0.85rem' }}>
        {event.subtitle}
      </div>

      {/* Tagline */}
      <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.55, marginBottom: '1.5rem', flexGrow: 1 }}>
        {event.tagline}
      </p>

      {/* Meta Specs */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.75rem 0',
        borderTop: '1px solid #f1f5f9',
        borderBottom: '1px solid #f1f5f9',
        marginBottom: '1.25rem',
        fontSize: '0.82rem',
        color: '#64748b'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Users size={15} color="#0b2545" />
          <span style={{ fontWeight: 600 }}>{event.teamSize}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Clock size={15} color="#b8860b" />
          <span style={{ fontWeight: 600 }}>{event.roundsCount} {event.roundsCount === 1 ? 'Round' : 'Rounds'}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.75rem' }}>
        <button 
          onClick={() => onExplore(event)}
          className="btn-outline-royal"
          style={{ width: '100%', justifyContent: 'center', padding: '0.65rem 1rem' }}
        >
          <span>Explore Rules</span>
          <ChevronRight size={16} />
        </button>

        <a 
          href={event.formUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            background: 'linear-gradient(135deg, #0b2545, #07162c)',
            color: '#fce18b',
            borderRadius: '10px',
            width: '42px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            transition: 'transform 0.2s',
            boxShadow: '0 4px 10px rgba(11, 37, 69, 0.2)'
          }}
          title="Direct Google Form Registration"
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <ExternalLink size={18} />
        </a>
      </div>

    </div>
  );
}
