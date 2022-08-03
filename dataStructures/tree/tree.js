//     10        
//   4    20
// 2  8  17 170

class node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class binarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true) {
                if(value < currentNode.value) {
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left
                } else {
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    } 
                    currentNode = currentNode.right;
                }
            }
        }
    }
    // método search
    search(value, currentTree = this.root) {
        if (currentTree == null) {
            return 'El elemento no se encuentra';
        } else if ( value > currentTree.value ) {
            return this.search(value, currentTree.right);
        } else if (value < currentTree.value) {
            return this.search(value, currentTree.left);
        } else {
            console.log('El elemento ha sido encontrado');
            return currentTree;
        }
    }
    // método delete
    delete(value){
        let currentNode = this.root;
    
        if (this.root.value === value) {
            delete this.root;
            return this;
        }
    
        while (true) {
            if (value < currentNode.value) {
                if (value === currentNode.left.value) {
                    currentNode.left = null;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                if (value === currentNode.right.value) {
                    currentNode.right = null;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }
//     delete(value, currentTree = this.root) {
       
//         if (currentTree == null) {
//             return 'El elemento no se encuentra';
//         } else if ( value > currentTree.value ) {
//             return this.search(value, currentTree.right);
//         } else if (value < currentTree.value) {
//             return this.search(value, currentTree.left);
//         } else {
//             console.log('El elemento ha sido encontrado');
//             this.root.value = currentTree.value;
//             this.root.value = null;
//         } 
//     }
}

const myTree = new binarySearchTree();

myTree.insert(10);
myTree.insert(4);
myTree.insert(20);
myTree.insert(2);
myTree.insert(8);
myTree.insert(17);
myTree.insert(170);

//console.log(myTree.search(10));
myTree.delete(4);
//myTree.insert(10);

console.log(myTree);



