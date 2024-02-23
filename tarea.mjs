import { formatoFecha } from "./utilidades.mjs";

//Clase Tarea 
class Tarea {
    titulo;
    descripcion;
    estado;
    dificultad;
    fechaCreacion;
    fechaUltimaModificacion;

    //Constructor de la clase
    constructor(titulo, descripcion, estado, dificultad) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
        this.dificultad = dificultad;
        this.fechaCreacion = formatoFecha(new Date());
        this.fechaUltimaModificacion = formatoFecha(new Date());
    }

    //Funcion para imprimir todos los atributos de la tarea
    imprimirDetalles() {
        console.log("======= Detalles de la Tarea =======");
        console.log(`Título: ${this.titulo}`);
        console.log(`Descripción: ${this.descripcion}`);
        console.log(`Estado: ${this.estado}`);
        console.log(`Dificultad: ${this.dificultad}`);
        console.log(`Fecha de Creación: ${this.fechaCreacion}`);
        console.log(`Fecha de Última Modificación: ${this.fechaUltimaModificacion}`);
        console.log("====================================");
    }

}

export default Tarea;