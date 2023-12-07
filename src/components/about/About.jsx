import React, { useState } from 'react';
import './about.css';

// componente funcional about que acepta la propiedad 'descripción'
const About = ({ descripcion }) => {
  // estado local p/ manejar el índice activo del slider
  const [activeIndex, setActiveIndex] = useState(0);

  // lista de img del slider
  const images = [
    'portada.jpg',
    'portada2.jpg',
    'portada3.jpg',
    'portada4.jpg',
  ];

  // función p/ manejar el click en los puntos de navegación del slider
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  // estilos dinámicos p/ el slider
  const sliderStyle = {
    // transformación p/ cambiar la posición en el eje X respecto al índice activo
    transform: `translateX(${-activeIndex * (100 / images.length)}%)`,
    // transición p/ el cambio de img
    transition: 'transform 0.5s ease',
    // muestro las img en una fila horizontal
    display: 'flex',
    // ajusto ancho total del slider según la cantidad de img
    width: `${images.length * 100}%`,
  };

  // renderizo la sección About Us
  return (
    <section className="about">
      {/* título de la sección */}
      <h2>About Us</h2>
      {/* descripción de la sección obtenida como propiedad */}
      <p>{descripcion}</p>

      {/* contenedor del slider */}
      <div className="slider-contenedor">
        {/* slider de img */}
        <div className="slider" style={sliderStyle}>
          {/* mapeo de img p/ renderizarlas en el slider */}
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              // aplico la clase 'active' a la img actual en función del índice activo
              className={index === activeIndex ? 'active' : ''}
              // ajustar el ancho de c/ imhg según cantidad de img
              style={{ flex: `0 0 ${100 / images.length}%` }}
            />
          ))}
        </div>
      </div>

      {/* controles de navegación (puntos) */}
      <div className="controls">
        {/* mapeo puntos de navegación p/ renderizarlos */}
        {images.map((_, index) => (
          <span
            key={index}
            // aplico la clase 'active' al punto actual en función del índice activo
            className={index === activeIndex ? 'active' : ''}
            // manejo el click en el punto para cambiar el índice activo
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

// exporto el componente 'About' 
export default About;