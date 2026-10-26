import React from 'react';
import { Mail, Phone, MapPin, Heart, ExternalLink, Zap } from 'lucide-react';
import { FEST_INFO } from '../data/eventsData';

export default function Footer() {
  return (
    <footer id="contact" style={{ background: '#030712', borderTop: '1px solid rgba(0, 240, 255, 0.2)', padding: '4rem 0 2rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
              <img 
                src="/eclectica-logo.jpg" 
                alt="ECLECTICA Crest Logo" 
                style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #f5b700' }}
              />
              <div>
                <div className="font-heading" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc' }}>
                  ECLECTICA <span style={{ color: '#f5b700' }}>2K26 II</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#00f0ff', letterSpacing: '0.06em' }}>
                  MITS DEEMED TO BE UNIVERSITY
                </div>
              </div>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              Organized with pride by the Department of Electronics & Communication Engineering. Empowering the next generation of hardware designers, embedded innovators, and systems engineers.
            </p>
            <div style={{ color: '#ffd700', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em' }}>
              EXPLORE • CREATE • INNOVATE
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading" style={{ fontSize: '1.15rem', color: '#00f0ff', marginBottom: '1rem' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', padding: 0 }}>
              <li><a href="#hero" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem' }}>Back to Top</a></li>
              <li><a href="#events" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem' }}>All 8 Flagship Events</a></li>
              <li><a href="#about" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem' }}>About ECE Department</a></li>
              <li><a href="#rules" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem' }}>Rules & Perks</a></li>
              <li><a href={FEST_INFO.defaultFormUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#ffd700', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>Google Registration Form ↗</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading" style={{ fontSize: '1.15rem', color: '#ffd700', marginBottom: '1rem' }}>
              Contact & Venue
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={18} color="#00f0ff" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span>Madanapalle Institute of Technology & Science (MITS), Post Box No: 14, Kadiri Road, Angallu, Madanapalle - 517325, Andhra Pradesh, India.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={16} color="#00f0ff" />
                <span>{FEST_INFO.contactEmail}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={16} color="#00f0ff" />
                <span>{FEST_INFO.contactPhone}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.82rem',
          color: '#64748b'
        }}>
          <div>
            © 2026 ECLECTICA 2K26 II. Department of Electronics & Communication Engineering, MITS.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#94a3b8' }}>
            <span>Theme: Cyber-Luxe Edition</span>
            <span>•</span>
            <span style={{ color: '#00f0ff' }}>Deployable on Vercel</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
