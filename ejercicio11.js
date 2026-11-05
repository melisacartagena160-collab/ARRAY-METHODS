//Crea un nuevo array con todos los nombres en mayúsculas. Luego encuentra el primer nombre con
//más de 6 caracteres.

const nombres = ["ana", "luis", "valentina", "sara", "sebastian"];

const nombresMayusculas = nombres.map(nombre => nombre.toUpperCase());

const nombreEncontrado = nombresMayusculas.find(nombre => nombre.length > 6);

console.log("Nombres en mayúsculas:", nombresMayusculas);
console.log("Primer nombre con más de 6 caracteres:", nombreEncontrado);
