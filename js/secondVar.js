let cards = [
  {
    img: "https://ugra.ru/pics-i.pinimg.com/originals/a9/77/c1/a977c1520b344f69ee7a94c5c39f37ab.jpg",
    title: "PC",
    date: "23.04.2023",
    category: "pc",
  },
  {
    img: "https://ugra.ru/pics-i.pinimg.com/originals/a9/77/c1/a977c1520b344f69ee7a94c5c39f37ab.jpg",
    title: "PC",
    date: "23.04.2023",
    category: "pc",
  },
  {
    img: "https://ugra.ru/pics-i.pinimg.com/originals/a9/77/c1/a977c1520b344f69ee7a94c5c39f37ab.jpg",
    title: "PC",
    date: "23.04.2023",
    category: "pc",
  },
  {
    img: "https://img.tehnomaks.ru/img/prod/full/1660706020623.jpg",
    title: "Laptop",
    date: "23.04.2023",
    category: "laptop",
  },
  {
    img: "https://img.tehnomaks.ru/img/prod/full/1660706020623.jpg",
    title: "Laptop",
    date: "23.04.2023",
    category: "laptop",
  },
  {
    img: "https://img.tehnomaks.ru/img/prod/full/1660706020623.jpg",
    title: "Laptop",
    date: "23.04.2023",
    category: "laptop",
  },
  {
    img: "https://oxsy.ru/wp-content/uploads/2023/01/maxresdefault.jpg",
    title: "Phone",
    date: "23.04.2023",
    category: "phone",
  },
  {
    img: "https://oxsy.ru/wp-content/uploads/2023/01/maxresdefault.jpg",
    title: "Phone",
    date: "23.04.2023",
    category: "phone",
  },
  {
    img: "https://oxsy.ru/wp-content/uploads/2023/01/maxresdefault.jpg",
    title: "Phone",
    date: "23.04.2023",
    category: "phone",
  },
  {
    img: "https://cdn.vox-cdn.com/thumbor/CCfHhrWGoa3slXnZnbuW2G_P5mQ=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/69860885/DSCF7769.0.jpg",
    title: "Tablet",
    date: "23.04.2023",
    category: "tablet",
  },
  {
    img: "https://cdn.vox-cdn.com/thumbor/CCfHhrWGoa3slXnZnbuW2G_P5mQ=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/69860885/DSCF7769.0.jpg",
    title: "Tablet",
    date: "23.04.2023",
    category: "tablet",
  },
  {
    img: "https://cdn.vox-cdn.com/thumbor/CCfHhrWGoa3slXnZnbuW2G_P5mQ=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/69860885/DSCF7769.0.jpg",
    title: "Tablet",
    date: "23.04.2023",
    category: "tablet",
  },
];
/* Сейчас здесь всего 3-и объекта каждой категории */

/* Селекторы */
const containerPC = document
  .querySelector("#pc")
  .querySelector(".category-product");

const containerLaptop = document
  .querySelector("#laptop")
  .querySelector(".category-product");

const containerPhone = document
  .querySelector("#phone")
  .querySelector(".category-product");

const containerTablet = document
  .querySelector("#tablet")
  .querySelector(".category-product");

/* Цикл по всем полученным объектам */
cards.forEach((element) => {
  /* Create HTML. Если планируем только подгружать динамически можно сразу обрабатывать текст даты через метод */
  let html = `
  <!-- card -->
  <div class="product-card">
    <div class="card__img">
      <img src="${element.img}" alt="Product Card" />
    </div>

    <div class="card-desc">
      <h2 class="title-2">${element.title}</h2>
      <span class="card-desc__info"
        >${element.date}</span
      >
    </div>

    <button class="card__btn">Купить</button>
  </div>
  <!-- //card -->
  `;

  /* Добавляем в определенные категории */
  switch (element.category) {
    case "pc":
      containerPC.insertAdjacentHTML("beforeend", html);
      break;

    case "laptop":
      containerLaptop.insertAdjacentHTML("beforeend", html);
      break;

    case "phone":
      containerPhone.insertAdjacentHTML("beforeend", html);
      break;

    case "tablet":
      containerTablet.insertAdjacentHTML("beforeend", html);
      break;

    default:
      break;
  }
});
