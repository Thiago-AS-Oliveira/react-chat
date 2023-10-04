import React from "react"

import ChatHeader from "./chatComponents/ChatHeader"
import InputMessage from "./chatComponents/InputMessage"
import ChatBox from "./chatComponents/ChatBox"
import ContactProfile from "../ContactProfile"

const ChatWindow = () => {
  return (
    <div
      className="w-full h-full flex relative flex-col box-border 
    bg-[url(/backgrounds/bgChat.png)] bg-cover bg-zinc-100 dark:bg-zinc-700"
    >
      {/* <ContactProfile /> */}

      <ChatHeader />

      <div className="h-[90%] flex flex-col">
        <div className="flex flex-col-reverse gap-4 h-[90%] p-5 overflow-auto lg:px-3">
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

export default ChatWindow
