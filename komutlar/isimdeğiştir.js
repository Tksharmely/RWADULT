const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async (client, message, args) => {
var prefix = ayarlar.prefix;

   if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply(`bu komutu kullanmak için yetkin yok.`).then(message.delete(3000)).then(msg => {
    msg.delete(3000)
  })
  let isim = args.slice(1).join('');
  let kullanici = message.mentions.users.first();
  if(!kullanici) return message.reply(`:warning: Lütfen bir kullanıcı giriniz! **Kullanım:** \`${prefix}isimdeğiştir @${client.user.username}#${client.user.discriminator} <yeni isim>\``).then(message.delete(5000)).then(msg => {
    msg.delete(5000)
  })
  if(!isim) return message.reply(`:warning: Lütfen bir kullanıcı adı giriniz! **Kullanım:** \`${prefix}isimdeğiştir @${client.user.username}#${client.user.discriminator} <yeni isim>\``).then(message.delete(5000)).then(msg => {
    msg.delete(5000)
  })
  if(isim.length > 32) return message.reply(`:warning: Lütfen \`32\` karakteri geçmeyecek şekilde bir isim giriniz!`)
  message.guild.members.get(kullanici.id).setNickname(isim)
  message.channel.send(`:white_check_mark: Başarılı bir şekilde \`${kullanici.username}\` adlı kişinin kullanıcı adı \`${isim}\` olarak değiştirildi.`)
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['isimdegistir'],
    permLevel: 0
}

exports.help = {
    name: 'isimdeğiştir',
    description: 'Belirttiğiniz kullanıcının kullanıcı adını değiştirir.',
    usage: 'isimdeğiştir @kullanıcı <kullanıcı adı>'
}