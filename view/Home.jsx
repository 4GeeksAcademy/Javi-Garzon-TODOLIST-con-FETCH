import React, { useEffect, useState } from "react";
import Lista from "../src/js/components/Lista.jsx";
import Formulario from "../src/js/components/Formulario.jsx";
import presentacionTarea from "../src/js/components/Presentacion.jsx";

//import Acciones from "./Acciones.jsx";

//create your first component
const Home = () => {
	const [tarea, setQueHacer] = useState([])
	useEffect(() => { fetchTask() }, [])
	const fetchTask = async () => {
		try {
			// 👉 Hacemos la petición GET
			// fetch por defecto hace una petición GET, por eso no necesitamos especificar el método
			const response = await fetch(
				"https://playground.4geeks.com/todo/users/Javi"
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


	const addTarea = async (titulo) => {
		const nuevaTarea = {
			label: titulo,
			is_done: false,
		};
		try {
			// 👉 Hacemos la petición POST
			const response = await fetch('https://playground.4geeks.com/todo/todos/Javi', {
				method: 'POST', // 👈 Especificamos que es POST
				headers: {
					'Content-Type': 'application/json', // 👈 Indicamos que enviamos JSON
				},
				// 👉 Convertimos nuestro objeto a string JSON
				body: JSON.stringify(nuevaTarea),
			}
			);

			if (!response.ok) {
				throw new Error('Error al crear la tarea');
			}
			setQueHacer([...tarea, nuevaTarea])
		}
		catch (error) {
			console.log(error)
		}

	};



	const borrarTarea = async (id) => {
		
		try {
			// 👉 Hacemos la petición DELETE
			const response = await fetch(
				`https://playground.4geeks.com/todo/todos/${id}`,
				{
					method: 'DELETE', // 👈 Especificamos que es DELETE
				}
			);

			if (!response.ok) throw new Error('Error al borrar la tarea');
			setQueHacer(tarea.filter((tarea) => tarea.id !== id))

		} catch (error) {
			console.log(error)
		}
	};
	const actualizarTarea = async (id) => {

		const TasktoUpdate = tarea.find((tarea) => tarea.id === id);
		try {
			// 👉 Hacemos la petición PUT
			const data = await fetch(
				`https://playground.4geeks.com/todo/todos/${id}`,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						...TasktoUpdate, is_done: !TasktoUpdate.is_done,
					}),
				}
			);

			if (!data.ok) throw new Error("Error al actualizar la tarea");

			// Actualizamos la lista local de posts
			setQueHacer(
				tarea.map((tarea) => {

					if (tarea.id === id) {
						return ({ ...tarea, is_done: !tarea.is_done });
					} else {
						return tarea;
					}
				}));

		} catch (error) {
			console.log(error)
		}
	};
	return (
		<>
			<div className="container mt-4">
				<h1 className="mb-4">Gestor de Tareas</h1>
				<Formulario addTarea={addTarea} />
				<Lista
					tarea={tarea}
					borrarTarea={borrarTarea}
					actualizarTarea={actualizarTarea}
				/>
			</div>
		</>
	);

};
export default Home;
