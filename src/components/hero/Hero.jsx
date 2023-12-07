import './hero.css';// importo 'hero.css'

// componente funcional Hero que recibe una prop llamada 'perfil'
const Hero = ({ perfil }) => {
  // desestructuro propiedades del objeto perfil
  const { nombre, secundario, imagen, descripcion, contacto } = perfil;

  // renderizo la sección de Hero
  return (
    <section className="hero">
      {/* título principal */}
      <h2 className='titulo'> {nombre} </h2>

      {/* descripción secundaria */}
      <h3 className='secundario'> {secundario} </h3>

      {/* contenedor principal */}
      <div className="container">
        {/* info del perfil */}
        <div className='profile_info'>
          {/* Sección de contacto */}
          <div className='profile_contact'>
            {/* mapeo c/ elemento en el array contacto */}
            {contacto.map(item => (
              <a key={item.id} href={item.url}>
                {/* ícono de c/ elemento */}
                <i className={item.icono}></i>
              </a>
            ))}
          </div>
        </div>

        {/* img del perfil */}
        <div className='profile_img'>
          {/* muestro img del perfil */}
          <img src={imagen} alt={nombre} />
        </div>
      </div>
    </section>
  );
}

// exportar el componente 'Hero'
export default Hero;