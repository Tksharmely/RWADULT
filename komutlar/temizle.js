const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message, args) {
var prefix = ayarlar.prefix;

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bu komutu kullanmak için yetkin yok.").then(message.delete(2000)).then(msg => {
    msg.delete(2000)
  });
if(!args[0]) return message.reply(`lütfen silinecek mesaj miktarını yazın! Kullanım: _${prefix}temizle 0-99_`).then(m => m.delete(4000));
if(args[0] > 101) return message.reply(`tek seferde en fazla 100 mesaj silebilirim.`).then(m => m.delete(4000));
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`🚀 **${args[0]} adet mesajı sildim.**`).then(m => m.delete(10000))
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['temizle','sil','mesajsil','clear'],
  permLevel: 0
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};
