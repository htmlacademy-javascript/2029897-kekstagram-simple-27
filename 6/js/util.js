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

// Длина строки
const checkLength = (line, maxlength) =>
  line.length <= maxlength;

checkLength('строка', 8);

// Нажатие Esc
const isEscapeKey = (evt) => evt.key === 'Escape';

export {isEscapeKey, generateRandomInt};
