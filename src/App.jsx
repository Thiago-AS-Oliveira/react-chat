import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import AppBase from "./pages/AppBase"
import ChatWindow from "./components/ChatWindow"
import Initial from "./components/ChatWindow/chatComponents/Initial"
import Home from "./pages/Home"
import ContactProfile from "./components/ContactProfile"

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/auth", element: <AppBase /> },
    {
      path: "/app",
      element: <AppBase />,
      children: [
        { path: "/app", element: <Initial /> },
        { path: "conversa/:id", element: <ChatWindow /> },
        { path: "/app/grupo/:d", element: <ChatWindow /> },
        { path: "/app/contato/:id", element: <ContactProfile /> },
        { path: "/app/perfil", element: <ChatWindow /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
