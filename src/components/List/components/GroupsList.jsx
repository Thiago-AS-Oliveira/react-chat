import React from "react"
import ListHeader from "./ListHeader"
import Input from "./Input"
import ChatLink from "./ListLink"

const GroupsList = () => {
  return (
    <div className="w-full h-full flex flex-col animate-slide">
      <ListHeader section="Grupos" />

      <Input placeholder="Pesquisar grupos" />

      <div className="flex-1 overflow-auto">
        <ChatLink to="grupo/12344" />
        <ChatLink to="grupo/12344sjhagav" />
        <ChatLink to="grupo/12asdasd344" />
      </div>
    </div>
  )
}

export default GroupsList
