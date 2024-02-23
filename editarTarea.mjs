import { leer } from "./utilidades.mjs";
import { listaTareas } from "./agregarTareas.mjs";
import { formatoFecha } from "./utilidades.mjs";
import { transformarDificultad } from "./agregarTareas.mjs";

export function editarTarea(indice){
    var desicion= leer("¿Desea editar la tarea?- - -Presione '1' para editar o '0' para salir ");
    if(desicion == 1){
        modificarTarea(indice);
    }
}

function modificarTarea(indice){
    console.log("Si desesa mantener los valores de un atributo, dejalo en blanco.");

    listaTareas.cambiarValorPropiedadDeTarea(indice, "titulo", pedirTitulo(indice)) ;
    listaTareas.cambiarValorPropiedadDeTarea(indice, "descripcion", pedirDescripcion(indice)) ;
    listaTareas.cambiarValorPropiedadDeTarea(indice, "dificultad", transformarDificultad(pedirDificultad(indice)));
    listaTareas.cambiarValorPropiedadDeTarea(indice, "estado", pedirEstado(indice));
    listaTareas.cambiarValorPropiedadDeTarea(indice, "fechaUltimaModificacion", formatoFecha(new Date()));
    console.log("---Cambios realizados---");
}

function pedirTitulo(indice){
    const titulo = leer("1.Ingresa el título de la tarea:");
    return titulo ? titulo : listaTareas.obtenerValorPropiedadDeTarea(indice,"titulo");
}

function pedirDescripcion(indice){
    const descripcion = leer("2.Ingresa la descripción de la tarea:");
    return descripcion ? descripcion : listaTareas.obtenerValorPropiedadDeTarea(indice,"descripcion");
}

function pedirDificultad(indice) {
    const opciones = {
        1 : "Facil",
        2 : "Media",
        3 : "Dificil",
    };

    const dificultad = leer("3.Ingrese la dificultad ([1] Fácil, [2] Media, [3] Difícil):");
    return opciones[Number(dificultad)] || listaTareas.obtenerValorPropiedadDeTarea(indice,"dificultad");
}

function pedirEstado(indice) {
    const opciones = {
        1: "En curso",
        2: "Completado",
        3: "Pendiente",
        4: "Cancelada"
    };

    const estado = leer("4.Ingresa el estado de la tarea ([1] En curso, [2] Completado, [3] Pendiente, [4] Cancelada):");
    return opciones[Number(estado)] || listaTareas.obtenerValorPropiedadDeTarea(indice,"estado");
}