const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
var prefix = ayarlar.prefix;

 if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Bu komutu kullanmak için yetkin yok.").then(message.delete(3000)).then(msg => {
    msg.delete(3000)
  });
  
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`unban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let banlog = await db.fetch(`banlog_${message.guild.id}`)
  if (!banlog) return message.reply(`Ban loglamak için kanal bulamıyorum. Ayarlamak için ${prefix}mod-log-ayarla <#kanal> komutunu kullanın.`).then(message.delete(10000)).then(msg => {
    msg.delete(10000)
  });
  if (reason.length < 1) return message.reply(`Ban kaldırma sebebini yazmalısın. _Kullanım: ${prefix}unban <ID> <sebep>_`);
  if (!user) return message.reply(`Banı kaldırılacak kişinin ID numarasını yazmalısın. _Kullanım: ${prefix}unban <ID> <sebep>_`).catch(console.error);
  message.guild.unban(user).then(() =>
  message.reply(`Kişinin banı kaldırıldı.`)
)
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Ban kaldırma')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  return guild.channels.get(banlog.id).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['bankaldır', 'ban-kaldır'],
  permLevel: 0
};

exports.help = {
  name: 'unban',
  description: 'İstediğiniz kişinin banını kaldırır.',
  usage: 'unban [kullanıcı] [sebep]'
};