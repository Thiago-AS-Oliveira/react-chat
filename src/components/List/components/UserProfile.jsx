import React from "react"
import ListHeader from "./ListHeader"
import { BsCheck, BsPerson, BsX } from "react-icons/bs"
import UserInfoForm from "./UserInfoForm"

const UserProfile = () => {
  return (
    <div className="w-full h-full px-3 flex flex-col items-center animate-slide">
      <ListHeader section="Perfil" />

      <div className="w-full h-full flex flex-col items-center py-7 gap-3">
        <div
          className="w-24 h-24 text-5xl flex items-center justify-center
         rounded-full bg-zinc-100 text-zinc-900 shadow-aroundSm 
         2xl:h-[7vw] 2xl:w-[7vw] 2xl:text-[3.3vw]"
        >
          <BsPerson />
        </div>

        <div className="flex flex-col w-full gap-3">
          <UserInfoForm type="text" placeholder="Usuário" />

          <UserInfoForm type="text" placeholder="Maluco" />

          <UserInfoForm type="email" placeholder="usuariomaluco@email.com" />

          <form className="w-full flex flex-col gap-2">
            <div
              className="p-1 2xl:px-3 flex flex-wrap items-center
              justify-between border-b border-teal-400"
            >
              <label
                htmlFor="password"
                className="pb-1 2xl:text-[1.2vw] text-teal-400 w-full"
              >
                Senha
              </label>
              <input
                className="w-11/12 bg-transparent outline-none 
                2xl:mb-3 2xl:text-[1.2vw] 2xl:leading-[1.4vw] 2xl:h-[2vw]"
                type="password"
                placeholder="************"
              />
            </div>

            <div
              className="p-1 2xl:px-3 flex flex-wrap items-center 
              justify-between border-b border-teal-400"
            >
              <label
                htmlFor="confirmPassword"
                className="pb-1 2xl:text-[1.2vw] text-teal-400 w-full"
              >
                Confirme a nova senha
              </label>
              <input
                className="w-11/12 bg-transparent outline-none 
                2xl:mb-3 2xl:text-[1.2vw] 2xl:leading-[1.4vw] 2xl:h-[2vw]"
                type="password"
                placeholder="************"
              />
            </div>

            <div className="ml-auto flex gap-1 2xl:gap-2 2xl:p-2">
              <button className="text-2xl 2xl:text-[1.8vw] 2xl:leading-[2vw]">
                <BsX />
              </button>

              <button className="text-2xl 2xl:text-[1.8vw] 2xl:leading-[2vw]">
                <BsCheck />
              </button>
            </div>
          </form>
        </div>

        <div className="w-full">
          <button
            className="text-rose-500 2xl:text-[1.2vw] 
          2xl:leading-[1.4vw] 2xl:h-[2vw] 2xl:px-3"
          >
            Excluir conta
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
