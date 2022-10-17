//JOIN
// Unir los elementos y se le pasa el patron de separacion entre elementos que queremos
// array.join('tipo de separador')

const elements = ["Fire", "Air", "Water"];

let ejemploJoin = elements.join("--");
console.log(ejemploJoin);

//EJEMPLO USANDO SPLIT Y JOIN
// queremos volver un string que es un titulo, queremos que ese titulo no este separado por espacion si no por un guion

const stringEjemplo = "Curso de manipulacion de arrays";

const stringArray = stringEjemplo.split(" "); // volvemos un array bajo el separador por espacio
console.log(stringArray);
const solucion = stringArray.join("--");
console.log(solucion);

// ejemplo de la url en un asola linea

let urlFinal = stringEjemplo.split(" ").join("-").toLowerCase();
console.log(urlFinal);
