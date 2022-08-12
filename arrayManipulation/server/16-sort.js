const valueMonths = (month) => {
    const monthUpperCase = month.toUpperCase();
    const months = {
        ENERO: 1,
        FEBRERO: 2,
        MARZO: 3,
        ABRIL: 4,
        MAYO: 5,
        JUNIO: 6,
        JULIO: 7,
        AGOSTO: 8,
        SEPTIEMBRE: 9,
        OCTUBRE: 10,
        NOVIEMBRE: 11,
        DICIEMBRE: 12,
    }
    return months[monthUpperCase] || undefined;
}
const months = ["Marzo", "enero", "febrero", "Diciembre"];
months.sort((a,b) => {
    return valueMonths(a)-valueMonths(b);
});
console.log(months); // ordena es por abecedario

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => { // ascendente a-b, descendente b-a
    return a-b;
});
console.log(numbers); // ordena es de acuerdo al código ACii

const words = [
    "reservé",
    "premier",
    "comuniqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
words.sort((a,b) => {
    return a.localeCompare(b) // para asegurarse de que corra bien, o si se presenta un caso en que no corra bien, habría que hacer un localCompare
});
console.log(words);


const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

// en objetos debemos colocar el atributo por el cual queremos ordenar
// colocamos primero b y luego a en la comparación para que ordene de manera descendente
orders.sort((a,b) => {
    return b.total - a.total
});
console.log(orders);

