import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Toastify from 'toastify-js';
import Clase from './Clase';
import Historial from '../historial/Historial';
import Coberturas from '../coberturas/Coberturas';
import './form.css';


// defino el componente funcional FormPrincipal
const FormPrincipal = () => {

  // creo referencias p/ acceder a elementos del DOM
  const selectPropiedadRef = useRef(null);
  const selectUbicacionRef = useRef(null);
  const inputMetros2Ref = useRef(null);
  const valorPolizaRef = useRef(null);
  const btnEnviarRef = useRef(null);
  const btnCotizarRef = useRef(null);


  // defino estados p/ almacenar valores dinámicos
  const [metrosCuadrados, setMetrosCuadrados] = useState(20);
  const [precioPoliza, setPrecioPoliza] = useState(0);

  //defino datos estáticos de propiedades y ubicaciones en un array de objetos
  const [datos] = useState([
    {
      "categoria": "propiedad",
      "tipo": "Casa",
      "factor": 1.09
    },
    {
      "categoria": "propiedad",
      "tipo": "P.H.",
      "factor": 1.05
    },
    {
      "categoria": "propiedad",
      "tipo": "Depto. Edificio",
      "factor": 1.02
    },
    {
      "categoria": "propiedad",
      "tipo": "Barrio Privado",
      "factor": 1.19
    },
    {
      "categoria": "propiedad",
      "tipo": "Oficina",
      "factor": 2.39
    },
    {
      "categoria": "propiedad",
      "tipo": "Local Comercial",
      "factor": 1.41
    },
    {
      "categoria": "propiedad",
      "tipo": "Depósito Logística",
      "factor": 1.92
    },
    {
      "categoria": "ubicacion",
      "tipo": "CABA",
      "factor": 1.13
    },
    {
      "categoria": "ubicacion",
      "tipo": "Tandil",
      "factor": 1.04
    },
    {
      "categoria": "ubicacion",
      "tipo": "Costa Atlántica",
      "factor": 1.29
    },
    {
      "categoria": "ubicacion",
      "tipo": "Patagonia",
      "factor": 1.00
    }
  ]);
  

  //uso useEffect p/ cargar las opciones en los selectores al renderizar
  useEffect(() => {
    const cargarCombo = (array, select) => {
      select.innerHTML = "";
      array.forEach(elemento => {
        select.innerHTML += `<option value="${elemento.tipo}">${elemento.tipo}</option>`;
      });
    };

    const propiedades = datos.filter(dato => dato.categoria === "propiedad");
    const ubicaciones = datos.filter(dato => dato.categoria === "ubicacion");

    const propiedadesUnicas = [...new Set(propiedades.map(propiedad => propiedad.tipo))];
    const ubicacionesUnicas = [...new Set(ubicaciones.map(ubicacion => ubicacion.tipo))];

    cargarCombo(propiedadesUnicas.map(tipo => propiedades.find(propiedad => propiedad.tipo === tipo)), selectPropiedadRef.current);
    cargarCombo(ubicacionesUnicas.map(tipo => ubicaciones.find(ubicacion => ubicacion.tipo === tipo)), selectUbicacionRef.current);
  }, [datos]);


  //función p/ hacer la cotización y mostrar el resultado
  const cotizar = () => {
    if (!selectPropiedadRef.current.value || !selectUbicacionRef.current.value) {
      return;
    }

    const nombrePropiedad = selectPropiedadRef.current.value;
    const nombreUbicacion = selectUbicacionRef.current.value;
    const factorPropiedad = parseFloat(datos.find(dato => dato.tipo === nombrePropiedad).factor);
    const factorUbicacion = parseFloat(datos.find(dato => dato.tipo === nombreUbicacion).factor);
    const costoM2 = 5;
    const cotizacion = new Clase(costoM2, factorPropiedad, factorUbicacion, metrosCuadrados);
    const precioEstimado = cotizacion.cotizarPoliza();
    setPrecioPoliza(precioEstimado);

    Toastify({
      text: `Estimated policy price: $${precioEstimado.toFixed(2)}`,
      duration: 4000,
      newWindow: true,
      gravity: "top",
      position: "center",
      style: {
        width: "200px",
        border: "1px white solid",
        height: "50px",
        background: "white",
        padding: "30px",
        fontSize: "20px",
        color: "#ce261b",
        position: "absolute",
        top: "80%",
        left: "400px",
        transform: "translate(-50%, -50%)",
      },
    }).showToast();
  };
  

  //función p/ hacer la cotización y guardar en historial
  const realizarCotizacion = () => {
    if (!selectPropiedadRef.current.value || !selectUbicacionRef.current.value || inputMetros2Ref.current.value < 20) {
      return;
    }

    cotizar();
  };
  

  //función p/ guardar la cotización en el historial
  const guardarEnHistorial = () => {
    if (!selectPropiedadRef.current.value || !selectUbicacionRef.current.value || inputMetros2Ref.current.value < 20) {
      return;
    }

    const cotizacion = {
      fechaCotizacion: new Date().toLocaleString(),
      propiedad: selectPropiedadRef.current.value,
      ubicacion: selectUbicacionRef.current.value,
      metrosCuadrados: inputMetros2Ref.current.value,
      poliza: valorPolizaRef.current.innerText
    };
    const historialCotizaciones = JSON.parse(localStorage.getItem("historialCotizaciones")) || [];
    historialCotizaciones.push(cotizacion);
    localStorage.setItem("historialCotizaciones", JSON.stringify(historialCotizaciones));
    toast();
    btnEnviarRef.current.classList.add("ocultar");
  };

  const toast = () => {
    Toastify({
      text: "Saved quote.",
      duration: 4000,
      newWindow: true,
      gravity: "top",
      position: "right",
      style: {
        width: "200px",
        border: "1px white solid",
        height: "30px",
        background: "white",
        padding: "30px",
        fontSize: "20px",
        color: "#ce261b",
        position: "absolute",
        top: "80%",
        left: "400px",
        transform: "translate(-50%, -50%)",
      }
    }).showToast();
  };

  return (
    <div className="div-cotizador center">
      <h2 className="center separador">Complete the requested information</h2>


      <div className="center separador">
        {/* Agrega el botón de retroceso */}
        <Link to="/">
          <button className="button button-outline">Go Back</button>
        </Link>
      </div>
      {/* ... (revisar) */}

      <div className="opciones">
        <label htmlFor="selectPropiedad">Property</label>
        <select ref={selectPropiedadRef} id="selectPropiedad">
          <option value="">...</option>
        </select>
      </div>
      <div className="opciones">
        <label htmlFor="selectUbicacion">Location</label>
        <select ref={selectUbicacionRef} id="selectUbicacion">
          <option value="">...</option>
        </select>
      </div>
      <div className="opciones">
        <label htmlFor="metros2">Enter the square meters:</label>
        <input
          type="number"
          id="metros2"
          value={metrosCuadrados}
          onChange={(e) => setMetrosCuadrados(e.target.value)}
          min="20"
          max="500"
          ref={inputMetros2Ref}
          className="metros-cuadrados"
          required
        />
      </div>
      <div className="center separador">
        <button className="button button-outline" onClick={realizarCotizacion} ref={btnCotizarRef}>
          Quote
        </button>
      </div>
      <div className="center separador">
        <p className="importe">
          Estimated price: $ <span id="valorPoliza" ref={valorPolizaRef}>{precioPoliza.toFixed(2)}</span>
          <button className="button button-outline guardar" title="Save Quote" onClick={guardarEnHistorial} ref={btnEnviarRef}>
            Save Quote
          </button>
        </p>
      </div>
      <div className="center separador">
        <Link to="/historial">
          <button className="button button-outline">View History</button>
        </Link>
      </div>
      <div className="center separador">
        <Link to="/coberturas">
          <button className="button button-outline">See Coverage</button>
        </Link>
      </div>

      <div className="contenedor-img">
        <img className='img-1' src="../home-form.svg" alt="casa" />
      </div>

      <Routes>
        <Route path="historial" element={<Historial />} />
        <Route path="coberturas" element={<Coberturas />} />
      </Routes>
    </div>
  );
};

export default FormPrincipal;