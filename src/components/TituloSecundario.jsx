// En versiones anteriores de react era necesario importar la libreria de react
// en la version actual no es necesario
// import React from 'react';
// Siempre nuestros componentes se deben poder exportar

// Una de las formas de mostrar los objetos props es agregar props en los parametros del componente
// Y donde lo quiero usar pongo las {props.propiedad}

// const TituloSecundario = (props) => {
//   return (
//     <article>
//       {/* Siempre que escribimos dentro de react, codigo de js va encerrado entre llaves */}
//       <h2>Practica con react {props.anioActualprops}</h2>
//       <p>
//         React es una biblioteca de JavaScript desarrollada por Facebook que se
//         utiliza para construir interfaces de usuario interactivas y eficientes.
//         Su enfoque se centra en la construcción de componentes reutilizables que
//         gestionan su propio estado y pueden actualizarse de manera eficiente
//         mediante la manipulación del DOM virtual. React utiliza un modelo de
//         programación declarativa, lo que significa que los desarrolladores
//         describen cómo debería ser la interfaz de usuario y React se encarga de
//         gestionar los cambios de manera eficiente a través de su Virtual DOM.
//         Además, React es parte de un ecosistema sólido que incluye herramientas
//         como React Router para el enrutamiento y Redux para la gestión del
//         estado global. Su popularidad se debe a su capacidad para crear
//         aplicaciones web modernas y escalables, así como a una activa comunidad
//         de desarrolladores y una documentación exhaustiva.
//         <br/>
//         Comisión: {props.comision}
//       </p>
//     </article>
//   );
// };

// Otra forma de mostrar los objetos es mediante la desestructuracion
const TituloSecundario = ({comision, anioActualprops}) => {
  return (
    <article>
      {/* Siempre que escribimos dentro de react, codigo de js va encerrado entre llaves */}
      <h2>Practica con react {anioActualprops}</h2>
      <p>
        React es una biblioteca de JavaScript desarrollada por Facebook que se
        utiliza para construir interfaces de usuario interactivas y eficientes.
        Su enfoque se centra en la construcción de componentes reutilizables que
        gestionan su propio estado y pueden actualizarse de manera eficiente
        mediante la manipulación del DOM virtual. React utiliza un modelo de
        programación declarativa, lo que significa que los desarrolladores
        describen cómo debería ser la interfaz de usuario y React se encarga de
        gestionar los cambios de manera eficiente a través de su Virtual DOM.
        Además, React es parte de un ecosistema sólido que incluye herramientas
        como React Router para el enrutamiento y Redux para la gestión del
        estado global. Su popularidad se debe a su capacidad para crear
        aplicaciones web modernas y escalables, así como a una activa comunidad
        de desarrolladores y una documentación exhaustiva.
        <br/>
        Comisión: {comision}
      </p>
    </article>
  );
};

export default TituloSecundario;
