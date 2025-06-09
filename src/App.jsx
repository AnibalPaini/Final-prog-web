import React, { useEffect, useState } from "react";
import Persona from "./components/Persona/Persona.jsx";
import Listado from "./components/Listado/Listado.jsx";
import ListadoPersonas from "./components/ListadoPersonas/ListadoPersonas.jsx";
import FormPersona from "./components/FormPersona.jsx";

const App = () => {
  const [listadoPersonas, setListadoPersonas] = useState([]);


  const [personaActual, setPersonaActual] = useState({
    nombre: "",
    apellido: "",
    documento: "",
    tipoDocumento: "DNI",
    telefono: "",
  }); //Guarda datos de la persona que completa el form

  useEffect(() => {
    const personasGuardadas = localStorage.getItem("personas");
    if (personasGuardadas) {
      setListadoPersonas(JSON.parse(personasGuardadas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("personas", JSON.stringify(listadoPersonas));
  }, [listadoPersonas]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    setListadoPersonas((prev) => [...prev, personaActual]);
    setPersonaActual({
      nombre: "",
      apellido: "",
      documento: "",
      tipoDocumento: "DNI",
      telefono: "",
    });
  };

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setPersonaActual((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setListadoPersonas((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* <form
        action=""
        onSubmit={handlerSubmit}
        style={{ display: "flex", flexDirection: "column", width: "150px" }}
      >
        <label htmlFor="">Nombre: </label>
        <input type="text" id="nombre" name="nombre" onChange={handleOnChange} />
        <label htmlFor="">Apellido: </label>
        <input type="text" id="apellido" name="apellido" onChange={handleOnChange} />
        <label htmlFor="">Documento: </label>
        <input type="number" id="documento" name="documento" onChange={handleOnChange} />
        <select onChange={handleOnChange} name="tipoDocumento" id="tipoDocumento">
          <option value="DNI">DNI</option>
          <option value="LE">LE</option>
          <option value="LE">LC</option>
          <option value="PASAPORTE">PASAPORTE</option>
        </select>
        <input type="text" id="telefono" name="telefono" onChange={handleOnChange} />
        <button type="submit">Guardar</button>
      </form> */}
      <FormPersona
        handlerSubmit={handlerSubmit}
        handleOnChange={handleOnChange}
      />
      <ListadoPersonas personas={listadoPersonas} />
    </>
  );
};

export default App;
