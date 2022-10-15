//REDUCE
//array.reduce((acumulador, item)=> "bloque que queremos ejecutar", estado inicial o valor inicial del acumulador aunque este es opcional)

const totals = [1, 2, 3, 4, 5];

let ejemploReduce = totals.reduce((acumulador, item) => acumulador + item);

console.log(ejemploReduce);
