import React from 'react'
import ReactDOM from 'react-dom/client'
import Portifolio from './Portifolio.tsx'
import Tecnologias from './Tecnologias.tsx'
import Contato from './Contato.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Portifolio />
    <Tecnologias/>
    <Contato/>
  </React.StrictMode>,
)
