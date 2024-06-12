import React from "react";

function OptionNavbar({ optionname, target }) {
  return (
    <>
      <a
        href={target}
        className="flex justify-center items-center rounded-[5px] w-[100px] h-[40px] text-center  px-2 py-4 hover:bg-colorHover  hover:text-secondaryColor"
      >
        <span className="text-[14px] text-white text-center font-consola font-bold ">
          {optionname}
        </span>
      </a>
    </>
  );
}

export default OptionNavbar;
