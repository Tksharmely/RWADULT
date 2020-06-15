const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const db = require('quick.db');
const moment = require('moment');

require('./util/eventLoader')(client);
var prefix = ayarlar.prefix;
require('events').EventEmitter.defaultMaxListeners = Infinity;
require('events').EventEmitter.prototype._maxListeners = 0;
var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};


client.on('ready', (member) => {
const TCMB_Doviz = require('tcmb-doviz');
const Doviz = new TCMB_Doviz();
setInterval(async () => {
let guild = "719705785474744350" 
let dovizkanal = "720968657215291422"
const res = await Doviz.getKur("USD");
client.channels.get(dovizkanal).setName(`Dolar: ${res.alis} ₺`)
console.log(`Döviz kanalı güncellendi.`)
}, 1800000)
})

/*client.on('ready', (member) => {
setInterval(async () => {
let guild = "719705785474744350" 
let saatkanal = "721007784929394811"
       let time = new Date();
        let hours = time.getUTCHours()+3
        if (hours > 23) hours -= 24
        let minutes = time.getUTCMinutes()
        let timeString = `${hours}:${minutes}`
        console.log(timeString) 
        client.channels.get(saatkanal).setName(`Saat: ${timeString}`)
         console.log(`Saat kanalı güncellendi.`)
}, 120000)
})*/


client.on('guildMemberAdd', async (member) => {
    if (!member.guild.id == "719705785474744350") return;
    member.addRole("720928456736505906") // kayısız rolü ver
}) 

client.on("guildMemberAdd", (message, member) => {
  const rwa = client.emojis.get("719780019903266897");
  const evet = client.emojis.get("719723349370077255");
  if (member.user.bot) return;
message.send(`Merhaba, +18 RWADULT Discord sunucumuza hoş geldiniz.
\`\`\`- Herhangi bir üyemiz size yetişkin birey gibi davranacak.\n
- Çünkü RWADULT tamamen yetişkinlere özeldir. Eğer yetişkin birey değilseniz ve bu sunucuya giriş yapacaksanız kendi sorumluluğunuzdur.\n
- Kanalların üzerlerinde açıklama bölümlerine lütfen dikkat edin.\n
- RWADULT ekibi adı altında sizinle iletişime geçtiğini söyleyenlere kesinlikle inanmayın. RWADULT ekibi hiç bir neden olmadan üyelere asla mesaj atmaz.\n
- RWADULT Discord adresinde katkıda bulunma niyeti ile paylaşım yapmanız yasaktır. RWADULT sunucusu/forum içerisinde barınan içeriklerin paylaşımını yapabilirsiniz.\n
- Sunucumuzda küfür, sesli sohbetlerde dahil olmak üzere yasaktır.\n
- Konuşmak için konuşmayın. Toxiclik, Spam, Reklam vb. yasaktır.\n
- Sohbet odalarını trollemek yasaktır.\n
RWADULT ekibi sürekli olarak sunucuyu izlerler. Kuralları kendiniz uygulamazsanız RWADULT ekibi anında müdahale edecektir.\n
Yaptığınız can sıkıcı hareketlerle kötü bir ilk izlenim sahibi olmak, en kısa zamanda ceza almanıza ya da yasaklanmanıza neden olur...\n
Discord hesabınızı açarken kabul etmiş olduğunuz kuralları unutmayın; Discord Hizmet Koşulları: - https://discordapp.com/terms\`\`\``)
message.send(`\n ឵឵\n ឵឵Bu kuralları ciddiye alın ve benimseyin. Kurallarda açık bulmaya çalışmayın veya bulduğunuz açıkları meşrulaştırmaya çalışmayın. Bu temel kuralları anlamanız, ona göre hareket etmeniz ve gerekçelerine saygı duymanız önemlidir. Saygılı olmak ve kurallara uymak, sunucumuzu daha eğlenceli bir hale getirecektir.\n
Eğer her şeyi anladıysan kayıt olmak için \`rwa.kayıtol\` yazabilirsin. Çıkacak olan kodu \`rwa.kayıtol <kod>\` şeklinde tekrar göndermelisin. Bu güvenlik duvarı Discord üzerinde bulunan self botları engellemek amacıyla üretilmiştir.\n
${evet} Sunucuya giriş izni bu şekilde hesabına tanımlanacaktır! RWADULT iyi eğlenceler diler.`)
});


//___MESAJ SİSTEMİ____// START
client.on("message", async msg => {
  const db = require('quick.db');
  //şartlar
  if(msg.channel.type === "DM") return;
  if(msg.author.bot) return;
  //if (!msg.guild.id == "719705785474744350") return;
  if(msg.channel.id == "720928593022287933") return;
  if (msg.content.length > 3) {
    db.add(`mesajsayisi_${msg.author.id}`, 1)
};
  //şartlar
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// yeni üyeden > üye
  if (db.fetch(`mesajsayisi_${msg.author.id}`) == 2500) {
    let guild = msg.guild;
    let yeniuye = "720928667496349706"; // Yeni Üye (0)
    let uye = "720928705622310933"; // Üye (2500)
    let channel = "720270790553239612";
    let seviyekanal = "720928646050873415";
    let member = msg.author;
    db.set(`rank_${msg.author.id}`, 1)
      client.channels.get(seviyekanal).send(`${member} **2.500** mesaja ulaşarak **\`Üye\`** rolünü elde etti.`)
     msg.member.addRole(uye)
     msg.member.removeRole(yeniuye)
  };
// üyeden > aktif üye
if (db.fetch(`mesajsayisi_${msg.author.id}`) == 7500) {
   let member = msg.author;
   let guild = msg.guild;
   let uye = "720928705622310933"; // Üye (2500)
   let aktifuye = "720928636932456448"; // Aktif Üye (7500)
   let channel = "720270790553239612";
    let seviyekanal = "720928646050873415";
    db.set(`rank_${msg.author.id}`, 2)
    client.channels.get(seviyekanal).send(`${member} **7.500** mesaja ulaşarak **\`Aktif Üye\`** rolünü elde etti.`)
     msg.member.addRole(aktifuye)
     msg.member.removeRole(uye)// aktif üye ver, yeni üye al
  };
// aktif üyeden tanınmış üye
  if (db.fetch(`mesajsayisi_${msg.author.id}`) == 20000) {
   let member = msg.author;
   let guild = msg.guild;
   let aktifuye = "720928636932456448"; // Aktif Üye (7500)
   let taninmisuye = "720928609912750141"; // Tanınmış Üye (20.000)
   let channel = "720270790553239612";
    let seviyekanal = "720928646050873415";
    db.set(`rank_${msg.author.id}`, 3)
       client.channels.get(seviyekanal).send(`${member} **20.000** mesaja ulaşarak **\`Tanınmış Üye\`** rolünü elde etti.`)
     msg.member.addRole(taninmisuye)
     msg.member.removeRole(aktifuye) // tanınmış üye var, aktif üye al
  };
// tanınmış üyeden saygın üyeye
  if (db.fetch(`mesajsayisi_${msg.author.id}`) == 60000) {
   let member = msg.author;
   let guild = msg.guild;
   let taninmisuye = "720928609912750141"; // Tanınmış Üye (20.000)
   let sayginuye = "720928577457094676"; // Saygın Üye (60.000)
   let channel = "720270790553239612";
    let seviyekanal = "720928646050873415";
    db.set(`rank_${msg.author.id}`, 4)
       client.channels.get(seviyekanal).send(`${member} **60.000** mesaja ulaşarak **\`Saygın Üye\`** rolünü elde etti. Bu onun kazanabileceği son seviye.`)
     msg.member.addRole(sayginuye)
     msg.member.removeRole(taninmisuye) // saygın üye tanınmış üye ver, tanınmış üye al
  };
  });
//___MESAJ SİSTEMİ__// END


//__otomatik mesaj__// başlangıç
/*setInterval(() => {
  client.channels.get("kanal").send('mesaj')
}, 60000)*/
//__otomatik mesaj__// bitiş

client.on('messageDelete', async message => {
db.set(`silinenmesaj_${message.channel.id}`, { kanal: message.channel.id, mesaj: message.content, sahip: message.author.id, tarih: message.createdAt})
})

//____YASAKLI MESAJLAR____// START
client.on('message', async message => {
  let blacklisted = ['witcher çöp', 'çöp witcher','w.i.t.c.h.e.r_ç.ö.p', 'WİTCHER ÇÖP', 'WITCHER COP', 'wİtcher<çÖp', 'w.i.t.c.h.e.r ç.ö.p', 'witcher çpö',
                    'wiçır çöp', 'wıçır çöp', 'wıçır çop', 'wiçır çöp', 'wıtcher cop', 'wtichre çöp', 'witchre çöp', 'witchre çop', 'witchre cop', 'witcher_çöp', 'witcher-çöp',
                    'witcher+çöp', 'witcher/çöp', 'witcherçöp', 'witcher çöp', 'witcher var ya çöp']

  let yazidavarmi = false;
  for (var i in blacklisted) { // loop
    if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) yazidavarmi = true;
  }

    if (yazidavarmi) {
      message.delete();
      message.reply('yasaklı kelime kullandın!').then(msg => {
    msg.delete(3000)
  })
  }
});


 //____YASAKLI MESAJLAR____// END

/*client.on(`message`, async message => {
  const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setDescription(message.author + " don't advertise.")
    const bannedWords = [`discord.gg`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /`]
    const allowedWords = [`discord.gg/specifiedlink`, `https://discord.gg/specifiedlink`, `http://discord.gg/specifiedlink`]
try {
        if (allowedWords.some(word => message.content.toLowerCase().includes(word))) return;
        else if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
            if (message.author.id === message.guild.ownerID) return;
            await message.delete();
            message.channel.send(embed).then(deletedMsg => {
             deletedMsg.delete(2500)})
        }
    } catch (e) {
        console.log(e);
    }
});
*/


client.on(`message`, async message => {
    const bannedWords = ["discord.gg", ".gg/", ".gg /", ". gg /", ". gg/", "discord .gg /", "discord.gg /",
"discord .gg/", "discord .gg", "discord . gg", "discord. gg", "discord gg", "discordgg", "discord gg /", "discord.app", "discord.gg","discordapp",
"discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az", ".cf", ".me", ".in"
                        ,"teknoadult", "teknoadult.net", "www.teknoadult", "www.teknoadlt", "argion"]
    
    const allowedWords = ["discord.gg/qxTehTu", "https://discord.gg/qxTehTu", "hhttps://discord.gg/qxTehTu"]
try {
        if (message.content.includes("qxTehTu")) return;
        if (message.content.includes("rwadult")) return;
        if (message.content.includes("rwadult.com")) return;
        if (message.content.includes("rwadult.city")) return;
        if (message.content.includes("https://rwadult.com")) return;
        if (message.content.includes("http://rwadult.com")) return;
        if (message.content.includes("www.rwadult.com")) return;
        if (message.content.includes("www.rwadult.city")) return;
        if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
            if (message.author.id === message.guild.ownerID) return;
            await message.delete();
            deletedMsg => {
             deletedMsg.delete(2500)}
        }
    } catch (e) {
        console.log(e);
    }
});


client.on("messageUpdate", async (oldMsg, newMsg) => {
let reklamlar = ["discord.gg", ".gg/", ".gg /", ". gg /", ". gg/", "discord .gg /", "discord.gg /",
"discord .gg/", "discord .gg", "discord . gg", "discord. gg", "discord gg", "discordgg", "discord gg /", "discord.app", "discord.gg","discordapp","discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az", ".cf", ".me", ".in"]
let kelimeler = newMsg.content.slice(" ").split(/ +/g)
if (reklamlar.some(word => newMsg.content.toLowerCase().includes(word))) {
//if (newMsg.member.hasPermission("BAN_MEMBERS")) return;
newMsg.delete().then(msg => msg.delete(7000)) 
}
})

client.on('message', msg => {
  if(msg.author.bot) return;
if(msg.content === `being a dik ne zaman çıkacak`){
msg.reply(`...`)
}});

client.on('message', msg => {
  var prefix = ayarlar.prefix;
if(msg.author.bot) return;
  if (msg.channel.type === "dm") {
if (!msg.content.startsWith(ayarlar.prefix)) {
  msg.reply(`Merhaba dostum! Ben bir botum. Benimle iletişimin bana öğrettiklerinden daha öteye olmayacaktır. Eğer benim çözemediğim bir problemin varsa sunucularımızdaki yetkililerden veya genel sohbetten iletebilirsin.`)
}}});


 client.on("message", message => {
  var dm = client.channels.get("719806452499349534");
    if (message.attachments.size !== 0) return;
  if (message.channel.type === "dm") {
    const kayit = [`r!kayıtol`, `r!kayıt`, `r!kayıt-ol`]
    if (kayit.some(word => message.content.toLowerCase().includes(word))) return;
    if (message.author.id === client.user.id) return;
    const kisi = message.author.tag
    if (message.channel.bot) return;
    const botdm = new Discord.RichEmbed()
      .setTitle(`${client.user.username}'a DM geldi!`)
      .setTimestamp()
      .setColor("006060")
      .setThumbnail(`${message.author.displayAvatarURL}`)
      .addField("Gönderen Kişi", message.author.tag)
      .addField("Gönderen ID", message.author.id)
      .addField("Gönderilen Mesaj", message.content)
    dm.send(botdm);
          console.log(`${kisi} tarafından DM kutuma yeni bir mesaj gönderildi.`);
    }})
   
   client.on("message", msg => {
  var dm = client.channels.get("719806452499349534");
  const eklenti = msg.attachments.first();

  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) return;
      if (msg.attachments.size == 1){
    const kisi = msg.author.tag
    if (msg.channel.bot) return;
    const botdm = new Discord.RichEmbed()
      .setTitle(`${client.user.username}'a fotoğraflı DM geldi!`)
      .setTimestamp()
      .setColor("006060")
      .setThumbnail(`${msg.author.avatarURL}`)
      .addField("Gönderen Kişi", msg.author.tag)
      .addField("Gönderen ID", msg.author.id)
      .setImage(`${eklenti.url}`);
       dm.send(botdm);
        console.log(`${kisi} tarafından DM kutuma FOTOĞRAFLI bir mesaj gönderildi.`);
      }
    }
   })

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};




client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("VIEW_AUDIT_LOG")) permlvl = 1;
  if (message.member.hasPermission("MANAGE_ROLES")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (ayarlar.sahip.includes(message.author.id)) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});


client.on('guildBanAdd', async (guild, member) => {
    const fs = require('fs');
let gc = JSON.parse(fs.readFileSync("./log.json", "utf8"));
   let botadi = client.user.username;
  const kanal = await db.fetch(`banlog_${member.guild.id}`)
    if (!kanal) return;
   const embed = new Discord.RichEmbed()
			.setTitle('Üye yasaklandı.')
			.setAuthor(member.user.tag, member.user.avatarURL)
			.setColor('000000')
			.setDescription(`<@!${member.user.id}>, ${member.user.tag}`)
			.setThumbnail(member.user.avatarURL)
			.setFooter(`${botadi} | ID: ${member.user.id}`)
			.setTimestamp();
      client.channels.get(kanal).send(embed);
		
	})
	
	
client.on('messageDelete', async msg => {
		if (!msg.guild) return;
    const fs = require('fs');
    let gc = JSON.parse(fs.readFileSync("./log.json", "utf8"));
    let botadi = client.user.username;
  const kanal = await db.fetch(`mesajlog_${msg.guild.id}`)
    if (!kanal) return;
			var embed = new Discord.RichEmbed()
			.setAuthor(msg.author.tag, msg.author.avatarURL)
			.setColor('000000')
			.setDescription(`<@!${msg.author.id}> tarafından <#${msg.channel.id}> kanalına gönderilen "${msg.content}" mesajı silindi.`)
			.setFooter(`${botadi} | ID: ${msg.id}`)
      .setTimestamp();
      client.channels.get(kanal).send(embed);			
		
	})


const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping atıldı. | RWADULT");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://rwadult.glitch.me`);
}, 280000)
   
app.get('OK', (request, response) => {
return response.send('Bot durumu iyi.');
});

client.login(ayarlar.token);