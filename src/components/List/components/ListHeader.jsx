import React from "react"
import { AiOutlineUsergroupAdd } from "react-icons/ai"
import {
  BsChatRight,
  BsPersonAdd,
  BsPlus,
  BsThreeDotsVertical,
} from "react-icons/bs"

const ListHeader = ({ section }) => {
  const icons = {
    Conversas: (
      <>
        <BsPlus className="text-lg absolute top-[-1.6px] " />
        <BsChatRight />
      </>
    ),
    Contatos: <BsPersonAdd />,
    Grupos: <AiOutlineUsergroupAdd />,
  }

  return (
    <div className="h-[30px] w-full px-3 flex items-center justify-between">
      <h2 className="text-xl font-medium">{section}</h2>

      <div className="flex items-center  gap-2">
        <span className="text-xl cursor-pointer relative flex justify-center">
          {icons[section]}
        </span>
        <span className="text-xl cursor-pointer">
          <BsThreeDotsVertical />
        </span>
      </div>
    </div>
  )
}

export default ListHeader
