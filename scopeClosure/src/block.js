function fruits() {

    if (true) {
        var fruit1 = 'Apple'; // function scope puedo acceder esta variable dentro de toda la funcion
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
        console.log(fruit2);
        console.log(fruit3);
    }

    let fruit2 = 'PineApple'; 
    console.log(fruit1);
    console.log(fruit2);



}

fruits();