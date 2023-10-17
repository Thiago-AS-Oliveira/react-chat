import React from "react"

const Input = ({ type, placeholder, label }) => {
  return (
    <div className="w-full flex flex-col">
      <label
        className="px-3 text-sm text-teal-400 2xl:text-[1.2vw] 
        2xl:leading-[1.4vw] 2xl:px-[1vw]"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        className="px-3 py-2 text-base outline-none bg-inherit 2xl:px-[1vw]
        border-b border-teal-400 2xl:text-[1.3vw] 2xl:leading-[1.5vw] 2xl:py-3"
      />
    </div>
  )
}

export default Input
