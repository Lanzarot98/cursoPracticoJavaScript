const items = [1,3,2,3];

const answer = items.reduce((obj, element) => {
    if (!obj[element]) { // aquí pregunto si el elemento existe en el objeto, si no existe entonces se inicializa en uno el elemento, si ya existe va al else y va sumando
        obj[element] = 1;
    } else {
        obj[element] = obj[element] +1;
    }
    return obj;
}, {});

console.log(answer);

const data = [
    {
        name: 'Nicolas',
        level: 'low',
    },
    {
        name: 'Andrea',
        level: 'medium',
    },
    {
        name: 'Zulema',
        level: 'hight',
    },
    {
        name: 'Santiago',
        level: 'low',
    },
    {
        name: 'Valentina',
        level: 'medium',
    },
    {
        name: 'Lucia',
        level: 'hight',
    },
];

// quisiera saber cuantos hay en nivel bajo y nivel medio, solo que aquí tenemos varios elementos de un array pero elementos de tipo objeto
const answer1 = data
    .map( (element) => element.level) // me interesa son los niveles, mas no el objeto por ello realizamos map
    .reduce((obj, element) => {
        if (!obj[element]) { // aquí pregunto si el elemento existe en el objeto, si no existe entonces se inicializa en uno el elemento, si ya existe va al else y va sumando
            obj[element] = 1;
        } else {
            obj[element] = obj[element] +1;
        }
        return obj;
    }, {}
    );
    
console.log(answer1);

// ahora usar reduce pero por rangos, es decir, cuando elementos hay de 1 a 5, cuantos de 6 a 8, etc.
const items2 = [1,3,2,3,5,6,7,8,9,10,6,7,5,9,6];

const answer2 = items2.reduce((obj, element) => {
    if (element<=5) { 
        obj['1-5'] += 1;
    } else if (element<=8){
        obj['6-8'] += 1;
    } else if (element<=10) {
        obj['9-10'] += 1;
    }
    return obj;
}, {
    '1-5':0,
    '6-8':0,
    '9-10':0,
}); // debo inicializar los atributos del objeto en cero, puesto que debo tener un punto de partida

console.log(answer2);




