const words = ['spray', 'limit', 'elite', 'exuberant'];

// simulando filter con for
const newArray = [];
for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if(element.length >=6) {
        newArray.push(element);
    }
};

console.log('newArray', newArray);
console.log('original', words);

const answer = words.filter( (element) => { 
    return element.length >= 6 // retorna elementos que tengan 6 o más letras
});
console.log('answer', answer);
console.log('original', words);

// ejemplo más complejo
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
    {
        customerName: 'Nicolas',
        total: 2322,
        delivered: false,
    },
];

const answer2 = orders.filter((item) => {
    return item.delivered && item.total>=100;
});

console.log('answer2', answer2);

// función buscador con filter
const search = (query) => {
    return orders.filter((item) => {
        return item.customerName.includes(query);
    });
};

console.log(search('Nico')); // busca las coincidencias que cumplen si un customer contiene a Nico


