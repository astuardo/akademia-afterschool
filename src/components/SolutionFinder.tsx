import React, { useState } from 'react';
import { Sparkles, ArrowRight, MessageCircle, Calendar, Check, HelpCircle } from 'lucide-react';
import { PROGRAMS } from '../data/programsData';
import type { Program } from '../data/programsData';

interface SolutionFinderProps {
  onOpenSchedule: () => void;
  onOpenProgramDetail: (program: Program) => void;
}

interface StageOption {
  id: string;
  label: string;
  subtitle: string;
  defaultProgramId: string;
}

const STAGES: StageOption[] = [
  { id: 'prebasica', label: 'Prebásica', subtitle: '3 a 5 años • Playgroup a Kínder', defaultProgramId: 'exploradores' },
  { id: 'inicial', label: '1° y 2° Básico', subtitle: '6 a 7 años • Primer Ciclo', defaultProgramId: 'aprender-jugando' },
  { id: 'intermedio', label: '3° a 5° Básico', subtitle: '8 a 11 años • Métodos de Estudio', defaultProgramId: 'autonomia-estudio' },
  { id: 'media', label: '6° Básico a IV Medio', subtitle: '12 a 18 años • Asignaturas Clave', defaultProgramId: 'refuerzo-academico' },
  { id: 'paes', label: 'High School & PAES', subtitle: 'III - IV Medio y Egresados', defaultProgramId: 'akdemia-highschool' },
];

interface NeedOption {
  id: string;
  title: string;
  desc: string;
  recommendedProgramId: string;
}

const NEEDS: Record<string, NeedOption[]> = {
  prebasica: [
    { id: 'afterschool', title: 'Cuidado y estimulación post-colegio', desc: 'Espacio seguro, almuerzo guiado y actividades sin pantallas', recommendedProgramId: 'exploradores' },
    { id: 'especialista', title: 'Apoyo en lenguaje o desarrollo motor', desc: 'Evaluación e intervención con fonoaudióloga o psicopedagoga', recommendedProgramId: 'apoyo-especializado' },
  ],
  inicial: [
    { id: 'tareas-lectura', title: 'Tareas resueltas y fomento lector', desc: 'Aprender jugando, lectura fluida y llegar a casa sin deberes pendientes', recommendedProgramId: 'aprender-jugando' },
    { id: 'especialista', title: 'Dificultades en lectoescritura o atención', desc: 'Pesquisa y tratamiento con nuestro equipo multidisciplinario', recommendedProgramId: 'apoyo-especializado' },
  ],
  intermedio: [
    { id: 'autonomia', title: 'Aprender a organizarse y estudiar', desc: 'Técnicas de síntesis, preparación de pruebas y autonomía en tareas', recommendedProgramId: 'autonomia-estudio' },
    { id: 'refuerzo-mate', title: 'Refuerzo específico en matemáticas/ciencias', desc: 'Nivelación personalizada para superar dudas y subir notas', recommendedProgramId: 'refuerzo-academico' },
    { id: 'especialista', title: 'Evaluación psicopedagógica o DEA', desc: 'Acompañamiento especializado para superar barreras de aprendizaje', recommendedProgramId: 'apoyo-especializado' },
  ],
  media: [
    { id: 'subir-nem', title: 'Subir notas y asegurar un buen NEM', desc: 'Clases focales en materias críticas (Matemática, Física, Química, Lenguaje)', recommendedProgramId: 'refuerzo-academico' },
    { id: 'orientacion-paes', title: 'Preparación temprana de la PAES', desc: 'Estrategias de resolución y ensayos formativos tipo DEMRE', recommendedProgramId: 'akdemia-highschool' },
    { id: 'habitos-estudio', title: 'Técnicas de concentración y manejo del tiempo', desc: 'Organización para semanas de exámenes y reducción de estrés', recommendedProgramId: 'autonomia-estudio' },
  ],
  paes: [
    { id: 'paes-integral', title: 'Puntaje de corte para mi carrera soñada', desc: 'Ensayos reales, análisis de errores, coaching vocacional y descarte estratégico', recommendedProgramId: 'akdemia-highschool' },
    { id: 'refuerzo-m2', title: 'Reforzar M2 (Matemática Avanzada) o Ciencias', desc: 'Módulos específicos intensivos con profesores universitarios', recommendedProgramId: 'refuerzo-academico' },
  ]
};

export const SolutionFinder: React.FC<SolutionFinderProps> = ({ onOpenSchedule, onOpenProgramDetail }) => {
  const [selectedStage, setSelectedStage] = useState<string>('inicial');
  const [selectedNeed, setSelectedNeed] = useState<string>('tareas-lectura');

  const currentNeeds = NEEDS[selectedStage] || NEEDS['inicial'];
  
  // Find current recommended program
  const activeNeedObj = currentNeeds.find(n => n.id === selectedNeed) || currentNeeds[0];
  const recommendedProgram = PROGRAMS.find(p => p.id === activeNeedObj.recommendedProgramId) || PROGRAMS[0];

  const handleStageChange = (stageId: string) => {
    setSelectedStage(stageId);
    const newNeeds = NEEDS[stageId];
    if (newNeeds && newNeeds.length > 0) {
      setSelectedNeed(newNeeds[0].id);
    }
  };

  const stageLabel = STAGES.find(s => s.id === selectedStage)?.label || 'Etapa seleccionada';
  const needLabel = activeNeedObj.title;

  const whatsappMessage = `Hola AKdemia! Hice la consulta en su web para mi hijo/a en ${stageLabel} con necesidad de "${needLabel}". Me gustaría conocer disponibilidad y valores del programa ${recommendedProgram.name}.`;
  const whatsappUrl = `https://wa.me/56912345678?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="solucion" className="section solution-finder-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={16} />
            <span>Selector Inteligente</span>
          </div>
          <h2 className="section-title">
            ¿Qué necesita tu hijo y cómo podemos acompañarlo?
          </h2>
          <p className="section-subtitle">
            En lugar de buscar entre decenas de opciones, cuéntanos la etapa de tu hijo 
            y te recomendaremos la alternativa formativa ideal para su momento escolar.
          </p>
        </div>

        {/* Interactive Selector Card */}
        <div className="finder-box">
          <div className="finder-grid">
            
            {/* Step 1 & 2: User Choices */}
            <div className="finder-inputs">
              {/* Step 1 */}
              <div className="finder-step">
                <div className="step-title-row">
                  <span className="step-number">1</span>
                  <div>
                    <h3 className="step-heading">¿En qué nivel escolar está tu hijo/a?</h3>
                    <p className="step-helper">Selecciona su etapa actual</p>
                  </div>
                </div>

                <div className="stage-options-grid">
                  {STAGES.map((stage) => {
                    const isSelected = selectedStage === stage.id;
                    return (
                      <button
                        key={stage.id}
                        type="button"
                        onClick={() => handleStageChange(stage.id)}
                        className={`stage-btn ${isSelected ? 'stage-btn-active' : ''}`}
                      >
                        <div className="stage-btn-check">
                          {isSelected && <Check size={14} color="#FFFFFF" />}
                        </div>
                        <div className="stage-btn-text">
                          <span className="stage-name">{stage.label}</span>
                          <span className="stage-sub">{stage.subtitle}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2 */}
              <div className="finder-step">
                <div className="step-title-row">
                  <span className="step-number">2</span>
                  <div>
                    <h3 className="step-heading">¿Cuál es tu principal objetivo o necesidad?</h3>
                    <p className="step-helper">Lo que más te interesa resolver hoy</p>
                  </div>
                </div>

                <div className="needs-options-list">
                  {currentNeeds.map((need) => {
                    const isSelected = selectedNeed === need.id;
                    return (
                      <button
                        key={need.id}
                        type="button"
                        onClick={() => setSelectedNeed(need.id)}
                        className={`need-btn ${isSelected ? 'need-btn-active' : ''}`}
                      >
                        <div className={`radio-dot ${isSelected ? 'radio-dot-active' : ''}`} />
                        <div className="need-btn-text">
                          <span className="need-title">{need.title}</span>
                          <span className="need-desc">{need.desc}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 3: Dynamic Result Preview Card */}
            <div className="finder-result">
              <div 
                className="result-card"
                style={{ borderColor: recommendedProgram.color }}
              >
                <div className="result-header">
                  <span className="result-badge" style={{ backgroundColor: recommendedProgram.bgColor, color: recommendedProgram.color }}>
                    ✨ Recomendación para tu familia
                  </span>
                  <h3 className="result-program-name" style={{ color: recommendedProgram.color }}>
                    {recommendedProgram.name}
                  </h3>
                  <p className="result-slogan">"{recommendedProgram.slogan}"</p>
                </div>

                <p className="result-description">
                  {recommendedProgram.description}
                </p>

                {/* Key Benefits */}
                <div className="result-highlights">
                  <h4 className="highlights-title">Lo que incluye este programa:</h4>
                  <ul className="highlights-list">
                    {recommendedProgram.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="highlight-item">
                        <Check size={16} className="highlight-check" style={{ color: recommendedProgram.color }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="result-schedule">
                  <strong>Horario habitual:</strong> {recommendedProgram.schedule}
                </div>

                {/* Result CTAs */}
                <div className="result-actions">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp result-btn-block"
                    id="finder-whatsapp-btn"
                  >
                    <MessageCircle size={18} />
                    <span>Consultar Vacantes por WhatsApp</span>
                  </a>

                  <div className="result-actions-secondary">
                    <button
                      onClick={() => onOpenProgramDetail(recommendedProgram)}
                      className="btn btn-secondary btn-sm"
                    >
                      <span>Ver Ficha Completa</span>
                      <ArrowRight size={14} />
                    </button>

                    <button
                      onClick={onOpenSchedule}
                      className="btn btn-primary btn-sm"
                    >
                      <Calendar size={14} />
                      <span>Agendar Visita</span>
                    </button>
                  </div>
                </div>

                <div className="result-footnote">
                  <HelpCircle size={14} />
                  <span>Atención personalizada • Sin compromiso de matrícula previa</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
