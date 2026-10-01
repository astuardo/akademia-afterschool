import React, { useState } from 'react';
import { Clock, Utensils, Sparkles, BookOpen, Palette, CheckCircle2, Shield, Calendar } from 'lucide-react';
import { DAILY_TIMELINE } from '../data/programsData';
import type { DayStep } from '../data/programsData';

interface TimelineSectionProps {
  onOpenSchedule: () => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ onOpenSchedule }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep: DayStep = DAILY_TIMELINE[activeStepIndex];

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils': return <Utensils size={24} />;
      case 'Sparkles': return <Sparkles size={24} />;
      case 'BookOpen': return <BookOpen size={24} />;
      case 'Palette': return <Palette size={24} />;
      case 'Clock': return <Clock size={24} />;
      default: return <Clock size={24} />;
    }
  };

  return (
    <section id="tarde" className="section timeline-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Clock size={16} />
            <span>Rutina y Metodología</span>
          </div>
          <h2 className="section-title">
            ¿Cómo es una tarde en AKdemia?
          </h2>
          <p className="section-subtitle">
            Estructura, calidez y orden pedagógico. Diseñamos cada bloque de la jornada 
            para equilibrar alimentación, bienestar emocional, estudio riguroso y recreación formativa.
          </p>
        </div>

        {/* Stepper Tabs */}
        <div className="timeline-stepper">
          {DAILY_TIMELINE.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`timeline-tab-btn ${isActive ? 'timeline-tab-active' : ''}`}
              >
                <div className="tab-icon-wrapper">
                  {getStepIcon(step.iconName)}
                </div>
                <div className="tab-meta">
                  <span className="tab-time">{step.time}</span>
                  <span className="tab-title">{step.title}</span>
                </div>
                {isActive && <div className="tab-indicator" />}
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Box */}
        <div className="timeline-feature-card">
          <div className="feature-card-content">
            <div className="feature-tag-badge">
              <Shield size={14} />
              <span>{activeStep.tag}</span>
            </div>

            <div className="feature-time-row">
              <Clock size={20} className="text-accent" />
              <span className="feature-time-label">{activeStep.time}</span>
            </div>

            <h3 className="feature-title">{activeStep.title}</h3>
            <p className="feature-subtitle">{activeStep.subtitle}</p>
            <p className="feature-details">{activeStep.details}</p>

            <div className="feature-perks">
              <div className="perk-item">
                <CheckCircle2 size={18} color="#10B981" />
                <span>Supervisión permanente y guiada</span>
              </div>
              <div className="perk-item">
                <CheckCircle2 size={18} color="#10B981" />
                <span>Ambiente libre de teléfonos y pantallas</span>
              </div>
              <div className="perk-item">
                <CheckCircle2 size={18} color="#10B981" />
                <span>Respeto del ritmo individual</span>
              </div>
            </div>

            <div className="feature-cta-row">
              <button 
                onClick={onOpenSchedule} 
                className="btn btn-primary"
              >
                <Calendar size={18} />
                <span>Ven a vivir una tarde con nosotros</span>
              </button>
            </div>
          </div>

          <div className="feature-card-visual">
            <div className="visual-graphic-box">
              <div className="graphic-icon-large">
                {getStepIcon(activeStep.iconName)}
              </div>
              <h4 className="graphic-heading">{activeStep.title}</h4>
              <p className="graphic-sub">Paso {activeStepIndex + 1} de {DAILY_TIMELINE.length} en la jornada</p>
              
              <div className="step-dots-nav">
                {DAILY_TIMELINE.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStepIndex(i)}
                    className={`step-dot ${i === activeStepIndex ? 'step-dot-active' : ''}`}
                    aria-label={`Ir a paso ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
