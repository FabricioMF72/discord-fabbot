const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

client.on('message', msg => {
    console.log(msg.content)  
    if (msg.author.bot) {
      return;
    }
    if (msg.content.toLocaleLowerCase() === `memide`) {
      var number = Math.floor(Math.random() * 30);
      msg.channel.send(`Te mide ${number} :cold_face:`);
    } else if(msg.content.toLocaleLowerCase().startsWith('ruleta')) {
      const words = msg.content.split(' ');
      words.splice(0,1);
      var number = Math.floor(Math.random() * words.length);
      words.sort(() => (Math.random() - 0.5));
      words.map(player => msg.channel.send(`${player}`))
      return;
    }
    
  });
  
  client.on('ready', () => {
    console.log(`Conectado... ${client.user.tag}`);
  });
  
  client.login(DISCORD_TOKEN);