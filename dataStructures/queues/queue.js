class node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    // seleccionar un elemento que esta arriba (al final)
    peek() {
        return this.first;
    }

    // agregar elemento al final
    enqueue(value) {
        const newNode = new node(value);
        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this; // nos regrese el queue completo
    }
    // eliminar el primer elemento
    dequeue() {
        if (this.length === 0) {
            console.log('There is no elements');
        } else if (this.length === 1){
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.length--;
        return this;
    }
}

const myQueue = new queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

//console.log(myQueue.peek());

myQueue.dequeue();

console.log(myQueue);