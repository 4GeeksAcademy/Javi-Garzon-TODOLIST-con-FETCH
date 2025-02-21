import React, { useState } from "react";
import Lista from "./lista.jsx";
import Formulario from "./formulario.jsx";
//import Acciones from "./Acciones.jsx";

//create your first component
function Home() {
	const [queHacer, setQueHacer] = useState([])

	const addTarea = (titulo) => {
		const nuevaTarea = {
			label: titulo,
			is_done: false,
			id: Date.now()
		}

		setQueHacer([...queHacer, nuevaTarea])
	}

	const borrarTarea = (id) => {
		setQueHacer(queHacer.filter((accion) => accion.id !== id))
	}


	return (
		<>
			<div>
				<Formulario anadirTarea={addTarea} />
			</div>
			<div>
				<Lista acciones={queHacer} deleteTask={borrarTarea} />
			</div>

		</>
	);
};

export default Home;
