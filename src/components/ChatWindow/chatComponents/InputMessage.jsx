import React from "react"
import { BsEmojiSmile, BsPaperclip, BsSend } from "react-icons/bs"

const InputMessage = () => {
  return (
    <div
      className="min-h-[10%] max-h-[40%]
 flex items-center justify-between px-5 py-2 lg:px-3"
    >
      <textarea
        className="w-5/6 px-3 py-2 bg-zinc-100 text-zinc-900 outline-none 
         resize-none overflow-auto shadow-around 2xl:text-[1.2vw] 2xl:py-3 lg:w-9/12"
        type="text"
        placeholder="Mensagem"
        rows="1"
      />
      <button
        className="bg-zinc-100 text-zinc-900 p-2 text-xl 
  flex items-center justify-center shadow-around 2xl:text-[1.8vw] 2xl:p-3 "
      >
        <BsPaperclip />
      </button>

      <button
        className="bg-zinc-100 text-zinc-900 p-2 text-xl 
  flex items-center justify-center shadow-around 2xl:text-[1.8vw] 2xl:p-3 lg:hidden"
      >
        <BsEmojiSmile />
      </button>

      <button
        className="bg-zinc-100 text-zinc-900 p-2 text-xl 
  flex items-center justify-center shadow-around 2xl:text-[1.8vw] 2xl:p-3"
      >
        <BsSend />
      </button>
    </div>
  )
}

export default InputMessage
