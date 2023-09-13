import React from "react"
import { BsEmojiSmile, BsPaperclip, BsSend } from "react-icons/bs"

const InputMessage = () => {
  return (
    <div
      className="min-h-[10%] max-h-[40%]
 flex items-center justify-between px-5 py-2"
    >
      <textarea
        className="w-5/6 px-3 py-2 bg-zinc-100 text-zinc-900 outline-none 
    h-auto resize-none overflow-auto shadow-around"
        type="text"
        placeholder="Mensagem"
        rows="1"
      />
      <button
        className="bg-zinc-100 text-zinc-900 h-10 w-10 text-xl 
  flex items-center justify-center"
      >
        <BsPaperclip />
      </button>

      <button
        className="bg-zinc-100 text-zinc-900 h-10 w-10 text-xl 
  flex items-center justify-center"
      >
        <BsEmojiSmile />
      </button>

      <button
        className="bg-zinc-100 text-zinc-900 h-10 w-10 text-xl 
  flex items-center justify-center"
      >
        <BsSend />
      </button>
    </div>
  )
}

export default InputMessage
