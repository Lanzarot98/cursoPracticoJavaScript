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

function LearningPath({
    name = requiredParam("name"),
    courses = [],
}) {
    this.name = name;
    this.courses = courses;

    // const private = {
    //     "_name": name,
    //     "_courses": courses,
    // };

    

    // const public = {
    //     get name() {
    //         return private._name;
    //     },
    //     set name(newName) {
    //         if(newName.length != 0){
    //             private._name = newName;
    //         } else {
    //             console.warn("Tu nombre debe tener al menos 1 carácter");
    //         }
    //     },

    //     get courses() {
    //         return private._courses;
    //     },
    // };
    // return public;
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
    
    if(isArray(learningPaths)) {
        this.learningPaths = [];
        for (learningPathIndex in learningPaths) {
            
            if( learningPaths[learningPathIndex] instanceof LearningPath){
                this.learningPaths.push(learningPaths[learningPathIndex]);
            }
        }
    } else {
        console.warn("LearningPath no es un array");
    }
    // const private = {
    //     "_name": name,
    //     "_learningPaths": learningPaths,
    // };
    // const public = {
    //     age,
    //     email,
    //     approvedCourses,
    //     socialMedia: {
    //         twitter,
    //         instagram,
    //         facebook,
    //     },
    //     get name() {
    //         return private._name;
    //     },
    //     set name(newName) {
    //         if(newName.length != 0){
    //             private._name = newName;
    //         } else {
    //             console.warn("Tu nombre debe tener al menos 1 carácter");
    //         }
    //     },
    //     get learningPaths() {
    //         return private._learningPaths;
    //     },
        
    //     set learningPaths(newLearningPaths) {
    //         if(!newLearningPaths.name){ //esto llama al getter del learning path
    //             console.warn("Tu LearningPath no tiene la propiedad name");
    //             return // recordar que el return impide que siga ejecutando el código la función
    //         } else if (!newLearningPaths.courses) {
    //             console.warn("Tu LearningPath no tiene courses");
    //             return;
    //         } else if (!isArray(newLearningPaths.courses)) {
    //             console.warn("Tu LearningPath no es una lista de cursos");
    //             return;
    //         }
    //         private._learningPaths.push(newLearningPaths);
    //     },
    // };
   
    
    // return public;
}

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
        {
            name: "escuela impostor", // vemos que esto no aparece, pues no es válido
            courses: [],
        }
    ],
});
