import React, {useState} from "react";

const Persona = (props) => {
  const[tipoDNI, setTipoDNI]=useState(props.persona.tipoDocumento)

/*   const cambioValor=(e)=>{
    console.log(e.target.value);
    setTipoDNI(e.target.value)
  }
    const envioForm=(e)=>{
    e.preventDefault()
    console.log(e.target.value);
  } */

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
      <b>Tipo:{tipoDNI }</b>
      <br />
      <b>Fecha nacimiento:{props.persona.fechaNacimiento || "No especificado"}</b>
      <br />
      <b>{props.persona.dni}</b>
      {tipoDNI==="PASAPORTE" && <p>Extranjero</p>}
      {/* <form onSubmit={envioForm}>
        <input type="text"/>
        <button type="submit">enviar</button>
      </form> */}
{/*       <select onChange={cambioValor}>
        <option value="DNI">DNI</option>
        <option value="LE">LE</option>
        <option value="LE">LC</option>
        <option value="PASAPORTE">PASAPORTE</option>
      </select> */}
    </li>
  );
};

export default Persona;
