// objetos literales:
const luis1 = {
    name: "Luis Miguel",
    username: "lanzarot",
    points: 100,
    socialMedia: {
        twitter: "lanzarot98",
        instagram: "luisRojas",
        facebook: undefined,
    },
    approvedCourses: [
        "Curso HTML y CSS",
        "Curso Práctico HTML y CSS",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso HTML y CSS",
                "Curso Práctico HTML y CSS",
                "Curso de Responsive Design",
            ]
        },
        {
            name: "Escuela de Videojuegos",
            courses: [
                "Curso Introducción a la producción de Vgs",
                "Curso Unreal Engine",
                "Curso de Unity 3D",
            ]
        }
    ]
};

const miguel = {
    name: "Miguel",
    username: "miguelangel",
    points: 1000,
    socialMedia: {
        twitter: "miguel01",
        instagram: "miguel97",
        facebook: undefined,
    },
    approvedCourses: [
        "Curso DataBusiness",
        "Curso DataVis",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso HTML y CSS",
                "Curso Práctico HTML y CSS",
                "Curso de Responsive Design",
            ]
        },
        {
            name: "Escuela de Data Science",
            courses: [
                "Curso DataBusiness",
                "Curso DataVis",
                "Curso Tablas",
            ]
        }
    ]
};

// POO:

class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }) {
        this.content = content;
        this.studentName = studentName;
        this. studentRole = studentRole;
        this.likes = 0; // no es necesario recibir parametros en nuestro constructor 
    }

    publicar() {
        console.log(this.studentName + " (" + this.studentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);
        // Luis (estudiante)
        // 0 likes
        // Me encantó el curso
    }
}

function videoPlay(id) {
    const urlSecret = "https:exampleOfSecretVideoThatIWantToHide"+ id;
    console.log("Se esta reproduciendo desde la url " + urlSecret);
}

function videoStop(id) {
    const urlSecret = "https:exampleOfSecretVideoThatIWantToHide"+ id;
    console.log("Pausamos la url  " + urlSecret);
}

class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }
    pausar() {
        videoStop(this.videoStop);
    }

}

class Course {
    constructor({ 
        name, 
        classes=[], 
        isFree = false,
        lang = "spanish",
    }) {
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name() { // podemos llamar al método sin los parentesis
        return this._name;
    }

    set name(newName) {
        if (newName === "Curso Malo Programación Básica") {
            console.error("Web.. no");
        } else {
            this._name = newName;
        }

    }
}

const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
    isFree: true,
})

const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
})

const cursoPracticoHTML = new Course({
    name: "Curso Práctico de HTML y CSS",
    lang: "english",
})

const basicoJS = new Course({
    name: "Curso Práctico de JavaScript",
    classes: "",
})

const basicoPython = new Course({
    name: "Curso Basico de Python",
    classes: "",
})

const basicoC = new Course({
    name: "Curso Basico de C",
    classes: "",
})

class LearningPath {
    constructor({name, courses = []}) {
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPath( {
    name: "Escuela de Desarrollo Web",
    courses: [basicoJS, cursoProgBasica, cursoDefinitivoHTML, cursoPracticoHTML],
});

const escuelaVideoJuegos = new LearningPath({
    name: "Escuela de Videojuegos",
    courses: [basicoC, "Curso de Unity", cursoProgBasica],
});

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [basicoPython, "Curso de Data Business", cursoProgBasica],
});


class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
               twitter,
               instagram,
               facebook, 
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name
        });
        comment.publicar();
    }
}

class FreeStudent extends Student {
    
    //al aplicar herencia debo pasar los parámetros o atributos existentes de la clase madre al nuevo constructor hijo
    constructor(props) {
        super(props);
    }
    approveCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos free");
        }
    }
}

class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }
    approveCourse(newCourse) {
        if (newCourse.lang !== "english" ) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en ingles");
        }
    }

}

class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student {
    constructor(props) {
        super(props);
    }
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "Profesor",
        });
        comment.publicar();
    }
}


const luis = new FreeStudent({
    name: "Luis Miguel",
    username: "lanzarot",
    email: "luis-389@gmail.com",
    twitter: "rojas89",
    learningPaths: [
        escuelaWeb,
        escuelaVideoJuegos,
    ]
});

const miguel1 = new BasicStudent({
    name: "Miguel",
    username: "miguelangel",
    email: "miguel@gmail.com",
    instagram: "miguel89",
    learningPaths: [
        escuelaData,
        escuelaWeb,
    ]
});

const freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "freddier",
    email: "f@gmail.com",
    instagram: "freddiervega",
    learningPaths: [
        escuelaWeb,
    ]
});



console.log(luis);

console.log(miguel1);




