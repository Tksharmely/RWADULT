
const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json")
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {
  if(!message.author.id == ["168081189339529217", "481408408302649344"]) return;
    message.channel.send(`Kendimi yeniden başlatıyorum, lütfen biraz bekle.`).then(msg => {
    console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);
  })
    
          
}
module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["r","reboot","yenile","yeniden başlat"],
  permLevel: 0
};

module.exports.help = {
  name: 'reboot',
  description: 'Sistemi yeniden başlatır',
  usage: 'reboot'
};

/*const Discord = require("discord.js");
const moment = require("moment");

exports.run = (client, message, args) => {
  message.channel
    .sendMessage(
      " ```Botun yeniden başlatılmasına onay veriyorsanız 30 saniye içinde evet yazın.``` "
    )
    .then(() => {
      message.channel
        .awaitMessages(response => response.content === "evet", {
          max: 1,
          time: 30000,
          errors: ["time"]
        })
        .then(collected => {
          message.channel
            .sendMessage(`**Bot yeniden başlatılıyor...**`)
            .then(message => {
              console.log(
                `[${moment().format(
                  "YYYY-MM-DD HH:mm:ss"
                )}] Bot yeniden başlatılıyor...`
              );
              process.exit(1);
            })
            .catch(console.error);
        })
        .catch(() => {
          message.channel.sendMessage(
            "```Yeniden başlatma işlemi iptal edildi.```"
          );
        });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: "reboot",
  description: "[Admin Komutu]",
  usage: "reboot"
};*/
