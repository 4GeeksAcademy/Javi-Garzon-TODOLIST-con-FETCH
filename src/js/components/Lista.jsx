import React from "react";
import PresentacionTarea from "./Presentacion";
function Lista(props) {

  if (props.tarea.length === 0) {
    return <p className="text-center mt-4"> No hay tareas a realizar</p>;
  }
  return (

    <div className="mt-4">
      <h2>Esto es la lista de tareas({props.tarea.length})</h2>
      {props.tarea.map(tarea => {
        return (
          <PresentacionTarea
            key={tarea.id}
            tarea={tarea}
            paraBorrar={props.borrarTarea}
            actualizacionCompletada={props.actualizarTarea}
          />
        )
      })}

    </div>
  );

}
export default Lista;
