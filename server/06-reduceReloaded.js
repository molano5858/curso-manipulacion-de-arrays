// VAMOS a coger un array de numeros y vamos a devolver un objeto con el numero de veces que se repite cada numero del array

const items = [1, 3, 2, 3, 4, 4, 4, 4, 4, 4, 5];
//output esperado {1:1,2:1,3:2}

let respuesta = items.reduce((objetoAcumulador, numero) => {
  if (!objetoAcumulador[numero]) {
    objetoAcumulador[numero] = 1;
  } else {
    objetoAcumulador[numero]++;
  }

  return objetoAcumulador;
}, {}); //este objeto vacio es el estado inicial que queremos darle, recuerda que reduce tiene dos partes bloque que quiero ejecutar, estado inicial del acumulador

console.log(respuesta);

//EJERCICIO 2, vamos a contar el numero de niveles que hay en un objeto, cuanto sparticipantes tienen nivel bajo, cuantos medio y cuantos alto

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

let niveles = data.map((elemento) => elemento.level);
console.log(niveles); // creamos un array con los niveles de cada uno de los objetos en el array

let answer = niveles.reduce((acumulador, item) => {
  if (!acumulador[item]) {
    acumulador[item] = 1;
  } else {
    acumulador[item]++;
  }
  return acumulador;
}, {});

console.log(answer);

// EJERCICIO 3 RETO,
// contar cuantos numeros hay en un array pero en rango es decir
// cuantos numeros hay entre 1 y 5
// cuantos numeros hay entre 6 y 8
// cuantos numeros hay entre 9 y 10

let reto = [1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 9, 9, 9, 10, 10];

let repuestaReto = reto.reduce(
  (acumulador, numero) => {
    
    if (numero <= 5) {
      acumulador["1 a 5"]++;
    } else if (numero > 5 && numero <= 8) {
      acumulador["6 a 8"]++;
    } else if (numero > 8 && numero <= 10) {
      acumulador["9 a 10"]++;
    }

    return acumulador;
  },
  {
    "1 a 5": 0,
    "6 a 8": 0,
    "9 a 10": 0,
  }
);

console.log(repuestaReto);
