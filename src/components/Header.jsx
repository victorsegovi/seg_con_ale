import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const handleNavigation = ()=>{
    setShow(false)
  }

  return (
    <header className=" sticky top-0 bg-[#F8F7F7] flex justify-between items-center flex-wrap z-[1000]">
      <a href="#" onClick={handleNavigation} className="z-10 m-8 w-1/3 max-w-[200px] lg:ml-16"><img
        src="./logo.png"
        alt="Seguros Con Ale Logo"
      /></a>
      <FaBarsStaggered className="w-1/3 text-4xl m-4 z-10 text-[#F81842] md:hidden cursor-pointer" onClick={handleClick} />
      <div
        className={`bg-[#F8F7F7] h-screen absolute flex w-full flex-col justify-center items-center transition-all duration-1000 ease-in-out text-[#F81842] ${
          show ? "top-0" : "-top-[100vh]"
        } md:w-1/2 md:relative md:h-full md:flex-row md:top-0`}
      >
        <a href="#servicios" onClick={handleNavigation} className="p-6 w-full text-center font-medium">
          Servicios
        </a>
        <a href="#reseñas" onClick={handleNavigation} className="p-6 w-full text-center font-medium">
          Reseñas
        </a>
        <a href="#contacto" onClick={handleNavigation} className="p-6 w-full text-center font-medium">
          Contacto
        </a>
      </div>
    </header>
  );
};

export default Header;
