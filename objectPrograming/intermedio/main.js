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



// class SuperObject {

//     static isObject(subject) {
//         return typeof subject == "object"; // typeof para validar objetos
//     }


//     static deepCopy(subject) {
//         let copySubject;
//         const subjectIsArray = isArray(subject);
//         const subjectIsObject = isObject(subject);
    
//         if(subjectIsArray) {
//             copySubject = [];
//         } else if (subjectIsObject) {
//             copySubject = {};
//         } else {
//             return subject;
//         }
    
//         for (key in subject) {
//             const keyIsObject = isObject(subject[key]); //validar cada propiedad de subject si es objeto 
    
//             if(keyIsObject) {
//                 copySubject[key] = deepCopy(subject[key]); // como es un objeto, entonces necesito volver a llamar la funcion (recursividad) para validar cada una de sus propiedades
//             } else if (subjectIsArray) {
//                 copySubject.push(subject[key]);
//             } else {
//                 copySubject[key] = subject[key];
//             }
//         }
//         return copySubject;
    
//     }
// }

// Factory pattern y RORO

// función para obligar a mandar error si no tenemos ciertos atributos definidos


function SuperObject() {}

SuperObject.isObject = function (subject) {
    if(Array.isArray(subject)){
		return false
	}
    
    return typeof subject == "object";
}

SuperObject.deepCopy = function (subject) {
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



function requiredParam(property) {
    throw new Error(property + " es obligarotio");
}

function LearningPath({
    name = requiredParam("name"),
    courses = [],
}) {
    this.name = name;
    this.courses = courses;
}

function Student({ // como es un prototipo y no una fábrica lo llamamos solo Student mas no createStudent
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {} ) {

    
    this.name = name;
    this.email = email;
    this.age = age;
    
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
        twitter,
        instagram,
        facebook,
    };

    const private = {
        "_learningPaths": [],
    };

    Object.defineProperty(this, "learningPaths", { //esto es para crear propiedades y como estamos dentro del objeto usamos el this
        get() {
            return private._learningPaths;
        },
        set(newLearningPaths) {
            if( newLearningPaths instanceof LearningPath){
                private._learningPaths.push(newLearningPaths);
            } else {
                console.warn("Alguno de los LearningPaths no es una instancia del prototipo LearningPath")
            }
        },
    }); 
    
    // this.learningPaths = function(){
    // }

    
        for (learningPathIndex in learningPaths) {
            this.learningPaths = learningPaths[learningPathIndex]
        }
    
}



// es Student.prototype pues no vamos a trabajar con una función normal ni con un objeto literal, si no con un prototipo
//Student.prototype.learningPaths = function

// entonces como no tenemos una fábrica si no prototipos usamos new
const escuelaWeb = new LearningPath({
    name: "Escuela de WebDev",
}); 

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
}); 

const luis1 = new Student({
    name: "Luis Miguel",
    email: "luis@example.com",
    learningPaths: [
        escuelaWeb, 
        escuelaData,
    ],
});