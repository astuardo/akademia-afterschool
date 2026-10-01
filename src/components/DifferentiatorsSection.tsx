import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  HeartHandshake, 
  Home, 
  Award, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { DIFFERENCIALS } from '../data/programsData';

export const DifferentiatorsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck size={28} className="diff-icon" />;
      case 'Users': return <Users size={28} className="diff-icon" />;
      case 'HeartHandshake': return <HeartHandshake size={28} className="diff-icon" />;
      case 'Home': return <Home size={28} className="diff-icon" />;
      case 'Award': return <Award size={28} className="diff-icon" />;
      case 'MessageSquare': return <MessageSquare size={28} className="diff-icon" />;
      default: return <Sparkles size={28} className="diff-icon" />;
    }
  };

  return (
    <section id="diferenciadores" className="section differentiators-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={16} />
            <span>Nuestros Diferenciadores</span>
          </div>
          <h2 className="section-title">
            ¿Por qué las familias eligen AKdemia?
          </h2>
          <p className="section-subtitle">
            No somos una guardería pasiva ni un aula masiva tradicional. Creamos un entorno 
            donde la calidez humana y la excelencia pedagógica van de la mano.
          </p>
        </div>

        {/* 6 Differentiators Grid */}
        <div className="diff-grid">
          {DIFFERENCIALS.map((item, idx) => (
            <div key={idx} className="diff-card">
              <div className="diff-icon-box">
                {getIcon(item.icon)}
              </div>
              <h3 className="diff-card-title">{item.title}</h3>
              <p className="diff-card-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Banner Highlight "Sin Pantallas" */}
        <div className="screen-free-banner">
          <div className="screen-free-content">
            <span className="screen-free-badge">Filosofía Central</span>
            <h3 className="screen-free-title">El poder de crecer sin pantallas en la tarde</h3>
            <p className="screen-free-text">
              La sobreexposición a pantallas fragmenta la atención y aumenta la irritabilidad infantil. 
              En AKdemia demostramos día a día que con materiales concretos, libros estimulantes, 
              dinámicas corporales y conversación real, los niños aprenden más rápido, descansan mejor 
              y son notablemente más felices.
            </p>
          </div>
          <div className="screen-free-pill-group">
            <div className="screen-pill">🧠 Mayor concentración</div>
            <div className="screen-pill">🎨 Creatividad activa</div>
            <div className="screen-pill">🤝 Habilidades sociales vivas</div>
          </div>
        </div>

      </div>
    </section>
  );
};
