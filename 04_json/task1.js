const fs = require('fs');

// Чтение JSON файла
fs.readFile('c:/Users/kiril/OneDrive/Desktop/SE23/04_json/users.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Ошибка при чтении файла:', err);
    return;
  }

  try {
    const users = JSON.parse(data);

    // Фильтрация пользователей, живущих в южном полушарии
    const southernHemisphereUsers = users.filter(user => {
      const lat = parseFloat(user.address.geo.lat);
      return lat < 0; // Проверка, что широта меньше 0
    });

    // Преобразование массива, оставляя только поля username и city
    const transformedUsers = southernHemisphereUsers.map(user => ({
      username: user.username,
      city: user.address.city
    }));

    // Сортировка массива по названию города в обратном порядке
    transformedUsers.sort((a, b) => b.city.localeCompare(a.city));

    // Вывод результата на экран
    console.log(transformedUsers);
  } catch (parseError) {
    console.error('Ошибка при разборе JSON:', parseError);
  }
});