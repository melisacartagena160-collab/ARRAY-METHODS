//Calcula el promedio de los precios con reduce(). Si el promedio es mayor a 100, crea un nuevo array
//con los precios menores al promedio.

const precios = [120, 80, 200, 150, 90];    

const suma = precios.reduce((acc, precio) => acc + precio, 0);

const promedio = suma / precios.length;

console.log("Promedio de precios:", promedio);

if (promedio > 100) {
    const preciosMenoresAlPromedio = precios.filter(precio => precio < promedio);
    console.log("Precios menores al promedio:", preciosMenoresAlPromedio);
}
