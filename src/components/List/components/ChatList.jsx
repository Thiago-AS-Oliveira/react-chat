import React from "react"
import ListHeader from "./ListHeader"
import Input from "./Input"
import ChatLink from "./ListLink"

const ChatList = () => {
  return (
    <div className="w-full h-full flex flex-col animate-slide">
      <ListHeader section="Conversas" />

      <Input placeholder="Pesquisar conversas" />

      <div className="flex-1 overflow-auto">
        <ChatLink to="conversa/12344" />
        <ChatLink to="conversa/12asda344" />
        <ChatLink to="conversa/12sszxc344" />
        <ChatLink to="conversa/123q12334444" />
      </div>
    </div>
  )
}

export default ChatList
