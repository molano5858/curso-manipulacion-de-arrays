//EVERY
//devuelve true or false si TODOS los elementos cumplen con la condicion

const menoresA40 = [1, 39, 25, 27, 20, 10, 12, 6, 7, 8];
const noSonMenoresA40 = [1, 39, 25, , 42, 44, 45, 27, 20, 10, 12, 6, 7, 8];

const sonMenoresA40 = menoresA40.every((numerito) => numerito <= 40);
const noSonMenores = noSonMenoresA40.every((numerito) => numerito <= 40);

console.log(sonMenoresA40);
console.log(noSonMenores);

//EJEMPLO CON OBJETO
// EVALUAR SI TODOS LOS MIEMBROS DEL ARRAY SEAN MENORES A 15 AÑOS
const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const edades = team.map((elemento) => elemento.age);
console.log(edades);

let menoresA15 = edades.every((edad) => edad <= 15);
console.log(menoresA15);

const larga = team.map((elemento) => elemento.age).every((edad) => edad <= 15);

console.log(larga);
