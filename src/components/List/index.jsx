import React, { useState } from "react"

import UserProfile from "./components/UserProfile"
import Sidebar from "../SideBar"
import ContactList from "./components/ContactList"
import GroupsList from "./components/GroupsList"
import ChatList from "./components/ChatList"

const List = () => {
  const [section, setSection] = useState("conversas")
  const sections = {
    conversas: <ChatList />,
    grupos: <GroupsList />,
    contatos: <ContactList />,
    perfil: <UserProfile />,
  }

  return (
    <div className="flex">
      <Sidebar select={setSection} />

      <div
        className="w-[350px] flex flex-col items-center pt-7
    border-r overflow-hidden border-zinc-300 dark:border-zinc-600 
    bg-zinc-200 dark:bg-zinc-800"
      >
        {sections[section]}
      </div>
    </div>
  )
}

export default List
