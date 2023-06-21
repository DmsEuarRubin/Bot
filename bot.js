const mineflayer = require('mineflayer');

// Создаем бота
const bot = mineflayer.createBot({
  host: 'localhost',  // IP-адрес или хост игрового сервера
  port: 25565,       // Порт игрового сервера
  username: 'Bot'    // Имя бота
});

// Подключение к серверу Minecraft
bot.on('spawn', () => {
  // Отправляем сообщение в чат
  bot.chat('Привет, я бот Minecraft!');
});

// Обработка сообщений в чате
bot.on('chat', (username, message) => {
  if (username !== bot.username) {
    // Отвечаем на сообщение в чате
    bot.chat(`Привет, ${username}! Я бот Minecraft. Ты написал: "${message}"`);
  }
});