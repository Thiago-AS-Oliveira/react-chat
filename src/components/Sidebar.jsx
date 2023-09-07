import React, { useEffect, useState } from "react"
import {
  BsSun,
  BsMoon,
  BsChatLeft,
  BsPersonGear,
  BsPeople,
  BsFillPersonLinesFill,
} from "react-icons/bs"
import SectionLink from "./SectionLink"

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark")
  }, [darkMode])

  return (
    <div
      className="w-[60px] h-screen py-7 flex flex-col items-center 
      justify-between bg-zinc-300 dark:bg-zinc-900"
    >
      <img className="h-[35px]" src="./logo.png" alt="logo" />

      <div className="h-3/5 flex flex-col gap-6">
        <SectionLink>
          <BsChatLeft />
        </SectionLink>
        <SectionLink>
          <BsFillPersonLinesFill />
        </SectionLink>
        <SectionLink>
          <BsPeople />
        </SectionLink>
        <SectionLink>
          <BsPersonGear />
        </SectionLink>
      </div>

      <span
        className="w-10 h-10 rounded text-2xl hover:text-3xl
        flex items-center justify-center transition-all duration-500 
        ease-in-out cursor-pointer"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <BsMoon /> : <BsSun />}
      </span>
    </div>
  )
}

export default Sidebar
