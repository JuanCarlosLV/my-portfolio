import React, { useEffect, useState } from "react";
import OptionNavbar from "./OptionNavbar";


function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedOpcion, setSelectedOption] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`sticky flex flex-row justify-center items-center transition ease-out duration-500 rounded-[10px] ${
          scrolled ? " backdrop-blur bg-colorHover " : ""
        }`}
      >
        <OptionNavbar
          optionname={"Proyectos"}
          target={"#proyectos"}
          isSelected={selectedOpcion == "proyectos"}
          onSelected={() => {
            setSelectedOption("proyectos");
          }}
        />
        <OptionNavbar
          optionname={"Experiencia"}
          target={"#experiencia"}
          isSelected={selectedOpcion == "experiencia"}
          onSelected={() => {
            setSelectedOption("experiencia");
          }}
        />
        <OptionNavbar
          optionname={"Habilidades"}
          target={"#habilidades"}
          isSelected={selectedOpcion == "habilidades"}
          onSelected={() => {
            setSelectedOption("habilidades");
          }}
        />
        <OptionNavbar
          optionname={"Sobre mí"}
          target={"#sobre-mi"}
          isSelected={selectedOpcion == "sobre-mi"}
          onSelected={() => {
            setSelectedOption("sobre-mi");
          }}
        />
        <OptionNavbar
          optionname={"Contáctame"}
          target={"mailto:lopesjuancarlos216@gmail.com"}
          isSelected={selectedOpcion == "contactame"}
          onSelected={() => {
            setSelectedOption("contactame");
          }}
        />
      </nav>
    </>
  );
}

export default Navbar;
