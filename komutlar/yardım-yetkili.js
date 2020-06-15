const Discord = require('discord.js')
const db = require('quick.db');
var ayarlar = require('../ayarlar.json');
//var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
      let botadi = client.user.username;
  let prefix = await db.fetch(`prefix_${message.guild.id}`);
  let p_prefix;
  if (prefix == null) p_prefix = ayarlar.prefix
  else p_prefix = `${prefix}` 
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.channel.send("Yetkili yardım menüsünü görüntülemek için yetkin yok.").then(message.delete(3000)).then(msg => {
    msg.delete(3000)})

  let p = 'r!'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("006060")
  .setDescription(`[**RWA**]`)
  .setThumbnail(client.user.avatarURL)
  .addField(`Yetkili Komutları`,`:white_small_square: \`${p_prefix}kick\` Sunucudan atar. \n:white_small_square: \`${p_prefix}forceban\`: Girdiğiniz ID ile kişiyi banlar. \n:white_small_square: \`${p_prefix}ban\`: Kişiyi etiket ile banlarsınız. \n:white_small_square: \`${p_prefix}unban\`: Banlanan kişinin yasaklamasını kaldırır. \n:white_small_square: \`${p_prefix}banlist\`: Banlanmış kişileri gösterir. \n:white_small_square: \`${p_prefix}mute\`: Belirtilen süre boyunca kişiyi susturur. \n:white_small_square: \`${p_prefix}reklam-taraması\`: Sunucuda reklam taraması yapar. \n:white_small_square: \`${p_prefix}yavaşmod\`: Yavaş modu açar.\n:white_small_square: \`${p_prefix}temizle\`: 0-99 mesaj siler.\n:white_small_square: \`${p_prefix}kilit\`: kapat/aç komutları ile yazdığınız kanalı kapatır ya da açarsınız. \n:white_small_square: \`${p_prefix}id\`: Belirtilen kişinin IDsini verir. \n:white_small_square: \`${p_prefix}emojiekle\`: Belirtilen URL ve emoji adı ile sunucuya emoji ekler.`)
   return message.channel.send(embed)    
       
  }
   
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yetkilihelp','yetkiliyardim','adminyardım'],
  permlevel: 0
};

exports.help = {
  name: 'yetkiliyardım',
  description: 'yetkiliyardimc',
  usage: 'yardım'
};