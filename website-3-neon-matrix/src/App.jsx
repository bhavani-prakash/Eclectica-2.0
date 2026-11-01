import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventCard from './components/EventCard';
import EventModal from './components/EventModal';
import Footer from './components/Footer';
import CircuitBackground from './components/CircuitBackground';
import IdeavyaPage from './pages/IdeavyaPage';
import { EVENTS, EVENT_FORM_LINKS } from './data/eventsData';
import { Sparkles, Trophy } from 'lucide-react';

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showIdeavya, setShowIdeavya] = useState(false);

  // When IDEAVYA page is open render it fullscreen instead of main layout
  if (showIdeavya) {
    return (
      <>
        <CircuitBackground />
        <IdeavyaPage
          onBack={() => setShowIdeavya(false)}
          formUrl={EVENT_FORM_LINKS['ideavya']}
        />
      </>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      
      {/* Interactive ECE Circuit & PCB Traces Canvas Background */}
      <CircuitBackground />

      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Events Arena Section */}
      <main id="events" style={{ padding: '4.5rem 0', flexGrow: 1, position: 'relative', zIndex: 1 }}>
        <div className="container">
          
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
              Click <strong>"Explore Rules"</strong> to view round-by-round details and register. For <strong style={{ color: '#ffd700' }}>IDEAVYA 2026</strong>, click <strong style={{ color: '#ffd700' }}>"Know More"</strong> to open the full event page.
            </p>
          </div>

          {/* Events Grid — All 8 Events */}
          <div className="events-grid">
            {EVENTS.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onExplore={(ev) => setSelectedEvent(ev)}
                onIdeavya={() => setShowIdeavya(true)}
              />
            ))}
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Event Details & Rules Popup Modal */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

    </div>
  );
}
