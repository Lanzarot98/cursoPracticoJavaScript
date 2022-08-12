const letters = ['a','b','c','g','h'];

// método de arrays
letters.forEach((element) => console.log(element));

//vs

// método con for
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log(element);
}



