// sumar elementos del array;

// por el método for
const totals = [1,2,3,4];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
    
};

console.log(sum);

// método reduce. reduce(arrowFunction(acumulador, elemento iterador), initial state)
const answer = totals.reduce((sum, element) => {
    return sum + element; 
}, 0); // el método reduce debe tener un estado inicial como el caso del for, por ello se coloca cero
console.log('answer', answer);