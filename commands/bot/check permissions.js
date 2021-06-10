const db = require("quick.db");

module.exports = {
name: "checkperms",
owner: false,
admin: false,
category: "bot",
run: async (client, message, args) => {

const category = args[0];

const msg = await message.channel.send("Hold On Setting Up Database");

await db.set(`${message.guild.id}.checkingpermissions`, [])
await msg.delete();
if (!category) {
return message.lineReplyNoMention("Oi, You Need To Specify The Commands Category \n checkperms <category> <optional inputs>");
};
const checking = await message.channel.send("Checking Permissions, Running The Required Functions and Scripted Code!!! \n Please Wait.. This Shouldn't Take Long..");
if (category == "info") {

if (!message.guild.me.hasPermission("EMBED_LINKS") {
await db.push(`${message.guild.id}.checkingpermissions`, "Error: Medium, Links and embeds \n NEEDED PERMISSIONS: EMBED LINKS \n")
};

if (!message.guild.me.hasPermission("ATTACH_FILES") {
await db.push(`${message.guild.id}.checkingpermissions`, "Error: Critial, Files \n NEEDED PERMISSIONS: ATTACH FILES")
}

const data = db.get(`${message.guild.id}.checkingpermissions`);

await message.channel.send(data);
await message.channel.send("ADMINISTRATOR permissions is sufficient for all categories and command!!");

}

},
};
