const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');

exports.run = (bot, message, args) =>
{
  let Discord = require('discord.js');
    var userlist = message.guild.fetchBans();
   userlist.then(collection =>
   {
     if(collection.first() == null)
     {
       const embed = new Discord.RichEmbed()
       .setTitle(`Sunucunuzda banlanan kişi bulunmamaktadır.`)
       .setColor("006060");
       message.channel.send({embed});
     }
     else
     {
       const embed = new Discord.RichEmbed()
       .setTitle("🚫 | Sunucunuzdan Banlanan Kullanıcılar")
       .setColor("006060");
       for(userlist of collection)
       {
           var user = userlist[1];
           embed.addField(` **${user.tag}**`, `_________ _____________`);
       }
       message.channel.send({embed});
     }
   });
 }
module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["banliste"],
  permLevel: 2
};
module.exports.help = {
  name: 'banlist',
  description: 'Sunucundan Banlanan üyeleri gösterir.',
  usage: 'banlist'
};