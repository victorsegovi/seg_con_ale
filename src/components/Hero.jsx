import Link from "./Link"

const Hero = ()=>{
    return (
        <section>
            <div>
                <img src="./src/assets/logo_blanco.png" alt="Logo Seguros con Ale Blanco" />
                <h4>A tu alcance</h4>
                <h1>Seguridad hoy,<br />
                paz mañana.</h1>
                <p>Te ayudo a encontrar un seguro ideal para<br />
                proteger tu bienestar en el estado de Florida.<br />
                Contáctame y obtén una asesoría gratuita.</p>
                <Link bgClear={true} CTA="Consultoría Gratuita"></Link>
            </div>
            <div>
                <img src="./src/assets/familia-1.png" alt="Familia Blanca" />
            </div>
        </section>
    )
}

export default Hero