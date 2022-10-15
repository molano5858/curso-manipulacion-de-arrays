let array = [
  {
    name: "Product 1",
    price: 1000,
    stock: 10,
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20,
  },
];

// RETO, convertir este array pero que a cada objeto se le agrege la key impuesto: que sea el 19% del precio de cada producto

console.log(array);

function solution(array) {
  const resultado = array.map((elemento) => {
    return { ...elemento, impuesto: parseInt(elemento.price * 0.19) };
  });
  return resultado;
}

console.log(solution(array));
