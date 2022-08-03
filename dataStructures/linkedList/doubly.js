
class node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    } 
}

class MyDoublyLinkedList {
    constructor(value) {
        this.head = { // cabeza
            value: value,
            next: null,
            prev: null,
        };
        this.tail = this.head; 
        
        this.length = 1; 
    }

    // cada uno de estos métodos van a tener un nodo, entonces se va a crear otra clase (class node)
    // método para añadir nodo en la cola
    append(value) {
        const newNode = new node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode; //decirle a la cola que sea igual al nuevo nodo y lo agrega (pero todavía no se convierte en la cola), entonces agrega un nuevo nodo que ya tiene un .next y ya existe un nuevo null 
        this.tail = newNode; // aun tail sigue apuntanto a la cabeza de la estructura, entonces ahora si es hora de posicionar el nuevo nodo en la cola
        this.length++;

        return this; // para regresar el objeto
    }
    // método para añadir nodo en la cabeza
    prepend(value) {
        const newNode = new node(value);
        this.head.prev = newNode; // el previo de la cabeza actual será el nodo que voy a crear
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    // método insert (agregar nodos intermedios)
    insert(index, value) {
        if (index === 0) { // validación para que no salga error si pongo indice cero
            return this.prepend(value);
        }
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = new node(value);
        const prevPointer = this.getTheIndex(index-1);
        const nextPointer = prevPointer.next;
        newNode.prev = prevPointer;
        newNode.next = nextPointer;
        prevPointer.next = newNode;
        nextPointer.prev = newNode;

        this.length++;

        return this;
    }
    getTheIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while(counter !== index) { // se rompe el ciclo cuando el counter es igual al index esto quiere decir que el currentNode es el adelantado a nuestro index
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    // método para borrar un indice
    delete(index) {
        if (index>= this.length || index < 0) {
            console.error("index out of bounds");
        } else if( index === 0) {
            this.head = this.head.next;
            this.head.prev = null;
            this.length--

        } else if(index  === this.length - 1) {
            const firstPointer = this.getTheIndex(index - 1);
            firstPointer.next = null;
            this.tail = firstPointer;
            this.length--;
            
          } else {
            const firstPointer = this.getTheIndex(index - 1);
            const pointerToRemove = firstPointer.next;
            const nextToPointerToRemove = pointerToRemove.next;
            nextToPointerToRemove.prev = firstPointer;
            firstPointer.next = nextToPointerToRemove;
            this.length--;
        }
    }
}
  

let myLinkedList = new MyDoublyLinkedList(1);


myLinkedList.append(2);
myLinkedList.append(3);

//myLinkedList.prepend(0);
myLinkedList.append(4);

//console.log(myLinkedList.insert(1,5)); // en el indice 1 se inserta el 5 y los que estaban de ese indice en adelante en el array se adelantan un indice

myLinkedList.delete(2);

console.log(myLinkedList);