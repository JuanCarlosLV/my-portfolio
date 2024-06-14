import React from "react";

function ToolPill({ tool }) {
  return (
    <>
      <article
        className={`flex gap-1 px-2 py-1 rounded-[10px] `}
        style={{backgroundColor: tool.colorbackground}}
      >
        <img
          src={tool.icon}
          alt={`icono de ${tool.name}`}
          className="w-[10px]"
        />
        <span className="text-[12px] text-primaryColor font-normal">{tool.name}</span>
      </article>
    </>
  );
}

export default ToolPill;
