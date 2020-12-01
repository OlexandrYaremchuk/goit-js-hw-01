const admin_password = "jqueryismyjam";
let message;
message = prompt("Введите пароль");
if (message === admin_password) {
  alert("Добро пожаловать!");
} else if (message === null) {
  alert("Отменено пользователем!");
} else {
  alert("Доступ запрещен, неверный пароль!");
}
