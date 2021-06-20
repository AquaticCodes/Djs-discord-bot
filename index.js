const { token } = require("./root/configuration.json");

require("discord-reply");

const discord = require("discord.js");

const client = new discord.Client({
  disableEveryone: true 
});

setInterval(function() {

client.guilds.cache.get(`${memes}`).send();

}, memes_time);

require("discord-buttons");

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});


client.login(token);
