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

const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        instagram: undefined,
        facebook: undefined,
    },


};

const luis = deepCopy(studentBase);
Object.seal(luis);
Object.isSealed(luis);
Object.isFrozen(luis); // arroja un boolean para saber si esta o no frozen al igual que isSealed

// Object.defineProperty(luis, "name", {
//     value: "Luis Miguel",
//     configurable: false,
// });

//luis.name = "Luis Miguel";

// Factory pattern y RORO

// función para obligar a mandar error si no tenemos ciertos atributos definidos
function requiredParam(property) {
    throw new Error(property + " es obligarotio");
}

function createStudent({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {} ) {
    const private = {
        "_name": name,
    };
    const public = {
        age,
        email,
        learningPaths,
        approvedCourses,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
        get name() {
            return private._name;
        },
        set name(newName) {
            if(newName.length != 0){
                return private._name; // para que no me edite tendría que colocar el: private._name = newName; 
            } else {
                console.warn("Tu nombre debe tener al menos 1 carácter");
            }
        },

        // readName y changeName funcionarían como get y set
        // readName(){
        //     return private._name;
        // },
        // changeName(newName) {
        //     private._name = newName
        // },
    };

    // Object.defineProperty(public, "readName", {
    //     // al hacer esto no podríamos aplicar polimorfismo a este método pues tiene false en writable
    //     configurable: false,
    //     writable: false,
    // })

    // Object.defineProperty(public, "changeName", {
    //     configurable: false,
    //     writable: false,
    // })
    
    return public;
}

const luis1 = createStudent({
    name: "Luis Miguel",
    email: "luis@example.com",
}); // {}
