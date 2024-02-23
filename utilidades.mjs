import promptSync from 'prompt-sync';

export const leer = promptSync();

export function formatoFecha(fechaCualquiera) {
    let año = fechaCualquiera.getFullYear();
    let mes = fechaCualquiera.getMonth() + 1; // Sumar 1 al mes para obtener un valor legible (enero es 1)
    let dia = fechaCualquiera.getDate();

    let fechaFinal = dia + "/" + mes + "/" + año;
    return fechaFinal;
}
