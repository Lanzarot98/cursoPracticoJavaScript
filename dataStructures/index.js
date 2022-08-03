
// const list = ['Juan', 'Luis']; // array estático

// list.push("Diego");

// console.log(list);
// console.log(list[1]);

// array dynamic reserve more space than you need

// el propósito de esto es saber la lógica detrás de los métodos que solemos usar
class MyArray { // crear un array con los métodos comunes
    constructor() { //contruyo el array
        this.length = 0; // start in index 0
        this.data = {}; // this is an object {}
    }
    get(index) { //me va a regresar el index del componente del objeto que yo le dé
        return this.data[index];
    }
    push(item) { // es item because es el element que yo le quiero agregar al array (agrega al final del array)
        this.data[this.length] = item; // asi es como se agrega un idex al array al ultimo posición
        this.length++; // if i add more items, the length will add up
        return this.data;
    }
    pop(){ // this method delete the last item of my array
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem; // to know what element i delete
    }
    // eliminar cualquier elemento del array (delete and shift works together)
    delete(index) { //this is not a keyword reserved in JavaScript, cause' have a parameter
        const item = this.data[index];
        this.shiftIndex(index); // with this we assure the other elements can reorganize in the index that can stay
        return item;
        
    }
    shiftIndex(index) { // acompaña al delete, pues recorre los elementos
        for (let i = index; i< this.length-1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
    //agregar un elemento al inicio del array
    unshift(item) {
        for (let i = this.length; i>0; i--) {
            this.data[i] = this.data[i-1];
        }
        this.data[0] = item;
        this.length++;
        return this.data;
    }

    // eliminar el primer elemento del array
    shift() {
        for (let i = 1; i<this.length; i++) {
            this.data[i-1] = this.data[i];
        }
        delete this.data[this.length-1];
        this.length--;
        return this.data;
    }


}

const myArray = new MyArray();

myArray.push("José");
myArray.push("Daniel");
console.log(myArray.push("Zoey"));


// console.log(myArray.get(1));
// console.log(myArray.pop()); // this show the data I delete

// myArray.push("Luis")

// console.log(myArray.delete(1)); // Daniel will be delete

console.log(myArray.unshift("Alfredo"));
console.log(myArray.shift());

console.log(myArray);