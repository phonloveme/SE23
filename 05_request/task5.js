const request = require('sync-request');

// Загрузка данных
const url = 'https://pcoding.ru/txt/labrab04-3.txt';
const response = request('GET', url);
const data = response.getBody('utf8');

// Разделение данных на строки и преобразование в массив объектов
const lines = data.trim().split('\n');
const languages = lines.map(line => {
    const [percentage, lang] = line.split(';');
    const rating = parseFloat(percentage.replace(',', '.').replace('%', '')); // Преобразование в число
    return { rating, lang };
});

// Сортировка по убыванию рейтинга
languages.sort((a, b) => b.rating - a.rating);

// Вывод в две колонки
languages.forEach(({ rating, lang }) => {
    console.log(`${rating.toFixed(2)}%  ${lang}`);
});