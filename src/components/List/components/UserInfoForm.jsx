import React from "react"
import { BsCheck } from "react-icons/bs"

const UserInfoForm = ({ type, placeholder }) => {
  return (
    <div className="w-full flex flex-col border-b border-teal-400">
      <form className="p-1 2xl:px-3 flex flex-wrap items-center justify-between">
        <label
          htmlFor="input"
          className="pb-1 2xl:text-[1.2vw] text-teal-400 w-full"
        >
          Nome
        </label>
        <input
          className="w-11/12 bg-transparent outline-none 
          2xl:mb-3 2xl:text-[1.2vw] 2xl:leading-[1.4vw] 2xl:h-[2vw]"
          id="input"
          type={type}
          placeholder={placeholder}
        />
        <button className="text-2xl 2xl:text-[1.6vw] 2xl:leading-[2vw]">
          <BsCheck />
        </button>
      </form>
    </div>
  )
}

export default UserInfoForm
