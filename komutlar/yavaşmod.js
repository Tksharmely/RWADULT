const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, msg, args) => {
var prefix = ayarlar.prefix;
 

if (msg.channel.type !== "text") return;

if (!msg.channel.permissionsFor(msg.member).has("MANAGE_MESSAGES")) return msg.channel.send("Bu komutu kullanmak için yetkin yok.").then(msg.delete(3000)).then(message => {
    message.delete(3000)
  });
const limit = args[0] ? args[0] : 0;
if (limit > 120) return msg.channel.send(`Süre limiti maksimum 120 saniye olabilir. _Kullanım: ${prefix}yavaşmod <süre>_`);

var request = require('request');
request({
    url: `https://discordapp.com/api/v6/channels/${msg.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
});

if (limit == 0) return msg.channel.send("Yavaş mod başarıyla kapatıldı. :ok_hand:");
    msg.channel.send(new Discord.RichEmbed().setDescription(`:ballot_box_with_check: Yazma süre limiti **${msg.author.username}** tarafından **${limit}** saniye olarak ayarlanmıştır.`).setColor('006060'));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slowmode" ,"yavaş mod"],
  permLevel: 0
};

exports.help = {
  name: 'yavaşmod',
  description: 'İstediğiniz Kişiye sarılırsınız.',
  usage: 'sarıl'
};