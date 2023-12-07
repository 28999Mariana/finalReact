import React from 'react';
import Section from '../section/Section';
import CardServices from '../cardServices/cardServices';
import './bankingServices.css'

const bankingServices = [
  
  {
    id: 1,
    icono: 'card1.png', 
    titulo: 'Mortgage Services',
    
  },
  {
    id: 2,
    icono: 'card2.png', 
    titulo: 'Credit Cards',
    
  },
  {
    id: 3,
    icono: 'card3.png', 
    titulo: 'Customer Support',
    
  },

  {
    id: 4,
    icono: 'card4.png', 
    titulo: 'Customer Support',
    
  }
];

const BankingServices = () => {
  return (
    <div className='banking'>
    <Section titulo="Banking Services">
    <p className="descriptionText">Explore our comprehensive banking services designed to meet your financial needs.</p>
      <div className="containerCard">
        {bankingServices.map((service) => (
          <CardServices key={service.id} {...service} />
        ))}
      </div>
    </Section>
    </div>
  );
};

export default BankingServices;