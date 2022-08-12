// aquí me busca el elemento que quiero buscar dentro de un array, una vez lo encuentra listo, si no retorna un undefined

const numbers = [1,30,49,29,10,13];

let answer = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 30) {
        answer = element;
        break;
    }
}
console.log('for', answer);

const answer2 = numbers.find( (element) => {
    return element === 30;
});

console.log('answer2', answer2);

// ahora con array de objetos:
const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

const answer3 = products.find((element) => {
    return element.id === '🍔';
});
console.log('answer3', answer3); // en este caso nos retorna todo el objeto que tiene dicho id

// también puedo usar un findIndex para encontrar la posición de ese elemento, si lo encuentra retorna el indice de ese elemento, si no retorna un -1
const answer4 = products.findIndex((element) => {
    return element.id === '🍔';
});
console.log('answer4', answer4); 

