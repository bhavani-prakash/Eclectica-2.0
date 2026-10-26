import React from 'react';
import { Mail, Phone, MapPin, Heart, Sparkles, Award } from 'lucide-react';
import { FEST_INFO } from '../data/eventsData';

export default function Footer() {
  return (
    <footer id="contact" style={{ background: '#030712', borderTop: '1px solid rgba(0, 240, 255, 0.25)', padding: '4.5rem 0 2rem 0', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          
          {/* Brand Info with Team ECLECTICA Spotlight */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
              <img 
                src="/eclectica-logo.jpg" 
                alt="ECLECTICA Crest Logo" 
                style={{ width: '50px', height: '50px', borderRadius: '50%', border: '2px solid #f5b700', boxShadow: '0 0 15px rgba(245, 183, 0, 0.3)' }}
              />
              <div>
                <div className="font-heading" style={{ fontSize: '1.45rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1.1 }}>
                  ECLECTICA <span style={{ color: '#f5b700' }}>2K26 II</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#00f0ff', letterSpacing: '0.06em', fontWeight: 600 }}>
                  NOVEMBER 11 & 12, 2026
                </div>
              </div>
            </div>
            
            {/* Team ECLECTICA Highlight Badge */}
            <div style={{
              background: 'rgba(245, 183, 0, 0.1)',
              border: '1px solid rgba(245, 183, 0, 0.35)',
              borderRadius: '8px',
              padding: '0.5rem 0.85rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              color: '#ffd700',
              fontWeight: 700,
              fontSize: '0.85rem',
              marginBottom: '1rem',
              fontFamily: 'var(--font-heading)'
            }}>
              <Sparkles size={15} color="#00f0ff" />
              <span>POWERED BY TEAM ECLECTICA</span>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              Organized by <strong>Team ECLECTICA</strong> and the faculty of the Department of Electronics & Communication Engineering. Celebrating hardware innovation, circuit design, and future technology leaders.
            </p>
            <div style={{ color: '#ffd700', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em' }}>
              EXPLORE • CREATE • INNOVATE
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading" style={{ fontSize: '1.15rem', color: '#00f0ff', marginBottom: '1rem' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', padding: 0 }}>
              <li><a href="#hero" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}>Back to Top</a></li>
              <li><a href="#events" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}>All 8 Flagship Events</a></li>
              <li><a href="#about" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}>About ECE Department</a></li>
              <li><a href="#rules" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}>Rules & Perks</a></li>
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
                <span>Madanapalle Institute of Technology & Science (MITS Deemed to be University), Post Box No: 14, Kadiri Road, Angallu, Madanapalle - 517325, Andhra Pradesh, India.</span>
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

        {/* Bottom Bar with Team ECLECTICA Tribute */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.85rem',
          color: '#94a3b8'
        }}>
          <div>
            © 2026 <strong style={{ color: '#ffd700' }}>Team ECLECTICA</strong>. Department of Electronics & Communication Engineering, MITS.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1' }}>
            <span>Crafted by <strong style={{ color: '#00f0ff' }}>Team ECLECTICA</strong></span>
            <span>•</span>
            <span style={{ color: '#f5b700' }}>November 11 & 12, 2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
