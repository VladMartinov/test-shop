/* Все элементы необходимые для работы */
const themeBtn = document.querySelector(".thememode__btn");
const body = document.querySelector("body");

const cardsDate = document.querySelectorAll(".card-desc__info");
const cardBtn = document.querySelectorAll(".card__btn");

const form = document.querySelector(".form");
const purchaseForm = document.querySelector(".purchase-form");
const buyFormBtn = document.querySelector("#btn-buy");
const closeFormBtn = document.querySelector("#btn-close");

const backTopBtn = document.querySelector("#backtop");

// Показ или скрытие page Nav
document.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    backTopBtn.classList.remove("visually-hidden");
  } else {
    backTopBtn.classList.add("visually-hidden");
  }
});

/* Метод конвертации даты в человекопонятную форму */
function getDayInfo(date) {
  splitedDate = date.split(".");
  date = `${splitedDate[1]}.${splitedDate[0]}.${splitedDate[2]}`;

  let utcDate = new Date(date)
    .toLocaleString("ru", {
      dateStyle: "full",
    })
    .toString()
    .split(" ");

  let dayName = utcDate[0].charAt(0).toUpperCase() + utcDate[0].slice(1);
  let monthName = utcDate[2].charAt(0).toUpperCase() + utcDate[2].slice(1);

  let weekNum = Math.trunc(+date.split(".")[1] / 7) + 1;

  let formatedDate = `${dayName} ${weekNum} неделя ${monthName} ${utcDate[3]} года`;
  return formatedDate;
}

/* Обработка даты каждой карточки.*/
cardsDate.forEach((element) => {
  element.textContent = getDayInfo(element.textContent);
});

/* Переключатель темы */
themeBtn.addEventListener("click", () => {
  themeBtn.classList.toggle("active");
  body.classList.toggle("activeDark");
});

/* Обработка кликов по кновки "Купить" в карточке */
cardBtn.forEach((element) => {
  element.addEventListener("click", () => {
    purchaseForm.classList.add("active");
  });
});

/* Обработка успешной отправки формы */
form.addEventListener("submit", function (e) {
  alert("Товар успешно куплен!");
  purchaseForm.classList.remove("active"); // Если нужно закрывать форму после удачного submit
  e.preventDefault();
});

/* Обработка нажатия кноки закрытия формы */
closeFormBtn.addEventListener("click", () => {
  purchaseForm.classList.remove("active");
});
