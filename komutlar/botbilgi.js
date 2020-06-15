const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");
const db = require('quick.db');
const loglar = require('../loglar.json');
const ayarlar = require('../ayarlar.json')


exports.run = (client, message) => {
var prefix = ayarlar.prefix;

      
    let botadi = client.user.username;
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
	const istatistikozel = new Discord.RichEmbed()
    .setColor("006060")
  .setDescription(`${botadi} | İstatistik`)
  .addField("Sunucu Sayısı:", `${client.guilds.size.toLocaleString()}`, true)
  .addField("Kullanıcı Sayısı:", `${client.users.size}`, true)
  .addField("Toplam Kullanıcı Sayısı:", `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField("Kanal Sayısı:", `${client.channels.size.toLocaleString()}`, true)
  .addField("Çalışma Süresi:", `${duration}`, true)
  .addField("Gecikme:", `${client.ping}`, true)
  .addField("Bellek Kullanımı:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField("Discord.js Sürümü:", `${Discord.version}`, true)
  message.channel.send(istatistikozel)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['istatistik', 'istatistikler', 'botbilgi', 'bilgi', 'hakkında', 'bot hakkında', 'bothakkında'],
  kategori: "Bot",
  permLevel: 4
};

exports.help = {
  name: 'botbilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};