"https://api.telegram.org/bot7092800327:AAE15j0lFrEenqn8jwj-zLw5E6HTiMJQWng/getUpdates";

let TOKEN = "7092800327:AAE15j0lFrEenqn8jwj-zLw5E6HTiMJQWng";
let CHAT_ID = "2016554248";
let URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

let success = document.getElementById("success");

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let message = `<b><i>Заявка с сайта</i></b>\n`;
    message += `<b>Отправитель:</b> ${this.name.value}\n`;
    message += `<b>Номер:</b> ${this.number.value}\n`;
    message += `<b>Почта:</b> ${this.email.value}`;
    console.log(message);
    axios
      .post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .then((res) => {
        this.name.value = "";
        this.number.value = "";
        this.email.value = "";
        success.innerHTML = "Сообшение отправлено!";
        success.style.display = "block";
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => console.log("Successfully"));
});


// ! Aysha
// ? Azamjon
// * Abdullokh

//TODO 27.09.2024
// 20:30