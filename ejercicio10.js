//Usa map() para crear un nuevo array donde cada número se divide entre 2. Luego usa includes()
//para verificar si el número 5 está en el array resultante. Prueba con los dos arrays.

const a = [4, 10, 7, 12];
const b = [4, 9];

const resultadoA = a.map(numero => numero / 2);
const resultadoB = b.map(numero => numero / 2);

const contieneCincoA = resultadoA.includes(5);
const contieneCincoB = resultadoB.includes(5);

console.log("Arreglo a dividido entre 2:", resultadoA);
console.log("¿Contiene el número 5?:", contieneCincoA);

console.log("Arreglo b dividido entre 2:", resultadoB);
console.log("¿Contiene el número 5?:", contieneCincoB);