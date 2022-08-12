const numbers = [1,2,3,4];

// simulación some en for:
let answer = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        answer = true;
        break; // rompemos ya que solo necesitamos que cumpla que un elemento sea par
    }
};
console.log(answer);


// método some
const answer2 = numbers.some( (element) => {
    return element % 2 === 0;
});
console.log('answer2' ,answer2);

const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true,
    },
    {
        customerName: 'Nicolas',
        total: 2322,
        delivered: false,
    },
];

const answer3 = orders.some( (element) => {
    return element.delivered === true;
});
console.log('answer3', answer3); // some solo imprime true o false

// some con fechas si se cruzan las citas o no
const dates = [ // año, mes, día, hora, min,
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
};

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlap = (newDate) => {
    return dates.some((date) => {
        return areIntervalsOverlapping( // este tiene parametros de entrada son la primera con start y la segunda con end  que son las que compara si se sobreponen o no
            {start: date.startDate, end: date.endDate}, // start
            {start: newDate.startDate, end: newDate.endDate}, // end
        )
    })
}
console.log('isOverlap', isOverlap(newAppointment)); // si sale true es porque las fechas se sobreponen


