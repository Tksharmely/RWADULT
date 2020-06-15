const Discord = require('discord.js')
var Jimp = require("jimp");
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args, member) => {
    var prefix = ayarlar.prefix;
    let server = "720927939184689193"; //sunucu ID
    if(message.guild) return;
    let unregistered = "720928456736505906"; // rol ID
    let registered = "720928667496349706";
    const kisi = message.author;

  if (!client.guilds.get(server).members.get(kisi.id).roles.has(unregistered)) return message.reply("Zaten kayıtlısın.")
  let arg = args.slice(0).join(" ")
  if(!arg){
    let abcc = db.fetch(`sifre_${message.author.id}`)
    if(abcc){
      return message.reply(`Zaten senin için bir kod tanımlandı ${kisi}, geçmiş mesajları kontrol edip kodu bulabilirsin.`)
    }
function makeid(length) {
   var result           = '';
   var characters       = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result; 
}
 
  let kod = makeid(6);
  const bg = await Jimp.read("./assets/rwacode.png");

  var font;
    font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
  
  await bg.print(font, 180, 135, kod).write("./resimler/rwakayit.png");
  db.set(`sifre_${message.author.id}`, kod)
  
   
    message.author.send(new Discord.Attachment("./resimler/rwakayit.png"));
    message.author.send(`\`${prefix}kayıtol [kod]\` yazarak kayıt olabilirsin.`)
  }
  
  if(arg){
    
    let abc = db.fetch(`sifre_${message.author.id}`)
    if(arg == abc){
    let r = client.guilds.get('720927939184689193').members.get(message.author.id)
    let rerole = client.guilds.get('720927939184689193').roles.get('719745506053455963') 
    
message.author.send('RWA sunucusuna hoş geldin.', new Discord.Attachment("./assets/rwacodesuccess.png"))
    r.removeRole(unregistered)
    r.addRole(registered)
      const kayitch = "720928646050873415"
      const kayitlog = new Discord.RichEmbed()
        .setTitle(`Yeni kayıt, toplamda `+ client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() +` kişiyiz.`)
        .setTimestamp()
        .setColor("006060")
        .setThumbnail(`${message.author.displayAvatarURL}`)
        .addField("Kayıt olan kullanıcı", message.author.tag)
        .addField("ID", message.author.id)
      client.channels.get(kayitch).send(kayitlog).then(db.delete(`sifre_${message.author.id}`))
    }
    else {
      message.reply(`Yanlış kod girişi yapıldı. Lütfen \`${prefix}kayıtol\` komutunu kullanarak tekrar kod al.`)
      db.delete(`sifre_${message.author.id}`)
    }
  }
  }
  

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt-ol', 'kayıt'],
    permLevel: 0
};

exports.help = {
  name: 'kayıtol',
  usage: 'kayıt',
  description: 'kayıt eder'
};