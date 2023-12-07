import React from 'react';
import './Footer.css';

const Footer = ({ nombre }) => {
  const redesSociales = [
    { nombre: 'Facebook', url: 'https://www.facebook.com/tu_pagina', icono: 'fab fa-facebook' },
    { nombre: 'Twitter', url: 'https://twitter.com/tu_cuenta', icono: 'fab fa-twitter' },
    { nombre: 'YouTube', url: 'https://www.youtube.com/tu_canal', icono: 'fab fa-youtube' },
  ];

  return (
    <footer className="footer-container">
      <h2>{nombre}</h2>
      <ul className="footer-social">
        {redesSociales.map((redSocial, index) => (
          <li key={index}>
            <a href={redSocial.url} target="_blank" rel="noopener noreferrer">
              <i className={redSocial.icono}></i>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;