import React, { useState } from 'react';
import { X, Check, Link2, Copy, AlertCircle } from 'lucide-react';

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
    navigator.clipboard.writeText(`// In src/data/eventsData.js line 3:\nexport const DEFAULT_GOOGLE_FORM_URL = "${inputUrl}";`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()} 
        style={{ maxWidth: '580px', padding: '2rem' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Link2 size={24} color="#00f0ff" />
            <h3 className="font-heading" style={{ fontSize: '1.6rem', color: '#f8fafc' }}>
              Google Form Link Settings
            </h3>
          </div>
          <button 
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
          >
            <X size={20} />
          </button>
        </div>

        <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
          You can paste your actual Google Form URL below to test it immediately in your browser, or permanently edit it in the code file <code style={{ color: '#ffd700', background: 'rgba(255, 215, 0, 0.1)', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>src/data/eventsData.js</code>.
        </p>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontSize: '0.82rem', color: '#00f0ff', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.4rem' }}>
            Current Google Form URL:
          </label>
          <input 
            type="url"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="https://docs.google.com/forms/d/e/.../viewform"
            style={{
              width: '100%',
              background: '#050b18',
              border: '1px solid rgba(0, 240, 255, 0.4)',
              borderRadius: '8px',
              padding: '0.75rem 1rem',
              color: '#ffffff',
              fontSize: '0.92rem',
              outline: 'none'
            }}
          />
        </div>

        {/* How to edit in code notice */}
        <div style={{
          background: 'rgba(245, 183, 0, 0.08)',
          border: '1px solid rgba(245, 183, 0, 0.25)',
          borderRadius: '10px',
          padding: '1rem',
          marginBottom: '1.5rem',
          fontSize: '0.85rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
            <span style={{ color: '#ffd700', fontWeight: 700 }}>Permanent Code Location:</span>
            <button 
              onClick={copyConfigSnippet}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                color: '#f8fafc',
                cursor: 'pointer',
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                fontSize: '0.75rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
            >
              {copied ? <Check size={13} color="#00f0ff" /> : <Copy size={13} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <p style={{ color: '#94a3b8', margin: 0 }}>
            Open <code style={{ color: '#00f0ff' }}>src/data/eventsData.js</code> and update line 3:
            <br />
            <span style={{ color: '#cbd5e1', fontFamily: 'monospace' }}>export const DEFAULT_GOOGLE_FORM_URL = "your-link";</span>
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
          <button 
            onClick={onClose}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#cbd5e1',
              padding: '0.65rem 1.25rem',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
          <button 
            onClick={handleSave}
            className="btn-gold"
            style={{ padding: '0.65rem 1.5rem' }}
          >
            {savedNotice ? '✓ Saved!' : 'Apply Link Now'}
          </button>
        </div>

      </div>
    </div>
  );
}
