import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Award } from 'lucide-react';
import { FEST_INFO } from '../data/eventsData';

export default function Footer() {
  return (
    <footer id="contact" style={{ background: '#07162c', color: '#f8fafc', padding: '4.5rem 0 2rem 0', borderTop: '3px solid #b8860b' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
              <img 
                src="/eclectica-logo.jpg" 
                alt="ECLECTICA Seal" 
                style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #dfb15b' }}
              />
              <div>
                <div className="font-serif" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fce18b' }}>
                  ECLECTICA <span style={{ color: '#ffffff' }}>2K26 II</span>
                </div>
                <div style={{ fontSize: '0.74rem', color: '#94a3b8', letterSpacing: '0.06em' }}>
                  DEPT OF ELECTRONICS & COMMUNICATION
                </div>
              </div>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              A national academic celebration of engineering ingenuity, hosted biennially by the Department of ECE at Madanapalle Institute of Technology & Science.
            </p>
            <div style={{ color: '#dfb15b', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              EXPLORE • CREATE • INNOVATE
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif" style={{ fontSize: '1.15rem', color: '#dfb15b', marginBottom: '1rem' }}>
              Symposium Portals
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', padding: 0 }}>
              <li><a href="#hero" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem' }}>Symposium Home</a></li>
              <li><a href="#events" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem' }}>All 8 Academic Contests</a></li>
              <li><a href="#about" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem' }}>About Department of ECE</a></li>
              <li><a href="#rules" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem' }}>Code of Conduct & Guidelines</a></li>
              <li><a href={FEST_INFO.defaultFormUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#fce18b', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>Official Google Form ↗</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif" style={{ fontSize: '1.15rem', color: '#dfb15b', marginBottom: '1rem' }}>
              Secretariat & Venue
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={18} color="#dfb15b" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span>Madanapalle Institute of Technology & Science (MITS Deemed to be University), Post Box No: 14, Kadiri Road, Angallu, Madanapalle - 517325, A.P., India.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={16} color="#dfb15b" />
                <span>{FEST_INFO.contactEmail}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={16} color="#dfb15b" />
                <span>{FEST_INFO.contactPhone}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.82rem',
          color: '#94a3b8'
        }}>
          <div>
            © 2026 ECLECTICA 2K26 II. Department of Electronics & Communication Engineering, MITS.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#cbd5e1' }}>
            <span>Theme: Royal Academic & Platinum Gold Edition</span>
            <span>•</span>
            <span style={{ color: '#dfb15b' }}>Ready for Vercel</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
