
// sintetizar una matriz o array de arrays en un solo array. ¿cómo lo haríamos?
const matriz = [
    [1,2,3], // iteración 0
    [4,5,6, [1,2,[1,2]]],
    [7,8,9],
];

// entre más niveles de arrays (más arrays dentro de arrays) más debemos anidar for
let newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}

// solución de un for que sea como un flat y me aplane cada array sin importar cuantos niveles de array tenga
// aplicando recursividad:
function profundidad(list) {
    let newList = [];
    if (typeof list != 'object') {
        return [list]; // al tener un string en list lo convertimos a array
    };
    list.forEach((element) => {
        newList = newList.concat(profundidad(element));
    });
    return newList;
}


// si llamamos a flat sin argumentos toma por defecto 1, es decir solo aplana hasta un array
// en tal caso que hayan más arrays dentro de arrays, necesitaría especificar el nivel dentro de flat
const answer = matriz.flat(3);
console.log('for', newArray);
console.log('flat', answer);

console.log('forFlat', profundidad(matriz));



















