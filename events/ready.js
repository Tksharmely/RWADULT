const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const fs = require('fs');
var prefix = ayarlar.prefix;
const bot = new Discord.Client();


module.exports = client => {
  console.log(`BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcı verisi bulunuyor!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  console.log(`Toplamda ${files.length} komut yüklendi.`);
})
client.user.setStatus("online");
client.user.setActivity(`RWADULT Bot in progress...`,"https://twitch.tv/rwadult");
}