import { galleryItems } from "./gallery-items.js";
// Change code below this line
const paletteContainer = document.querySelector(".gallery"); //Шаг 2. получаем ссылку на контейнер с палетками ul на класс gallery, который мы посмотрели в html
const cardsMarkup = createImagesCardsMarkup(galleryItems);
paletteContainer.insertAdjacentHTML("beforeend", cardsMarkup); //Шаг 3. вставляем в HTML в ul перед концом нашу карточную разметку и появляются картинки в палетке

//Шаг 1. создаем функцию, которая перебирает массив методом map. Она должна вернуть нам не просто наши картинки с аргументами preview, original, description, а еще и вставить их в данную в условии задачи разметку. Добавляе метод join для того, чтобы собрать разметку
function createImagesCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
  <a class="gallery__link" data-lightbox="modal" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt= "${description}"
    />
  </a>
</li>`;
    })
    .join("");
}
//Шаг 4 вешаем слушателей на клик:

paletteContainer.addEventListener("click", onPaletterContainerClick);
function onPaletterContainerClick(evt) {
  evt.preventDefault();
  const isImageSwatchEl = evt.target.classList.contains("gallery__image");
  if (!isImageSwatchEl) {
    return;
  }

  //Делаем Модальное окно. Разметка для img. Правильно прописываем путь в src

  const bigImage = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

  bigImage.show();

  //Закрытие модального окна ESC
  document.addEventListener("keydown", (e) => closeModalWindow(e, bigImage));

  function closeModalWindow(e, modalWindow) {
    if (e.code === "Escape") {
      modalWindow.close();
      e.preventDefault;
      document.removeEventListener("keydown", closeModalWindow);
    }
  }
}
