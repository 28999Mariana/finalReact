import React from 'react';
import './aboutB.css';

// componente funcional 'ServiceItem' 
const ServiceItem = ({ titulo, frase, icono }) => {
  return (
    <div className="service-item">
      {/* ícono de Font Awesome  */}
      <i className={`fas fa-${icono} fa-3x`} />
      {/* título del servicio */}
      <h3>{titulo}</h3>
      {/* descripción del servicio */}
      <p>{frase}</p>
    </div>
  );
};

// componente principal 'AboutB'
const AboutB = () => {
  // lista de servicios con títulos, frases y nombres de íconos
  const servicios = [
    { titulo: "Financial Empowerment Hub", frase: "Unlock your dreams with our tailored loan solutions. Empowering your financial journey, one step at a time.", icono: "key" },
    { titulo: "Secure Funding Partner", frase: "Your trusted ally in financial growth. Secure the funds you need with our reliable loan options.", icono: "lock" },
    { titulo: "SwiftLoan Innovations", frase: "Experience financial agility with our innovative loan services. Swift, seamless, and tailored just for you.", icono: "arrow-up" },
    { titulo: "Prime Lending Solutions", frase: "Elevate your aspirations with prime lending options. We redefine banking for a brighter financial future.", icono: "star" },
  ];

  //renderizo la sección de servicios
  return (
    <section className="services-section">
      <div className="container-aboutB">
        
        <h2></h2>
        {/* contenedor cuadrícula p/ los servicios */}
        <div className="services-grid">
          {/* mapeo de servicios p/ renderizar elementos 'ServiceItem' */}
          {servicios.map((servicio, index) => (
            <ServiceItem key={index} titulo={servicio.titulo} frase={servicio.frase} icono={servicio.icono} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default AboutB;