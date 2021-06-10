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

if (!message.guild.me.hasPermission("EMBED_LINKS")) {
await db.push(`${message.guild.id}.checkingpermissions`, "Error: Medium, Links and embeds \n NEEDED PERMISSIONS: EMBED LINKS")
};

if (!message.guild.me.hasPermission("ATTACH_FILES")) {
await db.push(`${message.guild.id}.checkingpermissions`, "\n Error: Critial, Files \n NEEDED PERMISSIONS: ATTACH FILES")
}

const data = db.get(`${message.guild.id}.checkingpermissions`);

await message.channel.send(data);
await message.channel.send("ADMINISTRATOR permissions is sufficient for all categories and command!!");
checking.delete();
} else if (category == "mod" || category == "moderation") {

if (!message.guild.me.hasPermission("MANAGE_GUILD")) {
await db.push(`${message.guild.id}.checkingpermissions`, "Fatal Permission Error: Serious, Guild \n NEEDED PERMISSIONS: MANAGE GUILD");
};

if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
await db.push(`${message.guild.id}.checkingpermissions`, "\nPermissions: Ignorable, Messages \n NEEDED PERMISSIONS: MANAGE MESSAGES \n")
};

if (!message.guild.me.hasPermission("MANAGE_REACTIONS")) {
await db.push(`${message.guild.id}.checkingpermissions`, "\nPermissions: Ignorable, Messages/Reactions.manage \n NEEDED PERMISSIONS: MANAGE REACTIONS");
};

if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
await db.push(`${message.guild.id}.checkingpermissions`, "\nNecessary Permissions Missing: Required, ? Kick.members? mod/ban \n NEEDED PERMISSIONS: KICK MEMBERS");
};

if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
await db.push(`${message.guild.id}.checkingpermissions`, "\nRequired Permissions: Important, Manage Members.?/MOD/BAN/ \n NEEDED PERMISSIONS: BAN MEMBERS");
};

if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
await db.push(`${message.guild.id}.checkingpermissions`, "\n Additional Permissions: Ignorable, Roles.guild \n NEEDED PERMISSIONS: MANAGE ROLES")
};

if (!message.guild.me.hasPermission("VIEW_AUDIT_LOG")) {
await db.push(`${message.guild.id}.checkingpermissions`, "\n Unnecessary Permissions: Completely Ignorable, guild enabled bot audit logs? then add permissions: VIEW_AUDIT_LOG");
};

if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
await db.push(`${message.guild.id}.checkingpermissions`, "oi, NEEDED PERMISSIONS: manage channels");
};

if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) {
await db.push(`${message.guild.id}.checkingpermissions`, "Inappropriate Nicknames Manager: Unnecessary/Ignorable, Guild.members/Nicknames.inappropriate \n NEEDED PERMISSIONS: MANAGE_NICKNAMES");
};

const data = db.get(`${message.guild.id}.checkingpermissions`);

await message.channel.send(data);
await message.channel.send("ADMINISTRATOR permissions is sufficient for all categories and command!!");
checking.delete();
}


},
};
