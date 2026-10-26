import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventCard from './components/EventCard';
import EventModal from './components/EventModal';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import FormConfigModal from './components/FormConfigModal';
import { EVENTS, FEST_INFO, DEFAULT_GOOGLE_FORM_URL } from './data/eventsData';
import { Search, SlidersHorizontal, Sparkles, Trophy } from 'lucide-react';

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentFormUrl, setCurrentFormUrl] = useState(DEFAULT_GOOGLE_FORM_URL);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  // Categories list
  const categories = ['All', 'Technical', 'Hardware', 'Circuits', 'Embedded Systems', 'Coding', 'Research', 'Literary'];

  // Filter events based on active category & search
  const filteredEvents = EVENTS.filter((event) => {
    const matchesCategory = activeCategory === 'All' || event.category.toLowerCase().includes(activeCategory.toLowerCase());
    const matchesSearch = 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.overview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <Navbar onFormConfigOpen={() => setIsFormModalOpen(true)} />

      {/* Hero Section */}
      <Hero 
        onOpenFormEditor={() => setIsFormModalOpen(true)} 
        currentFormUrl={currentFormUrl}
      />

      {/* Events Showcase Section */}
      <main id="events" style={{ padding: '4.5rem 0', flexGrow: 1 }}>
        <div className="container">
          
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
              <span className="badge-cyan">
                <Sparkles size={14} /> 8 COMPETITIVE ARENAS
              </span>
              <span className="badge-gold">
                <Trophy size={14} /> CASH PRIZES & CERTIFICATES
              </span>
            </div>
            
            <h2 className="font-heading" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 800, color: '#f8fafc', marginBottom: '0.5rem' }}>
              Featured <span className="gold-gradient-text">Symposium Events</span>
            </h2>
            <p style={{ maxWidth: '650px', margin: '0 auto', color: '#94a3b8', fontSize: '1.02rem' }}>
              Click <strong>"Explore Rules"</strong> on any event card to view the round-by-round structure, guidelines, and access the official Google Registration Form.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            marginBottom: '2.5rem',
            background: 'rgba(10, 22, 44, 0.7)',
            padding: '1.25rem',
            borderRadius: '16px',
            border: '1px solid rgba(0, 240, 255, 0.2)'
          }}>
            {/* Search Input */}
            <div style={{ position: 'relative' }}>
              <Search size={18} color="#00f0ff" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="text"
                placeholder="Search events (e.g. Quiz, PCB, Breadboard, Python, Bug Hunters, Debate)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  background: '#050b18',
                  border: '1px solid rgba(0, 240, 255, 0.3)',
                  borderRadius: '10px',
                  padding: '0.75rem 1rem 0.75rem 2.75rem',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              />
            </div>

            {/* Category Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    background: activeCategory === cat 
                      ? 'linear-gradient(135deg, #00f0ff, #0088ff)' 
                      : 'rgba(255, 255, 255, 0.05)',
                    color: activeCategory === cat ? '#050b18' : '#cbd5e1',
                    fontWeight: activeCategory === cat ? 700 : 500,
                    border: activeCategory === cat ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '0.45rem 1rem',
                    fontSize: '0.86rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '0.03em'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          {filteredEvents.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'rgba(10, 22, 44, 0.5)', borderRadius: '16px', border: '1px dashed rgba(255, 255, 255, 0.15)' }}>
              <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '1rem' }}>
                No events found matching your search.
              </p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="btn-outline-cyan"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="events-grid">
              {filteredEvents.map((event) => (
                <EventCard 
                  key={event.id}
                  event={{ ...event, formUrl: currentFormUrl }}
                  onExplore={(ev) => setSelectedEvent(ev)}
                />
              ))}
            </div>
          )}

        </div>
      </main>

      {/* About & Guidelines */}
      <AboutSection />

      {/* Footer */}
      <Footer />

      {/* Event Details & Rules Popup Modal */}
      <EventModal 
        event={selectedEvent} 
        onClose={() => setSelectedEvent(null)}
        formUrl={currentFormUrl}
      />

      {/* Google Form Link Configuration Modal */}
      <FormConfigModal 
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        currentUrl={currentFormUrl}
        onSaveUrl={(newUrl) => setCurrentFormUrl(newUrl)}
      />

    </div>
  );
}
