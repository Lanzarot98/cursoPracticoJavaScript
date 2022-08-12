const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
];

// simulación sin usar el método flatMap
const answer = users.map((user) => {
    return user.attributes;
}).flat();

const answer2 = users.flatMap((user) => user.attributes);


console.log('map-flat', answer);
console.log('flatMap', answer2);

// reto como hacer un flatMap pero no teniendo un array de arrays
// quiero un array de las fechas de inicio
const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

  //const example = concat([...calendars.primaryCalendar, ...calendars.secondaryCalendar])
  const answer3 = Object.values(calendars).flatMap((element) => {
    return element.map((date) => {
        return date.startDate;
    });
  });

  console.log('flatMap2', answer3);