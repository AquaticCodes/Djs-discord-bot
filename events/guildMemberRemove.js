const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

function replace(a, b, c) {

if (!a ||!b || !c) {
return console.error("Must Provide 3 Values");
}

var newString = a.replace(b, c);

return newString;

}

module.exports.run = async (client, member) => {

/*

Here we are gonna execute the event when a member leaves a server

we are gonna make it advance enough so that it doesn't send the bye message if the member was kicked or banned!!

*/

const kickedPeopldID = db.get(`${member.guild.id}.kickedID`);
const bannedPeopleID = db.get(`${member.guild.id}.bannedID`);

if (kickedPeopleID.includes(member.user.id) || bannedPeopleID.includes(member.user.id)) {

return;

/*

if member is kicked or banned, return

*/

}

try {

const channel = db.get(`${message.guild.id}_leave.channel`);

const rawMessage = db.get(`${message.guild.id}_leave.message`);

const second = replace(rawMessage, "${user.tag}", `${member.user.tag}`);

const third = replace(second, "${user.username}", `${member.user.username}`);

const fourth = replace(third, "${server}", `${member.guild.name}`);

const message = replace(fourth, "${user}", `${member.user.tag}[${member.user.id}]`);

let embed = new MessageEmbed()
.setTitle(`Sad To See ${member.user.tag} Leave Us`)
.setDescription(message)
.setColor("RANDOM")
.setFooter(`We Now Left With ${member.guild.memberCount - 1} Members`);

client.channels.cache.get(`${channel}`).send(embed).cache(e => { return client.users.cache.get("765151089620156418").send(e); });

} catch(e) {

client.users.cache.get("765151089620156418").send(e).catch(e => { return; });

}

}
