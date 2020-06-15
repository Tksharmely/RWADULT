const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message, args) {
var prefix = ayarlar.prefix;
  let guild = message.guild
  let user = message.mentions.members.first()
  let mesaj = args[1];
  let yeniuye = "719791713337737276"; // Yeni Üye (0)
  let uye = "720266326353903647"; // Üye (2500)
  let aktifuye = "720266375012024334"; // Aktif Üye (7500)
  let taninmisuye = "720283406164033546"; // Tanınmış Üye (20.000)
  let sayginuye = "720298253756924037"; // Saygın Üye (60.000)
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bu komutu kullanmak için yetkin yok.").then(message.delete(3000)).then(msg => {
    msg.delete(3000)
  });
  
if(!user) return message.reply(`mesaj eklenecek kişiyi etiketleyin. Kullanım: _${prefix}seviyetanımla **<uye>** <tanımlanacak mesaj>_\nLütfen değer tanımlarken 2500 - 7500 - 20000 - 60000 sayılarını kullanın.`).then(m => m.delete(15000));
if(!mesaj) return message.reply(`kişiye kaç mesaj ekleneceğini belirtin. Kullanım: _${prefix}seviyetanımla <uye> **<tanımlanacak mesaj>**_\nLütfen değer tanımlarken 2500 - 7500 - 20000 - 60000 sayılarını kullanın.`).then(m => m.delete(15000));
  if(args[1] == 2500){  
  db.add(`mesajsayisi_${user.id}`, args[1])
  user.addRole(uye)
  user.removeRole(yeniuye)
  message.channel.send(`${args[1]} mesaj ${user} kişisine tanımlandı. | Üye rolü verildi.`).then(message.delete(3000)).then(m => m.delete(10000))
  }
  if(args[1] == 7500){  
  db.add(`mesajsayisi_${user.id}`, args[1])
  user.addRole(aktifuye)
  user.removeRole(uye)
  user.removeRole(yeniuye)
  message.channel.send(`${args[1]} mesaj ${user} kişisine tanımlandı. | Aktif Üye rolü verildi.`).then(message.delete(3000)).then(m => m.delete(10000))
  }
  if(args[1] == 20000){  
  db.add(`mesajsayisi_${user.id}`, args[1])
  user.addRole(taninmisuye)
  user.removeRole(aktifuye)
  user.removeRole(yeniuye)
  message.channel.send(`${args[1]} mesaj ${user} kişisine tanımlandı. | Tanınmış Üye rolü verildi.`).then(message.delete(3000)).then(m => m.delete(10000))
  }
  if(args[1] == 60000){  
  db.add(`mesajsayisi_${user.id}`, args[1])
  user.addRole(sayginuye)
  user.removeRole(taninmisuye)
  user.removeRole(yeniuye)
  message.channel.send(`${args[1]} mesaj ${user} kişisine tanımlandı. | Saygın Üye rolü verildi.`).then(message.delete(3000)).then(m => m.delete(10000))
  }
   if(args[1] < 2500){  
  message.channel.send(`Lütfen değer tanımlarken 2500 - 7500 - 20000 - 60000 sayılarını kullanın.`).then(message.delete(3000)).then(m => m.delete(10000))
  }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['mesajverrol'],
  permLevel: 0
};

exports.help = {
  name: 'seviyetanımlarol',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};
