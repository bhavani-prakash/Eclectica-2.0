import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Trophy, Sparkles, ChevronDown, ExternalLink, ArrowRight, Zap, Edit3 } from 'lucide-react';
import { FEST_INFO } from '../data/eventsData';

export default function Hero({ onOpenFormEditor, currentFormUrl }) {
  // Countdown Timer to Symposium date
  const [timeLeft, setTimeLeft] = useState({ days: 18, hours: 14, minutes: 35, seconds: 40 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" style={{ position: 'relative', overflow: 'hidden', padding: '4rem 0 3.5rem 0' }}>
      {/* Decorative ambient background circuits */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '650px',
        height: '650px',
        background: 'radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, rgba(245, 183, 0, 0.08) 35%, transparent 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        
        {/* Top Department Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
          <span className="badge-cyan">
            <Zap size={14} /> MITS DEEMED TO BE UNIVERSITY
          </span>
          <span className="badge-gold">
            ECE DEPARTMENT
          </span>
        </div>

        {/* Logo Display with Cyber-Luxe Ring */}
        <div style={{ margin: '0 auto 1.5rem auto', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            position: 'relative',
            padding: '8px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #00f0ff 0%, #d4af37 50%, #f5b700 100%)',
            boxShadow: '0 0 35px rgba(0, 240, 255, 0.35), 0 0 50px rgba(245, 183, 0, 0.2)'
          }}>
            <img 
              src="/eclectica-logo.jpg" 
              alt="ECLECTICA 2K26 II Official Logo" 
              style={{
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                objectFit: 'cover',
                display: 'block',
                border: '3px solid #050b18'
              }}
            />
          </div>
        </div>

        {/* Main Festival Title */}
        <h1 className="font-heading" style={{ fontSize: 'clamp(2.5rem, 6.5vw, 4.6rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: '0.6rem' }}>
          <span className="cyan-gradient-text">ECLECTICA </span>
          <span className="gold-gradient-text">2K26 II</span>
        </h1>

        {/* Roman Digit Note & Motto */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.6rem',
          fontSize: 'clamp(0.95rem, 2vw, 1.25rem)',
          fontWeight: 700,
          color: '#ffd700',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '1rem',
          fontFamily: 'var(--font-heading)'
        }}>
          <span>EXPLORE</span>
          <span style={{ color: '#00f0ff' }}>•</span>
          <span>CREATE</span>
          <span style={{ color: '#00f0ff' }}>•</span>
          <span>INNOVATE</span>
        </div>

        <p style={{
          maxWidth: '680px',
          margin: '0 auto 1.75rem auto',
          fontSize: '1.05rem',
          color: '#cbd5e1',
          lineHeight: 1.65
        }}>
          Join South India's premier Electronics & Communication Engineering National Symposium. 
          Ignite your competitive spark across 8 flagship contests spanning circuit mastery, PCB CAD, embedded IoT, programming, and ideation.
        </p>

        {/* Event Quick Info Pills */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2.25rem',
          fontSize: '0.92rem'
        }}>
          <div style={{
            background: 'rgba(10, 22, 44, 0.7)',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            padding: '0.55rem 1.1rem',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#f8fafc'
          }}>
            <Calendar size={18} color="#00f0ff" />
            <span>March 27 & 28, 2026</span>
          </div>

          <div style={{
            background: 'rgba(10, 22, 44, 0.7)',
            border: '1px solid rgba(245, 183, 0, 0.25)',
            padding: '0.55rem 1.1rem',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#f8fafc'
          }}>
            <MapPin size={18} color="#f5b700" />
            <span>MITS Campus, ECE Dept Labs</span>
          </div>

          <div style={{
            background: 'rgba(10, 22, 44, 0.7)',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            padding: '0.55rem 1.1rem',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#f8fafc'
          }}>
            <Trophy size={18} color="#00f0ff" />
            <span>Cash Prizes + Merit Awards</span>
          </div>
        </div>

        {/* CTA Action Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          <a href="#events" className="btn-gold" style={{ padding: '0.85rem 2rem', fontSize: '1.1rem' }}>
            <span>Explore 8 Events</span>
            <ArrowRight size={18} />
          </a>
          <a 
            href={currentFormUrl || FEST_INFO.defaultFormUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-outline-cyan" 
            style={{ padding: '0.85rem 1.8rem', fontSize: '1.05rem' }}
          >
            <span>Register via Google Form</span>
            <ExternalLink size={17} />
          </a>
          <button 
            onClick={onOpenFormEditor}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px dashed rgba(245, 183, 0, 0.5)',
              color: '#ffd700',
              padding: '0.85rem 1.25rem',
              borderRadius: '10px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.9rem',
              fontWeight: 600,
              fontFamily: 'var(--font-heading)'
            }}
            title="Click to change your Google Form registration link"
          >
            <Edit3 size={15} />
            <span>Edit Form URL</span>
          </button>
        </div>

        {/* Live Countdown Timer */}
        <div style={{
          maxWidth: '560px',
          margin: '0 auto',
          background: 'rgba(10, 22, 44, 0.9)',
          border: '1px solid rgba(0, 240, 255, 0.3)',
          borderRadius: '16px',
          padding: '1.25rem 1.5rem',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)'
        }}>
          <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#94a3b8', marginBottom: '0.75rem', fontWeight: 600 }}>
            Symposium Countdown
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MINUTES', value: timeLeft.minutes },
              { label: 'SECONDS', value: timeLeft.seconds }
            ].map((unit, idx) => (
              <div key={idx} style={{
                background: '#050b18',
                borderRadius: '10px',
                padding: '0.65rem 0.25rem',
                border: '1px solid rgba(245, 183, 0, 0.25)'
              }}>
                <div className="font-heading" style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1 }}>
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div style={{ fontSize: '0.68rem', color: '#00f0ff', fontWeight: 600, marginTop: '0.35rem', letterSpacing: '0.05em' }}>
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
