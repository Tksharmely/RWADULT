const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message, args) {
var prefix = ayarlar.prefix;
  let guild = message.guild
  let user = message.mentions.members.first()
    let yeniuye = "719791713337737276"; // Yeni Üye (0)
    let uye = "720266326353903647"; // Üye (2500)
    let aktifuye = "720266375012024334"; // Aktif Üye (7500)
    let taninmisuye = "720283406164033546"; // Tanınmış Üye (20.000)
    let sayginuye = "720298253756924037"; // Saygın Üye (60.000)
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bu komutu kullanmak için yetkin yok.").then(message.delete(3000)).then(msg => {
    msg.delete(3000)
  });
  
if(!user) return message.reply(`lütfen sıfırlanacak kullanıcıyı etiketleyin. Kullanım: _${prefix}seviyesıfırla <uye>_`).then(m => m.delete(15000));
   db.delete(`mesajsayisi_${user.id}`)

  user.addRole(yeniuye)
  user.removeRole(uye)
  user.removeRole(aktifuye)
  user.removeRole(taninmisuye)
  user.removeRole(sayginuye)
  message.channel.send(`Sıfırladım.`).then(m => m.delete(10000))
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'seviyesıfırla',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};
