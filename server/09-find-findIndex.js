//FIND
//me devuelve directamente el objeto o elemento que busco, siempre devuelve solo un elemento.

const numbers = [1, 30, 49, 29, 10, 13];

let ejemplo = numbers.find((numerito) => numerito === 30);
let noEstaElElemento = numbers.find((numerito) => numerito === 100);
console.log(ejemplo); // ejemplo devuelve el elemento en este caso seria el 30
console.log(noEstaElElemento); //como el elemento que busco no esta, me devuelve undefined

// ejemplo con un objeto
// se sugiere que se utilice find con elementos que no se repitan por ejemplo con algun campo id
const products = [
  {
    name: "Pizza",
    price: 12,
    id: "🍕",
  },
  {
    name: "Burger",
    price: 23,
    id: "🍔",
  },
  {
    name: "Hot dog",
    price: 34,
    id: "🌭",
  },
  {
    name: "Hot cakes",
    price: 355,
    id: "🥞",
  },
];

let busqueda = products.find((elemento) => elemento.id == "🍔");
console.log(busqueda); // nos retorna todo el objeto

// FIND INDEX
// ya no nos devuelve el elemento completo si no en que posicion se encuentra
// si no encuentra el elemento nos va a devulver -1

let findIndex = products.findIndex((elemento) => elemento.id == "🍔");
let findIndexNoEncontro = products.findIndex((elemento) => elemento.id == "🚗");
console.log(findIndex);
console.log(findIndexNoEncontro);
