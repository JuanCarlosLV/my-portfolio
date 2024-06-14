import React from "react";

function AboutMe() {
  return (
    <>
    
      <article className="flex justify-between items-center gap-3 text-pretty text-[16px] text-primaryColor font-normal">
        <div className="[&>p]:mb-4 leading-7">
          <p>
            Me llamo Juan Carlos López Villegas, actualmente estudio en la
            Universidad Veracruzana, tengo 21 años y radico en Coatzacoalcos
            Veracruz. Comencé en el mundo de la programación en preparatoria con
            el lenguaje Visual Basic.
          </p>
          <p>
            {" "}
            Dentro del desarrollo de software, me gusta mucho el desarrollo
            frontend y me apasiona el diseño UI/UX. En el futuro espero
            colaborar y aportar mis conocimientos en alguna empresa de
            desarrollo en el extranjero.
          </p>
        </div>

        <figure className=" ">
          <img
            src="/src/assets/images/profile-photo.jpg"
            alt="foto de perfil de Juan Carlos"
            className="w-[200px] h-[100px] rounded-[50%] object-cover"
          />
        </figure>
      </article>
    </>
  );
}

export default AboutMe;
