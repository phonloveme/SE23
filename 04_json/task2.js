const fs = require('fs');

// Чтение JSON файла
fs.readFile('c:/Users/kiril/OneDrive/Desktop/SE23/04_json/clients.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Ошибка при чтении файла:', err);
    return;
  }

  try {
    const clients = JSON.parse(data).clients;

    // Фильтрация клиентов, проживающих в Кунгуре
    const kungurClients = clients.filter(client => client.address.city === 'Кунгур');

    // Сортировка клиентов по полу, возрасту и имени
    kungurClients.sort((a, b) => {
      // Сортировка по полу (female -> male)
      if (a.gender !== b.gender) {
        return a.gender === 'female' ? -1 : 1;
      }
      // Сортировка по возрасту (по убыванию)
      if (a.age !== b.age) {
        return b.age - a.age;
      }
      // Сортировка по имени (по возрастанию)
      return a.name.localeCompare(b.name);
    });

    // Вывод результата на экран
    console.log(kungurClients);
  } catch (parseError) {
    console.error('Ошибка при разборе JSON:', parseError);
  }
});