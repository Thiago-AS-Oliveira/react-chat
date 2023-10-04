import React from "react"
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div
      className="w-full h-screen bg-zinc-100 bg-[url(/backgrounds/bgCadastro.png)] 
      bg-cover flex items-center justify-between px-32 lg:px-10 sm:px-7"
    >
      <img
        src="./logo.svg"
        alt="logo"
        className="h-12 absolute top-8 sm:hidden"
      />

      <div className="w-2/4 h-full flex items-center justify-center lg:w-full">
        <div
          className="w-5/6 bg-zinc-100 p-10 shadow-around 2xl:w-3/4 2xl:p-16
          lg:w-2/4 mdlg:w-5/6 sm:w-full"
        >
          <form
            className="w-full flex flex-col items-center gap-4 pb-4 border-b 
          border-zinc-300"
          >
            <input
              type="text"
              placeholder="E-mail"
              className="w-full h-12 px-4 shadow-aroundSm outline-none
              2xl:h-[3.5vw] 2xl:text-[1.2vw]"
            />

            <input
              type="text"
              placeholder="Nome"
              className="w-full h-12 px-4 shadow-aroundSm outline-none
              2xl:h-[3.5vw] 2xl:text-[1.2vw]"
            />

            <input
              type="text"
              placeholder="Senha"
              className="w-full h-12 px-4 shadow-aroundSm outline-none
              2xl:h-[3.5vw] 2xl:text-[1.2vw]"
            />

            <input
              type="text"
              placeholder="Confirme Senha"
              className="w-full h-12 px-4 shadow-aroundSm outline-none
              2xl:h-[3.5vw] 2xl:text-[1.2vw]"
            />

            <button
              className="h-12 w-full px-4 
              bg-teal-400 text-zinc-100 shadow-aroundSm 2xl:h-[3.5vw] 2xl:text-[1.2vw]"
            >
              Criar conta
            </button>
          </form>

          <div className="flex flex-col items-center gap-4 pt-4 2xl:text-[1.2vw]">
            <p>Possui conta ?</p>

            <Link
              to="/login"
              className="h-12 w-full px-4 flex items-center justify-center
              bg-teal-400 text-zinc-100 shadow-aroundSm 2xl:h-[3.5vw] 2xl:text-[1.2vw]"
            >
              Entrar
            </Link>
          </div>
        </div>
      </div>

      <div className="w-2/4 h-full flex items-center justify-center lg:hidden">
        <img src="./images/cadastro.svg" alt="chat" className="h-3/5" />
      </div>
    </div>
  )
}

export default Register
