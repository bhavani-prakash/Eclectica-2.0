import React from 'react';
import { Award, Compass, Cpu, ShieldCheck } from 'lucide-react';
import { FEST_INFO } from '../data/eventsData';

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: '5rem 0', background: '#f1f5f9', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="badge-royal-gold" style={{ marginBottom: '0.75rem' }}>
            LEGACY OF ACADEMIC DISTINCTION
          </span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: '#0b2545', marginBottom: '0.75rem' }}>
            The Tradition of <span className="gold-text-prestige">ECLECTICA</span>
          </h2>
          <p style={{ maxWidth: '680px', margin: '0 auto', color: '#64748b', fontSize: '1.02rem' }}>
            Fostering research curiosity, engineering precision, and intercollegiate collaboration under the auspices of the Department of ECE, MITS.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
          
          <div className="royal-card" style={{ padding: '2rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0b2545', marginBottom: '1.25rem' }}>
              <Compass size={26} />
            </div>
            <h3 className="font-serif" style={{ fontSize: '1.4rem', color: '#0b2545', marginBottom: '0.6rem' }}>
              Explore Horizons
            </h3>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Engage with state-of-the-art developments across Wireless Communications, VLSI architectures, Signal Processing, and Edge computing systems.
            </p>
          </div>

          <div className="royal-card" style={{ padding: '2rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#fffbeb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b8860b', marginBottom: '1.25rem' }}>
              <Cpu size={26} />
            </div>
            <h3 className="font-serif" style={{ fontSize: '1.4rem', color: '#b8860b', marginBottom: '0.6rem' }}>
              Create Solutions
            </h3>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Synthesize your theoretical knowledge into routed PCB layouts in KiCad, breadboard circuit builds, and structured multi-language software code.
            </p>
          </div>

          <div className="royal-card" style={{ padding: '2rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0b2545', marginBottom: '1.25rem' }}>
              <Award size={26} />
            </div>
            <h3 className="font-serif" style={{ fontSize: '1.4rem', color: '#0b2545', marginBottom: '0.6rem' }}>
              Innovate with Impact
            </h3>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Deliver persuasive technical debates, defend research posters before scholarly reviewers, and earn coveted rolling trophies and accolades.
            </p>
          </div>

        </div>

        {/* Guidelines Banner */}
        <div id="rules" className="royal-card" style={{ padding: '2.5rem', background: '#ffffff', border: '1.5px solid rgba(197, 155, 39, 0.4)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <span className="badge-royal-gold" style={{ marginBottom: '0.75rem' }}>DELEGATE CODE OF CONDUCT</span>
              <h3 className="font-serif" style={{ fontSize: '1.8rem', color: '#0b2545', marginBottom: '1rem' }}>
                Symposium Regulations
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', color: '#334155', fontSize: '0.95rem', padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={18} color="#b8860b" />
                  <span>College identification card is mandatory for campus entry and certificate verification.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={18} color="#b8860b" />
                  <span>Participants may register for multiple non-overlapping events.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={18} color="#b8860b" />
                  <span>Certificates of Participation will be awarded to all registered attendees.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={18} color="#b8860b" />
                  <span>Symposium kits, refreshments, and lunch will be provided to participants.</span>
                </li>
              </ul>
            </div>

            <div style={{
              background: '#fffbeb',
              borderRadius: '16px',
              padding: '1.75rem',
              border: '1.5px solid rgba(197, 155, 39, 0.35)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.85rem', color: '#b8860b', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                Join The Delegation
              </div>
              <div className="font-serif" style={{ fontSize: '1.5rem', color: '#0b2545', fontWeight: 800, marginBottom: '0.85rem' }}>
                Enroll Your Team Today
              </div>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                Quick online entry via our Google Form. Early registration guarantees event kits.
              </p>
              <a 
                href={FEST_INFO.defaultFormUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-royal-gold" 
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Open Google Form
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
