import { IoPerson } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";

const Footer = ()=>{
    return(
        <footer className="bg-[#F94869] text-[#F8F7F7] flex flex-col gap-4 items-center p-4 sm:flex-row sm:justify-between sm:items-start sm:p-8 lg:p-16">
            <div className="flex flex-col gap-2 w-3/4 max-w-[280px]">
                <h5 className="font-bold"><IoPerson  className="inline"/> Redes Sociales</h5>
                <ul>
                    <li><FaInstagram  className="inline"/> <a href="https://www.instagram.com/segurosconale_?igsh=OWNxaGg2amhxcW01">segurosconale_</a></li>
                    <li><FaMeta className="inline"/> <a href="https://www.facebook.com/segurosconale?mibextid=LQQJ4d">Alexa Seguros USA</a></li>
                </ul>
            </div>
            <div className="flex flex-col gap-2 w-3/4 max-w-[280px]">
                <h5 className="font-bold"><IoIosPhonePortrait className="inline"/> Teléfono</h5>
                <a href="sms:+18503764872">+1 (850) 376-4872</a>
            </div>
            <div className="flex flex-col gap-2 w-3/4 max-w-[280px]">
                <h5 className="font-bold"><FiMapPin className="inline"/> Dirección</h5>
                <p>Fort walton, 124 E MIRACLE<br />
                STRIP PKWY MARY ESTHER</p>
            </div>
        </footer>
    )
}

export default Footer