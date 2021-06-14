const db = require("quick.db");
const { MessageEmbed } = require("discord.js");
const { bot_prefix } = require("../../root/configuration.json");

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

let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = bot_prefix;

if (!args[0]) {
return message.lineReply(`Please Type A Prefix After Command, \n ${prefix}prefix <prefix>`);
};

if (args[1]) {
return message.lineReplyNoMention("Oi, Prefix Shouldn't Contain Spaces!!");
};

if (args[0].toLowerCase() == "trace"||"logs") {
const log = db.get(`$message.guild.id}.prefix`);
const reversed = log.reverse();

for (var i = 0; i < 3; i++) {
message.channel.send(reversed[i])
}
}

if (args[0].length > 4 && !db.has(`${message.guild.id}_extendprefix`)) {
return message.lineReplyNoMention(
"Prefix Length Should Not Be More Than 4 Characters, Use Root Features To Extend The Limit :)"
)
}

if (newprefix == botprefix) {
db.delete(`prefix_${message.guild.id}`);
return message.lineReplyNoMention(
"Oi, The Prefix Has Been Reset xD"
)
}

db.set(`prefix_${message.guild.id}`, newprefix);
message.channel.send(
`Bot Prefix Has Been Updated To ${newprefix} From ${prefix} Successfully, Bot Shall Respond To ${newprefix} Successfully!!`
);

if (!db.has(`$message.guild.id}.prefix`)) {
db.set(`$message.guild.id}.prefix`, []);
db.push(`$message.guild.id}.prefix`, `${message.author.tag} has changed prefix to ${newprefix} from ${prefix}`);
} else {
db.push(`$message.guild.id}.prefix`, `${message.author.tag} has changed prefix to ${newprefix} from ${prefix}`);
}
},
};
