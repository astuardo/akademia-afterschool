import React, { useState } from 'react';
import { X, ChevronRight, Zap } from 'lucide-react';

export const ProposalComparisonBanner: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="proposal-demo-bar">
        <div className="container demo-bar-container">
          <div className="demo-bar-left">
            <span className="demo-pill">🚀 Demo Funcional</span>
            <span className="demo-text">
              Propuesta Tecnológica Moderna para <strong>AKdemia Afterschool</strong>
            </span>
          </div>

          <div className="demo-bar-right">
            <span className="demo-metric">⚡ Cero costo mensual de hosting • 100% optimizada para Instagram</span>
            <button 
              onClick={() => setShowModal(true)} 
              className="demo-compare-btn"
              id="compare-modal-btn"
            >
              <span>Ver comparativa con cotización</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modal-window modal-window-lg" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setShowModal(false)}
              aria-label="Cerrar"
            >
              <X size={22} />
            </button>

            <div className="modal-body">
              <div className="modal-header">
                <div className="modal-icon-badge bg-emerald">
                  <Zap size={24} color="#059669" />
                </div>
                <h3 className="modal-title">Comparativa de Enfoque Tecnológico</h3>
                <p className="modal-subtitle">
                  Por qué esta alternativa moderna supera ampliamente a la cotización tradicional en WordPress + Elementor
                </p>
              </div>

              <div className="comparison-table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Criterio</th>
                      <th className="col-old">Propuesta Cotizada (WordPress + Elementor)</th>
                      <th className="col-new">Esta Propuesta Moderna (Jamstack / Serverless)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Costo de Hosting</strong></td>
                      <td className="text-danger">❌ $6.000 a $15.000 CLP / mes de por vida</td>
                      <td className="text-success">✅ <strong>$0 CLP / mes de por vida</strong> (Cloudflare/Vercel)</td>
                    </tr>
                    <tr>
                      <td><strong>Velocidad Móvil (Instagram)</strong></td>
                      <td className="text-danger">⚠️ Lenta (Elementor genera 3MB+ de CSS/JS pesado)</td>
                      <td className="text-success">✅ <strong>Instantánea (&lt; 0.8s)</strong>, Core Web Vitals 95-100</td>
                    </tr>
                    <tr>
                      <td><strong>Mantenimiento y Seguridad</strong></td>
                      <td className="text-danger">⚠️ Requiere actualizar plugins, PHP y vigilar hackeos</td>
                      <td className="text-success">✅ <strong>Cero mantenimiento de servidor</strong>, código estático inmune</td>
                    </tr>
                    <tr>
                      <td><strong>Selector de Soluciones</strong></td>
                      <td>Simple maqueta estática</td>
                      <td className="text-success">✅ <strong>100% interactivo</strong> con enrutamiento dinámico a WhatsApp</td>
                    </tr>
                    <tr>
                      <td><strong>Estabilidad de Diseño</strong></td>
                      <td className="text-danger">⚠️ Los clientes suelen desconfigurar Elementor al editar</td>
                      <td className="text-success">✅ <strong>Diseño sólido e inquebrantable</strong> para móviles y tablets</td>
                    </tr>
                    <tr>
                      <td><strong>Gasto Anual Recurrente</strong></td>
                      <td>~$80.000 a $150.000 CLP al año</td>
                      <td className="text-success"><strong>Sólo el dominio .cl</strong> (~$9.950 CLP al año en NIC Chile)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="modal-footer-note">
                <p>
                  💡 <strong>Conclusión:</strong> Manteniendo la excelente estrategia de contenidos de la propuesta, 
                  cambiar la base técnica a esta arquitectura moderna le ahorra dinero al cliente mes a mes 
                  y duplica la tasa de conversión en apoderados que entran desde Instagram en su celular.
                </p>
              </div>

              <button 
                onClick={() => setShowModal(false)}
                className="btn btn-primary btn-block"
              >
                Volver a la Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
