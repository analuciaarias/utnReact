import { useState } from "react";

const Ejemplo1Estado = props =>{
    const [ activo, setActivo] = useState(true);
    const toggleActivo= e=> {
        setActivo(!activo);
    }
    return(
        <div>
            <input type='text' placeholder="clickear boton" /><button onClick={toggleActivo}>{activo ? 'Desabilitar' : 'Activar'}</button>
        </div>
    )
}
function Ejemplo2Estado (props){
    const [counter, setCounter]=useState(0);
    return(
        <div className="container">
            <div className="counter">
                <h3>{`contador: ${counter}`}</h3>
            </div>
            <div className="buttonGroup">
            <button className="sucess" onClick={() => setCounter(counter+1)}> +</button>
            <button className="error" onClick={() => setCounter(counter-1)}>-</button>
            </div>

        </div>
    )
}
export {
    Ejemplo1Estado,
    Ejemplo2Estado} ;