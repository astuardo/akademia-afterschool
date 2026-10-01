import React, { useState } from 'react';
import { Sparkles, MessageCircle, MapPin, Mail, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<string | null>(null);

  return (
    <footer className="footer-main">
      <div className="container footer-container">
        {/* Brand column */}
        <div className="footer-col footer-col-brand">
          <div className="footer-brand">
            <div className="brand-logo-icon">
              <Sparkles size={20} className="brand-icon-svg" />
            </div>
            <span className="footer-brand-name">AKdemia</span>
          </div>
          <p className="footer-tagline">
            Mucho más que un afterschool. Un espacio protegido para aprender, 
            crecer y descubrir todo lo que son capaces de lograr.
          </p>
          <div className="footer-social-links">
            <a 
              href="https://www.instagram.com/akdemia_afterschool" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-pill"
              aria-label="Instagram de AKdemia"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              <span>@akdemia_afterschool</span>
            </a>
          </div>
        </div>

        {/* Quick Nav */}
        <div className="footer-col">
          <h4 className="footer-heading">Navegación</h4>
          <ul className="footer-links">
            <li><a href="#solucion">¿Qué busca tu hijo?</a></li>
            <li><a href="#programas">Oferta de Programas</a></li>
            <li><a href="#tarde">Una tarde en AKdemia</a></li>
            <li><a href="#diferenciadores">Por qué elegirnos</a></li>
            <li><a href="#nosotros">Nuestra Filosofía</a></li>
            <li><a href="#faqs">Preguntas Frecuentes</a></li>
          </ul>
        </div>

        {/* Programs */}
        <div className="footer-col">
          <h4 className="footer-heading">Programas</h4>
          <ul className="footer-links">
            <li><a href="#programas">Afterschool Exploradores (Prebásica)</a></li>
            <li><a href="#programas">Aprender Jugando (1° y 2° Básico)</a></li>
            <li><a href="#programas">Autonomía y Métodos (3° a 5° Básico)</a></li>
            <li><a href="#programas">Refuerzo Académico (6° a IV Medio)</a></li>
            <li><a href="#programas">AKdemia High School & PAES</a></li>
            <li><a href="#programas">Gabinete de Psicopedagogía</a></li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="footer-col">
          <h4 className="footer-heading">Contacto y Ubicación</h4>
          <ul className="footer-contact-list">
            <li className="contact-item">
              <MapPin size={18} className="contact-icon" />
              <span>Atención Presencial previa coordinación</span>
            </li>
            <li className="contact-item">
              <MessageCircle size={18} className="contact-icon text-emerald" />
              <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer">
                WhatsApp: +56 9 1234 5678
              </a>
            </li>
            <li className="contact-item">
              <Mail size={18} className="contact-icon" />
              <a href="mailto:contacto@akdemia.cl">contacto@akdemia.cl</a>
            </li>
          </ul>
          <div className="footer-hours-box">
            <span className="hours-title">Horario de Atención:</span>
            <span>Lunes a Viernes • 13:00 a 19:30 hrs</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Legal Policies */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <div className="footer-copy">
            © {new Date().getFullYear()} AKdemia Afterschool & Centro de Aprendizaje. Todos los derechos reservados.
          </div>

          <div className="footer-legal-links">
            <button 
              onClick={() => setLegalModal('privacidad')} 
              className="legal-link-btn"
            >
              Política de Privacidad
            </button>
            <span className="legal-dot">•</span>
            <button 
              onClick={() => setLegalModal('menores')} 
              className="legal-link-btn"
            >
              Protección de Datos e Imagen de Menores
            </button>
            <span className="legal-dot">•</span>
            <button 
              onClick={() => setLegalModal('terminos')} 
              className="legal-link-btn"
            >
              Términos de Servicio
            </button>
          </div>
        </div>
      </div>

      {/* Legal Dialog */}
      {legalModal && (
        <div className="modal-backdrop" onClick={() => setLegalModal(null)}>
          <div className="modal-window modal-window-sm" onClick={(e) => e.stopPropagation()}>
            <div className="modal-body">
              <div className="legal-modal-head">
                <Shield size={24} color="#059669" />
                <h3>
                  {legalModal === 'privacidad' && 'Política de Privacidad y Tratamiento de Datos'}
                  {legalModal === 'menores' && 'Protección y Autorización de Imagen de Menores'}
                  {legalModal === 'terminos' && 'Términos y Condiciones del Servicio'}
                </h3>
              </div>
              <div className="legal-modal-text">
                {legalModal === 'privacidad' && (
                  <p>
                    En AKdemia nos comprometemos a resguardar la privacidad de los apoderados y estudiantes. 
                    Los datos recabados en los formularios de contacto y agendamiento solo se utilizan con fines 
                    de coordinación pedagógica y administrativa interna, jamás se comercializan ni ceden a terceros.
                  </p>
                )}
                {legalModal === 'menores' && (
                  <p>
                    Todas las imágenes y material audiovisual de niños y jóvenes publicados en nuestro sitio web 
                    o redes sociales cuentan con la debida autorización informada y firmada por sus padres o tutores legales, 
                    priorizando siempre el resguardo de su identidad, seguridad y bienestar emocional.
                  </p>
                )}
                {legalModal === 'terminos' && (
                  <p>
                    La reserva de matrícula y participación en talleres y programas de afterschool está sujeta a disponibilidad 
                    de vacantes según el aforo de cada sala (máximo 6 a 8 alumnos por grupo) y a la firma del convenio de prestación 
                    de servicios respectivo.
                  </p>
                )}
              </div>
              <button 
                onClick={() => setLegalModal(null)} 
                className="btn btn-secondary btn-block"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
