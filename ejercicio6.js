//Usa indexOf() para encontrar el índice de un nombre. Si existe (índice distinto de -1), reemplázalo por
//otro nombre en esa posición. Hazlo primero con fill(valor, indice, indice + 1) y luego con
//splice(). Prueba con un nombre que no exista.

const nombres = ["Ana", "Luis", "Sara", "Pedro"];


const nombresFill = [...nombres];
const indiceSara = nombresFill.indexOf("Sara");

if (indiceSara !== -1) {
    nombresFill.fill("Camila", indiceSara, indiceSara + 1);
}

console.log("Reemplazo con fill():", nombresFill);


const nombresSplice = [...nombres];
const indiceSaraSplice = nombresSplice.indexOf("Sara");

if (indiceSaraSplice !== -1) {
    nombresSplice.splice(indiceSaraSplice, 1, "Camila");
}

console.log("Reemplazo con splice():", nombresSplice);


const nombresPrueba = [...nombres];
const indiceJuan = nombresPrueba.indexOf("Juan");

if (indiceJuan !== -1) {
    nombresPrueba.splice(indiceJuan, 1, "Camila");
}

console.log("Al buscar Juan:", nombresPrueba);