const db = require("quick.db");
const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
name: "ban",
owner: false,
admins: false,
authorPermisson: ["BAN_MEMBERS"],
botPermisson: ["BAN_MEMBERS", "MANAGE_GUILD"],
run: async (client, message, args) => {

const user = message.mentions.users.first();

const ban = new MessageAttachment("../../assets/mod/self_tag.jpg");

if (!user) {
return message.lineReply("Must Tag One User To Kick From The Server");
}

if (user.id == message.author.id) {
return message.lineReply(`Leave Instead Of Self-Ban xD`, kick);
}

let reason = args.slice(1).trim().join(" ");

if (!reason) {
return message.lineReply("Ban Is Case-Sensitive, So Specify A Reason!");
}

let member = message.guild.member(user);

if (!member) { //if no such user is in guild
return message.lineReply("No Such Member Found In This Server!!");
} else {

/*

Making Embeds For Kicked User And Guild

*/

let user_embed = new MessageEmbed()
.setTitle("You Were Banned")
.setDescription(`${message.author.tag} Has Banned You From ${message.guild.name} For ${reason}`);
.setColor("RANDOM");

let channel_embed = new MessageEmbed()
.setTitle(`Banned A Member`)
.setDescription(`${message.author.tag} has Banned ${user.tag} from ${message.guild.name} Successfully`)
.setColor("RANDOM");

/*

At This Point Just Before We Kick The Person Out, 

We Will Match Some Conditions:

-We Will Compare Roles In Different Manner Unless The User Has Enabled Root And Disabled This,

We Do So To Check Out:

- if bot role is less than the person who is to be kicked

- if bot role is exactly equal to the person to be kicked

- if the person who executed the command has less role than the person to be kicked

- if the person executing command has equal role to the person to be kicked!

If Any Of The Above Cases Matches, Then The Execution Of Command Will Stop With A Warn/Error In The Discord Channel

*/

if (!db.has(`${message.guild.id}_root_rolesscan`)) {

if (member.roles.highest.position > message.guild.member(client.user).roles.highest.position) {

return message.lineReply(`Hey Wait, \n But ${user} Has Highest Role Which Is Greater Than Me 😅`);

} else if (member.roles.highest.position == message.guild.member(client.user).roles.highest.position) {

return message.lineReply(`Hey Wait Tho, Did You Look, ${user} And I Have Highest Roles Equal`);

} else if (member.roles.highest.position > message.guild.member(message.author).roles.highest.position) {

return message.lineReply(`You Can't Kick A Person Whose Roles Is Higher Than Of Yours, And Thus You Can't Kick ${user}.`);

} else if (member.roles.highest.position == message.guild.member(message.author).roles.highest.position) {

return message.lineReply(`You Both Have Same Highest Role, So You Just Can't Kick Each Other!!`);

}

}

member.ban({ reason: `${reason}`}).then(() => { // if member is successfully kicked

message.channel.send(channel_embed);

try { 

/* We are attempting to save data into database

and we are using a try and catch so that everything is safe  and returns error on issues

*/

if (!db.has(`${message.guild.id}.banned_logs`)) {
db.set(`${message.guild.id}.banned_logs`, []); //prepare database
db.push(`${message.guild.id}.banned_logs`, `${message.author.tag} Has Banned ${user.tag} From The Server For A Reason Of ${reason}`); //save data into database for later uses..
} else {
db.push(`${message.guild.id}.banned_logs`, `${message.author.tag} Has Banned ${user.tag} From The Server For A Reason Of ${reason}`); //save data into database for later uses..
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
