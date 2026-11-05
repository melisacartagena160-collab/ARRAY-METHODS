//Crea una nueva lista con los tres primeros colores, sin modificar el array original. Luego crea otra lista
//que combine esa con los colores secundarios.


const colores = ["rojo", "verde", "azul", "amarillo", "morado"];
const primerosTres = colores.slice(0, 3);
const coloresSecundarios = ["naranja", "violeta", "cian"];

const listaFinal = primerosTres.concat(coloresSecundarios);

console.log("Primeros tres colores:", primerosTres);
console.log("Colores secundarios:", coloresSecundarios);
console.log("Lista final:", listaFinal);