import React from "react"
import { BsPerson } from "react-icons/bs"
import { Link } from "react-router-dom"

const ListLink = ({ to }) => {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 px-3 py-5 hover:bg-teal-400
      hover:text-zinc-100 transition duration-300 cursor-pointer"
    >
      <div
        className="bg-zinc-100 text-zinc-900 p-3 rounded-full 
        text-4xl shadow-around relative"
      >
        <BsPerson />

        <span
          className="w-5 h-5 block rounded-full border-2 absolute bottom-0 right-0
         border-zinc-100 dark:border-zinc-700 bg-green-400"
        ></span>
      </div>

      <div className="flex flex-1 flex-col justify-center">
        <div className="flex items-center gap-2 relative">
          <h2 className="text-xl font-medium w-[90%]">Chorão</h2>

          <span
            className="min-w-[18px] h-[18px] px-2 rounded-full flex items-center
          bg-teal-200 text-zinc-600 text-xs font-medium absolute right-0"
          >
            1
          </span>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-sm w-[100%]">Lorem ipsum dolor, sit amet...</p>

          <p className="text-[12px] font-medium">14:35</p>
        </div>
      </div>
    </Link>
  )
}

export default ListLink
