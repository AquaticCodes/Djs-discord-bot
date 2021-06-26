const db = require("quick.db");
const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
name: "kick",
owner: false,
admins: false,
authorPermisson: ["KICK_MEMBERS"],
botPermisson: ["KICK_MEMBERS", "MANAGE_GUILD"],
run: async (client, message, args) => {

const user = message.mentions.users.first();

const kick = new MessageAttachment("../../assets/mod/self_tag.jpg");

if (!user) {
return message.lineReply("Must Tag One User To Kick From The Server");
}

if (user.id == message.author.id) {
return message.lineReply(`Leave Instead Of Kick xD`, kick);
}

let reason = args.slice(1).trim().join(" ");

if (!reason) {
let reason = "No Reason Specified"
}

let member = message.guild.member(user);

if (!member) { //if no such user is in guild
return message.lineReply("No Such Member Found In This Server!!");
} else {

member.kick(`${reason}`).then(() => { // if member is successfully kicked

message.channel.send(channel_embed);

try { 

/* We are attempting to save data into database

and we are using a try and catch so that everything is safe  and returns error on issues

*/

if (!db.has(`${message.guild.id}.kicked_logs`)) {
db.set(`${message.guild.id}.kicked_logs`, []); //prepare database
db.push(`${message.guild.id}.kicked_logs`, `${message.author.tag} Has kicked ${user.tag} From The Server On ${d} For A Reason Of ${reason}`); //save data into database for later uses..
} else {
db.push(`${message.guild.id}.kicked_logs`, `${message.author.tag} Has kicked ${user.tag} From The Server On ${d} For A Reason Of ${reason}`); //save data into database for later uses..
}

} catch(e) { // what to do with error

if (db.has(`${message.guild.id}_errorspush`)) {
message.author.send("Here Is The Error:" + " " + e).catch(e => { return console.error(e); });
message.channel.send("Unexpected Error Occurred, Check Your DM, If You Didn't Recive DM, Enable DM!!!");
console.error(e);
} else {
message.channel.send("Unexpected Error Occurred!!");
console.error(e);
}

}

user.send(user_embed).catch(e => { return; });

}).catch(e => { //error if the member wasn't able to be kicked out of the server.


if (db.has(`${message.guild.id}_errorspush`)) {
message.author.send("Here Is The Error:" + " " + e).catch(e => { return console.error(e); });
message.channel.send("Unexpected Error Occurred, Check Your DM, If You Didn't Recive DM, Enable DM!!!");
console.error(e);
} else {
message.channel.send("Unexpected Error Occurred!!");
console.error(e);
}

});

}

},
};
