import Link from "./Link"

const Card = ({title, text})=>{
    return(
        <div>
            <h3>{title}</h3>
            <p>{text}</p>
            <Link CTA="Contáctame"></Link>
        </div>
    )
}

export default Card