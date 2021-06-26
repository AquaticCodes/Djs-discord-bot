const db = require("quick.db");
const { confirmation } = require("reconlx");

module.exports = {
name: "welcomer",
aliases: ["auto-welcome"],
owner: false,
admins: false,
category: "settings",
authorPermission: ["ADMINISTRATOR"],
run: async (client, message, args) => {

/* 

This command Analyzes The Database And Auto-Toggles The Setting!!

Making Auto-Toggler And Other Functions To Be Done Below

*/

if (!db.has(`${message.guild.id}.welcomer`)) {

const channel = message.mentions.channels.first() || message.channel;

message.channel.send(`Are You Sure To Set <#${channel.id}> As The Welcome Message Channel? \n \n ✅ To Confirm`).then(

}

},
};
