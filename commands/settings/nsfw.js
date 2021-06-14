const db = require("quick.db");

module.exports = {
name: "nsfw",
owner: false,
admins: true,
incognito: true,
category: "Settings",
run: async (client, message, args) => {

/* First Lets Create A Auto-Toggle Function, This basically is executed when there isn't any off/on specified :) */

// We Are Gonna Use Switch Statement 
var moded;
if (!args[0]) { // using Auto-Toggle if user didn't specify to on/off

if (!db.has(`${message.guild.id}.nsfw`)) {
moded = "enabled"
db.set(`${message.guild.id}.nsfw`, true)
message.channel.send(
"NSFW Settings Has Auto-Toggled, NSFW Commands Has Been Enabled!!!"
);

} else {
moded = "disabled"
db.delete(`${message.guild.id}.nsfw`, true)
message.channel.send(
"NSFW Settings Has Been Auto-Toggled, NSFW Commands Has Been Disabled!!!"
);

};

};
const toggle = args[0].toLowerCase()

switch(toogle) {

case "on":
moded = "enabled"
db.set(`${message.guild.id}.nsfw`, true)
message.channel.send(
"NSFW Settings Has Auto-Toggled, NSFW Commands Has Been Enabled!!!"
);

 break;

case "off":
moded = "disabled"
db.delete(`${message.guild.id}.nsfw`, true)
message.channel.send(
"NSFW Settings Has Been Auto-Toggled, NSFW Commands Has Been Disabled!!!"
);

break;
}

if (!db.has(`$message.guild.id}_cmd_nsfw`)) {
db.set(`$message.guild.id}_cmd_nsfw`, []);
db.push(`$message.guild.id}_cmd_nsfw`, `${message.author.tag} Has ${moded} NSFW`);
} else {
db.push(`$message.guild.id}.prefix`, `${message.author.tag} Has ${moded} NSFW`);
}

},
};
