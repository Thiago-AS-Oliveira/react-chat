import React from "react"
import { Outlet } from "react-router-dom"

import List from "../components/List"

const AppBase = () => {
  return (
    <div className="flex h-screen bg-zinc-100 dark:bg-zinc-700">
      <List />
      <div className="h-full w-[70%] relative lg:w-full">
        <Outlet />
      </div>
    </div>
  )
}

export default AppBase
