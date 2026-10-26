import React, { useState } from 'react';
import { Menu, X, ExternalLink, Award } from 'lucide-react';
import { FEST_INFO } from '../data/eventsData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#c59b27]/30 shadow-sm">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.75rem' }}>
        
        {/* Brand Crest */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
          <img 
            src="/eclectica-logo.jpg" 
            alt="ECLECTICA Crest Seal" 
            style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #b8860b', objectFit: 'cover', boxShadow: '0 2px 8px rgba(184, 134, 11, 0.25)' }}
          />
          <div>
            <div className="font-serif" style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0b2545', lineHeight: 1.1 }}>
              ECLECTICA <span style={{ color: '#b8860b' }}>2K26 II</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: '#64748b', letterSpacing: '0.06em', fontWeight: 700 }}>
              MITS DEEMED TO BE UNIVERSITY • DEPT OF ECE
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          <a href="#events" style={{ color: '#334155', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}
             onMouseEnter={(e) => e.target.style.color = '#b8860b'}
             onMouseLeave={(e) => e.target.style.color = '#334155'}>
            Events Directory
          </a>
          <a href="#about" style={{ color: '#334155', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}
             onMouseEnter={(e) => e.target.style.color = '#b8860b'}
             onMouseLeave={(e) => e.target.style.color = '#334155'}>
            About Department
          </a>
          <a href="#rules" style={{ color: '#334155', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}
             onMouseEnter={(e) => e.target.style.color = '#b8860b'}
             onMouseLeave={(e) => e.target.style.color = '#334155'}>
            Protocols & Perks
          </a>
          <a href="#contact" style={{ color: '#334155', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}
             onMouseEnter={(e) => e.target.style.color = '#b8860b'}
             onMouseLeave={(e) => e.target.style.color = '#334155'}>
            Contact & Venue
          </a>

          {/* Primary Action Button */}
          <a 
            href={FEST_INFO.defaultFormUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-royal-gold"
            style={{ padding: '0.6rem 1.4rem', fontSize: '0.92rem' }}
          >
            <span>Register Now</span>
            <ExternalLink size={15} />
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', color: '#0b2545', padding: '0.5rem', borderRadius: '8px', cursor: 'pointer', display: 'none' }}
          className="mobile-btn"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', boxShadow: '0 8px 16px rgba(0,0,0,0.06)' }}>
          <a href="#events" onClick={() => setMobileMenuOpen(false)} style={{ color: '#0b2545', textDecoration: 'none', fontWeight: 600 }}>Events Directory</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} style={{ color: '#0b2545', textDecoration: 'none', fontWeight: 600 }}>About Department</a>
          <a href="#rules" onClick={() => setMobileMenuOpen(false)} style={{ color: '#0b2545', textDecoration: 'none', fontWeight: 600 }}>Protocols & Perks</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ color: '#0b2545', textDecoration: 'none', fontWeight: 600 }}>Contact & Venue</a>
          <a 
            href={FEST_INFO.defaultFormUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-royal-gold"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Register via Google Form
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
