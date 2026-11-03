import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Users, Trophy, Calendar, MapPin, Lightbulb, Target, Zap } from 'lucide-react';

export default function IdeavyaPage({ onBack, formUrl }) {
  // Always start from the very top when this page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  return (
    <div style={{ minHeight: '100vh', background: '#050b18', color: '#f8fafc', fontFamily: 'var(--font-body)' }}>
      
      {/* Top Navbar */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(5, 11, 24, 0.95)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0, 240, 255, 0.2)',
        padding: '1rem 2rem',
        display: 'flex', alignItems: 'center', gap: '1rem'
      }}>
        <button
          onClick={onBack}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(0, 240, 255, 0.08)',
            border: '1px solid rgba(0, 240, 255, 0.35)',
            color: '#00f0ff',
            borderRadius: '10px',
            padding: '0.55rem 1.1rem',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: 700,
            fontFamily: 'var(--font-heading)',
            letterSpacing: '0.04em',
            transition: 'all 0.2s'
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0, 240, 255, 0.18)'; e.currentTarget.style.transform = 'translateX(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0, 240, 255, 0.08)'; e.currentTarget.style.transform = 'translateX(0)'; }}
        >
          <ArrowLeft size={17} /> Back to Events
        </button>
        <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>ECLECTICA 2K26 II › IDEAVYA 2026</span>
      </nav>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* ── Hero Banner ─────────────────────────────────── */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3.5rem',
          padding: '3rem 2rem',
          background: 'linear-gradient(135deg, rgba(0,240,255,0.05) 0%, rgba(245,183,0,0.07) 100%)',
          borderRadius: '20px',
          border: '1px solid rgba(0, 240, 255, 0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Glow blobs */}
          <div style={{ position: 'absolute', top: '-60px', left: '-60px', width: '220px', height: '220px', background: 'radial-gradient(circle, rgba(0,240,255,0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '220px', height: '220px', background: 'radial-gradient(circle, rgba(245,183,0,0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(245,183,0,0.12)', border: '1px solid rgba(245,183,0,0.4)', borderRadius: '20px', padding: '0.35rem 1.1rem', marginBottom: '1.2rem', fontSize: '0.8rem', fontWeight: 700, color: '#ffd700', letterSpacing: '0.08em', fontFamily: 'var(--font-heading)' }}>
            <Lightbulb size={13} /> IDEATHON EVENT • ECLECTICA 2K26 II
          </div>

          <h1 className="font-heading" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '0.6rem' }}>
            <span style={{ color: '#00f0ff' }}>IDEA</span><span style={{ background: 'linear-gradient(135deg, #ffd700, #f5b700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>VYA</span>{' '}
            <span style={{ color: '#f8fafc' }}>2026</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#ffd700', fontStyle: 'italic', marginBottom: '0.5rem', fontWeight: 600 }}>
            "Your Idea. Your Innovation."
          </p>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
            In Association with <span style={{ color: '#00f0ff', fontWeight: 600 }}>PathVision Pvt. Ltd.</span> &amp; <span style={{ color: '#00f0ff', fontWeight: 600 }}>MITS–IEEE ComSoc Student Chapter</span>
          </p>

          {/* Quick Info Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginTop: '2rem' }}>
            {[
              { icon: <Calendar size={14} />, text: 'Nov 11 & 12, 2026' },
              { icon: <MapPin size={14} />, text: 'MITS Campus' },
              { icon: <Users size={14} />, text: '2–4 Members' },
              { icon: <Trophy size={14} />, text: '₹12,500 Prize Pool' },
            ].map((pill, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '0.4rem 1rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                <span style={{ color: '#00f0ff' }}>{pill.icon}</span> {pill.text}
              </span>
            ))}
          </div>
        </div>

        {/* ── Two-Column Layout ──────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>

          {/* LEFT: Poster */}
          <div>
            <h2 className="font-heading" style={{ fontSize: '1.3rem', fontWeight: 800, color: '#00f0ff', marginBottom: '1rem', letterSpacing: '0.06em' }}>
              📋 EVENT POSTER
            </h2>
            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '2px solid rgba(0, 240, 255, 0.3)', boxShadow: '0 0 40px rgba(0, 240, 255, 0.12)' }}>
              <img
                src="/ideavya-poster.jpg"
                alt="IDEAVYA 2026 Event Poster"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>

          {/* RIGHT: About + Levels + Prizes + CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

            {/* About */}
            <div style={{ background: 'rgba(10, 22, 44, 0.7)', border: '1px solid rgba(0, 240, 255, 0.18)', borderRadius: '16px', padding: '1.75rem' }}>
              <h2 className="font-heading" style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffd700', marginBottom: '0.9rem', letterSpacing: '0.06em' }}>
                💡 ABOUT IDEAVYA 2026
              </h2>
              <p style={{ color: '#cbd5e1', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: '1rem' }}>
                <strong style={{ color: '#f8fafc' }}>IDEAVYA 2026</strong> is a student-driven innovation competition organised by <strong style={{ color: '#00f0ff' }}>MITS Deemed to be University</strong> in collaboration with <strong style={{ color: '#00f0ff' }}>PathVision Innovations Pvt. Ltd.</strong>, aimed at encouraging students to identify real-world challenges and develop original, innovative, and practically feasible solutions.
              </p>
              <p style={{ color: '#cbd5e1', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: '1rem' }}>
                Unlike conventional competitions based on predefined problem statements, IDEAVYA empowers students to <strong style={{ color: '#ffd700' }}>independently identify problems</strong>, explore existing solutions, and propose innovative approaches with meaningful societal, technological, or industrial impact.
              </p>
              <p style={{ color: '#cbd5e1', lineHeight: 1.75, fontSize: '0.95rem' }}>
                The event also features an <strong style={{ color: '#ffd700' }}>Innovation Bootcamp &amp; Idea Showcase</strong> — providing practical insights into innovation development, problem validation, feasibility assessment, and entrepreneurial opportunities.
              </p>
            </div>

            {/* 4 Levels */}
            <div style={{ background: 'rgba(10, 22, 44, 0.7)', border: '1px solid rgba(0, 240, 255, 0.18)', borderRadius: '16px', padding: '1.75rem' }}>
              <h2 className="font-heading" style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffd700', marginBottom: '1.1rem', letterSpacing: '0.06em' }}>
                <Target size={17} style={{ display: 'inline', marginRight: '0.4rem', verticalAlign: 'middle' }} />
                4 PROGRESSIVE LEVELS
              </h2>
              {[
                { level: 'Level 1', title: 'Idea Submission', desc: 'Submit your original idea — problem, solution, innovation, feasibility, and expected impact.', badge: 'All Teams' },
                { level: 'Level 2', title: 'Top 20 Teams', desc: 'Twenty teams shortlisted based on quality, originality, and potential of the proposed idea.', badge: 'Top 20' },
                { level: 'Level 3 — Semi-Finale', title: 'Closed-Room Pitching', desc: '12 teams present innovations before an expert evaluation panel in a structured pitch session.', badge: 'Top 12' },
                { level: 'Level 4 — Grand Finale', title: 'On-Stage Grand Finale', desc: '6 finalists deliver on-stage presentations to judges & audience, with live audience polling.', badge: 'Top 6' },
              ].map((l, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: i < 3 ? '1.1rem' : 0 }}>
                  <div style={{ flexShrink: 0, width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #00f0ff, #0088ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 900, color: '#050b18', fontFamily: 'var(--font-heading)' }}>
                    {i + 1}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>{l.level}</span>
                      <span style={{ fontSize: '0.68rem', background: 'rgba(245,183,0,0.15)', color: '#ffd700', border: '1px solid rgba(245,183,0,0.3)', borderRadius: '6px', padding: '0.1rem 0.45rem', fontWeight: 700 }}>{l.badge}</span>
                    </div>
                    <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{l.title}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.55 }}>{l.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Innovation Themes */}
            <div style={{ background: 'rgba(10, 22, 44, 0.7)', border: '1px solid rgba(0, 240, 255, 0.18)', borderRadius: '16px', padding: '1.75rem' }}>
              <h2 className="font-heading" style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffd700', marginBottom: '1rem', letterSpacing: '0.06em' }}>
                <Zap size={17} style={{ display: 'inline', marginRight: '0.4rem', verticalAlign: 'middle' }} />
                INNOVATION THEMES
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {['Artificial Intelligence & ML', 'Smart Infrastructure & Industrial Applications', 'Mobility, Automotive & Transportation', 'Renewable Energy & Environmental Sustainability', 'Social Innovation & Entrepreneurship'].map((theme, i) => (
                  <span key={i} style={{ background: 'rgba(0,240,255,0.07)', border: '1px solid rgba(0,240,255,0.25)', borderRadius: '8px', padding: '0.4rem 0.9rem', fontSize: '0.82rem', color: '#cbd5e1' }}>
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            {/* Prizes */}
            <div style={{ background: 'linear-gradient(135deg, rgba(245,183,0,0.08) 0%, rgba(0,240,255,0.05) 100%)', border: '1px solid rgba(245,183,0,0.3)', borderRadius: '16px', padding: '1.75rem' }}>
              <h2 className="font-heading" style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffd700', marginBottom: '1rem', letterSpacing: '0.06em' }}>
                🏆 CASH PRIZE POOL — ₹12,500
              </h2>
              {[
                { emoji: '🥇', label: 'First Prize', amount: '₹6,000' },
                { emoji: '🥈', label: 'Second Prize', amount: '₹4,000' },
                { emoji: '❤️', label: 'Best Audience-Loved Idea', amount: '₹2,500' },
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.65rem 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                  <span style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>{p.emoji} {p.label}</span>
                  <span style={{ color: '#ffd700', fontWeight: 800, fontSize: '1rem', fontFamily: 'var(--font-heading)' }}>{p.amount}</span>
                </div>
              ))}
              <p style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: '#64748b' }}>
                Registration Fee: ₹150 Early Bird &nbsp;|&nbsp; ₹200 Standard (per team)
              </p>
            </div>

            {/* Rules */}
            <div style={{ background: 'rgba(10, 22, 44, 0.7)', border: '1px solid rgba(0, 240, 255, 0.18)', borderRadius: '16px', padding: '1.75rem' }}>
              <h2 className="font-heading" style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffd700', marginBottom: '1rem', letterSpacing: '0.06em' }}>
                📜 KEY RULES
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {[
                  'Team size: 2–4 members. Interdisciplinary teams (at least two departments) are mandatory.',
                  'Ideas must be original — plagiarism or recycled prior submissions will lead to disqualification.',
                  'Problem identification and solution must be independently developed by the team.',
                  'Models, prototypes, or concept demonstrations are welcomed but not mandatory.',
                  'Audience polling determines the "Best Audience-Loved Idea" prize (₹2,500) independently.',
                  'Decision of the expert evaluation panel is final in all judging matters.',
                ].map((rule, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.6rem', color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.55 }}>
                    <span style={{ color: '#00f0ff', flexShrink: 0, marginTop: '1px' }}>▸</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coordinators */}
            <div style={{ background: 'rgba(10, 22, 44, 0.7)', border: '1px solid rgba(0, 240, 255, 0.18)', borderRadius: '16px', padding: '1.75rem' }}>
              <h2 className="font-heading" style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffd700', marginBottom: '1rem', letterSpacing: '0.06em' }}>
                👥 COORDINATORS
              </h2>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                marginBottom: '1.5rem',
                padding: '1rem',
                background: 'linear-gradient(135deg, rgba(255,215,0,0.12), rgba(0,240,255,0.06))',
                border: '1px solid rgba(255,215,0,0.35)',
                borderRadius: '14px',
              }}>
                <img
                  src="/ideavya-main-coordinator.png"
                  alt="Yatheendra Nath Reddy Devasani"
                  style={{
                    width: '96px',
                    height: '96px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: 'center 25%',
                    border: '2px solid #ffd700',
                    boxShadow: '0 0 20px rgba(255,215,0,0.25)',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#ffd700', fontWeight: 800, letterSpacing: '0.12em', marginBottom: '0.35rem' }}>MAIN COORDINATOR</div>
                  <div style={{ color: '#f8fafc', fontWeight: 800, fontSize: '1.05rem', lineHeight: 1.35 }}>Yatheendra Nath Reddy Devasani</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.86rem', marginTop: '0.3rem' }}>Founder &amp; CEO - PathVision Innovations Pvt Ltd</div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600, marginBottom: '0.35rem' }}>FACULTY COORDINATORS</div>
                  <div style={{ color: '#f8fafc', fontWeight: 700, fontSize: '0.9rem' }}>Dr. Simadri Badatya</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.82rem' }}>Asst. Professor</div>
                  <div style={{ color: '#f8fafc', fontWeight: 700, fontSize: '0.9rem', marginTop: '0.5rem' }}>Dr. Anurag Kumar Pandey</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.82rem' }}>Asst. Professor</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600, marginBottom: '0.35rem' }}>STUDENT COORDINATORS</div>
                  <div style={{ color: '#f8fafc', fontWeight: 700, fontSize: '0.9rem' }}>N. Amarendra Reddy</div>
                  <div style={{ color: '#00f0ff', fontSize: '0.82rem' }}>8309756352</div>
                  <div style={{ color: '#f8fafc', fontWeight: 700, fontSize: '0.9rem', marginTop: '0.5rem' }}>G. Dhanush Reddy</div>
                  <div style={{ color: '#00f0ff', fontSize: '0.82rem' }}>9182563136</div>
                </div>
              </div>
            </div>

            {/* CTA — Register */}
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                background: 'linear-gradient(135deg, #ffd700, #f5b700)',
                color: '#050b18',
                borderRadius: '14px',
                padding: '1.05rem 2rem',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                fontWeight: 900,
                letterSpacing: '0.06em',
                textDecoration: 'none',
                boxShadow: '0 6px 30px rgba(245, 183, 0, 0.4)',
                transition: 'all 0.25s',
                textAlign: 'center'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 40px rgba(245, 183, 0, 0.55)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 30px rgba(245, 183, 0, 0.4)'; }}
            >
              <ExternalLink size={19} />
              REGISTER FOR IDEAVYA 2026 (Google Form)
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}
