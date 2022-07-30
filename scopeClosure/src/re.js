var firstName; // undefined
firstName = 'Oscar';
console.log(firstName);

var lastName = "David"; // declarar y asignar
lastName = 'Ana'; // re asignacion
console.log(lastName);

var secondName = 'David'; // declarar y asignando
console.log(secondName);
var secondName = 'Ana'; // redeclaración
console.log(secondName);


// Let
let fruit = 'Apple'; // declarar y asignar
fruit = 'Kiwi'; // reasignar
console.log(fruit);

let fruit = 'Banana'; // con let no puedo redeclarar por eso me arroja error
console.log(fruit);

// const
const animal = 'dog'; // declarar y asignar
//animal = 'cat'; // reasignando. arroja error ya que const no deja reasignar pues lo toma como una constante
const animal = 'Snake'; // tampoco deja si re declaro y asigno
console.log(animal);

const vehicles = [];
vehicles.push('🚗');
console.log(vehicles);

vehicles.pop();
console.log(vehicles); // no hay errores ya que no estamos reasignando ni redeclarando solo usando metodos de los arrays para añadir elementos.

