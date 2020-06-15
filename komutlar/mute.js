const Discord = require("discord.js");
const ms = require("ms");
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix;
const db = require('quick.db');
const client = new Discord.Client();


var mutelirolu = "Susturulmuş" //MUTELENDİGİ ZAMAN VERİLECEK ROLU  BURAYA YAZINIZ...

module.exports.run = async (bot, message, args) => {
      if (!message.guild) {
        const ozelmesajuyari = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField('⚠️ **Uyarı** ⚠️', '`mute` **adlı komutu özel mesajlarda kullanamazsın.**')
        return message.author.sendEmbed(ozelmesajuyari);
    }
var prefix = ayarlar.prefix;

  const guild = message.guild.id;
   if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Bu komutu kullanmak için yetkin yok.").then(message.delete(3000)).then(msg => {
    msg.delete(3000)
  });
  let mutekisi = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!mutekisi) return message.reply(`Bir kullanıcı etiketleyiniz! **( \`${prefix}mute <@kullanıcı> <1sn/1dk/1saat/1gun>\` )**`)
  if(mutekisi.hasPermission("ADMINISTRATOR")) return message.reply(`Yetkili bir kişi belirtildi. Ne yazık ki bu kişiyi susturamam!`)
  //let muterol = guild.guild.roles.find(role => role.name === "Muted");
  let muterol = message.guild.roles.find(r => r.name === "Susturulmuş");
  if(!muterol){
    try{
      muterol = await message.guild.createRole({
        name: mutelirolu,
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterol, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  let mutezaman = args[1]
  .replace(`sn`, `s`)
  .replace(`dk`, `m`)
  .replace(`saat`, `h`)
  .replace(`gun`, `d`)

  if(!mutezaman) return message.reply(`Bir süre giriniz! **( \`${prefix}mute <@kullanıcı> <1sn/1dk/1saat/1gun>\` )**`)
  await(mutekisi.addRole(muterol.id));
  message.reply(`<@${mutekisi.id}> adlı kullanıcı **${args[1]}** süre boyunca **mutelendi!**`);
  setTimeout(function(){
    mutekisi.removeRole(muterol.id);
    message.channel.send(`**<@${mutekisi.id}>** adlı kullanıcısının mute süresi **sona erdi!** Susturulmuş rolü kişiden geri alındı. \n _Umarım bir daha kural ihlali gerçekleştirmezsin!_ `);
  }, ms(mutezaman));
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["sustur"],
    permLevel: 0
  };
  
  exports.help = {
    name: "mute",
    description: "Etiketlediğiniz kişiye belirttiğiniz süre kadar mute atar.",
    usage: "mute <@kullanıcı> <1sn/1dk/1sa/1g>"
  };