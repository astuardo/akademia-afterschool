import React, { useState } from 'react';
import { X, Calendar, User, Phone, BookOpen, Clock, CheckCircle2, MessageCircle } from 'lucide-react';

interface ScheduleVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgramName?: string;
}

export const ScheduleVisitModal: React.FC<ScheduleVisitModalProps> = ({ 
  isOpen, 
  onClose,
  defaultProgramName 
}) => {
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [studentName, setStudentName] = useState('');
  const [grade, setGrade] = useState('1° a 2° Básico');
  const [preferredShift, setPreferredShift] = useState('Tarde (15:00 - 18:00 hrs)');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const bookingSummary = `Hola AKdemia! Deseo coordinar una visita presencial para conocer el centro. 
Mis datos:
- Apoderado: ${parentName || 'No especificado'}
- Teléfono: ${phone || 'No especificado'}
- Alumno/a: ${studentName || 'Hijo/a'} (${grade})
- Horario preferido: ${preferredShift}
${defaultProgramName ? `- Interés: ${defaultProgramName}` : ''}`;

  const whatsappBookingUrl = `https://wa.me/56912345678?text=${encodeURIComponent(bookingSummary)}`;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <X size={22} />
        </button>

        {!submitted ? (
          <div className="modal-body">
            <div className="modal-header">
              <div className="modal-icon-badge">
                <Calendar size={24} color="#D97706" />
              </div>
              <h3 className="modal-title">Agenda una Visita Guiada</h3>
              <p className="modal-subtitle">
                Ven a conocer nuestros espacios libres de pantallas y conversa personalmente 
                con nuestro equipo pedagógico antes de tomar cualquier decisión.
              </p>
              {defaultProgramName && (
                <div className="modal-program-badge">
                  <span>Programa de interés: <strong>{defaultProgramName}</strong></span>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label className="form-label">
                  <User size={16} />
                  <span>Nombre del Apoderado(a)</span>
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="Ej: Patricia Morales" 
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    <Phone size={16} />
                    <span>WhatsApp / Celular</span>
                  </label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+56 9 8765 4321" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <User size={16} />
                    <span>Nombre de tu hijo(a)</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Ej: Lucas" 
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    <BookOpen size={16} />
                    <span>Nivel o Curso</span>
                  </label>
                  <select 
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="form-select"
                  >
                    <option value="Playgroup / Prekínder / Kínder">Prebásica (Playgroup, Prekínder, Kínder)</option>
                    <option value="1° a 2° Básico">1° o 2° Básico</option>
                    <option value="3° a 5° Básico">3° a 5° Básico</option>
                    <option value="6° a 8° Básico">6° a 8° Básico</option>
                    <option value="I a IV Medio">I a IV Medio</option>
                    <option value="Preparación PAES">High School PAES</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Clock size={16} />
                    <span>Jornada Preferida</span>
                  </label>
                  <select 
                    value={preferredShift}
                    onChange={(e) => setPreferredShift(e.target.value)}
                    className="form-select"
                  >
                    <option value="Tarde (15:00 - 18:00 hrs)">Tarde (15:00 - 18:00 hrs)</option>
                    <option value="Mañana (10:00 - 12:30 hrs)">Mañana (10:00 - 12:30 hrs)</option>
                    <option value="Sábado por la mañana">Sábado por la mañana</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-block modal-submit-btn">
                <span>Confirmar y Enviar Solicitud</span>
              </button>

              <p className="modal-privacy-note">
                🔒 Tus datos están protegidos y solo se utilizarán para coordinar tu cita en AKdemia.
              </p>
            </form>
          </div>
        ) : (
          <div className="modal-body modal-success-pane">
            <div className="success-icon-box">
              <CheckCircle2 size={54} color="#10B981" />
            </div>
            <h3 className="modal-title">¡Solicitud Registrada con Éxito!</h3>
            <p className="modal-subtitle">
              Gracias <strong>{parentName}</strong>. Hemos recibido tu solicitud para visitar AKdemia junto a <strong>{studentName || 'tu hijo/a'}</strong>.
            </p>
            <p className="success-instructions">
              Para coordinar el día y horario exacto de inmediato con nuestra coordinadora, pulsa a continuación:
            </p>

            <a 
              href={whatsappBookingUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp btn-block"
            >
              <MessageCircle size={20} />
              <span>Confirmar Cita por WhatsApp Ahora</span>
            </a>

            <button 
              type="button" 
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn btn-secondary btn-block modal-btn-done"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
