const obj1 = {
    a: "a",
    b: "b",
    c: {
        d:"d",
        e: "e",
    },
    editA() {
        this.a = "AAAA";
    }
};

// primer intento:
// for (prop in obj1) { // por cada propiedad en mi objeto1 ( en este caso puedo hacer que sea una propiedad por ej a, pero pues sería mas trabajo)
//     obj2[prop] = obj1[prop];
// }

// const obj3 = Object.assign({}, obj1)

// const obj4 = Object.create(obj1)

// segundo intento
// const stringifiedComplexObj = JSON.stringify(obj1); //crear string a partir de un objeto
// const obj2 = JSON.parse(stringifiedComplexObj); // crear un objeto a partir de un string

//tercer intento
// const obj2 = structuredClone(obj1); // esto se puede reemplazar por el intento 2, sin embargo no se pueden compiar métodos todavía

// cuarto intento (recursividad) 

function isObject(subject) {
    return typeof subject == "object"; // typeof para validar objetos
}

function isArray (subject) {
    return Array.isArray(subject); //método especial Array.function(objetoASaberSiEsArray)
}




// subject entonces es una propiedad del objeto que queremos copiar, y pues las propiedades pueden ser objetos, string, arrays, etc.
function deepCopy(subject) {
    let copySubject;
    const subjectIsArray = isArray(subject);
    const subjectIsObject = isObject(subject);

    if(subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    for (key in subject) {
        const keyIsObject = isObject(subject[key]); //validar cada propiedad de subject si es objeto 

        if(keyIsObject) {
            copySubject[key] = deepCopy(subject[key]); // como es un objeto, entonces necesito volver a llamar la funcion (recursividad) para validar cada una de sus propiedades
        } else if (subjectIsArray) {
            copySubject.push(subject[key]);
        } else {
            copySubject[key] = subject[key];
        }
    }
    return copySubject;
}
