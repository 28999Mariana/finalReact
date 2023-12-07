import React, { useState } from 'react';
import Toastify from 'toastify-js';
import './modal.css';

// componente funcional 'ContactModal'
const ContactModal = ({ isOpen, onClose }) => {
  // estado local p/ los datos del form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // estado local p/ los errores del form
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  // manejador de cambios en los campos del form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // actualizo datos del form
    setFormData({
      ...formData,
      [name]: value,
    });
    // limpio el mensaje de error al modificar el campo
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  // validar el form
  const validateForm = () => {
    const errors = {};  //objeto p/almacenar errores del form
    if (!formData.name.trim()) {  //elimino los espacios en blanco al principio y al final del valor en el campo name. Si después de quitar los espacios la cadena que resulta está vacía, significa que el campo estaba formado x espacios en blanco, entonces se considera campo vacío. Se le da el mensaje de error "Name is required" al objeto de errores (errors.name)
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required'; //lo mismo p/email
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) {      //lo mismo p/message
      errors.message = 'Message is required';
    }

    // actualizo errores del form
    setFormErrors(errors);
    

    
    // si no hay errores, la validación es exitosa
    return Object.values(errors).every((error) => error === '');
  };

  // manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // validaciones del formulario
    if (!validateForm()) {
      // alerta de error Toastify si la validación falla
      Toastify({
        text: 'Please fill out all required fields correctly',
        duration: 3000,
        newWindow: true,
        gravity: 'top',
        position: 'absolute',
        style: {
          width: '200px',
          height: '20px',
          background: 'white',
          padding: '30px',
          fontSize: '20px',
          color: '#ce261b',
          position: 'absolute',
          top: '50%', 
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '2',
        },
      }).showToast();
      return;
    }

    // alerta Toastify si la validación es exitosa
    Toastify({
      text: 'Form submitted successfully!',
      duration: 3000,
      newWindow: true,
      gravity: 'top',
      position: 'right',
      backgroundColor: 'white',
      style: {
        width: '200px',
        height: '80px',
        background: 'white',
        paddingTop: '30px',
        paddingLeft: '30px',
        fontSize: '20px',
        color: '#ce261b',
        position: 'absolute',
        top: '50%', 
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '2',
      },
    }).showToast();

    // cierre del modal
    onClose();
  };

  // renderizar el componente ContactModal
  return (
    <div className={`contact-modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        {/* btn p/ cerrar el modal */}
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <div className="modal-header">
          <h2>Contact Us</h2>
          <span className="close-header" onClick={onClose}></span>
        </div>
        {/* form de contacto */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <div className="error-message">{formErrors.name}</div>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <div className="error-message">{formErrors.email}</div>

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <div className="error-message">{formErrors.message}</div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

// exporto el componente 'ContactModal'
export default ContactModal;