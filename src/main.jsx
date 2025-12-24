import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 800,     // animation duration in ms
  delay: 200,        // delay before animation starts
  once: true,        // whether animation should happen only once
});;


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)