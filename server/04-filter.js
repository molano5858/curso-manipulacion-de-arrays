// FILTER (inmutable)
//los elementos que cumplan con una condicion dada van a hacer parte de ese nuevo array.

const words = ["spray", "elites", "limit", "apple", "exuberant"];
//vamos a filtar las palabras que tengas 6 caracteres o mas

const respuesta = words.filter((item) => item.length > 6);
console.log(respuesta);

// EJEMPLO UN POCO MAS COMPLEJO

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

const ordenesTrue = orders.filter((elemento) => {
  return elemento.delivered == true;
});
// si la orden fue entregada y el total fue mayor a 100

const delivededAndGrater = orders.filter(
  (elemento) => elemento.delivered && elemento.total >= 100
);

console.log(ordenesTrue);
console.log(delivededAndGrater);

// vamos a crear una funcion que busque si contiene un texto especifico en los usuarios

function buscar(fragmentoDeTexto) {
  return orders.filter((item) => item.customerName.includes(fragmentoDeTexto));
}

console.log(buscar("ico"));
