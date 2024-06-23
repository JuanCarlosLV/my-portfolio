import React, { useState, useEffect } from "react";

function SocialButton({ url, logo, label }) {

  const [urlAvailable, setUrlAvailable] = useState(true)

  
  useEffect(() => {
    if (url === "") {
      setUrlAvailable(!urlAvailable);
    } 
  }, [url]); 

  return (
    <>
      <a
        href={urlAvailable ? url : "#"}
        className={`flex flex-row justify-center items-center  px-4 py-1 gap-2 border border-primaryColor rounded-[5px] min-w-max h-[40px]
        hover:bg-hoverButton font-corbel ${!urlAvailable && "cursor-not-allowed opacity-50 "}`}
        target="_blank"
        rel="noreferrer noopener"
        title={urlAvailable ? `Sitio web de ${label}` : "Sitio web no disponible"}
      >
        <img
          src={logo}
          alt={`icono de ${label}`}
          className="size-5"

        />
        <p className="text-primaryColor text-[14px] font-bold ">
          {label}
        </p>
      </a>
    </>
  );
}

export default SocialButton;
