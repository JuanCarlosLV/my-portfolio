import React from "react";

function SocialButton({ url, logo, label }) {
  return (
    <>
      <a
        href={url}
        className="flex flex-row justify-center items-center  px-4 py-1 gap-2 border border-primaryColor rounded-[5px] min-w-max h-[40px]
        hover:bg-hoverButton font-corbel "
        target="_blank"
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
