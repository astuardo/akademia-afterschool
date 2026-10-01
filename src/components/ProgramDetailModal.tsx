import React from 'react';
import { X, CheckCircle2, Clock, Calendar, MessageCircle, ShieldCheck } from 'lucide-react';
import type { Program } from '../data/programsData';

interface ProgramDetailModalProps {
  program: Program | null;
  onClose: () => void;
  onOpenSchedule: (programName: string) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({ 
  program, 
  onClose,
  onOpenSchedule 
}) => {
  if (!program) return null;

  const whatsappMessage = `Hola AKdemia! Me gustaría recibir información detallada, valores y cupos para el programa ${program.name}.`;
  const whatsappUrl = `https://wa.me/56912345678?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-window modal-window-lg" 
        onClick={(e) => e.stopPropagation()}
        style={{ '--modal-accent': program.color } as React.CSSProperties}
      >
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Cerrar ficha"
        >
          <X size={22} />
        </button>

        <div className="modal-body">
          {/* Header Banner */}
          <div className="detail-modal-header">
            <span 
              className="detail-badge"
              style={{ backgroundColor: program.bgColor, color: program.color }}
            >
              {program.badge}
            </span>
            <h2 className="detail-title" style={{ color: program.color }}>
              {program.name}
            </h2>
            <p className="detail-slogan">"{program.slogan}"</p>
          </div>

          {/* Image Banner if available */}
          {program.image && (
            <div className="detail-image-box">
              <img 
                src={program.image} 
                alt={program.name} 
                className="detail-banner-img"
              />
            </div>
          )}

          {/* Description */}
          <div className="detail-section">
            <p className="detail-paragraph">{program.description}</p>
          </div>

          {/* Audience */}
          <div className="detail-section">
            <h3 className="detail-subheading">¿Para quién está diseñado este programa?</h3>
            <ul className="detail-bullet-list">
              {program.audience.map((item, idx) => (
                <li key={idx} className="detail-bullet-item">
                  <CheckCircle2 size={18} style={{ color: program.color }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What we do */}
          <div className="detail-section">
            <h3 className="detail-subheading">¿Qué hacemos en cada jornada?</h3>
            <div className="detail-cards-grid">
              {program.highlights.map((highlight, idx) => (
                <div key={idx} className="detail-mini-card">
                  <span className="mini-card-number">0{idx + 1}</span>
                  <p className="mini-card-text">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Differentiators */}
          <div className="detail-section">
            <h3 className="detail-subheading">¿Qué nos diferencia en este servicio?</h3>
            <ul className="detail-bullet-list">
              {program.differentiators.map((diff, idx) => (
                <li key={idx} className="detail-bullet-item">
                  <ShieldCheck size={18} style={{ color: program.color }} />
                  <span>{diff}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Schedule */}
          <div className="detail-schedule-banner">
            <Clock size={20} style={{ color: program.color }} />
            <div>
              <strong>Horario y modalidad:</strong>
              <div>{program.schedule}</div>
            </div>
          </div>

          {/* Actions */}
          <div className="detail-actions-row">
            <button
              onClick={() => {
                onClose();
                onOpenSchedule(program.name);
              }}
              className="btn btn-primary detail-action-btn"
              style={{ backgroundColor: program.color }}
            >
              <Calendar size={18} />
              <span>Agendar Visita para este Programa</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp detail-action-btn"
            >
              <MessageCircle size={18} />
              <span>Consultar en WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
