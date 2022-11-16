import alumnos from '../componente/data/alumnos.json'
const Ejemplo4 =props =>{
    return(
        <>
            <h1>Soy la pag 4</h1>
            <ul>
                {alumnos.map(alumno =>(
                    <li>{alumno.nombre} {alumno.apellido} - edad: ({alumno.edad})</li>
                )
                )}
            </ul>
        </>
    )
}
export default Ejemplo4;