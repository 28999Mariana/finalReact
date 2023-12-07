import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import Toastify from 'toastify-js';
import Nav from "./components/nav/Nav";
import Hero from './components/hero/Hero';
import About from "./components/about/About";
import AboutB from "./components/aboutB/AboutB";
import './style.css';
import MyServices from "./components/myServices/MyServices";
import GraficoEstadistico from "./components/grafico/GraficoEstadistico";
import BackgroundQ from "./components/background/BackgroundQ";
import Product from "./components/product/Product";
import Slider from "./components/slider/Slider";
import Beneficios from "./components/beneficios/Beneficios";
import Inclusion from './components/inclusion/Inclusion';
import Footer from "./components/footer/Footer";
import FormPrincipal from "./components/form/FormPrincipal";
import Historial from "./components/historial/Historial"; 
import Coberturas from "./components/coberturas/Coberturas";

function App() {
  const [perfil, setPerfil] = useState();
  const [alertaMostrada, setAlertaMostrada] = useState(false);

  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => {
        setPerfil(data);

        // muestro alerta solo si el perfil está definido y no se ha mostrado antes
        if (data && !alertaMostrada) {
          alertaPreAprobado();
          setAlertaMostrada(true);
        }
      });
  }, []); // dependencia vacía p/ que se ejecute solo una vez (no me funcionó!je)




  // función p/ mostrar la alerta de préstamo preaprobado
  const alertaPreAprobado = () => {
    Toastify({
      text: "Congratulations! You have a pre-approved loan. Please click here for more details!",
      duration: 4000,
      newWindow: true,
      gravity: "top",
      position: "left",
      style: {
        width: "200px",
        border: "1px white solid",
        height: "100px",
        background: "white",
        padding: "30px",
        fontSize: "20px",
        color: "rgb(60, 58, 58)",
        position: "absolute",
        top: "140%",
        left: "1350px",
        transform: "translate(-50%, -50%)",
      },
    }).showToast();
  };

  return (
    <Router>
      {perfil ? (
        <Routes>
          <Route path="/" element={<>
            <Nav />
            <Hero perfil={perfil} />
            <About descripcion={perfil.descripcion} />
            <AboutB />
            <MyServices />
            <GraficoEstadistico />
            <BackgroundQ />
            <Product />
            <Slider />
            <Beneficios />
            <Inclusion />
            <Footer nombre={perfil.nombre} />
          </>} />
          <Route path="/form/*" element={<FormPrincipal />} />
          
          <Route path="/historial" element={<Historial />} />
          
          <Route path="/coberturas" element={<Coberturas />} />
        </Routes>
      ) : (
        <h1>cargando...</h1>
      )}
    </Router>
  );
}

export default App