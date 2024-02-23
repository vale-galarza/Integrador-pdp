//Clase de tipo "tarea" que guarda las tareas

class ListaTareas {
    constructor() {
        this.tareas = [];
    }

    //Funcion para agregar una tarea al array
    agregarTarea(tarea) {
        this.tareas.push(tarea);
    }

    //Funcion que imprime los titulos de las tareas de forma filtrada
    imprimirTitulosTareas(estadoFiltrado = "Todas") {
        console.log(`===== Títulos de las Tareas (${estadoFiltrado.charAt(0).toUpperCase() + estadoFiltrado.slice(1)}) =====`);

        this.tareas.forEach((tarea, indice) => {
            if (estadoFiltrado === "Todas" || tarea.estado.toLowerCase() === estadoFiltrado.toLowerCase()) {
                console.log(`[${indice + 1}] ${tarea.titulo}`);
            }
        });

        console.log("===================================");
    }

    //Funcion que imprime una tarea si es que esta existe en el array 
    imprimirDetallesTarea(indice) {
        // Verificar si el índice es válido
        if (indice >= 0 && indice < this.tareas.length) {
            this.tareas[indice].imprimirDetalles();
        } 
        else if(indice == -1) {
            console.log("Volviendo al menu...")
        }
        else{
            console.log(`No hay una tarea en el índice ${indice+1}.`);
        }
    }

    buscarTareaPorNombre(nombre) {
        const titulosCoincidentes = [];

        this.tareas.forEach(tarea => {
            if (tarea.titulo.toLowerCase().includes(nombre.toLowerCase())) {
                titulosCoincidentes.push(tarea.titulo);
            }
        });

        return titulosCoincidentes;
    }

    obtenerValorPropiedadDeTarea(indiceTarea, nombrePropiedad) {
        const tarea = this.tareas[indiceTarea];
        return tarea ? tarea[nombrePropiedad] : undefined;
    }

    cambiarValorPropiedadDeTarea(indiceTarea, nombrePropiedad, nuevoValor) {
        this.tareas[indiceTarea][nombrePropiedad] = nuevoValor;
    }
    
}

export default ListaTareas;
