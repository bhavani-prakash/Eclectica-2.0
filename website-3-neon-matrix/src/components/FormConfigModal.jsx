import React, { useState } from 'react';
import { X, Check, Link2, Copy, Terminal, ExternalLink, RefreshCw } from 'lucide-react';
import { EVENTS } from '../data/eventsData';

export default function FormConfigModal({ isOpen, onClose, formLinks, onSaveLinks }) {
  const [links, setLinks] = useState({ ...formLinks });
  const [selectedEventId, setSelectedEventId] = useState(EVENTS[0].id);
  const [copied, setCopied] = useState(false);
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleLinkChange = (eventId, newUrl) => {
    setLinks(prev => ({
      ...prev,
      [eventId]: newUrl
    }));
  };

  const handleSaveAll = () => {
    onSaveLinks(links);
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 1200);
  };

  // Generate code snippet to paste into src/data/eventsData.js
  const generateCodeSnippet = () => {
    let snippet = 'export const EVENT_FORM_LINKS = {\n';
    Object.entries(links).forEach(([id, url]) => {
      snippet += `  "${id}": "${url}",\n`;
    });
    snippet += '};';
    return snippet;
  };

  const copyConfigSnippet = () => {
    navigator.clipboard.writeText(generateCodeSnippet());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const selectedEvent = EVENTS.find(e => e.id === selectedEventId) || EVENTS[0];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()} 
        style={{ maxWidth: '820px', padding: '2rem' }}
      >
        {/* Modal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid rgba(0, 245, 255, 0.25)', paddingBottom: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Terminal size={24} color="#00f5ff" />
            <div>
              <h3 className="font-matrix" style={{ fontSize: '1.45rem', color: '#ffffff' }}>
                MANAGE 8 INDIVIDUAL GOOGLE FORMS
              </h3>
              <div className="font-mono" style={{ fontSize: '0.75rem', color: '#fbbf24' }}>
                // EACH EVENT HAS ITS OWN DEDICATED REGISTRATION FORM
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
          >
            <X size={22} />
          </button>
        </div>

        <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
          Assign separate Google Form URLs to each of the 8 events below. Clicking <strong>Register</strong> on any event card will open its respective form.
        </p>

        {/* 8 Event Selector Tabs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {EVENTS.map((event) => {
            const isSelected = event.id === selectedEventId;
            return (
              <button
                key={event.id}
                onClick={() => setSelectedEventId(event.id)}
                style={{
                  background: isSelected ? 'rgba(0, 245, 255, 0.2)' : '#040815',
                  border: isSelected ? '1.5px solid #00f5ff' : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '6px',
                  padding: '0.5rem 0.75rem',
                  color: isSelected ? '#00f5ff' : '#94a3b8',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-matrix)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s'
                }}
              >
                <span>{event.title}</span>
                <span className="font-mono" style={{ fontSize: '0.65rem', color: '#fbbf24' }}>{event.eceSymbol.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Event Form Editor Box */}
        <div style={{
          background: '#040815',
          border: '1.5px solid #00f5ff',
          borderRadius: '10px',
          padding: '1.25rem',
          marginBottom: '1.5rem',
          boxShadow: '0 0 20px rgba(0, 245, 255, 0.15)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <span className="badge-amber-spark font-mono" style={{ marginRight: '0.5rem' }}>
                SELECTED PROTOCOL:
              </span>
              <strong style={{ color: '#ffffff', fontSize: '1.1rem', fontFamily: 'var(--font-matrix)' }}>
                {selectedEvent.title}
              </strong>
            </div>
            <a 
              href={links[selectedEvent.id] || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: '#00f5ff',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                background: 'rgba(0, 245, 255, 0.1)',
                padding: '0.25rem 0.6rem',
                borderRadius: '4px'
              }}
            >
              <span>Test This Form Link</span>
              <ExternalLink size={13} />
            </a>
          </div>

          <label className="font-mono" style={{ display: 'block', fontSize: '0.78rem', color: '#fbbf24', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
            &gt; GOOGLE FORM URL FOR {selectedEvent.title}:
          </label>
          <input 
            type="url"
            value={links[selectedEvent.id] || ''}
            onChange={(e) => handleLinkChange(selectedEvent.id, e.target.value)}
            placeholder={`https://docs.google.com/forms/d/e/.../viewform`}
            style={{
              width: '100%',
              background: '#02050e',
              border: '1px solid rgba(0, 245, 255, 0.5)',
              borderRadius: '6px',
              padding: '0.75rem 1rem',
              color: '#ffffff',
              fontSize: '0.9rem',
              outline: 'none',
              fontFamily: 'var(--font-mono)',
              marginBottom: '0.5rem'
            }}
          />
          <div className="font-mono" style={{ fontSize: '0.72rem', color: '#64748b' }}>
            Tip: You can paste your genuine Google Form URL for {selectedEvent.title} above.
          </div>
        </div>

        {/* Permanent Code Snippet Block */}
        <div style={{
          background: 'rgba(251, 191, 36, 0.08)',
          border: '1px solid rgba(251, 191, 36, 0.3)',
          borderRadius: '8px',
          padding: '1rem',
          marginBottom: '1.5rem',
          fontSize: '0.85rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
            <span className="font-mono" style={{ color: '#fbbf24', fontWeight: 700 }}>
              // PERMANENT CODE UPDATE (src/data/eventsData.js):
            </span>
            <button 
              onClick={copyConfigSnippet}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                padding: '0.25rem 0.65rem',
                borderRadius: '4px',
                fontSize: '0.75rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              {copied ? <Check size={13} color="#00f5ff" /> : <Copy size={13} />}
              <span>{copied ? 'Copied 8 Links!' : 'Copy All 8 Form Links'}</span>
            </button>
          </div>
          <p className="font-mono" style={{ color: '#94a3b8', margin: 0, fontSize: '0.78rem' }}>
            You can copy all 8 links above and paste directly into <code>src/data/eventsData.js</code> line 7.
          </p>
        </div>

        {/* Modal Buttons */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
          <button 
            onClick={onClose}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#cbd5e1',
              padding: '0.65rem 1.25rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontFamily: 'var(--font-matrix)'
            }}
          >
            DISCARD
          </button>
          <button 
            onClick={handleSaveAll}
            className="btn-amber-action"
            style={{ padding: '0.65rem 1.75rem' }}
          >
            {savedNotice ? '✓ APPLIED TO ALL 8 EVENTS!' : 'APPLY FORM LINKS'}
          </button>
        </div>

      </div>
    </div>
  );
}
