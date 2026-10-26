import React from 'react';
import { Cpu, Award, Compass, ShieldCheck, ArrowRight } from 'lucide-react';
import { FEST_INFO } from '../data/eventsData';

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: '5rem 0', background: 'rgba(5, 11, 24, 0.6)', borderTop: '1px solid rgba(0, 240, 255, 0.15)', position: 'relative', zIndex: 1 }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="badge-cyan" style={{ marginBottom: '0.75rem' }}>
            ACADEMIC EXCELLENCE & LEGACY
          </span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: '#f8fafc', marginBottom: '0.75rem' }}>
            About <span className="gold-gradient-text">ECLECTICA 2K26 II</span>
          </h2>
          <p style={{ maxWidth: '680px', margin: '0 auto', color: '#94a3b8', fontSize: '1.02rem' }}>
            Organized by the Department of Electronics & Communication Engineering at Madanapalle Institute of Technology & Science (MITS Deemed to be University).
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
          
          <div className="cyber-card" style={{ padding: '2rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(0, 240, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00f0ff', marginBottom: '1.25rem' }}>
              <Compass size={26} />
            </div>
            <h3 className="font-heading" style={{ fontSize: '1.4rem', color: '#ffd700', marginBottom: '0.6rem' }}>
              Explore
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Venture into emerging engineering horizons—from embedded IoT architectures and RF communication systems to advanced VLSI microchips and artificial intelligence at the edge.
            </p>
          </div>

          <div className="cyber-card" style={{ padding: '2rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(245, 183, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f5b700', marginBottom: '1.25rem' }}>
              <Cpu size={26} />
            </div>
            <h3 className="font-heading" style={{ fontSize: '1.4rem', color: '#00f0ff', marginBottom: '0.6rem' }}>
              Create
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Transform conceptual circuit schematics and algorithms into tangible breadboard prototypes, routed PCB layouts, and debugged multi-tier software applications.
            </p>
          </div>

          <div className="cyber-card" style={{ padding: '2rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(0, 240, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00f0ff', marginBottom: '1.25rem' }}>
              <Award size={26} />
            </div>
            <h3 className="font-heading" style={{ fontSize: '1.4rem', color: '#ffd700', marginBottom: '0.6rem' }}>
              Innovate
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Present novel solutions for societal problems, defend technical research posters before distinguished jury members, and win prestigious rolling trophies and cash prizes.
            </p>
          </div>

        </div>

        {/* Fest Guidelines / Rules Overview Banner */}
        <div id="rules" className="cyber-card" style={{ padding: '2.5rem', background: 'linear-gradient(135deg, rgba(10, 22, 44, 0.95) 0%, rgba(5, 11, 24, 0.95) 100%)', border: '1px solid rgba(245, 183, 0, 0.3)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <span className="badge-gold" style={{ marginBottom: '0.75rem' }}>SYMPOSIUM GUIDELINES</span>
              <h3 className="font-heading" style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '1rem' }}>
                General Participation Protocols
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', color: '#cbd5e1', fontSize: '0.95rem', padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={18} color="#00f0ff" />
                  <span>Valid College Identity Card is mandatory for on-campus entry.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={18} color="#00f0ff" />
                  <span>Participants can register for multiple non-overlapping events.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={18} color="#00f0ff" />
                  <span>Certificates of Participation will be awarded to all attendees.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={18} color="#00f0ff" />
                  <span>Refreshments & official symposium kits provided at registration desk.</span>
                </li>
              </ul>
            </div>

            <div style={{
              background: 'rgba(5, 11, 24, 0.7)',
              borderRadius: '16px',
              padding: '1.75rem',
              border: '1px solid rgba(0, 240, 255, 0.25)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.9rem', color: '#00f0ff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                Separate Entry Per Event
              </div>
              <div className="font-heading" style={{ fontSize: '1.6rem', color: '#ffd700', fontWeight: 800, marginBottom: '0.75rem' }}>
                Ready to compete?
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
                Each event features its own Google Form. Browse the events list above, explore the rules, and submit your registration.
              </p>
              <a 
                href="#events" 
                className="btn-gold" 
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Browse 8 Events & Register</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
