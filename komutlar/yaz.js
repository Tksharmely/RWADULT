const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {
  var prefix = ayarlar.prefix;
   if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Bu komutu kullanmak için yetkin yok.").then(message.delete(3000)).then(msg => {
    msg.delete(3000)
  });
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply(`yazılacak bir şey girmedin. _Kullanım: ${prefix}yaz <yazı>_`);
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['botayazdır','botayazdir'],
  permLevel: 0
};

exports.help = {
  name: 'yaz',
  description: '[Admin Komutu]',
  usage: 'yaz-bot [yazdırmak istediğiniz şey]'
};