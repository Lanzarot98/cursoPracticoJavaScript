const letters = ['a','b','c'];

// simulando el método map con for
const newArray = [];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + '++'); // coloqué el ++ para identificar que es otro array
};

console.log('new', newArray);

// método map
const newArray1 = letters.map( item => {
    return item + '++';
})

console.log('new', newArray1);
console.log('original', letters);
