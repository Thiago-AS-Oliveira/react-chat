import React, { useState } from "react"
import { BsPerson } from "react-icons/bs"
import { Link } from "react-router-dom"

const ListLink = ({ to }) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <Link
      to={to}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="flex items-center gap-2 px-3 py-5 hover:bg-teal-400
      hover:text-zinc-100 transition duration-300 cursor-pointer 2xl:gap-3
      2xl:py-6"
    >
      <div
        className="bg-zinc-100 text-zinc-900 p-3 rounded-full 
        text-4xl shadow-around relative 2xl:text-[3.2vw]"
      >
        <BsPerson />

        <span
          className={`w-5 h-5 block rounded-full border-2 absolute bottom-0 right-0
         border-zinc-100 dark:border-zinc-700 bg-green-400 2xl:h-[1.2vw] 2xl:w-[1.2vw]
         ${isHover && "border-green-400"}`}
        ></span>
      </div>

      <div className="flex flex-1 flex-col justify-center 2xl:gap-2">
        <div className="flex items-center gap-2 relative">
          <h2 className="text-xl 2xl:text-[1.4vw] 2xl:leading-[1.8vw] font-medium w-[90%]">
            Chorão
          </h2>

          <span
            className="min-w-[18px] h-[18px] px-2 rounded-full flex items-center
          bg-teal-200 text-zinc-600 text-xs font-medium absolute right-0
          2xl:text-[1.1vw] 2xl:leading-[1.4vw] 2xl:min-w-[1.4vw] 2xl:h-[1.4vw]"
          >
            1
          </span>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-sm 2xl:text-[1.1vw] 2xl:leading-[1.4vw] w-[100%]">
            Lorem ipsum dolor, sit am...
          </p>

          <p className="text-[12px] 2xl:text-[1vw] 2xl:leading-[1.2vw] font-medium">
            14:35
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ListLink
