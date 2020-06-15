const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
var prefix = ayarlar.prefix;

      message.reply('https://discord.gg/qxTehTu')
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['create-link', 'createlink', 'sunucudavet', 'davetkur', 'davetlink', 'davetoluştur', 'davet-link' , 'davet-oluştur'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'davetlinki',
    description: 'RWA sunucusunun davet linkini atar.',
    usage: 'davet'
  };