import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventCard from './components/EventCard';
import EventModal from './components/EventModal';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import FormConfigModal from './components/FormConfigModal';
import { EVENTS, FEST_INFO, DEFAULT_GOOGLE_FORM_URL } from './data/eventsData';
import { Search, Award } from 'lucide-react';

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentFormUrl, setCurrentFormUrl] = useState(DEFAULT_GOOGLE_FORM_URL);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const categories = ['All', 'Technical', 'Hardware', 'Circuits', 'Embedded Systems', 'Coding', 'Research', 'Literary'];

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
      <Navbar />

      <Hero 
        onOpenFormEditor={() => setIsFormModalOpen(true)} 
        currentFormUrl={currentFormUrl}
      />

      <main id="events" style={{ padding: '4.5rem 0', flexGrow: 1 }}>
        <div className="container">
          
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
              <span className="badge-royal-gold">
                OFFICIAL COMPETITIVE PROGRAM
              </span>
              <span className="badge-royal-navy">
                8 DELEGATE CATEGORIES
              </span>
            </div>
            
            <h2 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 800, color: '#0b2545', marginBottom: '0.5rem' }}>
              Symposium <span className="gold-text-prestige">Event Directory</span>
            </h2>
            <p style={{ maxWidth: '650px', margin: '0 auto', color: '#64748b', fontSize: '1.02rem' }}>
              Click <strong>"Explore Rules"</strong> to review stage specifications, evaluation criteria, and open the direct Google Registration Form.
            </p>
          </div>

          {/* Search & Category Filter */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            marginBottom: '2.5rem',
            background: '#ffffff',
            padding: '1.25rem',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
          }}>
            <div style={{ position: 'relative' }}>
              <Search size={18} color="#b8860b" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="text"
                placeholder="Search event by name or topic (e.g. Layotrix, Nexcircuit, Bug Hunters, Debate)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  background: '#f8fafc',
                  border: '1.5px solid #cbd5e1',
                  borderRadius: '10px',
                  padding: '0.75rem 1rem 0.75rem 2.75rem',
                  color: '#0f172a',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    background: activeCategory === cat ? '#0b2545' : '#f1f5f9',
                    color: activeCategory === cat ? '#fce18b' : '#334155',
                    fontWeight: activeCategory === cat ? 800 : 600,
                    border: activeCategory === cat ? 'none' : '1px solid #e2e8f0',
                    borderRadius: '8px',
                    padding: '0.45rem 1rem',
                    fontSize: '0.86rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontFamily: 'var(--font-serif)',
                    letterSpacing: '0.02em'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          {filteredEvents.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', background: '#ffffff', borderRadius: '16px', border: '1px dashed #cbd5e1' }}>
              <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '1rem' }}>
                No events match your current search query.
              </p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="btn-outline-royal"
              >
                Reset Search
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

      <AboutSection />
      <Footer />

      {/* Pop-up modal */}
      <EventModal 
        event={selectedEvent} 
        onClose={() => setSelectedEvent(null)}
        formUrl={currentFormUrl}
      />

      {/* Form configuration modal */}
      <FormConfigModal 
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        currentUrl={currentFormUrl}
        onSaveUrl={(newUrl) => setCurrentFormUrl(newUrl)}
      />

    </div>
  );
}
