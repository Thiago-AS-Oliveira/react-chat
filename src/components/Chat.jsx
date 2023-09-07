import React from "react"
import { BsPerson } from "react-icons/bs"

import ChatHeader from "./ChatHeader"
import InputMessage from "./InputMessage"
import ChatBox from "./ChatBox"

const Chat = () => {
  return (
    <div className="flex-1 flex flex-col box-border bg-zinc-300 dark:bg-zinc-800">
      <ChatHeader />

      <div className="h-[90%] flex flex-col">
        <div className="flex flex-col-reverse gap-4 h-[90%] p-5 overflow-auto">
          <ChatBox text={"doideira maluco"} time={"12:30"} isUser={true} />

          <ChatBox
            text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
                    quibusdam optio mollitia earum voluptates alias eum doloribus quos aut
                    libero odio magni eaque, quis distinctio magnam sequi nesciunt enim
                    ipsa.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
                    quibusdam optio mollitia earum voluptates alias eum doloribus quos aut
                    libero odio magni eaque, quis distinctio magnam sequi nesciunt enim
                    ipsa.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
                    quibusdam optio mollitia earum voluptates alias eum doloribus quos aut
                    libero odio magni eaque, quis distinctio magnam sequi nesciunt enim
                    ipsa.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
                    quibusdam optio mollitia earum voluptates alias eum doloribus quos aut
                    libero odio magni eaque, quis distinctio magnam sequi nesciunt enim
                    ipsa.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
                    quibusdam optio mollitia earum voluptates alias eum doloribus quos aut
                    libero odio magni eaque, quis distinctio magnam sequi nesciunt enim
                    ipsa.`}
            time={"14:26"}
            isUser={true}
          />

          <ChatBox
            text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
          quibusdam optio mollitia earum voluptates alias eum doloribus quos aut
          libero odio magni eaque, quis distinctio magnam sequi nesciunt enim
          ipsa.`}
            time={"14:26"}
          />

          <ChatBox text={"Bom dia"} time={"12:30"} isUser={true} />

          <ChatBox
            text={"Hello from the other side"}
            time={"12:30"}
            isUser={false}
          />
          <ChatBox text={"Hello ! Its Me"} time={"12:30"} isUser={false} />
          <ChatBox
            text={"Chorão cagou na varanda"}
            time={"12:30"}
            isUser={false}
          />
          <ChatBox
            text={"frases aleatoria de chat"}
            time={"12:30"}
            isUser={true}
          />
          <ChatBox text={"Ole ole ole ole"} time={"12:30"} isUser={true} />
          <ChatBox text={"eae"} time={"12:30"} isUser={false} />
          <ChatBox text={"Olá, tudo bom ?"} time={"12:30"} isUser={true} />
        </div>

        <InputMessage />
      </div>
    </div>
  )
}

export default Chat
