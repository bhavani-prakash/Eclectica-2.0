import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Trophy, ArrowRight, Zap } from 'lucide-react';
import { FEST_INFO } from '../data/eventsData';

// Target: November 11, 2026 09:00 AM IST (UTC+5:30)
const TARGET_DATE = new Date('2026-11-11T09:00:00+05:30');

function getTimeLeft() {
  const diff = TARGET_DATE - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days:    Math.floor(totalSeconds / 86400),
    hours:   Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" style={{ padding: '1.2rem 0 3rem 0', position: 'relative', zIndex: 1 }}>
      <div className="container" style={{ textAlign: 'center' }}>
        
        {/* Top Department Badges */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span className="badge-cyan">
            <Zap size={14} /> MITS DEEMED TO BE UNIVERSITY
          </span>
          <span className="badge-gold">
            DEPARTMENT OF ECE
          </span>
        </div>

        {/* ── Logo + Title overlay block ─────────────────── */}
        <div
          className="hero-overlay-block"
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '200px',
            marginBottom: '0.6rem',
          }}
        >

          {/* Crest Logo — stays at its natural position */}
          <div style={{
            position: 'relative',
            padding: '8px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #00f0ff 0%, #d4af37 50%, #f5b700 100%)',
            boxShadow: '0 0 35px rgba(0, 240, 255, 0.35), 0 0 50px rgba(245, 183, 0, 0.2)',
            marginTop: '24px',
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
                border: '3px solid #050b18',
              }}
            />
          </div>

          {/* Title PNG — absolute, floats over the logo */}
          <div
            className="hero-title-img-wrap"
            style={{
              position: 'absolute',
              top: '60%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100%',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          >
            <img
              src="/eclectica-title.png"
              alt="ECLECTICA-2K26 II"
              style={{
                maxWidth: 'clamp(280px, 72vw, 700px)',
                width: '100%',
                height: 'auto',
                display: 'block',
                margin: '0 auto',
                filter: 'drop-shadow(0 0 22px rgba(245, 183, 0, 0.6)) drop-shadow(0 0 50px rgba(245, 183, 0, 0.25))',
              }}
            />
          </div>

        </div>

        {/* Motto */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.6rem',
          fontSize: 'clamp(0.95rem, 2vw, 1.25rem)',
          fontWeight: 700,
          color: '#ffd700',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginTop: '7rem',
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
          A two Days National Level Technical Symposium organized by the Department of Electronics & Communication Engineering.
        </p>

        {/* Quick Symposium Meta Pills */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2.5rem',
          fontSize: '0.92rem'
        }}>
          <div style={{
            background: 'rgba(10, 22, 44, 0.75)',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            padding: '0.55rem 1.1rem',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#f8fafc'
          }}>
            <Calendar size={18} color="#00f0ff" />
            <span style={{ fontWeight: 600 }}>November 11 & 12, 2026</span>
          </div>

          <div style={{
            background: 'rgba(10, 22, 44, 0.75)',
            border: '1px solid rgba(245, 183, 0, 0.25)',
            padding: '0.55rem 1.1rem',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#f8fafc'
          }}>
            <MapPin size={18} color="#f5b700" />
            <span>MITS Campus</span>
          </div>

          <div style={{
            background: 'rgba(10, 22, 44, 0.75)',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            padding: '0.55rem 1.1rem',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#f8fafc'
          }}>
            <Trophy size={18} color="#00f0ff" />
            <span>Cash Prizes </span>
          </div>
        </div>

        {/* CTA: Button leads to Events */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          <a href="#events" className="btn-gold" style={{ padding: '0.85rem 2.5rem', fontSize: '1.15rem' }}>
            <span>Explore 8 Events &amp; Register</span>
            <ArrowRight size={18} />
          </a>
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
            Symposium Countdown • November 11 & 12, 2026
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

      {/* ── Mobile-only tweaks (≤ 768px) ───────────────────
           Desktop layout is untouched.
           On mobile: push title image down and cut gap to motto. */}
      <style>{`
        @media (max-width: 768px) {
          /* Move title image lower so it doesn't overlap the logo awkwardly */
          .hero-title-img-wrap {
            top: 90% !important;
          }
          /* Shrink the overlay block's bottom margin → closes gap to motto */
          .hero-overlay-block {
            margin-bottom: -0.6rem !important;
          }
        }
      `}</style>

    </section>
  );
}
