// prototipos con la sintaxis de clases

class Student {
    // metodo que se ejecuta cuando llamemos a los parentesis al crear la instancia de prototipo (de clase en este caso)
    constructor({
        name, 
        age, 
        approvedCourses = [],
        email,
    }) { 
        this.name = name;
        this.age = age;
        this.approvedCourses = approvedCourses;
        this.email = email;
    }

    passCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

const Miguel = new Student({

    email: 'miguel@hotmail.com', // no importa si esta en desorden de acuerdo a como se organizaron los parametros del constructor
    name: 'Miguel',
    age: 28,
    approvedCourses: [
        'Curso de análisis de Negocios para Ciencia de Datos',
        'Curso de principios de visualización de Datos para BI'
    ]
});



Miguel.passCourse('Curso de Datos');

console.log(Miguel);