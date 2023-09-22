import React from "react"
import ListHeader from "./ListHeader"
import Input from "./Input"
import ListLink from "./ListLink"

const ChatList = () => {
  return (
    <div className="w-full h-full flex flex-col items-center animate-slide">
      <ListHeader section="Conversas" />

      <Input placeholder="Pesquisar conversas" />

      <div className="flex-1 overflow-auto w-full px-2 items-center">
        <ListLink to="conversa/12344" />
        <ListLink to="conversa/12asda344" />
        <ListLink to="conversa/12sszxc344" />
        <ListLink to="conversa/123q12334444" />
      </div>
    </div>
  )
}

export default ChatList
