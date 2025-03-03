const request = require('sync-request');

const url = 'https://pcoding.ru/json/abiturs.json';
const response = request('GET', url);
const data = JSON.parse(response.getBody('utf8'));

// Сортировка по городам (по возрастанию) и по рейтингу (по убыванию)
data.sort((a, b) => {
    if (a.city === b.city) {
        return b.rating - a.rating; // По убыванию рейтинга
    }
    return a.city.localeCompare(b.city); // По возрастанию города
});

// Вывод отсортированного списка
data.forEach(abitur => {
    console.log(`Город: ${abitur.city}, Рейтинг: ${abitur.rating}, Фамилия: ${abitur.lastName}`);
});