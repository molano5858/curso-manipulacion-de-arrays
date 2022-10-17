// CONCAT
//es inmutable, es decir no modifica el array original
// une dos arrays creaudno uno nuevo

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];

let concat1 = array1.concat(array2);
let concat2 = [...array1, ...array2]; // se puede hacer con spread operator
let concat3 = [...array1, "ejemplo de string"]; //ojo lo que pasa, agrega el string tal cual como un elemento
let concat4 = [...array1, ..."ejemplo de string"]; // si uso el spread me va a colocar cada letra como un elemento del array

console.log(concat1);
console.log(concat2);
console.log(concat3);
console.log(concat4);
