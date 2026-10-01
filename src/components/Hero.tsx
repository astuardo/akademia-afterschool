import React from 'react';
import { Calendar, MessageCircle, ArrowRight, ShieldCheck, Users, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenSchedule: () => void;
  onExplorePrograms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSchedule, onExplorePrograms }) => {
  const whatsappUrl = `https://wa.me/56912345678?text=${encodeURIComponent('Hola AKdemia! Deseo coordinar una visita y conocer sus vacantes 2026.')}`;

  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Copy & CTAs */}
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} className="badge-sparkle" />
            <span>Matrículas 2026 Abiertas • Espacio Libre de Pantallas</span>
          </div>

          <h1 className="hero-title">
            Mucho más que un <span className="text-highlight">afterschool</span>.
          </h1>

          <p className="hero-lead">
            Un espacio donde aprender, crecer y descubrir todo lo que son capaces de hacer.
          </p>

          <p className="hero-description">
            En AKdemia acompañamos a niños y jóvenes en cada etapa de su desarrollo, 
            combinando apoyo académico riguroso, aprendizaje lúdico y tutorías personalizadas 
            en un entorno seguro, humano y cercano.
          </p>

          {/* Quick value checkmarks */}
          <div className="hero-checkpoints">
            <div className="checkpoint-item">
              <CheckCircle2 size={18} className="check-icon" />
              <span>Tareas listas antes de llegar a casa</span>
            </div>
            <div className="checkpoint-item">
              <CheckCircle2 size={18} className="check-icon" />
              <span>Cero sobrecarga de pantallas</span>
            </div>
            <div className="checkpoint-item">
              <CheckCircle2 size={18} className="check-icon" />
              <span>Equipo multidisciplinario especializado</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <button 
              onClick={onOpenSchedule} 
              className="btn btn-primary hero-btn-main"
              id="hero-book-visit-btn"
            >
              <Calendar size={20} />
              <span>Agendar una Visita</span>
              <ArrowRight size={18} />
            </button>

            <button 
              onClick={onExplorePrograms} 
              className="btn btn-secondary hero-btn-sub"
              id="hero-explore-btn"
            >
              <span>Ver Programas</span>
            </button>

            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp hero-btn-wa"
              id="hero-wa-btn"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>

        {/* Right Column: Visual Showcase */}
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img 
              src="/hero-kids.jpg" 
              alt="Niños felices aprendiendo y creando en AKdemia Afterschool" 
              className="hero-main-img"
              loading="eager"
            />
            
            {/* Floating Trust Card 1 */}
            <div className="floating-card floating-card-top animate-float">
              <div className="floating-icon-box bg-emerald">
                <ShieldCheck size={22} color="#059669" />
              </div>
              <div className="floating-card-text">
                <strong>100% Libre de Pantallas</strong>
                <span>Creatividad y socialización real</span>
              </div>
            </div>

            {/* Floating Trust Card 2 */}
            <div className="floating-card floating-card-bottom">
              <div className="floating-icon-box bg-amber">
                <Users size={22} color="#D97706" />
              </div>
              <div className="floating-card-text">
                <strong>Grupos Reducidos</strong>
                <span>Máx. 6 a 8 niños por docente</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Stats Bar */}
      <div className="hero-stats-bar">
        <div className="container stats-container">
          <div className="stat-card">
            <span className="stat-number">+250</span>
            <span className="stat-label">Familias Acompañadas</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-card">
            <span className="stat-number">100%</span>
            <span className="stat-label">Tareas Listas en el Centro</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-card">
            <span className="stat-number">5.0 ★</span>
            <span className="stat-label">Calificación de Familias</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-card">
            <span className="stat-number">1 : 8</span>
            <span className="stat-label">Ratio Docente / Alumnos</span>
          </div>
        </div>
      </div>
    </section>
  );
};
