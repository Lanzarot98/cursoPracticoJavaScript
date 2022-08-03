class hashTable {
    constructor(size) {
        this.data = new Array(size); //inicializando datos y realizando instancia de array 
    }
    //comportamiento de una hash table al momento de pasar una key que lo convierte en una hash (serie de characters). aquí se guarda la información 
    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)*i) % this.data.length;
        }
        return hash;
    }
    // método para agregar elementos:
    set(key, value) {
        const address = this.hashMethod(key);
        if (!this.data[address]) {
            this.data[address] = [] //si aun no existe un array con dicha dirección crea un nuevo array
        } 
        this.data[address].push([key, value]); // si ya existe tendremos colición, entonces tenemos que evitar que el key value reescriba dicha información asi que lo vamos a agregar para tener la colición que son dos key y dos values adentro de un bucket para tener acceso y no perder la información
        return this.data;
    }
    get(key) {
        const address = this.hashMethod(key); // esto para que nos regrese un hash
        const currentBucket = this.data[address] // declaramos el bucket de donde estamos en ese momento. le estamos pasando el indice en donde se encuentra el valor 
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key) { // si el array que se encuentra en el elemento i, el elemento cero de ese array (el key)
                    return currentBucket[i][1]; // retorna entonces el key que estaba buscando (el valor)
                }
            }
        } else {
            return undefined;
        }
    }
    // metodo para borrar: 
    remove(key) {
        const address = this.hashMethod(key); 
        const currentBucket = this.data[address] 
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key) { 
                    const deletedValue = currentBucket[i]; 
                    currentBucket.splice(i,1);
                    return deletedValue;
                }
            }
        } else {
            return undefined;
        }
    }
    // método para devolver todos los keys:
    getAllKeys() {
        const keys = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++) {
                    keys.push(this.data[i][j][0]); // (arrayDe50[numero de array][filas de ese array][columna de ese array]) al ser values 0
                }
            }
        }
        return keys;
    }
}

const myHashTable = new hashTable(50); // necesito que venga con 50 espacios libres para mi hashTable y ahi guardar información 


myHashTable.set("Diego", 1990);
myHashTable.set("Mariana", 1998);
console.log(myHashTable.set("Alejandra", 2000));

console.log(myHashTable.get('Diego'));

//console.log(myHashTable.remove('Diego'));

console.log(myHashTable.getAllKeys());

console.log(myHashTable); // hashTable tiene en datos un array con 50 espacios






