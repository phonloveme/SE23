// Импортируем массивы из модуля data.js
const { colors, argb } = require('./data.js');

// Функция для преобразования RGB в шестнадцатеричный формат
function rgbToHex(rgbArray) {
  return rgbArray
    .slice(0, 3) // Берем только первые три элемента (R, G, B)
    .map(value => value.toString(16).padStart(2, '0')) // Преобразуем в шестнадцатеричный формат
    .join('');
}

// Создаем массив объектов с полями color и hex_name
const colorObjects = colors.map((colorName, index) => {
  const hexName = rgbToHex(argb[index]);
  return { color: colorName, hex_name: `#${hexName}` };
});

// Сортируем массив по возрастанию имени цвета
colorObjects.sort((a, b) => a.color.localeCompare(b.color));

// Выводим результат на экран
console.log(colorObjects);