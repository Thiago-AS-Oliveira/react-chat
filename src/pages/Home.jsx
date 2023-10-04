import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div
      className="w-full h-screen flex flex-col bg-zinc-100 
      bg-[url(/backgrounds/bgHome.png)] bg-cover"
    >
      <div
        className="w-full h-28 px-32 flex items-center justify-between 2xl:h-1/6 
        lg:px-12 sm:justify-center sm:h-16 sm:px-6"
      >
        <img src="./logo.svg" alt="logo" className="h-12 2xl:h-1/3 sm:hidden" />

        <div className="flex items-center gap-6">
          <Link
            to="/login"
            className="w-36 h-10 bg-teal-400 text-zinc-100 flex items-center 
            justify-center shadow-simple 2xl:text-[1.2vw] 2xl:h-fit 2xl:w-auto 
            2xl:min-w-[10vw] 2xl:py-[.5vw]"
          >
            Entre
          </Link>

          <Link
            to="/cadastro"
            className="w-36 h-10 bg-teal-400 text-zinc-100 flex items-center 
            justify-center shadow-simple 2xl:text-[1.2vw] 2xl:h-fit 2xl:w-auto 
            2xl:min-w-[10vw] 2xl:py-[.5vw]"
          >
            Cadastre-se
          </Link>
        </div>
      </div>

      <div
        className="w-full h-full flex flex-1 gap-12 items-center justify-between px-32
        lg:px-12 sm:px-6"
      >
        <div
          className="w-3/6 h-full flex flex-col justify-center gap-2 mdlg:w-full
        mdlg:items-center mdlg:gap-4 sm:gap-2"
        >
          <h2
            className="text-4xl text-teal-400 font-extrabold 2xl:text-[2.5vw] 
          2xl:leading-[2.5vw] mdlg:text-center mdlg:text-5xl sm:text-3xl"
          >
            Conecte-se com o mundo.
          </h2>
          <h2
            className="text-4xl font-extrabold w-11/12 2xl:text-[2.5vw] 2xl:leading-[2.5vw]
          lg:w-full mdlg:text-center mdlg:text-5xl sm:text-3xl"
          >
            Descubra uma nova maneira de se comunicar!
          </h2>
          <p
            className="w-10/12 my-5 2xl:text-[1.2vw] 2xl:leading-[1.4vw] lg:w-full
          mdlg:text-center mdlg:w-10/12 mdlg:text-xl sm:text-base sm:w-full"
          >
            O futuro da comunicação está aqui! Oferecemos uma experiência de
            conversa rápida, segura e repleta de recursos para manter você
            conectado com amigos, família e colegas. Descubra um novo nível de
            conectividade em suas mãos.
          </p>

          <Link
            to="/app"
            className="w-60 h-12 text-lg bg-teal-400 text-zinc-100 flex items-center 
          justify-center shadow-simple 2xl:text-[1.5vw] 2xl:h-fit 2xl:w-fit 
          2xl:min-w-[15vw] 2xl:py-[1vw]"
          >
            Ir para o App
          </Link>
        </div>

        <div className="w-3/6 h-full flex items-center justify-center mdlg:hidden">
          <img src="./images/chat.svg" alt="chat" className="h-80 2xl:h-2/4" />
        </div>
      </div>
    </div>
  )
}

export default Home
