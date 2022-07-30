// modo estricto para tener mejor control de las variables para que nuestro codigo cumpla con los estandares

pi = 3.1416;  // interpreto algo como var pi = 3,1417
console.log(pi);



'use strict'; // modo estricto
pi = 3.1416;  // aqui arroja error porque me obliga a declararlo con var let o const
console.log(pi);

function myFunction() {
    'use strict'; // también se puede dentro de una funcion
    return pi = 3.1416; // 
}

console.log(myFunction()); // arrojaría también error pues no esta definido pi en la funcion



