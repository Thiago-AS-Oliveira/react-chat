import React from "react"
import { BsChat, BsPerson } from "react-icons/bs"

const ContactProfile = () => {
  return (
    <div
      id="background"
      className="w-full h-full absolute z-10 bg-[#0002] backdrop-blur
    flex items-center justify-center
    "
    >
      <div
        className="bg-zinc-100 dark:bg-zinc-700 w-5/12 h-3/4 shadow-around
      flex flex-col items-center gap-5 pb-10"
      >
        <div
          className="bg-zinc-200 dark:bg-zinc-800 border-b border-zinc-300 
        dark:border-zinc-600 w-full h-2/4 flex items-center justify-center"
        >
          <div
            className="bg-zinc-100 text-zinc-900 text-7xl p-5 rounded-full 
          shadow-aroundSm "
          >
            <BsPerson />
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <h2 className="text-2xl font-medium">Usuario Maluco da Silva</h2>
          <p>UsuarioMaluco@email.com</p>
        </div>

        <p className="text-center w-3/4">
          Texto qualquer para simular uma frase brega qualquer.
        </p>

        <button
          className="bg-teal-400 text-zinc-50 text-lg p-2 
        flex items-center gap-2 shadow-aroundSm mt-auto"
        >
          <BsChat /> Enviar mensagem
        </button>
      </div>
    </div>
  )
}

export default ContactProfile
