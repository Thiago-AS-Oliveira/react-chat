import React from "react"

const Initial = () => {
  return (
    <div
      className="w-full h-full p-5 bg-zinc-100 dark:bg-zinc-700  
      bg-cover bg-[url(./backgrounds/bgInicio.png)] flex flex-col gap-5 
      items-center justify-center"
    >
      <div
        className="bg-zinc-100 dark:bg-zinc-700 p-12 shadow-around flex items-center
      justify-center h-3/5 2xl:h-2/4 lg:h-2/5 sm:p-4"
      >
        <img src="./images/app.svg" alt="figura app" className="h-full" />
      </div>
    </div>
  )
}

export default Initial
