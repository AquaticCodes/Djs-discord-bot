const db = require("quick.db");
const { MessageEmbed } = require("discord.js")

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
if (category == "info" || category=="general") {

if (!message.guild.me.hasPermission("EMBED_LINKS")) {
await db.push(`${message.guild.id}.checkingpermissions`, "Error: Medium, Links and embeds \n NEEDED PERMISSIONS: EMBED LINKS")
};

if (!message.guild.me.hasPermission("ATTACH_FILES")) {
await db.push(`${message.guild.id}.checkingpermissions`, "\n Error: Critial, Files \n NEEDED PERMISSIONS: ATTACH FILES")
}

const data = db.get(`${message.guild.id}.checkingpermissions`);
let embed = new MessageEmbed()
.setDescription(data)
.setTitle("Permissions")
.setColor("RANDOM")
.setFooter("ADMINISTRATOR permissions is sufficient for all categories and command!!");

await message.channel.send(embed);
checking.delete();
} else if (category == "mod" || category == "moderation") {

if (!message.guild.me.hasPermission("MANAGE_GUILD")) {
await db.push(`${message.guild.id}.checkingpermissions`, "Fatal Permission Error: Serious, Guild \n NEEDED PERMISSIONS: MANAGE GUILD");
};

if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
await db.push(`${message.guild.id}.checkingpermissions`, "\nPermissions: Ignorable, Messages \n NEEDED PERMISSIONS: MANAGE MESSAGES \n")
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

var data = await db.get(`${message.guild.id}.checkingpermissions`);
if (data.length <= 0) {
  checking.delete();
  return message.channel.send("All Permissions Already Satisfied")
}

let embed = new MessageEmbed()
.setDescription(data)
.setTitle("Permissions")
.setColor("RANDOM")
.setFooter("ADMINISTRATOR permissions is sufficient for all categories and command!!");

message.channel.send(embed);
checking.delete();
} else if (category == "general") {
if (!message.guild.me.hasPermission("ATTACH_FILES") {
await db.push(`${message.guild.id}.checkingpermissions`, "Fatal Error: ATTACH FILES Permissions Missing!!!")
}
if (!message.guild.me.hasPermission("ADD_REACTION") {
await db.push(`${message.guild.id}.checkingpermissions`, "\nCritical Error: Reactions is a very necessary permission! \n NEEDED PERMISSIONS: ADD AND MANAGE REACTIONS")
}
if (!message.guild.me.hasPermission("USE_EXTERNAL_EMOJIS") {
await db.push(`${message.guild.id}.checkingpermissions`, "\nVery Critical Error: USE EXTERNAL EMOJIS PERMISSION MISSING!!!")
}

var data = await db.get(`${message.guild.id}.checkingpermissions`);
if (data.length <= 0) {
  checking.delete();
  return message.channel.send("All Permissions Already Satisfied")
}

let embed = new MessageEmbed()
.setDescription(data)
.setTitle("Permissions")
.setColor("RANDOM")
.setFooter("ADMINISTRATOR permissions is sufficient for all categories and command!!");

message.channel.send(embed);
checking.delete();

} else {
message.channel.send(
"No Such Category Found, Use fun | mod | general"
)
}


},
};
