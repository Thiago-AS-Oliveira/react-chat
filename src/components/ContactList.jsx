import React from "react"
import { BsFillPlusCircleFill, BsThreeDotsVertical } from "react-icons/bs"

import Contact from "./Contact"

const ContactLis = () => {
  return (
    <div
      className="w-[350px] pt-7 flex flex-col border-r 
      border-zinc-300 dark:border-zinc-600 bg-zinc-200 
      dark:bg-zinc-800"
    >
      <div className="h-[30px] px-3 flex items-center justify-between">
        <h2 className="text-xl font-medium">Sessão</h2>

        <div className="flex items-center gap-2">
          <span className="text-lg cursor-pointer">
            <BsFillPlusCircleFill />
          </span>
          <span className="text-lg cursor-pointer">
            <BsThreeDotsVertical />
          </span>
        </div>
      </div>

      <div className="h-[80px] px-3 flex items-center">
        <input
          className="px-3 h-[35px] w-full text-zinc-900 shadow-around outline-0"
          type="text"
          placeholder="Pesquisar conversas"
        />
      </div>

      <div className="flex-1 overflow-auto">
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </div>
  )
}

export default ContactLis
