const Discord = require('discord.js');
const request = require('node-superfetch');
const db = require('quick.db');
const { stripIndents } = require('common-tags');
const snekfetch = require("snekfetch");

const ark = ["renk", "color"]
const arm = ["resim", "image"]
const reset = ['sıfırla', 'reset']
const saydam = ['saydamlaştır', 'saydam']

exports.run = async (client, msg, args) => {
  
  let u = msg.mentions.users.first() || msg.author;

        if(u.bot === true) {
                const embed = new Discord.RichEmbed()
                        .setDescription("Botların seviyesi bulunmamaktadır!")
                        .setColor("RANDOM")
                msg.channel.send(embed)
                return
        }
  
  var Canvas = require('canvas')
        var canvas = Canvas.createCanvas(750, 300)
        var ctx = canvas.getContext('2d');
        const avatarURL = u.displayAvatarURL
        const { body } = await request.get(avatarURL);
        const avatar = await Canvas.loadImage(body);
        if(db.has(`${u.id}.resim`)) {
                const rs = await request.get(db.fetch(`${u.id}.resim`));
                const resim = await Canvas.loadImage(rs.body);
                ctx.drawImage(resim, 0, 0, 750, 300);
    
        }
  
  
  ctx.fillStyle = "rgba(0, 0, 0, 0.30)";
  ctx.fill()
        ctx.fillRect(25, 20, 700, 260) 
        ctx.fillStyle = "rgba(0, 0, 0, 0.30)";
        ctx.fill()
        ctx.fillRect(0, 0, 750, 300)
  
        var re = "3af2ec"  //mesaj yazısı rengi

  var xp = db.fetch(`mesajsayisi_${msg.author.id}`);
//  var lvl = db.fetch(`seviye_${u.id + msg.guild.id}`);  
  let xp2;
  if (xp == null) xp2 = `0`
  else xp2 = `${xp.toLocaleString().replace(/,/g, ".")}`
//if (isNaN(args[0])) {
  if(!args[0]){
    let yeniuye = "719791713337737276"; // Yeni Üye (0)
    let uye = "720266326353903647"; // Üye (2500)
    let aktifuye = "720266375012024334"; // Aktif Üye (7500)
    let taninmisuye = "720283406164033546"; // Tanınmış Üye (20.000)
    let sayginuye = "720298253756924037"; // Saygın Üye (60.000)
       if (msg.member.roles.has(yeniuye)){
 const background = await Canvas.loadImage('https://media.discordapp.net/attachments/661615967087886347/720373971526221914/seviye2.png');
        var de = 1.6
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.beginPath()
        ctx.fillStyle = "#999999";
        ctx.fill();
        ctx.fillStyle = `#${re}`;
        ctx.font = '28px Impact';
        ctx.textAlign = "right";
        ctx.font = '30px Impact';
        ctx.textAlign = "right";
        ctx.fillText(`${xp2} / 2.500 Mesaj`, 560, 185);
  ctx.fillStyle = `#bfbfbf`;
  ctx.font = '30px Impact';
        ctx.textAlign = "left";
        ctx.fillText(`${u.tag}`, 280, 130)
        ctx.beginPath();
        ctx.lineWidth = 8;
  ctx.fill()
        ctx.lineWidth = 8;
        ctx.arc(55 + 80, 80 + 80, 80, 0, 2 * Math.PI, false);
        ctx.clip();
        ctx.drawImage(avatar, 55, 80, 160, 160);
    
        msg.channel.send({files:[{attachment:canvas.toBuffer(),name:"seviye1.png"}]})
}
  if ((msg.member.roles.has(uye))) {
    const background = await Canvas.loadImage('https://media.discordapp.net/attachments/661615967087886347/720373971526221914/seviye2.png');
        var de = 1.6
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.beginPath()
        ctx.fillStyle = "#999999";
        ctx.fill();
        ctx.fillStyle = `#${re}`;
        ctx.font = '28px Impact';
        ctx.textAlign = "right";
        ctx.font = '30px Impact';
        ctx.textAlign = "right";
        ctx.fillText(`${xp2} / 7.500 Mesaj`, 585, 185);
  ctx.fillStyle = `#bfbfbf`;
  ctx.font = '30px Impact';
        ctx.textAlign = "left";
        ctx.fillText(`${u.tag}`, 280, 130)
        ctx.beginPath();
        ctx.lineWidth = 8;
  ctx.fill()
        ctx.lineWidth = 8;
        ctx.arc(55 + 80, 80 + 80, 80, 0, 2 * Math.PI, false);
        ctx.clip();
        ctx.drawImage(avatar, 55, 80, 160, 160);
    
        msg.channel.send({files:[{attachment:canvas.toBuffer(),name:"seviye2.png"}]})
}
    if ((msg.member.roles.has(aktifuye))) {
         var de = 1.6
        const background = await Canvas.loadImage('https://media.discordapp.net/attachments/661615967087886347/720373971526221914/seviye2.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.beginPath()
        ctx.fillStyle = "#999999";
        ctx.fill();
        ctx.fillStyle = `#${re}`;
        ctx.font = '28px Impact';
        ctx.textAlign = "right";
        ctx.font = '30px Impact';
        ctx.textAlign = "right";
        ctx.fillText(`${xp2} / 20.000 Mesaj`, 585, 185);
  ctx.fillStyle = `#bfbfbf`;
  ctx.font = '30px Impact';
        ctx.textAlign = "left";
        ctx.fillText(`${u.tag}`, 280, 130)
        ctx.beginPath();
        ctx.lineWidth = 8;
  ctx.fill()
        ctx.lineWidth = 8;
        ctx.arc(55 + 80, 80 + 80, 80, 0, 2 * Math.PI, false);
        ctx.clip();
        ctx.drawImage(avatar, 55, 80, 160, 160);
    
        msg.channel.send({files:[{attachment:canvas.toBuffer(),name:"seviye3.png"}]})
}
    if (msg.member.roles.has(taninmisuye)) {
         var de = 1.6
        const background = await Canvas.loadImage('https://media.discordapp.net/attachments/661615967087886347/720373971526221914/seviye2.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.beginPath()
        ctx.fillStyle = "#999999";
        ctx.fill();
        ctx.fillStyle = `#${re}`;
        ctx.font = '28px Impact';
        ctx.textAlign = "right";
        ctx.font = '30px Impact';
        ctx.textAlign = "right";
        ctx.fillText(`${xp2} / 60.000 Mesaj`, 585, 185);
  ctx.fillStyle = `#bfbfbf`;
  ctx.font = '30px Impact';
        ctx.textAlign = "left";
        ctx.fillText(`${u.tag}`, 280, 130)
        ctx.beginPath();
        ctx.lineWidth = 8;
  ctx.fill()
        ctx.lineWidth = 8;
        ctx.arc(55 + 80, 80 + 80, 80, 0, 2 * Math.PI, false);
        ctx.clip();
        ctx.drawImage(avatar, 55, 80, 160, 160);
    
        msg.channel.send({files:[{attachment:canvas.toBuffer(),name:"seviye4.png"}]})
}
        if (msg.member.roles.has(sayginuye)) {
          var de = 1.6
        const background = await Canvas.loadImage('https://media.discordapp.net/attachments/661615967087886347/720373971526221914/seviye2.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.beginPath()
        ctx.fillStyle = "#999999";
        ctx.fill();
        ctx.fillStyle = `#${re}`;
        ctx.font = '28px Impact';
        ctx.textAlign = "right";
        ctx.font = '30px Impact';
        ctx.textAlign = "right";
        ctx.fillText(`${xp2} / ∞ Mesaj`, 560, 185);
  ctx.fillStyle = `#bfbfbf`;
  ctx.font = '30px Impact';
        ctx.textAlign = "left";
        ctx.fillText(`${u.tag}`, 280, 130)
        ctx.beginPath();
        ctx.lineWidth = 8;
  ctx.fill()
        ctx.lineWidth = 8;
        ctx.arc(55 + 80, 80 + 80, 80, 0, 2 * Math.PI, false);
        ctx.clip();
        ctx.drawImage(avatar, 55, 80, 160, 160);
    
        msg.channel.send({files:[{attachment:canvas.toBuffer(),name:"seviye4.png"}]})
}
    
};
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["level", "rank", "xp", "puan"],
  permLevel: 0,
  kategori: "Profil"
};

exports.help = {
  name: 'seviye',
  description: 'Seviyenizi ve XP\'nizi gösterir. Yan komutları: c!seviye [@kullanıcı/renk/resim/saydam] [renk kodu/resim URLsi/sıfırla]',
  usage: 'seviye [@kullanıcı/renk/resim/saydam] [renk kodu/resim URLsi/sıfırla]'
};
   