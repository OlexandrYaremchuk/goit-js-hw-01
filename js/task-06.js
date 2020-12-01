const userInput;
let total = 0;

do {
  userInput = prompt("Введите число");
  userInput = Number(userInput);
  total += userInput;
  console.log(userInput);
} while (userInput !== 0);
alert(`Общая сумма чисел равна ${total}`);
