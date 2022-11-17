// Модуль отрисовки миниатюр
import {listPhoto} from './data.js';
const templatePicture = document.querySelector('#picture').content;
const pictureTemp = templatePicture.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();


listPhoto.forEach((element) => {
  const pictureElement = pictureTemp.cloneNode(true);
  const {url, comments, likes} = element;
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  fragment.appendChild(pictureElement);
});

picturesContainer.appendChild(fragment);
