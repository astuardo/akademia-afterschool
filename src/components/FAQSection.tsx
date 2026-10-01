import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/programsData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappUrl = `https://wa.me/56912345678?text=${encodeURIComponent('Hola AKdemia! Tengo una duda sobre sus servicios.')}`;

  return (
    <section id="faqs" className="section faq-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <HelpCircle size={16} />
            <span>Dudas Habituales</span>
          </div>
          <h2 className="section-title">
            Preguntas Frecuentes
          </h2>
          <p className="section-subtitle">
            Resolvemos las consultas más comunes de los apoderados antes de coordinar su primera visita.
          </p>
        </div>

        {/* Accordion */}
        <div className="faq-list">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-text">{faq.question}</span>
                  <div className={`faq-chevron ${isOpen ? 'faq-chevron-rotated' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                {isOpen && (
                  <div className="faq-answer-pane">
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="faq-bottom-cta">
          <p className="faq-cta-prompt">¿Tienes alguna duda específica sobre tu caso o colegio?</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageCircle size={18} />
            <span>Hablar con una Coordinadora Pedagógica</span>
          </a>
        </div>

      </div>
    </section>
  );
};
