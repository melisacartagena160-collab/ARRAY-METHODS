//Verifica si todos los números son positivos. Luego crea un nuevo array solo con los números pares.
//Prueba con los dos arrays.

const a = [4, 7, 10, 3, 8];
const b = [4, -2, 10];

const todosPositivosA = a.every(numero => numero > 0);
const todosPositivosB = b.every(numero => numero > 0);

const paresA = a.filter(numero => numero % 2 === 0);
const paresB = b.filter(numero => numero % 2 === 0);

console.log("Arreglo a: todos positivos:", todosPositivosA);
console.log("Números pares de a:", paresA);

console.log("Arreglo b: todos positivos:", todosPositivosB);
console.log("Números pares de b:", paresB);