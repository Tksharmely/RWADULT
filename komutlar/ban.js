
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');

exports.run = async (client, message, args) => {
var prefix = ayarlar.prefix;
      let modlog = await db.fetch(`mlog_${message.guild.id}`)


  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Bu komutu kullanmak için yetkin yok.").then(message.delete(3000)).then(msg => {
    msg.delete(3000)
  })

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("006060")
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`ban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  const agla = client.emojis.get("719729906371788864");
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let banlog = await db.fetch(`mlog_${message.guild.id}`)
  if (!banlog) return message.reply(`Ban loglamak için kanal bulamıyorum. Ayarlamak için ${prefix}mod-log-ayarla <#kanal> komutunu kullanın.`).then(message.delete(10000)).then(msg => {
    msg.delete(10000)
  });
  if (reason.length < 1) return message.reply(`Ban sebebini yazmalısın. **Doğru Kullanım:** ${prefix}ban <kişi> **<sebep>**`).then(message.delete(10000)).then(msg => {
    msg.delete(10000)
  });
  if (message.mentions.users.size < 1) return message.reply(`Kimi banlayacağını yazmalısın. **Doğru Kullanım:** ${prefix}ban **<kişi>** <sebep>`).catch(console.error).then(message.delete(10000)).then(msg => {
    msg.delete(10000)
  });
  if (!reason) reason = 'Neden belirtilmedi.'
  if (!message.guild.member(user).bannable) return message.reply('yetkilileri banlayamam.');

      const banlandin = new Discord.RichEmbed()
    .setColor("006060")
    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/1/14/Ban_sign.png")
    .addField(`Sana bir haberim var!`,`Merhaba, **${guild}** sunucusundan yasaklandınız!\nİyi günler.`)
    .setTimestamp()
  user.send(banlandin)   
  setTimeout(() => {
  message.guild.ban(user, reason+" | Yetkili: "+message.author.tag);

}, 5000)
    const embedlog = new Discord.RichEmbed()
    .setColor("006060")
    .setTimestamp()
    .addField('Eylem:', 'Ban')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Banlayan Yetkili:', `${message.author.username}#${message.author.discriminator}`)
   // .addField('Sebep', reason)

  return message.channel.send(`[!] ${user.username}#${user.discriminator} (${user.id}), ${message.author.username} tarafından yasaklandı. ${agla}`).then(message => client.channels.get(banlog).send(embedlog)).then(() => message.react('✅'));

 //return guild.channels.get(modlog.id).send(embedlog);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi banlar.',
  usage: 'ban [kullanıcı] [sebep]'
};
//---Bu Kod komutlar klasörüne atılacaktır. 
//###CodeMareFi tarafından hazırlanmıştır - - - Ekleyen //###Sadista

/*const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":no_entry: Bu komutu kullanabilmek için `Üyeleri Yasakla` yetkisine sahip olmanız gerek.");
    let reason = args.slice(1).join(' ')
    if (!args[0]) return message.channel.send(":no_entry: Yasaklamak istediğiniz kullanıcıyı etiketleyiniz.")
    let user = message.mentions.users.first() || bot.users.get(args[0]) || message.guild.members.find(u => u.user.username.toLowerCase().includes(args[0].toLowerCase())).user

    if (!user) return message.channel.send(`${process.env.basarisiz} Etiketlediğin kullanıcıyı sunucuda bulamadım.`)
    let member = message.guild.member(user)
    if (!member) return message.channel.send(`${process.env.basarisiz} Etiketlediğin kullanıcıyı sunucuda bulamadım.`)
    if (member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${process.env.basarisiz} Kendi yetkimin üstündeki kişileri yasaklayamam.`)
    if (!reason) reason = 'Neden belirtilmemiş.'
  
    message.channel.send(`${user.tag}, adlı kullanıcıyı sunucudan yasaklayacağım emin misiniz? Eminseniz \`e\` işlemi iptal etmek ise \`h\` olarak cevaplayınız.`)
        let uwu = false;
            while (!uwu) {
                if (choice == 'hayır' || choice == 'h') return message.channel.send('🚀 İşlem iptal **edildi.**')
                if (choice !== 'evet' && choice !== 'e') {
                message.channel.send('❓ Lütfen sadece **evet (e)** veya **hayır (h)** ile cevap verin.')
                }
                if (choice == 'evet' || choice == 'e') uwu = true
                }
                if (uwu) {
                try {
                await member.ban(reason + ` | Yetkili: ${message.author.tag} - ${message.author.id}`)
  
                message.channel.send(`${process.env.basarili} **${user.tag}** adlı kullanıcı sunucudan yasaklandı.`)
                user.send(`**${message.guild.name}** adlı sunucudan **banlandınız!**\n*Sebep:* \`\`\`${reason}\`\`\``)

                let embed = new Discord.RichEmbed()
                    .setColor(0xffa300)
                    .setAuthor(`${user.username} adlı kişi yasaklandı!`, user.avatarURL||user.defaultAvatarURL)
                    .addField('Yasaklanan Kullanıcı', `${user.tag}-[${user.id}]`, true)
                    .addField('Yasaklayan Yetkili', `${message.author.tag}-[${message.author.id}]`, true)
                    .addField('Yasaklama Nedeni', reason, true);
                let membermodChannel = await db.fetch(`membermodChannel_${message.guild.id}`)
                if (!message.guild.channels.get(membermodChannel)) return
                else message.guild.channels.get(membermodChannel).send(embed)
*/