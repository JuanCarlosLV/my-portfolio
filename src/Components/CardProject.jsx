import React from "react";
import ToolPill from "./ToolPill";
import SocialButton from "./Buttons/SocialButton";

function CardProject({ project }) {
  return (
    <>
      <article
        className="flex flex-row  gap-4  rounded-[5px] px-5 py-5 w-full max-h-max border border-primaryColor text-primaryColor hover:bg-colorHoverProject
      transition-colors duration-500 ease-out hover:border-secondaryColor"
      >
        <div className="overflow-hidden rounded-[5px]">
          <img
            src={project.image}
            alt={`imagen del proyecto ${project.title}`}
            className="object-cover w-auto h-full rounded-[5px] hover:scale-110  transition-transform duration-500 bg-red-500 ease-out"
          />
        </div>

        <section className="flex flex-col justify-between  ">
          <span className="font-bold text-[25px]">{project.title}</span>
          <article className="flex flex-col gap-2">
            <p className="text-pretty text-[16px] text-textoSecundario font-semibold">
              {project.description}
            </p>
            <div className="flex gap-3 mt-2">
              {project.tecnologies.map((tool, index) => (
                <>
                  <ToolPill tool={tool} key={index} />
                </>
              ))}
            </div>
          </article>
          <div className="flex gap-3 mt-3">
            <SocialButton
              logo="/icons/github.svg"
              label={"Código"}
              url={project.github}
            />
            <SocialButton
              logo="/icons/website.svg"
              label={"Sitio web"}
              url={project.websiteurl}
            />
          </div>
        </section>
      </article>
    </>
  );
}

export default CardProject;
