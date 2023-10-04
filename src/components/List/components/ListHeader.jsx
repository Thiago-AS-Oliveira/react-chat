import React from "react"
import { AiOutlineUsergroupAdd } from "react-icons/ai"
import { BsPersonAdd, BsPlusCircle, BsThreeDotsVertical } from "react-icons/bs"

const ListHeader = ({ section }) => {
  const icons = {
    Conversas: <BsPlusCircle />,
    Contatos: <BsPersonAdd />,
    Grupos: <AiOutlineUsergroupAdd />,
  }

  return (
    <div className="h-[30px] 2xl:h-fit w-full flex items-center justify-between">
      <h2 className="text-xl font-medium 2xl:text-[1.4vw]">{section}</h2>

      <div className="flex items-center  gap-2">
        <span
          className="text-xl 2xl:text-[1.4vw]
         cursor-pointer relative flex justify-center"
        >
          {icons[section]}
        </span>
        <span className="text-xl 2xl:text-[1.4vw] cursor-pointer">
          <BsThreeDotsVertical />
        </span>
      </div>
    </div>
  )
}

export default ListHeader
