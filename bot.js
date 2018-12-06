const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', message => {
                           if(!message.channel.guild) return;
               let args = message.content.split(' ').slice(1).join(' ');
               if (message.content.startsWith('.abc')){
                if (message.author.id !== '520275319605821451') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
               message.channel.sendMessage('جار ارسال الرسالة |✅')
               client.users.forEach(m =>{
               m.sendMessage(args)
               })
               }
               });
client.on('message', message => {
                           if(!message.channel.guild) return;
               let args = message.content.split(' ').slice(1).join(' ');
               if (message.content.startsWith('.abc')){
                if (message.author.id !== '520209465597886464') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
               message.channel.sendMessage('جار ارسال الرسالة |✅')
               client.users.forEach(m =>{
               m.sendMessage(args)
               })
               }
               });


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
**:heart::speak_no_evil: ممكن اخطفك لحضني **

نظام انفايد ريورد نااار 
10 عضو = :smile: 
100 k credits
https://discord.gg/mY5V8r


https://discord.gg/EjsSZY
سيرفر شوب يبيع كل شىء حتى بوتات الهاكر :wink: 


https://discord.gg/aH8pJF
سيرفر اكواد وتعليم عمل بوت هاكرز وبوتات :heart:

                          ♥♥   
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})


client.login(process.env.BOT_TOKEN);
