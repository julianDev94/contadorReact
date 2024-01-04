// Zona de imports
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  // Zona de logica que queremos que tenga el componente, todo lo que sea JS

  return (
    // Zona de maquetado y de forma no habitual logica JS
    // Una de las reglas de componentes que nos pone react es que cada componente sabe retornada una sola
// porcion de codigo. Es decir en este caso h1 y el section estan en el mismo nivel, por lo tanto nos rompia el codigo
    // <section>
    //   <h1 className='display-3'>Titulo de prueba</h1>
    //   {/*  */}
    // </section>
    // Para el caso en que necesitamos maquetar dos etiquetas en un mismo nivel, react creo un elemento que se 
    // llama onfragment <> </>. Este componente siempre retorna un solo fragmento
    <>
    
    <section className='container my-4'>
    <h1 className='display-3 text-center'>Contador React</h1>  
       {/*  */}
    </section>
    </>
  )
}

export default App
