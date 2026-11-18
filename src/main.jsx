import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import { AppContext } from './context/AppContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppContext.Provider value="FixTrail">
        <App />
      </AppContext.Provider>
    </BrowserRouter>
  </StrictMode>,
)