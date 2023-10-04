import React, { useEffect, useState } from "react"
import {
  BsSun,
  BsMoon,
  BsChatLeft,
  BsPersonGear,
  BsPeople,
  BsFillPersonLinesFill,
} from "react-icons/bs"

import SidebarOpt from "./components/SidebarOpt"

const Sidebar = ({ select, sectionSelected }) => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark")
  }, [darkMode])

  return (
    <div
      className="w-[15%] h-screen py-7 flex flex-col items-center 
      justify-between bg-teal-400 2xl:py-12 lg:w-[50px]"
    >
      <img
        className="h-[35px] 2xl:h-[2vw] lg:h-[25px]"
        src="/logoBranco.svg"
        alt="logo"
      />

      <div className="h-3/5 flex flex-col gap-6 2xl:gap-[10%]">
        <SidebarOpt
          sectionSelected={sectionSelected}
          option="conversas"
          select={select}
        >
          <BsChatLeft />
        </SidebarOpt>

        <SidebarOpt
          sectionSelected={sectionSelected}
          option="grupos"
          select={select}
        >
          <BsPeople />
        </SidebarOpt>

        <SidebarOpt
          sectionSelected={sectionSelected}
          option="contatos"
          select={select}
        >
          <BsFillPersonLinesFill />
        </SidebarOpt>

        <SidebarOpt
          sectionSelected={sectionSelected}
          option="perfil"
          select={select}
        >
          <BsPersonGear />
        </SidebarOpt>
      </div>

      <span
        className="w-10 h-10 text-2xl text-zinc-100 hover:text-3xl
        flex items-center justify-center transition-all duration-500 
        ease-in-out cursor-pointer 2xl:text-[2vw]"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <BsMoon /> : <BsSun />}
      </span>
    </div>
  )
}

export default Sidebar
