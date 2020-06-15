const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => { 
  
  let onlinesayi = message.guild.members.filter(m => m.presence.status !== "offline").size
  
  message.channel.send('**'+message.guild.name+'** sunucusunda şu anda toplam **'+onlinesayi+'** aktif üye bulunuyor!')
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: true, 
  aliases: ['aktif','üyeler'], 
  permLevel: 3
};

exports.help = {
  name: 'online',
  description: 'taslak', 
  usage: 'aktif'
};