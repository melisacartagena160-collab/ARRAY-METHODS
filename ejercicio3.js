//Primero usa some() para verificar si hay al menos una persona menor de 18 años. Luego usa sort()
//para ordenar de menor a mayor edad y find() para obtener la persona mayor de edad (18 o más) más
//joven.

const personas = [
    { nombre: "Ana", edad: 17 },
    { nombre: "Carlos", edad: 22 },
    { nombre: "Camila", edad: 15 },
    { nombre: "Juan", edad: 30 }
];  

const hayMenores = personas.some(function(persona) {
    return persona.edad < 18;
});

personas.sort(function(a, b) {
    return a.edad - b.edad;
});

const personaMayor = personas.find(function(persona) {
    return persona.edad >= 18;
});

console.log("¿Hay personas menores de edad?", hayMenores);
console.log("personas ordenadas:", personas);
console.log("Persona mayor de edad más joven:", personaMayor);