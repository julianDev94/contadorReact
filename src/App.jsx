// Zona de imports
import "bootstrap/dist/css/bootstrap.min.css";
import TituloSecundario from "./components/TituloSecundario";
import Contador from "./components/Contador";

function App() {
  // Zona de logica que queremos que tenga el componente, todo lo que sea JS
  const anioActual = 2023;
  return (
    // Zona de maquetado y de forma no habitual logica JS
    // Una de las reglas de componentes que nos pone react es que cada componente sabe retornada una sola
    // porcion de codigo. Es decir en este caso h1 y el section estan en el mismo nivel, por lo tanto nos rompia el codigo
    // <h1 className='display-3'>Titulo de prueba</h1>
    // <section>
    //   {/*  */}
    // </section>
    // Para el caso en que necesitamos maquetar dos etiquetas en un mismo nivel, react creo un elemento que se
    // llama onfragment <> </>. Este componente siempre retorna un solo fragmento
    <>
      <section className="container my-4">
        <h1 className="display-3 text-center">Contador React</h1>
        {/* Para poder traer componentes desde otros archivos, estos se traen como etiquetas.
        Es decir que para poder utilizar estos componentes debemos importarlos para poder usarlos. Ejemplo
        import TituloSecundario from './components/TituloSecundario.jsx' */}

        {/* Los componentes se los puede escribir como etiquetas simples o dobles como este ejemplo. */}
        {/* <TituloSecundario comision='c73i'></TituloSecundario> */}
        {/* Para mandar props ponemos la propiedad y el valor que queremos almacenar, en este caso un string. 
        El valor que podemos asignar puede ser una variable, array, objeto, string, booleano, una funcion, etc. */}
        {/*  Si quiero enviar valores que no son string como una variable o booleano, debo envolverlo entre llaves */}
        {/* Los props son objetos de js. Es decir que si mandamos un dato, estos serian propiedades y si mandamos funciones
        serian como los metodos del objeto props. Los props son inmutables, es decir nunca se pueden modificar. */}
        <TituloSecundario comision='c73i' anioActualprops={anioActual}/>
        {/* Si vamos al inspector del navegador, en la seccion components vemos cual es el componente que invoca a cual
        debido a que hay un pequeño espacio en el componente hijo */}
        {/* Las etiquetas HTML siempre se escriben en minuscula en comparacion de las etiqueta de componentes */}
        {/* React tambien nos dice que los componentes se pueden reutilizar cuantas veces quieramos. Es decir
        que si lo llamamos mas veces, este se va ejecutar las veces que sea llamado */}
        <Contador/>
      </section>
    </>
  );
}

export default App;
