import React from "react";

function OptionNavbar({ optionname, target, isSelected, onSelected }) {
  

  return (
    <>
      <a
        href={target}
        className={`flex justify-center items-center rounded-[5px] w-[100px] h-[40px] text-center text-primaryColor px-2 py-4 hover:bg-colorHover hover:text-secondaryColor ${
          isSelected && "bg-colorHover text-secondaryColor" 
        }`}
        onClick={onSelected}
      >
        <span className="text-[14px] font-bold ">{optionname}</span>
      </a>
    </>
  );
}

export default OptionNavbar;
