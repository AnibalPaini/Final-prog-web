import React from 'react'
import Persona from '../Persona/Persona.jsx'

const ListadoPersonas = (props) => {
  return (
    <ul>
        {props.personas.map((persona)=><Persona key={persona.documento} persona={persona} handlerEliminarPersona={props.handlerEliminarPersona}/>)}
    </ul>
  )
}

export default ListadoPersonas