const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {
var prefix = ayarlar.prefix;

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('⚠️ **Uyarı**', '`rol-ver` **adlı komutu özel mesajlarda kullanamazsın.**')
  return message.author.send(ozelmesajuyari); }
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Bu komutu kullanmak için yetkin yok.").then(message.delete(3000)).then(msg => {
    msg.delete(3000)
  });
  let guild = message.guild
  let rol = message.mentions.roles.first()  
  let user = message.mentions.members.first() 

  if (!user) return message.reply(`kime rol vereceğimi yazmadın. **Kullanım Şekli:** ${prefix}rol-ver [kullanıcı] [@rol]`).catch(console.error);
  if (rol.length < 1) return message.reply(`verilecek rolü belirtmedin. **Kullanım Şekli:** ${prefix}rol-ver [kullanıcı] [@rol]`);
user.addRole(rol);
    const embed = new Discord.RichEmbed()
        .setDescription(`${user} kullanıcısına başarıyla ${rol} rolü verildi!`)
        .setFooter('Test', client.user.avatarURL)
        .setColor("006060")
        .setTimestamp()
    message.channel.send({ embed })

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rol-ver',
  description: 'İstediğiniz kişiyi istediğiniz rolü verir.',
  usage: 'rol-ver [kullanıcı] [@rol]'
};