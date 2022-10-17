// FLAT
//arreglos dentro de arreglos, flat digamos que los saca y aplana el array
//.flat(# de niveles que queremos aplanar)

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let matrizFlat = matriz.flat();
console.log(matrizFlat);

//que pasa si tengo un array dentro de un array y dentro de un array
const matriz2 = [
  [1, 2, 3, [1, 2, 3]],
  [4, 5, 6, [1, 2, 3]],
  [7, 8, 9, [1, 2, 3]],
];

let matriz2Flat = matriz2.flat(); // aqui no le dijimos los niveles asi que va a quedar el segundo nivel aun con arrays
console.log(matriz2Flat);
let matriz2Flat2 = matriz2.flat(2); // aqui le dijimos el nivel asi que todo va a quedar planito
console.log(matriz2Flat2);
