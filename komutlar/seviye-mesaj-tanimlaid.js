const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message, args) {
var prefix = ayarlar.prefix;
  let guild = message.guild
  let user = args[0];
  let mesaj = args[1];
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bu komutu kullanmak için yetkin yok.").then(message.delete(3000)).then(msg => {
    msg.delete(3000)
  });
  
if (!args[0]) return message.reply(`mesaj eklenecek kişiyi etiketleyin. Kullanım: _${prefix}seviyetanımla **<uye>** <tanımlanacak mesaj>_`).then(m => m.delete(15000));
if(!mesaj) return message.reply(`kişiye kaç mesaj ekleneceğini belirtin. Kullanım: _${prefix}seviyetanımla <uye> **<tanımlanacak mesaj>**_`).then(m => m.delete(15000));
   db.add(`mesajsayisi_${user}`, args[1])
  message.channel.send(`${args[1]} mesaj ${user} kişisine tanımlandı.`).then(m => m.delete(10000))
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['mesajverid'],
  permLevel: 0
};

exports.help = {
  name: 'seviyetanımlaid',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};
