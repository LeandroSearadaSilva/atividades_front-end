import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Head } from './componentes/Head'
import { Body } from './componentes/Body'
import { Foot } from './componentes/Foot'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Head />
    <Body />
    <Foot />
  </StrictMode>,
)
