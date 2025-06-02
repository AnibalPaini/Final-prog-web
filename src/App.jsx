import React from 'react'
import Persona from './components/Persona/Persona.jsx'
import Listado from './components/Listado/Listado.jsx'

const App = () => {

  return (
    <div>
      <Listado>
        <Persona persona={
          {nombre:"Juan",
          apellido:"Perez",
          dni:44115445}
        }/>
        <Persona persona={
          {nombre:"Lucas",
          apellido:"Fernandez",
          dni:44115411}
        }/>
      </Listado>
    </div>
  )
}

export default App

