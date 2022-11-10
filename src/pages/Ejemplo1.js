import {Ejemplo1Props, Ejemplo2Props, Ejemplo3Props, Ejemplo4Props} from "../componente/props/Props";

const nombre2= 'Felicitas';
const lista = ['manzana','banana','pera','frutillas'];
const mostrarValor= valor =>{
    console.log(valor)
}
const EjemploProp01= props =>{
    return(
        <div>
            <h1>Ejemplos de propiedades</h1>
            <Ejemplo1Props nombre='Anita' />
            <Ejemplo1Props nombre={nombre2} />
            <hr/>
            <Ejemplo2Props elementos={lista} />
            <hr />
            <Ejemplo3Props titulo='La noticia' subtitulo='subtitulo de la noticia' cuerpo='loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm' />
            <Ejemplo4Props cambiarValor={mostrarValor} />
        </div>
    )
}


export default EjemploProp01;