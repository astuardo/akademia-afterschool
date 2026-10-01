import React from 'react';
import { ArrowRight, BookOpen, Clock, CheckCircle2 } from 'lucide-react';
import { PROGRAMS } from '../data/programsData';
import type { Program } from '../data/programsData';

interface ProgramsSectionProps {
  onOpenProgramDetail: (program: Program) => void;
  onOpenSchedule: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenProgramDetail, onOpenSchedule }) => {
  return (
    <section id="programas" className="section programs-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <BookOpen size={16} />
            <span>Nuestra Oferta Educativa</span>
          </div>
          <h2 className="section-title">
            Programas diseñados para cada etapa escolar
          </h2>
          <p className="section-subtitle">
            Cada ciclo de edad tiene necesidades y ritmos distintos. Nuestros programas 
            respetan la madurez de los niños y jóvenes para lograr aprendizajes significativos y felices.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="programs-grid">
          {PROGRAMS.map((program) => {
            return (
              <div 
                key={program.id} 
                className="program-card"
                style={{ '--program-theme': program.color } as React.CSSProperties}
              >
                {/* Top Badge */}
                <div className="program-card-header">
                  <span 
                    className="program-badge"
                    style={{ backgroundColor: program.bgColor, color: program.color }}
                  >
                    {program.badge}
                  </span>
                  <span className="program-age">{program.ageRange.split('•')[0]}</span>
                </div>

                {/* Title & Slogan */}
                <h3 className="program-title">{program.name}</h3>
                <p className="program-slogan">{program.slogan}</p>

                {/* Description snippet */}
                <p className="program-desc">
                  {program.description}
                </p>

                {/* Tags */}
                <div className="program-tags">
                  {program.tags.map((tag, i) => (
                    <span key={i} className="program-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="program-highlights-box">
                  <div className="highlights-header">Aspectos destacados:</div>
                  <ul className="program-checklist">
                    {program.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} style={{ color: program.color }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Schedule Info */}
                <div className="program-schedule-row">
                  <Clock size={16} className="text-muted" />
                  <span>{program.schedule}</span>
                </div>

                {/* Card Actions */}
                <div className="program-card-footer">
                  <button
                    onClick={() => onOpenProgramDetail(program)}
                    className="btn btn-secondary program-btn-detail"
                  >
                    <span>Ver Ficha Completa</span>
                    <ArrowRight size={16} />
                  </button>
                  <button
                    onClick={onOpenSchedule}
                    className="btn btn-primary program-btn-book"
                    style={{ backgroundColor: program.color }}
                  >
                    <span>Consultar</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
