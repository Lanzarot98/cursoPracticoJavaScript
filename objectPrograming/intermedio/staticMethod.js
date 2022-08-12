const luis = {
    name: "Luis Miguel",
    age: 23,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse) {
        console.log("This", this);
        console.log("This.approvedCourses", this.approvedCourses);

        this.approvedCourses.push(newCourse);
    }
};

// console.log(Object.keys(luis));
// console.log(Object.getOwnPropertyNames(luis));
// console.log(Object.entries(luis));


// Object.defineProperty(luis, "navigator", {
//     value: "Chrome",
//     enumerable: false,
//     writable: true,
//     configurable: true,
// });

// Object.defineProperty(luis, "pruebaNasa", {
//     value: "extraterrestres",
//     enumerable: false,
//     writable: false,
//     configurable: false,

// });


// Object.defineProperty(luis, "editor", {
//     value: "VSCode",
//     enumerable: true,
//     writable: false,
//     configurable: true,
// });

// Object.defineProperty(luis, "terminal", {
//     value: "WSL",
//     enumerable: true,
//     writable: true,
//     configurable: false,
// });

Object.seal(luis); // cambia la propiedad configurable de mis atributos a false
Object.freeze(luis); // cambia la propiedad configurable y writable a false de mis atributos

console.log(Object.getOwnPropertyDescriptors(luis));

