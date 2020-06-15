const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
const Canvas = require('canvas')
    , Image = Canvas.Image
    , Font = Canvas.Font
    , path = require('path');
const snekfetch = require('snekfetch');
const request = require('node-superfetch');
exports.run = async (client, message, args) => {
var prefix = ayarlar.prefix;

 if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Bu komutu kullanmak için yetkin yok.").then(message.delete(3000)).then(msg => {
    msg.delete(3000)
  })
  
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("006060")
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı', '`kick` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  const agla = "<:cry:719729906371788864>";
  let guild = message.guild;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let kicklog = await db.fetch(`mlog_${message.guild.id}`)
  if (!kicklog) return message.reply(`Kick loglamak için kanal bulamıyorum. Ayarlamak için ${prefix}mod-log-ayarla <#kanal> komutunu kullanın.`).then(message.delete(10000)).then(msg => {
    msg.delete(10000)
  });
  if (reason.length < 1) return message.reply(`sunucudan atılacak üye veya üyeyi sunucudan atma sebebi belirtilmedi. **Kullanım:** ${prefix}kick <kişi> <sebep>`).then(message.delete(10000)).then(msg => {
    msg.delete(10000)
  });
  if (message.mentions.users.size < 1) return message.reply(`sunucudan atılacak üye veya üyeyi sunucudan atma sebebi belirtilmedi. **Kullanım:** ${prefix}kick <kişi> <sebep>`).then(message.delete(10000)).then(msg => {
    msg.delete(10000)
  }).catch(console.error);
  if (!reason) reason = 'Neden belirtilmedi.'
  if (!message.guild.member(user).kickable) return message.reply('Yetkili bir kişi belirtildi.');

  message.guild.member(user).kick();
   const embedlog = new Discord.RichEmbed()
    .setColor("006060")
    .setTimestamp()
     .setDescription("**Yeni Kick Kaydı**")
    .addField('Kicklenen Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Kickleyen Yetkili:', `${message.author.username}#${message.author.discriminator}`)
     return message.channel.send(`[!] ${user.username}#${user.discriminator} (${user.id}), ${message.author.username} tarafından yasaklandı. ${agla}`).then(message => client.channels.get(kicklog).send(embedlog)).then(() => message.react('✅'));

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sunucudanat','kickle'],
  permLevel: 0
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kick [kullanıcı] [sebep]'
}; 
