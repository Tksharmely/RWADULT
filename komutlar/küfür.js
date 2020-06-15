const Discord = require('discord.js');
const fs = require('fs');
let küfürEngel = JSON.parse(fs.readFileSync("././jsonlar/küfürEngelle.json", "utf8"));
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message) => {
   if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send("Bu komutu kullanmak için yetkin yok.").then(message.delete(3000)).then(msg => {
    msg.delete(3000)
  });
var prefix = ayarlar.prefix;

	let args = message.content.split(' ').slice(1);
	const secenekler = args.slice(0).join(' ');

	if(secenekler.length < 1) return message.reply("aç veya kapat yaz!");

  if (secenekler !== "aç" && secenekler !== "kapat" && secenekler !== "on" && secenekler !== "off") return message.reply(`${prefix}küfür aç veya kapat yazınız!`)

	if (secenekler === "aç" || secenekler === "on") {
		
      
    
		message.channel.send("İşlem Başarılı: Açık!")
    
  if(!küfürEngel[message.guild.id]){
		küfürEngel[message.guild.id] = {
			küfürEngel: "acik"
		  };
  };

		  fs.writeFile("././jsonlar/küfürEngelle.json", JSON.stringify(küfürEngel), (x) => {
        if (x) console.error(x)
      })
	};

	if (secenekler === "kapat" || secenekler === "off") {
    
               if(!küfürEngel[message.guild.id]){
		küfürEngel[message.guild.id] = {
			küfürEngel: "kapali"
		  };
  };

		fs.writeFile("././jsonlar/küfürEngelle.json", JSON.stringify(küfürEngel), (x) => {
        if (x) console.error(x)
      })

       delete küfürEngel[message.guild.id]
       delete küfürEngel[message.guild.id]

	return	message.channel.send("İşlem Başarılı: Kapalı!")
    
	};
}

	exports.conf = {
		enabled: true,
		guildOnly: false,
		aliases: ['küfür-engel'],
		permLevel: 0
	  };
	  
	exports.help = {
		name: 'küfür',
		description: 'Küfür engelleme sistemini açıp kapatmanızı sağlar.',
		usage: 'küfür <aç/kapat>'
	};