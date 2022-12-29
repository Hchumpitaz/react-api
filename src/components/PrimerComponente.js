import React, {useState} from 'react'

export const PrimerComponente = () => {

  // let nombre = "Harrison Chum.";
  let web = "focuz.com";
  
  const [nombre, setNombre] = useState("Harrison")

  let cursos = [
    "Master en JavaScript",
    "Master en PHP",
    "Master en React",
    "Master en CSS"
  ];

  const cambiarNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
  }

  return (
    <div>
        <h1>Mi primer componente</h1>
        <p>Este es un texto en mi componente</p>
        <p>Mi nombre es: <strong className={nombre.length >= 4 ? 'verde' : 'rojo'} >{nombre}</strong></p>
        <p>Mi web es: {web}</p>

        <input type="text" onChange={e => cambiarNombre(e.target.value)} placeholder="Cambiar el nombre"/>

        <button onClick={e => {
          console.log("El valor guardado en tu estado es:", nombre);
        }}>Mostrar valor de estado</button>

        <button onClick={e => cambiarNombre("HARRISON CHUMPITAZ")}>
          Cambiar nombre
        </button>
        <ul>
          {
            cursos.map((curso, indice) => {
              return (<li key={indice}>
                {curso}
              </li>)
            })
          }
        </ul>
    </div>
  )
}
