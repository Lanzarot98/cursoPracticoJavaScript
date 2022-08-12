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


// Factory pattern y RORO

// función para obligar a mandar error si no tenemos ciertos atributos definidos
function requiredParam(property) {
    throw new Error(property + " es obligarotio");
}

function createLearningPath({
    name = requiredParam("name"),
    courses = [],
}) {
    const private = {
        "_name": name,
        "_courses": courses,
    };

    

    const public = {
        get name() {
            return private._name;
        },
        set name(newName) {
            if(newName.length != 0){
                private._name = newName;
            } else {
                console.warn("Tu nombre debe tener al menos 1 carácter");
            }
        },

        get courses() {
            return private._courses;
        },
        // solo puede editar el estudiante de tipo profesor
        // set courses(newCourses) {
        //     if(newCourses.length != 0){
        //         private._courses = newCourses;
        //     } else {
        //         console.warn("El curso debe tener al menos 1 carácter");
        //     }
        // },
    };

    return public;
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
        "_learningPaths": learningPaths,
    };
    const public = {
        age,
        email,
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
                private._name = newName;
            } else {
                console.warn("Tu nombre debe tener al menos 1 carácter");
            }
        },
        get learningPaths() {
            return private._learningPaths;
        },
        
        set learningPaths(newLearningPaths) {
            if(!newLearningPaths.name){ //esto llama al getter del learning path
                console.warn("Tu LearningPath no tiene la propiedad name");
                return // recordar que el return impide que siga ejecutando el código la función
            } else if (!newLearningPaths.courses) {
                console.warn("Tu LearningPath no tiene courses");
                return;
            } else if (!isArray(newLearningPaths.courses)) {
                console.warn("Tu LearningPath no es una lista de cursos");
                return;
            }
            private._learningPaths.push(newLearningPaths);
        },
    };
   
    
    return public;
}

const luis1 = createStudent({
    name: "Luis Miguel",
    email: "luis@example.com",
}); // {}


// En estas clases de ser vs. tener (Duck Typing vs. instanceof) estamos comparando las 2 formas más importantes de validar si nuestros objetos (en este caso, nuestros learningPaths) son lo que dicen ser.
// .
// Con la función createLearningPath creamos objetos literales que tienen una estructura bien definida (un objeto con nombre tipo string y un array de cursos). Eso es lo más fácil.
// .
// El verdadero reto es que desde la función createStudent validemos si los learningPaths de cada estudiante REALMENTE sí son LPs de nuestra aplicación en vez de objetos impostores.
// .
// Con el duck typing tendremos que hacerlo manualmente validando la estructura de cada objeto. Pero con el instanceof de la siguiente clase veremos otra forma de validar si esos objetos son instancias de la función original: createLearningPath.