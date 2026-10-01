import React, { useState, useEffect } from 'react';
import { Calendar, Phone, Menu, X, Sparkles, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenSchedule: () => void;
  onSelectProgram: (programId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSchedule }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/56912345678?text=${encodeURIComponent('Hola AKdemia! Me gustaría recibir información sobre sus programas.')}`;

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand */}
        <a href="#" className="navbar-brand">
          <div className="brand-logo-icon">
            <Sparkles size={22} className="brand-icon-svg" />
          </div>
          <div className="brand-text">
            <span className="brand-name">AKdemia</span>
            <span className="brand-tagline">Afterschool & Aprendizaje</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-nav desktop-nav">
          <a href="#solucion" className="nav-link">¿Qué buscas?</a>
          <a href="#programas" className="nav-link">Programas</a>
          <a href="#tarde" className="nav-link">Una tarde en AKdemia</a>
          <a href="#diferenciadores" className="nav-link">Por qué elegirnos</a>
          <a href="#nosotros" className="nav-link">Filosofía</a>
          <a href="#faqs" className="nav-link">Preguntas</a>
        </nav>

        {/* Action CTAs */}
        <div className="navbar-actions desktop-actions">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary nav-action-btn"
            title="Escríbenos a WhatsApp"
          >
            <MessageCircle size={18} color="#25D366" />
            <span>WhatsApp</span>
          </a>
          <button 
            onClick={onOpenSchedule} 
            className="btn btn-primary nav-action-btn"
            id="nav-schedule-btn"
          >
            <Calendar size={18} />
            <span>Agendar Visita</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav">
            <a 
              href="#solucion" 
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              🎯 ¿Qué necesita tu hijo?
            </a>
            <a 
              href="#programas" 
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              📚 Nuestros Programas
            </a>
            <a 
              href="#tarde" 
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              ⏰ Una tarde en AKdemia
            </a>
            <a 
              href="#diferenciadores" 
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              ⭐ ¿Por qué AKdemia?
            </a>
            <a 
              href="#nosotros" 
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              🌱 Nuestra Filosofía
            </a>
            <a 
              href="#faqs" 
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              ❓ Preguntas Frecuentes
            </a>
          </nav>
          <div className="mobile-drawer-actions">
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSchedule();
              }} 
              className="btn btn-primary btn-block"
            >
              <Calendar size={18} />
              Agendar Visita Guiada
            </button>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp btn-block"
            >
              <Phone size={18} />
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
