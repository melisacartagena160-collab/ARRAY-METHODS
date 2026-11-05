//Usa findIndex() para encontrar el índice del primer producto cuyo precio sea mayor a 100. Prueba
//también con una condición que ningún producto cumpla.

const productos = [
    { nombre: "Lápiz", precio: 50 },
    { nombre: "Cuaderno", precio: 120 },
    { nombre: "Libro", precio: 200 }
];

const indiceEncontrado = productos.findIndex(producto => producto.precio > 100);

const indiceNoEncontrado = productos.findIndex(producto => producto.precio > 500);

console.log("Índice del primer precio mayor a 100:", indiceEncontrado);
console.log("Índice si ninguno cumple:", indiceNoEncontrado);