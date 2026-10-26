import React, { useState } from 'react';
import { X, Check, Link2, Copy } from 'lucide-react';

export default function FormConfigModal({ isOpen, onClose, currentUrl, onSaveUrl }) {
  const [inputUrl, setInputUrl] = useState(currentUrl);
  const [savedNotice, setSavedNotice] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    onSaveUrl(inputUrl);
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 1200);
  };

  const copyConfigSnippet = () => {
    navigator.clipboard.writeText(`export const DEFAULT_GOOGLE_FORM_URL = "${inputUrl}";`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()} 
        style={{ maxWidth: '560px', padding: '2rem' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Link2 size={24} color="#b8860b" />
            <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#0b2545', fontWeight: 800 }}>
              Google Form Link Configuration
            </h3>
          </div>
          <button 
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer' }}
          >
            <X size={20} />
          </button>
        </div>

        <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
          Enter your live Google Form URL below to test it immediately, or update the constant inside <code style={{ color: '#92400e', background: '#fffbeb', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>src/data/eventsData.js</code>.
        </p>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontSize: '0.8rem', color: '#0b2545', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.4rem' }}>
            Google Form Web Address:
          </label>
          <input 
            type="url"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="https://docs.google.com/forms/d/e/.../viewform"
            style={{
              width: '100%',
              background: '#ffffff',
              border: '1.5px solid #cbd5e1',
              borderRadius: '8px',
              padding: '0.75rem 1rem',
              color: '#0f172a',
              fontSize: '0.92rem',
              outline: 'none'
            }}
          />
        </div>

        <div style={{
          background: '#fffbeb',
          border: '1px solid rgba(197, 155, 39, 0.3)',
          borderRadius: '10px',
          padding: '1rem',
          marginBottom: '1.5rem',
          fontSize: '0.85rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
            <span style={{ color: '#92400e', fontWeight: 700 }}>Code Configuration File:</span>
            <button 
              onClick={copyConfigSnippet}
              style={{
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                color: '#0b2545',
                cursor: 'pointer',
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                fontSize: '0.75rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
            >
              {copied ? <Check size={13} color="#b8860b" /> : <Copy size={13} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <p style={{ color: '#475569', margin: 0 }}>
            Open <code>src/data/eventsData.js</code> and update <strong>DEFAULT_GOOGLE_FORM_URL</strong>.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
          <button 
            onClick={onClose}
            style={{
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              color: '#334155',
              padding: '0.65rem 1.25rem',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
          <button 
            onClick={handleSave}
            className="btn-royal-gold"
            style={{ padding: '0.65rem 1.5rem' }}
          >
            {savedNotice ? '✓ Saved!' : 'Apply Link Now'}
          </button>
        </div>

      </div>
    </div>
  );
}
