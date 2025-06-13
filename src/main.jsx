import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './styles.css'
import { SolarAndMortyApp } from './SolarAndMortyApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SolarAndMortyApp/>
    </BrowserRouter>
  </StrictMode>,
)