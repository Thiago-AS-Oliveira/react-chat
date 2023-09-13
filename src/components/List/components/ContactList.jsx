import React from "react"

import ListLink from "./ListLink"
import ListHeader from "./ListHeader"
import Input from "./Input"

const ContactList = () => {
  return (
    <div className="w-full h-full flex flex-col animate-slide">
      <ListHeader section="Contatos" />

      <Input placeholder="Pesquisar contatos" />

      <div className="flex-1 overflow-auto">
        <ListLink to="contato/asdy123jasg1" />
        <ListLink to="contato/tshat" />
        <ListLink to="contato/asdy123jasdaasg1" />
        <ListLink to="contato/as111" />
        <ListLink to="contato/asdy123jasdasd" />
        <ListLink to="contato/as" />
      </div>
    </div>
  )
}

export default ContactList
