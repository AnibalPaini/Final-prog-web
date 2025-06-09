import React from "react";

const FormPersona = ({handleOnChange, handlerSubmit}) => {
  return (
    <form
      action=""
      onSubmit={handlerSubmit}
      style={{ display: "flex", flexDirection: "column", width: "150px" }}
    >
      <label htmlFor="">Nombre: </label>
      <input type="text" id="nombre" name="nombre" onChange={handleOnChange} />
      <label htmlFor="">Apellido: </label>
      <input
        type="text"
        id="apellido"
        name="apellido"
        onChange={handleOnChange}
      />
      <label htmlFor="">Documento: </label>
      <input
        type="number"
        id="documento"
        name="documento"
        onChange={handleOnChange}
      />
      <select onChange={handleOnChange} name="tipoDocumento" id="tipoDocumento">
        <option value="DNI">DNI</option>
        <option value="LE">LE</option>
        <option value="LE">LC</option>
        <option value="PASAPORTE">PASAPORTE</option>
      </select>
      <input
        type="text"
        id="telefono"
        name="telefono"
        onChange={handleOnChange}
      />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default FormPersona;
