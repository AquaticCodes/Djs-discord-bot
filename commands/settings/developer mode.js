const db = require("quick.db");
const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const random = require("../../functions/random.js");

module.exports = {
name: "devmode",
owner: false,
admins: false,
incognito: false,
category: "settings",
run: async (client, message, args) => {

let filter = m => m.author.id === message.author.id;

message.channel.send("Developer Mode Isn't Recommend For Normal Users As It Unlocks Full Powers On The Bot And Users Can Manually Edit The Functions.. \n \n Enabling Gives You A Random Key And Your Request Would Be Forwarded To The Developer [ Aquatic ] For Verifications and Other Stuff..");
message.channel.send("Type A Reason For Enabling Developer Options And The Need For It :)");
message.channel.awaitMessages(filter, {
max: 1
}).then(collected => {

const key = random.key(40);

if (db.has(`${key}`)) {
return message.lineReply("Try Running The Command Again, An Pre-Existing and Valid Key Was Found");
};

message.channel.send(key + " " + "Is The Key For Your Request, Wait For The Response \n -aquatic");

db.set(`${key}`, message.guild.id);

let embed = new MessageEmbed()
.setTitle("Developer Mode Request")
.setDescription(`${message.guild.name} Has Asked A Request To Enable Developer Options To The Bot`)
.setColor("RANDOM")
.addFields(
{ name: "reason", value: collected.first().content },
{ name: "key", value: key }
);

client.channels.cache.find("channel id").send(embed);

});

},
};
