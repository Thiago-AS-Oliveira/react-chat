import React from "react"

const Input = ({ placeholder }) => {
  return (
    <div className="h-[80px] px-3 flex items-center">
      <input
        className="px-3 h-[35px] w-full text-zinc-900 shadow-around outline-0"
        type="text"
        placeholder="Pesquisar grupos"
      />
    </div>
  )
}

export default Input
