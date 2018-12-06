 const Discord = require('discord.js');
const client = new Discord.Client();

console.log("BOT ONLINE");
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
**
انفايد ريورد نااار 
10 عضو = :smile: 
``100 k credits ``
https://discord.gg/mY5V8r
**
**
https://discord.gg/EjsSZY
سيرفر شوب يبيع كل شىء حتى بوتات الهاكر :wink: 
**
**
https://discord.gg/aH8pJF
سيرفر اكواد وتعليم عمل بوت هاكرز وبوتات :heart: 
**
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
