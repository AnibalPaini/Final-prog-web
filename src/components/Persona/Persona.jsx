import React from "react";

const Persona = (props) => {
  const clickeame=()=>{
    alert("Hiciste clic")
  }
  const cambioValor=(e)=>{
    /* alert("Hiciste cambioValor") */
    e.prevent.default()
    console.log(e.target.value);
    
  }
  return (
    <li>
      {props.persona.nombre} {props.persona.apellido} - {props.persona.dni}
      <form onSubmit={cambioValor}>
        <input type="text"/>
        <button type="submit">enviar</button>
      </form>
      <select onChange={cambioValor}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button onClick={clickeame}>Clickeame</button>
    </li>
  );
};

export default Persona;
