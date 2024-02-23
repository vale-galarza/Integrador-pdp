import { listaTareas } from "./agregarTareas.mjs";
import { leer } from "./utilidades.mjs";

function pedirNombreABuscar(){
    const titulo = leer("Ingresa el título de la tarea que desea buscar: ");
    return titulo;
}

export function buscarPorCoincidencia() {
    console.clear();

    var listaDeNombres = listaTareas.buscarTareaPorNombre(pedirNombreABuscar());

     if (listaDeNombres.length === 0) {
        console.log("No existe tarea que coincida con el nombre que ingresaste");
     } else {
         console.log("Tareas coincidientes:");
           listaDeNombres.forEach((valor, indice) => {
            console.log(`[${indice+1}]: ${valor}`);
         });
    }

}