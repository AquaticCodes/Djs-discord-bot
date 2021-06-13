const db = require("quick.db");
const { MessageEmbed } = require("discord.js");

module.exports = {
name: "root/database",
aliases: ["db"],
owner: false,
admins: false,
root: true,
category: "root/developer",
run: async (client, message, args) => {

if (!db.has(`${message.guild.id}_root_dbfunctions`)) {
db.set(`${message.guild.id}_root_dbfunctions`);
message.channel.send("No Toggle Specified, Auto-Toggled, DB functions Has Been Enabled!!!");
} else {
db.delete(`${message.guild.id}_root_dbfunctions`);
message.channel.send("No Toggle Specified, Auto-Toggled And DB Functions Has Been Disabled!!");
}

},
};
