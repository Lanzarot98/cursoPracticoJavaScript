// query selector all selecciona todos los elementos que seleccionemos, no importa si tiene clase diferente pero siempre y cuando sea el mismo elemento

// si queremos llamar a un elemento con el document.getElementById sería solo el nombre del id o recordar que se puede llamar al elemento dependiendo si tiene una clase o id.
const h1 = document.querySelector('h1') //podemos seleccionar la etiqueta de html desde js con el queryselector
const form = document.querySelector('#form'); // por ello una vez creado el elemento a js escuchamos el evento del form
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//form.addEventListener('submit', sumarInputValues);  // la estructura es (nombre del elemento).addEventListener('nombre del evento', (codigo javascript que queremos llamar cuando suceda el evento sin los parentesis) )

// function sumarInputValues(event) {
//     console.log({event});
//     event.preventDefault(); // como el elemento es un form, y tenemos un boton me refresca la pagina, al colocar esto evito eso.
//     const sumaInputs= parseInt(input1.value) + parseInt(input2.value);
//     pResult.innerHTML = "Resultado: " + sumaInputs;
// }

// los folmularios (<form>) interpretan el ultimo boton como ese es de tipo submit es decir un boton para enviar el formulario y la accion por defecto es cambiar la url por eso aparece en nuestra página al final un "?" 


//otra forma de hacerlo:
btn.addEventListener('click', sumarInputValues);

function sumarInputValues() {
    const sumaInputs= parseInt(input1.value) + parseInt(input2.value);
    pResult.innerHTML = "Resultado: " + sumaInputs;
}

