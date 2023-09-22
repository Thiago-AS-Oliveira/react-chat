import React from "react"
import ListHeader from "./ListHeader"
import Input from "./Input"
import ListLink from "./ListLink"

const GroupsList = () => {
  return (
    <div className="w-full h-full flex flex-col items-center animate-slide">
      <ListHeader section="Grupos" />

      <Input placeholder="Pesquisar grupos" />

      <div className="flex-1 w-full px-2 overflow-auto items-center">
        <ListLink to="grupo/12344" />
        <ListLink to="grupo/12344sjhagav" />
        <ListLink to="grupo/12asdasd344" />
      </div>
    </div>
  )
}

export default GroupsList
