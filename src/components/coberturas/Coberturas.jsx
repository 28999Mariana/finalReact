import React from 'react';
import { Link } from 'react-router-dom';
import './coberturas.css';

// componente funcional 'Coberturas'
const Coberturas = () => {
  // defino opciones de cobertura con sus costos
  const opcionesCobertura = [
    { cobertura: 'Standard Coverage', costo: '$2.999 /month' },
    { cobertura: 'Mid-Level Coverage', costo: '$5.999 /month' },
    { cobertura: 'Premium Coverage', costo: '$7.999 /month' },
  ];

  // renderizo el componente de coberturas
  return (
    <div className="container-coberturas">
      {/* título de la sección */}
      <h2>Home Insurance</h2>
      {/* descripción de la sección */}
      <h3>Communicating everything we have for you is too small for us.</h3>
      {/* ícono de tel y n° de contacto */}
      <i className="fas fa-phone phone-icon">
        <h5>0800-999-3365</h5>
      </i>

      {/* contenedor central con btn de retroceso */}
      <div className="center separador">
        {/* btn de retroceso vinculado a la ruta "/form" */}
        <Link to="/form">
          <button className="button button-outline">Go Back</button>
        </Link>
      </div>

      {/* tabla que muestra las opciones de cobertura y sus costos */}
      <table>
        {/* encabezado de la tabla */}
        <thead>
          <tr>
            <th className="header">Coverage</th>
            <th className="header">Costs</th>
          </tr>
        </thead>
        {/* cuerpo de la tabla con datos dinámicos */}
        <tbody>

          {/* uso el método map p/ recorrer el array opcionesCobertura. Este método crea un nuevo array c/ los resultados de llamar a una función p/ c/ elemento del array original */}
          {opcionesCobertura.map((opcion, index) => (

          
            <tr key={index} className="fila-hover"> {/*c/ elemento del array opcionesCobertura, se representa como una fila (<tr>) en la tabla. El atributo key lo uso p/ ayudar a React a que identifique c/ fila de manera única */}


              {/* celda con el nombre de la cobertura */}
              <td className="celda">{opcion.cobertura}</td>
              {/* celda con el costo de la cobertura */}
              <td className="celda">{opcion.costo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// exporto el componente '>Coberturas'
export default Coberturas;