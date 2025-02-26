const { patch } = require('request');
const request = require('sync-request');
const url = 'https://pcoding.ru/txt/labrab04-3.txt';

// Получаем данные из URL
const response = request('GET', url);
const data = response.getBody('utf8');

// Разделяем данные по точке с запятой и извлекаем названия языков
const languages = data.split('\n');
const languagesName = languages.map(item => {
    const parts = item.split(';');
    return parts.length > 1 ? parts[1].trim() : null;
}).filter(name => name !== null);

languagesName.sort().forEach(element => {
    console.log(element);
});
