const request = require('sync-request');

// Функция для парсинга данных
function parseData(data) {
    return data.trim().split('\n').map(line => {
        const [rating, language] = line.split(';');
        return { rating: parseFloat(rating), language: language.trim() };
    });
}

// Функция для сортировки данных по убыванию рейтинга
function sortLanguages(languages) {
    return languages.sort((a, b) => b.rating - a.rating);
}

// Функция для вывода данных
function displayLanguages(languages) {
    languages.forEach(({ rating, language }) => {
        console.log(`${rating.toFixed(2)}% - ${language}`);
    });
}

// Получение данных с URL
const response = request('GET', 'https://pcoding.ru/txt/labrab04-3.txt');
const data = response.getBody('utf8');

// Основной процесс
const languages = parseData(data);
const sortedLanguages = sortLanguages(languages);
displayLanguages(sortedLanguages);