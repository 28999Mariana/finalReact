class Clase {
  constructor(costoM2, factorPropiedad, factorUbicacion, metros2) {
    this.costoM2 = parseFloat(costoM2);
    this.factorPropiedad = parseFloat(factorPropiedad);
    this.factorUbicacion = parseFloat(factorUbicacion);
    this.metros2 = parseInt(metros2);
  }

  cotizarPoliza() {
    const costoTotal = this.costoM2 * this.metros2;
    const factorTotal = this.factorPropiedad * this.factorUbicacion;
    const precioEstimado = costoTotal * factorTotal;
    return precioEstimado;
  }
}

export default Clase;