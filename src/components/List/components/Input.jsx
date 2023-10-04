import React from "react"

const Input = ({ placeholder }) => {
  return (
    <div className="h-1/6 w-full px-4  flex items-center">
      <input
        className="px-3 h-10 w-full text-zinc-900 shadow-around outline-0
        2xl:h-2/6 2xl:text-[1.1vw] 2xl:px-5"
        type="text"
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
