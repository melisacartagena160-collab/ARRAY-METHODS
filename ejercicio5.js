//Usa shift() para eliminar el primer número, unshift() para agregar un 5 al principio y push() para
//agregar un 50 al final. Imprime lo que devuelve cada método.

const numeros = [10, 20, 30, 40];

const eliminado = numeros.shift();
console.log("shift devuelve:", eliminado);

const longitudInicio = numeros.unshift(5);
console.log("unshift devuelve:", longitudInicio);

const longitudFinal = numeros.push(50);
console.log("push devuelve:", longitudFinal);

console.log("Arreglo final:", numeros);
