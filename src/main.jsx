import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import ErrorPage from './ErrorPage'
import Layout from './Layout/Layout'
import Rent from "./Pages/Rent/Rent"
import Rentout from './Pages/RentOut/Rentout'

// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <Layout />,
//       errorElement: <ErrorPage />,
//       children: [{
//         path: '/rent',
//         element: <Rent />
//       }]
//     }
//   ]
// )
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} errorElement={<ErrorPage />}>
    {/* <Route path='/signin' element={<Signin />} /> */}

    <Route path='rent' element={<Rent />}></Route>
    <Route path='rentout' element={<Rentout />}></Route>

  </Route >

))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
