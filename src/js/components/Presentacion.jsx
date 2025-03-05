import React from "react";

function PresentacionTarea(props) {


    return (
        <div className=" card mt-2">
            <div className="card body d-flex justify-content-between align-item-center">

                <div>
                    <h5 className={`${props.tarea.is_done ? "text-decoration-line-through" : ""}`}>
                        {props.tarea.label}
                    </h5>
                    <p className="text-mute mb-0">ID: {props.tarea.id}</p>
                </div>
                <div>
                    <button className={`btn ${props.tarea.is_done? "btn-secondary" : "btn-success"} me-2`}
                        onClick={() => props.actualizacionCompletada(props.tarea.id)}>
                        {props.tarea.is_done ? "Reactivar" : "Completar"}
                    </button>
                    <button className="btn btn-danger"
                        onClick={() => props.paraBorrar(props.tarea.id)}>
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );

}
export default PresentacionTarea;