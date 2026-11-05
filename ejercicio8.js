//Usa reduce() para encontrar el número mayor. Luego usa every() para comprobar si todos los
//números son mayores a 0. Prueba con los dos arrays.

const a = [4, 9, 2, 7];
const b = [4, -1, 2];

const mayorA = a.reduce((mayor, numero) => {
    return numero > mayor ? numero : mayor;
}, a[0]);

const mayorB = b.reduce((mayor, numero) => {
    return numero > mayor ? numero : mayor;
}, b[0]);

const todosPositivosA = a.every(numero => numero > 0);
const todosPositivosB = b.every(numero => numero > 0);

console.log("Arreglo a: mayor", mayorA, "every:", todosPositivosA);
console.log("Arreglo b: mayor", mayorB, "every:", todosPositivosB);