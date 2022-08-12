// concatena arrays
const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

const newArray = [...elements]; // split operation que es clonar los elementos de un array sin la referencia en memoria
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}

console.log('for', newArray);

// con el método concat
const answer = elements.concat(othersElements);
const answer2 = [...elements, ...othersElements]; // forma válida de hacer una concatenación con split operation.
const answer3 = [...elements, 'random']; // si hacemos un ...'random', me divide el string random en un array por letra de la palabra
console.log('concat', answer);
console.log('...', answer2);
console.log('answer3', answer3);

// si quiero mutar mi array a propósito:

elements.push(...othersElements); // con split operation pues esto lo que hace es darme los elementos pero no encerrados en un array.
console.log('elements', elements);

// método slice()
console.log(elements.slice(1,2));
console.log(elements)

