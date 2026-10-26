import React, { useEffect, useRef } from 'react';

// Electronic & Circuit Schematic Symbols drawn directly onto canvas
export default function CircuitBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates for interactive circuit energy surge
    const mouse = { x: -1000, y: -1000, radius: 180 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Grid spacing for PCB traces
    const spacing = 80;

    // Generate static PCB traces with 45° bends and solder via pads
    const traces = [];
    const vias = [];
    const eceSymbols = [];

    // Pre-calculate grid of PCB traces
    for (let x = 40; x < width; x += spacing) {
      for (let y = 40; y < height; y += spacing) {
        // Randomly place a via solder pad
        if (Math.random() > 0.45) {
          vias.push({
            x,
            y,
            r: Math.random() > 0.8 ? 5 : 3.5,
            isGold: Math.random() > 0.65,
            pulse: Math.random() * Math.PI * 2
          });
        }

        // Horizontal trace with 45° chamfer
        if (Math.random() > 0.55 && x + spacing < width) {
          traces.push({
            x1: x,
            y1: y,
            x2: x + spacing - 15,
            y2: y,
            x3: x + spacing,
            y3: y + (Math.random() > 0.5 ? 15 : -15)
          });
        }

        // Vertical trace
        if (Math.random() > 0.55 && y + spacing < height) {
          traces.push({
            x1: x,
            y1: y,
            x2: x,
            y2: y + spacing - 20,
            x3: x + (Math.random() > 0.5 ? 20 : -20),
            y3: y + spacing
          });
        }
      }
    }

    // Static placement of authentic ECE Schematic Symbols across the background
    // (Resistor, Capacitor, Inductor, Ground, Diode, Op-Amp, Logic Gate, Antenna, Transistor)
    const symbolTypes = [
      'resistor',
      'capacitor',
      'inductor',
      'ground',
      'diode',
      'opamp',
      'and_gate',
      'or_gate',
      'antenna',
      'npn_transistor',
      'ic_chip',
      'pulse_wave'
    ];

    for (let i = 0; i < 35; i++) {
      eceSymbols.push({
        x: Math.random() * (width - 120) + 60,
        y: Math.random() * (height - 120) + 60,
        type: symbolTypes[i % symbolTypes.length],
        scale: 0.85 + Math.random() * 0.4,
        rotation: (Math.floor(Math.random() * 4) * Math.PI) / 2, // 0, 90, 180, 270 deg
        opacity: 0.25 + Math.random() * 0.25,
        floatSpeed: 0.2 + Math.random() * 0.3,
        seed: Math.random() * 100
      });
    }

    // Traveling Electron / Signal Data Packets moving along circuit lines
    const packets = [];
    for (let i = 0; i < 28; i++) {
      packets.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 1.5,
        length: 18 + Math.random() * 22,
        color: Math.random() > 0.4 ? '#00f5ff' : '#fbbf24',
        size: 2 + Math.random() * 1.5
      });
    }

    // Helper functions to draw standard IEEE ECE symbols
    const drawResistor = (ctx, x, y, scale) => {
      ctx.beginPath();
      ctx.moveTo(x - 24 * scale, y);
      ctx.lineTo(x - 16 * scale, y);
      ctx.lineTo(x - 12 * scale, y - 8 * scale);
      ctx.lineTo(x - 4 * scale, y + 8 * scale);
      ctx.lineTo(x + 4 * scale, y - 8 * scale);
      ctx.lineTo(x + 12 * scale, y + 8 * scale);
      ctx.lineTo(x + 16 * scale, y);
      ctx.lineTo(x + 24 * scale, y);
      ctx.stroke();
    };

    const drawCapacitor = (ctx, x, y, scale) => {
      ctx.beginPath();
      // Leads
      ctx.moveTo(x - 20 * scale, y);
      ctx.lineTo(x - 5 * scale, y);
      ctx.moveTo(x + 5 * scale, y);
      ctx.lineTo(x + 20 * scale, y);
      // Parallel Plates
      ctx.moveTo(x - 5 * scale, y - 12 * scale);
      ctx.lineTo(x - 5 * scale, y + 12 * scale);
      ctx.moveTo(x + 5 * scale, y - 12 * scale);
      ctx.lineTo(x + 5 * scale, y + 12 * scale);
      ctx.stroke();
    };

    const drawInductor = (ctx, x, y, scale) => {
      ctx.beginPath();
      ctx.moveTo(x - 22 * scale, y);
      ctx.lineTo(x - 18 * scale, y);
      // Coils
      for (let i = 0; i < 3; i++) {
        const cx = x - 12 * scale + i * 12 * scale;
        ctx.arc(cx, y, 6 * scale, Math.PI, 0, false);
      }
      ctx.moveTo(x + 18 * scale, y);
      ctx.lineTo(x + 22 * scale, y);
      ctx.stroke();
    };

    const drawGround = (ctx, x, y, scale) => {
      ctx.beginPath();
      ctx.moveTo(x, y - 12 * scale);
      ctx.lineTo(x, y);
      // Horizontal tiered lines
      ctx.moveTo(x - 14 * scale, y);
      ctx.lineTo(x + 14 * scale, y);
      ctx.moveTo(x - 9 * scale, y + 4 * scale);
      ctx.lineTo(x + 9 * scale, y + 4 * scale);
      ctx.moveTo(x - 4 * scale, y + 8 * scale);
      ctx.lineTo(x + 4 * scale, y + 8 * scale);
      ctx.stroke();
    };

    const drawDiode = (ctx, x, y, scale) => {
      ctx.beginPath();
      // Leads
      ctx.moveTo(x - 20 * scale, y);
      ctx.lineTo(x - 8 * scale, y);
      ctx.moveTo(x + 8 * scale, y);
      ctx.lineTo(x + 20 * scale, y);
      // Triangle (Anode)
      ctx.moveTo(x - 8 * scale, y - 10 * scale);
      ctx.lineTo(x + 8 * scale, y);
      ctx.lineTo(x - 8 * scale, y + 10 * scale);
      ctx.closePath();
      // Cathode line
      ctx.moveTo(x + 8 * scale, y - 10 * scale);
      ctx.lineTo(x + 8 * scale, y + 10 * scale);
      ctx.stroke();
    };

    const drawOpAmp = (ctx, x, y, scale) => {
      ctx.beginPath();
      // Big Triangle
      ctx.moveTo(x - 16 * scale, y - 18 * scale);
      ctx.lineTo(x + 18 * scale, y);
      ctx.lineTo(x - 16 * scale, y + 18 * scale);
      ctx.closePath();
      // Inverting & Non-inverting input leads
      ctx.moveTo(x - 24 * scale, y - 10 * scale);
      ctx.lineTo(x - 16 * scale, y - 10 * scale);
      ctx.moveTo(x - 24 * scale, y + 10 * scale);
      ctx.lineTo(x - 16 * scale, y + 10 * scale);
      // Output lead
      ctx.moveTo(x + 18 * scale, y);
      ctx.lineTo(x + 26 * scale, y);
      ctx.stroke();

      // +/- signs
      ctx.font = `${Math.floor(9 * scale)}px monospace`;
      ctx.fillStyle = ctx.strokeStyle;
      ctx.fillText('-', x - 13 * scale, y - 7 * scale);
      ctx.fillText('+', x - 13 * scale, y + 13 * scale);
    };

    const drawAndGate = (ctx, x, y, scale) => {
      ctx.beginPath();
      // Input leads
      ctx.moveTo(x - 22 * scale, y - 7 * scale);
      ctx.lineTo(x - 14 * scale, y - 7 * scale);
      ctx.moveTo(x - 22 * scale, y + 7 * scale);
      ctx.lineTo(x - 14 * scale, y + 7 * scale);
      // AND body
      ctx.moveTo(x - 14 * scale, y - 14 * scale);
      ctx.lineTo(x - 2 * scale, y - 14 * scale);
      ctx.arc(x - 2 * scale, y, 14 * scale, -Math.PI / 2, Math.PI / 2, false);
      ctx.lineTo(x - 14 * scale, y + 14 * scale);
      ctx.closePath();
      // Output lead
      ctx.moveTo(x + 12 * scale, y);
      ctx.lineTo(x + 22 * scale, y);
      ctx.stroke();
    };

    const drawAntenna = (ctx, x, y, scale) => {
      ctx.beginPath();
      // Center mast
      ctx.moveTo(x, y + 16 * scale);
      ctx.lineTo(x, y - 6 * scale);
      // Radiating arrowhead
      ctx.moveTo(x - 14 * scale, y - 16 * scale);
      ctx.lineTo(x, y - 6 * scale);
      ctx.lineTo(x + 14 * scale, y - 16 * scale);
      ctx.stroke();

      // Radiating waves (like the WiFi wave in logo 'I')
      ctx.beginPath();
      ctx.arc(x, y - 12 * scale, 10 * scale, -Math.PI * 0.8, -Math.PI * 0.2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x, y - 12 * scale, 17 * scale, -Math.PI * 0.8, -Math.PI * 0.2);
      ctx.stroke();
    };

    const drawPulseWave = (ctx, x, y, scale) => {
      // ECG / Oscilloscope heartbeat pulse (directly from letter 'E' in logo)
      ctx.beginPath();
      ctx.moveTo(x - 26 * scale, y);
      ctx.lineTo(x - 12 * scale, y);
      ctx.lineTo(x - 8 * scale, y - 5 * scale);
      ctx.lineTo(x - 4 * scale, y + 7 * scale);
      ctx.lineTo(x + 2 * scale, y - 18 * scale); // Sharp positive spike
      ctx.lineTo(x + 7 * scale, y + 12 * scale); // Sharp negative dip
      ctx.lineTo(x + 12 * scale, y);
      ctx.lineTo(x + 26 * scale, y);
      ctx.stroke();
    };

    const drawChip = (ctx, x, y, scale) => {
      // Microchip with dual inline pins (like the gold microchip in logo bottom)
      ctx.strokeRect(x - 12 * scale, y - 12 * scale, 24 * scale, 24 * scale);
      // Pins
      for (let i = -1; i <= 1; i++) {
        // Left & Right pins
        ctx.moveTo(x - 18 * scale, y + i * 8 * scale);
        ctx.lineTo(x - 12 * scale, y + i * 8 * scale);
        ctx.moveTo(x + 12 * scale, y + i * 8 * scale);
        ctx.lineTo(x + 18 * scale, y + i * 8 * scale);
        // Top & Bottom pins
        ctx.moveTo(x + i * 8 * scale, y - 18 * scale);
        ctx.lineTo(x + i * 8 * scale, y - 12 * scale);
        ctx.moveTo(x + i * 8 * scale, y + 12 * scale);
        ctx.lineTo(x + i * 8 * scale, y + 18 * scale);
      }
      ctx.stroke();
    };

    let time = 0;

    // Render loop
    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw PCB Copper Traces with subtle electric glow
      ctx.lineWidth = 1;
      traces.forEach((trace) => {
        // Check proximity to mouse
        const dist = Math.hypot((trace.x1 + trace.x3) / 2 - mouse.x, (trace.y1 + trace.y3) / 2 - mouse.y);
        const isNearMouse = dist < mouse.radius;

        ctx.beginPath();
        ctx.moveTo(trace.x1, trace.y1);
        ctx.lineTo(trace.x2, trace.y2);
        ctx.lineTo(trace.x3, trace.y3);

        if (isNearMouse) {
          ctx.strokeStyle = '#00f5ff';
          ctx.lineWidth = 1.8;
          ctx.shadowColor = '#00f5ff';
          ctx.shadowBlur = 8;
        } else {
          ctx.strokeStyle = 'rgba(0, 245, 255, 0.06)';
          ctx.lineWidth = 1;
          ctx.shadowBlur = 0;
        }
        ctx.stroke();
      });

      // 2. Draw PCB Solder Via Pads
      vias.forEach((via) => {
        via.pulse += 0.03;
        const dist = Math.hypot(via.x - mouse.x, via.y - mouse.y);
        const isNearMouse = dist < mouse.radius;

        ctx.beginPath();
        ctx.arc(via.x, via.y, via.r, 0, Math.PI * 2);

        if (isNearMouse) {
          ctx.fillStyle = via.isGold ? '#fbbf24' : '#00f5ff';
          ctx.shadowColor = via.isGold ? '#fbbf24' : '#00f5ff';
          ctx.shadowBlur = 12;
          ctx.fill();
        } else {
          ctx.fillStyle = via.isGold ? 'rgba(251, 191, 36, 0.2)' : 'rgba(0, 245, 255, 0.14)';
          ctx.shadowBlur = 0;
          ctx.fill();
          // Inner hole
          ctx.beginPath();
          ctx.arc(via.x, via.y, via.r * 0.45, 0, Math.PI * 2);
          ctx.fillStyle = '#030712';
          ctx.fill();
        }
      });

      // 3. Draw Traveling Signal / Electron Packets along PCB copper lines
      packets.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fill();
      });

      // 4. Draw Floating ECE Schematic Symbols
      eceSymbols.forEach((sym) => {
        const floatY = sym.y + Math.sin(time * sym.floatSpeed + sym.seed) * 8;
        const distToMouse = Math.hypot(sym.x - mouse.x, floatY - mouse.y);
        const isHovered = distToMouse < 140;

        ctx.save();
        ctx.translate(sym.x, floatY);

        if (isHovered) {
          ctx.strokeStyle = '#00f5ff';
          ctx.shadowColor = '#00f5ff';
          ctx.shadowBlur = 14;
          ctx.lineWidth = 1.8;
          ctx.globalAlpha = 0.9;
        } else {
          ctx.strokeStyle = sym.type === 'pulse_wave' || sym.type === 'antenna' 
            ? 'rgba(0, 245, 255, 0.28)' 
            : 'rgba(251, 191, 36, 0.22)';
          ctx.shadowBlur = 0;
          ctx.lineWidth = 1.3;
          ctx.globalAlpha = sym.opacity;
        }

        switch (sym.type) {
          case 'resistor':
            drawResistor(ctx, 0, 0, sym.scale);
            break;
          case 'capacitor':
            drawCapacitor(ctx, 0, 0, sym.scale);
            break;
          case 'inductor':
            drawInductor(ctx, 0, 0, sym.scale);
            break;
          case 'ground':
            drawGround(ctx, 0, 0, sym.scale);
            break;
          case 'diode':
            drawDiode(ctx, 0, 0, sym.scale);
            break;
          case 'opamp':
            drawOpAmp(ctx, 0, 0, sym.scale);
            break;
          case 'and_gate':
            drawAndGate(ctx, 0, 0, sym.scale);
            break;
          case 'antenna':
            drawAntenna(ctx, 0, 0, sym.scale);
            break;
          case 'pulse_wave':
            drawPulseWave(ctx, 0, 0, sym.scale);
            break;
          case 'ic_chip':
          default:
            drawChip(ctx, 0, 0, sym.scale);
            break;
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.35
      }}
    />
  );
}
