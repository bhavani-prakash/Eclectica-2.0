import React from 'react';
import { Users, Clock, ArrowRight, ExternalLink, HelpCircle, Cpu, Sparkles, Zap, Terminal, ShieldCheck, FileText } from 'lucide-react';

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

export default function EventCard({ event, onExplore, onQuickRegister }) {
  const IconComponent = ICON_MAP[event.icon] || Cpu;

  return (
    <div className="cyber-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
      
      {/* Card Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
        <div style={{
          width: '52px',
          height: '52px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15) 0%, rgba(245, 183, 0, 0.1) 100%)',
          border: '1px solid rgba(0, 240, 255, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#00f0ff'
        }}>
          <IconComponent size={26} />
        </div>
        <span className="badge-gold">
          {event.badge}
        </span>
      </div>

      {/* Title & Subtitle */}
      <h3 className="font-heading" style={{ fontSize: '1.55rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.35rem' }}>
        {event.title}
      </h3>
      <div style={{ fontSize: '0.85rem', color: '#00f0ff', fontWeight: 600, marginBottom: '0.85rem' }}>
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
          <span>{event.roundsCount} {event.roundsCount === 1 ? 'Round' : 'Rounds'}</span>
        </div>
      </div>

      {/* Action Buttons: Explore Rules (opens popup) & Quick Register */}
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
