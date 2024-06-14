import SocialButton from "./Components/Buttons/SocialButton";
import CardProject from "./Components/CardProject";
import FollowCursor from "./Components/FollowCursor";
import { proyectos, trabajos, skills } from "./Components/DataProjects";

import Navbar from "./Components/Navbar";
import CardExperience from "./Components/CardExperience";
import AboutMe from "./Components/AboutMe";
import SkillPill from "./Components/SkillPill";


function App() {
  return (
    <>
      <FollowCursor />

      <header className="fixed top-0 flex justify-center items-center mt-4 w-full  z-10">
        <Navbar />
      </header>

      <main className="px-5 font-corbel">
        <section className=" py-16 mt-12 m-auto w-[800px]">
          <article className="profile flex space-x-[10px]">
            <figure>
              <img
                src="/src/assets/Images/profile-photo.jpg"
                alt="foto de perfil de Juan Carlos López"
                className="rounded-[50%] w-[80px] h-[80px] object-cover"
              />
              <figcaption
                className="font-light text-textoSecundario
              text-[12px] mt-4"
              >
                lopesjuancarlos216@gmail.com
              </figcaption>
            </figure>
          </article>

          <section className="information flex flex-col mt-6">
            <h2 className="text-primaryColor font-bold text-[40px]">
              Hola, soy Juan Carlos
            </h2>
            <p className="text-primaryColor text-[20px] text-pretty">
              <strong className="text-secondaryColor">
                Estudiante de Ingeniería de software
              </strong>{" "}
              con 2 años de experiencia en el desarrollo web. Especializado en
              el desarrollo frontend y diseño UI/UX.
            </p>

            <div className="flex justify-start items-center mt-5 space-x-6">
              <SocialButton
                label={"Linkedin"}
                url={"www.linkedin.com/in/juancarloslopezvillegas"}
                logo={"/src/assets/icons/linkedin-in.svg"}
              />
              <SocialButton
                label={"Github"}
                url={"https://github.com/JuanCarlosLV"}
                logo={"/src/assets/icons/github.svg"}
              />

              <SocialButton
                label={"Contactame"}
                url={"mailto:lopesjuancarlos216@gmail.com"}
                logo={"/src/assets/icons/email.svg"}
              />
            </div>
          </section>

          <section id="proyectos" className="projects flex flex-col mt-[77px]">
            <header className="inline-flex justify-start items-center gap-2 text-white -ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                viewBox="0 0 24 24"
                fill="#FFF8F0"
                class="icon icon-tabler icons-tabler-filled icon-tabler-code-circle"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-6.293 5.953a1 1 0 0 0 -1.414 0l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414 0l.083 -.094a1 1 0 0 0 -.083 -1.32l-1.292 -1.293l1.292 -1.293a1 1 0 0 0 0 -1.414m4 0a1 1 0 0 0 -1.414 0l-.083 .094a1 1 0 0 0 .083 1.32l1.292 1.293l-1.292 1.293a1 1 0 0 0 1.414 1.414l2 -2a1 1 0 0 0 0 -1.414z" />
              </svg>
              <span className="text-[30px] font-bold">Proyectos</span>
            </header>

            <div className="flex flex-col gap-[50px] mt-5">
              {proyectos.map((project, index) => (
                <>
                  <CardProject key={index} project={project} />
                </>
              ))}
            </div>
          </section>

          <section
            id="experiencia"
            className="experiencia flex flex-col mt-[77px]"
          >
            <header className="inline-flex justify-start items-center gap-2 text-white ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                viewBox="0 0 24 24"
                fill="#FFF8F0"
                class="icon icon-tabler icons-tabler-filled icon-tabler-briefcase-2"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 2a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3zm0 2h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1" />
              </svg>
              <span className="text-[30px] font-bold">Experiencia</span>
            </header>

            <div className="flex flex-col gap-[50px] mt-5 ">
              {trabajos.map((trabajo, index) => (
                <>
                  <CardExperience key={index} experience={trabajo} />
                </>
              ))}
            </div>
          </section>

          <section id="habilidades" className="skills flex flex-col  mt-[77px]">
            <header className="inline-flex justify-start items-center gap-2 text-white ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                viewBox="0 -960 960 960"
                fill="#FFF8F0"
              >
                <path d="m384-336 56-58-86-86 86-86-56-58-144 144 144 144Zm192 0 144-144-144-144-56 58 86 86-86 86 56 58ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm280-670q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790Z" />
              </svg>
              <span className="text-[30px] font-bold text-primaryColor">
                Habilidades Técnicas
              </span>
            </header>

            <div className="grid grid-cols-5 grid-rows-2 gap-y-6 mt-5">
              {skills.map((skill) => (
                <>
                  <SkillPill skill={skill} />
                </>
              ))}
            </div>
          </section>

          <section id="sobre-mi" className="about-me mt-[77px]">
            <header className="inline-flex justify-start items-center gap-2 text-white ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                width="30px"
                height="30px"
                fill="#FFF8F0"
              >
                <path d="M160-80q-33 0-56.5-23.5T80-160v-440q0-33 23.5-56.5T160-680h200v-120q0-33 23.5-56.5T440-880h80q33 0 56.5 23.5T600-800v120h200q33 0 56.5 23.5T880-600v440q0 33-23.5 56.5T800-80H160Zm80-160h240v-18q0-17-9.5-31.5T444-312q-20-9-40.5-13.5T360-330q-23 0-43.5 4.5T276-312q-17 8-26.5 22.5T240-258v18Zm320-60h160v-60H560v60Zm-200-60q25 0 42.5-17.5T420-420q0-25-17.5-42.5T360-480q-25 0-42.5 17.5T300-420q0 25 17.5 42.5T360-360Zm200-60h160v-60H560v60ZM440-600h80v-200h-80v200Z" />
              </svg>
              <span className="text-[30px] font-bold text-primaryColor">
                Sobre Mí
              </span>
            </header>
            <div className="mt-5">
              <AboutMe />
            </div>
          </section>
        </section>
      </main>

      <footer className="flex flex-row justify-center items-center py-2 mb-5 mt-8 m-auto w-[800px] text-textoSecundario text-xs">
        <span>
          &copy; 2024 Juan Carlos López. Todos los derechos reservados
        </span>
      </footer>
    </>
  );
}

export default App;
