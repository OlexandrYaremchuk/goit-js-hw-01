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
    alert(`Доставка ${messageResultCountry} будет стоить ${price} кредитов`);

    break;
  case chili:
    price = 250;
    messageResultCountry = "в Чили";
    alert(`Доставка ${messageResultCountry} будет стоить ${price} кредитов`);

    break;
  case australia:
    price = 170;
    messageResultCountry = "в Австралию";
    alert(`Доставка ${messageResultCountry} будет стоить ${price} кредитов`);

    break;
  case india:
    price = 80;
    messageResultCountry = "в Индию";
    alert(`Доставка ${messageResultCountry} будет стоить ${price} кредитов`);

    break;
  case jamaica:
    price = 120;
    messageResultCountry = "на Ямайку";
    alert(`Доставка ${messageResultCountry} будет стоить ${price} кредитов`);

    break;

  default:
    alert("В вашей стране доставка не доступна.");
    break;
}

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
