// Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo)


const obj = {
    name: 'Fulanito',
    age: 3,
    favoriteFood: ['chicken', 'vegetables'],
};

console.log(Object.values(obj)); // nos devuelve todos los componentes del objeto como si fuera un array

const printItemByItemObject = (object) => 
{
    for (let i=0; i<Object.values(object).length; i++) 
    {
        console.log(Object.values(object)[i]);
    }
}

printItemByItemObject(obj);


