import React, {useState} from "react";

const Persona = (props) => {
  const[tipoDNI, setTipoDNI]=useState("")

  const clickeame=()=>{
    alert("Hiciste clic")
  }
  const cambioValor=(e)=>{
    console.log(e.target.value);
    setTipoDNI(e.target.value)
  }
    const envioForm=(e)=>{
    e.preventDefault()
    console.log(e.target.value);
  }

  return (
    <li>
      <b>{props.persona.nombre}</b>
      <br />
      <b>{props.persona.apellido}</b>
      <br />
      <b>Tipo:{tipoDNI}</b>
      <br />
      <b>{props.persona.dni}</b>
       
      <form onSubmit={envioForm}>
        <input type="text"/>
        <button type="submit">enviar</button>
      </form>
      <select onChange={cambioValor}>
        <option value="DNI">DNI</option>
        <option value="LE">LE</option>
        <option value="LE">LC</option>
        <option value="PASAPORTE">PASAPORTE</option>
      </select>
      <br />
      <button onClick={clickeame}>Clickeame</button>
      <br />
    </li>
  );
};

export default Persona;
