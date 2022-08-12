const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));


const productIndex = products.findIndex((item) => item.id === '🍔');

// método mutable para mis arrays, ya que elimino del array product la hamburger y agrego al array myProducts la hamburger
if (productIndex !== -1) { // ya que sino encuentra el findIndex retorna un -1
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));


// update ( actualizar un array con objetos)
const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'delicious',
    },
};

// este método muta el array original y lo modifica directamente
const productIndexV2 = productsV2.findIndex((item) => item.id === update.id);
productsV2[productIndexV2] = {...productsV2[productIndexV2], ...update.changes}; // estado anterior más el estado que quiero colocar
console.log('Método que muta el array original', productsV2);

// Reto1: método que no muta mi array original. en este caso eliminar un elemento sin borrarlo de la lista original
// const products2 = products.filter((element) => {
//     return element.id != '🍔';
// });

// console.log("método sin mutar que elimina elementos", products2);
// console.log("array original", products);
// console.log("-".repeat(10));

// Reto2: método que no muta mi array original. en este caso actualizar mi array original pero en un array nuevo
// const products3 = products.map((element) => {
//     if (element.id === update.id) {
//         return {...element, ...update.changes,}
//     }
//     return {...element};
// });
// console.log('array Original', productsV2);
// console.log('método sin mutar', products3);

