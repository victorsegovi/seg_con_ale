import Link from "./Link"

const Card = ({title, text, number})=>{
    return(
        <div className={`bg-[#F8F7F7] m-4 flex flex-col justify-between rounded-lg overflow-hidden shadow-lg text-[#40020E] max-w-[320px] md:m-0 md:h-[380px] lg:w-[320px] lg:absolute lg:z-${number} transition-all duration-1000 lg:-translate-x-1/2 lg:left-1/2 ${number === 50? "lg:opacity-100 lg:scale-100": "lg:opacity-0 lg lg:scale-0"}`}>
            <h3 className="font-semibold text-xl m-4">{title}</h3>
            <p className="m-4">{text}</p>
            <Link CTA="Contáctame"></Link>
        </div>
    )
}

export default Card