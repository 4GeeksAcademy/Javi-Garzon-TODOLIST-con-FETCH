import React from "react";
import Acciones from "./Acciones.jsx";

function Lista(props) {
    return (
        <>
            {props.acciones.map((accion) => {
                return (
                    <div key={accion.id}>
                        <Acciones hecho={accion.label} id={accion.id} deleteTask={props.deleteTask}/>
                    </div>
                );
            })}
        </>
    );
};

export default Lista;
