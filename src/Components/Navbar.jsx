import React from 'react'
import OptionNavbar from './OptionNavbar'

function Navbar() {
  return (
    <>
    <article className='flex flex-row justify-center items-center '>
        <OptionNavbar optionname={"Experiencia"} target={"/home"}/>
        <OptionNavbar optionname={"Proyectos"} target={"/home"}/>
        <OptionNavbar optionname={"Habilidades"} target={"/home"}/>
        <OptionNavbar optionname={"Sobre mí"} target={"/home"}/>
        <OptionNavbar optionname={"Contáctame"} target={"/home"}/>
       

    </article>
    </>
  )
}

export default Navbar