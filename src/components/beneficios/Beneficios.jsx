import React, { useState, useEffect } from 'react';
import './beneficios.css';

// componente funcional 'Beneficios'
const Beneficios = () => {
  // estado local p/ almacenar los datos de beneficios del archivo JSON
  const [datosBeneficios, setDatosBeneficios] = useState(null);

  // uso el hook useEffect p/ realizar una solicitud al archivo JSON 
  useEffect(() => {
    fetch('beneficios.json')
      .then((res) => res.json())
      .then((data) => setDatosBeneficios(data))
      .catch(error => console.error("Error fetching beneficios data:", error));
  }, []);

  // si los datos de beneficios aún no se han cargado, se muestra un mensaje de carga
  if (!datosBeneficios) {
    return <h1>cargando...</h1>;
  }

  // desestructuración de datos beneficios
  const { titulo, frase, beneficios } = datosBeneficios;

  // se renderiza beneficios
  return (
    <section className="beneficios">
      {/* título de la sección */}
      <h2>{titulo}</h2>
      {/* descripción de la sección */}
      <p>{frase}</p>

      {/* contenedor de img de beneficios */}
      <div className="beneficios-images">
        {/* mapeo de beneficios p/ renderizar elementos 'beneficio-item' */}
        {beneficios.map((beneficio) => (
          <div className="beneficio-item" key={beneficio.id}>
            {/* img del beneficio */}
            <img src={beneficio.imagen} alt={`Beneficio ${beneficio.id}`} />
            {/* Btn del beneficio */}
            <button>{beneficio.textoBoton}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

// exporto el componente 
export default Beneficios;