
import Tarea from "./tarea.mjs";
import ListaTareas from "./listaTareas.mjs";

export var listitaTareas = new ListaTareas();
var tarea1 = new Tarea("Hola","CHao","b","c");
var tarea2 = new Tarea("d","s","j","k");
var tarea3 = new Tarea("z","w","a","p");

listitaTareas.agregarTarea(tarea1);
listitaTareas.agregarTarea(tarea2);
listitaTareas.agregarTarea(tarea3);


var a = listitaTareas.obtenerValorPropiedadDeTarea(2,"titulo");

listitaTareas.imprimirDetallesTarea(0);

listitaTareas.cambiarValorPropiedadDeTarea(0,"titulo","skdjs");
listitaTareas.imprimirDetallesTarea(0);