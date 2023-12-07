import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Card from '../card/Card';
import './slider.css';

const Slider = () => {
  const cardData = [
    {
      imageName: '../hogar.jpg',
      modelName: 'HOME',
    },
    {
      imageName: '../auto.jpg',
      modelName: 'CAR',
    },
    {
      imageName: '../celular.jpg',
      modelName: 'CELL',
    },
    {
      imageName: '../accidente.jpg',
      modelName: 'ACCIDENT',
    },
    {
      imageName: '../tarjetas.jpg',
      modelName: 'CARD',
    },
    {
      imageName: '../vida.jpg',
      modelName: 'LIFE',
    },
  ];

  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="slider-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="void">
        <div className="crop">
          <ul
            id="card-list"
            style={{ '--count': cardData.length, animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {cardData.map((data, index) => (
              <li key={index}>
                {data.modelName === 'HOME' ? (
                  <Link to="/form/formprincipal">
                    <Card {...data} />
                  </Link>
                ) : (
                  <Card {...data} />
                )}
              </li>
            ))}
          </ul>
          <div className="last-circle"></div>
          <div className="second-circle"></div>
        </div>
        <div className="mask"></div>
        <div className="center-circle"></div>
      </div>
    </div>
  );
};

export default Slider;