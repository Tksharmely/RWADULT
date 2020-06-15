const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {
  var prefix = ayarlar.prefix;

      if (!message.guild) {
        const ozelmesajuyari = new Discord.RichEmbed()
            .setColor("006060")
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField('⚠️ **Uyarı** ⚠️', `**\`snipe\`**adlı komutu özel mesajlarda kullanamazsın.**`)
        return message.author.sendEmbed(ozelmesajuyari);
}
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Bu komutu kullanmak için yetkin yok.").then(message.delete(3000)).then(msg => {
    msg.delete(3000)
  });
let silinenmesaj = db.get(`silinenmesaj_${message.channel.id}`)
if(!silinenmesaj) return message.channel.send(`:x: Bu kanalda önceden bir mesaj silinmemiş.`)
const embed = new Discord.RichEmbed()
 .setColor('006060')
 .setAuthor(`En son `+client.users.get(silinenmesaj.sahip).tag + ` tarafından mesaj silindi.`, client.users.get(silinenmesaj.sahip).avatarURL)
 .addField(`Son Silinen Mesaj İçeriği`, silinenmesaj.mesaj)
 .setTimestamp(silinenmesaj.tarih) 
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: ['sonsilinenmesaj','awp'],
 permLevel: 0
};

exports.help = {
 name: 'snipe',
 description: 'Son silinen mesajı gösterir.',
 usage: 'snipe'
};