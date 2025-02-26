const request = require('request');
const url = 'https://pcoding.ru/txt/labrab04-2.txt';

request(url, (error, response, body) => {
    // формируем список чисел из тела ответа сервера
    const lines = body.split('\n');
    // формируем из элементов списка lines вложенный списки с числами
    const arraysOfNumbers = lines.map(line => line.split(/\s+/).map(Number));

    // чекер нечетных строк
    let oddLinesCount = 0;

    for (const numbers of arraysOfNumbers) {
        if (numbers.every(num => num % 2 !== 0)) {
            oddLinesCount++;
        }
    }
    console.log(`Количество строк, где все числа нечетные: ${oddLinesCount}`)
})
