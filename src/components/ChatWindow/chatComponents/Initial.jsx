import React from "react"

const Initial = () => {
  return (
    <div
      className="w-full h-full bg-zinc-100 dark:bg-zinc-700  
      bg-cover bg-[url(./backgrounds/bgInicio.png)] flex flex-col gap-5 items-center justify-center"
    >
      <div className="bg-zinc-100 dark:bg-zinc-700 py-10 px-12 shadow-around">
        <img src="./images/app.svg" alt="figura app" />
      </div>
    </div>
  )
}

export default Initial
