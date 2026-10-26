import React, { useState, useEffect, useRef } from 'react';
import { Activity } from 'lucide-react';

export default function OscilloscopeHero() {
  const [waveformType, setWaveformType] = useState('logo-pulse');
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let phase = 0;

    const render = () => {
      phase += 0.04;
      const w = canvas.width;
      const h = canvas.height;
      const midY = h / 2;

      ctx.clearRect(0, 0, w, h);

      // 1. Oscilloscope Grid
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.12)';
      ctx.lineWidth = 1;

      // Vertical divisions
      const divX = w / 10;
      for (let x = divX; x < w; x += divX) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      // Horizontal divisions
      const divY = h / 6;
      for (let y = divY; y < h; y += divY) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Center crosshair lines
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.28)';
      ctx.beginPath();
      ctx.moveTo(0, midY);
      ctx.lineTo(w, midY);
      ctx.moveTo(w / 2, 0);
      ctx.lineTo(w / 2, h);
      ctx.stroke();

      // 2. Active Signal Beam
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#00f0ff';
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 12;

      ctx.beginPath();
      for (let x = 0; x < w; x++) {
        let y = midY;
        const normX = (x / w) * 8 * Math.PI;

        if (waveformType === 'logo-pulse') {
          // Heartbeat pulse from letter 'E' in ECLECTICA logo
          const p = (normX + phase * 4) % (2 * Math.PI);
          if (p < 0.8) {
            y = midY;
          } else if (p < 1.0) {
            y = midY - 12;
          } else if (p < 1.2) {
            y = midY;
          } else if (p < 1.3) {
            y = midY + 14;
          } else if (p < 1.45) {
            y = midY - 48; // Peak R spike
          } else if (p < 1.6) {
            y = midY + 30; // S drop
          } else if (p < 1.8) {
            y = midY;
          } else if (p < 2.2) {
            y = midY - 18;
          } else {
            y = midY;
          }
        } else if (waveformType === 'sine') {
          // RF Wireless Carrier Wave from letter 'I'
          y = midY + Math.sin(normX - phase * 3) * 36;
        } else if (waveformType === 'square') {
          // Digital clock pulse
          const s = Math.sin(normX - phase * 2.5);
          y = midY + (s >= 0 ? -32 : 32);
        } else if (waveformType === 'triangular') {
          // Sawtooth sweep
          const t = ((normX - phase * 2) % (2 * Math.PI)) / (2 * Math.PI);
          y = midY + (t * 2 - 1) * 34;
        }

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Phosphor scanner dot
      const dotX = (Math.sin(phase) * 0.5 + 0.5) * w;
      ctx.beginPath();
      ctx.arc(dotX, midY, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#f5b700';
      ctx.shadowColor = '#f5b700';
      ctx.shadowBlur = 10;
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [waveformType]);

  return (
    <div style={{
      maxWidth: '680px',
      margin: '0 auto 2.25rem auto',
      background: 'rgba(10, 22, 44, 0.85)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(0, 240, 255, 0.35)',
      borderRadius: '14px',
      padding: '1rem',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 240, 255, 0.15)',
      position: 'relative'
    }}>
      {/* Scope Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem', borderBottom: '1px solid rgba(0, 240, 255, 0.2)', paddingBottom: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Activity size={16} color="#00f0ff" />
          <span className="font-heading" style={{ fontSize: '0.95rem', color: '#00f0ff', fontWeight: 700, letterSpacing: '0.05em' }}>
            DIGITAL SIGNAL OSCILLOSCOPE // ECE FREQUENCY MONITOR
          </span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.78rem', color: '#ffd700', fontFamily: 'monospace' }}>
          <span>f: 2.48 GHz</span>
          <span>Vpp: 3.30V</span>
          <span style={{ color: '#00f0ff' }}>TRIG: LOCKED</span>
        </div>
      </div>

      {/* Canvas */}
      <div style={{ position: 'relative', width: '100%', height: '140px', background: '#050b18', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(0, 240, 255, 0.25)' }}>
        <canvas ref={canvasRef} width={640} height={140} style={{ width: '100%', height: '100%', display: 'block' }} />
        <div style={{ position: 'absolute', bottom: '6px', left: '10px', fontSize: '0.7rem', color: '#94a3b8', fontFamily: 'monospace' }}>
          CH1: 500mV/div • TIME: 20ns/div • MITS ECE
        </div>
      </div>

      {/* Waveform Selector Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
        <button
          onClick={() => setWaveformType('logo-pulse')}
          style={{
            background: waveformType === 'logo-pulse' ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
            border: waveformType === 'logo-pulse' ? '1px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.1)',
            color: waveformType === 'logo-pulse' ? '#00f0ff' : '#94a3b8',
            borderRadius: '6px',
            padding: '0.35rem 0.8rem',
            fontSize: '0.8rem',
            cursor: 'pointer',
            fontFamily: 'var(--font-heading)',
            fontWeight: 600
          }}
        >
          ⚡ Logo Heartbeat Wave
        </button>

        <button
          onClick={() => setWaveformType('sine')}
          style={{
            background: waveformType === 'sine' ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
            border: waveformType === 'sine' ? '1px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.1)',
            color: waveformType === 'sine' ? '#00f0ff' : '#94a3b8',
            borderRadius: '6px',
            padding: '0.35rem 0.8rem',
            fontSize: '0.8rem',
            cursor: 'pointer',
            fontFamily: 'var(--font-heading)',
            fontWeight: 600
          }}
        >
          📡 RF Sine Wave
        </button>

        <button
          onClick={() => setWaveformType('square')}
          style={{
            background: waveformType === 'square' ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
            border: waveformType === 'square' ? '1px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.1)',
            color: waveformType === 'square' ? '#00f0ff' : '#94a3b8',
            borderRadius: '6px',
            padding: '0.35rem 0.8rem',
            fontSize: '0.8rem',
            cursor: 'pointer',
            fontFamily: 'var(--font-heading)',
            fontWeight: 600
          }}
        >
          ⏱ Digital Clock Pulse
        </button>

        <button
          onClick={() => setWaveformType('triangular')}
          style={{
            background: waveformType === 'triangular' ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
            border: waveformType === 'triangular' ? '1px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.1)',
            color: waveformType === 'triangular' ? '#00f0ff' : '#94a3b8',
            borderRadius: '6px',
            padding: '0.35rem 0.8rem',
            fontSize: '0.8rem',
            cursor: 'pointer',
            fontFamily: 'var(--font-heading)',
            fontWeight: 600
          }}
        >
          📐 Triangular Sweep
        </button>
      </div>
    </div>
  );
}
