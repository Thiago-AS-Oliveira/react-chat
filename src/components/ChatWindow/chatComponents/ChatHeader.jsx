import React from "react"
import { BsPerson, BsSearch, BsThreeDotsVertical } from "react-icons/bs"

const ChatHeader = () => {
  return (
    <div
      className=" h-[10%] border-b border-zinc-300 dark:border-zinc-600
  bg-zinc-100 dark:bg-zinc-700 flex justify-between items-center px-4"
    >
      <div className="flex items-center gap-2">
        <div className="bg-zinc-100 p-2 text-3xl text-zinc-700 rounded-full shadow-around relative">
          <BsPerson />

          <span
            className="
        w-4 h-4 block rounded-full border-2 
        border-zinc-100 dark:border-zinc-700
        bg-green-400 
        absolute bottom-0 right-0"
          ></span>
        </div>
        <h2 className="text-xl font-medium">Nome do doidão</h2>
      </div>

      <div className="flex items-center gap-5">
        <BsSearch />
        <BsThreeDotsVertical />
      </div>
    </div>
  )
}

export default ChatHeader
