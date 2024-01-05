// Zona de imports
import "bootstrap/dist/css/bootstrap.min.css";
import TituloSecundario from "./components/TituloSecundario";

function App() {
  // Zona de logica que queremos que tenga el componente, todo lo que sea JS

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
        {/* <TituloSecundario></TituloSecundario> */}
        <TituloSecundario/>
        {/* Si vamos al inspector del navegador, en la seccion components vemos cual es el componente que invoca a cual
        debido a que hay un pequeño espacio en el componente hijo */}
        {/* Las etiquetas HTML siempre se escriben en minuscula en comparacion de las etiqueta de componentes */}
        {/* React tambien nos dice que los componentes se pueden reutilizar cuantas veces quieramos. Es decir
        que si lo llamamos mas veces, este se va ejecutar las veces que sea llamado */}
        
      </section>
    </>
  );
}

export default App;
