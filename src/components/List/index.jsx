import React, { useState } from "react"

import UserProfile from "./components/UserProfile"
import Sidebar from "../SideBar"
import ContactList from "./components/ContactList"
import GroupsList from "./components/GroupsList"
import ChatList from "./components/ChatList"

const List = () => {
  const [showMenu, setShowMenu] = useState(true)
  const [section, setSection] = useState("conversas")
  const sections = {
    conversas: <ChatList />,
    grupos: <GroupsList />,
    contatos: <ContactList />,
    perfil: <UserProfile />,
  }

  return (
    <div
      className={`flex w-[30%] lg:w-[90%] lg:fixed lg:z-10 
      ${!showMenu ? "lg:left-[-100%]" : "lg:left-0"}`}
    >
      <Sidebar select={setSection} sectionSelected={section} />

      <div
        className="flex-1 flex flex-col items-center pt-7 2xl:pt-12
        border-r overflow-hidden border-zinc-300 dark:border-zinc-600 
      bg-zinc-100 dark:bg-zinc-700"
      >
        {sections[section]}
      </div>
    </div>
  )
}

export default List
