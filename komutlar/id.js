const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
var prefix = ayarlar.prefix;

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu komutu kullanmak için yetkin yok.");
  let kişi = message.mentions.members.first()
  if(!kişi) return message.reply(`:warning: lütfen birisini etiketleyin! **Kullanım:** \`${prefix}id @${client.user.username}#${client.user.discriminator}\``)

  message.channel.send(`**İstediğiniz kişinin ID numarası:** **${kişi.id}**`);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["Id", "ıd", "ID"],
  permLevel: 0
};

exports.help = {
  name: "id",
  description: "Belirtilen Kişinin ID'sini Atar!",
  usage: "id"
};