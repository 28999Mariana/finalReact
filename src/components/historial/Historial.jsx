import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './historial.css'; 

// define el componente funcional Historial
const Historial = () => {
  // defino el estado local 'historialCotizaciones' y la función 'setHistorialCotizaciones' p/ actualizar el estado
  const [historialCotizaciones, setHistorialCotizaciones] = useState([]);

  // utiliza el hook useEffect p/ hacer efectos secundarios cdo se monta el componente
  useEffect(() => {
    // define la función 'cargarHistorial' p/ cargar el historial de cotizaciones desde el localStorage
    const cargarHistorial = () => {
      // obtengo el historial almacenado en el localStorage y lo convierto a un array; si no hay historial, uso un array vacío
      const historialGuardado = JSON.parse(localStorage.getItem("historialCotizaciones")) || [];
      // actualizo el estado 'historialCotizaciones' con el historial cargado
      setHistorialCotizaciones(historialGuardado);
    };

    // llamo a la función 'cargarHistorial' cuando el componente se monta
    cargarHistorial();
  }, []); // la dependencia vacía me asegura que este efecto se ejecute solo una vez al montar el componente

  // defino la función 'retornoTablaHTML' que toma una fila de cotización y devuelve una fila de tabla HTML
  const retornoTablaHTML = (fila) => (
    // retorna un elemento tr (fila de tabla) con una key(clave) que se basa en la fecha de cotización
    <tr key={fila.fechaCotizacion}>  
      <td>{fila.fechaCotizacion && new Date(fila.fechaCotizacion).toLocaleString('es-ES')}</td>  {/* celda (td) que muestra la fecha de cotización en formato localizado */}
      <td>{fila.propiedad}</td>  {/* celda (td) que muestra la propiedad */}
      <td>{fila.ubicacion}</td>  {/* celda (td) que muestra la ubicación */}
      <td>{fila.metrosCuadrados}</td>  {/* celda (td) que muestra los m2 */}
      <td>${fila.poliza && fila.poliza.toLocaleString()}</td> {/* celda (td) que muestra el precio del seguro en formato localizado y con el símbolo '$' puesto antes */}
    </tr>
  );

  // defino la función 'vaciarTabla' p/ eliminar el historial de cotizaciones y actualizar el estado
  const vaciarTabla = () => {
    // elimino el historial de cotizaciones del localStorage
    localStorage.removeItem("historialCotizaciones");
    // actualizo el estado 'historialCotizaciones' con un array vacío
    setHistorialCotizaciones([]);
  };

  // devuelve el JSX del componente Historial
  return (
    <div className="container-coberturas container-historial center">
      <h2 className="center separador">Cotizaciones Historial</h2>

      <div className="center separador">
        {/* btn de retroceso que usa el componente Link para navegar a la ruta '/' */}
        <Link to="/">
          <button className="button button-outline">Go Back</button>
        </Link>
      </div>

      {/* condición: si hay cotizaciones en el historial, muestro la tabla; de lo contrario, muestro un mensaje */}
      {historialCotizaciones.length > 0 ? (
        <>
          {/* btn p/ vaciar la tabla que llama a la función 'vaciarTabla' al hacer click */}
          <button onClick={vaciarTabla}>Empty table</button>
          {/* tabla que muestra las cotizaciones del historial */}
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Property</th>
                <th>Location</th>
                <th>Square Meters</th>
                <th>Policy Price</th>
              </tr>
            </thead>
            <tbody>
              {/* mapeo c/ fila del historial y llamo a 'retornoTablaHTML' p/ renderizar la fila en la tabla */}
              {historialCotizaciones.map((fila) => retornoTablaHTML(fila))}
            </tbody>
          </table>
        </>
      ) : (
        // se muestra mensaje cuando no hay cotizaciones en el historial
        <p>No hay cotizaciones en el historial.</p>
      )}
    </div>
  );
};


export default Historial;