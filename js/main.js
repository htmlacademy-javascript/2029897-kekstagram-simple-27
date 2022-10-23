/* eslint-disable no-console */
/* Случайное число */
const generateRandomInt = (min,max) => {
  if (min < 0 || max < 0 || min === max) {
    return NaN;}

  if (min > max) {
    const swap = max;
    max = min;
    min = swap;
  }

  return Math.floor (Math.random() * (max + 1 - min) + min);
};

generateRandomInt(1,10);

// длина строки
const checkLength = (line, maxlength) =>
  line.length <= maxlength;


checkLength('строка',6);


const DESCRIPTIONS = [
  'Наше фото',
  'Мое фото',
  'Общее фото',
  'Неудачное фото',
  'Лучшее фото',
  'Фото',
  'Главное фото'
];

// массивы с числами от 1 до 25
const NUMBER_ID = [];
const NUMBER_URL = [];
for (let i = 1; i <= 25; i++) {
  NUMBER_ID.push(i);
  NUMBER_URL.push(i);}

const createFoto = () => {
  const idNumber = NUMBER_ID.shift();
  const UrlNumber = NUMBER_URL.shift();
  const randomDescriptionNumber = generateRandomInt(0, DESCRIPTIONS.length - 1);
  const randomIikesNumber = generateRandomInt(15,200);
  const randomCommentsNumber = generateRandomInt(0,200);


  return {
    id: idNumber,

    url: `photos/${ UrlNumber }.jpg`,

    description: DESCRIPTIONS[randomDescriptionNumber],

    likes: randomIikesNumber,

    comments: randomCommentsNumber
  };
};

const listFoto = Array.from({length: 25}, createFoto);
console.log(listFoto);
