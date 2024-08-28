import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './adjust_example/AdjustLandingPage'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
