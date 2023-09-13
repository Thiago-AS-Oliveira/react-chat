import React from "react"
import ListHeader from "./ListHeader"
import { BsCheck, BsPerson, BsX } from "react-icons/bs"

const UserProfile = () => {
  return (
    <div className="w-full flex flex-col items-center animate-slide">
      <ListHeader section="Perfil" />

      <div className="w-full flex flex-col items-center px-3 py-7 gap-3">
        <div
          className="w-[90px] h-[90px] text-6xl flex items-center justify-center
         rounded-full bg-zinc-100 text-zinc-900 shadow-aroundSm"
        >
          <BsPerson />
        </div>

        <div className="flex flex-col w-full gap-3">
          <div className="w-full flex flex-col border-b border-teal-400">
            <label htmlFor="name" className="px-1 text-teal-400">
              Nome
            </label>
            <form className="flex pb-1 items-center justify-between">
              <input
                className="p-1 w-11/12 bg-transparent outline-none"
                id="name"
                type="text"
                placeholder="Usuário"
              />
              <button className="p-1 text-2xl">
                <BsCheck />
              </button>
            </form>
          </div>

          <div className="w-full flex flex-col border-b border-teal-400">
            <label htmlFor="lastname" className="px-1 text-teal-400">
              Sobrenome
            </label>
            <form className="flex pb-1 items-center justify-between">
              <input
                className="p-1 w-11/12 bg-transparent outline-none"
                id="lastname"
                type="text"
                placeholder="Maluco"
              />
              <button className="p-1 text-2xl">
                <BsCheck />
              </button>
            </form>
          </div>

          <div>
            <div className="w-full flex flex-col border-b border-teal-400">
              <label htmlFor="email" className="px-1 text-teal-400">
                E-mail
              </label>
              <form className="flex pb-1 items-center justify-between">
                <input
                  className="p-1 w-11/12 bg-transparent outline-none"
                  id="email"
                  type="text"
                  placeholder="usuariomaluco@email.com"
                />
                <button className="p-1 text-2xl">
                  <BsCheck />
                </button>
              </form>
            </div>
          </div>

          <form className="-full flex flex-col gap-2">
            <div className="w-full pb-1 flex flex-col border-b border-teal-400">
              <label htmlFor="password" className="px-1 text-teal-400">
                Senha
              </label>
              <input
                className="p-1 w-11/12 bg-transparent outline-none"
                type="text"
                placeholder="************"
              />
            </div>

            <div className="w-full pb-1 flex flex-col border-b border-teal-400">
              <label htmlFor="confirmPassword" className="px-1 text-teal-400">
                Confirme a nova senha
              </label>
              <input
                className="p-1 w-11/12 bg-transparent outline-none"
                type="text"
                placeholder="************"
              />
            </div>

            <div className="ml-auto flex gap-1">
              <button className="p-1 text-2xl">
                <BsX />
              </button>

              <button className="p-1 text-2xl">
                <BsCheck />
              </button>
            </div>
          </form>
        </div>

        <div className="w-full">
          <button className="text-rose-500">Excluir conta</button>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
