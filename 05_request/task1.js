const request = require('request');
const url = 'https://pcoding.ru/txt/labrab04-1.txt';

request(url, (error, response, body) => {
    // формируем список чисел из тела ответа сервера
    const numbers = body.split(/\s+/).map(Number);
    // фильтруем только двухзначные числа и сразу ищем максимальное
    const maxTwoDigitNumbers = Math.max(...(numbers.filter(num => num >= 10 && num < 100)));
    console.log(`Максимальное двухзначное число: ${maxTwoDigitNumbers}`);
}) 
