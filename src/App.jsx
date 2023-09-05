import React from "react"

import { RouterProvider, createBrowserRouter } from "react-router-dom"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>app</>,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
