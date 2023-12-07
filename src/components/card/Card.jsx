import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const Card = ({ imageName, modelName }) => {
  return (
    <Link to={modelName.toLowerCase() === 'home' ? '/form/FormPrincipal' : '#'}>
      <div className="card">
        <img src={`images/${imageName}`} alt={modelName} />
        <span className="model-name">{modelName}</span>
      </div>
    </Link>
  );
};

export default Card;