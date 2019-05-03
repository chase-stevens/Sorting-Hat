const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
client.login(config.token);
const prefix = config.prefix

client.on("ready", () => {
  console.log("SORTING");
});

client.on("message", (message) => {
    if (!message.content.startsWith(prefix)) return;
    //if (message.author.id !== config.userID) return; //Drew only
    // if (message.author.bot) return;
    if (message.channel.id === config.sortchan || message.channel.id === config.botchan){

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      //  message.channel.send(command);

      // trying to be a Gryffindor
      if (command.startsWith('g')) {
          if(message.member.roles.has(config.sly)){
            message.channel.send('It looks like you\'re already a Slytherin. Talk to a ' + config.headmaster + ' about this.');
             return; }
          if(message.member.roles.has(config.huf)){
            message.channel.send('It looks like you\'re already a Hufflepuff. Talk to a ' + config.headmaster + ' about this.');
             return; }
          if(message.member.roles.has(config.rav)){
            message.channel.send('It looks like you\'re already a Ravenclaw. Talk to a ' + config.headmaster + ' about this.');
             return; }
          message.member.addRole(config.gry).catch(console.error);
          message.channel.send('Gryffindor it is!');
      }
      else if (command.startsWith('s')) {
          if(message.member.roles.has(config.gry)){
            message.channel.send('It looks like you\'re already a Gryffindor. Talk to a ' + config.headmaster + ' about this.');
             return; }
          if(message.member.roles.has(config.huf)){
            message.channel.send('It looks like you\'re already a Hufflepuff. Talk to a ' + config.headmaster + ' about this.');
             return; }
          if(message.member.roles.has(config.rav)){
            message.channel.send('It looks like you\'re already a Ravenclaw. Talk to a ' + config.headmaster + ' about this.');
             return; }
          message.member.addRole(config.sly).catch(console.error);
          message.channel.send('Slytherin it is!');
      }
      else if (command.startsWith('h')) {
          if(message.member.roles.has(config.gry)){
            message.channel.send('It looks like you\'re already a Gryffindor. Talk to a ' + config.headmaster + ' about this.');
             return; }
          if(message.member.roles.has(config.sly)){
            message.channel.send('It looks like you\'re already a Slytherin. Talk to a ' + config.headmaster + ' about this.');
             return; }
          if(message.member.roles.has(config.rav)){
            message.channel.send('It looks like you\'re already a Ravenclaw. Talk to a ' + config.headmaster + ' about this.');
             return; }
          message.member.addRole(config.huf).catch(console.error);
          message.channel.send('Hufflepuff it is!');
      }
      else if (command.startsWith('r')) {
        if(message.member.roles.has(config.gry)){
          message.channel.send('It looks like you\'re already a Gryffindor. Talk to a ' + config.headmaster + ' about this.');
           return; }
        if(message.member.roles.has(config.sly)){
          message.channel.send('It looks like you\'re already a Slytherin. Talk to a ' + config.headmaster + ' about this.');
           return; }
        if(message.member.roles.has(config.huf)){
          message.channel.send('It looks like you\'re already a Hufflepuff. Talk to a ' + config.headmaster + ' about this.');
           return; }
          message.member.addRole(config.rav).catch(console.error);
          message.channel.send('Ravenclaw it is!');
      }   // now professions :
        else if (command.startsWith('a')) {
          message.member.addRole(config.aur).catch(console.error);
          message.member.removeRole(config.pro).catch(console.error);
          message.member.removeRole(config.mag).catch(console.error);
          message.channel.send('An Auror, eh? Just like arry pottah');
        }
        else if (command.startsWith('p')) {
          message.member.removeRole(config.aur).catch(console.error);
          message.member.addRole(config.pro).catch(console.error);
          message.member.removeRole(config.mag).catch(console.error);
          message.channel.send('A Professor? I\'ll try not to fall...asleep....');
        }
        else if (command.startsWith('m')) {
          message.member.removeRole(config.aur).catch(console.error);
          message.member.removeRole(config.pro).catch(console.error);
          message.member.addRole(config.mag).catch(console.error);
          message.channel.send('A Magizoologist? Try not to get eaten hahaha *CHOMP*');
        }
        else {
          message.channel.send('I\'m not quite sure what to do with that. Try using ! before a house or profession name. Really just the first lett will do. Give me -something- to work with');
        }
      }
});
