import React, { useState } from 'react';
import { Heart, Compass, Target, Star, Quote } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mision' | 'vision' | 'valores'>('mision');

  return (
    <section id="nosotros" className="section philosophy-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Heart size={16} />
            <span>Nuestra Identidad</span>
          </div>
          <h2 className="section-title">
            Creemos que aprender también debe ser una experiencia feliz
          </h2>
          <p className="section-subtitle">
            En AKdemia entendemos la educación como un proceso integral. Por eso creamos un espacio 
            donde el aprendizaje escolar, el soporte socioemocional y el desarrollo de habilidades 
            para la vida conviven en perfecta armonía.
          </p>
        </div>

        {/* Tabbed Philosophy Cards */}
        <div className="philosophy-box">
          <div className="philosophy-nav">
            <button
              onClick={() => setActiveTab('mision')}
              className={`phil-nav-btn ${activeTab === 'mision' ? 'phil-nav-active' : ''}`}
            >
              <Target size={18} />
              <span>Nuestra Misión</span>
            </button>
            <button
              onClick={() => setActiveTab('vision')}
              className={`phil-nav-btn ${activeTab === 'vision' ? 'phil-nav-active' : ''}`}
            >
              <Compass size={18} />
              <span>Nuestra Visión</span>
            </button>
            <button
              onClick={() => setActiveTab('valores')}
              className={`phil-nav-btn ${activeTab === 'valores' ? 'phil-nav-active' : ''}`}
            >
              <Heart size={18} />
              <span>Nuestros Pilares</span>
            </button>
          </div>

          <div className="philosophy-content-card">
            {activeTab === 'mision' && (
              <div className="tab-pane-content">
                <h3 className="tab-heading">Acompañamiento integral, riguroso y humano</h3>
                <p className="tab-body">
                  Nuestra misión es brindar a cada niño, niña y joven un soporte académico de excelencia, 
                  dotándolos de herramientas de estudio autónomas, fortaleciendo su autoestima escolar 
                  y aliviando la carga de tareas de las familias trabajadoras mediante un entorno cálido, 
                  disciplinado y respetuoso.
                </p>
                <div className="tab-pill-list">
                  <span className="tab-pill">✓ Hábitos duraderos</span>
                  <span className="tab-pill">✓ Bienestar familiar</span>
                  <span className="tab-pill">✓ Éxito académico medible</span>
                </div>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="tab-pane-content">
                <h3 className="tab-heading">Redefiniendo el concepto de Afterschool en Chile</h3>
                <p className="tab-body">
                  Transformar la experiencia post-escolar en una oportunidad de enriquecimiento genuino. 
                  Aspiramos a ser el centro de referencia líder en desarrollo infantil y juvenil que une 
                  pedagogía innovadora, salud multidisciplinaria y vida libre de pantallas.
                </p>
                <div className="tab-pill-list">
                  <span className="tab-pill">✓ Innovación pedagógica</span>
                  <span className="tab-pill">✓ Salud integral</span>
                  <span className="tab-pill">✓ Comunidad educativa activa</span>
                </div>
              </div>
            )}

            {activeTab === 'valores' && (
              <div className="tab-pane-content">
                <h3 className="tab-heading">Los pilares que guían cada jornada</h3>
                <div className="pillars-grid">
                  <div className="pillar-item">
                    <strong>1. Respeto al ritmo individual:</strong> Cada estudiante aprende a su tiempo; adaptamos la didáctica al niño, no al revés.
                  </div>
                  <div className="pillar-item">
                    <strong>2. Desconexión digital inteligente:</strong> Priorizamos la experiencia tangible, la manipulación de objetos y la lectura impresa.
                  </div>
                  <div className="pillar-item">
                    <strong>3. Alegría de aprender:</strong> El rigor y la disciplina son compatibles con la calidez, la sonrisa y la contención afectiva.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Testimonials from Parents */}
        <div className="testimonials-section">
          <h3 className="testimonials-title">Lo que dicen las familias que confían en nosotros</h3>
          
          <div className="testimonials-grid">
            <div className="testi-card">
              <Quote size={28} className="quote-icon" />
              <p className="testi-text">
                "Desde que Mateo asiste a AKdemia, las tardes volvieron a ser un espacio de descanso en casa. 
                Llega con todas sus tareas terminadas y súper contento con los talleres de arte."
              </p>
              <div className="testi-author">
                <div className="testi-avatar">CM</div>
                <div>
                  <strong className="author-name">Carla Morales</strong>
                  <span className="author-role">Mamá de 2° Básico • Programa Aprender Jugando</span>
                </div>
              </div>
              <div className="testi-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
            </div>

            <div className="testi-card">
              <Quote size={28} className="quote-icon" />
              <p className="testi-text">
                "El apoyo psicopedagógico ha sido un giro en 180° para mi hija. El colegio notó el avance 
                en concentración y notas en menos de dos meses. El equipo es de verdad excepcional."
              </p>
              <div className="testi-author">
                <div className="testi-avatar">RO</div>
                <div>
                  <strong className="author-name">Rodrigo Olivares</strong>
                  <span className="author-role">Papá de 4° Básico • Apoyo Especializado</span>
                </div>
              </div>
              <div className="testi-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
            </div>

            <div className="testi-card">
              <Quote size={28} className="quote-icon" />
              <p className="testi-text">
                "La preparación PAES con grupos chicos marca toda la diferencia. Los profes resuelven 
                cada duda en profundidad y el seguimiento de ensayos me dio una seguridad tremenda."
              </p>
              <div className="testi-author">
                <div className="testi-avatar">FS</div>
                <div>
                  <strong className="author-name">Francisca Silva</strong>
                  <span className="author-role">Alumna IV Medio • AKdemia High School</span>
                </div>
              </div>
              <div className="testi-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
