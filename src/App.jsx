import React, { useEffect, useState } from "react";
import Persona from "./components/Persona/Persona.jsx";
import Listado from "./components/Listado/Listado.jsx";
import ListadoPersonas from "./components/ListadoPersonas/ListadoPersonas.jsx";
import FormPersona from "./components/FormPersona.jsx";

const Context = React.createContext();

const App = () => {
  const [listadoPersonas, setListadoPersonas] = useState(
    JSON.parse(localStorage.getItem("personas")) || []
  );

  const [personaActual, setPersonaActual] = useState({
    nombre: "",
    apellido: "",
    documento: "",
    tipoDocumento: "DNI",
    telefono: "",
  }); //Guarda datos de la persona que completa el form

  /*   useEffect(() => {
    const personasGuardadas = localStorage.getItem("personas");
    if (personasGuardadas) {
      setListadoPersonas(JSON.parse(personasGuardadas));
    }
  }, []); */

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

  const handlerEliminarPersona = (documento) => {
    setListadoPersonas((prev) =>
      prev.filter((persona) => persona.documento !== documento)
    );
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setListadoPersonas((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <FormPersona
        handlerSubmit={handlerSubmit}
        handleOnChange={handleOnChange}
      />
      <ListadoPersonas
        personas={listadoPersonas}
        handlerEliminarPersona={handlerEliminarPersona}
      />
    </>
  );
};

export default App;
