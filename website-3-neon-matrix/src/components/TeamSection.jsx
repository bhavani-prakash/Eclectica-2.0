import React from 'react';
import { Crown, Users, GraduationCap, UserCircle2 } from 'lucide-react';

// ============================================================
//  TEAM DATA — fill in names, roles, images below
// ============================================================

const HOD = {
  name: 'Dr. Sanjay Kumar C. Gowre',
  role: 'Head of Department — ECE',
  image: '/hod-sanjay-kumar.png',
};

// Faculty Coordinators
const FACULTY_COORDINATORS = [
  { name: 'Dr. V. Jayaprakasan',   role: 'Faculty Coordinator', image: null },
  { name: 'Dr. SK Nurul Islam',    role: 'Faculty Coordinator', image: null },
  { name: 'Dr. Simadri Batatya',   role: 'Faculty Coordinator', image: null },
  { name: 'Mr. G. Charan Kumar',   role: 'Faculty Coordinator', image: null },
];

// Student Coordinators
const STUDENT_COORDINATORS = [
  { name: 'B. Revanth Reddy',        role: 'Student Coordinator', image: null },
  { name: 'S. Allah Bhakash',        role: 'Student Coordinator', image: null },
  { name: 'R. Krishna Divya',        role: 'Student Coordinator', image: null },
  { name: 'K. Karthikeya Prasad',    role: 'Student Coordinator', image: null },
];

// ============================================================

function AvatarPlaceholder({ size = 120, color = '#00f0ff' }) {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: `radial-gradient(circle at 40% 35%, rgba(${color === '#00f0ff' ? '0,240,255' : '245,183,0'},0.18) 0%, rgba(5,11,24,0.95) 100%)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `2px dashed ${color}44`,
    }}>
      <UserCircle2 size={size * 0.55} color={`${color}66`} />
    </div>
  );
}

function HODCard({ member }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2.5rem 2rem',
      background: 'linear-gradient(135deg, rgba(255,215,0,0.07) 0%, rgba(5,11,24,0.95) 60%, rgba(245,183,0,0.05) 100%)',
      border: '1.5px solid rgba(255,215,0,0.35)',
      borderRadius: '20px',
      boxShadow: '0 0 40px rgba(255,215,0,0.1), 0 8px 32px rgba(0,0,0,0.5)',
      maxWidth: '320px',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Glow ring */}
      <div style={{
        position: 'absolute',
        top: -40,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 200,
        height: 200,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,215,0,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Crown badge */}
      <div style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        background: 'linear-gradient(135deg, rgba(255,215,0,0.2), rgba(245,183,0,0.1))',
        border: '1px solid rgba(255,215,0,0.45)',
        borderRadius: '8px',
        padding: '0.3rem 0.55rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.3rem',
        fontSize: '0.65rem',
        fontWeight: 800,
        color: '#ffd700',
        letterSpacing: '0.08em',
        fontFamily: 'var(--font-heading)',
      }}>
        <Crown size={11} /> LEADERSHIP
      </div>

      {/* Photo */}
      <div style={{
        width: 140,
        height: 140,
        borderRadius: '50%',
        overflow: 'hidden',
        border: '3px solid rgba(255,215,0,0.5)',
        boxShadow: '0 0 24px rgba(255,215,0,0.3), 0 0 48px rgba(255,215,0,0.1)',
        marginBottom: '1.25rem',
        flexShrink: 0,
      }}>
        {member.image
          ? <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          : <AvatarPlaceholder size={140} color="#ffd700" />
        }
      </div>

      <h3 className="font-heading" style={{
        fontSize: '1.18rem',
        fontWeight: 800,
        color: '#ffd700',
        textAlign: 'center',
        marginBottom: '0.35rem',
        lineHeight: 1.3,
      }}>
        {member.name}
      </h3>
      <div style={{
        fontSize: '0.82rem',
        color: '#94a3b8',
        textAlign: 'center',
        fontWeight: 500,
        letterSpacing: '0.04em',
      }}>
        {member.role}
      </div>
    </div>
  );
}

function MemberCard({ member, accentColor = '#00f0ff', delay = 0 }) {
  return (
    <div
      className="card-entrance visible-left"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1.75rem 1.25rem',
        background: 'linear-gradient(135deg, rgba(0,240,255,0.05) 0%, rgba(5,11,24,0.96) 100%)',
        border: `1px solid ${accentColor}33`,
        borderRadius: '16px',
        boxShadow: `0 4px 24px rgba(0,0,0,0.4)`,
        textAlign: 'center',
        transition: 'border-color 0.25s, box-shadow 0.25s',
        cursor: 'default',
        animationDelay: `${delay}s`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${accentColor}66`;
        e.currentTarget.style.boxShadow = `0 0 20px ${accentColor}18, 0 8px 28px rgba(0,0,0,0.5)`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = `${accentColor}33`;
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
      }}
    >
      {/* Photo */}
      <div style={{
        width: 96,
        height: 96,
        borderRadius: '50%',
        overflow: 'hidden',
        border: `2px solid ${accentColor}55`,
        boxShadow: `0 0 14px ${accentColor}22`,
        marginBottom: '1rem',
        flexShrink: 0,
      }}>
        {member.image
          ? <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          : <AvatarPlaceholder size={96} color={accentColor} />
        }
      </div>

      <div className="font-heading" style={{
        fontSize: '0.95rem',
        fontWeight: 700,
        color: '#f8fafc',
        marginBottom: '0.3rem',
        lineHeight: 1.3,
      }}>
        {member.name}
      </div>
      <div style={{
        fontSize: '0.75rem',
        color: accentColor,
        fontWeight: 600,
        letterSpacing: '0.05em',
        opacity: 0.85,
      }}>
        {member.role}
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section id="team" style={{ padding: '5rem 0 4rem', position: 'relative', zIndex: 1 }}>
      <div className="container">

        {/* ── Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.7rem' }}>
            <span className="badge-gold">
              <Crown size={13} /> ECLECTICA TEAM
            </span>
          </div>
          <h2 className="font-heading" style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#f8fafc',
            marginBottom: '0.5rem',
          }}>
            Meet the <span className="gold-gradient-text">Team</span>
          </h2>
          <p style={{ maxWidth: '560px', margin: '0 auto', color: '#94a3b8', fontSize: '1rem' }}>
            The brilliant minds behind ECLECTICA 2K26 II — organizing, coordinating, and making it all happen.
          </p>
        </div>

        {/* ── HOD Leadership */}
        <div style={{ textAlign: 'center', marginBottom: '0.75rem' }}>
          <span style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            color: '#ffd700',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            opacity: 0.8,
          }}>
            ✦ Leadership ✦
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3.5rem' }}>
          <HODCard member={HOD} />
        </div>

        {/* Divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2rem',
        }}>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(0,240,255,0.25))' }} />
          <span style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            fontSize: '0.72rem', fontWeight: 700, color: '#00f0ff',
            letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.8,
          }}>
            <GraduationCap size={15} /> Faculty Coordinators
          </span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(0,240,255,0.25))' }} />
        </div>

        {/* ── Faculty Coordinators */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 220px))',
          gap: '1.5rem',
          justifyContent: 'center',
          marginBottom: '3.5rem',
        }}>
          {FACULTY_COORDINATORS.map((m, i) => (
            <MemberCard key={i} member={m} accentColor="#00f0ff" delay={i * 0.1} />
          ))}
        </div>

        {/* Divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2rem',
        }}>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(245,183,0,0.25))' }} />
          <span style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            fontSize: '0.72rem', fontWeight: 700, color: '#f5b700',
            letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.8,
          }}>
            <Users size={15} /> Student Coordinators
          </span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(245,183,0,0.25))' }} />
        </div>

        {/* ── Student Coordinators */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 200px))',
          gap: '1.25rem',
          justifyContent: 'center',
        }}>
          {STUDENT_COORDINATORS.map((m, i) => (
            <MemberCard key={i} member={m} accentColor="#f5b700" delay={i * 0.08} />
          ))}
        </div>

      </div>
    </section>
  );
}
