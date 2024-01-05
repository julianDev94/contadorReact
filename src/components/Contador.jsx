

const Contador = () => {
    let numero = 10;
    const incrementarValor = () =>{
        numero++;
        console.log(numero);
    }

    return (
        // Para insertar un variable de js en html se hace con llaves
        // Para agregar un evento en react es desde HTML
        // Si la funcion relacionada al evento es larga, escribirla en este seccion. Caso contrario
        // Si es de una sola linea, escribirla en 
        <article className="text-center">
            <h2>Contador</h2>
            <h3>{numero}</h3>
            <button className="btn btn-primary" onClick={incrementarValor}>+1</button>
        </article>
    );
};

export default Contador;