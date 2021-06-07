const status = require("../root/status.json");

module.exports.run = (client) => {

console.log("https://aquatic.aquaticdev.repl.co");

console.log(`${client.user.tag} is now online with ${client.ws.ping} ms ping for a total of ${client.users.cache.size} users in ${client.guilds.cache.size} servers`);

client.user.setPresence({ activity:{ name: status.name }, status: status.status });

}
