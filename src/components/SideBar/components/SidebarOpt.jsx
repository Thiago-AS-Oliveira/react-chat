import React from "react"

const SidebarOpt = ({ children, option, select, sectionSelected }) => {
  const click = () => select(option)
  const isSelected = sectionSelected === option

  return (
    <div
      onClick={click}
      className={`w-11 h-11 text-2xl text-zinc-100 flex items-center justify-center
     hover:bg-teal-500 transition-all duration-500 ease-in-out cursor-pointer 
     ${isSelected && "bg-teal-500"}`}
    >
      {children}
    </div>
  )
}

export default SidebarOpt
