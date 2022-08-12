const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true,
    },
];

// recordar que map crea un nuevo array del array que estoy llamando, dicho esto puedo crear un nuevo array con unicamente la propiedad total de los objetos que estan dentro del array
console.log('original', orders);
const answer = orders.map((item) => {
    return item.total
});
console.log('answer', answer);

// cómo haría para añadir una nueva propiedad a los objetos que estan dentro del array, sin que se cambie el original?
// const answer2 = orders.map((item) => {
//     item.tax = 0.19;
//     return item;
// });
// console.log('answer', answer2);
// console.log('original', orders); // me trae el array modificado más no el original

const answer3 = orders.map((item) => {
    return {
        ...item, 
        tax: 0.19,
    }; // retornar un nuevo objeto con las propiedades de item que asu vez son las de orders, y le sumamos el tax
});
console.log('answer', answer3);
console.log('original', orders);




