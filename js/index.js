const first = prompt("Назвіть число");

console.log(first);

const second = prompt("Назвіть друге число");

console.log(second);

const operator = prompt("Яку дію зробити");

if (operator == "+") {
  console.log(+first + +second);
}
