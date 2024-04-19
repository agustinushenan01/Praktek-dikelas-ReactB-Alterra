import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AddData from './Page/AddData.jsx'

ReactDOM.createRoot(document.getElementById('add-data')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AddData />
  </React.StrictMode>,
)