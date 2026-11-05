//Usa filter() para quedarte con las frutas que contienen la letra "a" (los strings también tienen
//includes()). Luego usa join() para unirlas en un solo string, separadas por coma y espacio.

const frutas = ["manzana", "kiwi", "pera", "uva"];

const frutasConA = frutas.filter(fruta => fruta.includes("a"));

const textoFrutas = frutasConA.join(", ");

console.log("Frutas que contienen la letra a:", frutasConA);
console.log("Frutas unidas:", textoFrutas);