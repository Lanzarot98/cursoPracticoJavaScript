
// qué arroja este código:
const array = ['a', 'bb', 'ccc']; 
const rta = array.map(item => item.length);

console.log(rta);

// el siguiente código cambia el estado original del array?
const array1 = [{age: 1}, {age:2}]; 
const rta1 = array1.map(item => {   
  item.name = 'My name';
  return item; 
})

// el siguiente código cambia ya no va a cambiar el estado original del array
// const array11 = [{age: 1}, {age:2}]; 
// const rta11 = array11.map(item => {   
//   //item.name = 'My name';
//   return {...item, name: 'My name'}; 
// })

console.log(rta1);
console.log(array1);


// cual retorna el emoji del sapo
const emojis = ['rana', 'zorro', 'rata'];
const answer = emojis.findIndex((element) => {
    return element === 'rana';
})
console.log(answer);

