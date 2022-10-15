const letters = ["a", "b", "c"];

// manera antigua con un for
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log("for", element);
}

// NUEVA MANERA CON FOREACH

letters.forEach((element) => console.log("forEach " + element));
