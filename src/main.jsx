import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactModal from 'react-modal'
import './main.scss'
import App from './App.jsx'

ReactModal.setAppElement('#root')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
