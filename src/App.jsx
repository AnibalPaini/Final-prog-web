import React, { useEffect, useState, useReducer } from "react";
import Persona from "./components/Persona/Persona.jsx";
import Listado from "./components/Listado/Listado.jsx";
import ListadoPersonas from "./components/ListadoPersonas/ListadoPersonas.jsx";
import FormPersona from "./components/FormPersona.jsx";

export const Context = React.createContext();

function personasReducer(personas, action){
  switch(action.type){
    case "agregar": return [...personas, action.persona]; 
    case "eliminar": return personas.filter(persona=> persona.documento !== action.documento)
    default: throw new Error("Esta accion no esta definida!");
    
  }
}

const initialPersonas=JSON.parse(localStorage.getItem("personas")) || []

const App = () => {
/*   const [listadoPersonas, setListadoPersonas] = useState(
    JSON.parse(localStorage.getItem("personas")) || []
  ); */

  const [listadoPersonas, dispatch] = useReducer(personasReducer, initialPersonas)

  

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
    dispatch({type:"agregar", persona: personaActual})
/*     setListadoPersonas((prev) => [...prev, personaActual]);
    setPersonaActual({
      nombre: "",
      apellido: "",
      documento: "",
      tipoDocumento: "DNI",
      telefono: "",
    }); */
  };

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setPersonaActual((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handlerEliminarPersona = (documento) => {
    dispatch({type:"eliminar", documento: documento})
    /* setListadoPersonas((prev) =>
      prev.filter((persona) => persona.documento !== documento)
    ); */
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
      <Context.Provider value={handlerEliminarPersona}>
        <ListadoPersonas
          personas={listadoPersonas}
        />
      </Context.Provider>
    </>
  );
};

export default App;
