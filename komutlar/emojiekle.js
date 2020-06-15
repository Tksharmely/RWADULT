const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {
var prefix = ayarlar.prefix;

  let log = db.fetch(`mlog_${message.guild.id}`)
  if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send("Bu komutu kullanmak için yetkin yok.").then(message.delete(3000)).then(msg => {
    msg.delete(3000)
  })
    let link = args[0]
    let isim = args[1];
    let guild = message.guild;
    if (!link) return message.channel.send(`Emojinin alınacağı linki girmelisin. **Kullanım:** ${prefix}emojiekle **<link>** <emoji ismi> (İsminde Türkçe karakter bulundurmayın.)`).then(message.delete(5000)).then(message.delete(5000)).then(msg => {
    msg.delete(5000)
  })
    if (!isim) return message.channel.send(`Emojinin ismini belirlemedin yada Türkçe karakter belirtildi. **Kullanım:** ${prefix}emojiekle <link> **<emoji ismi>** (İsminde Türkçe karakter bulundurmayın.)`).then(message.delete(5000)).then(msg => {
    msg.delete(5000)
  })

			var embedlog = new Discord.RichEmbed()
			.setAuthor(message.author.tag, message.author.avatarURL)
			.setColor('b24040')
			.setDescription(`${message.author.username}#${message.author.discriminator} tarafından **\`${isim}\`** ismiyle yeni bir emoji oluşturuldu.`)
			.setFooter(`RWADULT | ID: ${message.id}`)
      .setTimestamp();
    guild.createEmoji(`${link}`, `${isim}`)
        .then(emoji => 
         message.channel.send(`${message.author.username}#${message.author.discriminator} tarafından **\`${isim}\`** ismiyle yeni bir emoji oluşturuldu.`)).then(message.delete(5000)).then(msg => {
    msg.delete(5000)
  })
          if (log !== null){client.channels.get(log).send(embedlog)}
         message.react('✅')
        .catch(console.error);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['addemoji', 'emoji-ekle'],
    permLevel: 0
}
exports.help = {
    name: 'emojiekle',
    description: 'Sunucuya emoji eklersiniz',
    usage: 'emojiekle <link> <isim>',
}