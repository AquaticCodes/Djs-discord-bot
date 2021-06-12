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

if (!args[0]) {
return message.lineReplyNoMention("${message.author}, please provide a key");
};

if (!db.has(`${key}`)) {
return message.lineReplyNoMention("No Such Key Found:" + " " + key);
};

const cid = db.get(`${key}.cid`);
const uid = db.get(`${key}.uid`);

db.set(`${key}.devmode`, true)
db.delete(`${key}`)
client.channels.cache.find(`${cid}`).send(`Congrats, As Per The Request Of <@${uid}> Your Request Number (${key}) Was Validated And Thus Your Server Has Been Approved To Use Developer Options.. :tada:`);
message.channel.send(`${key} is now valid`);
},
};
