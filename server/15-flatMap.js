// FLAT MAP
//digamos que tenemos un arreglo de objetos y queremos un array solo con los atributos

const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "Mike", attributes: ["Lovely"] },
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

// si lo hicieramos con map quedaria un array de arrays porque attributes son arrays
let arrayDeArrays = users.map((item) => item.attributes);
console.log(arrayDeArrays);
//podriaos hacerle un flat a lo anterior
let arrayMapyLuegoFlat = users.map((item) => item.attributes).flat();
console.log(arrayMapyLuegoFlat);
//DIRECTAMENTE HACIENDOLO CON FLATMAP EN UNA LINEA
let soloAtributos = users.flatMap((item) => item.attributes);
console.log(soloAtributos);

//RETO
//QUEREMOS UN ARRAY DE LAS FECHAS DE INICIO DEL OBJETO CALENDAR

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
// mi forma de hacerlo
let respuesta = Object.values(calendars);
console.log(respuesta);
let respuestaFlatMap = respuesta.flatMap((item) => item);
let respuestaFlatMap2 = respuestaFlatMap.flatMap((item) => item.startDate);
console.log(`Mi respuesta `);
console.log(respuestaFlatMap2);

// otra forma de hacerlo mas corta

let respuestaCorta = Object.values(calendars).flatMap((item) => {
  return item.map((date) => date.startDate);
});
console.log(`Respuesta corta `);
console.log(respuestaCorta);
