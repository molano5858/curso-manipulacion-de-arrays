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

//quiero mostrar solo los totales de cada objeto
let soloTotales = orders.map((item) => item.total);

console.log(soloTotales);

//quiero añadir un nuevo atributo a cada objeto sin transformar el original

let NewAtributoError = orders.map((elemento) => {
  elemento.impuesto = elemento.total * 0.19;
  return elemento; // CUIDADO A PESAR DE QUE MAP ES INMUTABLE CUANDO DEVOLVEMOS EL MISMO ELEMENTO COMO AL ESTAR HACIENDO UNA COPIA DEL ARRAY SE HACE UNA REFERENCIA A MEMORIA ESTARIA MODIFICANDO ESA REFERENCIA Y EN SI LA ORIGINAL
});

let agregandoNewAtributo = orders.map((elemento) => {
  return {
    // aqui nos evitamos el error de modificar la referencia en memoria osea el original ya que vamos a devolver un objeto nuevo
    ...elemento,
    impuesto: elemento.total * 0.19,
  };
});

let eliminarErrorNewAtributoError = orders.map((elemento) => {
  return delete elemento.impuesto;
});

console.log(NewAtributoError);
console.log(orders); // EL ORIGINAL SE MODIFICO GRACIAS A NewAtributoError, este array ya tiene el atributo impuesto
console.log(agregandoNewAtributo);
console.log(eliminarErrorNewAtributoError);
console.log(orders); // aqui ya elimine el error original
