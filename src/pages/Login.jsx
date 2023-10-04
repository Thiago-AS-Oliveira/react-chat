import React from "react"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div
      className="w-full h-screen bg-zinc-100 bg-[url(/backgrounds/bgLogin.png)] bg-cover
    flex items-center justify-between px-32 lg:px-10 sm:px-7"
    >
      <img src="./logo.svg" alt="logo" className="h-12 absolute top-8" />

      <div className="w-2/4 h-full flex items-center justify-center lg:hidden">
        <img src="./images/login.svg" alt="chat" className="h-2/4" />
      </div>

      <div className="w-2/4 h-full flex items-center justify-center lg:w-full">
        <div
          className="bg-zinc-100 w-4/5 p-10 shadow-around 2xl:p-16 lg:w-3/5 
        mdlg:w-3/4 sm:w-full"
        >
          <form
            className="flex flex-col items-center gap-4 pb-4 border-b border-zinc-300
            2xl:gap-6"
          >
            <input
              type="text"
              placeholder="E-mail"
              className="w-full h-12 px-4 shadow-aroundSm outline-none
              2xl:h-[3.5vw] 2xl:text-[1.2vw] "
            />

            <input
              type="text"
              placeholder="Senha"
              className="w-full h-12 px-4 shadow-aroundSm outline-none
              2xl:h-[3.5vw] 2xl:text-[1.2vw]"
            />

            <button
              className="w-full h-12 px-4 bg-teal-400 text-zinc-100 shadow-aroundSm
              2xl:h-[3.5vw] 2xl:text-[1.2vw] "
            >
              Entrar
            </button>
          </form>

          <div
            className="flex flex-col items-center gap-4 pt-4
            2xl:text-[1.2vw] 2xl:gap-6"
          >
            <p>Não tem conta ?</p>

            <Link
              to="/cadastro"
              className="w-full h-12 px-4 flex items-center justify-center
              bg-teal-400 text-zinc-100 shadow-aroundSm 2xl:h-[3.5vw] 2xl:text-[1.2vw] "
            >
              Crie uma conta
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
