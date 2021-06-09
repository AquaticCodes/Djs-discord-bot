const db = require("quick.db");
const { MessageEmbed } = require("discord.js");

module.exports = {
name: "prefix",
aliases: ["setprefix"],
owner: false,
admins: false,
incognito: false,
authorPermission: ["MANAGE_GUILD", "MANAGE_MESSAGES"],
botPermission: ["MANAGE_MESSAGES"],
run: async (client, message, args) => {

const newprefix = args[0];

const prefix = db.get(`prefix_${message.guild.id}`);

if (!args[0]) {
return message.lineReply(`Please Type A Prefix After Command, \n ${prefix}prefix <prefix>`);
};

if (args[1]) {
return message.lineReplyNoMention("Oi, Prefix Shouldn't Contain Spaces!!");
};



},
};
