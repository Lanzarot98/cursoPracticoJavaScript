function greeting() { 
    let userName = 'Ana'; // no esta asignada como global, solo dentro del bloque de la funcion
    console.log(userName);

    if (userName === 'Ana') {
        console.log(`Hello ${userName}`);
    }
}

greeting();
console.log(userName);