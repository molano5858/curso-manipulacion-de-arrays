const products = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

// METODOS MUTABLES: en este caso usaremos PUSH y SPLICE

//vamos a buscar la hamburguesa y la vamos a agregar a mis productos

let product = products.find((item) => item.id === "🍔");

if (product) {
  myProducts.push(product);
}

console.log(myProducts);

// aparte vamos a eliminar ese elemento del array original cuando lo encuentre
// vamos a eliminar el producto con la funcion splice, para ello necesitamos el indice del producto, para eso podemos usar findIndex
let indexProductoAEliminar = products.findIndex((item) => item.id === "🍔");

if (indexProductoAEliminar !== -1) {
  //recordemos que findIndex si no encuentra entonces devuelve -1
  products.splice(indexProductoAEliminar, 1); //recordemos que splice recibe (la ubicacion, cuantas posiciones vamos a eliminar)
}

console.log(products);

//RETO
//crear un nuevo array pero sin el producto que encontro,

const reto = products.filter((item) => item.id != "🍔");
console.log("Respuesta reto");
console.log(reto);

//UPDATE
//vamos a actualizar los datos de un atributo de cierto elemento

const products2 = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

const update = {
  id: "🥞", //buscar este id y agregarle a ese elemento el siguiente atributo changes.
  changes: {
    price: 200,
    descripcion: "Delicioso",
  },
};

const productIndex = products2.findIndex((item) => item.id === update.id);

products2[productIndex] = {
  ...products2[productIndex],
  ...update.changes,
};

console.log(products2);

//RETO 2
// hacer una modificacion como acabamos de hacer pero sin modificar el array anterior (en lo anterior se modifico el array original)

const products3 = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

const updateReto = {
  id: "🥞", //buscar este id y agregarle a ese elemento el siguiente atributo changes.
  changes: {
    price: 200,
    descripcion: "Delicioso",
  },
};

const productIndexReto = products3.findIndex(
  (item) => item.id === updateReto.id
);

let newArray = [...products3]; // aqui creamos el nuewvo array y mas adelante lo modificaremos con el update del index que encontremos.

console.log(newArray);

newArray[productIndexReto] = {
  // como ya tenemos esa copia del original, aqui lo modificamos con el update y listo
  ...products3[productIndexReto],
  ...updateReto.changes,
};

console.log("original");
console.log(products3);
console.log("respuesta reto");
console.log(newArray);
