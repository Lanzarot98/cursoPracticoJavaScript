class node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    // seleccionar un elemento que esta arriba (al final)
    peek() {
        return this.top;
    }

    // agregar elemento al final
    push(value) {
        const newNode = new node(value);
        if(this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this; // nos regrese el stack completo
    }
    // eliminar el ultimo elemento
    pop() {
        if (this.length === 0) {
            console.log('There is no elements');
        } else if (this.length === 1){
            this.top = null;
            this.bottom = null;
        } else {
            this.top = this.top.next;
        }
        this.length--;
        return this;
    }
}


const myStack = new stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.pop());

console.log(myStack);


