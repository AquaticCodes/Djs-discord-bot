const db = require("quick.db");

module.exports = {
name: "checkperms",
owner: false,
admin: false,
category: "bot",
run: async (client, message, args) => {

const msg = await message.channel.send("Hold On Setting Up Database");

await db.set(`${message.guild.id}.checkingpermissions`, [])
await msg.delete();
if (!args[0]) {
return message.lineReplyNoMention("Oi, You Need To Specify The Commands Category \n checkperms <category> <optional inputs>");
};

const category = args[0].toLowerCase();

const checking = await message.channel.send(`Checking Permissions For ${category}.., Running The Required Functions and Scripted Code!!! \n Please Wait.. This Shouldn't Take Long..`);
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
checking.delete();
} else if (category == "mod" || category == "moderation") {

if (!message.guild.me.hasPermission("MANAGE_GUILD") {
await db.push(`${message.guild.id}.checkingpermissions`, "Fatal Permission Error: Serious, Guild \n NEEDED PERMISSIONS: MANAGE GUILD");
}

if (!message.guild.me.hasPermission("MANAGE_MESSAGES") {
await db.push(`${message.guild.id}.checkingpermissions`, "Permissions: Ignorable, Messages \n NEEDED PERMISSIONS: MANAGE MESSAGES")
}

if (!message.guild.me.hasPermission("MANAGE_REACTIONS") {
await db.push(`${message.guild.id}.checkingpermissions`, "Permissions: Ignorable, Messages/Reactions.manage \n NEEDED PERMISSIONS: MANAGE REACTIONS");
}

if (!message.guild.me.hasPermission(" ") {

}

}
},
};
