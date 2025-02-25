const fs = require('fs');

// Чтение JSON файла
fs.readFile('c:/Users/kiril/OneDrive/Desktop/SE23/04_json/colors.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Ошибка при чтении файла:', err);
    return;
  }

  try {
    const colorsArray = JSON.parse(data);

    // Извлечение названий цветов
    const colorNames = colorsArray.map(colorObj => Object.keys(colorObj)[0]);

    // Фильтрация коротких названий (менее 6 символов)
    const shortColorNames = colorNames.filter(name => name.length < 6);

    // Сортировка названий по алфавиту
    shortColorNames.sort();

    // Вывод результата на экран
    console.log(shortColorNames);
  } catch (parseError) {
    console.error('Ошибка при разборе JSON:', parseError);
  }
});