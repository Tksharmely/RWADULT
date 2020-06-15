//---Bu Kod komutlar klasörüne atılacak atılacaktır.
//CodeMareFi tarafından hazırlanmıştır - - - Ekleyen //Sadista

const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {


      if (!message.guild) {
        const ozelmesajuyari = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField('⚠️ **Uyarı** ⚠️', '`mesajlogayarla` **adlı komutu özel mesajlarda kullanamazsın.**')
        return message.author.sendEmbed(ozelmesajuyari);
    }
  const evet = client.emojis.get("719723349370077255");
  const hayir = client.emojis.get("719723413039480872");
  var prefix = ayarlar.prefix;

 if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Bu komutu kullanmak için yetkin yok.").then(message.delete(3000)).then(msg => {
    msg.delete(3000)
  });  
  let mlog = message.mentions.channels.first()
  let sıfırla = db.fetch(`mlog_${message.guild.id}`)

if(args[0] === "sıfırla") {
    if(!sıfırla) {
      message.channel.send(new Discord.RichEmbed()
      .setDescription(`${hayir} | Mod Log Kanalı zaten ayarlı değil.`)
      .setColor("RED"))                     
      return
    }
    
    db.delete(`mlog_${message.guild.id}`)
    message.channel.send(new Discord.RichEmbed()
     .setDescription(`${evet} | Mod Log Kanalı başarıyla sıfırlandı.`)
      .setColor("GREEN"))                   
    return
  }
  
  if (!mlog) {
  let varmiyokmu = db.fetch(`mlog_${message.guild.id}`)
  let varmiyokmu2;
    
  if (varmiyokmu == null) varmiyokmu2 = `Ayarlanmamış`;
    else varmiyokmu2 = `Ayarlanmış`
    return message.channel.send(new Discord.RichEmbed()
     .setDescription(`${hayir} | [Mod Log: ${varmiyokmu2}] \nLog kanalı ayarlamak için kanalı etiketlemelisin. **Kullanım:** _${prefix}mod-log-ayarla #kanal_`)
    .setColor("RED"))                          
  }
  
  db.set(`mlog_${message.guild.id}`, mlog.id)
  const embed = new Discord.RichEmbed()
        .setDescription(`${evet} | Mod Log Kanalı başarıyla ${mlog} olarak ayarlandı.\nKanalı sıfırlamak için **${prefix}mod-log-ayarla sıfırla** kullanabilirsiniz!`)
        .setColor("77ffec")
        .setTimestamp()
    message.channel.send({embed})
  
  };
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['modlogayarla'],
    permLevel: 0
}

exports.help = {
    name: 'mod-log-ayarla',
    description: 'mesaj-log kanalı ayarlar.',
    usage: 'mesaj-log #kanal'
}