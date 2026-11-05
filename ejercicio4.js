//Usa concat() para combinar los dos arrays en uno solo. Luego usa reduce() para obtener la suma
//total del array combinado.

const a = [3, 7, 2];
const b = [10, 5];

const combinados = a.concat(b);

const suma = combinados.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);

console.log("Arreglos combinados:", combinados);
console.log("Suma total:", suma);
console.log("Arreglo a:", a);
console.log("Arreglo b:", b);