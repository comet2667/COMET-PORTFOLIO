import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home'
import Indiean from './pages/Indiean'
import Zipplanet from './pages/Zipplanet'
import './index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      }
    ]
  },
  {
    path: '/indie',
    element: <Indiean/>
  },
  {
    path: '/zip',
    element: <Zipplanet/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
