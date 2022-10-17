// SPREAD OPERATOR
// el problema es que al copiar un array con otro es que esta copiando la referencia en memoria, es decir que si modifico uno modifico los dos

const numbers1 = [1, 2, 3, 4];
let copia = numbers1;
console.log(copia);
numbers1.push("hola"); //estoy modificando el array
console.log(copia); //aque se ve que la copia se modifica

//ESTO SE SOLUCIONA CON EL SPREAD OPERATOR
//a continuacion vamos a ver la solucion del problema anterior

const numbers2 = [1, 2, 3, 4];
let copia2 = [...numbers2];
console.log(copia2);
numbers2.push("hola"); // aqui se modifica el original
console.log(numbers2); // aqui se muestra el original modificado
console.log(copia2); // aqui se muestra que la copia no se modifico.
