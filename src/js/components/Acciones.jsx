import React from "react";

function Acciones(props) {
    return (
        <>
            <div className="d-flex justify-content-between">
                <h5>{props.tarea}</h5>
                <button className="btn btn-danger" onClick={() => { props.borrarTarea(props.id) }}>X</button>
            </div>
        </>
    );
}

export default Acciones;

