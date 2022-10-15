const letters = ["a", "b", "c"];
const newArray = [];
const newArrayWithMap = [];

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  newArray.push(element + "++");
}

letters.map((elemento) => {
  newArrayWithMap.push(elemento + "+++");
});

console.log("Original", letters);
console.log("New", newArray);
console.log(`New with Map ${newArrayWithMap}`);

// haciendolo con map
