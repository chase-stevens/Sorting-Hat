const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
client.login(config.token);
const prefix = config.prefix

HOUSES = [ config.sly, config.gry, config.rav, config.huf]
PROFESSIONS [ config.aur, config.pro, config.mag ]


function addRole(member, role) {
  HOUSES.forEach(h => {
    if (member.roles.has(h)) {
      message.channel.send(`It looks like you're already a ${h}. Talk to a ${config.headmaster} about this.`);
      return;
    }
  });

  message.member.addRole(role).catch(console.error);
  message.channel.send(`${role} it is!`);
}

function addProfession(member, role)

client.on("ready", () => {
  console.log("SORTING");
});

client.on("message", (message) => {
    if (!message.content.startsWith(prefix)) return;
    if (message.channel.id === config.sortchan || message.channel.id === config.botchan){

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      if (command.startsWith('g')) {
        addRole(message.member, config.gry);
      }
      else if (command.startsWith('s')) {
        addRole(message.member, config.sly);
      }
      else if (command.startsWith('h')) {
        addRole(message.member, config.huf);
      }
      else if (command.startsWith('r')) {
        addRole(message.member, config.rav)
      } 
      else {
        message.channel.send('I\'m not quite sure what to do with that. Try using ! before a house or profession name. Really just the first lett will do. Give me -something- to work with');
      }
    }
});
