import React from "react"
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div
      className="w-full h-screen bg-zinc-100 bg-[url(/backgrounds/bgCadastro.png)] 
      bg-cover flex items-center justify-between px-32"
    >
      <img src="./logo.svg" alt="logo" className="h-12 absolute top-8" />

      <div className=" w-2/4 flex items-center justify-center">
        <div className="bg-zinc-100 p-10 shadow-around">
          <form className="flex flex-col items-center gap-4 pb-4 border-b border-zinc-300">
            <input
              type="text"
              placeholder="E-mail"
              className="h-12 w-[350px] px-4 shadow-aroundSm outline-none"
            />

            <input
              type="text"
              placeholder="Nome"
              className="h-12 w-[350px] px-4 shadow-aroundSm outline-none"
            />

            <input
              type="text"
              placeholder="Senha"
              className="h-12 w-[350px] px-4 shadow-aroundSm outline-none"
            />

            <input
              type="text"
              placeholder="Confirme Senha"
              className="h-12 w-[350px] px-4 shadow-aroundSm outline-none"
            />

            <button
              className="h-12 w-[350px] px-4 
              bg-teal-400 text-zinc-100 shadow-aroundSm"
            >
              Criar conta
            </button>
          </form>

          <div className="flex flex-col items-center gap-4 pt-4">
            <p>Possui conta ?</p>

            <Link
              to="/login"
              className="h-12 w-[350px] px-4 flex items-center justify-center
              bg-teal-400 text-zinc-100 shadow-aroundSm"
            >
              Entrar
            </Link>
          </div>
        </div>
      </div>

      <div className="w-2/4 flex items-center justify-center">
        <img src="./images/cadastro.svg" alt="chat" className="h-96" />
      </div>
    </div>
  )
}

export default Register
