import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from '../contact/ContactModal'; 
import './nav.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openContactModal = () => {
    setContactModalOpen(true);
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
  };


  const navItems = ['HOME', 'ABOUT US', 'SERVICES', 'LOAN QUOTE', 'CONTACT'];

  return (
    <div className={`nav ${menuOpen ? 'open' : ''}`}>
      <div className="icon" onClick={toggleMenu}>
        {menuOpen ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        {navItems.map((item, index) => (
          <li key={index}>
            {item === 'LOAN QUOTE' ? (
              <Link to="/prestamo">{item}</Link>
            ) : item === 'CONTACT' ? (
              <button onClick={openContactModal}>{item}</button>
            ) : (
              item
            )}
          </li>
        ))}
      </ul>

      {/* modal de contacto */}
      {contactModalOpen && <ContactModal onClose={closeContactModal} />}
    </div>
  );
};

export default Nav;