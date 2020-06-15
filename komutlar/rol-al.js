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
            .addField('⚠️ **Uyarı** ⚠️', '`rol-al` **adlı komutu özel mesajlarda kullanamazsın.**')
        return message.author.sendEmbed(ozelmesajuyari);
    }
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Bu komutu kullanmak için yetkin yok.").then(message.delete(3000)).then(msg => {
    msg.delete(3000)
  });
    let guild = message.guild
    let rol = message.mentions.roles.first()
    let user = message.mentions.members.first()

    if (!user) return message.reply(`kimden rol alınacağını yazmadın. **Kullanım Şekli:** ${prefix}rol-al [kullanıcı] [@rol]`).catch(console.error);
    if (rol.length < 1) return message.reply(`**Rolü belirtmedin** **Kullanım Şekli:** ${prefix}rol-al [kullanıcı] [@rol]`);
    user.removeRole(rol);
    const embed = new Discord.RichEmbed()
        .setDescription(`${user} kullanıcısından başarıyla ${rol} rolü alındı!`)
        .setFooter('by Tksharmely', client.user.avatarURL)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send({ embed })
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['rolal'],
    permLevel: 0
};

exports.help = {
    name: 'rol-al',
    description: 'İstediğiniz kişiden istediğiniz rolü alır.',
    usage: 'rol-al [kullanıcı] [@rol]'
};