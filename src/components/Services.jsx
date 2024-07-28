import { useState } from "react";
import Card from "./Card";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Services = () => {

  const [number, setNumber] = useState(10)

  const handleAdvance = ()=>{
    if(number == 50){
      setNumber(10)
    }else{
      setNumber(number + 10)
    }
  }

  const handleBack = ()=>{
    if(number == 10){
      setNumber(50)
    }else{
      setNumber(number - 10)
    }
  }


  return (
    <section id="servicios" className="p-4 bg-phone flex flex-col items-center gap-4 md:p-8 lg:flex-wrap lg:p-16 lg:relative lg:items-start">
      <h2 className="text-[#40020E] font-bold text-2xl lg:w-1/2 lg:text-center lg:max-w-[600px]">¿Cómo puedo ayudarte?</h2>
      <div className="w-full flex flex-col items-center flex-wrap md:justify-center md:flex-row md:gap-4 lg:w-1/2 lg:inline lg:relative lg:h-[380px] lg:max-w-[600px]">
      <IoIosArrowDropleftCircle className="hidden lg:inline cursor-pointer text-[#F81842] lg:absolute top-1/2 text-2xl" onClick={handleBack}/>
      <Card
        title={"Seguro de Vida"}
        text={"Ofrecen seguridad económica ante imprevistos, garantizando que sus seres queridos mantendrán su nivel de vida en caso de fallecimiento o incapacidad. Además, permiten la designación de beneficiarios a su elección, asegurando que el beneficio llegue a quien usted decida. Con un seguro de vida, usted invierte en tranquilidad y estabilidad para aquellos que más importan."}
        number={number + 40}/>
      <Card title={"Seguros de Salud"} text={"Con una cobertura adecuada, puedes acceder a una amplia red de profesionales médicos, recibir atención preventiva sin costos adicionales y protegerte financieramente ante emergencias o enfermedades. Además, al elegir el seguro adecuado, te aseguras de que tú y tu familia reciban la mejor atención posible"}
      number={number + 30}/>
      <Card title={"Seguros de Accidentes"} text={"Ofrecen tranquilidad financiera ante eventos inesperados, cubriendo gastos médicos, compensación por incapacidad o incluso apoyo económico a familiares en caso de fatalidades. Con un seguro de accidentes, puedes protegerte a ti y a tus seres queridos, asegurando que un contratiempo no se convierta en una crisis financiera."}
      number={number + 20}/>
      <Card title={"Seguros Dentales"} text={"Ofrecen una amplia gama de beneficios, desde el acceso a tratamientos preventivos sin costo hasta precios preferenciales en procedimientos específicos. Con un seguro dental, puedes disfrutar de la tranquilidad de saber que tu salud bucal está protegida, permitiéndote acceder a un extenso catálogo de servicios odontológicos."}
      number={number + 10}/>
      <Card title={"Medicare"} text={"Los seguros Medicare ofrecen una amplia cobertura para proteger tu salud en diversas etapas de la vida. Con Medicare, puedes acceder a servicios hospitalarios, visitas médicas, equipos médicos y medicamentos recetados, asegurando así tu bienestar y tranquilidad."}
      number={number}/>
      <IoIosArrowDroprightCircle className="hidden lg:inline cursor-pointer text-[#F81842] lg:absolute lg:top-1/2 lg:right-0 text-2xl" onClick={handleAdvance}/>
      </div>
      <div className="hidden lg:inline lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2 bg-bicicleta">
      </div>
    </section>
  );
};

export default Services;
