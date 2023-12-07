import React from 'react';
import './product.css';

const Product = () => {
  const products = [
    { id: 1, name: 'Financing', image: 'financiacion.png' },
    { id: 2, name: 'Investment', image: 'inversion.png' },
    { id: 3, name: 'Accounts', image: 'cuentas.png' },
    { id: 4, name: 'Insurance', image: 'seguros.png' },
  ];

  return (
    <section className="product">
      <h2>Our Products</h2>
      <p>Explore our amazing products and find the perfect fit for you!</p>

      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;