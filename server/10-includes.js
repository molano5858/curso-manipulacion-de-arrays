//INCLUDES
// pets.includes(solo el elemento que vas a buscar)
// OJO QUE NO RECIBE UNA FUNCION, es por eso que se le pasa un elemento, sirve para arrays y para strings
// nos devuelve true si encuentra el elemento o false si no existe

const pets = ["cat", "dog", "bat"];
const ejemploString = "Este es un ejemplo de includes con un string";

let ejemploIncludes = pets.includes("dog");
let string = ejemploString.includes("ejemplo");
console.log(ejemploIncludes);
console.log(string);
