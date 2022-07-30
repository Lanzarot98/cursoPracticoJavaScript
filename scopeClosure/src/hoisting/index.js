
// console.log(nameOfDog);

// // la asignacion se hace despues del llamado y al inicio hace un var nameOfDog; // undefined
// var nameOfDog = 'Elmo';

// console.log(nameOfDog);

nameOfDog();
function nameOfDog() {
    console.log(`El mejor perrito es ${elmo}`);
}
// sin embargo si abajo no declaro elmo, me daria error en el codigo
var elmo = 'Elmito'; // se eleva (hoisting) y se coloca arriba como var elmo; // undefined

// practicamente el lenguaje lo que hace es declarar primero las funciones y variables, y luego las asigna por eso se elevan y luego se asignan.


nameOfDog("Elmo");
function nameOfDog(name) {
    console.log(`El mejor perrito es ${name}`);
}