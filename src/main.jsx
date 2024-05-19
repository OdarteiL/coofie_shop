import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AppRouter from './router/AppRouter.jsx'
import config from '../config.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>,
)
