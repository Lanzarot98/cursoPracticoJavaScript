// object literal
const natalia = {
    name: 'Natalia',
    age: 20,
    approvedCourses: [
        'Course HTML',
        'Practical course HTMl and CSS',
    ],
    passCourse( newCourse) {
        this.approvedCourses.push(newCourse);
    }
};

natalia.approvedCourses.push('Responsive course');
natalia.passCourse('CSS Grid');

console.log(natalia);


function Student(name, age, approvedCourses) {
    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;

    // this.passCourse = function (newCourse) {
    //     this.approvedCourses.push(newCourse);
    // }
    
}

Student.prototype.passCourse = function (newCourse) { // esconde este método dentro del objeto(clase) Student
    this.approvedCourses.push(newCourse);
}

const Juanita = new Student(
    'Juanita Alejandra',
    15,
    [
        'Curso de Introducción a la producción de Videojuegos', 
        'Curso de Creación de Personajes',
    ]
);

Juanita.passCourse('Curso Unreal Engine'); // a pesar de que el método no esta dentro de la clase, al crear el prototipo de método, se esconde pero él método funciona ahí si se llama.
console.log(Juanita);




