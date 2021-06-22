const { token } = require("./root/configuration.json");

require("discord-reply");

const discord = require("discord.js");

const client = new discord.Client({
  disableEveryone: true 
});

require("discord-buttons");

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});


client.login(token);
