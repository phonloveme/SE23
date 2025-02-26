const request = require('request');
const url = 'https://pcoding.ru/txt/labrab04-2.txt';

// Выполняем HTTP-запрос к указанному URL
request(url, (error, response, body) => {
    // Разбиваем тело ответа на строки
    const lines = body.split('\n');

    // Преобразуем каждую строку в массив чисел
    const arraysOfNumbers = lines.map(line => line.split(/\s+/).map(Number));

    // Инициализируем переменные для отслеживания наибольшей суммы нечётных чисел и её индекса
    let maxOddSum = 0;
    let maxOddSumIndex = -1;

    // Проходим по каждому массиву чисел
    arraysOfNumbers.forEach((numbers, index) => {
        // Вычисляем сумму нечётных чисел в текущей строке
        const oddSum = numbers.reduce((sum, num) => num % 2 !== 0 ? sum + num : sum, 0);

        // Обновляем максимальную сумму и индекс, если текущая сумма больше
        if (oddSum > maxOddSum) {
            maxOddSum = oddSum;
            maxOddSumIndex = index;
        }
    });
    console.log(`Индекс строки с самой большой суммой нечётных чисел: ${maxOddSumIndex}`);
});
