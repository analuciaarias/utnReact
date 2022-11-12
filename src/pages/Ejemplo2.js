import { Ejemplo1Estado } from "../componente/estado/Estado";
import { Ejemplo2Estado } from "../componente/estado/Estado";
import '../style/estilo.css'
const Ejemplo2= props =>{
    return(
        <div><h1>Ejemplos Estados</h1>
        <Ejemplo1Estado/>
        <hr />
        <Ejemplo2Estado />
        </div>
    )
}
export default Ejemplo2;