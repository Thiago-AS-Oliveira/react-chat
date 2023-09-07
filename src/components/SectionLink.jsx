import React from "react"

const SectionLink = ({ children }) => {
  return (
    <span
      className="w-11 h-11 rounded text-2xl flex items-center justify-center
      hover:text-zinc-100 hover:bg-zinc-400 dark:hover:bg-zinc-800
        transition-all duration-500 ease-in-out cursor-pointer"
    >
      {children}
    </span>
  )
}

export default SectionLink
