// Para poder mandar datos a otros componentes usamos los props
// Para poder modificar los estados de los componentes usamos state
// Una de las diferencias de los funcionalComponents de los classComponents, era que el classComponents
// tiene solamente un estado que gralmente tiene un objeto para cuando yo quisiera guardar varias cosas.
// En cambio el funcionalComponents me permite crear varios estados (con nombres distintos).
// Los props y state lo visualizamos en la pestaña de componentes en el inspector
// Para poder hacer uso de los hook para crear los state, debemos importar el useState
import { useState } from "react";

const Contador = () => {
  // Primer parametro Nombre del estado (es como una variable). Contenido
  //  Segundo parametro Nombre de una funcion que nos permite modificar el estado. Una recomendacion de React es
  // si no sabemos que nombre ponerle a la funcion es ponerle setNombreDelEstado
  // Dentro de los parentesis del useState digo como estoy inicializando el valor de ese State. Asi que le damos
  // cualquier valor que quieramos de JS (Array, objeto, variable, string, bool, etc)
  // Una de las reglas que pone React es que, jamas puedo cambiar directamente un estado. Para eso se utiliza el
  // segundo parametro que creamos del state.
  const [numero, setNumero] = useState(10);
  // let numero = 10;

  const incrementarValor = () => {
    // numero++;
    // console.log(numero);
    setNumero(numero + 1);
  };

  return (
    // Para insertar un variable de js en html se hace con llaves
    // Para agregar un evento en react es desde HTML
    // Si la funcion relacionada al evento es larga, escribirla en este seccion. Caso contrario
    // Si es de una sola linea, escribirla en
    <article className="text-center">
      <h2>Contador</h2>
      <h3>{numero}</h3>
      <button className="btn btn-primary" onClick={incrementarValor}>
        +1
      </button>
    </article>
  );
};

export default Contador;
