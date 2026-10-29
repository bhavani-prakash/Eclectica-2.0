import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventCard from './components/EventCard';
import EventModal from './components/EventModal';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import CircuitBackground from './components/CircuitBackground';
import { EVENTS } from './data/eventsData';
import { Sparkles, Trophy } from 'lucide-react';

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

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
                <Sparkles size={14} /> 9 SPECIALIZED ARENAS
              </span>
              <span className="badge-gold">
                <Trophy size={14} /> SEPARATE GOOGLE FORM PER EVENT
              </span>
            </div>
            
            <h2 className="font-heading" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 800, color: '#f8fafc', marginBottom: '0.5rem' }}>
              Featured <span className="gold-gradient-text">Symposium Events</span>
            </h2>
            <p style={{ maxWidth: '680px', margin: '0 auto', color: '#94a3b8', fontSize: '1.02rem' }}>
              Click <strong>"Explore Rules"</strong> on any event card to view the round-by-round breakdown, guidelines, and access that event's dedicated Google Registration Form.
            </p>
          </div>

          {/* Events Grid - All 8 Events displayed directly */}
          <div className="events-grid">
            {EVENTS.map((event) => (
              <EventCard 
                key={event.id}
                event={event}
                onExplore={(ev) => setSelectedEvent(ev)}
              />
            ))}
          </div>

        </div>
      </main>

      {/* About & Guidelines Section */}
      <AboutSection />

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
