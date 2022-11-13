import '../style/estilo.css'
const Ejemplo3 = props => {
    return(
        <div>
            <h1>Ej de uso google maps</h1>
            <div className="mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.0724897922037!2d-60.02453618255615!3d-36.359022999999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9595dccd8f5435f7%3A0x80c62017cd667b0f!2sAv.%209%20de%20Julio%20708%2C%20Tapalqu%C3%A9%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1668358267502!5m2!1ses-419!2sar" style={{width:1000, height: 450, border:0}}></iframe>
            </div>
        </div>
    )
}

export default Ejemplo3;