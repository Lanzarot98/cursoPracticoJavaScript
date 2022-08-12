// es parecido al some, pero aquí todos deben cumplir la condición para retornar ya sea true o false

const numbers = [1, 30, 39, 29, 10, 13];

let answer = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40 ) {
        answer = false;
    }
};

console.log(answer);

const answer2 = numbers.every((element) => {
    return element <= 40;
})
console.log('answer2', answer2);

// realizar el método every que valide si todos son menores de 15 años
const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

const answer3 = team.every( (element) => {
    return element.age < 15;
})
console.log('answer3', answer3);



