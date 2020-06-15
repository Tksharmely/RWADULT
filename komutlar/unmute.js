const Discord = require("discord.js")
const ms = require("ms")
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

module.exports.run = async (bot, message, args) => {
var prefix = ayarlar.prefix;

   if (!message.member.hasPermissions ('MANAGE_MESSAGES')) return message.channel.send("Bu komutu kullanmak için yetkin yok.").then(message.delete(3000)).then(msg => {
    msg.delete(3000)
  });
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setAuthor("Hata oluştu.").setDescription(`Bir kullanıcı belirtmediniz veya belirtilen kullanıcı bulunamadı. \n Kullanım şekli: ${prefix}unmute [nick] [sebep]`))
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!user.roles.find(`name`, "Susturulmuş")) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('RANDOM').setTitle('Kişi mutelenmemiş.'))
    if (!reason) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setAuthor("Hata oluştu.").setDescription(`Unmute sebebi yazmalısın. \n _**Kullanım:** ${prefix}unmute [nick] [sebep]_`))
    let muterole = message.guild.roles.find(`name`, "Susturulmuş");
    if (!muterole) {
        try {
           muterole = await message.guild.createRole({
                name: "Susturulmuş",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
  


     await (user.removeRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor('Unmute işlemi başarıyla gerçekleştirildi.')
            .addField('Unmutelenen Kullanıcı', `<@${user.id}>`)
            .addField('Unmute sebebi', `${reason}`)
            .addField('İşlemi gerçekleştiren', `${mod}`)
            .setColor('RANDOM')
        message.channel.send(muteembed)
}


exports.conf = {
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: "unmute",
    description: "Etiketlenen Kişinin Mutesini Geri Alır",
    usage:  "unmute [kullanıcı] [sebep]",
}