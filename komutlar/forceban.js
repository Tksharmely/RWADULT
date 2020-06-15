const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

    exports.run = async (client, message, args, level) => {
var p_prefix = ayarlar.prefix;
const agla = "<:cry:719729906371788864>";
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Bu komutu kullanmak için yetkin yok.").then(message.delete(3000)).then(msg => {
    msg.delete(3000)
  });
    let banlog = await db.fetch(`mlog_${message.guild.id}`)
    if (!banlog) return message.reply(`Ban loglamak için kanal bulamıyorum. Ayarlamak için ${p_prefix}mod-log-ayarla <#kanal> komutunu kullanın.`).then(message.delete(10000)).then(msg => {
    msg.delete(10000)
  });
    let member = args[0];
    let guild = message.guild
    if (isNaN(member)) return message.reply(`Bir kullanıcı **ID** girmelisiniz! **Kulllanım:** ${p_prefix}forceban <ID> <sebep>`).then(message.delete(10000)).then(msg => {
    msg.delete(10000)
  });
    const sebep = args.splice(1, args.length).join(' ');
    if (!sebep) sebep = 'Neden belirtilmedi.'
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('yetkilileri banlayamam.'); 
    const embedlog = new Discord.RichEmbed()
    .setColor("006060")
    .setTitle("Birisi forcebanlandı!")
    .setTimestamp()
    .setDescription(`**[!]** \`${member}\`, Yetkili ${message.author.username}#${message.author.discriminator} tarafından **forcebanlandı!** | Sebep: ***${sebep}***`)
     
      const banlandin = new Discord.RichEmbed()
    .setColor("006060")
    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/1/14/Ban_sign.png")
    .addField(`Sana bir haberim var!`,`Merhaba, **${guild.name}** sunucusundan yasaklandınız! İyi günler.`)
    .setTimestamp()
    client.users.get(args[0]).send(banlandin)
    setTimeout(() => {

    message.guild.ban(member, sebep+" | Yetkili: "+message.author.tag).then(() => {
      return message.channel.send(`[!] \`${member}\`, ${message.author.username}#${message.author.discriminator} tarafından tamamen uzaklaştırldı. ${agla}`).then(message => client.channels.get(banlog).send(embedlog)).then(() => message.react('✅'));
}, 5000)
            
  })
            .catch((err) => {
                console.log(err);
            }); 
    

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['softban'],
    permLevel: 0
};

exports.help = {
    name: 'forceban',
    category: '',
    description: '',
    usage: 'forceban '
};