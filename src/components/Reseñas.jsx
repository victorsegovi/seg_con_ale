import Video from "./Video"
const Reseñas = ()=>{
    return(
        <section id="reseñas" className="bg-[#F81842] flex flex-col items-center p-4 gap-4 md:flex-row md:flex-wrap md:justify-center lg:p-16 lg:gap-16">
            <h2 className="text-[#F8F7F7] font-bold md:w-full text-2xl md:text-center">Reseñas</h2>
            <Video source={"./src/assets/cliente-satisfecha-1.mp4"}></Video>
            <Video source={"./src/assets/cliente-satisfecha-2.mp4"}></Video>
        </section>
    )
}

export default Reseñas