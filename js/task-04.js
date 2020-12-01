const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let message = prompt("Какое количество дроидов вы хотите купить?");
let lastBalanse;

totalPrice = message * pricePerDroid;

if (totalPrice > credits) {
  alert("Недостаточно средств на счету!");
} else if (message === null) {
  alert("Отменено пользователем!");
} else {
  lastBalanse = credits - totalPrice;
  alert(
    `Вы купили ${message} дроидов, на счету осталось ${lastBalanse} кредитов.`
  );
}
