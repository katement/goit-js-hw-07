import { galleryItems } from "./gallery-items.js";
// Change code below this line

const paletteContainer = document.querySelector(".gallery"); //Шаг 2. получаем ссылку на контейнер с палетками ul на класс gallery, который мы посмотрели в html
const cardsMarkup = createImagesCardsMarkup(galleryItems);
paletteContainer.insertAdjacentHTML("beforeend", cardsMarkup); //Шаг 3. вставляем в HTML в ul перед концом нашу карточную разметку и появляются картинки в палетке

//Шаг 1. создаем функцию, которая перебирает массив методом map. Она должна вернуть нам не просто наши картинки с аргументами preview, original, description, а еще и вставить их в данную в условии задачи разметку. Добавляе метод join для того, чтобы собрать разметку
function createImagesCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt= "${description}" />
   </a>
</li>`;
    })
    .join("");
}
//Лайтбокс
const simpleLightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});
