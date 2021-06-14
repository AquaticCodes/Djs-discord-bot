const db = require("quick.db");
const discord = require("discord.js");

module.exports = {
name: "validate/dev",
aliases: ["devmode-key/validate"],
owner: true,
admins: false,
incognito: false,
run: async (client, message, args) => {

const key = args[0];
const cid = db.get(`${key}_cid`);
if (!args[0]) {
return message.lineReplyNoMention(`${message.author}, please provide a key`);
};

if (!args[1]) {
return message.lineReplyNoMention(`Say Mode`);
}

const whattodo = args[1].toLowerCase();
if (whattodo == "agree") {
if (!db.has(`${key}`)) {
return message.lineReplyNoMention("No Such Key Found:" + " " + key);
};

const uid = db.get(`${key}_uid`);

db.set(`${key}#devmode`, true)
db.delete(`${key}`)
client.channels.cache.get(`${cid}`).send(`Congrats, As Per The Request Of <@${uid}> Your Request Number (${key}) Was Validated And Thus Your Server Has Been Approved To Use Developer Options.. :tada:`);
message.channel.send(`${key} is now valid`);
} else {
client.channels.cache.get(`${cid}`).send(`Sad Musics.. Your Request For Developer Options Got Rejected :x:`);
db.delete(`${key}`);
}
},
};
