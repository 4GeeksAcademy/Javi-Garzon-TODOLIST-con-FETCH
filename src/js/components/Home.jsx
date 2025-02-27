import React, { useEffect, useState } from "react";
import Lista from "./lista.jsx";
import Formulario from "./formulario.jsx";
//import Acciones from "./Acciones.jsx";

//create your first component
function Home() {
	const [queHacer, setQueHacer] = useState([])
	useEffect(() => { fetchTask() }, [])
	const fetchTask = async () => {
		try {
			// 👉 Hacemos la petición GET
			// fetch por defecto hace una petición GET, por eso no necesitamos especificar el método
			const response = await fetch(
				"https://playground.4geeks.com/todo/users/JaviGarzon"
			);

			// 👉 Verificamos si la petición fue exitosa
			if (!response.ok) {
				throw new Error("¡Vaya! No hemos podido obtener las tareas");
			}

			// 👉 Convertimos la respuesta a JSON
			const data = await response.json();

			// 👉 Guardamos los datos en el estado
			setQueHacer(data.todos)
		} catch (error) {
			console.log(error)
		}
	};


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
