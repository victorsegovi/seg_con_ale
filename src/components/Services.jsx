import Card from "./Card";

const Services = () => {
  return (
    <section>
      <h2>¿Cómo puedo ayudarte?</h2>
      <div>
      <Card
        title={"Seguro de Vida"}
        text={"Ofrecen seguridad económica ante imprevistos, garantizando que sus seres queridos mantendrán su nivel de vida en caso de fallecimiento o incapacidad. Además, permiten la designación de beneficiarios a su elección, asegurando que el beneficio llegue a quien usted decida. Con un seguro de vida, usted invierte en tranquilidad y estabilidad para aquellos que más importan."}/>
      <Card title={"Seguros de Salud"} text={"Con una cobertura adecuada, puedes acceder a una amplia red de profesionales médicos, recibir atención preventiva sin costos adicionales y protegerte financieramente ante emergencias o enfermedades. Además, al elegir el seguro adecuado, te aseguras de que tú y tu familia reciban la mejor atención posible"}/>
      <Card title={"Seguros de Accidentes"} text={"Ofrecen tranquilidad financiera ante eventos inesperados, cubriendo gastos médicos, compensación por incapacidad o incluso apoyo económico a familiares en caso de fatalidades. Con un seguro de accidentes, puedes protegerte a ti y a tus seres queridos, asegurando que un contratiempo no se convierta en una crisis financiera."}/>
      <Card title={"Seguros Dentales"} text={"Ofrecen una amplia gama de beneficios, desde el acceso a tratamientos preventivos sin costo hasta precios preferenciales en procedimientos específicos. Con un seguro dental, puedes disfrutar de la tranquilidad de saber que tu salud bucal está protegida, permitiéndote acceder a un extenso catálogo de servicios odontológicos."}/>
      <Card title={"Medicare"} text={"Los seguros Medicare ofrecen una amplia cobertura para proteger tu salud en diversas etapas de la vida. Con Medicare, puedes acceder a servicios hospitalarios, visitas médicas, equipos médicos y medicamentos recetados, asegurando así tu bienestar y tranquilidad."}/>
      </div>
      <div>
        <img src="./src/assets/familia-bicicleta.png" alt="Familia Feliz Bicicleta" />
      </div>
    </section>
  );
};

export default Services;
