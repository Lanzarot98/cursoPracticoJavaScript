

const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true; 
        break;
    }
};
console.log('for', includeInArray);

// includes ayuda mucho mejor para strings o arrays, mas no para objetos
const answer = pets.includes('dog'); // includes no necesita un arrowFunction como un filter
console.log('answer', answer);


const frutas = ["manzana", "pera", "piña", "uva"]
// entonces siempre el método busca de izquierda a derecha ( en dirección hacia la derecha mejor dicho)
console.log(frutas.includes("uva", -2)); // true porque empieza desde -2 y va hasta -1 que es donde esta uva
console.log(frutas.includes("uva", 1));