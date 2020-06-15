const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');

exports.run = (client, message, args) => {
var prefix = ayarlar.prefix;

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu komutu kullanmak için yetkin yok.").then(message.delete(3000)).then(msg => {
    msg.delete(3000)
  })
    let mesajid = args[0];
    let yenimesaj = args.slice(1).join(' ');
  if (!args[0]) {
return message.channel.send(`Editlenecek mesajın IDsini girmedin. **Kullanım:** ${prefix}botedit **<Mesaj ID>** <Yeni Mesaj>`).then(message.delete(10000)).then(msg => {
    msg.delete(10000)
  })
  }
    if (!yenimesaj[0]) {
return message.channel.send(`Editlenecek mesajın yerini alacak içeriği girmedin. **Kullanım:** ${prefix}botedit <Mesaj ID> **<Yeni Mesaj>**`).then(message.delete(10000)).then(msg => {
    msg.delete(10000)
  })
  }
    message.channel.fetchMessages({ around: mesajid, limit: 1 })
        .then(msg => {
            const mesaj = msg.first();
            mesaj.edit(yenimesaj);
            message.react('✅')
        });
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['botmesaj'],
    permLevel: 0
};

exports.help = {
    name: 'botedit',
    description: 'Botun attığı mesajı editler',
    usage: 'edit [mesaj id] [yazacağınız şey]'
};