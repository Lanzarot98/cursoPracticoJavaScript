// estructura de una linked list single, quiere decir que tiene solo una dirección
// let singlyLinkedList = {
//     head: {
//         value: 1,
//         next: {
//             value: 2,
//             next: {
//                 value: 3,
//                 next: {
//                     value: 4,
//                     next: null
//                 }
//             }
//         }
//     }
// }

// ahora bien, como se vería esto en un clase:

class node {
    constructor(value) {
        this.value = value;
        this.next = null;
    } 
}

class MyDoublyLinkedList {
    constructor(value) {
        this.head = { // cabeza
            value: value,
            next: null,
        }
        this.tail = this.head; // aqui generamos la cola de la list, tenemos que agregar un primer valor que estará apuntando a la cabeza pues no esta apuntando a otro valor
        
        this.length = 1; // 1 ya que vamos a generar una instancia sin elementos.
    }

    // cada uno de estos métodos van a tener un nodo, entonces se va a crear otra clase (class node)
    // método para añadir nodo en la cola
    append(value) {
        const newNode = new node(value);
        this.tail.next = newNode; //decirle a la cola que sea igual al nuevo nodo y lo agrega (pero todavía no se convierte en la cola), entonces agrega un nuevo nodo que ya tiene un .next y ya existe un nuevo null 
        this.tail = newNode; // aun tail sigue apuntanto a la cabeza de la estructura, entonces ahora si es hora de posicionar el nuevo nodo en la cola
        this.length++;

        return this; // para regresar el objeto
    }
    // método para añadir nodo en la cabeza
    prepend(value) {
        const newNode = new node(value);

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
        const firstPointer = this.getTheIndex(index-1);
        const holdingPointer = firstPointer.next
        firstPointer.next = newNode;
        newNode.next = holdingPointer;

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
        } else {
            const holdingNode = this.getTheIndex(index-1); // el index-1 arrojará el currentNode que es el index que busco
            if (index === 0) { // el valor nulo se le da al que vaya a eliminar
                this.head = holdingNode.next;
            } else {
                const removeNode = holdingNode.next
                holdingNode.next = removeNode.next
            }
            this.length--;
            return this;
        }
    }

}

let myLinkedList = new MyDoublyLinkedList(1);


myLinkedList.append(2);
myLinkedList.append(3);

//myLinkedList.prepend(0);
myLinkedList.append(4);

console.log(myLinkedList.insert(1,5)); // en el indice 1 se inserta el 5 y los que estaban de ese indice en adelante en el array se adelantan un indice

//myLinkedList.delete(4);

console.log(myLinkedList);