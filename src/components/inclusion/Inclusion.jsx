import React from 'react';
import './inclusion.css'; 

const Inclusion = () => {
  return (
    <section className="inclusion-container">
      <img src="/public/apoyo.svg" alt="Inclusión"  />
      <div className="inclusion-text">
        <h2>We want to ensure inclusive and accessible care</h2>
        <p>If you need help, go to a branch and request a sign language interpreter to assist you.</p>
        <button>See More</button>
      </div>
    </section>
  );
};

export default Inclusion;