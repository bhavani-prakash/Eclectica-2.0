import React, { useEffect, useState } from 'react';

const LETTERS = ['E', 'C', 'L', 'E', 'C', 'T', 'I', 'C', 'A'];

export default function IntroAnimation({ onComplete }) {
  const [phase, setPhase] = useState('letters');   // letters → subtitle → flash → done

  useEffect(() => {
    // Phase timeline
    const t1 = setTimeout(() => setPhase('subtitle'), 1400); // subtitle appears
    const t2 = setTimeout(() => setPhase('flash'),    2600); // flash wipe starts
    const t3 = setTimeout(() => onComplete(),         3200); // hand off to main site
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase === 'done') return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#020810',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
      transition: phase === 'flash' ? 'opacity 0.55s ease' : 'none',
      opacity: phase === 'flash' ? 0 : 1,
    }}>

      {/* Ambient glow blobs */}
      <div style={{ position: 'absolute', top: '20%', left: '10%',  width: 340, height: 340, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,240,255,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '15%', right: '8%', width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,183,0,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Horizontal scan line */}
      <div style={{
        position: 'absolute', left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0,240,255,0.5), transparent)',
        animation: 'scanLine 2s linear infinite', pointerEvents: 'none'
      }} />

      {/* Main letter row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(4px, 1.5vw, 14px)', marginBottom: '1.2rem' }}>
        {LETTERS.map((letter, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: 'clamp(3rem, 10vw, 7.5rem)',
              fontWeight: 900,
              color: '#f8fafc',
              letterSpacing: '0.02em',
              lineHeight: 1,
              display: 'inline-block',
              textShadow: '0 0 40px rgba(0,240,255,0.8), 0 0 80px rgba(0,240,255,0.4)',
              animation: `letterDrop 0.5s cubic-bezier(0.34,1.56,0.64,1) both`,
              animationDelay: `${i * 0.1}s`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Underline swipe */}
      <div style={{
        height: '3px',
        background: 'linear-gradient(90deg, transparent, #00f0ff, #ffd700, #00f0ff, transparent)',
        borderRadius: '2px',
        animation: 'lineGrow 0.7s ease 1s both',
        width: 'clamp(200px, 60vw, 600px)',
        boxShadow: '0 0 18px rgba(0,240,255,0.6)',
        marginBottom: '1.5rem',
      }} />

      {/* Subtitle — fades in at phase 'subtitle' */}
      <div style={{
        fontFamily: "'Rajdhani', sans-serif",
        fontSize: 'clamp(0.85rem, 2.5vw, 1.3rem)',
        fontWeight: 700,
        letterSpacing: '0.35em',
        textTransform: 'uppercase',
        color: '#ffd700',
        opacity: phase === 'letters' ? 0 : 1,
        transform: phase === 'letters' ? 'translateY(12px)' : 'translateY(0)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        textShadow: '0 0 20px rgba(245,183,0,0.6)',
      }}>
        2K26&nbsp;&nbsp;II&nbsp;&nbsp;•&nbsp;&nbsp;National Symposium
      </div>

      {/* Bottom line */}
      <div style={{
        position: 'absolute', bottom: '12%',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: '0.8rem', color: 'rgba(148,163,184,0.5)',
        letterSpacing: '0.15em',
        opacity: phase === 'letters' ? 0 : 1,
        transition: 'opacity 0.8s ease 0.3s',
      }}>
        DEPT OF ECE &nbsp;•&nbsp; MITS DEEMED TO BE UNIVERSITY
      </div>

      {/* CSS keyframes injected inline */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700;900&display=swap');

        @keyframes letterDrop {
          from { opacity: 0; transform: translateY(-60px) scale(0.6); filter: blur(8px); }
          to   { opacity: 1; transform: translateY(0)     scale(1);   filter: blur(0);  }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }
        @keyframes scanLine {
          0%   { top: -2px; }
          100% { top: 100%; }
        }
      `}</style>
    </div>
  );
}
