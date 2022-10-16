// SOME
// si alemnos uno cumple la condicion devuelve true

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let algunPar = numeros.some((numero) => numero % 2 === 0);

console.log(algunPar);

// EJEMPLO CON UN OBJETO
//hay alguna orden que fue entregada?
const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

let unaOrdenEntregadaAlMenos = orders.some((item) => item.delivered == true);
console.log(unaOrdenEntregadaAlMenos);

//EJEMPLO
// Ejemplo de ver si una nueva cita se cruza con alguna ya existente

// HAY QUE INSTALAR UNA LIBRERIA
// npm i date-fns
// pagina https://date-fns.org/docs/Getting-Started
// funcion que vamos a usar
// areIntervalsOverlapping()

const dates = [
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
  // ESTE ES UN EJEMPLO DE FECHA QUE SE SOBRE PONE A OTRA QUE ESTA EN EL ARRAY
  startDate: new Date(2021, 1, 1, 19),
  endDate: new Date(2021, 1, 1, 20, 30),
};

const newAppointment2 = {
  // EJEMPLO DE FECHA QUE NO SE SOBRE PONE
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
};

const areIntervalsOverlapping = require("date-fns/areIntervalsOverlapping");

const miVariableIsOverlapping = (newDate) => {
  return dates.some((date) => {
    return areIntervalsOverlapping(
      {
        start: date.startDate,
        end: date.endDate,
      },
      { start: newDate.startDate, end: newDate.endDate }
    );
  });
};

console.log(miVariableIsOverlapping(newAppointment)); //FECHA QUE SE SOBREPONE, DEBE DEVOLVER TRUE
console.log(miVariableIsOverlapping(newAppointment2)); // FECHA QUE NO SE SOBREPONE, DEBE DEVOLVER FALSE
