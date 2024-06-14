import React from "react";

function SkillPill({ skill }) {
  
  return (
    <>
      <article className="flex flex-col items-center justify-center w-[120px] h-[120px] p-4 gap-4 bg-colorbgPill rounded 
      ">
        <img src={skill.icon} alt={`Icono de ${skill.name}`} className="w-[50px]" />
        <span className="text-primaryColor text-[15px] font-semibold">
          {skill.name}
        </span>
      </article>
    </>
  );
}

export default SkillPill;
