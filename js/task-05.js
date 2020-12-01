const china = "китай";
const chili = "чили";
const australia = "австралия";
const india = "индия";
const jamaica = "ямайка";
let price;
let messageResultCountry;
let messageCountry = prompt("В какую страну необходимо доставить товар?");
messageCountry = messageCountry.toLowerCase();

switch (messageCountry) {
  case china:
    price = 100;
    messageResultCountry = "в Китай";
    break;
  case chili:
    price = 250;
    messageResultCountry = "в Чили";
    break;
  case australia:
    price = 170;
    messageResultCountry = "в Австралию";
    break;
  case india:
    price = 80;
    messageResultCountry = "в Индию";
    break;
  case jamaica:
    price = 120;
    messageResultCountry = "на Ямайку";
    break;

  default:
    alert("В вашей стране доставка не доступна.");
}
alert(`Доставка ${messageResultCountry} будет стоить ${price} кредитов`);

// if (
//   messageCountry === china ||
//   messageCountry === chili ||
//   messageCountry === australia ||
//   messageCountry === india ||
//   messageCountry === jamaica
// ) {
//   alert(messageResult);
// } else {
//   alert("В вашей стране доставка не доступна.");
// }
