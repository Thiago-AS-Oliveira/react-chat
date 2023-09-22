import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-zinc-100 bg-cover bg-[url(/backgrounds/bgHome.png)]">
      <div className="w-full h-28 px-32 flex items-center justify-between">
        <img src="./logo.svg" alt="logo" className="h-12" />

        <div className="flex items-center gap-6">
          <Link
            to="/login"
            className="w-36 h-10 bg-teal-400 text-zinc-100 flex items-center 
            justify-center shadow-simple"
          >
            Entre
          </Link>

          <Link
            to="/cadastro"
            className="w-36 h-10 bg-teal-400 text-zinc-100 flex items-center 
          justify-center shadow-simple"
          >
            Cadastre-se
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-1 gap-12 items-center justify-between px-32">
        <div className="w-3/6 flex flex-col gap-2">
          <h2 className="text-4xl text-teal-400 font-extrabold">
            Conecte-se com o mundo.
          </h2>
          <h2 className="text-4xl font-extrabold w-11/12">
            Descubra uma nova maneira de se comunicar!
          </h2>
          <p className="w-10/12 my-5">
            O futuro da comunicação está aqui! Oferecemos uma experiência de
            conversa rápida, segura e repleta de recursos para manter você
            conectado com amigos, família e colegas. Descubra um novo nível de
            conectividade em suas mãos.
          </p>

          <Link
            to="/app"
            className="w-60 h-12 text-lg bg-teal-400 text-zinc-100 flex items-center 
          justify-center shadow-simple"
          >
            Ir para o App
          </Link>
        </div>
        <div className="w-3/6 flex items-center justify-center">
          <img src="./images/chat.svg" alt="chat" className="h-80" />
        </div>
      </div>
    </div>
  )
}

export default Home
