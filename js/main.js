
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

const createPhoto = (_elem, id) => {
  const idNumber = ++id;
  const randomDescriptionNumber = generateRandomInt(0, DESCRIPTIONS.length - 1);
  const randomIikesNumber = generateRandomInt(15,200);
  const randomCommentsNumber = generateRandomInt(0,200);

  return {
    id: idNumber,

    url: `photos/${ idNumber}.jpg`,

    description: DESCRIPTIONS[randomDescriptionNumber],

    likes: randomIikesNumber,

    comments: randomCommentsNumber
  };
};

const listPhoto = Array.from({length: 25}, createPhoto);
console.log(listPhoto);
