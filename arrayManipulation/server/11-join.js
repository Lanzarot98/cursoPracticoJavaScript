
const elements = ['Fire','Air','Water'];

let answer = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if (index < elements.length-1) {
        answer = answer + element + separator;
    } else {
        answer = answer + element;
    }
}

console.log('for', answer);

const answer1 = elements.join(' '); // join tiene como parametro el separador
lines=answer1.split(' ').length;
console.log('join', answer1, lines);


const title = 'Curso de manipulación de arrays';
const titleFinal = title.split(' ').join('-').toLowerCase();


console.log(title.split(' ')); // el parametro es el criterio por la cual determinaré la separación en forma de array
console.log(titleFinal);
















