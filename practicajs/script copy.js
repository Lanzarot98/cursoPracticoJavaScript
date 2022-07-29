// query selector all selecciona todos los elementos que seleccionemos, no importa si tiene clase diferente pero siempre y cuando sea el mismo elemento

// si queremos llamar a un elemento con el document.getElementById sería solo el nombre del id o recordar que se puede llamar al elemento dependiendo si tiene una clase o id.
const h1 = document.querySelector('h1') //podemos seleccionar la etiqueta de html desde js con el queryselector
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito') // si queremos llamar una clase sería primero el . y luego el nombre de la clase
const pid = document.querySelector('#pid'); // si queremos llamar un id es con #(nombre).
const input = document.querySelector('input');

console.log(input.value); // con el input.value puedo acceder al valor de donde escribiría

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

h1.innerHTML = 'Patito <br> Feo'; // nos permite modificar el html dentro de la etiqueta

h1.innerText = 'Patito <br> Feo'; // convierte todo a texto y lo muestra.

// console.log(h1.getAttribute('pantalla'));  // accedo al atributo pantalla que coloque en el html
// h1.setAttribute('class', 'rojo'); // puedo insertar classes o algun atributo al html de dicho elemento

h1.classList.add('rojo'); // añadirle a la clase un nuevo atributo, mas no quitar el que tiene por defecto
h1.classList.remove('verde'); //remover un atributo de la clase del elemento

// h1.classList.toggle(); // para que no solo agregar o quitar, si no que dependiendo si la tiene la clase o no colocarla o quitarla
// h1.classList.contains() // son arroja un verdadero o falso si lo contiene

input.value = "456" // puedo cambiar el por defecto de la etiqueta input el valor

const image = document.createElement('img');
image.setAttribute('src', 'https://static.starcraft2.com/dist/images/global/fb-share.jpg');

console.log(image);
pid.innerHTML = ''; // aqui lo que hago es colocar todo lo que esta dentro de pid en blanco
pid.append(image); //enviar como argumento mi imagen dentro del pid


