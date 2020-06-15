const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
var prefix = ayarlar.prefix;


 if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send("Bu komutu kullanmak için yetkin yok.").then(message.delete(3000)).then(msg => {
    msg.delete(3000)
  });
 let herkes = message.guild.roles.find(a => a.name === "@everyone");

if (args[0] === "aç") {

   message.channel.send(`${message.channel} başarıyla açıldı.`);

  message.channel.overwritePermissions(herkes, {
        'SEND_MESSAGES': null,

});

  }
  if(args[0] === "kapat"){
  message.channel.overwritePermissions(herkes, {
        'SEND_MESSAGES': false,

});


message.channel.send(`${message.channel} kilitlendi. \nKanalı açmak için: \`${prefix}kanal aç\``);
  }
if (!args[0] ) {
  message.channel.send(`Bir girdi yapılmadı. Kanalı kilitlemek istiyorsan: \`${prefix}kanal kapat\``);
}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kilitle', 'sohbeti-kilitle'],
  permLevel: 0
};

exports.help = {
  name: 'kilit',
  description: 'Kanalı belirli süreliğine kilitler.',
  usage: ''
};
