import React, { useState } from 'react'
import Persona from './components/Persona/Persona.jsx'
import Listado from './components/Listado/Listado.jsx'
import ListadoPersonas from './components/ListadoPersonas/ListadoPersonas.jsx'

const App = () => {
  const [listadoPersonas, setListadoPersonas]=useState([
    {
      nombre:"Anibal",
      apellido:"Paini",
      documento:44118546,
      tipoDocumento:"DNI"
    },
    {
      nombre:"Juan",
      apellido:"Perez",
      documento:41238546,
      tipoDocumento:"PASAPORTE"
    },
    {
      nombre:"Hernan",
      apellido:"Fernandez",
      documento:1222547,
      tipoDocumento:"DNI"
    },
  ])
  return (
    <div>
      <ListadoPersonas personas={listadoPersonas}/>
    </div>
  )
}

export default App

