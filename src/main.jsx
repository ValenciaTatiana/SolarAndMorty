import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { SolarAndMortyApp } from './SolarAndMortyApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SolarAndMortyApp />
  </StrictMode>,
)