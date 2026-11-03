import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventCard from './components/EventCard';
import EventModal from './components/EventModal';
import Footer from './components/Footer';
import CircuitBackground from './components/CircuitBackground';
import IntroAnimation from './components/IntroAnimation';
import IdeavyaPage from './pages/IdeavyaPage';
import { EVENTS, EVENT_FORM_LINKS } from './data/eventsData';
import TeamSection from './components/TeamSection';
import { Sparkles, Trophy } from 'lucide-react';

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showIdeavya, setShowIdeavya] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const cardRefs = useRef([]);

  // IntersectionObserver: slide cards in from left/right when they enter viewport
  useEffect(() => {
    if (!introComplete) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const idx = Number(el.dataset.cardIndex);
            // Even index → from left, odd index → from right
            el.classList.add(idx % 2 === 0 ? 'visible-left' : 'visible-right');
            observer.unobserve(el); // animate once only
          }
        });
      },
      { threshold: 0.12 }
    );
    cardRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [introComplete]);

  // IDEAVYA dedicated page
  if (showIdeavya) {
    return (
      <>
        <CircuitBackground />
        <IdeavyaPage
          onBack={() => { setShowIdeavya(false); window.scrollTo({ top: 0, behavior: 'instant' }); }}
          formUrl={EVENT_FORM_LINKS['ideavya']}
        />
      </>
    );
  }

  return (
    <>
      {/* ── Cinematic Intro (renders over everything until complete) */}
      {!introComplete && (
        <IntroAnimation onComplete={() => setIntroComplete(true)} />
      )}

      {/* ── Main Site (fades in after intro) */}
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          opacity: introComplete ? 1 : 0,
          transform: introComplete ? 'translateY(0)' : 'translateY(18px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <CircuitBackground />
        <Navbar />
        <Hero />

        {/* Events Arena */}
        <main id="events" style={{ padding: '4.5rem 0', flexGrow: 1, position: 'relative', zIndex: 1 }}>
          <div className="container">

            {/* Section Header */}
            <div className="section-header-anim" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
                <span className="badge-cyan">
                  <Sparkles size={14} /> 8 SPECIALIZED ARENAS
                </span>
                <span className="badge-gold">
                  <Trophy size={14} /> SEPARATE GOOGLE FORM PER EVENT
                </span>
              </div>

              <h2 className="font-heading" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 800, color: '#f8fafc', marginBottom: '0.5rem' }}>
                Featured <span className="gold-gradient-text">Symposium Events</span>
              </h2>
              <p style={{ maxWidth: '680px', margin: '0 auto', color: '#94a3b8', fontSize: '1.02rem' }}>
                Click <strong>"Explore Rules"</strong> to view round-by-round details and register. For{' '}
                <strong style={{ color: '#ffd700' }}>IDEAVYA 2026</strong>, click{' '}
                <strong style={{ color: '#ffd700' }}>"Know More"</strong> to open the full event page.
              </p>
            </div>

            {/* Events Grid — scroll-triggered left/right entrance */}
            <div className="events-grid">
              {EVENTS.map((event, index) => (
                <div
                  key={event.id}
                  className="card-entrance"
                  data-card-index={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  style={{ animationDelay: `${index * 0.07}s` }}
                >
                  <EventCard
                    event={event}
                    onExplore={(ev) => setSelectedEvent(ev)}
                    onIdeavya={() => setShowIdeavya(true)}
                  />
                </div>
              ))}
            </div>

          </div>
        </main>

        {/* ── Team Section */}
        <TeamSection />

        <Footer />
      </div>

      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </>
  );
}
