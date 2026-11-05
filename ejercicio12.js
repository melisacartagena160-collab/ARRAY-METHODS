//Ordena las edades de mayor a menor. Después elimina la edad más joven y agrega una nueva edad
//(19) al final.

const edades = [15, 32, 8, 21, 40];

edades.sort((a, b) => b - a);

console.log("Edades ordenadas:", edades);

const edadEliminada = edades.pop();

console.log("Edad más joven eliminada:", edadEliminada);
console.log("Sin la edad más joven:", edades);

edades.push(19);

console.log("Con la nueva edad:", edades);