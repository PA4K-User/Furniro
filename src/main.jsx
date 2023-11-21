import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Checkout from './Pages/Checkout.jsx'
import Contact from './Pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/checkout",
    element: <Checkout/>
  },
  {
    path: "/contact",
    element: <Contact/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
