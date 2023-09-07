import React from "react"

import ContactList from "../components/ContactList"
import Chat from "../components/Chat"
import Sidebar from "../components/Sidebar"

const Main = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <ContactList />
      <Chat />
    </div>
  )
}

export default Main
