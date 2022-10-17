// SORT
// es mutable
// vamor a organizar estos arrays
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months); // los ordena alfabeticamente

const numbers = [1, 30, 4, 21, 100000];
numbers.sort();
console.log(numbers); // ORDENADO en el orden de la tabla ASCII
numbers.sort((a, b) => a - b); // ordenados de menor a mayor
console.log(numbers);
numbers.sort((a, b) => b - a); // ordenados de mayor a menor
console.log(numbers);

const words = [
  // caracteres especiales
  "réservé",
  "premier",
  "communiqué",
  "café",
  "adieu",
  "éclair",
  "banana",
];

words.sort();
console.log(words); // lo ordena con respecto a la tabla ASCII

// ORDENANDO OBJETOS
//tenemos que tener en cuenta por cual atributo queremos ordenar y pasarselo a los parametros a y b
const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

orders.sort((a, b) => a.total - b.total);
console.log(orders);
