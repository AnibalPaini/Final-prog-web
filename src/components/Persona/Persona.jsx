import React, { useState, useContext } from "react";
import {Context} from "../../App.jsx"

const Persona = (props) => {
  const [tipoDNI, setTipoDNI] = useState(props.persona.tipoDocumento);
  const handlerEliminarPersona=useContext(Context)
  
  return (
    <li>
      <b>Nombre: {props.persona.nombre}</b>
      <br />
      <b>Apellido: {props.persona.apellido}</b>
      <br />
      <b>Telefono: {props.persona.telefono}</b>
      <br />
      <b>DNI: {props.persona.documento}</b>
      <br />
      <b>Tipo:{tipoDNI}</b>
      <br />
      <b>
        Fecha nacimiento:{props.persona.fechaNacimiento || "No especificado"}
      </b>
      <br />
      <b>{props.persona.dni}</b>
      {tipoDNI === "PASAPORTE" && <p>Extranjero</p>}
      <button
        onClick={() => handlerEliminarPersona(props.persona.documento)}
      >
        Eliminar
      </button>
    </li>
  );
};

export default Persona;
