// variables

var a; //declarando
var b = 'b'; // declaramos / asignamos
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaración

// Goblal Scope
var fruit = 'Apple'; // variable global



function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia'; // global si hago esto sin colocar un var, let o const
    console.log(country);
}

countries();
console.log(country);

