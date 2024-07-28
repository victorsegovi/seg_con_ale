import Link from "./Link"

const Hero = ()=>{
    return (
        <section id="hero" className="bg-[#F94869] text-[#F8F7F7] p-4 pb-0 sm:flex sm:p-0 items-end">
            <div className="flex flex-col gap-3 items-center text-center sm:text-left sm:items-start sm:w-1/2 sm:m-8 lg:m-16">
                <img src="./src/assets/logo_blanco.png" alt="Logo Seguros con Ale Blanco" className="w-1/2 max-w-48"/>
                <h4 className="uppercase font-medium">A tu alcance</h4>
                <h1 className="uppercase text-3xl font-black">Seguridad hoy,<br />
                paz mañana.</h1>
                <p className="max-w-[352px]">Te ayudo a encontrar un seguro ideal para
                proteger tu bienestar en el estado de Florida.
                Contáctame y obtén una asesoría gratuita.</p>
                <Link bgClear={true} CTA="Consultoría Gratuita"></Link>
            </div>
            <div className="sm:w-1/2 lg:mr-16">
                <img src="./src/assets/familia-1.png" alt="Familia Blanca" />
            </div>
        </section>
    )
}

export default Hero