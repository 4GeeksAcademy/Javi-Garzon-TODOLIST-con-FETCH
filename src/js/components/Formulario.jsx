import React, { useState } from "react";

function Formulario(props) {

  const [titulo, setTitulo] = useState("")

  function crearTarea(e) {
    e.preventDefault()

    props.addTarea(titulo)

    setTitulo("")
  }

  return (
    <>
      <form onSubmit={crearTarea}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label"></label>
          <input type="text" className="form-control" id="titulo" value={titulo} onChange={(e) => { setTitulo(e.target.value) }} />
          <div id="emailHelp" className="form-text"></div>
        </div>
      </form>
    </>
  )
}

export default Formulario;