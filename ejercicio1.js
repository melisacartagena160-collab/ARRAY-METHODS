//Con map() multiplica cada número por 3. Luego, sobre el nuevo array, usa filter() para quedarte con
//los mayores a 10.


const numeros = [2, 5, 3, 8, 1];
const multiplicados = numeros.map(numero => numero * 3);
const mayores = multiplicados.filter(numero => numero > 10);

console.log("Arreglo multiplicados por 3:", multiplicados);
console.log ("Numeros mayores a 10:" , mayores);
console.log("Arreglo original:", numeros);
