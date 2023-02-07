import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import ErrorPage from './ErrorPage'
import Layout from './Layout/Layout'
import Rent from "./Rent/Rent"

const router = createBrowserRouter(
  [
    {
      path: '/',
      element:<Layout/>,
      errorElement:<ErrorPage/>,
      children:[{
        path:'/rent',
        element:<Rent/>
      }]
    }
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
