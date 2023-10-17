import React from "react"
import { BsCheck, BsPerson, BsX } from "react-icons/bs"
import Input from "./components/Input"

const UserProfile = () => {
  return (
    <div
      className="w-full h-full absolute z-10 bg-[#0002] backdrop-blur
    flex items-center justify-center sm:px-3"
    >
      <div
        className="w-3/5 h-5/6 bg-zinc-100 dark:bg-zinc-800
      lg:w-5/6 sm:w-full sm:h-5/6 flex flex-col items-center relative overflow-auto"
      >
        <span className="absolute right-3 top-3 text-2xl 2xl:text-[2vw]">
          <BsX />
        </span>
        <form className="w-4/5 flex flex-col items-center gap-3 py-6 2xl:gap-8 md:w-5/6">
          <div>
            <label htmlFor="profilePicture">
              <div
                className="p-4 text-6xl rounded-full cursor-pointer
              bg-zinc-100 text-zinc-800 shadow-aroundSm 2xl:text-[3.8vw]
              2xl:p-4"
              >
                <BsPerson />
              </div>
            </label>
            <input type="file" id="profilePicture" className="hidden" />
          </div>

          <Input type="text" placeholder="nome" label="Nome" />

          <Input type="text" placeholder="sobrenome" label="Sobrenome" />

          <Input type="email" placeholder="email" label="E-mail" />

          <Input type="password" placeholder="**********" label="Senha" />

          <Input
            type="password"
            placeholder="**********"
            label="Confirme a Senha"
          />

          <div className="flex gap-3 p-1 self-end">
            <button className="text-2xl 2xl:text-[2vw]">
              <BsX />
            </button>

            <button className="text-2xl 2xl:text-[2vw]">
              <BsCheck />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserProfile
