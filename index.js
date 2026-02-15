const TelegramBot = require('node-telegram-bot-api');

const token = "8568335725:AAFKSB4AjJGNYNT-0CMwf0DjL3FwHE_OF80";
const bot = new TelegramBot(token, { polling: true });

console.log("Bot running...");

function generateKey() {
  return "KR-" + Math.random().toString(36).substring(2, 10).toUpperCase();
}

bot.onText(/\/key1day/, (msg) => {
  const key = generateKey();
  bot.sendMessage(msg.chat.id, "🔑 KEY 1 DAY:\n" + key);
});

bot.onText(/\/key7day/, (msg) => {
  const key = generateKey();
  bot.sendMessage(msg.chat.id, "🔑 KEY 7 DAYS:\n" + key);
});

bot.onText(/\/key30day/, (msg) => {
  const key = generateKey();
  bot.sendMessage(msg.chat.id, "🔑 KEY 30 DAYS:\n" + key);
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Kayros Key Bot đang hoạt động 🔥\n\nDùng:\n/key1day\n/key7day\n/key30day");
});