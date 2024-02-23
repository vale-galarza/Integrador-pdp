import { leer } from "./utilidades.mjs";
import ListaTareas from "./listaTareas.mjs";
import Tarea from "./tarea.mjs";

export var listaTareas = new ListaTareas();

//Funcion para ingresar el titulo de una tarea por teclado (funcional pura)
function pedirTitulo(){
    const titulo = leer("1.Ingresa el título de la tarea:");
    return titulo;
}

//Funcion para ingresar la descripcion de una tarea por teclado (funcional pura)
function pedirDescripcion(){
    const descripcion = leer("2.Ingresa la descripción de la tarea:");
    return descripcion ? descripcion : "Sin descripcion";
}

//Funcion para ingresar la dificultad de una tarea por teclado (funcional pura)
function pedirDificultad() {
    const opciones = {
        1: "Facil",
        2: "Media",
        3: "Dificil"
    };

    const dificultad = leer("4.Ingrese la dificultad ([1] Fácil, [2] Media, [3] Difícil):");
    return opciones[Number(dificultad)] || "Facil";
}

//Funcion para ingresar el estado de una tarea por teclado (funcional pura)
function pedirEstado() {
    const opciones = {
        1: "En curso",
        2: "Completado",
        3: "Pendiente",
        4: "Cancelada"
    };

    const estado = leer("3.Ingresa el estado de la tarea ([1] En curso, [2] Completado, [3] Pendiente, [4] Cancelada):");
    return opciones[Number(estado)] || "Pendiente";
}

//Funcion para transformar la dificultad de una tarea en estrellas (funcional pura)
export function transformarDificultad(pedirDif) {
    const estrellas = {
        "Facil": "★☆☆",
        "Media": "★★☆",
        "Dificil": "★★★",
        "★☆☆": "★☆☆",
        "★★☆": "★★☆",
        "★★★": "★★★"
    };
    const dificultad = pedirDif;
      
    return estrellas[dificultad];
}

//Funcion para agregar una tarea a la clase "listaTareas" (funcion impura)
export function agregarTarea(){
    console.clear();
    var nuevaTarea = new Tarea( pedirTitulo(), pedirDescripcion(), pedirEstado(), transformarDificultad(( pedirDificultad() )));
    listaTareas.agregarTarea(nuevaTarea);
    console.log("--¡Tarea agregada con exito!--")
}
