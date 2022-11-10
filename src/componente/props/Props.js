const Ejemplo1Props = props =>{
    return(
        <h3>Hola {props.nombre}</h3>
    )
}
const Ejemplo2Props = props =>{
    const {elementos} = props;
    return(
        <ul>
            {elementos.map(elemento => <li key={elemento}>{elemento}</li>)}
        </ul>
    )
}
const Ejemplo3Props = ({titulo,subtitulo,cuerpo}) =>{
    return(
        <div>
            <h3>{titulo}</h3>
            <h4>{subtitulo}</h4>
            <p>{cuerpo}</p>
        </div>
    )
}
const Ejemplo4Props = props =>{
    return (
        <label>
            ver en consola: <input type='text' onChange={(e) => props.cambiarValor(e.target.value)} />
        </label>
    )
}
export{
    Ejemplo1Props,
    Ejemplo2Props,
    Ejemplo3Props,
    Ejemplo4Props
}