//Usa reverse() para invertir el orden de las palabras. Luego usa find() para encontrar la primera
//palabra con más de 3 caracteres.

const palabras = ["sol", "luna", "mar", "estrella"];
palabras.reverse();

const encontrada = palabras.find(palabra => palabra.length > 3);

console.log("Arreglo invertido:", palabras);
console.log("Primera palabra con más de 3 caracteres:", encontrada);
