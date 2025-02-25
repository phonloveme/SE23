const fs = require('fs');

// Чтение JSON файла
fs.readFile('c:/Users/kiril/OneDrive/Desktop/SE23/04_json/colors.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Ошибка при чтении файла:', err);
    return;
  }

  try {
    const colorsArray = JSON.parse(data);

    // Преобразование массива объектов
    const transformedColors = colorsArray.map(colorObj => {
      const colorName = Object.keys(colorObj)[0];
      const rgbValues = colorObj[colorName].slice(0, 3); // Извлечение первых трех элементов RGB
      return { color: colorName, rgb: rgbValues };
    });

    // Сортировка по названию цвета
    transformedColors.sort((a, b) => a.color.localeCompare(b.color));

    // Вывод результата на экран
    console.log(transformedColors);
  } catch (parseError) {
    console.error('Ошибка при разборе JSON:', parseError);
  }
});