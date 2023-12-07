
# Proyecto Bancario con Cotizador de Seguros y Funcionalidades Adicionales

Descripción del Proyecto:

Este proyecto es una aplicación web desarrollada en React que simula una experiencia bancaria interactiva. Al iniciar sesión en la página principal, los usuarios reciben una alerta de préstamo personal preaprobado. La navegación del sitio incluye un formulario de contacto en un modal accesible a través del elemento "Contact" en la barra de navegación.

El componente central del proyecto es el Cotizador de Seguros de Hogar, ubicado en la card 'Home' del slider giratorio (Slider.jsx). Al interactuar con el cotizador, se accede a un formulario principal (FormPrincipal.jsx) que presenta diversas funcionalidades:

Quote: Calcula el valor del seguro de hogar según las opciones seleccionadas en el cotizador.
Save Quote: Almacena la cotización generada en el historial para futuras referencias.
View History: Enlaza al componente Historial.jsx, que contiene una tabla con las cotizaciones almacenadas. Permite visualizar y gestionar el historial de cotizaciones.
Empty Table: Permite vaciar la tabla de historial para evitar la sobrecarga de datos.
Además, el componente FormPrincipal.jsx incluye un botón "See Coverage" que lleva a un componente con una tabla que muestra diferentes tipos de coberturas y sus precios. Además, se presenta un número de contacto junto con iconos animados en el margen superior.

