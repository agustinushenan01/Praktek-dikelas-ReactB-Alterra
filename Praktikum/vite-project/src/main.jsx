import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import App from './App.jsx'
import AppRouting from './AppRouting.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouting />
    </BrowserRouter>
  </React.StrictMode>,
)
