import React, { useState } from 'react';
import { Sparkles, Calendar, Menu, X, ExternalLink } from 'lucide-react';
import { FEST_INFO } from '../data/eventsData';

export default function Navbar({ onFormConfigOpen }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#050b18]/90 backdrop-blur-md border-b border-[#00f0ff]/20">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem' }}>
        {/* Brand / Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
          <div style={{ position: 'relative' }}>
            <img 
              src="/eclectica-logo.jpg" 
              alt="ECLECTICA Logo" 
              style={{ width: '46px', height: '46px', borderRadius: '50%', border: '2px solid #f5b700', objectFit: 'cover' }}
            />
          </div>
          <div>
            <div className="font-heading" style={{ fontSize: '1.35rem', fontWeight: 800, lineHeight: 1.1, color: '#ffffff' }}>
              ECLECTICA <span style={{ color: '#f5b700' }}>2K26 II</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: '#00f0ff', letterSpacing: '0.08em', fontWeight: 600 }}>
              DEPT OF ECE • MITS
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          <a href="#events" style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.2s' }}
             onMouseEnter={(e) => e.target.style.color = '#00f0ff'}
             onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}>
            Events (8)
          </a>
          <a href="#about" style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.2s' }}
             onMouseEnter={(e) => e.target.style.color = '#00f0ff'}
             onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}>
            About Fest
          </a>
          <a href="#rules" style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.2s' }}
             onMouseEnter={(e) => e.target.style.color = '#00f0ff'}
             onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}>
            Guidelines
          </a>
          <a href="#contact" style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.2s' }}
             onMouseEnter={(e) => e.target.style.color = '#00f0ff'}
             onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}>
            Contact
          </a>

          {/* Direct Google Form Button */}
          <a 
            href={FEST_INFO.defaultFormUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-gold" 
            style={{ padding: '0.55rem 1.25rem', fontSize: '0.95rem' }}
          >
            <span>Register Now</span>
            <ExternalLink size={16} />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'transparent', border: '1px solid #00f0ff44', color: '#00f0ff', padding: '0.5rem', borderRadius: '8px', cursor: 'pointer', display: 'none' }}
          className="mobile-btn"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{ background: '#071224', borderBottom: '1px solid #00f0ff33', padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a href="#events" onClick={() => setMobileMenuOpen(false)} style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: 600 }}>Explore Events</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: 600 }}>About ECE Department</a>
          <a href="#rules" onClick={() => setMobileMenuOpen(false)} style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: 600 }}>Guidelines & Perks</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: 600 }}>Contact Coordinators</a>
          <a 
            href={FEST_INFO.defaultFormUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-gold"
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
