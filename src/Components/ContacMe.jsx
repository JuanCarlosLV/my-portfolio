import React from "react";
import ButtonCTA from "./Buttons/ButtonCTA";

const icon = {
  name: "Enviar",
  icon: "src/assets/icons/send.svg",
};

function ContacMe() {
  const onSubmit = () => {};
  return (
    <>
      <article>
        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          <header className="flex gap-2 justify-between items-center">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              className="text-[16px] text-primaryColor bg-textoSecundario px-2 py-2 placeholder:text-textoSecundario w-[70%] rounded-sm outline-none"
            />
            <ButtonCTA icon={icon} />
          </header>

          <textarea
            name="messsage"
            id="message"
            placeholder="Escribe tu mensaje"
            className="placeholder:text-textoSecundario bg-textoSecundario text-[16px] text-primaryColor font-normal px-2 py-2 w-full h-[100px] text-pretty rounded-sm resize-none outline-none"
          ></textarea>
        </form>
      </article>
    </>
  );
}

export default ContacMe;
