import React from 'react';
import { Award, Calendar, MapPin, ChevronRight, ExternalLink, ShieldCheck, Edit3 } from 'lucide-react';
import { FEST_INFO } from '../data/eventsData';

export default function Hero({ onOpenFormEditor, currentFormUrl }) {
  return (
    <section id="hero" style={{ padding: '4.5rem 0 3.5rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        
        {/* Top University Seal Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
          <span className="badge-royal-navy">
            MADANAPALLE INSTITUTE OF TECHNOLOGY & SCIENCE
          </span>
          <span className="badge-royal-gold">
            DEPT OF ECE
          </span>
        </div>

        {/* Center Seal Badge with Royal Golden Laurel Ring */}
        <div style={{ margin: '0 auto 1.5rem auto', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            padding: '10px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #dfb15b 0%, #b8860b 50%, #dfb15b 100%)',
            boxShadow: '0 12px 36px -8px rgba(184, 134, 11, 0.45)'
          }}>
            <img 
              src="/eclectica-logo.jpg" 
              alt="ECLECTICA 2K26 II Official Crest" 
              style={{
                width: '170px',
                height: '170px',
                borderRadius: '50%',
                objectFit: 'cover',
                display: 'block',
                border: '4px solid #ffffff'
              }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-serif" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', fontWeight: 900, color: '#0b2545', lineHeight: 1.1, marginBottom: '0.5rem' }}>
          ECLECTICA <span className="gold-text-prestige">2K26 II</span>
        </h1>

        {/* Motto Ribbon */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.75rem',
          fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)',
          fontWeight: 800,
          color: '#b8860b',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          marginBottom: '1.25rem',
          fontFamily: 'var(--font-serif)'
        }}>
          <span>EXPLORE</span>
          <span style={{ color: '#0b2545' }}>•</span>
          <span>CREATE</span>
          <span style={{ color: '#0b2545' }}>•</span>
          <span>INNOVATE</span>
        </div>

        <p style={{
          maxWidth: '720px',
          margin: '0 auto 2rem auto',
          fontSize: '1.08rem',
          color: '#475569',
          lineHeight: 1.7
        }}>
          Welcome to the 2nd Edition of our Annual National Level Technical Symposium. Convening aspiring electronics engineers, circuit innovators, and researchers for two days of distinguished technical discourse and competitive excellence.
        </p>

        {/* Symposium Key Dates & Location */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2.5rem'
        }}>
          <div style={{
            background: '#ffffff',
            border: '1px solid rgba(197, 155, 39, 0.35)',
            padding: '0.65rem 1.25rem',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
          }}>
            <Calendar size={18} color="#b8860b" />
            <span style={{ fontWeight: 700, color: '#0b2545', fontSize: '0.95rem' }}>March 27 & 28, 2026</span>
          </div>

          <div style={{
            background: '#ffffff',
            border: '1px solid rgba(11, 37, 69, 0.15)',
            padding: '0.65rem 1.25rem',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
          }}>
            <MapPin size={18} color="#0b2545" />
            <span style={{ fontWeight: 700, color: '#0b2545', fontSize: '0.95rem' }}>MITS Deemed to be University Campus</span>
          </div>

          <div style={{
            background: '#ffffff',
            border: '1px solid rgba(197, 155, 39, 0.35)',
            padding: '0.65rem 1.25rem',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
          }}>
            <Award size={18} color="#b8860b" />
            <span style={{ fontWeight: 700, color: '#0b2545', fontSize: '0.95rem' }}>National Merit Recognition & Shields</span>
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
          <a href="#events" className="btn-royal-primary" style={{ padding: '0.85rem 2rem', fontSize: '1.05rem' }}>
            <span>Explore 8 Academic Contests</span>
            <ChevronRight size={18} />
          </a>
          <a 
            href={currentFormUrl || FEST_INFO.defaultFormUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-royal-gold"
            style={{ padding: '0.85rem 2rem', fontSize: '1.05rem' }}
          >
            <span>Proceed to Google Form Registration</span>
            <ExternalLink size={17} />
          </a>
          <button 
            onClick={onOpenFormEditor}
            style={{
              background: '#f8fafc',
              border: '1.5px dashed #b8860b',
              color: '#92400e',
              padding: '0.85rem 1.25rem',
              borderRadius: '10px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.92rem',
              fontWeight: 700,
              fontFamily: 'var(--font-serif)'
            }}
            title="Edit the Google Form URL"
          >
            <Edit3 size={15} />
            <span>Edit Form Link</span>
          </button>
        </div>

      </div>
    </section>
  );
}
