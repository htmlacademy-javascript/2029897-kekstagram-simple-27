// Модуль отрисовки миниатюр
import {listPhoto} from './data.js';
const templatePicture = document.querySelector('#picture').content;
const pictureTemp = templatePicture.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

listPhoto.forEach((element) => {
  const pictureElement = pictureTemp.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = element.url;
  pictureElement.querySelector('.picture__comments').textContent = element.comments;
  pictureElement.querySelector('.picture__likes').textContent = element.likes;
  fragment.appendChild(pictureElement);
});

picturesContainer.appendChild(fragment);
