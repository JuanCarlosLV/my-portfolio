import React from "react";

function CardExperience({ experience }) {
  if (!experience || !experience.listWorks) {
    return null;
  }

  return (
    <>
      <article
        className="flex flex-row  px-6 py-5 w-full max-h-max border-l-2 border-secondaryColor  hover:bg-colorHoverProject
      transition-colors duration-500 ease-out gap-[64px] justify-between items-center  "
      >
        <section className="flex flex-col ">
          <header>
            <p className="text-[25px] font-bold text-secondaryColor">
              {experience.job}{" "}
              <span className="text-primaryColor text-[20px]">
                - {experience.place}
              </span>
            </p>
          </header>

          <span className="mt-2 text-[14px] font-light text-textoSecundario  text-primaryColor">
            {experience.dateStarted} - {experience.dateFinished}
          </span>

          <div className="mt-3 ">
            <ul className="list-disc list-inside text-[16px] text-primaryColor text-pretty ml-1 ">
              {experience.listWorks.map((work, index) => (
                <li key={index}>{work}</li>
              ))}
            </ul>
          </div>
        </section>
        <figure>
          <img
            src={experience.logoEnterprise}
            alt={`Logotipo de la empresa ${experience.place}`}
            className="w-[100px] object-cover rounded-full"
          />
        </figure>
      </article>
    </>
  );
}

export default CardExperience;
