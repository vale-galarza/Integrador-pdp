import { listaTareas } from "./agregarTareas.mjs";
import { editarTarea } from "./editarTarea.mjs";
import { leer } from "./utilidades.mjs";

// Esta función muestra las diferentes opciones disponibles para filtrar la lista de tareas por estado.
export function mostrarOp(){
    console.clear();
    console.log(`Lista de tareas: 
    [1] Todas
    [2] Pendiente
    [3] En curso
    [4] Terminada
    [5] Cancelada
    `);
}

// Esta función permite ver los detalles de una tarea específica seleccionada por el usuario.
export function verTarea(){
    
    var detallesTarea = listaTareas.imprimirTitulosTareas(pedirEstadoParaFiltrar());

    if (detallesTarea === undefined || detallesTarea.length === 0) {

        console.log("No hay tareas creadas");
        console.log("Presione una tecla para continuar");
    } 
    else {
        var indiceT = mostrarDetalles();
        editarTarea(indiceT);
    }
    //var indiceT = mostrarDetalles();
    //editarTarea(indiceT);
    
    var pause = leer("");
}

// Esta función solicita al usuario que ingrese el estado de la tarea que desea filtrar. 
function pedirEstadoParaFiltrar() {
    const opciones = {
        1: "Todas",
        2: "Pendiente",
        3: "En curso",
        4: "Terminada",
        5: "Cancelada"
    };

    const estado = leer("Ingrese el estado de la tarea: ");
    console.clear();
    return opciones[Number(estado)] ;
}

// Esta función permite al usuario seleccionar una tarea para ver más detalles.
function mostrarDetalles(){
    console.log(``);
    console.log(`---¿Deseas ver el detalle de alguna tarea?---`);
    var op = leer(`Introduce el numero de la tarea para verla o "0" para salir: `);
    console.clear();
    listaTareas.imprimirDetallesTarea(op-1);
    return (op-1);
}


